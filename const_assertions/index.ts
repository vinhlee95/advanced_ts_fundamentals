/**
 * Using readonly
 */
type BookConfig = {
  readonly title: string
  readonly author: string
  releaseYear: Date
}

const harryPotter1: BookConfig = {
  title: 'Harry Potter 1',
  author: 'J.K.Rowling',
  releaseYear: new Date('2000-01-01')  
}
harryPotter1.title = 'New title'
harryPotter1.author = 'Me'
harryPotter1.releaseYear = new Date()

/**
 * Using const assertion
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions
 */
// as const automatically infer readonly type to the object
const readonlyCar = {
  name: 'Ferrari',
  model: '488 GTB'
} as const
// Equivalent syntax:
// const readonlyCar = <const>{
//   name: 'Ferrari',
//   model: '488 GTB'
// }

readonlyCar.name = 'Lamborghini'
readonlyCar.model = 'Aventador'

const readonlyArr = <const>['foo', 'bar']
readonlyArr.push('baz')

/**
 * Create Literal type from a readonly tuple
 * Literal type: @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
 * 
 */
const VALID_CAR_BRANDS = <const>['ferrari', 'lamborghini', 'bugatti']
// Form a literal type from ^ strings
interface Car {
  brand: typeof VALID_CAR_BRANDS[number] // this is equal to 'ferrari' | 'lamborghini' | 'bugatti'
}


// 
// ------ Using const assertion with ReturnType and typeof --------
// 
const setCount = (n: number) => {
  return <const>{
    type: 'SET_COUNT',
    payload: n
  }
}

const resetCount = () => {
  return <const>{
    type: 'RESET_COUNT'
  }
}

type CountActions = ReturnType<typeof setCount> | ReturnType<typeof resetCount>;