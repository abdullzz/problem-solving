function problemSolving(arr){
    let opening = 7
    let jumlahHari = 31
    let result = {}

    for(let i = 0; i < arr.length; i++){
        result[arr[i][0]] = []
        result[arr[i][0]].push(parseInt(arr[i][1]))
        result[arr[i][0]].push(parseInt(arr[i][1]))
    } 

    for(let j = opening; j <= jumlahHari; j++){
        var tampung = []
        if(j === 7){
            for(let key in result){
                tampung.push(key)
                result[key][1] += 7 
            }
            console.log('Tanggal '+  j + ': '+ tampung.join(', '))

        
        } else if(j % 5 === 0) {
            console.log('Tanggal '+  j + ': '+ 'Tempat Fitness Tutup')
            for(let key in result){
                if(result[key][1] === j){
                    result[key][1] += result[key][0]
                }
            }
        } else {
            for(let key in result){
                if(result[key][1] === j){
                    tampung.push(key)
                    result[key][1] += result[key][0]
                }
            }
            console.log('Tanggal '+  j + ': '+tampung.join(', '))
        }
    }
    console.log(result)
  
}

var member = [['tono', '2 hari'],['anton', '4 hari'],['budi', '5 hari']]
    
console.log(problemSolving(member))