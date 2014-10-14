//Escolhe cortados
function sorteia(){

var Nomes1, Nomes2, Nomes3;
Nomes1 = document.getElementById('escolhe1').value;
Nomes2 = document.getElementById('escolhe2').value;
Nomes3 = document.getElementById('escolhe3').value;
var total=0;

if (Nomes1!="" && Nomes2!="" && Nomes3!=""){
total=3;}
else 
if (Nomes1!="" && Nomes2!=""){
total=2;}
else if (Nomes1!=""){
total=1;}



if (total==0){
alert('Insira um jogador.');}

if (total==1){
alert('Um jogador não se sorteia.');}

if (total==3){
function shuffle(string) {
    var parts = string.split(',');
    for (var i = parts.length; i > 0;) {
        var random = parseInt(Math.random() * i);
        var temp = parts[--i];
        parts[i] = parts[random];
        parts[random] = temp;
    }
    return parts.join(',');
}
var linha = (shuffle(Nomes1+","+Nomes2+","+Nomes3));
var parts = linha.split(',');
sorteio = new Array(3);
sorteio[0]=parts[0];
sorteio[1]=parts[1];
sorteio[2]=parts[2];
var time1=document.getElementById('sel1').value;
var time2=document.getElementById('sel2').value;
var time3=document.getElementById('sel3').value;
var parte1 = "<tr bgcolor='#00FF7F' align='center' style='width: 150px; font-family:Tahoma, Arial, Helvetica, sans-serif; font-size:10px'><td><b>"+time1+"</b></td>";
var parte2 = "<td>"+sorteio[0]+"</td></tr>";
var parte3 = "<tr bgcolor='#00FF7F' align='center' style='width: 150px; font-family:Tahoma, Arial, Helvetica, sans-serif; font-size:10px'><td><b>"+time2+"</b></td>";
var parte4 = "<td>"+sorteio[1]+"</td></tr>";
var parte5 = "<tr bgcolor='#00FF7F' align='center' style='width: 150px; font-family:Tahoma, Arial, Helvetica, sans-serif; font-size:10px'><td><b>"+time3+"</b></td>";
var parte6 = "<td>"+sorteio[2]+"</td></tr>";
document.getElementById("tabela_produto").innerHTML += parte1 + parte2 + parte3 + parte4 + parte5 + parte6;

document.getElementById("escolhe1").value="";
document.getElementById("escolhe2").value="";
document.getElementById("escolhe3").value="";
document.getElementById('1').checked;
document.getElementById('2').checked;
document.getElementById('3').checked;
document.getElementById('esc1').checked;
document.getElementById('esc2').checked;
document.getElementById('esc3').checked;
habilita();
document.getElementById('1').disabled=false;
}

if (total==2){

if (!(document.getElementById('esc1').checked)){
document.getElementById('esc2').disabled = true;
document.getElementById('esc3').disabled = true;}




function shuffle(string) {
    var parts = string.split(',');
    for (var i = parts.length; i > 0;) {
        var random = parseInt(Math.random() * i);
        var temp = parts[--i];
        parts[i] = parts[random];
        parts[random] = temp;
    }
    return parts.join(',');
}
var linha = (shuffle(Nomes1+","+Nomes2));
var parts = linha.split(',');
sorteio = new Array(2);
sorteio[0]=parts[0];
sorteio[1]=parts[1];
var time1=document.getElementById('sel1').value;
var time2=document.getElementById('sel2').value;
var parte1 = "<tr bgcolor='#00FF7F' align='center' style='width: 150px; font-family:Tahoma, Arial, Helvetica, sans-serif; font-size:10px'><td><b>"+time1+"</b></td>";
var parte2 = "<td>"+sorteio[0]+"</td></tr>";
var parte3 = "<tr bgcolor='#00FF7F' align='center' style='width: 150px; font-family:Tahoma, Arial, Helvetica, sans-serif; font-size:10px'><td><b>"+time2+"</b></td>";
var parte4 = "<td>"+sorteio[1]+"</td></tr>";

document.getElementById("tabela_produto").innerHTML += parte1 + parte2 + parte3 + parte4;
}

document.getElementById("escolhe1").value="";
document.getElementById("escolhe2").value="";
document.getElementById("escolhe3").value="";
document.getElementById('1').checked=false;
document.getElementById('2').checked=false;
document.getElementById('3').checked=false;
document.getElementById('esc1').checked=false;
document.getElementById('esc2').checked=false;
document.getElementById('esc3').checked=false;
habilita();
document.getElementById('1').disabled=false;

}


function habilita(){
document.getElementById('esc1').disabled = true;
document.getElementById('esc2').disabled = true;
document.getElementById('esc3').disabled = true;
document.getElementById("sel1").disabled = true;
document.getElementById("sel2").disabled = true;
document.getElementById("sel3").disabled = true;

if (!(document.getElementById('1').checked)){
document.getElementById('2').disabled = true;
document.getElementById('3').disabled = true;}

if (!(document.getElementById('2').checked) && document.getElementById('1').checked){
document.getElementById('2').disabled = false;
document.getElementById('1').disabled = true;
document.getElementById('3').disabled = true;
}
if ((document.getElementById('2').checked) && (document.getElementById('1').checked)){
document.getElementById('3').disabled = false;
document.getElementById('1').disabled = true;
document.getElementById('2').disabled = true;
}
if ((document.getElementById('1').checked) && !(document.getElementById('3').checked) && (document.getElementById('2').checked)){
document.getElementById('1').disabled = true;
document.getElementById('2').disabled = false;
}
if ((document.getElementById('1').checked) && !(document.getElementById('3').checked) && !(document.getElementById('2').checked)){
document.getElementById('1').disabled = false;
document.getElementById('3').disabled = true;
document.getElementById('2').disabled = false;}

if (document.getElementById('1').checked){
document.getElementById("escolhe1").readOnly = false;
}
else{
document.getElementById("escolhe1").value="";
document.getElementById("escolhe1").readOnly = true;}

if (document.getElementById('2').checked){
document.getElementById("escolhe2").readOnly = false;
document.getElementById('esc1').disabled = false;

}
else{
document.getElementById("escolhe2").value="";
document.getElementById("escolhe2").readOnly = true;}

if (document.getElementById('3').checked){
document.getElementById("escolhe3").readOnly = false;
document.getElementById('esc1').disabled = false;
}
else{
document.getElementById("escolhe3").value="";
document.getElementById("escolhe3").readOnly = true;}
}

function habilita2(){

if (!(document.getElementById('esc1').checked)){
document.getElementById('esc2').disabled = true;
document.getElementById('esc3').disabled = true;}

if (!(document.getElementById('esc2').checked) && document.getElementById('esc1').checked){
document.getElementById('esc2').disabled = false;
document.getElementById('esc1').disabled = true;
document.getElementById('esc3').disabled = true;
}
if ((document.getElementById('esc2').checked) && (document.getElementById('esc1').checked)){
document.getElementById('esc3').disabled = false;
document.getElementById('esc1').disabled = true;
document.getElementById('esc2').disabled = true;
}
if ((document.getElementById('esc1').checked) && !(document.getElementById('esc3').checked) && (document.getElementById('esc2').checked)){
document.getElementById('esc1').disabled = true;
document.getElementById('esc2').disabled = false;
}
if ((document.getElementById('esc1').checked) && !(document.getElementById('esc3').checked) && !(document.getElementById('esc2').checked)){
document.getElementById('esc1').disabled = false;
document.getElementById('esc3').disabled = true;
document.getElementById('esc2').disabled = false;}

	if (document.getElementById('esc1').checked){ 
	document.getElementById("sel1").disabled = false;}
		else{
		document.getElementById("sel1").disabled = true;}

	if (document.getElementById('esc2').checked){
	document.getElementById("sel2").disabled = false;} 
		else{
		document.getElementById("sel2").disabled = true;}

	if (document.getElementById('esc3').checked){
	document.getElementById("sel3").disabled = false;} 
		else{
		document.getElementById("sel3").disabled = true;}
}












