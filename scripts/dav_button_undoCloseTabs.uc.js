// ==UserScript==
// @name                dav_button_undoCloseTabs
// @author          	dav
// @version             1.0
// @description         dav_button_undoCloseTabs
// ==/UserScript==

/*
Forked from https://github.com/Infocatcher/Custom_Buttons/tree/master/Undo_Close_Tabs
*/
(function() {
    if (location != 'chrome://browser/content/browser.xhtml') return;

	function getRandomArbitrary(min, max) {
		var rdn = Math.floor(Math.random() * (max - min + 1) + min);
		var date = new Date().getTime();
		return rdn+"_"+date;
	}
    const
		btnId = "undoclose_tab"+"_"+getRandomArbitrary(0, 1000),
		popupId = btnId+'-popup',
		tooltipId = btnId + "-tooltip",
		btnLabel = "undoclose_tab",
        btnImage = "list-style-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABZVBMVEX////w8PD09PTx8fHw8PCPkIvv7++LjIfw8PDu7u6ZmZXv7+/29vbw8PD///+Txdt8lJ2RkY2Sk4+bzeJcnLsbcp6LjIcwf6bg4N/m//+XyuDf7/+LvNGmr68ufqbg4N9OhaLm8PJvrstCjrPg4N9Rk7Q8hqfk8PRoqMc5h60vgKk9ia/f4N7w8PDi7/ZgpMOLtMny9fYmeaIqfaff4N6hpKLv7+/h8PVwqcTB1N3L3ebv7+9trMqLjIeOj4rf39719vbM7PaMt81hpMPL7fmbnJeoqaXr6+tin774+/vF2t+lq6qKlI+hop38/Pz7+/v5+fn9/f29vruLjIeqq6f7+/v5+fnGxsSLjId5rcfg8vw4ibN8ud3n8vgacZ2extrA5//4+/wacp4yha8ZcZ18wuyIxuthrNc5irdvt+KRzvO62ep+w+7N6PeY1/+U1v+h2/9am7sbcp4keaXm8/ovgq07jLe+yJo8AAAAWXRSTlMAES5KZr+CMJ7X7Lr4ZwHdD4f0yftxJtP6Cj4Q/EIe9HPg/tXy/kvL/fr++fGfuf3Bzv787+6DptCRyLvRDs/u+P3O+TSw5Or8ovXiHqKWW0aBpyVHNSZMDw1FfDAAAACvSURBVHhehchTcwRBAIXRXmewtG3btm0jtn9/elPZmpqnnKd7P0DgADK5glyUQpH4b0pYkJo730t1PADxBSiKhlVvT4v11myBgSHD8Vz+cP388rr7rGlg0CIIojccrx5v7u4fjDCYMAxLWm1f33bHcuWEwXUBuT3eS58/cBuEIcQ8iURj8cT7RwqkM1n6LzabXtgUS6BcqdLO6o1mC7Q7XepZrz8YgtGYQphMZ+BfP976HHRDoNUhAAAAAElFTkSuQmCC)",
        btnTip = "undoclose_tab",
		CLIKS = {
			left:0,
			middle:1,
			right:2
		},
		xulns = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",
		noImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC0UlEQVQ4jYWTv0sbYRjHs+jg/6DQ7gaH1u7VmLv3fe/qnbE3nNqYnl5BrUKE0LOpSrRqoBLx2tS0jclpcneJdSpujipOYkzARRwEFwVxdfl2yUFJKX3hu7w8n+/zg+fx+RoegGYArQD8ADrr8tf/mhrjG+G2Wq32fHJy8n1vb++PQCBQDgQCZVmWv0ejUaNWqz0H0PYv+JFpmposy9by8nJqYWEhnU6nPycSiczx8fECIcTled4xTVMD8OivzKZpauFw+MfNzc2Hg4OD92tra6uCILiEEFdV1RwhxFUUpUApLddN2jy46fT0tEuSpO3b21sDwDAA7eTk5N3Y2FiOMeZQSm1KqS1Jkr2xsbHOGHMqlUo3gGYfgNbp6emZxcXFrwDCAIZ+7f2K9vT07HiwKIq2KIo2IcQ1DMMMh8OFqampOIBWHwB/f3//prVtLeWs3EwsFlsVRdFmjDke6KluWLq4uJhVFGUTgN8HoDMYDJZ0Xc8IglAkhLgeTCm1GWOOp1AoVMxms+sAIqIolgA88wHo9CDGmMPzvBMMBl1CiEsIcSORiBWJRCxCiJtMJtMAxh8eHl7VDZ76APgHBgbyjDGH47jS7u5uqlqtLlWr1SVN07ZTqdS6qqpbhBA3n88vnZ2dvdnf359SFMXyWmidn59f5jiutLKysnF/fz8OQAOgVSqV+dHR0axXoSAIRV3XM6Io2nNzc0lviE3n5+cvKaUlQRDcw8PDSQBDdWmZTGZVlmWHMeb09fUVBwcHLUpp+fLyUgHQ7O3CY6fkzHR1de1MTEx8+cNg6O7u7u3IyIg1PDy8ZRjGt1AoVHRKzgyAx43b2FGwC3Ge53cSicTHo6Ojib29vWgsFvuk63o+mUx+kSTJLhQKBoCOf91D+/X1tRaPxxclScp2d3f/5DiurKpqbnZ2NnF1dfUaQPv/LrIFwFMAvfU2BgG8APAEQEtj/G974u3Wuyxg9wAAAABJRU5ErkJggg=='
	;

	var this_menupopup,
		window,
		btn;

    var style = `
		@namespace url(http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul);
		menuitem[numberEntries]:after {
		  content:"("attr(numberEntries)")";
		  color: red;
		  display: inline-block;
		}
		menupopup.`+popupId+` menuitem.empty_data {
			color:#89042f;
			font-weight: bold;
			box-shadow: 0 0 5px 0px red inset, 0 0 10px 0px blue inset, 0 0 12px 2px #ec84ec inset;
		}
    `;

	var options = {
		menuTemplate: [
			"closedWindows",
			"separator",
			"restoreClosedWindows",
			"clearClosedWindows",
			"separator",
			"closedTabs",
			"separator",
			"restoreClosedTabs",
			"clearClosedTabs",
			"separator",
			"clearAll",
			"separator",
			"restoreLastSession",
		],
		showInTabContextMenu: false,
		windowItemTemplate: "(%count) %title",
		windowSelectedTabPrefix: "*",
		buttonTipTemplate: ["header", "title", "url", "closedAt"],
		itemTipTemplate: ["title", "url", "closedAt", "stateEntries"],
		hideRestoreAllForSingleEntry: false,
		allowDeleteEntries: true,
		accesskeys: { // Empty string ("") to disable or string with possible values ("0123...", "abcd...")
			closedTabs: "",
			closedWindows: ""
		},
		accesskeySeparator: " ", // <accesskey><separator><label>
		openMenuOnMouseover: false,
		useMenu: false,
		rightClickToUndoCloseTab: false, // Useful with "useMenu: true"
		tipId: tooltipId,
		tooltipColors: {
			header: "#64649F",
			title: "green",
			url: "blue",
			closedAt: "red",
			stateEntries: "grey"
		}
	};

	function borraSobrantes(){
		var botones = [...document.getElementsByClassName("undoclose_tab")];
		//botones.pop();
		for(let i = 0 ; i < botones.length; i++){
			var elto = botones[i];
			var eltoID = elto.id;
			if(eltoID != btnId)
			{
				elto.parentNode.removeChild(elto);
			}
		}
	}

	var CSS_Loader = {
		load: function(cssCode) {
			this.unload(cssCode);
			var sss = Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);
			var uri = Services.io.newURI("data:text/css;charset=utf-8," + encodeURIComponent(cssCode), null, null);
			sss.loadAndRegisterSheet(uri, sss.AGENT_SHEET);
		},
		unload: function(cssCode) {
			var sss = Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);
			var uri = Services.io.newURI("data:text/css;charset=utf-8," + encodeURIComponent(cssCode), null, null);

			if (sss.sheetRegistered(uri,sss.AGENT_SHEET))
			{
				sss.unregisterSheet(uri,sss.AGENT_SHEET);
			}
		}
	}


	function insertaEstilos(){
		/*var sspi = document.createProcessingInstruction(
			'xml-stylesheet',
			'type="text/css" href="data:text/css,' + encodeURIComponent(style) + '"'
		);
		document.insertBefore(sspi, document.documentElement);*/

	  // CSS
	  /*var sss = Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);
	  var uri = Services.io.newURI("data:text/css;charset=utf-8," + encodeURIComponent(style), null, null);
	  sss.loadAndRegisterSheet(uri, sss.AGENT_SHEET);*/

	  CSS_Loader.load(style);
	}

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
		//return anno+"/"+mes+"/"+dia+" "+hora+":"+minutos+":"+segundos;
	}

	function startUndoClose(event)
	{
		/*console.log(gBrowser.selectedBrowser.messageManager);

		var frameScript = 'data:application/javascript;charset=UTF-8,' + encodeURIComponent('(' + (() => {
			console.log(content);
		 }).toString() + ')();');

		gBrowser.selectedBrowser.messageManager.loadFrameScript(frameScript, true);*/
		if (event.button === CLIKS.middle)
		{
			var wc = SessionStore.getClosedWindowCount();
			var tc = SessionStore.getClosedTabCount(window);

			var _undoWindowItems = wc && SessionStore.getClosedWindowData();
			var _undoTabItems = tc && SessionStore.getClosedTabData(window);

			console.log("_undoWindowItems", _undoWindowItems);
			console.log("_undoTabItems", _undoTabItems);
		}
		else if (event.button === CLIKS.right)
		{
			functions.undoCloseTab(0, event)
		}
	}

	function _localize(sid) {
		var strings = {
			en: {
				restoreTab:`
					  Left-Click: Restore Tab
					  Middle-Click: Restore Tab and keep this menu open
					  Right-Click: Foget Tab
				`.replace(/^\n| {2,}|\t/g, ''),
				restoreAllTabs: "Restore all tabs",
				restoreAllTabsAccesskey: "t",
				clearTabsHistory: "Clear history of closed tabs",
				clearTabsHistoryAccesskey: "b",

				restoreAllWindows: "Restore all windows",
				restoreAllWindowsAccesskey: "w",
				clearWindowsHistory: "Clear history of closed windows",
				clearWindowsHistoryAccesskey: "d",

				clearAllHistory: "Clear all history",
				clearAllHistoryAccesskey: "C",

				restoreLastSession: "Restore last session",
				restoreLastSessionAccesskey: "s",

				deleteUndoEntry: "Delete",

				buttonMenu: "Button menu",
				buttonMenuAccesskey: "m",

				tabContextMenu: "Recently Closed Tabs",
				tabContextMenuAccesskey: "y",

				//itemTip: "%ago ago, %date",
				itemTip: "hace %ago, %date",
				day: "d",
				whitoutData: "whitout data"
			}
		};
		_localize = function(sid) {
			return strings.en[sid] || sid;
		};
		return _localize.apply(this, arguments);
	}

	function decodeURISecure(url){
		try{
			url = decodeURI(url);
		}
		catch(e){
			url = url.replaceAll("%", encodeURI("%"));
			url = decodeURI(url);
		}			
		return url;
	}
		
	var functions = {
		initTooltip: function() {
			var tip = document.getElementById(options.tipId);
			tip && tip.parentNode.removeChild(tip);
			tip = this.createElement("tooltip", {
				id: options.tipId,
				orient: "vertical",
				onpopupshowing: "return this.functions.updTooltip(this, this.triggerNode || document.tooltipNode);",
				onpopuphiding: "this.cancelUpdateTimer();"
			});
			tip.functions = this;
			tip._updateTimer = 0;
			tip.initUpdateTimer = function(fn, context) {
				if(this._updateTimer)
					clearInterval(this._updateTimer);
				this._updateTimer = setInterval(function() {
					fn.call(context);
				}, 1000);
			};
			tip.cancelUpdateTimer = function() {
				if(this._updateTimer) {
					clearInterval(this._updateTimer);
					this._updateTimer = 0;
				}
			};
			btn.removeAttribute("tooltiptext");
			btn.setAttribute("tooltip", options.tipId);
			btn.setAttribute("popupsinherittooltip", "true");
			document.getElementById("mainPopupSet").appendChild(tip);
		},
		get ss(){
			return SessionStore;
		},
		updTooltip: function(tip, tn) {
			var template, header, title, url, closedAt, stateEntries;
			if(tn == btn)
			{
				template = options.buttonTipTemplate;
				header = _localize("restoreTab");
				/*let undoTabItems = JSON.parse(this.ss.getClosedTabData(window));
				if(undoTabItems.length)
				{
					let lastItem = undoTabItems[0];
					title = lastItem.title;
					url = lastItem.state && lastItem.state.entries
						&& lastItem.state.entries[lastItem.state.index - 1].url;
					closedAt = lastItem.closedAt || 0;
				}*/
			}
			else if(tn.hasAttribute("cb_index"))
			{
				template = options.itemTipTemplate;
				title = tn.getAttribute("label");
				url = tn.getAttribute("cb_url");
				closedAt = +tn.getAttribute("cb_closedAt");
				let stateIndex = tn.getAttribute("stateIndex")-1;
				if(stateIndex > 0)
				{
					stateEntries = JSON.parse(tn.getAttribute("stateEntries"));
					stateEntries = stateEntries.map(function(entry, index, array) {
						let selected = stateIndex == index;
						return ((selected)?"-->":"")+entry.title ;
					});
					stateEntries = stateEntries.join("\n");
				}
			}
			else
			{
				return false;
			}

			var tipData = this.getTooltipData(template, header, title, url, closedAt, stateEntries);
			tip.textContent = "";
			tip.appendChild(tipData);
			if(closedAt && template.indexOf("closedAt") != -1)
			{
				tip.initUpdateTimer(function() {
					var tipData = this.getTooltipData(template, header, title, url, closedAt, stateEntries);
					if(tipData.textContent != tip.textContent) {
						tip.textContent = "";
						tip.appendChild(tipData);
					}
				}, this);
			}
			return tip.hasChildNodes();
		},
		getTooltipData: function(template, header, title, url, closedAt, stateEntries) {
			var df = document.createDocumentFragment();
			var hasHeader = header && template.indexOf("header") != -1;
			function item(key, val) {
				var lbl = document.createElementNS(xulns, "label");
				lbl.className = "cb-" + key + " tooltip-label";
				lbl.textContent = val;
				lbl.setAttribute("maxwidth", "450"); // Trick to restore right border for long lines
				lbl.style.color = options.tooltipColors[key];

				return df.appendChild(lbl);
			}
			template.forEach(function(key) {
				switch(key) {
					case "header":
						if(header)
							item(key, header);
					break;
					case "stateEntries":
						if(stateEntries)
							item(key, stateEntries);
					break;
					case "title":
						if(title && title != url)
							item(key, title);
					break;
					case "url":
						if(url)
							item(key, this.crop(url));
					break;
					case "closedAt":
						if(!closedAt)
							break;
						let dt = Math.round(Math.max(0, Date.now() - closedAt)/1000);
						let days = Math.floor(dt/24/3600);
						dt -= days*24*3600;
						let d = new Date((dt + new Date(dt).getTimezoneOffset()*60)*1000);
						let ts = paddy2(d.getHours()) + ":" + paddy2(d.getMinutes());
						if(days)
							ts = days + _localize("day") + " " + ts;
						let tsTip = _localize("itemTip")
							.replace("%ago", ts)
							.replace("%date", fechaACadena(new Date(closedAt)));
						item(key, tsTip);
				}
			}, this);
			return df;
		},
		/*closedAt: function (closedAt){
			if(!closedAt) return "";
			let dt = Math.round(Math.max(0, Date.now() - closedAt) / 1000);
			let days = Math.floor(dt / 24 / 3600);
			dt -= days * 24 * 3600;
			let d = new Date((dt + new Date(dt).getTimezoneOffset() * 60) * 1000);
			let ts = paddy2(d.getHours()) + ":" + paddy2(d.getMinutes());
			if (days)
				ts = days + " días " + " " + ts;
			let tsTip = _localize("itemTip")
				.replace("%ago", ts)
				//.replace("%date", new Date(closedAt).toLocaleString())
				.replace("%date", fechaACadena(new Date(closedAt)));
				;
			return tsTip;
		},*/
		crop: function(s, crop = 500) {
			if (s.length <= crop)
				return s;
			var start = Math.round(crop * 0.6);
			return s.substr(0, start) + "…" + s.substr(start - crop);
		},
		cachedIcon: function(src) {
			src = src.replace(/[&#]-moz-resolution=\d+,\d+$/, ""); // Firefox 22+
			if (!/^https?:/.test(src) || /^https?:\/\/[^.:\/]+\.[^a-z0-9-]+(?:\/|$)/.test(src))
				return src;
			return "moz-anno:favicon:" + src;
		},
		undoCloseTab: function(i, event) {
			if ("undoCloseTab" in window) // Firefox 2.0+
				undoCloseTab(i);
			else // SeaMonkey
				gBrowser.undoCloseTab(i);
		},
		addUndoWindowsList:function(undoPopup, _undoWindowItems){
			_undoWindowItems.forEach(function(undoItem, i) {
				var tabs = undoItem.tabs;
				var title = undoItem.title;
				var selectedTab = tabs[undoItem.selected - 1];
				var urls = [];
				tabs.forEach(function(tab) {
					if (!tab.entries || !tab.entries.length) // Can be [] for about:blank
						return;
					var url = this.crop(tab.entries[tab.index - 1].url);
					var selectedPrefix = tab == selectedTab && tabs.length > 1 ?
						options.windowSelectedTabPrefix :
						"";
					urls.push(selectedPrefix + url);
				}, this);
				var url = urls.join(" \n");
				var mi = this.createElement("menuitem", {
					label: options.windowItemTemplate
						.replace("%title", title)
						.replace("%count", tabs.length),
					"class": "menuitem-iconic bookmark-item menuitem-with-favicon",
					oncommand: "undoCloseWindow(" + i + ");",
					cb_url: decodeURISecure(url),
					cb_urlDecoded: this.crop(url),
					cb_closedAt: undoItem.closedAt || 0,
					cb_index: i,
					cb_type: "window"
				});
				var icon = selectedTab.image || selectedTab.attributes && selectedTab.attributes.image || noImage;
				mi.setAttribute("image", this.cachedIcon(icon));
				undoPopup.appendChild(mi);
			}, this);
		},
		addUndoTabsList:function(undoPopup, _undoTabItems) {
			_undoTabItems.forEach(function(undoItem, i) {
				var state = undoItem.state;
				var title = undoItem.title;
				var numberEntries = state.entries.length-1;
				//title += " ("+numberEntries+")";
				var url = state && state.entries && state.entries[state.index - 1].url || "";
				//var closedAt = this.closedAt(undoItem.closedAt);
				var mi = this.createElement("menuitem", {
					label: title,
					//tooltiptext: "url: "+url+"    \n"+closedAt,
					class: "menuitem-iconic bookmark-item menuitem-with-favicon",
					oncommand: "this.parentNode.parentNode.functions.undoCloseTab(" + i + ", event);",
					onmouseup: 'this.parentNode.parentNode.functions.shouldPreventHide(event)',
					cb_url: decodeURISecure(url),
					cb_urlDecoded: this.crop(url),
					cb_closedAt: undoItem.closedAt || 0,
					cb_index: i,
					cb_type: "tab",
					numberEntries: numberEntries || null,
					stateEntries: JSON.stringify(state.entries),
					stateIndex:state.index
				});

				//if (state && "attributes" in state && "privateTab-isPrivate" in state.attributes)
				if(state.userContextId == 9)
				{
					mi.setAttribute("privateTab-isPrivate", "true");
					mi.setAttribute("style","color:purple");
				}
				console.log("state.userContextId", state.userContextId);

				mi.setAttribute("image", this.cachedIcon(undoItem.image || noImage));
				undoPopup.appendChild(mi);

			}, this);
		},
		createElement:function (name, attrs) {
			var node = document.createElementNS(xulns, name);
			if (attrs)
			{
				for (var attrName in attrs)
				{
					if (attrs.hasOwnProperty(attrName) && attrs[attrName] != null)
					{
						node.setAttribute(attrName, attrs[attrName]);
					}
				}
			}

			return node;
		},
		checkForMiddleClick: function(e) {
			var mi = e.target;
			if ("doCommand" in mi && e.button == CLIKS.middle && mi.parentNode == e.currentTarget)
			{
				mi.doCommand();
				mi.parentNode.removeChild(mi);
				this.populateMenu();
			}
			else if ("doCommand" in mi && e.button == CLIKS.right && mi.parentNode == e.currentTarget)
			{
				e.preventDefault();
				e.stopPropagation();
				this.deleteUndoEntry(mi);
				mi.parentNode.removeChild(mi);
				this.populateMenu();
			}
		},
		restoreLastSession: function(e) {
			SessionStore.restoreLastSession();
		},
		clearUndoWindowsList: function(e) {
			var closedWindowCount = SessionStore.getClosedWindowCount();
			if (!closedWindowCount)
				return;
			if ("forgetClosedWindow" in SessionStore) // Gecko 1.9.2+
				while (closedWindowCount--)
					SessionStore.forgetClosedWindow(0);
			else
				SessionStore.setWindowState(window, '{"windows":[{}],"_closedWindows":[]}', false);
		},
		clearUndoTabsList: function(e) {
			var closedTabCount = SessionStore.getClosedTabCount(window);
			if (!closedTabCount)
				return;
			if ("forgetClosedTab" in SessionStore) // Gecko 1.9.2+
				while (closedTabCount--)
					SessionStore.forgetClosedTab(window, 0);
			else {
				// Doesn't work in SeaMonkey
				const pName = "browser.sessionstore.max_tabs_undo";
				let val = cbu.getPrefs(pName);
				cbu.setPrefs(pName, 0);
				cbu.setPrefs(pName, val);
			}
		},
		clearAllLists: function(e) {
			this.clearUndoTabsList();
			this.clearUndoWindowsList();
		},
		deleteUndoEntry: function(mi) {
			var i = +mi.getAttribute("cb_index");
			if(mi.getAttribute("cb_type") == "window") {
				this.ss.forgetClosedWindow(i);
			}
			else {
				this.ss.forgetClosedTab(window, i);
			}
		},
		shouldPreventHide: function (event) {
			const menuitem = event.target;
			if (event.button == 1 && !event.ctrlKey) 
			{
				menuitem.setAttribute('closemenu', 'none');
				menuitem.parentNode.addEventListener('popuphidden', () => {
					menuitem.removeAttribute('closemenu');
				}, { once: true });
			} 
			else 
			{
				menuitem.removeAttribute('closemenu');
			}
		},
		populateMenu: function (event, button)
		{
			var popup = event?event.currentTarget:this_menupopup;
			var document = window.document;
			var df = document.createDocumentFragment();

			var wc = SessionStore.getClosedWindowCount();
			var tc = SessionStore.getClosedTabCount(window);

			var canRestoreLastSession = "restoreLastSession" in SessionStore && SessionStore.canRestoreLastSession;
			
			//var _undoWindowItems = wc && JSON.parse(SessionStore.getClosedWindowData());
			//var _undoTabItems = tc && JSON.parse(SessionStore.getClosedTabData(window));
			var _undoWindowItems = wc && SessionStore.getClosedWindowData();
			var _undoTabItems = tc && SessionStore.getClosedTabData(window);

			options.menuTemplate.forEach(function(sid, indx, arr) {
				switch (sid) {
					case "closedWindows":
						wc && this.addUndoWindowsList(df, _undoWindowItems);
						break;
					case "restoreClosedWindows":
						wc > options.hideRestoreAllForSingleEntry &&
							df.appendChild(this.createElement("menuitem", {
								label: _localize("restoreAllWindows"),
								accesskey: _localize("restoreAllWindowsAccesskey"),
								oncommand: "for(var i = 0; i < " + _undoWindowItems.length + "; ++i) undoCloseWindow();"
							}));
						break;
					case "clearClosedWindows":
						wc && df.appendChild(this.createElement("menuitem", {
							label: _localize("clearWindowsHistory"),
							accesskey: _localize("clearWindowsHistoryAccesskey"),
							oncommand: "this.parentNode.parentNode.functions.clearUndoWindowsList();"
						}));
						break;
					case "closedTabs":
						tc && this.addUndoTabsList(df, _undoTabItems);
						break;
					case "restoreClosedTabs":
						tc > options.hideRestoreAllForSingleEntry &&
							df.appendChild(this.createElement("menuitem", {
								label: _localize("restoreAllTabs"),
								accesskey: _localize("restoreAllTabsAccesskey"),
								oncommand: "for(var i = 0; i < " + _undoTabItems.length + "; ++i) this.parentNode.parentNode.functions.undoCloseTab();"
							}));
						break;
					case "clearClosedTabs":
						tc && df.appendChild(this.createElement("menuitem", {
							label: _localize("clearTabsHistory"),
							accesskey: _localize("clearTabsHistoryAccesskey"),
							oncommand: "this.parentNode.parentNode.functions.clearUndoTabsList();"
						}));
						break;
					case "clearAll":
						(
							wc && tc ||
							wc && arr.indexOf("clearClosedWindows") == -1 ||
							tc && arr.indexOf("clearClosedTabs") == -1
						) &&
						df.appendChild(this.createElement("menuitem", {
							label: _localize("clearAllHistory"),
							accesskey: _localize("clearAllHistoryAccesskey"),
							oncommand: "this.parentNode.parentNode.functions.clearAllLists();"
						}));
						break;
					case "restoreLastSession": // Gecko 2.0+
						canRestoreLastSession && df.appendChild(this.createElement("menuitem", {
							label: _localize("restoreLastSession"),
							accesskey: _localize("restoreLastSessionAccesskey"),
							oncommand: "this.parentNode.parentNode.functions.restoreLastSession();"
						}));
						break;
					case "separator":
						if (df.hasChildNodes() && df.lastChild.localName != "menuseparator")
							df.appendChild(document.createElementNS(xulns, "menuseparator"));
						break;
					default:
						Components.utils.reportError(this.errPrefix + 'Invalid template entry: "' + sid + '"');
				}
			}, functions);

			while (df.hasChildNodes() && df.lastChild.localName == "menuseparator")
				df.removeChild(df.lastChild);

			while (popup.hasChildNodes())
				popup.removeChild(popup.firstChild);

			popup.textContent = "";
			/*if (!df.hasChildNodes()) {
				popup.hidePopup();
				return false;
			}*/

			if (!df.hasChildNodes())
			{
				let mi = this.createElement("menuitem", {
					label: _localize("whitoutData")
				});
				mi.setAttribute("class","empty_data");
				df.appendChild(mi);
			}
			popup.appendChild(df);

			return true;
		}
	}

    try {
		CustomizableUI.createWidget({
			id: btnId,
			type: 'custom',
			defaultArea: CustomizableUI.AREA_NAVBAR,
			onBuild: function(aDocument) {
				var button = aDocument.createXULElement('toolbarbutton');
				var props = {
					id: btnId,
					label: btnLabel,
					tooltiptext: btnLabel,
					type: 'menu',
					class: 'toolbarbutton-1 chromeclass-toolbar-additional undoclose_tab',
					style: btnImage,
					//popup: popupId
				};
				for (var p in props) {
					button.setAttribute(p, props[p]);
				}
				button.onclick = event => startUndoClose(event);

				this_menupopup = aDocument.createXULElement('menupopup');
				this_menupopup.setAttribute('id', popupId);
				this_menupopup.setAttribute('class', popupId);

				this_menupopup.addEventListener('popupshowing', function(event){
					functions.populateMenu(event, button);
				});

				this_menupopup.onclick = function(e) {
					functions.checkForMiddleClick(e);
				}

				button.appendChild(this_menupopup);
				button.functions = functions;

				button.addEventListener('mouseenter', function(event){
/*
				 var win = Components.classes["@mozilla.org/appshell/window-mediator;1"]
					.getService(Components.interfaces.nsIWindowMediator)
					.getMostRecentWindow("navigator:browser");

				console.log(win, window, win == window);
*/
					window = event.view;
					btn = button;
				});
				btn = button;
				functions.initTooltip();
				setTimeout(borraSobrantes, 10);
				insertaEstilos();
				return button;
			}
		});

    } catch (e) {
		console.error(e);
	};

}).call(this);
