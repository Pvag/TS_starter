const world = 'world'

export function hello(who: string = world): string {
	return `Hello ${who}!`
}

const h1 = hello('Shirley')

console.log(h1)
