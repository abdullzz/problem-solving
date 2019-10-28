/**
 * PSEUDOCODE

 * STORE str equal to ""
 * STORE temp equal to ""
 * 
 * FOR i equal to tanggalAwal; i less than equal to tanggalAkhir i++
 * IF i mod 5 equal to 0
 *  str equal to "Tanggal " + i + ": " + "Tempat Fitness Tutup"
 * ELSE
 *  str equal to "Tanggal " + i + ": "
 *  FOR j equal to tanggalAwal; j less than equal to tanggalAkhir; j+=2
 *      IF i equal to j
 *          add temp with "Tono,"
 *      END IF
 *  END FOR
 *  FOR k equal to tanggalAwal; k less than equal to tanggalAkhir; k+=4
 *      IF i equal to k
 *          add temp with " Anton,"
 *      END IF
 *  END FOR
 *  FOR l equal to tanggalAwal; l less than equal to tanggalAkhir; l+=4
 *      IF i equal to l
 *          add temp with " Budi,"
 *      END IF
 *  END FOR
 *  add str with temp
 *  temp equal to ""
 *  IF str index str.length-1 equal to ","
 *      str equal to str.substring(index 0, index str.length-1)
 *  END IF
 *  DISPLAY str
 * END FOR
 */


function problemSolving(tanggalAwal, tanggalAkhir) {
    var str = ""
    var temp = ""
    for (let i = tanggalAwal; i <= tanggalAkhir; i++) {
        if (i % 5 === 0) {
            str = "Tanggal " + i + ": " + "Tempat Fitness Tutup"
        } else {
            str = "Tanggal " + i + ": "
            for (let j = tanggalAwal; j <= tanggalAkhir; j += 2) {
                if (i === j) {
                    temp += "Tono, "
                }
            }
            for (let k = tanggalAwal; k <= tanggalAkhir; k += 4) {
                if (i === k) {
                    temp += "Anton, "
                }
            }
            for (let l = tanggalAwal; l <= tanggalAkhir; l += 5) {
                if (i === l) {
                    temp += "Budi, "
                }
            }
        }
        str += temp
        temp = ""
        if (str[str.length - 2] === ",") {
            str = str.substring(0, str.length - 2)
        }
        console.log(str)
    }
}

problemSolving(7, 31)