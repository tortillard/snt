var abonnements = function() {
	var btn1=document.getElementById("bouton1");
	btn1.addEventListener("click",mario);
	var btn2=document.getElementById("bouton2");
	btn2.addEventListener("click",chgt);
	var codeHTML="";
	for (var j=0;j<16;j++) {
		for (var i=0;i<12;i++) {
			codeHTML=codeHTML+"<input type='text' size='2' maxlength='3' value='255' class='nombre rouge' id='pixelR"+i+"_"+j+"'><input type='text' size='2' maxlength='3' value='255' class='nombre vert' id='pixelV"+i+"_"+j+"'><input type='text' size='2' maxlength='3' value='255' class='nombre bleu' id='pixelB"+i+"_"+j+"'>";
			
		}
		codeHTML=codeHTML+"</br>";
	}
	document.getElementById("numeros").innerHTML=codeHTML;
	document.addEventListener("keyup",chgtCouleur);
	chgtCouleur();
	var donnees = document.getElementsByClassName("nombres");
	for (var i=0;i<donnees.length;i++) {
		donnees[i].value="255";
	}
	var filtres = document.getElementsByName("filtre");
	for (var i=0;i<filtres.length;i++) {
		filtres[i].addEventListener("change",chgtCouleur);
	}
	document.getElementById("lumin").addEventListener("change",chgtCouleur);
	
}

window.addEventListener("load",abonnements);// lance la fonction abonnements après le chargement de ma page

//quand on appuie sur le 1er bouton
var chgtCouleur = function(){
	var c = document.getElementById("img");
  	var ctx = c.getContext("2d");
	var rouge = document.getElementsByClassName("rouge");
	var vert = document.getElementsByClassName("vert");
	var bleu = document.getElementsByClassName("bleu");
	var filtres = document.getElementsByName("filtre");
	var lumino = parseInt(document.getElementById("lumin").value*255/100);
	for (var i=0;i<192;i++) {
		var r=rouge[i].value;
        var v=vert[i].value;
        var b=bleu[i].value;
        if (r>lumino) {
            r=lumino;
        }
        if (v>lumino) {
            v=lumino;
        }
        if (b>lumino) {
            b=lumino;
        }
        var abscisse=i%12*10;
        var ordonnee=(i-i%12)/12*10;
	    if (filtres[0].checked) {
	        v=0;
	        b=0;
	    }
		if (filtres[1].checked) {
	        r=0;
	        b=0;
	    }
	    if (filtres[2].checked) {
	        v=0;
	        r=0;
	    }
		if (filtres[3].checked) {
	        r=0;
	    }
		if (filtres[4].checked) {
	        v=0;
	    }
	    if (filtres[5].checked) {
	        b=0;
	    }
		if (filtres[6].checked) {
	        rouge2=r/255;
	        vert2=v/255;
	        bleu2=b/255;
	        if (rouge2<0.04045) {
	            rougeLin=rouge2/12.92;
	        }
	        else {
	            rougeLin=Math.pow((rouge2+0.055)/1.055,2.4)
	        }
	        if (vert2<0.04045) {
	            vertLin=vert2/12.92;
	        }
	        else {
	            vertLin=Math.pow((vert2+0.055)/1.055,2.4)
	        }
	        if (bleu2<0.04045) {
	            bleuLin=bleu2/12.92;
	        }
	        else {
	            bleuLin=Math.pow((bleu2+0.055)/1.055,2.4)
	        }
	        g=0.2126*r+0.7152*v+0.0722*b;
	        r=g;
	        v=g;
	        b=g;
	    }
		if (filtres[7].checked) {
		    r=v;
		    b=v;
		}
		if (filtres[8].checked) {
		    minimum=Math.min(r,v,b);
		    maximum=Math.max(r,v,b);
		    g=parseInt((minimum+maximum)/2);
		    r=g;
	        v=g;
	        b=g;
		}
		ctx.fillStyle='rgb('+r+','+v+','+b+')';
		ctx.fillRect(abscisse,ordonnee,10,10);
	}

	
}


var mario = function() {
	liste=[0,0,0,0,0,0,0,0,0,255,0,0,255,0,0,255,0,0,255,0,0,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,0,0,255,0,0,255,0,0,255,0,0,255,0,0,255,0,0,255,0,0,255,0,0,255,0,0,0,0,0,0,0,0,0,0,0,120,60,0,120,60,0,120,60,0,255,170,110,255,170,110,120,60,0,255,170,110,0,0,0,0,0,0,0,0,0,0,0,0,120,60,0,255,170,110,120,60,0,255,170,110,255,170,110,255,170,110,120,60,0,255,170,110,255,170,110,255,170,110,0,0,0,0,0,0,120,60,0,255,170,110,120,60,0,120,60,0,255,170,110,255,170,110,255,170,110,120,60,0,255,170,110,255,170,110,120,60,0,0,0,0,120,60,0,120,60,0,255,170,110,255,170,110,255,170,110,255,170,110,120,60,0,120,60,0,120,60,0,120,60,0,0,0,0,0,0,0,0,0,0,0,0,0,255,170,110,255,170,110,255,170,110,255,170,110,255,170,110,255,170,110,255,170,110,0,0,0,0,0,0,0,0,0,0,0,0,255,0,0,255,0,0,70,100,255,255,0,0,255,0,0,255,0,0,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,0,0,255,0,0,255,0,0,70,100,255,255,0,0,255,0,0,70,100,255,255,0,0,255,0,0,255,0,0,0,0,0,255,0,0,255,0,0,255,0,0,255,0,0,70,100,255,70,100,255,70,100,255,70,100,255,255,0,0,255,0,0,255,0,0,255,0,0,255,255,255,255,255,255,255,0,0,70,100,255,255,255,0,70,100,255,70,100,255,255,255,0,70,100,255,255,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,255,0,0,255,0,0,255,0,0,255,0,0,255,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,255,0,0,255,0,0,255,0,0,255,0,0,255,0,0,255,0,0,255,0,0,255,255,255,255,255,255,0,0,0,0,0,0,70,100,255,70,100,255,70,100,255,0,0,0,0,0,0,70,100,255,70,100,255,70,100,255,0,0,0,0,0,0,0,0,0,120,60,0,120,60,0,120,60,0,0,0,0,0,0,0,0,0,0,0,0,0,120,60,0,120,60,0,120,60,0,0,0,0,120,60,0,120,60,0,120,60,0,120,60,0,0,0,0,0,0,0,0,0,0,0,0,0,120,60,0,120,60,0,120,60,0,120,60,0];
	var nombres = document.getElementsByClassName("nombre");
	for (var i=0;i<liste.length;i++) {
		nombres[i].value=liste[i];
	}
	var donnee2 = document.getElementsByClassName("nombres");
	for (var i=0;i<donnee2.length;i++) {
		donnee2[i].value="";
	}
	chgtCouleur();
}

var chgt = function(event){
	var red=document.getElementById("red");
	var green=document.getElementById("green");
	var blue=document.getElementById("blue");
	var rouges=document.getElementsByClassName("rouge");
	var ro=red.value;
	var ve=green.value;
	var bl=blue.value;
	if (red.value>255) {
		red.value=255;
		ro=255;
	}
	else if (red.value<0) {
		red.value=0;
		ro=0;
	}
	if (green.value>255) {
		green.value=255;
		ve=255;
	}
	else if (green.value<0) {
		green.value=0;
		ve=0;
	}
	if (blue.value>255) {
		blue.value=255;
		bl=255;
	}
	else if (blue.value<0) {
		blue.value=0;
		bl=0;
	}
	for (var i=0;i<rouges.length;i++) {
		rouges[i].value=ro;
	}
	var verts=document.getElementsByClassName("vert");
	for (var i=0;i<verts.length;i++) {
		verts[i].value=ve;
	}
	var bleus=document.getElementsByClassName("bleu");
	for (var i=0;i<bleus.length;i++) {
		bleus[i].value=bl;
	}
	chgtCouleur();
}