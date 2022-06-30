import { animateModal } from "./helper";

const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const popupContent = modal.querySelector('.popup-content');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if(window.innerWidth >= 768) {
                animateModal({ modal, popupContent, isOpened: true });
                modal.style.display = 'block';
            } else {
                modal.style.opacity = '1';
                popupContent.style.transform = `scale(1)`;
                modal.style.display = 'block';
            }
        })
    })

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            if(document.documentElement.clientWidth >= 768) {
                animateModal({ modal, popupContent, isOpened: false });
            } else {
                modal.style.opacity = '0';
                popupContent.style.transform = `scale(0)`;
                modal.style.display = 'none';
            }
        }
    })

}

export default modal;