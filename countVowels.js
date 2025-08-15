function countVowels(text) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var lowerText = text.toLowerCase();
    count = 0;

    var splittedText = lowerText.split('');

    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(splittedText[i])) {
            count = 1 + count;
        }
        else {
            continue
        }
    }
    return count
}
countVowels('JavaScript');