// TODO
// TODO
// To see the ValidityState - it is a prototype object included inside the HTMLInputElement!
// In the console - highlight the input box and type $0.__proto__ - you will see that the ValidityState is inherited
// bootstrap does the styling, the validity object helps with the validation!
// ensure dom fully loaded

document.addEventListener("DOMContentLoaded", function () {

    const firstName = document.querySelector('#first-name');
    const lastName = document.querySelector('#last-name');
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

    function checkValidation(e) {
        let currentElement = e.target;
        // console.log(`id:${currentElement.id}, value:${currentElement.value}, length:${currentElement.value.length}
        // , valid:${currentElement.validity.valid}`);

        // without this the tool tip keeps showing!
        currentElement.setCustomValidity("");
        if (currentElement.id === 'first-name' ||
            currentElement.id === 'last-name') {
            if (!currentElement.validity.valid) {
                currentElement.setCustomValidity(`Name has to be minimum of ${currentElement.minLength} letters`);
                currentElement.reportValidity();
            }
        } else if (currentElement.id === 'email') {
            if (!currentElement.validity.valid) {
                //console.log(currentElement.value);
                currentElement.setCustomValidity(`Has to be a valid Email`);
                currentElement.reportValidity();
            }
        } else if (currentElement.id === 'message') {
            if (!currentElement.validity.valid) {
                //console.log(currentElement.value);
                currentElement.setCustomValidity(`Message has to be minimum of ${currentElement.minLength} letters`);
                currentElement.reportValidity();
            }
        } else if (currentElement.id === 'job-title') {
            if (!currentElement.validity.valid) {
                //console.log(currentElement.value);
                currentElement.setCustomValidity(`Message has to be minimum of ${currentElement.minLength} letters`);
                currentElement.reportValidity();
            } 
        } else if (currentElement.id === 'company-website') {
            if (!currentElement.validity.valid) {
                //console.log(currentElement.value);
                currentElement.setCustomValidity(`Has to be a valid URL`);
                currentElement.reportValidity();
            }
        } else if (currentElement.id === 'code-lang') {
            if (!currentElement.validity.valid) {
                //console.log(currentElement.value);
                currentElement.setCustomValidity(`Code language is required`);
                currentElement.reportValidity();
            }
        } 
    }

    const selectEventHandler = function (e) {
        if(e.target.value === "job") {
            jobTitleForm.classList.remove("hide") ;
            companyWebsiteForm.classList.remove("hide");
        } else {
            jobTitleForm.classList.add("hide");
            companyWebsiteForm.classList.add("hide");
        }
        e.target.value === "talk" ? codeLangForm.classList.remove("hide") : codeLangForm.classList.add("hide");
    }

        firstName.addEventListener('input', checkValidation);
        lastName.addEventListener('input', checkValidation);
        email.addEventListener('input', checkValidation)
        message.addEventListener('input', checkValidation);
        contactReason.addEventListener('select', checkValidation);
        contactReason.addEventListener('change', selectEventHandler);
        jobTitle.addEventListener('input', checkValidation);
        codeLang.addEventListener('input', checkValidation);
        companyWebsite.addEventListener('input', checkValidation);

        form.addEventListener('submit', (e) => {
            if (!firstName.validity.valid
                || !lastName.validity.valid
                || !email.validity.valid
                || !message.validity.valid
                || !contactReason.validity.valid) {
                e.preventDefault();
            }
            else if(contactReason.value === "") { 
                console.log("stop")
                contactReason.setCustomValidity('Contact reason is required');
                contactReason.reportValidity();  
                e.preventDefault;              
            } else {
                if(contactReason === "job" && 
                (!jobTitle.validity.valid || !companyWebsite.validity.valid) ) {
                    e.preventDefault;
                } else if(contactReason === "talk" &&
                !codeLang.validity.valid) {
                    e.preventDefault;
                }
            }             
        });
    });