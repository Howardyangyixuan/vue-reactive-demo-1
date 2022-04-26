import {Vue} from "../src/vue"

const vm = new Vue({
  el: "app",
  data: {
    msg: "Hello World",
    arr: [1, 2, 3],
    obj: {name: "howard"}
  },
  template: ` <br> 
 msg is {{msg}} 
 <br>
 arr is {{arr}} 
 <br> 
 obj is {{obj}} 
 <br> 
`
}).$mount()

const msg = document.getElementById("msg")
msg.addEventListener("keyup", (event) => {
  vm.msg = event.target.value
})

window.data = vm