import {Dep} from "./dep.js"

const targetStack = []

function popTarget() {
  Dep.target = targetStack.pop()
}

function pushTarget(target) {
  // 不会为空，不用额外检车
  // if (Dep.target)
  targetStack.push(Dep.target)
  Dep.target = target
}

export {targetStack, popTarget, pushTarget}