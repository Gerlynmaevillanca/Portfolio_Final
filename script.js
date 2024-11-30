// Initialize EmailJS with your user ID
(function(){
  emailjs.init("DWQ5O_FdNCetm3WLC");
})();


// Function to send email using EmailJS
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Send the email using the form data
  console.log(this)
  emailjs.sendForm('service_mzmvlt1', 'template_0a9jmfq', this)
      .then(function() {
          alert('Message Sent Successfully!');
      }, function(error) {
          alert('Failed to send the message: ' + JSON.stringify(error));
      });
});