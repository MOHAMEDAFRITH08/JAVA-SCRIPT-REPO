document.getElementById("headId").innerText="Javascript-Simple Create, Read, Update and Delete Function";
var ename = [];
function userData(){
    var inputElement = document.getElementById("inputId").value;
    ename.push(inputElement);
    document.getElementById("inputId").value = "";
    userTable();
}
function userTable(){
    var emptyStr = '';
    ename.forEach(function(value,index){
        emptyStr += `<tr><td>${value}</td><td><button class='text-white bg-warning border-5'><i class='fa-solid fa-pen-to-square'></i>Edit</button> | <button class='text-white bg-danger border-5' onclick="removedata(${index})"><i class='fa-solid fa-trash'></i>Delete</button></td></tr>`;
    })
    document.getElementById("tableId").innerHTML = "<thead border='2px' class='bg-info text-white border-5'><th>Name</th> <th>Action</th></thead>"+emptyStr;
}
function removedata(id){
    ename.splice(id,1);
    userTable();
}