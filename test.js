test("One euro should be 1.206 dollars", function(){

    const { fromEuroToDollar } = require('./app.js')

    const dollars = fromEuroToDollar(3.5)

    const expected = 3.5 * 1.2; 
    
     expect(fromEuroToDollar(3.5)).toBe(4.2); 
})

test("One dollar should be 127.9 yen", function(){

    const { fromDollartoYen } = require('./app.js')

    const expected = (3.5 / 1.2) * 127.9; 
    
     expect(fromDollartoYen(3.5)).toBe(expected); 
})

test("One yen should be 0.8 pounds", function(){

    const { fromYentoPound } = require('./app.js')

    const expected = (3.5 / 127.9) * 0.8; 
    
     expect(fromYentoPound(3.5)).toBe(expected); 
})