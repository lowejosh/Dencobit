// Global Variables
let taArray = new Array();      // Array for all denco objects
let textBuffer;                 // Text buffer for all textareas

// Create a denco object
function denco(dom, encFunc, decFunc) {
    this.dom = dom;             // DOM element
    this.encFunc = encFunc;     // Encoding function
    this.decFunc = decFunc;     // Decoding function
}

// Create all denco objects and place them into the global array for easier manipulation
taArray.push(new denco(document.getElementById("ascii"), encodeASCII, decodeASCII));
taArray.push(new denco(document.getElementById("binary"), encodeBinary, decodeBinary));
taArray.push(new denco(document.getElementById("hexadecimal"), encodeHexadecimal, decodeHexadecimal));
taArray.push(new denco(document.getElementById("decimal"), encodeDecimal, decodeDecimal));
taArray.push(new denco(document.getElementById("base64"), encodeBase64, decodeBase64));
taArray.push(new denco(document.getElementById("url"), encodeURL, decodeURL));

// Update the text buffer whenever a textarea is changed
function textChanged(inputID) {
    console.log("working: " + taArray[inputID].dom.id);
    textBuffer = taArray[inputID].dom.value;               // Update text buffer

    console.log("tb: " + textBuffer);
    console.log("decimal: " + encodeDecimal(textBuffer));
    console.log("base64: " + encodeBase64(textBuffer));
    console.log("url: " + encodeURL(textBuffer));
    // Force text buffer onto all other textarea DOM elements
    for (let i = 0; i < taArray.length; i++) {
        let obj = taArray[i];
        obj.dom.value = obj.encFunc(textBuffer);
    }
}

// Encoding functions (All are developed under the context of receiving ASCII input)
function encodeASCII(input) {
    return input;
}

function encodeBinary(input) {
    return input.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
}

function encodeHexadecimal(input) {
    return input.split('').map(function (char) {
        return char.charCodeAt(0).toString(16);
    }).join(' ');
}

function encodeDecimal(input) {
    return input.split('').map(function (char) {
        return char.charCodeAt(0).toString(10);
    }).join(' ');
}

function encodeBase64(input) {
    return btoa(input);
}

function encodeURL(input) {
    return encodeURIComponent(input).replace(/%20/g,'+');
}

// Decoding functions (All are developed under the context of returning ASCII output)
function decodeASCII(input) {
    // Do nothing
    return input;
}

function decodeBinary() {

}

function decodeHexadecimal() {

}

function decodeDecimal() {

}

function decodeBase64() {

}

function decodeURL() {

}

// Initialize the placeholder values
textChanged(0);