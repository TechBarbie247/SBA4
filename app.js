const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list");

function addTask() {
    if (inputBox.value === '') {
        alert("ERROR");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }

inputBox.value = ''; 
  }


listContainer.addEventListener("click", function(a) {
  if (a.target.tagName === "LI") {
    a.target.classList.toggle("select");
  }
  else if(a.target.tagName === "SPAN"){
    a.target.parentElement.remove();

  }
}, false);
