const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};
function decode(expr) {
  let decodedMessage = "";

  for (let i = 0; i < expr.length; i += 10) {
    const symbol = expr.slice(i, i + 10);

    if (symbol === "**********") {
      decodedMessage += " ";
      continue;
    }

    let morseCode = "";
    for (let j = 0; j < symbol.length; j += 2) {
      const bits = symbol.slice(j, j + 2);
      if (bits === "10") morseCode += ".";
      if (bits === "11") morseCode += "-";
    }

    decodedMessage += MORSE_TABLE[morseCode];
  }

  return decodedMessage;
}

module.exports = {
  decode,
};
