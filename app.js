const selectField = document.getElementById("selectField");
const text= document.getElementById("selectText");
const options = document.getElementsByClassName("option");
const lists = document.getElementById("list");

selectField.onclick = function () {
    lists.classList.toggle("hide");
}

for(option of options){
    option.onclick = function() {
        text.innerHTML = this.textContent;
        lists.classList.toggle("hide");

    }
}