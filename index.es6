import arityN from 'arity-n';


let compose2 = (f, g) => (...args) => f(g.apply(null, args));

export default function compose(...functions) {

  functions = functions.filter((fn) => typeof fn === 'function');

  let lastIdx = functions.length - 1;
  let arity = 0;

  if (functions.length <= 0) {
    throw new Error('No functions passed');
  }


  if (lastIdx >= 0 && functions[lastIdx]) {
    arity = functions[lastIdx].length;
  }

  return arityN(functions.reduce(compose2), arity);
}
