// 节流
export  const throttle=(fn, time)=> {
  let timer = null
  time = time || 1000
  return function(...args) {
      if (timer) {
          return
      }
      const _this = this
      timer = setTimeout(() => {
          timer = null
      }, time)
      fn.apply(_this, args)
  }
}

// 防抖
export const debounce=(fn, time)=> {
  time = time || 200
  // 定时器
  let timer = null
  return function(...args) {
      const _this = this;
      if (timer) {
          clearTimeout(timer)
      }
      timer = setTimeout(function() {
          timer = null
          fn.apply(_this, args)
      }, time)
  }
}

