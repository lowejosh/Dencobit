// Global Variables
let taArray = new Array();      // Array for all textareas
let textBuffer;                 // Text buffer for all textareas

// Create a denco object
function denco(dom, encFunc, decFunc) {
    this.dom = dom;             // DOM element
    this.encFunc = encFunc;     // Encoding function
    this.decFunc = decFunc;     // Decoding function
}

// Create all denco objects and place them into the global array for easier manipulation
taArray.push(new denco(document.getElementById("ascii"), encodeASCII(), decodeASCII()));
taArray.push(new denco(document.getElementById("binary"), encodeBinary(), decodeBinary()));
taArray.push(new denco(document.getElementById("hexadecimal"), encodeHexadecimal(), decodeHexadecimal()));
taArray.push(new denco(document.getElementById("decimal"), encodeDecimal(), decodeDecimal()));
taArray.push(new denco(document.getElementById("base64"), encodeBase64(), decodeBase64()));
taArray.push(new denco(document.getElementById("url"), encodeURL(), decodeURL()));

// Update the text buffer whenever a textarea is changed
function textChanged(inputID) {
    console.log("wokring: " + taArray[inputID].dom.id);
}

// Encoding functions
function encodeASCII() {

}

function encodeBinary() {

}

function encodeHexadecimal() {

}

function encodeDecimal() {

}

function encodeBase64() {

}

function encodeURL() {

}

// Decoding functions
function decodeASCII() {

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