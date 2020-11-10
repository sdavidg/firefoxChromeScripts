// ==UserScript==
// @name                dav_Mousewheel_Zoom
// @author          	dav
// @version             1.0
// @description         dav_Mousewheel_Zoom
// ==/UserScript==

function dav_Mousewheel_Zoom() {
	try{
		function getDocument(){
			/*var win = Components.classes["@mozilla.org/appshell/window-mediator;1"]
				.getService(Components.interfaces.nsIWindowMediator)
				.getMostRecentWindow("navigator:browser");
			return win.document;*/
			
			return document;
		}

		var urlbarInputBox = getDocument().querySelector(".urlbar-input-box");
		urlbarInputBox.addEventListener("wheel", wheel, false);
		
		function getActualZoom(){
			return ZoomManager.zoom;
		}
	
		function wheel(evt)
		{
			let increment = Math.sign(evt.deltaY)*-0.05;
			let newZoom = getActualZoom()+increment;
			FullZoom.setZoom(FullZoom._ensureValid(newZoom), gBrowser);
		}

	} catch(e){
		console.error("dav_Mousewheel_Zoom",e);
	}
};

setTimeout(dav_Mousewheel_Zoom, 100);

