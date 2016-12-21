js_title="title";



function poi(){

var new_dom = document.createElement("DIV");        // Create a <button> element
new_dom.setAttribute("id", "div_title");
$("body").prepend(new_dom);//append
$("#div_title").html("目錄");
$("#div_title").append("<b>Hello world!</b>");
console.log($("#div_title").html());//目錄<b>Hello world!</b>
$("#div_title").attr("style","color:#FF0000;");
$("#div_title").css("background-color","#FFFF00");
console.log($("#div_title").attr("style"));//color: rgb(255, 0, 0); background-color: rgb(255, 255, 0);

$("#div_title").append("<a href='./index.html'>主頁</a>/");
$("#div_title").append("<a href='./161219.htm'>測試</a>/");

//new_dom.innerHTML="目錄";
//document.body.appendChild(new_dom);                    // Append <button> to <body>
//var new_text = document.createTextNode("目錄");       // Create a text node
//new_dom.appendChild(new_text);                                // Append the text to <button>
//var tmp=document.getElementById("div_title");


}


