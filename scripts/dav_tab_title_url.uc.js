// ==UserScript==
// @name                 dav_tab_title_url.uc
// @version              2.0
// @description          dav_tab_title_url.uc
// ==/UserScript==

/*
Idea based on
https://github.com/LouCypher/tab-tooltip-url
*/

(function(){
	if(location.href != 'chrome://browser/content/browser.xhtml') return;

	var linkifiesUrl = true;

function linkifiesLocationBar(url)
{
	const colorizeExtensionFile = false;
	const CLIKS = {
		left: 0,
		middle: 1,
		right: 2
	}

	var styleString = (style) => {
		return Object.keys(style).reduce((prev, curr) => {
			return `${prev += curr.split(/(?=[A-Z])/).join('-').toLowerCase()}:${style[curr]};`
		}, '');
	};

	function createElement(elto) {
		elto = Object.assign({
			attr: {},
			evtListener: [],
			estilos: {}
		}, elto);
		var node = document.createElement(elto.type);

		Object.keys(elto.attrArray).forEach(key => {
			if(key == "innerHTML"){
				node.innerHTML = encodeHTML(elto.attrArray[key]);
			}
			else {
				node.setAttribute(key, elto.attrArray[key]);
			}
		});

		elto.evtListener.forEach(evt => {
			node.addEventListener(evt.type, evt.funcion, false);
		});

		let estilo = styleString(elto.estilos);
		if (estilo) {
			node.setAttribute("style", estilo);
		}

		return node;
	}

	function appendPart(text, clase) {
		if (!text) return;

		if(clase == "pathname")
		{
			let sp = createElement({
				type: "label",
				attrArray: {
					class: "label_pathname",
					innerHTML:"/"
				}
			});
			divLocationBar.appendChild(sp);
		}
		let sp = createElement({
			type: "span",
			attrArray: {
				class: clase,
				innerHTML:text
			}
		});
		divLocationBar.appendChild(sp);
		sp.setAttribute("href", divLocationBar.textContent);
		return sp;
	}

	function clickPart(evt) {
		if (evt.button == CLIKS.right) return;

		let target = evt.target;
		if (target.className != "protocol") {
			let href = target.getAttribute("href");
			console.log("href", href);
			evt.stopPropagation();
		}
	}

	var divLocationBar = createElement({
		type: "div",
		attrArray: {
			class: "claseLocationBarTooltip"
		}
	});

	try {
		var { protocol, hostname, port, pathname, hash, search } = new URL(url);
	} catch (e) {
		divLocationBar.innerHTML = encodeHTML(url);
		return divLocationBar;
	}

	var partido = hostname.split(".");
	var subdomain;
	if(partido.length > 2 && !partido.every( v => v == v-0 ))//chequeamos que no sean todos numeros, porque entonces es una IP
	{
		subdomain = partido.splice(0, partido.length-2).join(".");
		hostname= partido.join(".");
	}

	appendPart(protocol + "//", "protocol");
	if (subdomain) {
		appendPart(subdomain+".", "subdomain");
	}
	appendPart(hostname, "hostname");
	if (port) {
		appendPart(":" + port, "port");
	}
	var arrayPathname = pathname.split("/");
	var arrayPathnameLength = arrayPathname.length;
	arrayPathname.forEach((elto, index) => {
		if (elto) {
			let sp = appendPart(elto, "pathname");
			if(colorizeExtensionFile && index == arrayPathnameLength-1)
			{
				let arrayDot = elto.split(".");
				if(arrayDot.length > 1)
				{
					let extension = arrayDot.pop();
					sp.innerHTML = "";
					sp.appendChild(createElement({
						type: "locationBarTag",
						attrArray: {
							href:sp.getAttribute("href"),
							innerHTML: arrayDot.join(".")
						}
					}));
					sp.appendChild(createElement({
						type: "locationBarTag",
						attrArray: {
							class: "extension",
							href:sp.getAttribute("href"),
							innerHTML: "."+extension
						}
					}));
				}
			}
		}
	});
	appendPart(search, "search");
	appendPart(hash, "hash");

	return divLocationBar;
}


var CSS_Loader = {
	type:{
		AGENT_SHEET: 0,
		USER_SHEET: 1,
		AUTHOR_SHEET: 2
	},
	type_default:1,
	sss: Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService),
	load: function(cssCode) {
		this.unload(cssCode);
		var uri = Services.io.newURI("data:text/css;charset=utf-8," + encodeURIComponent(cssCode), null, null);
		this.sss.loadAndRegisterSheet(uri, this.type_default);
	},
	unload: function(cssCode) {
		var uri = Services.io.newURI("data:text/css;charset=utf-8," + encodeURIComponent(cssCode), null, null);
		if (this.sss.sheetRegistered(uri,this.type_default))
		{
			this.sss.unregisterSheet(uri,this.type_default);
		}
	}
}
function asignaEstilos(){
	var style = `
	/*************************************
	*************** COLORS ***************
	*************************************/
	.claseLocationBarTooltip{
	  font-family:monospace;
	  margin:5px;
	}
	.claseLocationBarTooltip .label_pathname{
		color: black;
	}
	.claseLocationBarTooltip span.protocol{
		font-weight: normal;
		color: #777777;
		margin-right: -1px;
	}
	.claseLocationBarTooltip .subdomain {
		font-weight: bold;
		color: #C68007;
	}
	.claseLocationBarTooltip span.hostname{
		font-weight: bold;
		color: red;
	}
	.claseLocationBarTooltip span.port{
		color: #5F58A3;
	}
	.claseLocationBarTooltip span.pathname{
		color: black;
	}
	.claseLocationBarTooltip span.hash{
		color: #1054C9;
		margin-left: -1px;
	}
	.claseLocationBarTooltip span.search{
		color: #03AA03;
		margin-left: -1px;
	}
	.claseLocationBarTooltip .extension{
		color: rgb(96,86,143);
	}

	/*************************************
	*************** Flecha pathname ***************
	************************************
	.claseLocationBarTooltip .pathname:after{
		content:' ';
		display: block;
		position: absolute;
		border-style: solid;
		border-width: 4px 4px 4px 7px;
		border-color: transparent transparent transparent #6fa880;
		top: 3px;
		left: 0px;
		width: 0px;
		height: 0px;
	}
	.claseLocationBarTooltip span.pathname{
		padding-left:9px;
		margin: 0 2px;
	}
	.claseLocationBarTooltip,
	.claseLocationBarTooltip span{
		position: relative;
		display: inline-block;
	}
	.claseLocationBarTooltip .label_pathname{
		display: none;
	}
	*/
    `;
	CSS_Loader.load(style);
}

	var style = `
		#dav_tab_title_url {
			font-family: monospace;
		}
		.divTitle{
			display: block;
		}
		#dav_tab_title_url .title,
		#dav_tab_title_url .url,
		#dav_tab_title_url .reloadDiv {
			margin:5px;
		}
		#dav_tab_title_url .title,
		#dav_tab_title_url .url{
			display:inline-block;
		}
		#dav_tab_title_url .title{
			color:black;
			font-weight: bold;
		}
		#dav_tab_title_url .url{
			color:blue;
		}
		#dav_tab_title_url .reloadText{
			color: teal;
		}
		#dav_tab_title_url .reloadValue{
			color: red;
			font-weight: bold;
			margin:0 3px;
		}
	`;
	CSS_Loader.load(style);

	function paddy(n, p, c) {
		var pad_char = typeof c !== 'undefined' ? c : '0';
		var pad = new Array(1 + p).join(pad_char);
		return (pad + n).slice(-pad.length);
	}
	function paddy2(n) {
		return paddy(n, 2, 0);
	}
	function fechaACadena(fecha){
		var dia = paddy2(fecha.getDate());
		var mes = paddy2(fecha.getMonth()+1);
		var anno = fecha.getFullYear();

		var hora = paddy2(fecha.getHours());
		var minutos = paddy2(fecha.getMinutes());
		var segundos = paddy2(fecha.getSeconds());

		return dia+"/"+mes+"/"+anno+" "+hora+":"+minutos+":"+segundos;
	}

	var styleString = (style) => {
		return Object.keys(style).reduce((prev, curr) => {
			return `${prev += curr.split(/(?=[A-Z])/).join('-').toLowerCase()}:${style[curr]};`
		}, '');
	};
	function encodeHTML(text) {
		return decodeURI(text)
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&apos;');
	}
	function createElement(elto) {
		elto = Object.assign({
			attr: {},
			evtListener: [],
			estilos: {}
		}, elto);

		var node = window.document.createXULElement(elto.type);

		Object.keys(elto.attr).forEach(key => {
			if(key == "innerHTML"){
				node.innerHTML = encodeHTML(elto.attr[key]);
			}
			if(key == "textContent"){
				node.textContent = elto.attr[key];
			}
			else {
				node.setAttribute(key, elto.attr[key]);
			}
		});

		elto.evtListener.forEach(evt => {
			node.addEventListener(evt.type, evt.funcion, false);
		});

		let estilo = styleString(elto.estilos);
		if (estilo) {
			node.setAttribute("style", estilo);
		}

		return node;
	}
	function getTabElto(target){
		if(!target || target.nodeName == "tab"){
			return target;
		}else{
			return getTabElto(target.parentNode);
		}
	}
	function createLabel(text,clase){
		return createElement({
			type:"label",
			attr:{
				innerHTML: text,
				class: clase
			}
		})
	}
	function createSpan(text,clase){
		return createElement({
			type:"span",
			attr:{
				innerHTML: text,
				class: clase
			}
		})
	}
	function getTooltipData(tab){
		let title = unescape(tab.getAttribute("label")).replace(/%/g, '%25');
		var titulo = createSpan(title,"title");
		var url;
		if(linkifiesUrl)
		{
			url = linkifiesLocationBar(tab.linkedBrowser.currentURI.spec);
		}
		else
		{
			url = createSpan(tab.linkedBrowser.currentURI.spec,"url");
		}

		let divTitle = createElement({type:"div", attr:{class:"divTitle"}})
		divTitle.appendChild(titulo);
		divTitle.appendChild(url);

		var df = document.createDocumentFragment();
		df.appendChild(divTitle);

		if(tab.classList.contains("reloadTab"))
		{
			let timeSeg = tab.getAttribute("reloadTab_timeSeg")-0;
			let lastReload = tab.getAttribute("reloadTab_lastReload")-0;
			let times = tab.getAttribute("reloadTab_timesReload")-0;

			let nextTime = new Date(lastReload+timeSeg*1000);
			let nextReload = fechaACadena(nextTime).split(" ")[1]
			let quedan = Math.round((nextTime.getTime()-new Date().getTime())/1000);

			let div = createElement({type:"div", attr:{class:"reloadDiv"}})

			div.append(
				createSpan("Reload:","reloadText"),
				createSpan(timeSeg,"reloadValue"),
				createSpan("seg","reloadText"),

				createSpan(" - Next:","reloadText"),
				createSpan(nextReload,"reloadValue"),

				createSpan(" - Rest:","reloadText"),
				createSpan(quedan,"reloadValue"),
				createSpan("seg","reloadText"),

				createSpan(" - Times:","reloadText"),
				createSpan(times, "reloadValue"),
			);

			df.appendChild(div);

			/*
			let reload = "Reload:"+timeSeg+"seg - Next:"+nextReload+" - Rest:"+quedan+"seg";
			df.appendChild(createElement({
				type:"span",
				attr:{
					innerHTML: reload,
				},
				estilos:{
					color:"teal",
					margin:"5px"
				}
			}));*/
		}

		return df;
	}
	function showing(tip, target){
		var tab = getTabElto(target);
		if(!tab) return false;
		tip.textContent = "";
		tip.appendChild(getTooltipData(tab));
		return true;
	}
	function hidding(tip, target){

	}

	var tipId = "dav_tab_title_url"
	var tip = createElement({
		type:"tooltip",
		attr:{
			id: tipId,
			orient: "vertical",
			onpopupshowing: "return this.showing(this, document.tooltipNode);",
			onpopuphiding: "this.hidding(this, document.tooltipNode);"
		}
	});
	tip.showing = showing;
	tip.hidding = hidding;
	var arrowscrollbox = document.getElementById("tabbrowser-arrowscrollbox")
	arrowscrollbox.removeAttribute("tooltiptext");
	arrowscrollbox.setAttribute("tooltip", tipId);
	arrowscrollbox.setAttribute("popupsinherittooltip", "true");
	document.getElementById("mainPopupSet").appendChild(tip);
	tip.textContent = "";
	if(linkifiesUrl){
		asignaEstilos();
	}
})();
