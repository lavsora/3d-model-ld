const validation = () => {
    const formNameInput = document.querySelectorAll('input[name="user_name"]');
    const formEmailInput = document.querySelectorAll('.form-email');
    const formMessInput = document.querySelector('.mess');
    const calcSquareInput = document.querySelector('.calc-square');
    const calcCountInput = document.querySelector('.calc-count');
    const calcDayInput = document.querySelector('.calc-day');

    function maskPhone(selector, masked = '+7 (__) --') {
        const elems = document.querySelectorAll(selector);

        function mask(event) {
            const keyCode = event.keyCode;
            const template = masked,
                def = template.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, "");
            let i = 0,
                newValue = template.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
                });
            i = newValue.indexOf("_");
            if (i != -1) {
                newValue = newValue.slice(0, i);
            }
            let reg = template.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}";
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                this.value = newValue;
            }
            if (event.type == "blur" && this.value.length < 5) {
                this.value = "";
            }

        }

        for (const elem of elems) {
            elem.addEventListener("input", mask);
            elem.addEventListener("focus", mask);
            elem.addEventListener("blur", mask);
        }
    }

    formNameInput.forEach(inputName => {
        inputName.addEventListener('input', (e) => e.target.value = e.target.value.replace(/[^а-я\s]/gi, ''));

        inputName.addEventListener('blur', (e) => {
            e.target.value = e.target.value.replace(/\s{2,}/g, ' ');
            e.target.value = e.target.value.replace(/^[\s]+|[\s]+$/g, '');

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

    formMessInput.addEventListener('input', (e) => e.target.value = e.target.value.replace(/[^а-я\s\-\!\?\,\:\;\(\)\"\.0-9]/gi, ''));

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

    maskPhone('.form-phone', '+7 (___) ___-__-__');
}

export default validation;