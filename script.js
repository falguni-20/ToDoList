var toDoList = [];
var count=0;
function addToDo() {
  var note = document.querySelector('#note').value;
  var priority = document.querySelector('#priority').value;
  toDoList.push({ note: note, priority: priority });
  sortToDoList();
  
  if (count==0){
  displayToDoList();
}
else
{
  displayToDoList1()
}
}

function sortToDoList() {
  toDoList.sort(function(a, b) {
    return a.priority - b.priority;
  });
}

function displayToDoList() {
  var table = document.querySelector('#toDoList');
  table.innerHTML =
    '<tr><th>Note</th><th>Priority</th><th>Action</th></tr>';
  toDoList.forEach(function(toDo, index) {
    table.innerHTML +=
      '<tr><td>' +
      toDo.note +
      '</td><td>' +
      toDo.priority +
      '</td><td><input type="button" value="Delete" onclick="deleteToDo(' +
      index +
      ')"></td></tr>';
  });

}



var flag=0

 function displayToDoList1() {
  var table = document.querySelector('#toDoList');
  table.innerHTML =
    '<tr><th>Note</th><th>Priority</th><th>Action</th></tr>';
  toDoList.forEach(function(toDo, index) {
    table.innerHTML +=
      '<tr><td>' +
      toDo.note +
      '</td><td>' +
      (index+1) +
      '</td><td><input type="button" value="Delete" onclick="deleteToDo(' +
      index +
      ')"></td></tr>';
  });
  count=1; 
}
  


function deleteToDo(index) {
  toDoList.splice(index, 1);
  var flag=1;
  if(flag==1)
  {
    displayToDoList1();
    flag=0;
  }

}
 function del()
 {
  var current_tasks = document.querySelectorAll(".delete");
      window.location.reload()
 }