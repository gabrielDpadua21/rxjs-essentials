function generateNumbers() {
    return {
        iniciar(fn, interval = 1000) {
            let num = 0;
            const fnInterval = setInterval(() => {
                fn(num++);
            }, interval);

            return {
                stop() {
                    clearInterval(fnInterval);
                }
            }
        }
    }
}

const temp1 = generateNumbers();

const exec01 =temp1.iniciar(num => {
    console.log(`#temp01: ${Math.pow(2, num)}`);
}, 5000);

const temp2 = generateNumbers();

const exec02 = temp2.iniciar(num => {
    console.log(`#temp02: ${Math.pow(3, num)}`);
}, 1000);

setInterval(() => {
    exec01.stop();
}, 5000);

setTimeout(() => {
    exec02.stop();
}, 9000)
