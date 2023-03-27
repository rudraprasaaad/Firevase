const firebaseConfig = {
    apiKey: "AIzaSyAbGNBte3xSVuTceyP-quZ6GhLh5FCDnBM",
    authDomain: "fir-frontend-d093c.firebaseapp.com",
    databaseURL: "https://fir-frontend-d093c-default-rtdb.firebaseio.com",
    projectId: "fir-frontend-d093c",
    storageBucket: "fir-frontend-d093c.appspot.com",
    messagingSenderId: "968673495384",
    appId: "1:968673495384:web:475b99415119f6d2ba3d2d",
    measurementId: "G-79YZMYKLGJ"
};

//Initialize firebase
firebase.initializeApp(firebaseConfig);

// Reference for the database

var contactFormDB = firebase.database().ref('contactForm');


document.getElementById('contactForm').addEventListener("submit", submitForm);
function submitForm(e){
    e.preventDefault();
    var name = getElementVal('name');
    var emailid = getElementVal('emailid');
    var msgContent = getElementVal('msgContent');
    saveMessages(name, emailid, msgContent);

    document.querySelector('.alert').style.display = "block";

    setTimeout(()=>{
        document.querySelector('.alert').style.display = "none";
    }, 3000)

    document.getElementById('contactForm').reset();
}

    const saveMessages = (name, emailid, msgContent) => {
        var newContactForm = contactFormDB.push();

        newContactForm.set({
            name : name,
            emailid : emailid,
            msgContent : msgContent, 
        });
    };

const getElementVal = (id) => {
    return document.getElementById(id).value;
};