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
    }
}

export const animate = animation.animate;
export const quad = animation.quad;
export const makeEaseOut = animation.makeEaseOut;