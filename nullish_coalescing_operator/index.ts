/**
 * The ?? operator - as a way to “fall back” to a default value when dealing with null or undefined
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing
 */
const log = (input: any) => console.log(input)

interface Book {
  id: number
  title: string
}

const BOOKS: Book[] = [
  {
    id: 1,
    title: 'Harry Potter'
  },
  {
    id: 2,
    title: 'Sherlock Holmes'
  }
]

const getTitleById = (id: number): Book => {
  // ?? is similar to || 
  return BOOKS.find(b => b.id === id) ?? {id: Math.round(Math.random() * 50), title: 'Default book'}
}

log(getTitleById(1))
log(getTitleById(3))
log('--------')
// 
// ------ ?? vs. || ---------
// 
/**
 * ?? checks for nullish value i.e. null or undefined
 * || checks for falsey value e.g. undefined, null, 0, false
 * 
 * @see https://stackoverflow.com/questions/61480993/when-should-i-use-nullish-coalescing-vs-logical-or
 * 
 */
// Similar cases
log('-------- check undefined --------')
log(undefined ?? 'default value') // 'default value'
log(undefined || 'default value') // 'default value'

log('-------- check null --------')
log(null ?? 'default value') // 'default value'
log(null || 'default value') // 'default value'

// || check for 0 or falsey values
log('-------- check 0 value --------')
log(0 ?? 'default value') // 0
log(0 || 'default value') // 'default value'

log('-------- check false value --------')
log(false ?? 'default value') // false
log(false || 'default value') // 'default value'