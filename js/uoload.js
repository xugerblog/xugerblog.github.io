$(window).load(function(){var a={thumbBox:".thumbBox",spinner:".spinner",imgSrc:CR_IMG_URL+"/Public/images/avatar.png"};var b=$(".imageBox").cropbox(a);$("#upload-file").on("change",function(){$(".thumbBox").html("");var c=new FileReader();c.onload=function(d){a.imgSrc=d.target.result;$(".thumbBox").html("");b=$(".imageBox").cropbox(a)};c.readAsDataURL(this.files[0]);this.files=[]});$("#btnCrop").on("click",function(){var c=b.getDataURL();$(".thumbBox").html("");$(".imageBox").css("background","none");$(".thumbBox").append('<img src="'+c+'" align="absmiddle" style="width:192px;margin-top:4px;margin-left:2px;border-radius:128px;box-shadow:0px 0px 12px #7E7E7E;">')});$("#btnZoomIn").on("click",function(){b.zoomIn()});$("#btnZoomOut").on("click",function(){b.zoomOut()})});(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)}else{a(jQuery)}}(function(a){var b=function(f,g){var g=g||a(f.imageBox),i={state:{},ratio:1,options:f,imageBox:g,thumbBox:g.find(f.thumbBox),spinner:g.find(f.spinner),image:new Image(),getDataURL:function(){var n=this.thumbBox.width(),t=this.thumbBox.height(),o=document.createElement("canvas"),q=g.css("background-position").split(" "),v=g.css("background-size").split(" "),w=parseInt(q[0])-g.width()/2+n/2,u=parseInt(q[1])-g.height()/2+t/2,l=parseInt(v[0]),r=parseInt(v[1]),p=parseInt(this.image.height),s=parseInt(this.image.width);o.width=n;o.height=t;var m=o.getContext("2d");m.drawImage(this.image,0,0,s,p,w,u,l,r);var k=o.toDataURL("image/png");return k},getBlob:function(){var o=this.getDataURL();var l=o.replace("data:image/png;base64,","");var n=atob(l);var m=[];for(var k=0;k<n.length;k++){m.push(n.charCodeAt(k))}return new Blob([new Uint8Array(m)],{type:"image/png"})},zoomIn:function(){this.ratio*=1.1;d()},zoomOut:function(){this.ratio*=0.9;d()}},d=function(){var k=parseInt(i.image.width)*i.ratio;var m=parseInt(i.image.height)*i.ratio;var l=(g.width()-k)/2;var n=(g.height()-m)/2;g.css({"background-image":"url("+i.image.src+")","background-size":k+"px "+m+"px","background-position":l+"px "+n+"px","background-repeat":"no-repeat"})},j=function(k){k.stopImmediatePropagation();i.state.dragable=true;i.state.mouseX=k.clientX;i.state.mouseY=k.clientY},c=function(n){n.stopImmediatePropagation();if(i.state.dragable){var l=n.clientX-i.state.mouseX;var p=n.clientY-i.state.mouseY;var m=g.css("background-position").split(" ");var k=l+parseInt(m[0]);var o=p+parseInt(m[1]);g.css("background-position",k+"px "+o+"px");i.state.mouseX=n.clientX;i.state.mouseY=n.clientY}},e=function(k){k.stopImmediatePropagation();i.state.dragable=false},h=function(k){k.originalEvent.wheelDelta>0||k.originalEvent.detail<0?i.ratio*=1.1:i.ratio*=0.9;d()};i.spinner.show();i.image.onload=function(){i.spinner.hide();d();g.bind("mousedown",j);g.bind("mousemove",c);a(window).bind("mouseup",e);g.bind("mousewheel DOMMouseScroll",h)};i.image.src=f.imgSrc;g.on("remove",function(){a(window).unbind("mouseup",e)});return i};jQuery.fn.cropbox=function(c){return new b(c,this)}}));