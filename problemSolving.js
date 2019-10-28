function fitness(arr) {
    let tanggal = -1;
    for (let i = 7; i <= 31; i++) {
        var output = []
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
        console.log(`tanggal ${i}: ${output.join(', ')}`)
    }
}

fitness([['tono', 2], ['anton', 4], ['budi', 5], ['ilham', 3]]) 