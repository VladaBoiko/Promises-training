!function(){var t=document.querySelector(".first-form"),o={firstBox:document.querySelector(".first"),stopBtn:t.querySelector("[data-stop]")};o.stopBtn.disabled=!0,t.addEventListener("submit",(function(t){t.preventDefault();for(var n=t.currentTarget.elements,r=n.delay,u=n.amount,a=Number(u.value),c=Number(r.value),l=1;l<=a;l+=1){var s="#".concat(Math.floor(16777215*Math.random()).toString(16));o.firstBox.style.backgroundColor="".concat(s),e(c,s).then((function(t){o.firstBox.style.backgroundColor="".concat(t)})),c+=1e3}console.log("SUBMIT"),console.log("SUBMIT")}));var e=function(t,o){return new Promise((function(e){setTimeout((function(){e(o)}),t)}))}}();
//# sourceMappingURL=index.20a3cfe9.js.map
