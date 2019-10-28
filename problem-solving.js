/*
Pseudocode:
SET 'result' with zero string
FOR index from zero to 24
    IF index equal zero THEN
       STORE 'result' with "Tono, Anton, Budi"
    ELSEIF index + 7 modulus 5 equal zero THEN
        STORE 'result' with "Tempat Finish Tutup"
    ELSE
        IF index modulus 2 equal zero THEN
            STORE 'result' with 'result' + "Tono"
        ENDIF
        IF index modulus 4 equal zero THEN
            IF length of 'result' equal zero THEN
                STORE 'result' with 'result' + "Anton"
            ELSEIF
                STORE 'result' with 'result' + ", Anton"
            ENDIF
        ELSEIF index modulus 5 equal zero THEN
            IF length of 'result' equal zero THEN
                STORE 'result' with 'result' + "Budi"
            ELSEIF
                STORE 'result' with 'result' + ", Budi"
            ENDIF
        ENDIF
    ENDIF
    PRINT 'Tanggal ' + (index+7) + ': ' + result
    SET 'result' with zero string
ENDFOR
*/

function problemSolving() {
  var result = '';

  for(var i=0; i<=24; i++) {
    if(i===0) {
      result = 'Tono, Anton, Budi';
    }
    else if((i+7) % 5 === 0) {
      result = 'Tempat Fitness Tutup';
    }
    else {
      if(i % 2 === 0) {
        result += 'Tono';
      }
      if(i % 4 === 0) {
        if(result.length===0) {
          result += 'Anton';
        }
        else {
          result += ', Anton';
        }
      }
      if(i % 5 === 0) {
        if(result.length===0) {
          result += 'Budi';
        }
        else {
          result += ', Budi';
        }
      }
    }
    console.log('Tanggal ' + (i+7) + ': ' + result);
    result = '';
  }
}

problemSolving();
