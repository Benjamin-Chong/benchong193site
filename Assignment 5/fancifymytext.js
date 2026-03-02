function pressedBigger() {
    document.getElementById("text_table").style.fontSize = "24pt";
}

function alertUser() {
    alert("You have changed the style to FancyShmancy.")
}

function changeStyle() {
    var textTable = document.getElementById("text_table");
    if (document.getElementById("Fancy").checked) {
        textTable.style.fontWeight = "bold";
        textTable.style.color = "blue";
        textTable.style.textDecoration = "underline";
    } else {
        textTable.style.fontWeight = "normal";
        textTable.style.color = "black";
        textTable.style.textDecoration = "none";
    }
}

function moo() {
    var textTable = document.getElementById("text_table");
    var text = textTable.value;

    text = text.toUpperCase();
    var sentences = text.split(".");
    
    for (var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i].trim();
        if (sentence.length === 0) continue;
        var words = sentence.split(" ");
        words[words.length - 1] += "-Moo"
        sentences[i] = words.join(" ");
    }
    text = sentences.join(". ");
    textTable.value = text.trim();
}

