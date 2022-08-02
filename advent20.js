export default function pangram(letter) {
    const tildes = {
        "á": "a",
        "é": "e",
        "í": "i",
        "ó": "o",
        "ú": "u"
    };
    const alphabet = "abcdefghijklmnopqrstuvwxyzñ";

    const letters = [...new Set(Array.from(letter.toLowerCase()).flatMap(letter => /¡|!|:|\s/.test(letter) ? [] : tildes[letter] || letter))];
    return alphabet === letters.sort().join("");
}


