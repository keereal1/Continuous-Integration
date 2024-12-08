// const { calculateTotal } = require('../src/calculate')

// test('basic test', () => {
//     const result = 4;
//     expect(result).toBe(4)
// })

// test('calculateTotal sum', () => {
//     const list = [
//         {
//             id: 456,
//             name: 'Война и мир',
//             count: 3,
//             price: 400
//         },
//         {
//             id: 123,
//             name: 'JavaScript',
//             count: 1,
//             price: 1400
//         }
//     ]

//     const result = calculateTotal(list)
//     expect(result).toBe(2600)
// })  


//формат для import/export

import { calculateTotal } from '../calculate'

test('calculateTotal sum without discount', () => {
    const list = [
        {
            id: 456,
            name: 'Война и мир',
            count: 3,
            price: 400
        },
        {
            id: 123,
            name: 'JavaScript',
            count: 1,
            price: 1400
        }
    ]

    const result = calculateTotal(list)
    expect(result).toBe(2600)
})  

test('calculateTotal sum with discount', () => {
    const list = [
        {
            id: 456,
            name: 'Война и мир',
            count: 3,
            price: 400
        },
        {
            id: 123,
            name: 'JavaScript',
            count: 1,
            price: 1400
        }
    ]

    const result = calculateTotal(list, true)
    expect(result).toBe(1300)
})  