export default function debounce(executor, wait = 0, immediate = false) {
  if (typeof executor !== 'function') {
    throw new Error('executor must be a function');
  }

  let timer = null;
  let shouldCallNow = false;

  return function execute(...args) {
    shouldCallNow = !shouldCallNow && !timer && immediate;

    if (shouldCallNow) { executor.call(this, ...args); }

    clearTimeout(timer);

    timer = setTimeout(() => executor.call(this, ...args), +wait || 0);
  };
}

if (typeof window !== 'undefined') {
  window.$debounce = debounce;
}
