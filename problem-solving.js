function memberGym (memberName) {
    let count = 0;
    
    for (let date = 7; date <= 31; date++) {
        let result = '';
        let people = [];

        if (date % 5 === 0) {
            result = 'Tanggal ' + date + ": Tempat Fitness Tutup";
        } else {
            if (count % 2 === 0) {
                people.push('tono');
            } 
            if (count % 4 === 0) {
                people.push('anton');
            }
            if (count % 5 === 0) {
                people.push('budi');
            }
            result = `tanggal ${date}: ${people.join(', ')}`;
        }
        count++;
        console.log(result);
    }
}

memberGym([2, 4, 5])