const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    const popupContent = modal.querySelector('.popup-content');

    const animate = ({ timing, draw, duration }) => {
        let start = performance.now();

        requestAnimationFrame(function animate(time) {
            let timeFraction = (time - start) / duration;
            console.log(timeFraction)

            if (timeFraction > 1) timeFraction = 1;

            const progress = timing(timeFraction);

            draw(progress);

            if (timeFraction < 1) requestAnimationFrame(animate);
        });
    }

    // const animateReverse = ({ timing, draw, duration }) => {
    //     let start = performance.now();

    //     requestAnimationFrame(function animate(time) {
    //         let timeFraction =  duration / (time - start);
    //         console.log(timeFraction)

    //         if (timeFraction < 0) timeFraction = 0;

    //         const progress = timing(timeFraction);

    //         draw(progress);

    //         if (timeFraction > 0) requestAnimationFrame(animate);
    //     });
    // }

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
            animate({
                timing: makeEaseOut(quad),
                draw(progress) {
                    modal.style.opacity = progress;
                    popupContent.style.transform = `scale(${progress})`;
                    modal.style.display = 'block';
                },
                duration: 700
            })

        })
    })

    closeBtn.addEventListener('click', () => {
        // animateReverse({
        //     timing: makeEaseOut(quad),
        //     draw(progress) {
        //         modal.style.opacity = progress;
        //         popupContent.style.transform = `scale(${progress})`;
        //         modal.style.display = 'none';
        //     },
        //     duration: 1000
        // })
        modal.style.display = 'none';
    })
}

export default modal;