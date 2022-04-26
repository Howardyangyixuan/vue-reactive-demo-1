import {reactive} from "../src/reactive"
import {Watcher} from "../src/watcher"

const data = reactive({
  msg: "Hello World",
  arr: [1, 2, 3],
  obj:{name:'howard'}
})

new Watcher(() => {
  document.getElementById("app").innerHTML = `
    msg is ${data.msg}
    arr is ${data.arr}
    obj is ${JSON.stringify(data.obj)}
     <br>
  `
})
const input = document.getElementById("msg")
input.addEventListener("keyup", (event) => {
  console.log(event.target.value)
  data.msg = event.target.value
})


window.data = data

