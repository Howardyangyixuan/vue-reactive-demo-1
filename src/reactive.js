import {Dep} from "./dep"

function isObject(data) {
  return data != null && typeof data == "object";
}

function defineReactive(data, key) {
  const dep = new Dep()
  let value = data[key]
  //用getter/setter覆盖原属性实现监听
  Object.defineProperty(data, key, {
    get() {
      dep.depend()
      return value
    },
    set(newVal) {
      value = newVal
      dep.notify()
    }
  })
  //如果值是对象，则递归调用reactive使其内部数据均为响应式数据
  if (isObject(value)) {
    reactive(value)
  }
}

function reactive(data) {
  if(isObject(data)){
    for (let key of Object.keys(data)) {
      defineReactive(data, key)
    }
  }
  return data
}

export {reactive}