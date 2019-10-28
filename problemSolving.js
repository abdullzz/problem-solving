/* 

    // PSUEDOCODE //
    START
        STORE 'member' WITH MEMBER'S DATA
        STORE 'opening date' WITH 7
        STORE 'tanggal' WITH -1
        FOR i FROM 'opening date' ill 31
            STORE 'output' WITH EMPTY ARRAY
            FOR j FROM 0 TO 
                IF i MOD 5 EQUALS TO 0 PUSH 'Tempat Fitness Tutup' TO output
                ELSE 'tanggal' MOD member schedaule EQUALS to 0 PUSH member's name to ouput
            FOR j END
            SHOW i AND ouput
        FOR i END
    END

*/

function fitness(arr) {
    let tanggal = -1;
    for (let i = 7; i <= 31; i++) {
        let output = []
        tanggal++
        for (let j = 0; j < arr.length; j++) {
            if (i % 5 === 0) {
                output.push('Tempat Fitness Tutup')
                break;
            }
            else if (tanggal % arr[j][1] === 0) {
                output.push(arr[j][0])
            }
        }
        console.log(`tanggal ${i}: ${output.join(',')}`)
    }
}

fitness([['tono', 2], ['anton', 4], ['budi', 5], ['ilham', 3]]) 