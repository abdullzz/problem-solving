function problemSolving () {
  var currentDate = 7;
  var tono = 2;
  var anton = 4;
  var budi = 5;
  var monthMax = 31;
  var closeMult = 5;
  var people = [];
  var toBeDisplayed = '';

  for(var i = currentDate; i <= 31; i++) {
    people = [];
    toBeDisplayed = 'Tanggal ' + i + ': ';
    
    if(tono > 0) tono -= 1;
    else {
      people.push('Tono');
      tono = 1;
    }

    if(anton > 0) anton -= 1;
    else {
      people.push('Anton');
      anton = 3;
    }

    if(budi > 0) budi -= 1;
    else {
      people.push('Budi');
      budi = 4;
    }

    if(i%5 != 0) {
      for(var j in people) toBeDisplayed += people[j] + ', ';

      if(people.length != 0) toBeDisplayed =  toBeDisplayed.slice(0, toBeDisplayed.length-2);
    } else {
      console.log('Tanggal ' + i + ': Tempat Fitness Tutup');
      continue;
    }
    
    if(i == 7) console.log('Tanggal 7: Tono, Anton, Budi');
    else console.log(toBeDisplayed);
  }
}

problemSolving();