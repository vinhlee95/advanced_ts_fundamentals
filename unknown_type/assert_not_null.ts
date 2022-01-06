type AssertExist = <T>(value: unknown, message?: string) => asserts value is NonNullable<T>

const assertExist: AssertExist = (value: unknown, message = 'unexpected null or undefined') => {
  if(value === null || value === undefined) {
    throw new Error(`${message}: ${JSON.stringify(value)}`)
  }
}

/**
 * Simulate a READ DB operation 
 * to find a record. It could return a string or undefined
 * 
 */
const findById = (): string | undefined => {
  const VALID_VALUES = ['foo', 'bar', 'baz']
  
  if(Math.random() > 0.5) {
    return undefined
  }

  return VALID_VALUES[Math.round(3 * (Math.random()))]
}

/**
 * Get used of non-null-check assertExist function 
 * to make sure that "value" must be a string
 * 
 */
const composeList = () => {
  const value = findById()
  assertExist<string>(value)

  // value should have string type now
  return [value]
}
