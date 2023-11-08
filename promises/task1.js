function printWithDelay (text, time) {
  return setTimeout(() => console.log(text), time)
}

printWithDelay('new text', 1000)
printWithDelay('new text2', 2000)
