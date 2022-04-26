import {popTarget, pushTarget} from "./targetStack"

class Watcher {
  constructor(render) {
    //组件渲染函数
    this.render = render
    this.get()
  }

  get() {
    pushTarget(this)
    this.render()
    popTarget()
  }

  update() {
    this.get()
  }
}

export {Watcher}