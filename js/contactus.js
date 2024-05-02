const fname = document.getElementById('fname');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submit = document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit',(e)=>{
    e.preventDefault();

    // Validate the form inputs
    const nameValue = fname.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
  
    if (nameValue.length < 4) {
        alert("Please enter a name longer than 3 characters.");
        return;
    }

    if (!emailValue.includes("@") || !emailValue.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    if (messageValue === "") {
        alert("Please enter a message.");
        return;
    }

    let ebody = `
    <h1>Full name: </h1>${nameValue}
    <br>
    <h1>Email: </h1>${emailValue}
    <br>
    <h1>Message: </h1>${messageValue}
    `;

    Email.send({
        SecureToken : "cf34d183-8d72-4ef7-b1fa-4a755388c49a", //add your token here
        To : 'hassan@gmail.com', 
        From : "hassan@gmail.com",
        Subject : "Taste Of Syrian Food",
        Body : ebody
    }).then(
        message => {
            alert("Message Sent Successfully");
            submit.reset(); // Reset the form inputs
        }
    ).catch((error) => {
        console.error("Error sending message:", error);
        alert("An error occurred while sending your message. Please try again later.");
    });
});