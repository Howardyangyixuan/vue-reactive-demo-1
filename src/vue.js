import {reactive} from "./reactive"
import {Watcher} from "./watcher"

class Vue {
  constructor({el, data, template}) {
    console.log(el)
    console.log(data)
    console.log(template)
    this.el = el
    let val = reactive(data)
    this.template = template
    //代理data
    for (let key of Object.keys(data)) {
      console.log(key)
      Object.defineProperty(this, key, {
        get() {
          console.log("proxy")
          return val[key]
        },
        set(newVal) {
          console.log(newVal)
          val[key] = newVal
        }
      })
      // console.log(this[key])
    }
    return this
  }

  render() {
    //编译器的简化，目的是能够使用template
    let str = this.template
    const reg = /{{([a-z]+)}}/g
    const matches = [...this.template.matchAll(reg)]
    console.log(matches)
    for (let match of matches) {
      str = str.replace(match[0], JSON.stringify(this[match[1]]))
    }
    document.getElementById(this.el).innerHTML = str
  }

  $mount() {
    new Watcher(this.render.bind(this))
    return this
  }
}

export {Vue}