const debounce = (callback: Function, delay: number, immediate = false) => {
    let timerId: ReturnType<typeof setTimeout>;
    const debouncedFn = (...args: any[]) => {
      clearTimeout(timerId);
      const shouldCallImmediately = timerId == null && immediate;
      if (shouldCallImmediately) {
        callback(...args);
      }
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  
    debouncedFn.cancel = () => clearTimeout(timerId);
  
    return debounce;
  };
  