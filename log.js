"use strict";(function(g){var f=g.defaultParams,e=g.utmParams,d=g.appkey;var c="http://ds.service.163.org/1.gif?";var a=[];var b=decodeURIComponent(decodeURIComponent(location.search)).substr(1).split("&");var h={};b.forEach(function(i){var j=i.split("=");j[0]&&(h[j[0]]=j[1])});f.forEach(function(k){switch(k){case"cookie":document[k]&&a.push(k+"="+document[k]);break;case"sessionid":var j=document.cookie.match(/(PHPSESSIONID=|JSESSIONID=)[^;]+/);if(j&&j[0]){a.push(j[0].replace(/(PHPSESSIONID|JSESSIONID)/,"sessionid"))}break;case"referrer":var i=document[k]||h[k];i&&a.push(k+"="+i);break;case"url":a.push(k+"="+encodeURIComponent(location.href));break;case"uid":case"pageid":h[k]&&a.push(k+"="+h[k]);break}});Object.keys(e).forEach(function(i){e[i]=h[i]||e[i];e[i]&&a.push(i+"="+e[i])});a.push("appkey="+d);new Image().src=c+a.join("&")+"&actiontype=visit";(_dsst||{}).action=function(i){if(!i||!Object.keys(i).length){return}if(!i.actiontype){console.error("_dsst.action方法，actiontype参数缺失")}var j=[];Object.keys(i).forEach(function(k){var l=i[k]&&"";l=typeof i[k]==="string"?i[k]:JSON.stringify(i[k]);i[k]&&j.push(k+"="+l)});if(j.length){new Image().src=c+a.join("&")+"&"+j.join("&")}}})({defaultParams:["user-ip","user-language","operatetime","user-agent","cookie","sessionid","uid","url","referrer","pageid"],utmParams:{qudao:"weixin",companyId:1},appkey:"f1cc4f3e-23a0-11e9-8058-246e96613a20"});
