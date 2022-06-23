const validation = () => {
    const formNameInput = document.querySelectorAll('.form-name');
    const formEmailInput = document.querySelectorAll('.form-email');
    const formPhoneInput = document.querySelectorAll('.form-phone');
    const formMessInput = document.querySelector('.mess')
    const calcSquareInput = document.querySelector('.calc-square');
    const calcCountInput = document.querySelector('.calc-count');
    const calcDayInput = document.querySelector('.calc-day');

    formNameInput.forEach(inputName => {
        inputName.addEventListener('input', (e) => e.target.value = e.target.value.replace(/[^а-я\s\-]/gi, ''));
    });

    formEmailInput.forEach(inputEmail => {
        inputEmail.addEventListener('input', (e) => e.target.value = e.target.value.replace(/[^\w\@\_\.\!\~\*\'\-]/gi, ''));
    });

    formPhoneInput.forEach(inputPhone => {
        inputPhone.addEventListener('input', (e) => e.target.value = e.target.value.replace(/[^\(\)\-\d]/g, ''));
    });

    formMessInput.addEventListener('input', (e) => e.target.value = e.target.value.replace(/[^а-я\s\-]/gi, ''));

    calcSquareInput.addEventListener('input', (e) => e.target.value = e.target.value.replace(/\D+/, ''));
    calcCountInput.addEventListener('input', (e) => e.target.value = e.target.value.replace(/\D+/, ''));
    calcDayInput.addEventListener('input', (e) => e.target.value = e.target.value.replace(/\D+/, ''));
}

export default validation;