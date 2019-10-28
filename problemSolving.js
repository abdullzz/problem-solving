/* 
PSEUDOCODE
SET startDate to 7
SET tono to 2
SET anton to 4
SET budi to 5
SET counter to 0
SET printer to empty string;
FOR i from startDate to 31
    IF i mod 5 equals 0
        SET printer to 'Tempat Fitness Tutup'
    ELSE IF counter mod tono, counter mod anton, and counter mod budi all equals 0
        SET printer to 'Tono, Anton, Budi'
    ELSE IF counter mod anton equals 0
        SET printer to 'Tono, Anton'
    ELSE  IF counter mod tono equals 0
        SET printer to 'Tono'
    ELSE IF counter mod budi equals 0
        SET printer to 'Budi'
    ELSE
        SET printer to empty string
    END IF
END FOR
*/

var startDate = 7;
var tono = 2;
var anton = 4;
var budi = 5;
var counter = 0;
var printer;
for (let i = startDate; i <= 31; i++) {
    if (i % 5 === 0) {
        printer = 'Tempat Fitness Tutup';
    } else if (counter % tono === 0 && counter % anton === 0 && counter % budi === 0) {
        printer = 'Tono, Anton, Budi';
    } else if (counter % anton === 0) {
        printer = 'Tono, Anton';
    } else if (counter % tono === 0) {
        printer = 'Tono';
    } else if (counter % budi === 0) {
        printer = 'Budi';
    } else {
        printer = '';
    }
    console.log('Tanggal ' + i + ': ' + printer);
    counter++;
}