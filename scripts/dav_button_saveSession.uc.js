// ==UserScript==
// @name                dav_button_saveSession
// @author          	dav
// @version             1.0
// @description         dav_button_saveSession
// ==/UserScript==


(function() {
    if (location != 'chrome://browser/content/browser.xhtml') return;

	function getRandomArbitrary(min, max) {
		if(!_uc.dav_button_saveSession){
			_uc.dav_button_saveSession = 0;
		}
		_uc.dav_button_saveSession++;
		return _uc.dav_button_saveSession;
	}
    const
		btnId = "save_session"+"_"+getRandomArbitrary(0, 1000),
		popupId = btnId+'-popup',
		tooltipId = btnId + "-tooltip",
		btnLabel = "save_session",
        btnImage = "list-style-image: url(data:image/png;base64,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)",
        btnTip = "save_session",
		CLIKS = {
			left:0,
			middle:1,
			right:2
		},
		xulns = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",
		noImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC0UlEQVQ4jYWTv0sbYRjHs+jg/6DQ7gaH1u7VmLv3fe/qnbE3nNqYnl5BrUKE0LOpSrRqoBLx2tS0jclpcneJdSpujipOYkzARRwEFwVxdfl2yUFJKX3hu7w8n+/zg+fx+RoegGYArQD8ADrr8tf/mhrjG+G2Wq32fHJy8n1vb++PQCBQDgQCZVmWv0ejUaNWqz0H0PYv+JFpmposy9by8nJqYWEhnU6nPycSiczx8fECIcTled4xTVMD8OivzKZpauFw+MfNzc2Hg4OD92tra6uCILiEEFdV1RwhxFUUpUApLddN2jy46fT0tEuSpO3b21sDwDAA7eTk5N3Y2FiOMeZQSm1KqS1Jkr2xsbHOGHMqlUo3gGYfgNbp6emZxcXFrwDCAIZ+7f2K9vT07HiwKIq2KIo2IcQ1DMMMh8OFqampOIBWHwB/f3//prVtLeWs3EwsFlsVRdFmjDke6KluWLq4uJhVFGUTgN8HoDMYDJZ0Xc8IglAkhLgeTCm1GWOOp1AoVMxms+sAIqIolgA88wHo9CDGmMPzvBMMBl1CiEsIcSORiBWJRCxCiJtMJtMAxh8eHl7VDZ76APgHBgbyjDGH47jS7u5uqlqtLlWr1SVN07ZTqdS6qqpbhBA3n88vnZ2dvdnf359SFMXyWmidn59f5jiutLKysnF/fz8OQAOgVSqV+dHR0axXoSAIRV3XM6Io2nNzc0lviE3n5+cvKaUlQRDcw8PDSQBDdWmZTGZVlmWHMeb09fUVBwcHLUpp+fLyUgHQ7O3CY6fkzHR1de1MTEx8+cNg6O7u7u3IyIg1PDy8ZRjGt1AoVHRKzgyAx43b2FGwC3Ge53cSicTHo6Ojib29vWgsFvuk63o+mUx+kSTJLhQKBoCOf91D+/X1tRaPxxclScp2d3f/5DiurKpqbnZ2NnF1dfUaQPv/LrIFwFMAvfU2BgG8APAEQEtj/G974u3Wuyxg9wAAAABJRU5ErkJggg==',
		imageSesssion = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAR3UlEQVRogd2aeVCb95nH3XSPme4f253Zdrppp23SI+02bXebbnokbXMfTVJnkqZJGjuXEzuJc/h2HNsxMfgCY5B4MSDAnBJCGDDG3JdAAgkEQghJSEgISYj7Rgc3n/0DSMkUEmVmd6a7v5nnr1ev5vN59J33fX7vq23b/r8uhULxxbCwsJv+Fmqd5TOhw8LCbtqzd+9HldV1+mplvaW6Thl6KZWWGmWDpa5BZVGqmiwNTRqLStNsadK2WjS6Nktzm96i03dYWjs6LW2dJkt7p8ViNFstnVabxWSzWyzdTovV0WuxOV0Wm9NlsTp6LRZ7r8XS7bSYu50Wi91paWxpU4oE4f4tBa5kZLxkMHbyt7hWVlYAKCwunaypqfn6pgJNzc0Jfr//45OWgNHpecZ8C4z7F5kILDEZXGZydoWpOZieh5kF8C2CfwkCy6sVXIFZ/lJzwMJaLa7V0oZaXqulDcfnN5wLsLK8DICrrx+vd+i+TQXqGzXxU1PTABhsfdz56Mv8y2338pUfPcjXfvowX//ZY3zzzu3c+uun+N5vn+EH9z3P7Q/u4KePvsQdj+/izu2v88un9nDXM2/x2+fe5oEd7/Dwzr08+NJ+fvPCPu7ZuZ/7Xz7Iw68f5Ym9x3l6XxjPHY7gxePn2RV2kddPX2JPeCxvnhGx96yYt8/FsfesmOTiWhZWfwAcvW5cXu+9mwqo1E3C9PSqwIt79vNvt9/LiwfO88YHMbx5QsSeE2JeeV/EjsMinj0Yy1P7RDzxrohH3xHzwN447nlT4O43LvPLPUn8eFcyTx1NYefOnTxx6joHE6o4lVZHeJaSCGkDZ3LUnMlt5GyehnMFWi5ca+HijTZiyg2Ia4wkNJhJ0XaT3NzNu+dEKJvbAOju6cXl+lSBGQD2vv0OO46IWd6Qw+DCMv1jPky9I6iMfRQ3OciqthBX1EGEvJXDV5rZc1nDc5cauT+8kTcuq9h/+H2OF3o+kedFYHIe+n0rOCaXMI0u0Da8gGZoHtXgPMqhBWpHligfXqR4FORNRgoKrwFgczhDE9i3fz87jsThC8yxvLzCyIQPm3uYZrOHimY7iloTyTfauaho4WRGE/uSVLwqquePkUoeDlfyq5Mq3ris4sCRY5wq6mVhaYXlFZieXWJgeh7H2CymoSBt/QE0fX4aPH5qPX6q+oJUDsxS0j9LvieIwruAvKmD4pJSAKz2HhwuVygCB3jxgwTGpvyMTwewuUfW4LvJrTUh+RT434U1cPdpLe8kazh64hQRpW6CC8vMzG0OX+/xU+sJfAK+wBMk1xUgt2+eXE0npeUVAFhsjs8hcFxCj3cMe9/Yx/Cf6Hzm5vD3ndFy//lWDqa3cOKjM5yv6GPUv8jgzMLngpf3+sntmyev2Ux5VTUAZmv3pwg0aYXpmVWB/QcOsPNEKm3WPnRdfX8Nv0Xn7zuj4ZEoHY/FtHNM2sZHZyO5WNOPe2IO5/jcJvB/HZt1eHmvH7lnjqu6Lipr6gAwddlwOLYQaGppEWZ8vjWBg+w8mUZNq4MqnSOk2Nx3RssjUTqeFOl56rKRDxUGzkTFEFs/iHU4iPlzdF7e6yfH6UPunuWqrotqZQMAnRbr1gItujZhxrd6Iztw8CA7T2VSUG8hT2kOKTbr8M8lGvlzipmIa51ciBUQGocxDATQf074HKePrB4/iuYu6lSNABjNXVgdjs0FdO0GwedfFzjEjjAp6WUGUkoNIcXmSZGeZxONvHjFzCtZNiJLLFwSkkhsGaW5z4/WG1ps1uGz7dNILFPINBbqm7QAdJgsWwu0G0yCPxAA4ODBQ+z4SI6oQEd0ni6k2DyX2MGLV8zsllp5U+EgptKGKCmVVP04Ks/6pTKEzveuwqeYxhHrR8lSm1E161YnhE4zVusWAgaTRfAHggAcOnyYHeFXCc/WcCpLE1Js1uHfzbOzv6iX+DoH8amZZBinqHP7Qo7NOrzQNkyUZpD0BhONOj0A7UbT1gKmLpsQCM4CcPTYB7xwppDDKSr2S9QhxWa31Mo7eXYOX3fyfpkHibqXpIwcZF0zVLn9VHtDi806fLSmn9NKD6l1RrR6w6pAR+fWAhabXQjOzgIrHD/xITvOFfOGUM8ucUNIsVmF7+VEuYdTtQOkN7tJkeaR5/BT4QmEHBuhbZjopn7OKF0cr3AiqemgxbA65usNRkxW6+YCXT1OIRAMsrS0yMlTH7HjQhkvXKzjmRBjc/h6L8fLPYTX9nOucRip3kt6biHX3LOU94cem2hNP2eUbj6s6OFgUTeXKw20dpoBaGvv2FrA7vQIPr+f+bk5wk6f4YXIKp44U8tD4Up+e6qBeyI0PBypY7tIz58SOth5xcTr2audP1Tk5Hi5h9O1XiIbh7ikG0PROUhWfjGlAwsUe4Pke4LI1+BzNl4q7dMkr8FfbOonQuniZIWDI9dtvKUwIy5rR2/uAqBVb8Bk2kKgx9UnTE3PEAj4OXMukj2XNTxytpHfR7bw+KV2nhaM/Fli5tV0K2/I7Lx31cnRYhcfVniJqBsgqnGYON0Yko5Jrlj9lPWMoygup2ZsmaL+OQq9cxT0zVLQFyTfHeCqO4C8Z4Z0ywSJ7SOItANcqHdzuqqH4ze6OVhgYY/USFypnvaubgB0be1bC9hdHmF8YpJgwM87h05wJCaPDy7f4ENJOaevVHE2o5YLsnqic9WI8rUIRToSS/SkVHSQVmMiS9mFTG0jV2MnX+fkapOVqLR8ysz9lJn6KbcMUGkdpLp7iFrHMMqeUZTOUep7x6h3jVPnHKXaPkSldYAyi5cbnR6ud7jJURtpNq8KtLTqMZhMmwvYnC5hZHQMv9/H3n1Hufv5o/zHn07yqxdP87tdZ3nwrSge3xfDU0cEnj+RyEunU3n9fAZvX5JxQFDwflIBJ9OKiMgu4byiklhFGWcvpxNXXE90UT0xxQ2IStTElTURV9aEuFSDqERDbImGmBsaoq9riLrWxPkCNWfzVITnNnBKqiTmai1tVgcAzbq2rQW6elzC4NAw42NjnLso5r0sC4XtEyi7Z2hw+Kiz+6i0zVBqnaHYOkORdYZr1hkKu30U2P0UOoMUeeYoHligYGCJqr4Z8ivrqR5dpie4gnutHP5lTJML6IZnUXp8lHRPojCOkNYygLjeTUSZnSNXzezJaOdJkYbwvGZMPS4AtLrWTxGw9wje/n5GRoYJjxRz6mrXJ3ZSgYVlhn0LuCbmsAwH0Q8E0Ho3bEa8ASoGZin2zqJwBylzTqAor0c5PP+J75lbWmFybgnvzDzW0SCtfdPU2scpNAxxpdHNxYpujl3tZPcVHY9G1hMm12DuXd3VaVp0GAxbCFhsPYLb42FwcIAzFwXCC20E5pdZWFphzL+IZ2IO60gQw0CA5j4/Ko+PWrePKvfqdb68f5br3iB57gAyV5Ay5zh5lSrqhuZYWoGlFfAtrDASWKR3ag7TcACNe4pK6xh5+kGSVS4ulNs4qjDyWkoL2y81cNepKk5KG7G4+wBoam7BYDBsdSe2C05nL16vl3OXEjh/w85EYImJ4GfA963Dz5LnDiB3BZD1BihzjnO1upG6oTnmlsG/uMJIcB3evwF+4C/weUZeS9Gx/VID90dUc8f7ZRzLVNHl6QegUdtC61YCRotNsNsduN1uzscmEVXupG9ynr6peWyfA17e60fWG6C0Z5z8Gg2V/QGm5pcZDW7eecnH8J0fw98XUc1dJyu4fX8xh680YO0bAECtad5awGDpErqsNpxOJxdEycRUu7CNzNI9OhtSbOQb7rBSp39VoLaZYuc0g/5FXCHG5r7wau46Wc4dR0v43t4CDqbUYe0fAkDVpKW1dSsBk0UwmS047Hai4lKJU3roGAhgHAy98+vjgdTp54Z9lPy6FvKsEzgm5jB/An7r2Nx1soKfHy3hJ/uu8Z3XZRyQVGEbGAGgoVGztUC70SR0GI3YrFYuxqeRqPbS0uenxfv54HOcPjK6pymwDJFfpyPbOELHoB+tZzqk2KzD/2hvLre8fIX9CWXYBkcBqFc3oW1t3VygzWAS9O3tmM1mLl7OIFk7iMrlozHE2GwczBI7x5EbByhQtpLSOoDaNUWlLbTY/GT/KvwPd2fwrRfieS++mO6hMQCUqsatBXTtBkHX2orRaCQ6IZP01mFqe33Uhdr5DSOxqHWYrLY+CurbiG/0UNo1Sl77YEixWYe/7RUJ33jmEu+Kr9E9PL4q0KBGq91CoKXNIGi1zRja24lOyCLbMEplr4/qEGOzcSS+0NjPFa2LggY90bVO5G0DJKtDi80Pd2dy26sSvrdTzM1PnuXtmKt0j0wCUFev2lpAq2sXGpua0OvbiE6UIjeNU+byU9kXWmw2zvMf1bpJVPVQ0NBORFk3iQ29RJZ3hxSb215Zhf/Os1F87bGT7I2W0z0yBUCtsgG1VruFQEuboG5sRK/XcylJxlXrJCWe0GOzcSf1QZmDuLpuChoMnLhm5mzpJzv/abFZh7/l6XC++tBh3ozMpnt0+rMFmlp0glq9JiCRU9QzTYl3dbYJtfPrO6kD16xcquwiX9XBodwODuUaeS01tNh857lV+G/94QT/es+77DmXji0UAbVWJ6jWBGKScynx+Cns2xo+awP8xbXOf7i+k8o1cb7ERL7KyFsZrbwsaWF7dAP3hlfz65Pl3HGkhB/vu8a/783lB2ud/+4OMbc+G8m3nwrnm08c5xuPHOLLv36NXacl2EZnQhBoahFUajUdBgNn47KocE9TPLJM0eACRQPzXBuYp7B/jgLvLAqXn0zbFJKOMcQtg0SqPIRXOzlesrqTej3bwNmiDgrVRnZJNDwWqeSB8CruPlHGzw8X85P3CvjRmzn88LU0bnspge8+H8OtfzzHt58M41uPvc83HtrPzfe+yVd+sZODsdl0j/k+W0Cl1goNKjVdZhNpsmsciJavRCnUXFSouZTfSEyhBlFRC3HFrcTdaEMo0SOUGogvMxBfblytCiPxFZ0IFZ0kV3eSXN1BUrUZocJEfKWJ+Coz8VVmLlebSKg2kVhjQlLTSXKtkaRqAwnlrQglzYivNxJTUE9MgZLijl6m1x73fKpAs06fqFKr6ejowGzqpLi0iszcYuSF5eQVV1NYWsf1ShUlNU2UK5upVrdRpzGg0nXSpLeg7bCiM9nRdznp6HbR6fBgdnqxeQbp6R+hd2gcz+gk/RMzDE37GfEFGQ/OMzm/yMzSCr5lmFmCqcUVJueXGJ9bZDS4QHB+gYWFhdVRQt2EXt+x+avWC1GX3i4rr8JsNmGxWHA47Lh6e+jzuOj3ehgc8DIyNMDYyBDjo8NMjo8yNTHGzNQEvulJ/DNTBP0zzAZ8zAX9LMzNsjg/x9LCPCtLi7C8BCsbX1p9/hUbd3k+Li7ulk0Fbr755i/FiBMSs+UKrzRHMZSdoxjOlimGpXLFiDRHMZqdkzcmlSvGpTm5E1kyxWSWTDGZnZM7lSWTT2dJc2eyZLm+LJnclynN8Wdmy/yZ2TmBjOycQEZWTiAzS+bPyJb5MrJlvvQs6UxGlnQ6PVs2lZEtm8zMlk1mSXMmsmW545nSnLEsac5oplQ+kiHNGcnMlg1nSmVDWbKcoaTUNOtDjzz23Kbwa6/1/0EsFv+jVJp/q1wuvz0nJ+fnmZmyu69kZDyQnp7+WGpq6tMSSeoLCRLJq4mJkrfiExL2x8cnvB8fH38qThDOisXiaLFYHCcSxSWJRKLUmNjYjJiY2IzY2NgrMSJRUoxIJIhEouhYkeicSCQKE4lEx0SCcEAQhL1x8fG74uMTXkhMTPxjgkTyeGJy8oPJaWm/SUtL+6+0tLQfZ2RkfD8zM/Or66ybSmzbtu0L27Ztu2nbtm033XHHHX+/e/fuL+3evfufjx079pWwsLCbz5079+3o6OjvJyQk3C4Wi/8zISHhzpSUlLskEsnvJBLJAxKJ5OHk5OTfSySSx1NTU/+QnJy8PTk5eXtqauofUlJSnlg79rBEInkgOTn5npSUlLuSkpJ+IQjCzxISEm6PjY29LSoq6paIiIivh4WFfXXfvn1f3rlz5z8988wz/7DGtc74P7q+sPFPGQqF4ot1dXV/t1mtH1///P8GzP+59d+ljnfyPGl2TAAAAABJRU5ErkJggg=='
	;
	let excludes = new Set();
	excludes.add("chrome://userchromejs/content/dav/speedDial/speedDial.html");

	ChromeUtils.defineESModuleGetters(this, {
	   NetUtil: 'resource://gre/modules/NetUtil.sys.mjs',
	});
	const rutaOriginal = PathUtils.join(PathUtils.profileDir, "chrome");
	function creaNsILocalFile(nombreFichero="", directorio = ""){
		//var rutaOriginal = PathUtils.join(PathUtils.profileDir, "chrome");
		var file = Cc ["@mozilla.org/file/local;1"]. createInstance (Ci.nsILocalFile || Ci.nsIFile);
		file.initWithPath (rutaOriginal);
		directorio = directorio.split("/").filter(x=> x);//eliminamos los blancos
		directorio.forEach(x =>file.append(x));//Añadimos a la ruta
		if(nombreFichero){
			file.append(nombreFichero);//Añadimos el fichero	
		}
		return file;
	}

	function StorageFile(nombreFichero, directorio = ""){
		var file = creaNsILocalFile(nombreFichero, directorio);

		async function toJson(key){
			try{
				return JSON.parse(key);
			}
			catch(e){
				return key;
			}
		}
		function toStringJson(key){
			return JSON.stringify(key);
		}

		async function getDataFile() {
			try {
				var stream = Cc['@mozilla.org/network/file-input-stream;1'].createInstance(Ci.nsIFileInputStream);
				stream.init(file, 0x01, 0, 0);
				var cvstream = Cc['@mozilla.org/intl/converter-input-stream;1'].createInstance(Ci.nsIConverterInputStream);
				cvstream.init(stream, 'UTF-8', 1024, Ci.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER);
				var content = '',
					data = {};
				while (cvstream.readString(4096, data)) {
					content += data.value;
				}
				cvstream.close();
				return content;
			} catch(e) {
				return "[]";
			}
		}

		this.add = function(content){
			var ostream = Cc['@mozilla.org/network/file-output-stream;1'].createInstance(Ci.nsIFileOutputStream);
			ostream.init(file, -1, -1, 0);
			var istream = Cc["@mozilla.org/io/string-input-stream;1"].createInstance(Ci.nsIStringInputStream);
			istream.setUTF8Data(toStringJson(content));
			NetUtil.asyncCopy(istream, ostream)
		}
		this.createFolder = async function(){
			throw new Error("no implementado");
		}
		
		this.remove = function(){
			file.remove(false);
		}
		
		/* Mueve de forma relativa partiendo de que el directorio base es el mismo */
		this.move = function(nuevoDirectorio){
			var carpetaDestino = creaNsILocalFile("", nuevoDirectorio);
			file.moveTo(carpetaDestino, nombreFichero)
		}

		this.get = async function x(){
			return toJson( await getDataFile());
		}
	}
	var this_menupopup, btn;
    var style = `
		@namespace url(http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul);

		menupopup.`+popupId+` menuitem.session {
			font-weight: bold;
			min-width: 400px;
			width: 400px;
			cursor: url("resource://userchromejs/Imagenes/cursor/blank.cur"), pointer !important;
		}
		menupopup.`+popupId+` menuitem.session[automatic=true] {
			color: blue;
		}
		menupopup.`+popupId+` menuitem.empty_data {
			color:#89042f;
			box-shadow: 0 0 5px 0px red inset, 0 0 10px 0px blue inset, 0 0 12px 2px #ec84ec inset;
		}
		menupopup.`+popupId+` menuitem.item_session {
			font-weight: normal;
			cursor: url("resource://userchromejs/Imagenes/cursor/blank.cur"), pointer !important;
		}
		menupopup.`+popupId+` .label_showItemSaveSession{
			cursor: url("resource://userchromejs/Imagenes/cursor/expand.cur"), pointer !important;
			background-image: url("resource://userchromejs/Imagenes/imgs/tree_open.gif");
			background-position: 50%;
			background-repeat: repeat-x;
			padding-right: 1px;
			color: transparent;
		}
		menupopup.`+popupId+` .label_showItemSaveSession.reduce{
			cursor: url("resource://userchromejs/Imagenes/cursor/expand_contract.cur"), pointer !important;
			background-image: url("resource://userchromejs/Imagenes/imgs/tree_close.gif");
		}

		menupopup.`+popupId+` .item_session{
			display: none;
		}
		menupopup.`+popupId+` .item_session.showItemSaveSession{
			display: block;
		}

		menupopup.`+popupId+` .ampliar_div{
			background-color: rgba(0,0,0,0.02);
		}

		menupopup.`+popupId+` .showItemSaveSession hbox{
			display: inline-block;
		}

		menupopup.`+popupId+` .showItemSaveSession label.menu-iconic-text{
			overflow: hidden;
			display: inline-block;
			width: calc( 100% - 30px );
		}
    `;

	var options = {
		menuTemplate: [
			//"listSavedSessionsAutomatic",
			"separator",
			"listSavedSessionsManual",
			"separator",
			"saveTabs",
			"restoreSessions",
			"clearAllSessions",
		],
		buttonTipTemplate: ["header", "title", "url", "createAt"],
		itemTipTemplate: ["title", "createAt", "stateEntries", "url"],
		tipId: tooltipId,
		tooltipColors: {
			header: "#64649F",
			title: "green",
			//url: "blue",
			url: "grey",
			createAt: "red",
			stateEntries: "grey"
		}
	};

	function borraSobrantes(){
		var botones = [...document.getElementsByClassName("save_session")];
		for(let i = 0; i < botones.length; i++){
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

	var namePref = {
		test:"userChromeJS.save_session.test",
		sessions:"userChromeJS.save_session.sessions"
	}

	function _localize(sid) {
		var strings = {
			en: {
				textButton:`
					  Guarda y recupera las pestañas de la ventana activa
				`.replace(/^\n| {2,}|\t/g, ''),
				saveTabs: "Guardar pestañas",
				itemTip: "hace %ago, %date",
				day: "d",
				nameSession:"Nombre de la sesión",
				nameSessionDefault:"sesión",
				nameSessionAutomatic:"automático",
				clearAllSessions:"¿Borrar todas las sesiones?",
				clearSession:"¿Borrar esta sesión?",
				restoreSessions:"Restaurar sesiones",
				whitoutData: "sin datos"
			}
		};
		_localize = function(sid) {
			return strings.en[sid] || sid;
		};
		return _localize.apply(this, arguments);
	}

	function paddy(n, p=2, pad_char='0') {
		var pad = new Array(1 + p).join(pad_char);
		return (pad + n).slice(-pad.length);
	}
	function fechaACadena(fecha){
		var dia = paddy(fecha.getDate());
		var mes = paddy(fecha.getMonth()+1);
		var anno = fecha.getFullYear();

		var hora = paddy(fecha.getHours());
		var minutos = paddy(fecha.getMinutes());
		var segundos = paddy(fecha.getSeconds());

		return dia+"/"+mes+"/"+anno+" "+hora+":"+minutos+":"+segundos;
		//return anno+"/"+mes+"/"+dia+" "+hora+":"+minutos+":"+segundos;
	}

	var deletedSessions = [];
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
		updTooltip: function(tip, tn) {
			var template, header, title, url, createAt, stateEntries;
			if(tn == btn)
			{
				template = options.buttonTipTemplate;
				header = _localize("textButton");
			}
			else if(tn.getAttribute("type") == "item_session")
			{
				template = options.itemTipTemplate;
				title = tn.getAttribute("nameSession");
				createAt = +tn.getAttribute("createAt");
				url = tn.getAttribute("url");
			}
			else if(tn.getAttribute("type") == "session")
			{
				template = options.itemTipTemplate;

				title = tn.getAttribute("nameSession");
				createAt = +tn.getAttribute("createAt");

				stateEntries = JSON.parse(tn.getAttribute("stateEntries"));
				let that = this;
				stateEntries = stateEntries.map(function(entry, index, array) {
					return index+": "+that.crop(entry);
				});
				stateEntries = stateEntries.join("\n");
			}
			else
			{
				return false;
			}

			var tipData = this.getTooltipData(template, header, title, url, createAt, stateEntries);
			tip.textContent = "";
			tip.appendChild(tipData);
			if(createAt && template.indexOf("createAt") != -1)
			{
				tip.initUpdateTimer(function() {
					var tipData = this.getTooltipData(template, header, title, url, createAt, stateEntries);
					if(tipData.textContent != tip.textContent) {
						tip.textContent = "";
						tip.appendChild(tipData);
					}
				}, this);
			}
			return tip.hasChildNodes();
		},
		getTooltipData: function(template, header, title, url, createAt, stateEntries) {
			var df = document.createDocumentFragment();
			var hasHeader = header && template.indexOf("header") != -1;
			var that = this;
			function item(key, val) {
				var lbl = that.createElement("label");
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
					case "createAt":
						if(!createAt)
							break;
						let dt = Math.round(Math.max(0, Date.now() - createAt)/1000);
						let days = Math.floor(dt/24/3600);
						dt -= days*24*3600;
						let d = new Date((dt + new Date(dt).getTimezoneOffset()*60)*1000);
						let ts = paddy(d.getHours()) + ":" + paddy(d.getMinutes());
						if(days)
							ts = days + _localize("day") + " " + ts;
						let tsTip = _localize("itemTip")
							.replace("%ago", ts)
							//.replace("%date", new Date(createAt).toLocaleString())
							.replace("%date", fechaACadena(new Date(createAt)))
							;
						item(key, tsTip);
				}
			}, this);
			return df;
		},
		/*createAt: function (createAt){
			if(!createAt) return "";
			let dt = Math.round(Math.max(0, Date.now() - createAt) / 1000);
			let days = Math.floor(dt / 24 / 3600);
			dt -= days * 24 * 3600;
			let d = new Date((dt + new Date(dt).getTimezoneOffset() * 60) * 1000);
			let ts = paddy(d.getHours()) + ":" + paddy(d.getMinutes());
			if (days)
				ts = days + " días " + " " + ts;
			let tsTip = _localize("itemTip")
				.replace("%ago", ts)
				.replace("%date", new Date(createAt).toLocaleString());
			return tsTip;
		},*/
		crop: function(s, crop = 200) {
			if (s.length <= crop)
				return s;
			var start = Math.round(crop * 0.6);
			return s.substr(0, start) + "…" + s.substr(start - crop);
		},
		checkForMiddleRightClick: function(e, btn) {
			var mi = e.target;
			if (mi.hasAttribute("nameSession") && e.button == CLIKS.right /*&& mi.parentNode == e.currentTarget*/)
			{
				e.preventDefault();
				e.stopPropagation();
				this.deleteSaveSession(mi);
				mi.parentNode.removeChild(mi);
				this.populateMenu();
			}
		},
		createElement:function (name, attrs) {
			var node = document.createElementNS(xulns, name);
			if (attrs){
				for (var attrName in attrs){
					if (attrs.hasOwnProperty(attrName) && attrs[attrName] != null){						
						if(attrName.startsWith('on')){							
							node.addEventListener(attrName.slice(2), new Function(attrs[attrName]));
						}
						else{
							node.setAttribute(attrName, attrs[attrName]);
						}
					}
				}
			}

			return node;
		},
		get window(){
			var win = Components.classes["@mozilla.org/appshell/window-mediator;1"]
				.getService(Components.interfaces.nsIWindowMediator)
				.getMostRecentWindow("navigator:browser");
			return win;
		},
		listSavedSessions: async function(df, automatic_) {
			let ss = await this.storage.getSessions();
			ss.forEach(function(sesion, i) {
				var {nameSession, date, dataTabs, automatic} = sesion;
				if(!automatic_ != !automatic){
					return;
				}
				var numberEntries = dataTabs.length;
				var urls = dataTabs.map((entry) => {
					return decodeURI(entry.url);
				});
				var mi = this.createElement("menuitem", {
					label: "("+numberEntries+") " + nameSession,
					class: "menuitem-iconic bookmark-item menuitem-with-favicon session",
					index: i,
					type:"session",
					automatic:automatic,
					nameSession:nameSession,
					createAt:date,
					stateEntries: JSON.stringify(urls)
				});
				mi.onclick = this.restoreSavedTabs.bind(this, sesion);
				//mi.onmouseup = this.shouldPreventHide;
				mi.setAttribute("image", imageSesssion);

				var lblExpand = this.createElement("label");
				lblExpand.textContent = "+";
				lblExpand.className = "label_showItemSaveSession";
				lblExpand.onclick=function(e){
					let next = ampliar_div.nextElementSibling;
					while(next && next.classList.contains("item_session"))
					{
						next.classList.toggle("showItemSaveSession");
						next = next.nextElementSibling;
					}
					lblExpand.classList.toggle("reduce");
				};
				var ampliar_div = this.createElement("div");
				ampliar_div.className = "ampliar_div";
				ampliar_div.appendChild(lblExpand);
				ampliar_div.appendChild(mi);
				df.appendChild(ampliar_div);
				if(btn.getAttribute("conTitulos") != "false" && !automatic_)
				{
					this.listSavedSessionsItems(df, sesion);
				}

			}, this);
		},
		listSavedSessionsItems:function(df, sesion) {
			var {nameSession, date, dataTabs} = sesion;
			dataTabs.forEach(function(data, i) {
				var {label, url, image} = data;

				var mi = this.createElement("menuitem", {
					label: "    "+label,
					class: "menuitem-iconic bookmark-item menuitem-with-favicon item_session",
					index: i,
					type:"item_session",
					nameSession:nameSession,
					createAt:date,
					url: decodeURI(url),
					image:image || noImage,
				});
				//mi.onclick = this.restoreSavedTabs.bind(this, sesion);
				//mi.setAttribute("image", image || noImage);
				mi.onclick = this.restoreSavedConcreteTab.bind(this, url);
				df.appendChild(mi);

			}, this);
		},
		restoreSavedTabs:function(sesion, event) {
			if(event.button != CLIKS.left) return;

			var openLinkIn = this.window.openLinkIn;
			sesion.dataTabs.forEach(function(entry, index, array) {
				this.window.gBrowser.addTab(entry.url, {
					triggeringPrincipal: Services.scriptSecurityManager.getSystemPrincipal()
				});
			});
		},
		restoreSavedConcreteTab:function(url, event) {
			if(event.button != CLIKS.left) return;
			this.window.gBrowser.addTab(url, {
				triggeringPrincipal: Services.scriptSecurityManager.getSystemPrincipal()
			});
		},
		getUniqueTabs: function() {
			let mySet = new Set();
			var dataTabs = [];
			this.window.gBrowser.tabs.forEach((tab) => {
				let urlTab = tab.linkedBrowser.currentURI.spec;
				if(!mySet.has(urlTab) && !excludes.has(urlTab)){
					dataTabs.push({
						label: tab.getAttribute("label"),
						url:urlTab,
						image: tab.image
					});
					mySet.add(urlTab);
				}
			});
			return dataTabs;
		},
		saveTabs: function(name, automatic) {
			this.storage.saveDataTabs(name, this.getUniqueTabs(), automatic);
		},
		saveTabsManual: function() {
			var nombreSesion = prompt(_localize("nameSession"), _localize("nameSessionDefault") + "("+(fechaACadena(new Date()))+")");
			if(nombreSesion){
				this.saveTabs(nombreSesion,false);
			}
		},
		deleteSaveSession: async function(mi) {
			if(mi.getAttribute("type") == "session")
			{
				if(confirm(_localize("clearSession") + " ("+mi.getAttribute("nameSession")+")"))
				{
					var createAt = +mi.getAttribute("createAt");
					var sessions = await this.storage.getSessions();
					var index = sessions.findIndex(function(elto, index){
					  return elto.date == createAt;
					});
					let sessionDelete = sessions.splice(index, 1);//sessionDelete es un array
					deletedSessions.push(sessionDelete[0]);
					this.storage.saveSessions(sessions);
				}
			}
		},
		clearAllSessions: function(){
			if(confirm(_localize("clearAllSessions")))
			{
				this.storage.saveSessions([]);
			}
		},
		restoreSessions: async function(){
			if(deletedSessions.length)
			{
				var sessions = await this.storage.getSessions();
				sessions.push(...deletedSessions);
				this.storage.saveSessions(sessions);
				deletedSessions = [];
			}
		},
		storage:{
			get prefs(){
				if(!this.sf)
				{
					this.sf = new StorageFile("dav_button_saveSession.json", "");
				}
				return this.sf;
			},
			saveDataTabs: async function(nameSession, dataTabs, automatic){
				var sessions = await this.getSessions();
				sessions.push({
					nameSession:nameSession,
					date:new Date().getTime(),
					dataTabs:dataTabs,
					automatic:automatic
				});
				sessions.sort(function(a, b) {
					let x = !!a.automatic
						y = !!b.automatic;
					//true values first
					return (x === y)? 0 : x? -1 : 1;
				});

				this.saveSessions(sessions);
			},
			saveSessions: function(sessions){
				return this.setData(sessions);
			},
			getSessions: async function(){
				let data = await this.getData([]);
				return data;
			},
			toJson: function(key){
				try{
					return JSON.parse(key);
				}
				catch(e){
					return key;
				}
			},
			toStringJson: function(key){
				return JSON.stringify(key);
			},
			getData: async function(defaultvalue){
				let result = await this.prefs.get();
				return result || defaultvalue;
			},
			setData: function(value){
				this.prefs.add(value);
			}
		},
		populateMenu: async function (event)
		{
			this_menupopup = btn.firstChild;
			//var popup = event?event.currentTarget:this_menupopup;
			var popup = this_menupopup;
			var document = this.window.document;
			var df = document.createDocumentFragment();
			var that = this;

			for (let sid of options.menuTemplate) {
				switch (sid) {
					case "separator":
						if (df.hasChildNodes() && df.lastChild.localName != "menuseparator")
							df.appendChild(functions.createElement("menuseparator"));
						break;
					case "saveTabs":
						df.appendChild(functions.createElement("menuitem", {
							label: _localize("saveTabs")
						})).onclick = functions.saveTabsManual.bind(functions);
						break;
					case "listSavedSessionsManual":
						await functions.listSavedSessions(df, false);
						break;
					case "listSavedSessionsAutomatic":
						await functions.listSavedSessions(df, true);
						break;
					case "clearAllSessions":
						df.appendChild(functions.createElement("menuitem", {
							label: _localize("clearAllSessions")
						})).onclick = functions.clearAllSessions.bind(functions);
						break;
					case "restoreSessions":
						if(deletedSessions.length)
						{
							df.appendChild(functions.createElement("menuitem", {
								label: _localize("restoreSessions")
							})).onclick = functions.restoreSessions.bind(functions)
						}
						break;
					default:
						Components.utils.reportError(functions.errPrefix + 'Invalid template entry: "' + sid + '"');
				}
			}

			while (df.hasChildNodes() && df.lastChild.localName == "menuseparator")
			{
				df.removeChild(df.lastChild);
			}
			while (popup.hasChildNodes())
			{
				popup.removeChild(popup.firstChild);
			}
			popup.textContent = "";

			if (!df.hasChildNodes())
			{
				let mi = this.createElement("menuitem", {
					label: _localize("whitoutData")
				});
				mi.setAttribute("style","color:#89042f;font-weight: bold;box-shadow: 0 0 5px 0px red inset, 0 0 10px 0px blue inset, 0 0 12px 2px #ec84ec inset;");
				//mi.setAttribute("class","empty_data");
				df.appendChild(mi);
			}
			popup.appendChild(df);
			return true;
		}
	}

	async function clickButton(event)
	{
		btn.setAttribute("conTitulos",  event.button != CLIKS.middle);
		if(event && event.button == CLIKS.middle)
		{
			await functions.populateMenu();
			this_menupopup.openPopup();
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
					class: 'toolbarbutton-1 chromeclass-toolbar-additional save_session',
					style: btnImage,
					//popup: popupId
				};
				for (var p in props) {
					button.setAttribute(p, props[p]);
				}
				button.onclick = event => clickButton(event);

				this_menupopup = aDocument.createXULElement('menupopup');
				this_menupopup.setAttribute('id', popupId);
				this_menupopup.setAttribute('class', popupId);

				this_menupopup.addEventListener('popupshowing', function(event){
					functions.populateMenu(event);
				});

				this_menupopup.onclick = function(e) {
					functions.checkForMiddleRightClick(e);
				}

				button.appendChild(this_menupopup);
				button.functions = functions;

				button.addEventListener('mouseenter', function(event){
					//window = event.view;
					btn = button;
					btn.setAttribute("conTitulos",  "true");
				});

				btn = button;

				functions.initTooltip();
				try{setTimeout(borraSobrantes, 10);}catch(e){}
				insertaEstilos();

				return button;
			}
		});
    } catch (e) {
		console.error(e);
	};
}).call(this);
