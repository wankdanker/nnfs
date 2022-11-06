const X = [
    [1, 2, 3, 2.5],
    [2.0, 5.0, -1.0, 2.0],
    [-1.5, 2.7, 3.3, -0.8]
]

class LayerDense {
    constructor () {

    }

    forward() {
        
    }
}


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