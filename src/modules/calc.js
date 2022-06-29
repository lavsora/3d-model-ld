const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = calcBlock.querySelector('.calc-type');
    const calcSquare = calcBlock.querySelector('.calc-square');
    const calcCount = calcBlock.querySelector('.calc-count');
    const calcDay = calcBlock.querySelector('.calc-day');
    const total = document.getElementById('total');

    let outTotalDebounce;

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = calcSquare.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;

        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }

        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
        } else {
            totalValue = 0;
        }

        return totalValue;
    }

    const debounce = (fn, ms) => {
        let timeOut;
    
        return function () {
            const fnCall = () => { fn.apply(this, arguments) }
    
            clearTimeout(timeOut);
    
            timeOut = setTimeout(fnCall, ms)
        }
    }

    const outTotal = (totalCalc, num, time) => {
        const step = 10;

        if (totalCalc > 0) {
            let timeStep = Math.round(time / (totalCalc / step));
            let idInterval = setInterval(() => {
                num = num + step;

                if (num === totalCalc) {
                    clearInterval(idInterval);
                } else if (num > totalCalc) {
                    clearInterval(idInterval);
                }

                total.textContent = num;
            }, timeStep)
        } else {
            return
        }
    }

    outTotalDebounce = debounce(outTotal, 300)

    calcBlock.addEventListener('input', (e) => {
        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay) {
            outTotalDebounce(countCalc(), 0, 300)
        }
    })
}

export default calc;