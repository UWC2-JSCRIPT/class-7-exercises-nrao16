// TODO
// To see the ValidityState - it is a prototype object included inside the HTMLInputElement!
// In the console - highlight the input box and type $0.__proto__ - you will see that the ValidityState is inherited
// bootstrap does the styling, the validity object helps with the validation!
// ensure dom fully loaded

document.addEventListener("DOMContentLoaded", function () {

    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const form = document.querySelector("form");

    const checkStringLength = (maxLength, inputValue) => inputValue.length < maxLength;

    const checkValidation = (e) => {
        const allValid = false;
        checkStringLength(3, firstName.value);
        if (firstName.value.length < 3) {
            firstName.validity.valid = false;
            firstName.setCustomValidity(`Your name is too short`);
            // need to report it to show the tooltip - for some reason it shows up on 2nd submit click if not put in
            firstName.reportValidity();
            localStorage.setItem('Invalid first name', 'true');
        } else {
            firstName.validity.valid = true;
            allValid = true;
        }

        if(!allValid) {
            e.preventDefault();
        }
    }

    //firstName.addEventListener('change', (e) => checkValidation(e));
    form.addEventListener('submit', (e) => checkValidation(e));
});