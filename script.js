/*
FOR tanggal 7 sampai 31
  CREATE array
  IF tanggal MOD 5 EQUAL 0
    array EQUAL 'Tempat Fitness Tutup'
  ELSE 
    IF tanggal-7 MOD 2 EQUAL 0
      INSERT 'Tono' TO array
    IF tanggal-7 MOD 4 EQUAL 0
      INSERT 'Anton' TO array
    IF tanggal-7 MOD 5 EQUAL 0
      INSERT 'Budi' TO array
    JOIN array WITH ', '
  PRINT sesuai format
*/

function fitness(){
  var print = ''
  for (var i = 7; i <= 31; i += 1){
    var resultArray = []
    if (i % 5 == 0){
      resultArray = ['Tempat Fitness Tutup']
    } else {
      if ((i-7) % 2 == 0){
        resultArray.push('Tono')
      }
      if ((i-7) % 4 == 0){
        resultArray.push('Anton')
      }
      if ((i-7) % 5 == 0){
        resultArray.push('Budi')
      }
    }
    var result = resultArray.join(', ')
    print += (`Tanggal ${i}: ${result}` + '\n')
  }
  return print
}

console.log(fitness())