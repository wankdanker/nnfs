const X = [
    [1, 2, 3, 2.5],
    [2.0, 5.0, -1.0, 2.0],
    [-1.5, 2.7, 3.3, -0.8]
]

class LayerDense {
    constructor(inputs, neurons) {
        this.weights = mArray([inputs, neurons], () => Math.random())
        this.biases = mArray([neurons], () => 0)
    }

    forward(inputs) {
        this.output = sum(dot(inputs, this.weights), this.biases)
    }
}

class ActivationReLU {
    forward(inputs) {
        this.output = max(0, inputs)
    }
}

// console.log(mArray([4, 3], () => Math.random()))
// console.log(new LayerDense(4, 3))

const layer1 = new LayerDense(4, 5)
const layer2 = new LayerDense(5, 2)
const activation1 = new ActivationReLU()
const activation2 = new ActivationReLU()

layer1.forward(X)
activation1.forward(layer1.output)
console.log(activation1.output)
layer2.forward(activation1.output)
// console.log(layer2.output)

function dot(m1, m2) {
    //TODO: check matching shape
    const s1 = shape(m1)
    const s2 = shape(m2)

    let result = new Array(m1.length).fill(null).map(() => new Array(m2[0].length).fill(0))

    for (let i = 0; i < m1.length; i += 1) {
        for (let j = 0; j < m1[0].length; j += 1) {
            for (let k = 0; k < m2[0].length; k += 1) {
                result[i][k] += m1[i][j] * m2[j][k]
            }
        }
    }

    return result
}

/**
 *
 *
 * @param {number[]} shape
 * @param {function} fill
 * @return {Array} 
 */
function mArray(shape, fill) {
    //copy the shape array
    shape = shape.slice()

    const count = shape.shift()

    if (!count) {
        return fill()
    }

    const current = new Array(count)

    for (let x = 0; x < count; x += 1) {
        current[x] = mArray(shape, fill)
    }

    return current
}

function sum(a1, a2) {
    //TODO: check shape
    const s1 = shape(a1)
    const s2 = shape(a2)

    let sums = new Array(a1.length).fill(null).map(() => new Array(a1[0].length).fill(0))

    for (let i = 0; i < a1.length; i += 1) {
        for (let j = 0; j < a1[0].length; j += 1) {
            sums[i][j] = a1[i][j] + a2[j]
        }
    }

    return sums
}

// console.log(max(0, [-1, 2, 5, -3]))
// console.log(max(0, [[-1], [2], [5], [-3]]))
// console.log(max(0, [[[-1]], [[2]], [[5]], [[-3]]]))
function max(val, m1) {
    let result = []

    for (const a of m1) {
        if (Array.isArray(a)) {
            result.push(max(val, a))
        }
        else {
            result.push(Math.max(val, a))
        }
    }

    return result
}

function transpose(m1) {
    const rows = m1[0].length
    const columns = m1.length

    const m2 = new Array(rows).fill(null).map(() => new Array(columns))

    for (let i = 0; i < columns; i += 1) {
        for (let j = 0; j < rows; j += 1) {
            m2[j][i] = m1[i][j]
        }
    }

    return m2
}

function shape(m1) {
    const lengths = []
    let current = m1

    while (Array.isArray(current)) {
        lengths.push(current.length)
        current = current[0]
    }

    return lengths
}