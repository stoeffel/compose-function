import arityN from 'arity-n';


const compose2 = (f, g) => (...args) => f(g(...args));

export default function compose(...functions) {

  const funcs = functions.filter(fn => typeof fn === 'function');

  const lastIdx = funcs.length - 1;
  let arity = 0;

  if (lastIdx < 0) {
    throw new Error('No funcs passed');
  }


  if (lastIdx >= 0 && funcs[lastIdx]) {
    arity = funcs[lastIdx].length;
  }

  return arityN(funcs.reduce(compose2), arity);
}
