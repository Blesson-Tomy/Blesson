function submitForm()
{
    var form = document.getElementById("form").submit();
    google.script.run.sendForm(form);
}

function sendForm(form)
{
    var emailAddress = "blessonkarikulam@gmail.com";
    var subject = "New Form Submission";
    var message = "Name: " + formData.name + "\nEmail: " + formData.email + "\nMessage: " + formData.message;
    MailApp.sendEmail(emailAddress, subject, message);
  }