function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();


// For form submission

const scriptURL = 'https://script.google.com/macros/s/AKfycbyekM1pNeu5MG5DufK1JiO_f8tEiwnIhxJEZ_-SWyKHrCptHwAj/exec'
const form = document.forms['submit-to-google-sheet']
  


form.addEventListener('submit', e => {
  e.preventDefault();

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => showSuccessMessage(response))
   .catch(error => showErrorMessage(error))
 })

 function showSuccessMessage (response) {
   document.getElementById("contact_form").reset();
   alert('Success!');
 }
 function showErrorMessage (error) {
    alert('Error!',error);
  }

  function validateEmail(email) 
{
    var re = /\S+@\S+/;
    return re.test(email);
}
