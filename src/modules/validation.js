const validation = () => {
    const formNameInput = document.querySelectorAll('.form-name');
    const formEmailInput = document.querySelectorAll('.form-email');
    const formPhoneInput = document.querySelectorAll('.form-phone');
    const formMessInput = document.querySelector('.mess')
    const calcSquareInput = document.querySelector('.calc-square');
    const calcCountInput = document.querySelector('.calc-count');
    const calcDayInput = document.querySelector('.calc-day');

    formNameInput.forEach(inputName => {
        inputName.addEventListener('blur', (e) => {
            let strArr = e.target.value.split(' ');

            for (var i = 0; i < strArr.length; i++) {
                strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
            }

            e.target.value = strArr.join(' ');

            e.target.value = e.target.value.replace(/[^а-я\s\-]/gi, '').trim()
            e.target.value = e.target.value.replace(/\s+/g, ' ');
            e.target.value = e.target.value.replace(/\--+/g, '-');
            e.target.value = e.target.value.replace(/(^\-+|\-+$)/g, '');
        });
    });

    formEmailInput.forEach(inputEmail => {
        inputEmail.addEventListener('blur', (e) => {
            e.target.value = e.target.value.replace(/[^\w\@\_\.\!\~\*\'\-]/gi, '').trim()
            e.target.value = e.target.value.replace(/\--+/g, '-');
            e.target.value = e.target.value.replace(/(^\-+|\-+$)/g, '');
        });
    });

    formPhoneInput.forEach(inputPhone => {
        inputPhone.addEventListener('blur', (e) => {
            e.target.value = e.target.value.replace(/[^\(\)\-\d]/g, '').trim()
            e.target.value = e.target.value.replace(/\--+/g, '-');
            e.target.value = e.target.value.replace(/(^\-+|\-+$)/g, '');
        });
    });

    formMessInput.addEventListener('blur', (e) => { 
        let strArr = e.target.value.split(' ');

            for (var i = 0; i < strArr.length; i++) {
                strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
            }

            e.target.value = strArr.join(' ');

            e.target.value = e.target.value.replace(/[^а-я\s\-]/gi, '').trim()
            e.target.value = e.target.value.replace(/\s+/g, ' ');
            e.target.value = e.target.value.replace(/\--+/g, '-');
            e.target.value = e.target.value.replace(/(^\-+|\-+$)/g, '');
    });

    calcSquareInput.addEventListener('blur', (e) => {
        e.target.value = e.target.value.replace(/\D+/, '').trim()
    });

    calcCountInput.addEventListener('blur', (e) => {
        e.target.value = e.target.value.replace(/\D+/, '').trim()
    });

    calcDayInput.addEventListener('blur', (e) => {
        e.target.value = e.target.value.replace(/\D+/, '').trim()
    });
}

export default validation;