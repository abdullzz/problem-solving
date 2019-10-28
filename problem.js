var to = ''
var an = ''
var bu = ''

var count = 0
for(var i = 7; i <= 31; i++){
    if(count == 0){
        console.log('Tanggal 7: Tono, Anton, Budi')
    }else{
        if(i % 5 == 0){
            console.log('Tanggal '+ i +'; Tempat Fitness Tutup')
        }else{
            if(count % 2 == 0){
                to = 'Tono, '
            }
            if(count % 4 == 0){
                an = 'Anton, '
            }
            if(count % 5 == 0){
                bu = 'Budi'
            }
            console.log('Tanggal ' + (i + 0) + ': ' + to + an + bu);
        }      
    } 
    count ++
    an = '' 
    to = ''
    bu = '' 
}