const animation = {
    animate: ({ timing, draw, duration }) => {
        let start = performance.now();

        requestAnimationFrame(function animate(time) {
            let timeFraction = (time - start) / duration;

            if (timeFraction > 1) timeFraction = 1;

            const progress = timing(timeFraction);

            draw(progress);

            if (timeFraction < 1) requestAnimationFrame(animate);
        });
    },
    quad: (timeFraction) => {
        return Math.pow(timeFraction, 2)
    },
    makeEaseOut: (timing) => {
        return function (timeFraction) {
            if (timeFraction < .5)
                return timing(2 * timeFraction) / 2;
            else
                return (2 - timing(2 * (1 - timeFraction))) / 2;
        }
    },
    runAnimation: ({modal, popupContent, drawToggle}) => {
        animation.animate({
            timing: animation.makeEaseOut(animation.quad),
            draw(progress) {
                if (drawToggle === true) {
                    if (progress < .5) modal.style.opacity = progress * 2.5;

                    if (progress < 1) {
                        popupContent.style.transform = `scale(${progress * 1})`;
                        modal.style.display = 'block';
                    }  
                }

                if (drawToggle === false) {
                    if (progress < 1) {
                        popupContent.style.transform = `scale(${1 - progress * 1})`;
                        modal.style.opacity = 1 - progress * 2.5
                    };

                    if ( progress >= .5) modal.style.display = 'none';
                }
                
            },
            duration: 700
        })
    }
}

export const runAnimation = animation.runAnimation;