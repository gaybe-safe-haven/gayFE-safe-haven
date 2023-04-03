
export const checkZip = (input) => {
  console.log(input, input.length)
  if(input.length !== 5 || 
    input.split('').find(digit => !typeof digit !== 'number')) {
      return false
  }
  return true
}

export const checkSite = (input) => {
  if (input.contains('http://') || !input.contains('www.')) {
    return false
  }
  return true
}
