import './scss/index.scss'

console.log('Hello world');

async function start() {
  return await Promise.resolve('async worked');
}

start().then(console.log);
