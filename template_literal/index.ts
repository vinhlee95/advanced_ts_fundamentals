// 
// ----------- BASIC EXAMPLES ------------
// 
type LengthValue = `${number}px`
type MarginName = 'margin-top' | 'margin-bottom' | 'margin-left' | 'margin-right'
type MarginDef = {
  [K in MarginName]?: LengthValue
}


const topMargin: MarginDef = {"margin-top": "10px"}

// 
// ---------- TEMPLATE LITERALS INFERENCE ----------
// 
/**
 * Inferred type R acts as a variable for a type
 */
type UnpackPromise<T extends Promise<any>> = T extends Promise<infer R>
  ? R
  : never

type S = UnpackPromise<Promise<string>> // string
type N = UnpackPromise<Promise<number>> // number

/**
 * Mapping
 */
 type EventNames = 'click' | 'doubleclick' | 'mousedown' | 'mouseup' | 'keyup';
 type _Element = {
   [K in EventNames as `on${Capitalize<EventNames>}`]: (event: Event) => void;
 } & {
   addEventListener(eventName: EventNames): void;
 };



