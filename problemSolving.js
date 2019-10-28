// pseudocode
//SET 'index' to 0
//LOOP each number 1 until 31
//      if('number' MOD 5 equal to 0){DISYPLAY 'Tanggal ' plus 'number' plus ':Tempat fitnes Tutup'}
//      ELSE{
//             SET 'member' with empty ARRAY
//             IF('index' MOD 2 equal to 0 ){
//                  'member' plus 'Tono'}
//              IF('index' MOD 4 equal to 0 ){
//                  'member' plus 'Anton'}
//              IF('index' MOD 5 equal to 0){
//                  'member' plus 'Budi'}
//              DISPLAY 'Tanggal ' plus 'number' plus 'member'
//          }
//       index plus 1
//END LOOP


function jadwalGym() {
    let index = 0
    for (let i = 7; i <= 31; i++) {
        let result = 'Tanggal ' + [i] + ':'
        if (i % 5 === 0) {
            console.log(result + 'Tempat Fitnes Tutup')
        } else {
            let member = []
            if (index % 2 === 0) {
                member.push('Tono')
            } if (index % 4 === 0) {
                member.push('Anton')
            } if (index % 5 === 0) {
                member.push('Budi')
            }
            console.log(result + member.join(','))
        }
        index++
    }
}

jadwalGym()