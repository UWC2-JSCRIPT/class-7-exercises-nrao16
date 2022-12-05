// TODO
// To see the ValidityState - it is a prototype object included inside the HTMLInputElement!
// In the console - highlight the input box and type $0.__proto__ - you will see that the ValidityState is inherited
// bootstrap does the styling, the validity object helps with the validation!
// ensure dom fully loaded

document.addEventListener("DOMContentLoaded", function () {

    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const form = document.getElementById('connect-form');

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
                console.log(currentElement.value);
                currentElement.setCustomValidity(`Has to be a valid Email`);
                currentElement.reportValidity();
            }
        }
    }

    firstName.addEventListener('input', checkValidation);
    lastName.addEventListener('input', checkValidation);
    email.addEventListener('input', checkValidation)

    form.addEventListener('submit', (e) => {
        if (!firstName.validity.valid || !lastName.validity.valid || !email.validity.valid) {
            e.preventDefault();
        }
    });
});