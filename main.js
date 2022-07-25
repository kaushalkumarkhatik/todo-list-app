const btn = document.getElementById("push");
const newtask = document.querySelector("#myInput");
const all_items = document.querySelector("#items");


btn.addEventListener("click", ()=> {
  if (newtask.value.length == 0) {
    alert("Please Enter a task")
  } else {
    all_items.innerHTML += `<li>${newtask.value}<button class="delete">
    <i class="fa-solid fa-trash-can"></i>
    </button></li>`;

    var cur_task = document.querySelectorAll(".delete")
    for (var i = 0; i < cur_task.length; i++) {
      cur_task[i].onclick = function() {
        this.parentNode.remove();
      }
    }

    
  }
  newtask.value = ""
})