
var arr = [];

function SaveTodos() {
    var text = document.getElementById("text").value;
    if (text == "") {
        alert("plese enter any value");
    }else{
    arr.push(text);
    localStorage.setItem("todos", arr.toString());
    document.getElementById("text").value="";
    fetchAlltodos();
}

}

function fetchAlltodos() {
    let str = localStorage.getItem("todos");
    arr=str.split(",");
    var strhtml =`
    <tr> 
     <th> Sr.No </th>
      <th> Title </th>
       <th> Action </th>
    </tr>
    `;

    var counter = 0;
    arr.forEach((ele) => {
        counter++;
        strhtml += `
        
        <tr>
        <td>${counter}</td>
          <td>${ele}</td>
           <td>
              <button class=" btn btn-outline-danger " onclick="EditTodos(${counter-1})">Edit</button>
                <button class=" btn btn-outline-success" onclick="DeletTodos(${ele-1})"> Delet</button>

           </td>
    </tr>
        `
           });
           document.getElementById("table-todo").innerHTML = strhtml;
 
}


function removeAllTodos() {
     arr = [];

     localStorage.setItem("todos", arr.toString());
     document.getElementById("table-todo").innerHTML ="";
}

function EditTodos(index) {
    var newValue = prompt("Do you want to Edit ?", arr[index]);
    if(newValue != null && newValue != ""){
        arr[index] = newValue;
        localStorage.setItem("todos", arr.toString());
        fetchAlltodos();
    }
}
function DeletTodos(index) {

    if( confirm("Do you want to Delet Data ?", arr[index])){
        arr.splice(-index, 1 );
        localStorage.setItem("todos", arr.toString());
        fetchAlltodos();
    }

}