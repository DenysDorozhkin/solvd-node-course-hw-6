function throttle(func, interval) {
  let lastExecutedTime = 0;
  let timeout;
  return function (...args) {
    const currentTime = Date.now();
    const timeSinceLastExecution = currentTime - lastExecutedTime;
    if (!timeout && timeSinceLastExecution >= interval) {
      func.apply(this, args);
      lastExecutedTime = currentTime;
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
        lastExecutedTime = Date.now();
        timeout = null;
      }, interval - timeSinceLastExecution);
    }
  };
}

function onScroll(event) {
  console.log("Scroll event:", event);
}

const throttledScrollHandler = throttle(onScroll, 1000);

window.addEventListener("scroll", throttledScrollHandler);
