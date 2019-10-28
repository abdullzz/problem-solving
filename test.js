function problemSolving(member,firstDay) {
    let count = 0;
    for(let i = 7; i <= 31; i++) {
        let people =[]
        let result = '';
        if(i % 5 === 0) {
            result = `Tanggal ${i} Tempat Fitness Tutup`; 
        } else {
            if(count % 2 === 0 ) {
                people.push(member[0]);
            }
            if(count % 4 === 0 ) {
                people.push(member[1]);
            } 
            if(count % 5 === 0) {
                people.push(member[2]);
            }

            result = `Tanggal ${i}: ${people.join(', ')}`;
        }
        count++
        console.log(result);
    }
}


console.log(problemSolving(['Tono', 'Anton', 'Budi'] , 7));