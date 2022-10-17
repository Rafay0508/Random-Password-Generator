function generator() {
    let pLenght = +document.getElementById('length').value;
    if (pLenght > 7) {
        let text = "abcdefghijklmnopqrstuvwxyz1234567890/!@#$%&";
        let pass = "";
        for (let i = 1; i <= pLenght; i++) {
            let random = Math.round(Math.random() * (43 - 0) + 0);
            pass += text[random];
        }
        document.getElementById('text').value = pass;
    }
    else {
        document.getElementById('error').style.display = "block";
        document.getElementById('indication').style.display = "none";
        setTimeout(() => {
            document.getElementById('error').style.display = "none";
            document.getElementById('indication').style.display = "block";
            pLenght = 0;
        }, 3000);

    }
}
function copy() {
    pLenght = null;
    document.getElementById('length').value = pLenght;
    let input = document.getElementById("text").value;
    if (input === "") {
        alert("Input not Found");
    }
    else {
        navigator.clipboard.writeText(input);
        document.getElementById('text').value = null;
        alert("Text Copied Clipboard");
    }
}