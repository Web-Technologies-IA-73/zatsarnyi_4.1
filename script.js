
const arrA = [];
const arrB = [];

let arrC = [];

for(let i = 0; i < 10; i++){
    arrA.push(Number.parseInt(Math.random() * (100 - 1) + 1));
    arrB.push(Number.parseInt(Math.random() * (100 - 1) + 1));
}

console.log("Массив А" ,arrA)
console.log("Массив B" ,arrB)

function createArr(arrA, arrB){
    let arr = []
    for(let i = 0; i < 10; i++){
        arr.push(arrA[i] - arrB[i]);
    }

    let maxElem = Math.max(...arr);
    let indexOfMaxElem = arr.indexOf(maxElem)
    let firstElem = arr[0];

    console.log('Массив полученный из массивов A и B ',arr)

    arr.splice(indexOfMaxElem, 1, firstElem);
    arr.splice(0, 1, maxElem);

    return arr;
};

arrC = createArr(arrA, arrB);
console.log('Замена мест первого и максимального значения ',arrC)

arrC = bubbleSort(arrC);
console.log("BUBBLE в порядке увелечения", arrC)

function bubbleSort(arr) {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        let wasSwap = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    return arr;
};