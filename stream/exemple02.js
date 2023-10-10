const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function fromArray(array) {
    return {
        init(fn) {
            index = 0;
            const fnInterval = setInterval(() => {
                if(index >= array.length) clearInterval(fnInterval);
                if(index < array.length) fn(array[index]);
                index++;
            }, 1000)

            return {
                stop() {
                    clearInterval(fnInterval)
                }
            }
        }
    }
}


const temp01 = fromArray(numbers)

const sub01 = temp01.init(num => console.log(`#1.1: ${Math.pow(2, num)}`))

setTimeout(() => {
    sub01.stop()
}, 8000)

const temp02 = fromArray(['Frajola', 'Thor', 'Lucyfer', 'Zeus'])

setTimeout(() => {
    temp02.init(cat => console.log(`#1.2: ${cat}`))
}, 9000)

