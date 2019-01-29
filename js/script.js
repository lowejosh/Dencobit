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
    textBuffer = taArray[inputID].decFunc(taArray[inputID].dom.value);               // Decode to ASCII and update text buffer

    console.log("binary 0010: " + decodeBinary("01010010 00101110"));
    console.log("encoding a: " + encodeBinary("a"));
    // Force text buffer onto all other textarea DOM elements
    for (let i = 0; i < taArray.length; i++) {
        // If the input isn't the one currently being edited
        if (i != inputID) {
            let obj = taArray[i];
            obj.dom.value = obj.encFunc(textBuffer);
        }
    }
}

// Encoding functions (All are developed under the context of receiving ASCII input)
function encodeASCII(input) {
    return input;
}

function encodeBinary(input) {
    return input.split('').map(function (char) {
        let binary = char.charCodeAt(0).toString(2);   
        // Add the zeroes that were removed
        while (binary.length < 8) {
            binary = '0' + binary; 
        }
        return binary;
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
    return input;
}

function decodeBinary(input) {
}

function decodeHexadecimal() {

}

function decodeDecimal() {

}

function decodeBase64(input) {
    return atob(input);
}

function decodeURL() {

}

// Initialize the placeholder values
textChanged(0);