/*
STORE tanggalMulai eq to 7
LOOP for i eq tanggalMulai until 31
    STORE temp eq to string "Tanggal" 
    ADD i to temp
    ADD string ": " to temp
    IF (i - tanggalMulai) modulo 5 eq to 0
        ADD string "Tempat fitness tutup" to temp
    ELSE 
        STORE yangDateng as empty array
        IF (i - tanggalMulai) modulo 2 eq to 0
            INSERT string Tono to yangDateng array
        END IF
        IF (i - tanggalMulai) modulo 4 eq to 0
            INSERT string Anton to yangDateng array
        END IF
        IF (i - tanggalMulai) modulo 5 eq to 0
            INSERT string Budi to yangDateng array
        END IF
        ADD array yangDateng joined by ", " to temp
    END IF
DISPLAY temp
END LOOP
*/

var tanggalMulai = 7;
for (let i = tanggalMulai; i <= 31; i++) {
  var today = "Tanggal " + i + ": ";
  if (i % 5 === 0) {
    today += "Tempat fitness Tutup";
  } else {
    var yangDateng = [];
    if ((i - tanggalMulai) % 2 === 0) {
      yangDateng.push("Tono ");
    }
    if ((i - tanggalMulai) % 4 === 0) {
      yangDateng.push("Anton");
    }
    if ((i - tanggalMulai) % 5 === 0) {
      yangDateng.push("Budi");
    }
    today += `${yangDateng.join(", ")}`;
  }
  console.log(today);
}
