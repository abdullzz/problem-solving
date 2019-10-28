/*
FOR tanggal 7 sampai 31
  CREATE array
  IF tanggal-7 MOD 2 == 0
    push 'Tono' ke array
  IF tanggal-7 MOD 4 == 0
    push 'Anton' ke array
  IF tanggal-7 MOD 5 == 0
    push 'Budi' ke array
  IF tanggal MOD 5 == 0
    ubah array menjadi 'Tempat Fitness Tutup'
  JOIN array member dengan ', '
  PRINT sesuai format
*/

for (var i = 7; i <= 31; i += 1){
  var temp = []
  if ((i-7) % 2 == 0){
    temp.push('Tono')
  }
  if ((i-7) % 4 == 0){
    temp.push('Anton')
  }
  if ((i-7) % 5 == 0){
    temp.push('Budi')
  }
  if (i % 5 == 0){
    temp = ['Tempat Fitness Tutup']
  }
  var res = temp.join(', ')
  console.log(`Tanggal ${i}: ${res}`)
}