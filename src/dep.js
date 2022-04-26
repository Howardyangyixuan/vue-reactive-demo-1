class Dep {
  // static target = null

  constructor() {
    this.deps = new Set()
    console.log(this.deps)
  }

  depend() {
    //并非初始化组建时,Dep.target为null
    if(Dep.target)
    this.deps.add(Dep.target)
    console.log("depend:",this.deps)
  }

  notify() {
    for (const watcher of this.deps) {
      console.log("watcher:",watcher)
      watcher.update()
    }
  }
}
Dep.target = null

export {Dep}