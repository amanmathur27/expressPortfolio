let textar = document.getElementById("textar");
textar.addEventListener("input", function () {
    let text = this.value;
    let charcnt = text.length;
    document.getElementById("char").innerHTML = (charcnt);


    text = text.trim();
    let word = text.split(" ");
    let cleantext = word.filter(function (ele) {
        return ele != "";
    });
    let wordcnt = cleantext.length;
    document.getElementById("word").innerHTML = wordcnt;
})