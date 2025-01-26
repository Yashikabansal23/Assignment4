function addTask(){
    const newTask=document.createElement('li');
    const TaskList=document.getElementById("TaskList");
    TaskList.appendChild(newTask)
    newTask.textContent=document.getElementById('inputText').value
    document.getElementById('inputText').value=" "
    deleteTask(newTask)
}
function deleteTask(newTask){
    const deletebtn =document.createElement('button')
    deletebtn.textContent ="Delete"
    newTask.appendChild(deletebtn)
    deletebtn.onclick=function(){
        newTask.remove()
    }
}