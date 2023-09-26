function sendMail(contactForm) {
    emailjs.send("gmail","template_mish",{
        project_request: contactForm.projectsummary.value,
        from_name: contactForm.name.value,
        from_email: contactForm.emailaddress.value
        })
        .then(
            function(response) {
                console.log("Success", response);
            },
            function(error) {
               console.log("Failed", error);
            });
return false;
}