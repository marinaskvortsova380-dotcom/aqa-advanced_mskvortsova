function saySmth(phrase, name) {
    console.log('${phrase}', '${name}');
}
const timerId = setTimeout(saySmth, 1000, " Привіт ", "Marina");
