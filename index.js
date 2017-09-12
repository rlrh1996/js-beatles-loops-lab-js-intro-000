function theBeatlesPlay(musicians, instruments) {
    var output = [];
    for (let i = 0; i < musicians.length; i++) {
        output.push(`${musicians[i]} plays ${instruments[i]}`)
    };
    return output;
}

function johnLennonFacts(array) {
    var output = array.slice(0);
    for (let i = 0; i < output.length; i++) {
        output[i] = output[i] + "!!!";
    }
    return output;
}

function iLoveTheBeatles(number) {
    var output = [];
    do {
        output.push("I love the Beatles!");
        number++;
    } while (number < 15);
    return output
}
