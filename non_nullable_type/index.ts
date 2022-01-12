const validBrands = <const>['ferrari', 'lamborghini']

type SportCar = {
  brand: typeof validBrands[number],
  horsePower: number
}

// Typeguard to check if this is a sport car
// const isSportCard = (value: unknown): value is SportCar => {
//   return !!value && typeof value === 'object' 
//   && 'brand' in value && 'horsePower' in value 
//   && validBrands.indexOf((value as SportCar).brand) !== -1
//   && typeof (value as SportCar).horsePower === 'number'
// }


type NonNullish<T> = T extends null | undefined ? never : T;
type NonNullishObject = NonNullish<object>

const isNonNullishObject = (value: unknown): value is NonNullishObject => {
  return !!value && typeof value === 'object'
}

const isSportCar = (value: unknown): value is SportCar => {
  return isNonNullishObject(value)
  && validBrands.indexOf((value as SportCar).brand) !== -1
  && typeof (value as SportCar).horsePower === 'number'
}
