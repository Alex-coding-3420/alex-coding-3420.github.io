function boldText() {
    alert("Bigger Text!");
    var text = document.getElementById('text-area');
    text.style.fontSize = '24pt';
}

function upperCase() {
    alert("Uppercase Text!");
    var text = document.getElementById('text-area');
    text.value = text.value.toUpperCase();

    var sentence = text.value.split(". ");

    for (let i = 0; i < sentence.length; i++) {
        let words = sentence[i].split(" ");
        var lastWord = words[words.length - 1];
        words[words.length - 1] = lastWord + "-Moo"
        sentence[i] = words.join(" ");
    }
    text.value = sentence.join(".");
}

function applyStyle() {
    var textArea = document.getElementById("text-area");
    var fancy = document.getElementById("fancy");
    var boring = document.getElementById("boring");
    if (document.getElementById("fancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }
    if (document.getElementById("boring").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function containEventListners() {
    const bigBtn = document.getElementById("bigger-btn");
    const upperCaseText = document.getElementById("moo");
    const fancyRadio = document.getElementById("fancy");
    const boringRadio = document.getElementById("boring");

    bigBtn.addEventListener("click", boldText);
    upperCaseText.addEventListener("click", upperCase)
    fancyRadio.addEventListener("change", applyStyle);
    boringRadio.addEventListener("change", applyStyle);
}

document.addEventListener("DOMContentLoaded", containEventListners);