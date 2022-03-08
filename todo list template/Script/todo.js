var todoList = JSON.parse(localStorage.getItem("todoLocal"));
console.log(todoList);
var complete = []

todoList.map(function(elem){
    var row = document.createElement("tr")
  
    var col1 = document.createElement("td")
    col1.innerText = elem.name

    var col2 = document.createElement("td")
    col2.innerText = elem.qty

    var col3 = document.createElement("td")
    col3.innerText = elem.priority

    var col4 = document.createElement("button")
    col4.innerText = "Mark complete";


    col4.addEventListener("click",function(){
        markcomplete(elem);
    }) 


    row.append(col1,col2,col3,col4)
    document.querySelector("#body").append(row)
  })

  function  markcomplete(elem){
    console.log(elem)
    complete.push(elem)
    localStorage.setItem("acc",JSON.stringify(complete))
}

