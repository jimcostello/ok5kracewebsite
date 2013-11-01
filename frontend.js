function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function clearText(thefield){
if (thefield.defaultValue==thefield.value) thefield.value = "";
}

function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}

function int_only(value) {
	value = parseInt(value);
	if(value<0) value = value * -1;
	return (value) ? value+"" : "";
}

function BookMark_Page() {
	if(document.all) {
		window.external.AddFavorite(this.location,document.title);
	} else {
		alert("To bookmark page use (Ctrl+D)");
	}
}

var ie4 = document.all ? 1 : 0;
var ns4 = document.layers ? 1 : 0;
var ns6 = window.netscape ? 1 : 0;
function addText(id,text) {
	
	menuobj = (ie4) ? document.all[id] : (ns6 ? document.getElementById(id) : (ns4 ? document.layers[id] : ''));
	
	if(ie4 || ns6) {
		menuobj.innerHTML=text;
	} else {
		menuobj.document.open();
		menuobj.document.write(text);
		menuobj.document.close();
	}
	
}

function MM_displayStatusMsg(msgStr) { //v1.0
  status=msgStr;
  document.MM_returnValue = true;
}

var clickZoomImage;
function clickZoom(url,imgname,windowstatus) {
	clickZoomImage=window.open(url,imgname,windowstatus);
	if (window.focus) {
		clickZoomImage.focus();
	}
}
function checkClickZoom() {
	if (clickZoomImage) {
		clickZoomImage.close();
	}
}


