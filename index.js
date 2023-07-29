//this file for running code to test

function isDivisor(str, divisor) {
  console.log("str.length % divisor.length !== 0",str.length % divisor.length !== 0)
  if (str.length % divisor.length !== 0) {
    return false;
  }
  const numRepeats = str.length / divisor.length;
  console.log("numRepeats",numRepeats)
  console.log("divisor",divisor)
  const concatenatedString = divisor.repeat(numRepeats);
  console.log("concatenatedString",concatenatedString)

  return str === concatenatedString;
}
function gcdOfStrings(str1, str2) {
  const shorterStr = str1.length <= str2.length ? str1 : str2;
  console.log("shorterStr",shorterStr)
  for (let i = shorterStr.length; i >= 1; i--) {
    const candidate = shorterStr.substr(0, i);
    console.log("candidate",candidate)

    if (isDivisor(str1, candidate) && isDivisor(str2, candidate)) {
      console.log("gcdOfStrings",candidate)
      return candidate;
    }
  }
  return "";
}
gcdOfStrings("aab", "aabaab")



      