function validateInput() {
    var input = document.getElementById("input1").value.trim();

    if (input === "") {
        alert("Please enter some text.");
    } else {
        console.log("Entered text:", input);
    }
}