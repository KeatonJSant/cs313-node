function dude (first, second, symbol) {
    var first1 = parseInt(first)
    var second1 = parseInt(second)

    switch (symbol) {
        case "+":
            return first1 + second1;
        case "-":
            return first1 - second1;
        case "x": 
            return first1 * second1;
        case "/":
            return first1 / second1;
    } 
}

function doMath (req, res) {
    var symbol = req.query.op
    var first = req.query.fir
    var second = req.query.sec

    var result = dude(first, second, symbol)
    var params = {first: first, second: second, symbol: symbol, result: result}
    res.render("pages/math", params)
}

module.exports = {doMath: doMath};
