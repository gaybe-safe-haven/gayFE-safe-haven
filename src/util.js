//check if zipcode is 5 characters AND all numbers
const checkZip = (input) => {
  console.log(input, input.length)
  if(input.length !== 5 || 
    input.split('').find(digit => !typeof digit !== 'number')) {
      return false
  }
  return true
}


//make sure website doesn't start with http

const checkSite = (input) => {

}
