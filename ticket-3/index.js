function countNumberOfNinesInNumber(number) {
  let count = 0;

  for (let i = 0; i < String(number).length; i++) {
    let digit = String(number)[i];
    // console.log(`i is ${i}`);
    // console.log(`digit is ${digit}`);
    // console.log(`number i is ${number[i]}`)
    if ("9" === digit) {
      count++;
    }
  }
  
  return count;
}
// console.log('is this running?') 
console.log(countNumberOfNinesInNumber(1115.1257846))
