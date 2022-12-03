// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

//Example

// Return '12:01:00'.

// Return '00:01:00'.

// s = '12:01:00PM' => 00:01:00PM
// s = '07:01:00PM' => 19:01:00PM
// s = '07:01:00AM' => :01:00PM

function convertTime(s) {
    if(typeof s !== "string") return;
    let [hour, minutes, sec] = s.split(":")
    if(sec.includes("PM")&& hour != 12 ){
        hour = parseFloat(hour) + 12
    }
    if(sec.includes("AM") === "12"){
        hour = "00"
    }
   console.log(`${hour}:${minutes}:${sec}`)
   return `${hour}:${minutes}:${sec}`
}
convertTime("00:00:00AM")
convertTime("12:00:00PM")
convertTime("04:01:3AM")
