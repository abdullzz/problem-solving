/*
PSEUDOCODE
===========================
* CREATE VARIABLE 'libur', SET the VALUE with the off day
* CREATE VARIABLE 'startDate', SET the VALUE with the day the gym open
* CREATE VARIABLE 'lastDate', SET the VALUE with the day the gym close
* CREATE VARIABLE ARRAY, SET the VALUE with member name and each gym frequency

* CREATE FUNCTION 'schedule' which will check each Date with the schedule possibilities:
  - CREATE SUB-FUNCTION 'getName' which will calculate the schedule possibilities on said date. As of now the possibilities are:
     - Group of all the member who would be on schedule on said date according to their frequency
     - the closing day of the gym




*/

// 1. 
function getName (dateQuery, tanggalMulai, arr2Member)
{
    var result = []

    for (var x = 0; x < arr2Member.length; x++)
      {

        if (dateQuery === startDate)
          {
              result.push(arr2Member[x][0])
          }
        else if (dateQuery % 5 === 0)
          {
              result = 'Tempat Fitness Tutup'
          }
        else if ( (dateQuery - tanggalMulai)  % arr2Member[x][1] === 0 )
          {
              result.push(arr2Member[x][0])
          }

      }

    return result

}



// 2.
function schedule (dateMulai, dateAkhir, arr1Member)
{

    for (let x = dateMulai; x <= dateAkhir; x++)
      {
        var listName = getName(x, dateMulai, arr1Member)
        console.log('Tanggal ' + x +': ' + listName)
      }

}







var libur = 5
var startDate = 7
var lastDate = 31

var member = [['Tono', 2], ['Anton', 4], ['Budi', 5]]




schedule(startDate, lastDate, member)

