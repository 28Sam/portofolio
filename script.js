// Script untuk membuat h1 memiliki animasi mengetiknya
const typedTextSpan = document.querySelector(".typed-text");
const textArray = ["Halo, Saya Sam  "];
const typingDelay = 200;

new Typewriter(typedTextSpan, {
    strings: textArray,
    autoStart: true,
    delay: typingDelay,
});

// Fungsi untuk membuat efek mengetik
function Typewriter(element, options) {
    const { strings, autoStart, delay } = options;
    let stringIndex = 0;
    let characterIndex = 0;

    function type() {
        if (stringIndex >= strings.length) {
            stringIndex = 0;
        }

        const currentString = strings[stringIndex];
        const currentCharacter = currentString.charAt(characterIndex);

        element.textContent += currentCharacter;

        characterIndex++;

        if (characterIndex >= currentString.length) {
            stringIndex++;
            characterIndex = 0;
            element.textContent = "";
        }

        setTimeout(type, delay);
    }

    if (autoStart) {
        type();
    }
}