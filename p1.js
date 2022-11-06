const inputs = [1, 2, 3, 2.5]
const weights = [0.2, 0.8, -0.5, 1.0]
const bias = 2

let sum = bias

for (let i = 0; i < inputs.length; i += 1) {
    sum += inputs[i] * weights[i]
}

console.log(sum)