import times from './utils'

const world = 'world'

export function hello(who: string = world): string {
	return `Hello ${who}!`
}

const h1 = hello('Shirley')
console.log(h1)

// use imported code
const n1 = 2, n2 = 4
console.log(n1, 'times', n2, 'equals', times(2, 4))
