function submitForm()
{
    var form = document.getElementById("myForm").submit();
    google.script.run.sendForm(form);
}

