if (typeof campos === 'undefined') var campos = 0;
if (typeof cookieName === 'undefined') var cookieName = "farmeruk";
if (typeof aviso === 'undefined') var aviso = false;
if (typeof (repetir_ataques) === "undefined") var repetir_ataques = 1;

var a_bk = coords_ataque.split(" ");
var a_d = "";

for (i = 0; i < a_bk.length; i++) {
	for (i2 = 0; i2 < repetir_ataques; i2++) {
		a_d = a_d + " " + a_bk[i];
	}
}

coords_ataque = $.trim(a_d);

var doc = document;
var url = document.URL;
if (url.search(/screen=place/) != -1 && url.search(/try=confirm/) === -1 && document.forms[0].x.value === "" && document.forms[0].y.value === "") {
	if (window.frames.length > 0) {
		doc = window.document;
	}
	url = document.URL;
	if (url.indexOf('screen=place') == -1) {
		alert('Para usar este script você precisa estar na Praça de Reunião!');
	}
	coords_ataque = coords_ataque.split(" ");
	var index = 0;
	farmcookie = document.cookie.match('(^|;) ?' + cookieName + '=([^;]*)(;|$)');
	if (farmcookie != null) {
		index = parseInt(farmcookie[2]);
	}
	if (index >= coords_ataque.length) {
		index = aviso ? (confirm('Último ataque já foi enviado, continuar?') ? 0 : -1) : 0;
	}
	if (index >= 0) {
		coords_ataque = coords_ataque[index];
		coords_ataque = coords_ataque.split("|");
		index = index + 1;
		cookie_date = new Date(2019, 11, 11);
		document.cookie = cookieName + "=" + index + ";expires=" + cookie_date.toGMTString();
		
		if (campos > 0) {

			coord1 = game_data.village.coord;
			coord2 = coords_ataque[0] + "|" + coords_ataque[1];

			x1 = coord1.substring(0, 3);
			y1 = coord1.substring(4, 7);
			x2 = coord2.substring(0, 3);
			y2 = coord2.substring(4, 7);
			x = Math.abs(x1 - x2);
			y = Math.abs(y1 - y2);
			n = Math.sqrt(x * x + y * y);
			n = parseInt(n, 10);
	
			if (n > campos) {
				alert("\"" + coord2 + "\" Esta coordenada ultrapassa o limite de campos.");
				end();
			}
		}
		
		doc.forms[0].x.value = coords_ataque[0];
		doc.forms[0].y.value = coords_ataque[1];
		try {
			var j = $('input#unit_input_spear').next().text().match(/\((\d+)\)/)[1];
			insertUnit(doc.forms[0].spear, Math.min(lanca, j));
		} catch (e) {};
		try {
			var j = $('input#unit_input_sword').next().text().match(/\((\d+)\)/)[1];
			insertUnit(doc.forms[0].sword, Math.min(espada, j));
		} catch (e) {};
		try {
			var j = $('input#unit_input_axe').next().text().match(/\((\d+)\)/)[1];
			insertUnit(doc.forms[0].axe, Math.min(barbaro, j));
		} catch (e) {};
		try {
			var j = $('input#unit_input_archer').next().text().match(/\((\d+)\)/)[1];
			insertUnit(doc.forms[0].archer, Math.min(arqueiro, j));
		} catch (e) {};
		try {
			var j = $('input#unit_input_spy').next().text().match(/\((\d+)\)/)[1];
			insertUnit(doc.forms[0].spy, Math.min(explorador, j));
		} catch (e) {};
		try {
			var j = $('input#unit_input_light').next().text().match(/\((\d+)\)/)[1];
			insertUnit(doc.forms[0].light, Math.min(cavalaria_leve, j));
		} catch (e) {};
		try {
			var j = $('input#unit_input_marcher').next().text().match(/\((\d+)\)/)[1];
			insertUnit(doc.forms[0].marcher, Math.min(cavalaria_arqueira, j));
		} catch (e) {};
		try {
			var j = $('input#unit_input_heavy').next().text().match(/\((\d+)\)/)[1];
			insertUnit(doc.forms[0].heavy, Math.min(cavalaria_pesada, j));
		} catch (e) {};
		try {
			var j = $('input#unit_input_ram').next().text().match(/\((\d+)\)/)[1];
			insertUnit(doc.forms[0].ram, Math.min(ariete, j));
		} catch (e) {};
		try {
			var j = $('input#unit_input_catapult').next().text().match(/\((\d+)\)/)[1];
			insertUnit(doc.forms[0].catapult, Math.min(catapulta, j));
		} catch (e) {};
		try {
			var j = $('input#unit_input_snob').next().text().match(/\((\d+)\)/)[1];
			insertUnit(doc.forms[0].snob, Math.min(nobre, j));
		} catch (e) {};
		try {
			var j = $('input#unit_input_knight').next().text().match(/\((\d+)\)/)[1];
			insertUnit(doc.forms[0].knight, Math.min(paladino, j));
		} catch (e) {};
		try {
			apoiar ? document.forms[0].support.click() : document.forms[0].attack.click()
		} catch (e) {
			document.forms[0].attack.click()
		};
	}
} else if (url.search(/screen=place/) != -1 && url.search(/try=confirm/) === -1 && parseInt(doc.forms[0].x.value) > 0 && parseInt(doc.forms[0].x.value) < 999 && parseInt(doc.forms[0].y.value) > 0 && parseInt(doc.forms[0].y.value) < 999) {
	try {
		apoiar ? document.forms[0].support.click() : document.forms[0].attack.click()
	} catch (e) {
		document.forms[0].attack.click()
	};
} else if (url.search(/screen=place/) != -1 && url.search(/try=confirm/) != -1) {
	document.forms[0].submit.click();
} else {
	alert('Para usar este script você precisa estar na Praça de Reunião!');
}
void(0);