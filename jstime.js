function desabilitabotao(){
document.getElementById("bt1").disabled = true; 
document.getElementById("bt2").disabled = true; 
document.getElementById("bt3").disabled = false; 
document.getElementById("bt4").disabled = true; 
document.getElementById("bt5").disabled = true; 
document.getElementById("bt7").disabled = true; 
document.getElementById("bt8").disabled = true; 
}
function escolhezaga1(){
var Nomes1, Nomes2, Nomes3, Nomes4;
Nomes1 = document.getElementById('z11').value;;
Nomes2 = document.getElementById('z12').value;
Nomes3 = document.getElementById('z13').value;
Nomes4 = document.getElementById('z14').value;

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
var linha = (shuffle(Nomes1+","+Nomes2+","+Nomes3+","+Nomes4));
var parts = linha.split(',');
zaga1 = new Array(4);function escolheataque2(){
var Nomes1, Nomes2, Nomes3, Nomes4;
Nomes1 = document.getElementById('a21').value;
Nomes2 = document.getElementById('a22').value;
Nomes3 = document.getElementById('a23').value;
Nomes4 = document.getElementById('a24').value;

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
var linha = (shuffle(Nomes1+","+Nomes2+","+Nomes3+","+Nomes4));
var parts = linha.split(',');
ataque2 = new Array(4);
ataque2[0]=parts[0];
ataque2[1]=parts[1];
ataque2[2]=parts[2];
ataque2[3]=parts[3];
var parte1 = "<tr bgcolor='#B5B5B5' align='center' style='width: 150px; font-family:Tahoma, Arial, Helvetica, sans-serif; font-size:10px'><td>"+ataque2[0]+"</td>";
var parte2 = "<td>"+ataque2[1]+"</td>";
var parte3 = "<td>"+ataque2[2]+"</td>";
var parte4 = "<td>"+ataque2[3]+"</td></tr>";
document.getElementById("tabela_produto").innerHTML += parte1 + parte2 + parte3 + parte4;
document.getElementById("bt2").disabled = true; 
}
zaga1[0]=parts[0];
zaga1[1]=parts[1];
zaga1[2]=parts[2];
zaga1[3]=parts[3];
var parte1 = "<tr bgcolor='#2E8B57' align='center' style='width: 150px; font-family:Tahoma, Arial, Helvetica, sans-serif; font-size:10px'><td>"+zaga1[0]+"</td>";
var parte2 = "<td>"+zaga1[1]+"</td>";
var parte3 = "<td>"+zaga1[2]+"</td>";
var parte4 = "<td>"+zaga1[3]+"</td></tr>";
document.getElementById("tabela_produto").innerHTML += parte1 + parte2 + parte3 + parte4;
document.getElementById("bt3").disabled = true; 
document.getElementById("bt4").disabled = false; 
}

function escolhezaga2(){
var Nomes1, Nomes2, Nomes3, Nomes4;
Nomes1 = document.getElementById('z21').value;
Nomes2 = document.getElementById('z22').value;
Nomes3 = document.getElementById('z23').value;
Nomes4 = document.getElementById('z24').value;

function shuffle(string) {
    var parts = string.split(',');
    for (var i = parts.length; i > 0;) { src="jstimes.js"
        var random = parseInt(Math.random() * i);
        var temp = parts[--i];
        parts[i] = parts[random];
        parts[random] = temp;
    }
    return parts.join(',');
}
var linha = (shuffle(Nomes1+","+Nomes2+","+Nomes3+","+Nomes4));
var parts = linha.split(',');
zaga2 = new Array(4);
zaga2[0]=parts[0];
zaga2[1]=parts[1];
zaga2[2]=parts[2];
zaga2[3]=parts[3];
var parte1 = "<tr bgcolor='#00FF7F' align='center' style='width: 150px; font-family:Tahoma, Arial, Helvetica, sans-serif; font-size:10px'><td>"+zaga2[0]+"</td>";
var parte2 = "<td>"+zaga2[1]+"</td>";
var parte3 = "<td>"+zaga2[2]+"</td>";
var parte4 = "<td>"+zaga2[3]+"</td></tr>";
document.getElementById("tabela_produto").innerHTML += parte1 + parte2 + parte3 + parte4;
document.getElementById("bt4").disabled = true; 
document.getElementById("bt5").disabled = false; 
}

function escolhezaga3(){
var Nomes1, Nomes2, Nomes3, Nomes4;
Nomes1 = document.getElementById('z31').value;
Nomes2 = document.getElementById('z32').value;
Nomes3 = document.getElementById('z33').value;
Nomes4 = document.getElementById('z34').value;

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
var linha = (shuffle(Nomes1+","+Nomes2+","+Nomes3+","+Nomes4));
var parts = linha.split(',');
zaga3 = new Array(4);
zaga3[0]=parts[0];
zaga3[1]=parts[1]; src="jstimes.js"
zaga3[2]=parts[2];
zaga3[3]=parts[3];
var parte1 = "<tr bgcolor='#9370DB' align='center' style='width: 150px; font-family:Tahoma, Arial, Helvetica, sans-serif; font-size:10px'><td>"+zaga3[0]+"</td>";
var parte2 = "<td>"+zaga3[1]+"</td>";
var parte3 = "<td>"+zaga3[2]+"</td>";
var parte4 = "<td>"+zaga3[3]+"</td></tr>";
document.getElementById("tabela_produto").innerHTML += parte1 + parte2 + parte3 + parte4;
document.getElementById("bt5").disabled = true; 
document.getElementById("bt7").disabled = false; 
}

function escolhemeia1(){
var Nomes1, Nomes2, Nomes3, Nomes4, Nomes5, Nomes6, Nomes7, Nomes8;
Nomes1 = document.getElementById('m11').value;
Nomes2 = document.getElementById('m12').value;
Nomes3 = document.getElementById('m13').value;
Nomes4 = document.getElementById('m14').value;
Nomes5 = document.getElementById('m15').value;
Nomes6 = document.getElementById('m16').value;
Nomes7 = document.getElementById('m17').value;
Nomes8 = document.getElementById('m18').value;

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
var linha = (shuffle(Nomes1+","+Nomes2+","+Nomes3+","+Nomes4+","+Nomes5+","+Nomes6+","+Nomes7+","+Nomes8));
var parts = linha.split(',');
meias1 = new Array(8);
meias1[0]=parts[0];
meias1[1]=parts[1];
meias1[2]=parts[2];
meias1[3]=parts[3];
meias1[4]=parts[4];
meias1[5]=parts[5];
meias1[6]=parts[6];
meias1[7]=parts[7];
var parte1 = "<tr bgcolor='#F0E68C' align='center' style='width: 150px; font-family:Tahoma, Arial, Helvetica, sans-serif; font-size:10px'><td>"+meias1[0]+"</td>";
var parte2 = "<td>"+meias1[1]+"</td>";
var parte3 = "<td>"+meias1[2]+"</td>";
var parte4 = "<td>"+meias1[3]+"</td>";
document.getElementById("tabela_produto").innerHTML += parte1 + parte2 + parte3 + parte4;
document.getElementById("tabela_produto").innerHTML += "</tr>";
var parte5 = "<tr bgcolor='#F0E68C' align='center' style='width: 150px; font-family:Tahoma, Arial, Helvetica, sans-serif; font-size:10px'><td>"+meias1[4]+"</td>";
var parte6 = "<td>"+meias1[5]+"</td>";
var parte7 = "<td>"+meias1[6]+"</td>";
var parte8 = "<td>"+meias1[7]+"</td></tr>";
document.getElementById("tabela_produto").innerHTML += parte5 + parte6 + parte7 + parte8;
document.getElementById("bt7").disabled = true; 
document.getElementById("bt8").disabled = false; 
}

function escolhemeia2(){
var Nomes1, Nomes2, Nomes3, Nomes4, Nomes5, Nomes6, Nomes7, Nomes8;
Nomes1 = document.getElementById('m21').value;
Nomes2 = document.getElementById('m22').value;
Nomes3 = document.getElementById('m23').value;
Nomes4 = document.getElementById('m24').value;
Nomes5 = document.getElementById('m25').value;
Nomes6 = document.getElementById('m26').value;
Nomes7 = document.getElementById('m27').value;
Nomes8 = document.getElementById('m28').value;

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
var linha = (shuffle(Nomes1+","+Nomes2+","+Nomes3+","+Nomes4+","+Nomes5+","+Nomes6+","+Nomes7+","+Nomes8));
var parts = linha.split(',');
meias2 = new Array(8);
meias2[0]=parts[0];
meias2[1]=parts[1];
meias2[2]=parts[2];
meias2[3]=parts[3];
meias2[4]=parts[4];
meias2[5]=parts[5];
meias2[6]=parts[6];
meias2[7]=parts[7];
var parte1 = "<tr bgcolor='#FFFF00' align='center' style='width: 150px; font-family:Tahoma, Arial, Helvetica, sans-serif; font-size:10px'><td>"+meias2[0]+"</td>";
var parte2 = "<td>"+meias2[1]+"</td>";
var parte3 = "<td>"+meias2[2]+"</td>";
var parte4 = "<td>"+meias2[3]+"</td>";
document.getElementById("tabela_produto").innerHTML += parte1 + parte2 + parte3 + parte4;
document.getElementById("tabela_produto").innerHTML += "</tr>";
var parte5 = "<tr bgcolor='#FFFF00' align='center' style='width: 150px; font-family:Tahoma, Arial, Helvetica, sans-serif; font-size:10px'><td>"+meias2[4]+"</td>";
var parte6 = "<td>"+meias2[5]+"</td>";
var parte7 = "<td>"+meias2[6]+"</td>";
var parte8 = "<td>"+meias2[7]+"</td></tr>";
document.getElementById("tabela_produto").innerHTML += parte5 + parte6 + parte7 + parte8;
document.getElementById("bt8").disabled = true; 
document.getElementById("bt1").disabled = false; 
}

function escolheataque1(){
var Nomes1, Nomes2, Nomes3, Nomes4;
Nomes1 = document.getElementById('a11').value;
Nomes2 = document.getElementById('a12').value;
Nomes3 = document.getElementById('a13').value;
Nomes4 = document.getElementById('a14').value;

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
var linha = (shuffle(Nomes1+","+Nomes2+","+Nomes3+","+Nomes4));
var parts = linha.split(',');
ataque1 = new Array(4);
ataque1[0]=parts[0];
ataque1[1]=parts[1];
ataque1[2]=parts[2];
ataque1[3]=parts[3];
var parte1 = "<tr bgcolor='#FA8072' align='center' style='width: 150px; font-family:Tahoma, Arial, Helvetica, sans-serif; font-size:10px'><td>"+ataque1[0]+"</td>";
var parte2 = "<td>"+ataque1[1]+"</td>";
var parte3 = "<td>"+ataque1[2]+"</td>";
var parte4 = "<td>"+ataque1[3]+"</td></tr>";
document.getElementById("tabela_produto").innerHTML += parte1 + parte2 + parte3 + parte4;
document.getElementById("bt1").disabled = true; 
document.getElementById("bt2").disabled = false; 
}

function escolheataque2(){
var Nomes1, Nomes2, Nomes3, Nomes4;
Nomes1 = document.getElementById('a21').value;
Nomes2 = document.getElementById('a22').value;
Nomes3 = document.getElementById('a23').value;
Nomes4 = document.getElementById('a24').value;

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
var linha = (shuffle(Nomes1+","+Nomes2+","+Nomes3+","+Nomes4));
var parts = linha.split(',');
ataque2 = new Array(4);
ataque2[0]=parts[0];
ataque2[1]=parts[1];
ataque2[2]=parts[2];
ataque2[3]=parts[3];
var parte1 = "<tr bgcolor='#B5B5B5' align='center' style='width: 150px; font-family:Tahoma, Arial, Helvetica, sans-serif; font-size:10px'><td>"+ataque2[0]+"</td>";
var parte2 = "<td>"+ataque2[1]+"</td>";
var parte3 = "<td>"+ataque2[2]+"</td>";
var parte4 = "<td>"+ataque2[3]+"</td></tr>";
document.getElementById("tabela_produto").innerHTML += parte1 + parte2 + parte3 + parte4;
document.getElementById("bt2").disabled = true; 
}
