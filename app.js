let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (euroAmmount) => {
    let dollarResult = euroAmmount * oneEuroIs.USD;
    return dollarResult;
}

const fromDollartoYen = (dollarAmmount) => {
    let yenResult = (dollarAmmount / oneEuroIs.USD) * oneEuroIs.JPY;
    return yenResult;
}

const fromYentoPound = (yenAmmount) => {
    let poundResult = (yenAmmount / oneEuroIs.JPY) * oneEuroIs.GBP;
    return poundResult;
}
module.exports = { fromEuroToDollar, fromYentoPound, fromDollartoYen};
