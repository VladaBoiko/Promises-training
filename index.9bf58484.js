function getRandomHexColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}var firstForm=document.querySelector(".first-form"),firstRefs={firstBox:document.querySelector(".first"),stopBtn:firstForm.querySelector("[data-stop]")};firstRefs.stopBtn.disabled=!0,firstForm.addEventListener("submit",(function(e){e.preventDefault();for(var t=e.currentTarget.elements,r=t.delay,o=t.amount,n=Number(o.value),s=Number(r.value),a=1;a<=n;a+=1){var i=getRandomHexColor();createPromise(s,i).then((function(e){firstRefs.firstBox.style.backgroundColor="".concat(e)})),s+=1e3}console.log("SUBMIT"),console.log("SUBMIT")}));var createPromise=function(e,t){return new Promise((function(r){setTimeout((function(){r(t)}),e)}))};
//# sourceMappingURL=index.9bf58484.js.map
