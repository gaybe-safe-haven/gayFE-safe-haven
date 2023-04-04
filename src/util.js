
export const checkZip = (input) => {
  console.log('all num nums?', /^\d+$/.test(input))
  if(input.length !== 5 || !(/^\d+$/.test(input))) {
      return false
  }
  return true
}

export const checkSite = (input) => {

  if (input.includes('http://') || !input.includes('www.')) {
    return false
  }
  return true
}
