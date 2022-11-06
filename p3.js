const inputs = [1, 2, 3, 2.5]
const weights = [
    [0.2, 0.8, -0.5, 1.0],
    [0.5, -0.91, 0.26, -0.5],
    [-0.26, -0.27, 0.17, 0.87]
]

const biases = [
    2,
    3,
    0.5
]

const outputs = []

for (let a = 0; a < weights.length; a += 1) {
    let w = weights[a]
    let sum = biases[a]

    for (let i = 0; i < inputs.length; i += 1) {
        sum += inputs[i] * w[i]
    }
    outputs.push(sum)
}

console.log(outputs)
console.log(sum(dot(weights, inputs), biases))

function dot(m1, m2) {
    //TODO: check matching shape
    let sums = []

    for (let i = 0; i < m1.length; i += 1) {
        let array = m1[i]
        let sum = 0

        for (let j = 0; j < array.length; j += 1) {
            sum += array[j] * m2[j]
        }

        sums.push(sum)
    }

    return sums
}

function sum(a1, a2) {
    //TODO: check shape
    let sums = []

    for (let i = 0; i < a1.length; i += 1) {
        sums[i] = a1[i] + a2[i]
    }

    return sums
}