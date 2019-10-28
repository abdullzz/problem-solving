/* 
    // PSUEDOCODE //
    START
        FUNCTION problemSolving(arr)
          set display = []
          set tanggal = 0
          set i = 7
          FOR(i = 7; i <=31; i++)
            set result = []
            FOR(let j = 0; j < arr.length; j++)
              IF(i % 5 === 0)
                result.push('Tempat Fitness Tutup')
                BREAK
              ELSE IF(tanggal % arr[j][1] === 0)
                result.push(arr[j][0])
              ENDELSE
              ENDIF
              set tanggal = tanggal + 1
            ENDFOR
            display.push("tanggal " + i.toString() + " " + result.join(' '))
          ENDFOR
          RETURN display.join('\n')
        ENDFUNCTION
        PRINT (fitness([['anton', 5], ['tono', 2],['budi', 4]]))
    END
*/

function problemSolving(arr) {
    display = []
    tanggal = 0;
    for (let i = 7; i <= 31; i++) {
        result = []
        for (let j = 0; j < arr.length; j++) {
            if (i % 5 === 0) {
                result.push('Tempat Fitness Tutup')
                break;
            }
            else if(tanggal % arr[j][1] === 0) {
                result.push(arr[j][0])
            }
            tanggal++
        }
         display.push("tanggal " + i.toString() + " " + result.join(' '))
    }
    return display.join('\n')
}

console.log(fitness([['anton', 5], ['tono', 2],['budi', 4]]))
