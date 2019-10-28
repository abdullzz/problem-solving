/*

STORE tampung EQUAL to 0

FOR var i EQUAL to 7 and i <= 31 and i++
    IF i MOD 5 EQUAL to 0
        DISPLAY 'Tanggal ' + i + ': ' + 'Tempat Fitness Tutup'
    END IF
    ELSE
        STORE kosong to array
        IF tampung MOD 2 EQUAL to 0
            kosong add 'Tono'
        END IF
        ELSE
            IF tampung MOD 4 EQUAL to 0
                kosong add 'Anton'
            END IF
            IF tampung MOD 5 EQUAL to 0
                kosong add 'Budi'
            END IF
            DISPLAY 'Tanggal ' + i + ': ' + kosong
        END ELSE
    END ELSE
END LOOP
*/

var tampung = 0
for (var i = 7; i <= 31; i++){
    if (i % 5 === 0){
        console.log('Tanggal ' + i + ': ' + 'Tempat Fitness Tutup')
    }
    else{
        var kosong = []
        if ( i == 7){
            console.log('Tanggal ' + i +': ' + 'Tono, Anton, Budi')
        }
        else {
            if ( tampung % 2 == 0){
                kosong.push('Tono')
            }
            if ( tampung % 4 == 0){
                kosong.push('Anton')
            }
            if (tampung % 5 == 0){
                kosong.push('Budi')
            }
            console.log('Tanggal ' + i + ': ' + kosong)
        }
    }
    tampung++
    // console.log(tampung)
}