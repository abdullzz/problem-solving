/*
// PSEUDOCODE //

STORE Tono FOR 2
STORE Anton FOR 4
STORE Budi FOR 5
STORE COUNT by 0
STORE Tanggal by 7
STORE libur FOR 5

    DO LOOP FROM Tanggal UNTIL 31
        IF Tanggal MOD 5 EQUALS to 0
            THEN DISPLAY Tanggal and Tempat Fitness Tutup
        ELSE
            STORE hadir BY EMPTY
                IF Tanggal IS 7, ADD Tono, Anton, Budi TO hadir
            ADD COUNT BY 1

            IF COUNT MOD Tono VALUE EQUALS TO 0 THEN ADD Tono to EMPTY
            IF COUNT MOD Anton VALUE EQUALS TO 0 THEN ADD Anton to EMPTY
            IF COUNT MOD Budi VALUE EQUALS TO 0 THEN ADD Budi to EMPTY
            
            DISPLAY Tanggal and hadir
    END LOOP
*/

var tanggal = 7;
var peserta = {
    Tono: 2,
    Anton: 4,
    Budi: 5
}
var count = 0

while(tanggal<=31){
    if(tanggal%5==0){
        console.log('Tanggal ' + tanggal + ": Tempat Fitness Tutup");
    }else{
        var hadir = []
        if(count == 0){
            hadir.push(Object.keys(peserta))
        }

        for(kunci in peserta){

            if(count % peserta[kunci] == 0){
                hadir.push(kunci)
            }
        }
        console.log('Tanggal ' + tanggal + ": " + hadir.join(', '));
    }
    count++
    tanggal++
}