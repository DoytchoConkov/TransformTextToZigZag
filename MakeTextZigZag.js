function zigZag(text, rows) {

    if (rows <= 1 || text.length <= 1) {
        return text;
    }
    
    let zigZagArray = [];
    let currentRow = 0;
    let moveDown = true;

    for (let i = 0; i < text.length; i++) {
        if (zigZagArray[currentRow]===undefined) { zigZagArray[i] = ""; }
        zigZagArray[currentRow] += text.charAt(i);
        moveDown ? currentRow++ : currentRow--;
        if (currentRow === rows - 1 || currentRow === 0) {
            moveDown = !moveDown;
        }
    }
 
    return zigZagArray.join("");
}
 
let result = zigZag("PAYPALISHIRING", 3);
 
console.log(result);