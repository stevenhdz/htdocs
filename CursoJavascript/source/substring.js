const stringPeriods = str => {
    const { length } = str
  
    if (length > 1) {
      for (let i = Math.ceil(length/2); i > 1; i--) { {
        const substring = str.slice(0, i)
        const contains = substring.repeat(length/i)
  
        if (contains == str) {
          return substring
        }
      }
    }
  
    return '-1'
  }
}

console.log(stringPeriods('acbsacb'))