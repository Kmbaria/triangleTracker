function gettriangle(){
var length=parseFloat(prompt("side length"));
var width=parseFloat(prompt("side width"));
var height=parseFloat(prompt("side height"));

if(length===width && length===height && width===height){
alert("equilateral tringle");
}
else if(length===width || length===height || width===height){
alert("isoceles triangle");
}
else if((length+width)<=height || (length+height)<=width || (width+height)<=length){
alert("Invalid Dimention. NOT a Triangle");
}
else{
alert("scalene");
}
}
gettriangle();
