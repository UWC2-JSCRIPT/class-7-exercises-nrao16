// NOTES TO SELF - To see the ValidityState - it is a prototype object included inside the HTMLInputElement!
// In the console - highlight the input box and type $0.__proto__ - you will see that the ValidityState is inherited
// bootstrap does the styling, the validity object helps with the validation!
// Make sure to reset customValidity before checking for errors and setting an error message

// ensure dom fully loaded

document.addEventListener("DOMContentLoaded", function () {

    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const form = document.querySelector('#contact-me-form');
    const message = document.querySelector('#message');
    const contactReason = document.querySelector('#contact-reason');
    const jobTitleForm = document.querySelector('#job-title-form');
    const jobTitle = document.querySelector('#job-title');
    const companyWebsiteForm = document.querySelector('#company-website-form');
    const companyWebsite = document.querySelector('#company-website');
    const codeLangForm = document.querySelector('#code-lang-form');
    const codeLang = document.querySelector('#code-lang');

    // common validation for all input fields
    function checkValidation(e) {
        let currentElement = e.target;
        // without this the tool tip keeps showing!
        currentElement.setCustomValidity("");

        // dyanmically figure out which label or field is not valid to generate appropriate error messages
        let currentLabel = document.querySelector(`#${currentElement.id}-label`);
        if (!currentElement.validity.valid) {
            if (currentElement.validity.tooShort) {
                currentElement.setCustomValidity(`${currentLabel?.textContent} has to be minimum of ${currentElement.minLength} characters.`);
            }
            if (currentElement.validity.typeMismatch) {
                currentElement.setCustomValidity(`${currentLabel?.textContent} has to be a valid ${currentElement.type}.`);
            }
            currentElement.reportValidity();
        }
    }

    // to hide or display additional fields based on selected option
    const selectEventHandler = function (e) {
        if (e.target.value === "job") {
            jobTitleForm.classList.remove("hide");
            companyWebsiteForm.classList.remove("hide");
        } else {
            jobTitleForm.classList.add("hide");
            companyWebsiteForm.classList.add("hide");
        }
        e.target.value === "talk" ? codeLangForm.classList.remove("hide") : codeLangForm.classList.add("hide");
    }

    // add all the appropriate event handlers
    name.addEventListener('input', checkValidation);
    email.addEventListener('input', checkValidation)
    message.addEventListener('input', checkValidation);

    contactReason.addEventListener('change', selectEventHandler);
    jobTitle.addEventListener('input', checkValidation);
    companyWebsite.addEventListener('input', checkValidation);

    // final check for all visible elements in form
    form.addEventListener('submit', (e) => {
        const validationElements = Array.from(document.querySelectorAll('.validate-input'));
        validationElements.forEach(el => {

            if (!el.validity.valid && !el.parentElement.classList.contains("hide")) {
                el.reportValidity();
                e.preventDefault();
            }

        });
    });
});