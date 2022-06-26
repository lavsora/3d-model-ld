import { animate, quad, makeEaseOut } from "./animation";

const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    const popupContent = modal.querySelector('.popup-content');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if(window.innerWidth >= 768) {
                animate({
                    timing: makeEaseOut(quad),
                    draw(progress) {
                        modal.style.opacity = progress;
                        popupContent.style.transform = `scale(${progress})`;
                        modal.style.display = 'block';
                    },
                    duration: 700
                })
            } else {
                modal.style.opacity = '1';
                popupContent.style.transform = `scale(1)`;
                modal.style.display = 'block';
            }
        })
    })

    closeBtn.addEventListener('click', () => {
        if(document.documentElement.clientWidth >= 768) {
            animate({
                timing: makeEaseOut(quad),
                draw(progress) {
                    modal.style.opacity = 1 - progress;
                    popupContent.style.transform = `scale(${1 - progress})`;
                    if ( progress >= 1) modal.style.display = 'none';
                },
                duration: 700
            })
        } else {
            modal.style.opacity = '0';
            popupContent.style.transform = `scale(0)`;
            modal.style.display = 'none';
        }
    })

}

export default modal;