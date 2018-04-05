const out = getStreamSomehow();
const err = getStreamSomehow();

myConsole.log('hello world');

myConsole.log('hello %s', 'world');

myConsole.error(new Error('Whoops, something bad happened'));

const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger`);