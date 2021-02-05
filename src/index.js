function decode(expr) {
  const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
  };

  const SPACE_CODE = '**********';
  const SPACE = ' ';
  const DOT_CODE = '10';
  const DOT = '.';
  const DASH_CODE = '11';
  const DASH = '-';
  let decodedText = '';
  let startPos = 0;

  const checkForSpecialSymbols = (symbols) => {
    switch (symbols) {
      case DOT_CODE:
        return DOT;
      case DASH_CODE:
        return DASH;
      default:
        return '';
    }
  };

  for (let i = 0; i < expr.length / SPACE_CODE.length; i++) {
    let letterNumbers = expr.slice(startPos, startPos + SPACE_CODE.length);
    startPos += SPACE_CODE.length;

    if (letterNumbers === SPACE_CODE) {
      decodedText += SPACE;
      continue;
    }

    let decodedSymbols = '';

    for (let j = SPACE_CODE.length; j > 0; j -= 2) {
      decodedSymbols += checkForSpecialSymbols(letterNumbers.slice(j - 2, j));
    }

    decodedText += MORSE_TABLE[decodedSymbols.split('').reverse().join('')];
  }

  return decodedText;
}

module.exports = {
  decode,
};
