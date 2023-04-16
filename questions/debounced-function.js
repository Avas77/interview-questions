function debounce(fn, time) {
  let setTimeoutId;
  return () => {
    if (setTimeoutId) {
      clearTimeout();
    }

    setTimeoutId = setTimeout(() => {
      fn.apply(this, arguments);
      setTimeoutId = null;
    }, time);
  };
}

const debouncedfn = debounce(() => {
  console.log("Rema");
}, 5000);

debouncedfn();
