// On load, fill out the current date
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
let date = m + "/" + d + "/" + y;
document.getElementById("date").innerHTML = date;

// Support for hiding the contact details section depending on whether user wants to be anonymous
// checkbox to specify anonymity
let anonymous = document.getElementById("anonymous")

// <div> containing the contact details inputs
let contactDetails = document.getElementById("contact-details")

// toggle display by adding/removing CSS class that sets display: none
function displayContactDetails() {
    contactDetails.classList.toggle("hidden")
}

// listen for click event on anonymous checkbox
anonymous.addEventListener("click", displayContactDetails)

// Support for showing extra questions if the user already reported feedback to the agency
let reported = document.getElementById("reported")
let unreported = document.getElementById("unreported")
let extraquestions = document.getElementById("extra-questions")

// if user selects 'yes' radio button saying previously reported, then show extra questions
function showExtraQuestions() {
    extraquestions.classList.remove("hidden")
}

// if user selects 'no' radio button saying it was NOT reported, then hide extra questions
function hideExtraQuestions() {
    extraquestions.classList.add("hidden")
}

// listen for click events on both radio buttons
reported.addEventListener("click", showExtraQuestions)
unreported.addEventListener("click", hideExtraQuestions)