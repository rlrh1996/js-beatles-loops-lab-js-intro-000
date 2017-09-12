function theBeatlesPlay(musicians, instruments) {
    var output = []
    for (let i = 0; i < musicians.length; i++) {
        output.push(`${musicians[i]} plays ${instruments[i]}`)
    }
    return output;
}
