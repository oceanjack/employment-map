var xmlHttp;
function createXMLHttp() {
	if (window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest();
	} else {
		xmlHttp = new ActiveXObject("MicrosoftXMLHTTP");
	}
}
function postMsg(args, location, callback) {
	createXMLHttp();
	var str = location;
	if(args.length > 0) {
	  str += '?';
	}
	for(var i = 0, l = args.length; i < l; ++ i) {
		str += args[i].name + '=' + args[i].val;
		(i + 1 < l) && (str += '&');
	}
	xmlHttp.open("POST", str);
	xmlHttp.onreadystatechange = function() { checkUseridCallback(callback); };
	xmlHttp.send(null);
}
function checkUseridCallback(callback) {
	if (xmlHttp.readyState == 4) {
		if (xmlHttp.status == 200) {
			callback && callback(xmlHttp.responseText);
		}
	}
}
