var symbol = window.prompt('Enter a symbol to use');
var rows = window.prompt('Enter # of rows');
var columns = window.prompt('Enter # of columns');

for(let i = 0; i < rows; i++){
    for(let j = 0; j < columns; j++){
        document.getElementById('myShaped').innerHTML += symbol;
    }
    document.getElementById('myShaped').innerHTML += '<br>';

}