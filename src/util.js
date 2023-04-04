
export const checkZip = (input) => {
  if(input.length !== 5 || 
    input.split('').find(digit => !typeof digit !== 'number')) {
      return false
  }
  return true
}

export const checkSite = (input) => {
  console.log(input, input.length, typeof input)
  if (input.includes('http://') || !input.includes('www.')) {
    return false
  }
  return true
}
