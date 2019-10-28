/*
PSEUDOCODE
START
SET activity to empty array
SET calendarDate to 0
FOR calendarDate LESS OR EQUAL to 31 MINUS 7
    SET displayDate to calendarDate PLUS 7
    IF displayDate MOD 5 EQUAL to 0 THEN
        PUSH 'Tempat Fitnes Tutup' to activity array
    ELSE
        IF calendarDate MOD 2 THEN
            PUSH 'Tono' to activity array
        END IF
        IF calendarDate MOD 4 THEN
            PUSH 'Anton' to activity array
        END IF
        IF calendarDate MOD 5 THEN
            PUSH 'Budi' to activity array
        END IF
    END IF
    SET displayActivity to activity array element JOIN with ', '
    DISPLAY 'Tanggal 'calendarDate : displayActivity
    INCREMENT calendarDate by 1
ENDFOR
END
*/

for(calendarDate = 0;calendarDate <= 24;calendarDate++){
    var activities = []
    var displayDate = calendarDate + 7;
    if(displayDate % 5 === 0){
        activities.push('Tempat Fitnes Tutup');
    }
    else{
        if(calendarDate % 2 === 0){
            activities.push('Tono');
        }
        if(calendarDate % 4 === 0){
            activities.push('Anton');
        }
        if(calendarDate % 5 === 0){
            activities.push('Budi');
        }
    }
    console.log('Tanggal ' + displayDate +': ' + activities.join(', '));
}