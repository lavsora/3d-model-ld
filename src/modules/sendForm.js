const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const formElements = form.querySelectorAll('input');

    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка!';
    const successText = 'Спасибо! Наш менеджер с вами свяжется!';

    const checkInput = () => {
        formElements.forEach(input => {
            input.addEventListener('invalid', (e) => {
                e.preventDefault();
                
                e.target.classList.add('error');
            });
    
            input.addEventListener('input', (e) => {
                e.preventDefault()
    
                if (e.target.name === 'user_name' && /^[а-яёЁ\s]{2,}$/gi.test(e.target.value)) {
                    e.target.classList.remove('error');
                } else if (e.target.name === 'user_email' && /^[^ ]+@[^ ]+\.[a-z]{2,3}$/gi.test(e.target.value)) {
                    e.target.classList.remove('error');
                } else if (e.target.name === 'user_phone' && /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10,}$/g.test(e.target.value)) {
                    e.target.classList.remove('error');
                }
            });
        });
    }

    const validate = (list) => {
        let success = true;

        list.forEach(input => {
            if (input.classList.contains('error')) {
                success = false;
            }
        })

        return success;
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json())
    }

    const submitForm = (form) => {
        const formData = new FormData(form)
        const formBody = {}

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        statusBlock.textContent = loadText;
        form.append(statusBlock)

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)

            if (elem.type === 'block' && 0 < +element.textContent) {
                formBody[elem.id] = element.textContent
            } else if (elem.type === 'input' && 0 < +element.value) {
                formBody[elem.id] = element.value
            }
        })

        if (formBody.hasOwnProperty('user_message') && formBody.user_message === '') {
            delete formBody.user_message
        }

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText;

                    formElements.forEach(input => {
                        input.value = ''
                    })
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
        } else {
            statusBlock.textContent = 'Ошибка! Введите данные правильно.'
        }
    }

    try {
        if (!form) {
            throw new Error('Не могу найти форму.')
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            submitForm(form)
        })
    } catch (error) {
        console.log(error.message)
    }

    checkInput();
}

export default sendForm;