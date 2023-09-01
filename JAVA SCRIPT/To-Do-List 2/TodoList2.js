var items1 = [];
function addItems(){
    var inputElement = document.getElementById("inputId").value;
    items1.push(inputElement);
    document.getElementById("inputId").value = "";
    arrayValues();
}
function arrayValues(){
    var emptyStr = '';
    items1.forEach(function(value,index){
        emptyStr += "<hr><p class='p-2'><input type='checkbox'/> <span> "+value+"</span></p>";
    })
     document.getElementById("addId").innerHTML= emptyStr;
}