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

const reverse = (timing) => {
    return function (timeFraction) {
        return timing(1 - timeFraction);
    }
}

const animateModal = ({ modal, popupContent, isOpened }) => {
    animate({
        timing: isOpened ? makeEaseOut(quad) : reverse(makeEaseOut(quad)),
        draw(progress) {
            if (isOpened) {
                if (progress < .5) modal.style.opacity = progress * 2.1;
                if (progress < 1) {
                    popupContent.style.transform = `scale(${progress})`;
                    modal.style.display = 'block';
                };
            }

            if (!isOpened) {
                if (progress < .5) modal.style.display = 'none';
                if (progress < 1) {
                    popupContent.style.transform = `scale(${progress})`;
                    modal.style.opacity = progress;
                };
            } 
        },
        duration: 700
    })
}

const animateValue = (total, {totalValue, lastValue}) => {
    animate({
        timing: makeEaseOut(quad),
        draw(progress) {
            if (lastValue === 0) total.textContent = Math.floor(totalValue * progress)
            if (lastValue > 0) total.textContent = lastValue + Math.floor((totalValue - lastValue) * progress)
        },
        duration: 600
    })
}

export { animateModal, animateValue };