function divide (numerator, denominator) {
  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error('Division cannot be performed due to the invalid input data')
  }

  if (denominator === 0) {
    throw new Error('Denominator should not be a zero ')
  }

  return numerator / denominator
}

try {
  console.log(divide(21, 3))
  console.log(divide(13, 0))
  console.log(divide('text', 2))
  console.log(divide(true, 2))
} catch (error) {
  console.error('Error:', error.message)
} finally {
  console.log('The work is completed')
}
