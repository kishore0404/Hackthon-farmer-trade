/*! For license information please see 7397.bc694d4d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmandi_data=self.webpackChunkmandi_data||[]).push([[7397,7368],{7397:function(t,n,i){i.r(n),i.d(n,{c:function(){return r}});var e=i(5785),c=i(7368),o=i(236),r=function(t,n){var i,r,a=function(t,e,c){if("undefined"!==typeof document){var o=document.elementFromPoint(t,e);o&&n(o)?o!==i&&(s(),u(o,c)):s()}},u=function(t,n){i=t,r||(r=i);var c=i;(0,e.c)((function(){return c.classList.add("ion-activated")})),n()},s=function(t){if(void 0===t&&(t=!1),i){var n=i;(0,e.c)((function(){return n.classList.remove("ion-activated")})),t&&r!==i&&i.click(),i=void 0}};return(0,o.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return a(t.currentX,t.currentY,c.a)},onMove:function(t){return a(t.currentX,t.currentY,c.b)},onEnd:function(){s(!0),(0,c.h)(),r=void 0}})}},7368:function(t,n,i){i.r(n),i.d(n,{a:function(){return o},b:function(){return r},c:function(){return c},d:function(){return u},h:function(){return a}});var e={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var n=this.getEngine();if(n){var i=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:i})}},notification:function(t){var n=this.getEngine();if(n){var i=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:i})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},c=function(){e.selection()},o=function(){e.selectionStart()},r=function(){e.selectionChanged()},a=function(){e.selectionEnd()},u=function(t){e.impact(t)}}}]);
//# sourceMappingURL=7397.bc694d4d.chunk.js.map