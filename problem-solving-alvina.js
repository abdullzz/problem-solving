//Pseudocode
/**
START
  SET a function that takes a multidimentional array of member names and frequencies ('memberData') and start date ('start') as parameters
  INIT an empty object with variable name 'calendar'
  INIT an empty string with variable name 'report'
  FOR every date from 'start' date to 31 DO
    IF the date mod 5 equals to 0 DO
      ADD date and 'Tempat Fitness Tutup' as a key-value pair inside 'calendar'
    ELSE IF the date is equals to 'start' DO
      INIT an empty array with variable name 'members'
      FOR every member data in input array DO
        ADD member names to 'members' array
      ENDFOR
      ADD date and all element of 'members' joined as a key-value pair inside 'calendar'
    ELSE
      INIT an empty array with variable name 'members'
      FOR every member data in input array DO
        IF date - 'start' mod member frequency equals to 0 DO
          ADD member names to 'members' array
        ENDIF        
      ENDFOR
        IF length of 'members' is more than 1 DO
          ADD date and all elements of 'members' joined as a key-value pair inside 'calendar'
        ELSE IF length of 'members' is 1 DO
          ADD date and the only element of 'members' as a key-value pair inside 'calendar'
        ELSE IF length of 'members' is zero DO
          ADD date and space as a key-value pair inside 'calendar'
        ENDIF 
    ENDIF
  ENDFOR
  FOR every key in 'calendar' DO
    ADD key-value pair as string to 'report'
  ENDFOR
  RETURN 'report'
END
**/

function problemSolving(memberData, start) {
  var calendar = {};
  var report = '';
  for (var i = start; i <= 31; i++) {
    if (i % 5 === 0) {
      calendar[`Tanggal ${i}`] = 'Tempat Fitness Tutup';
    } else if (i === start) {
      var members = [];
      for (var j = 0; j < memberData.length; j++) {
        members.push(memberData[j][0]);
      }
      calendar[`Tanggal ${i}`] = members.join(', ');
    } else { 
      var members = [];
      for (var j = 0; j < memberData.length; j++) {
        if ((i - 7) % memberData[j][1] === 0) {
          members.push(memberData[j][0]);
        }
      }
      if (members.length > 1) {
        calendar[`Tanggal ${i}`] = members.join(', ');
      } else if (members.length === 1) {
        calendar[`Tanggal ${i}`] = members[0];
      } else if (members.length === 0) {
        calendar[`Tanggal ${i}`] = ' ';
      }
    }
  }
  for (var key in calendar) {
    report += `${key} : ${calendar[key]} \n` 
  }
  return report;
}

var data1 = [
  ['Tono', 2],
  ['Anton', 4],
  ['Budi', 5]
];

console.log(problemSolving(data1, 7));


