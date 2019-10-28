let date = 7
let member = { Tono: 2, Anton: 4, Budi: 5 }
let nameMember = Object.keys(member)
let freqMember = Object.values(member)
let temp = ''
let countDay = 0
while (date <= 31) {
    if (date % 5 == 0) {
        console.log(`Tanggal ${date}: Tempat fitness tutup`)
    } else {
        if (date == 7) {
            for (let i = 0; i < nameMember.length; i++) {
                if (i == nameMember.length - 1) {
                    temp += nameMember[i]
                } else {
                    temp += nameMember[i] + ', '
                }
            }
            console.log(`Tanggal ${date}: ${temp}`)
            temp = ''
        } else {
            for (let i = 0; i < freqMember.length; i++) {
                if (countDay % freqMember[i] == 0) {
                    if (temp.length == 0) {
                        temp += nameMember[i]
                    } else {
                        temp += `, ${nameMember[i]}`
                    }
                }
            }
            console.log(`Tanggal ${date}: ${temp}`)
            temp = ''
        }
    }
    countDay++
    date++
}