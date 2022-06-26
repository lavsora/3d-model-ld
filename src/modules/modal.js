const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    const popupContent = modal.querySelector('.popup-content');

    const animate = ({ timing, draw, duration }) => {
        let start = performance.now();

        requestAnimationFrame(function animate(time) {
            let timeFraction = (time - start) / duration;

            if (timeFraction > 1) timeFraction = 1;

            const progress = timing(timeFraction);

            draw(progress);

            if (timeFraction < 1) requestAnimationFrame(animate);
        });
    }

    const quad = (timeFraction) => {
        return Math.pow(timeFraction, 2)
    }

    const makeEaseOut = (timing) => {
        return function (timeFraction) {
            if (timeFraction < .5)
                return timing(2 * timeFraction) / 2;
            else
                return (2 - timing(2 * (1 - timeFraction))) / 2;
        }
    }

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