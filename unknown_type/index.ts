import {log} from '../utils'

// 
// Problem: there is a cat list and a dog list
// The input object is just an animal, we don't know if it is a cat or a dog
// -> We need to perform some sort of check to only add a cat to the cat list and so on
// Otherwise, throw an Error
//
interface Animal {
  type: string
  name: string
  age: number
}

interface Cat extends Animal {
  type: 'cat'
}

interface Dog extends Animal {
  type: 'dog'
}

const CATS: Cat[] = [
  {
    type: 'cat',
    name: 'foo',
    age: 2
  }
]

const DOGS: Dog[] = [
  {
    type: 'dog',
    name: 'bar',
    age: 1
  }
]

const isAnimal = (input: unknown): input is Animal => {
  return typeof input === 'object' 
  && typeof input['type'] === 'string'
  && typeof input['name'] === 'string'
  && typeof input['age'] === 'number'
}

const typeguards = {
  isCat: (animal: unknown): animal is Cat => {
    return isAnimal(animal) && animal['type'] === 'cat'
  },
  isDog: (animal: unknown): animal is Dog => {
    return isAnimal(animal) && animal['type'] === 'dog'
  }
}

/**
 * Use type guards isCat and isDog to check the type for an unknown animal
 * 
 * @param animal 
 * @returns 
 */
const addToList = (animal: unknown): Animal[] => {
  if(typeguards.isCat(animal)) {
    return CATS.concat(animal)
  } else if (typeguards.isDog(animal)) {
    return DOGS.concat(animal)
  }

  throw new Error(`Unknow animal: ${JSON.stringify(animal)}. Skip concatination`)
}

// // Add a cat to list
// log(addToList({type: 'cat', name: 'baz', age: 3}))
// // Invalid cat
// addToList({type: 'cat'})

// // Add a dog to list
// log(addToList({type: 'dog', name: 'baz', age: 3}))
// // Invalid dog
// addToList({type: 'dog', name: 12})

// addToList({foo: 'bar'})

// 
// ------------------ Another version of addToList using assertion function --------------------
//
function assertCat(animal: unknown): asserts animal is Cat {
  if(!isAnimal(animal) || animal['type'] !== 'cat') {
    throw new Error(`${JSON.stringify(animal)} is not a cat`)
  }
}

const addCatToList = (animal: unknown): Cat[] => {
  assertCat(animal)

  return CATS.concat(animal)
}

log(addCatToList({type: 'cat', name: 'baz', age: 3}))
log(addCatToList({type: 'dog', name: 'baz', age: 3}))
