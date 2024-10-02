function callculator(val)
{
    document.getElementById('display').value =document.getElementById('display').value+val;
}
function cleardisplay(){
    document.getElementById("display").value="";
}
function callculate(){
   var userinput= document.getElementById('display').value;
   var result=eval(userinput);
   document.getElementById('display').value=result;
}
function del(){
    document.getElementById('display').value = document.getElementById('display').value.slice(0,-1);
}