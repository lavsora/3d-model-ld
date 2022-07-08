(()=>{"use strict";const e=({timing:e,draw:t,duration:a})=>{let r=performance.now();requestAnimationFrame((function n(l){let s=(l-r)/a;s>1&&(s=1);const o=e(s);t(o),s<1&&requestAnimationFrame(n)}))},t=e=>Math.pow(e,2),a=e=>function(t){return t<.5?e(2*t)/2:(2-e(2*(1-t)))/2},r=({modal:r,popupContent:n,isOpened:l})=>{var s;e({timing:l?a(t):(s=a(t),function(e){return s(1-e)}),draw(e){l&&(e<.5&&(r.style.opacity=2.1*e),e<1&&(n.style.transform=`scale(${e})`,r.style.display="block")),l||(e<.2&&(r.style.display="none"),e<1&&(n.style.transform=`scale(${e})`,r.style.opacity=e))},duration:700})},n=({formId:e,someElem:t=[]})=>{const a=document.getElementById(e),r=document.createElement("div");try{if(!a)throw new Error("Не могу найти форму.");a.addEventListener("submit",(e=>{e.preventDefault(),((e,a=(()=>{const e=document.createElement("div");return e.classList.add("sk-wave"),e.innerHTML="<div class='sk-rect sk-rect-1'></div>\n                            <div class='sk-rect sk-rect-2'></div>\n                            <div class='sk-rect sk-rect-3'></div>\n                            <div class='sk-rect sk-rect-4'></div>\n                            <div class='sk-rect sk-rect-5'></div>",e})())=>{const n=new FormData(e),l={};var s;n.forEach(((e,t)=>{l[t]=e})),r.classList.add("white"),r.textContent="",r.insertAdjacentElement("afterbegin",a),e.append(r),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type&&0<+t.textContent?l[e.id]=t.textContent:"input"===e.type&&0<+t.value&&(l[e.id]=t.value)})),l.hasOwnProperty("user_message")&&""===l.user_message&&delete l.user_message,(e=>{let t=!0;return(e=>{e.forEach((e=>{("user_name"===e.name&&""===e.value||"user_email"===e.name&&""===e.value||"user_phone"===e.name&&""===e.value)&&e.classList.add("error"),("user_name"!==e.name||/^[а-яёЁ\s]{2,}$/gi.test(e.value))&&("user_email"!==e.name||/^[^ ]+@[^ ]+\.[a-z]{2,3}$/gi.test(e.value))&&("user_phone"!==e.name||/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10,}$/g.test(e.value))||e.classList.add("error"),e.addEventListener("input",(e=>{e.preventDefault(),("user_name"===e.target.name&&/^[а-яёЁ\s]{2,}$/gi.test(e.target.value)||"user_email"===e.target.name&&/^[^ ]+@[^ ]+\.[a-z]{2,3}$/gi.test(e.target.value)||"user_phone"===e.target.name&&/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10,}$/g.test(e.target.value))&&e.target.classList.remove("error")}))}))})(e),e.forEach((e=>{e.classList.contains("error")&&(t=!1)})),t})(formElements)?(s=l,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(s),headers:{"Content-type":"application/json"}}).then((e=>e.json()))).then((e=>{r.textContent="Спасибо! Наш менеджер с вами свяжется!",formElements.forEach((e=>{e.value=""}))})).catch((e=>{r.textContent="Ошибка!"})):r.textContent="Ошибка! Введите данные правильно.",setTimeout((()=>r.textContent=""),4e3)})(a)}))}catch(e){console.log(e.message)}};(e=>{const t=document.getElementById("timer-hours"),a=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds");let n;const l=function(e){return String(e).padStart(2,"0")},s=()=>{let e=(()=>{let e=(new Date("23 jule 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=l(e.hours),a.textContent=l(e.minutes),r.textContent=l(e.seconds),e.timeRemaining<0&&(clearInterval(n),t.textContent="00",a.textContent="00",r.textContent="00")};s(),n=setInterval(s,1e3)})(),(()=>{const e=document.querySelector("menu");document.addEventListener("click",(t=>{t.target.closest(".menu")?e.classList.add("active-menu"):(t.target.classList.contains("close-btn")||!t.target.closest(".active-menu")||t.target.closest("ul>li>a"))&&e.classList.remove("active-menu")}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),a=e.querySelector(".popup-content");t.forEach((t=>{t.addEventListener("click",(()=>{window.innerWidth>=768?(r({modal:e,popupContent:a,isOpened:!0}),e.style.display="block"):(e.style.opacity="1",a.style.transform="scale(1)",e.style.display="block")}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(document.documentElement.clientWidth>=768?r({modal:e,popupContent:a,isOpened:!1}):(e.style.opacity="0",a.style.transform="scale(0)",e.style.display="none"))}))})(),(()=>{const e=document.querySelector("a"),t=[...document.querySelectorAll("ul>li>a"),e];seamless.polyfill(),t.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const a=e.getAttribute("href").substring(1),r=document.getElementById(a);r&&seamless.elementScrollIntoView(r,{behavior:"smooth",block:"start"})}))}))})(),(()=>{const e=document.querySelectorAll('input[name="user_name"]'),t=document.querySelectorAll(".form-email"),a=document.querySelector(".mess"),r=document.querySelector(".calc-square"),n=document.querySelector(".calc-count"),l=document.querySelector(".calc-day");e.forEach((e=>{e.addEventListener("input",(e=>e.target.value=e.target.value.replace(/[^а-я\s]/gi,""))),e.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(/\s{2,}/g," "),e.target.value=e.target.value.replace(/^[\s]+|[\s]+$/g,"");let t=e.target.value.split(" ");for(var a=0;a<t.length;a++)t[a]=t[a].charAt(0).toUpperCase()+t[a].slice(1);e.target.value=t.join(" ")}))})),t.forEach((e=>{e.addEventListener("input",(e=>e.target.value=e.target.value.replace(/[^\w\@\_\.\!\~\*\'\-]/gi,""))),e.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(/\-{2,}/g,"-"),e.target.value=e.target.value.replace(/^[\-]+|[\-]+$/g,"")}))})),a.addEventListener("input",(e=>e.target.value=e.target.value.replace(/[^а-я\s\-\!\?\,\:\;\(\)\"\.0-9]/gi,""))),a.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(/\s{2,}/g," "),e.target.value=e.target.value.replace(/\-{2,}/g,"-"),e.target.value=e.target.value.replace(/^[\s\-]+|[\s\-]+$/g,"");let t=e.target.value.split(" ");for(var a=0;a<t.length;a++)t[a]=t[a].charAt(0).toUpperCase()+t[a].slice(1);e.target.value=t.join(" ")})),r.addEventListener("input",(e=>e.target.value=e.target.value.replace(/\D+/,""))),n.addEventListener("input",(e=>e.target.value=e.target.value.replace(/\D+/,""))),l.addEventListener("input",(e=>e.target.value=e.target.value.replace(/\D+/,""))),function(e,t="+7 (__) --"){const a=document.querySelectorAll(e);function r(e){const a=e.keyCode,r=t,n=r.replace(/\D/g,""),l=this.value.replace(/\D/g,"");let s=0,o=r.replace(/[_\d]/g,(function(e){return s<l.length?l.charAt(s++)||n.charAt(s):e}));s=o.indexOf("_"),-1!=s&&(o=o.slice(0,s));let c=r.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");c=new RegExp("^"+c+"$"),(!c.test(this.value)||this.value.length<5||a>47&&a<58)&&(this.value=o),"blur"==e.type&&this.value.length<5&&(this.value="")}for(const e of a)e.addEventListener("input",r),e.addEventListener("focus",r),e.addEventListener("blur",r)}(".form-phone","+7 (___) ___-__-__")})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),a=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const r=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===r?(e.classList.add("active"),a[t].classList.remove("d-none")):(e.classList.remove("active"),a[t].classList.add("d-none"))}))}}))})(),((r=100)=>{const n=document.querySelector(".calc-block"),l=n.querySelector(".calc-type"),s=n.querySelector(".calc-square"),o=n.querySelector(".calc-count"),c=n.querySelector(".calc-day"),u=document.getElementById("total");let i,d=[];n.addEventListener("input",(n=>{n.target!==l&&n.target!==s&&n.target!==o&&n.target!==c||((r,{totalValue:n,lastValue:l})=>{e({timing:a(t),draw(e){0===l&&(r.textContent=Math.floor(n*e)),l>0&&(r.textContent=l+Math.floor((n-l)*e))},duration:600})})(u,(()=>{const e=+l.options[l.selectedIndex].value,t=s.value;let a=0,n=1,u=1;return o.value>1&&(n+=+o.value/10),c.value&&c.value<5?u=2:c.value&&c.value<10&&(u=1.5),a=l.value&&s.value?r*e*t*n*u:0,d.push(a),i=d[d.length-2],{totalValue:a,lastValue:i}})())}))})(100),n({formId:"form1",someElem:[{type:"block",id:"total"}]}),n({formId:"form2",someElem:[{type:"block",id:"total"}]}),n({formId:"form3",someElem:[{type:"block",id:"total"}]})})();