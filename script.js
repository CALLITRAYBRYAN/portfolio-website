// TAB SYSTEM
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){

for(let tablink of tablinks){
tablink.classList.remove("active-link");
}

for(let tabcontent of tabcontents){
tabcontent.classList.remove("active-tab");
}

event.currentTarget.classList.add("active-link");

document.getElementById(tabname).classList.add("active-tab");

}


// MOBILE MENU
const MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight="0px";

function openmenu(){
MenuItems.style.maxHeight="200px";
}

function closemenu(){
MenuItems.style.maxHeight="0px";
}


// CONTACT FORM
const scriptURL='https://script.google.com/macros/s/AKfycbwg3BOicJRNWYcTTkElTKBOq1Xu9Ct-8rvMwhCjnl623XZdAcQHHmt92S07plThtdDHtQ/exec'

const form = document.forms['submit-to-google-sheet']
const formMessage = document.getElementById("form-message")
form.addEventListener('submit', e => {
  e.preventDefault()
  // Simulate submission
  formMessage.innerHTML="Message sent successfully"
  formMessage.style.display = "block";
  formMessage.style.color="#61b752";
  setTimeout(function(){
      form.reset()
      formMessage.style.display = "none";
  }, 5000)
  // Uncomment below to enable actual submission
  /*
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        formMessage.innerHTML="Message sent successfully"
        formMessage.style.display = "block";
        formMessage.style.color="#61b752";
        setTimeout(function(){
            form.reset()
            formMessage.style.display = "none";
        }, 5000)
    })
    .catch(error => console.error('Error!', error.message))
  */
})

// ANIMATIONS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({

behavior:"smooth"

});

});

});