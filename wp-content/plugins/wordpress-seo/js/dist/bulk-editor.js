!function(e){var n={};function t(s){if(n[s])return n[s].exports;var i=n[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:s})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(s,i,function(n){return e[n]}.bind(null,i));return s},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=212)}({212:function(e,n,t){"use strict";t.r(n);var s,i=t(25),o=t.n(i);s=function(e){var n=e.find("[class^=wpseo-new]").first().attr("class"),t="#"+n+"-",s=t.replace("new","existing"),i=e.find("th[id^=col_existing_yoast]").first().text().replace("Existing ",""),a=n.replace("-new-","_save_"),r="wpseo_save_all_"+e.attr("class").split("wpseo_bulk_")[1],l=a.replace("wpseo_save_",""),u={newClass:"."+n,newId:t,existingId:s},c={submit_new:function(e){c.submitNew(e)},submitNew:function(e){var n,t=u.newId+e,s=u.existingId+e;n="select-one"===o()(u.newId+e).prop("type")?o()(t).find(":selected").text():o()(t).val();var r=o()(s).html();if(n===r)o()(t).val("");else{if(""===n&&!window.confirm("Are you sure you want to remove the existing "+i+"?"))return void o()(t).val("");var l={action:a,_ajax_nonce:wpseoBulkEditorNonce,wpseo_post_id:e,new_value:n,existing_value:r};o.a.post(ajaxurl,l,c.handleResponse)}},submit_all:function(e){c.submitAll(e)},submitAll:function(e){e.preventDefault();var n={action:r,_ajax_nonce:wpseoBulkEditorNonce,send:!1,items:{},existingItems:{}};o()(u.newClass).each((function(){var e=o()(this).data("id"),t=o()(this).val(),s=o()(u.existingId+e).html();""!==t&&(t===s?o()(u.newId+e).val(""):(n.send=!0,n.items[e]=t,n.existingItems[e]=s))})),n.send&&o.a.post(ajaxurl,n,c.handleResponses)},handle_response:function(e,n){c.handleResponse(e,n)},handleResponse:function(e,n){if("success"===n){var t=e;if("string"==typeof t&&(t=JSON.parse(t)),t instanceof Array)o.a.each(t,(function(){c.handleResponse(this,n)}));else if("success"===t.status){var s=t["new_"+l];o()(u.existingId+t.post_id).html(s.replace(/\\(?!\\)/g,"")),o()(u.newId+t.post_id).val("")}}},handle_responses:function(e,n){c.handleResponses(e,n)},handleResponses:function(e,n){var t=o.a.parseJSON(e);o.a.each(t,(function(){c.handleResponse(this,n)}))},set_events:function(){c.setEvents()},setEvents:function(){e.find(".wpseo-save").click((function(e){var n=o()(this).data("id");e.preventDefault(),c.submitNew(n,this)})),e.find(".wpseo-save-all").click(c.submitAll),e.find(u.newClass).keydown((function(e){if(13===e.which){e.preventDefault();var n=o()(this).data("id");c.submitNew(n,this)}}))}};return c},window.bulk_editor=s,window.bulkEditor=s,o()(document).ready((function(){o()('table[class*="wpseo_bulk"]').each((function(e,n){var t=o()(n);s(t).setEvents()}))}))},25:function(e,n){e.exports=window.jQuery}});