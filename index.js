const challengeFunction = function(cell){
    let result = 0;
    let strgLetters = ['A','B','C','D','E','F','G','H']
    let strgNumbers = [1,2,3,4,5,6,7,8]
    let letter = cell.split('')[0];
    let number = cell.split('')[1];
    let positionLetter = strgLetters.indexOf(letter);
    let positionNumber = parseInt(number);
    validatePosition(positionLetter+1,positionNumber+2) ? result++ : result
    validatePosition(positionLetter+1,positionNumber-2) ? result++ : result
    validatePosition(positionLetter-1,positionNumber+2) ? result++ : result
    validatePosition(positionLetter-1,positionNumber-2) ? result++ : result
    validatePosition(positionLetter+2,positionNumber+1) ? result++ : result
    validatePosition(positionLetter+2,positionNumber-1) ? result++ : result
    validatePosition(positionLetter-2,positionNumber+1) ? result++ : result
    validatePosition(positionLetter-2,positionNumber-1) ? result++ : result
    return result
}

const validatePosition = function(letter,number){
    console.log(letter,number)
    return (letter >= 0 && letter <= 7) && (number >= 1 && number <= 8)
}

module.exports = challengeFunction
