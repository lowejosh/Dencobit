// Caesar Solving Algorithm - Joshua Lowe

// ===!!!=== NOTES ===!!!===
// === HITS ===
// Trigraphs - the and tha ent ion tio for nce has tis oft men
// Digraphs - th he an in er on re ed nd ha at en es of nt ea ti to io
// End of words - e t d s

// Global Variables
let hits = 0;
let littleHits = 0;

function solve() {
    // Grab the ciphertext
    let input = document.getElementById("ciphertext").value.toLowerCase();

    // Variables
    let bestScore = 0;
    let bestKeySoFar; 
    

    // ========== HITS =========
    let trigraphs = "the and tha ent ion tio for nce has tis oft men".split(' ');
    let digraphs = "th he an in er on re ed nd ha at en es of nt ea ti to io le is ou ar as de rt ve ss ee tt ff ll mm oo".split(' ');
    let endOfWords = "e t d s".split(' ');

    // Brute for shift the ciphertext and regex all hits and keep a score
    let shiftedText;
    for (let i = 0; i < 26; i++) {
        shiftedText = shiftText(input, i);
        let hits = 0;
        console.log("\n\n" + shiftedText + "\n");

        // Check trigraphs
        for (let ii = 0; ii < trigraphs.length; ii++) {
            // Regex pattern
            let re = new RegExp(trigraphs[ii],"g");
            // If there are trigraph matches, increment big hits by 2 for each one
            while (re.exec(shiftedText) !== null) {
                hits+=2;
            }
        }
        
        // Check digraphs
        for (let ii = 0; ii < digraphs.length; ii++) {
            // Regex pattern
            let re = new RegExp(digraphs[ii],"g");
            // If there are digraph matches, increment big hits by 1 for each one
            while (re.exec(shiftedText) !== null) {
                hits+=1;
            }
        }
/*
        // Check end of words
        for (let ii = 0; ii < endOfWords.length; ii++) {
            // Regex pattern
            let re = new RegExp(endOfWords[ii] + '\\b',"g");
            // If there are digraph matches, increment big hits by 1 for each one
            while (re.exec(shiftedText) !== null) {
                console.log("eow MATCH");
                hits+=0.5;
            }
        }
        */
        
        // If most big hits so far, save the key
        if (hits > bestScore) {
            bestScore = hits;
            bestKeySoFar = i;
        }
    
        console.log("key: " + i + "   hits: " + hits);
    }

    console.log("\n\nKey: " + bestKeySoFar);

    // Update the textarea
    document.getElementById("plaintext").value = shiftText(input, bestKeySoFar);

    // Update the shift size
    let shift = 26 - bestKeySoFar;
    document.getElementById("shift").innerHTML = "Shift: " + shift;

}

// Shifts the input across the alphabet for a given key
function shiftText(input, key) {
    let shiftedText = "";
    for (let i = 0; i < input.length; i++) {
        if (input[i].match(/[a-z]/i)) {
            shiftedText+=String.fromCharCode(97 + ((input.charCodeAt(i) + key - 97) % 26)); 
        } else {
            shiftedText+=input[i];
        }
    }
    return shiftedText;
}

// Start the placeholder decoding
solve();