module.exports = function longestConsecutiveLength(array) {

    if (array.length == 0) return 0;
    function compareNumeric(a, b)
    {
        return a - b;
    }
    array.sort(compareNumeric);
    
    var longestSequence = 0;
    var currentSequence = 1;

    for (var i = 0; i < array.length; i++)
    {
        if (array[i] === array[i-1]) continue;
        if (array[i] === array[i-1] + 1) currentSequence++;
        else {
            if (longestSequence < currentSequence) longestSequence = currentSequence;
            currentSequence = 1;
        }
    }
    if (longestSequence < currentSequence) longestSequence = currentSequence;
    return longestSequence;
}
