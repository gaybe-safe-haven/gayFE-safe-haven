
export const checkZip = (input) => {
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

export const checkPhone = (input) => {
    const regex = /^(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
    return regex.test(input);
}
