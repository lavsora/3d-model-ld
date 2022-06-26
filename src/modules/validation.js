const validation = () => {
    const formNameInput = document.querySelectorAll('input[name="user_name"]');
    const formEmailInput = document.querySelectorAll('.form-email');
    const formPhoneInput = document.querySelectorAll('.form-phone');
    const formMessInput = document.querySelector('.mess')
    const calcSquareInput = document.querySelector('.calc-square');
    const calcCountInput = document.querySelector('.calc-count');
    const calcDayInput = document.querySelector('.calc-day');

    formNameInput.forEach(inputName => {
        inputName.addEventListener('input', (e) => e.target.value = e.target.value.replace(/[^а-я\s\-]/gi, ''));

        inputName.addEventListener('blur', (e) => {
            e.target.value = e.target.value.replace(/\s{2,}/g, ' ');
            e.target.value = e.target.value.replace(/\-{2,}/g, '-');
            e.target.value = e.target.value.replace(/^[\s\-]+|[\s\-]+$/g, '');

            let strArr = e.target.value.split(' ');

            for (var i = 0; i < strArr.length; i++) {
                strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
            }

            e.target.value = strArr.join(' ');
        });
    });

    formEmailInput.forEach(inputEmail => {
        inputEmail.addEventListener('input', (e) => e.target.value = e.target.value.replace(/[^\w\@\_\.\!\~\*\'\-]/gi, ''));

        inputEmail.addEventListener('blur', (e) => {
            e.target.value = e.target.value.replace(/\-{2,}/g, '-');
            e.target.value = e.target.value.replace(/^[\-]+|[\-]+$/g, '');
        });
    });

    formPhoneInput.forEach(inputPhone => {
        inputPhone.addEventListener('input', (e) => e.target.value = e.target.value.replace(/[^\(\)\-\d]/g, ''));

        inputPhone.addEventListener('blur', (e) => {
            e.target.value = e.target.value.replace(/\-{2,}/g, '-');
            e.target.value = e.target.value.replace(/^[\-]+|[\-]+$/g, '');
        });
    });

    formMessInput.addEventListener('input', (e) => e.target.value = e.target.value.replace(/[^а-я\s\-]/gi, ''));

    formMessInput.addEventListener('blur', (e) => {
        e.target.value = e.target.value.replace(/\s{2,}/g, ' ');
        e.target.value = e.target.value.replace(/\-{2,}/g, '-');
        e.target.value = e.target.value.replace(/^[\s\-]+|[\s\-]+$/g, '');

        let strArr = e.target.value.split(' ');

        for (var i = 0; i < strArr.length; i++) {
            strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
        }

        e.target.value = strArr.join(' ');
    });

    calcSquareInput.addEventListener('input', (e) => e.target.value = e.target.value.replace(/\D+/, ''));
    calcCountInput.addEventListener('input', (e) => e.target.value = e.target.value.replace(/\D+/, ''));
    calcDayInput.addEventListener('input', (e) => e.target.value = e.target.value.replace(/\D+/, ''));
}

export default validation;