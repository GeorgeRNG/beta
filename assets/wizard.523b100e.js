import"./modulepreload-polyfill.b7f2da20.js";/* empty css             */import{a as d,h as l,d as v}from"./main.93106b1e.js";const k=document.querySelectorAll("div.step.v").length;let c=1;const r=document.querySelector("button#prev"),u=document.querySelector("button#next");r.onclick=()=>m(-1);u.onclick=()=>{if(c===3){p.click();return}m(1)};const f=document.querySelector("a#jump");f.onclick=()=>s(3);s(1);function m(e){s(c+e)}function s(e){document.querySelectorAll("div.step").forEach(a=>a.classList.add("hidden")),u.disabled=!1,r.disabled=!1;const n=e<=0;(n||e===k)&&(u.disabled=!0),(n||e===1)&&(r.disabled=!0),c=e,document.getElementById(String(e)).classList.remove("hidden")}const o=document.querySelector("#link");o.onchange=()=>{o.value="but why?"};o.onclick=()=>{navigator.clipboard.writeText(o.value),d("Copied!")};const p=document.querySelector("a#enter");p.onclick=e=>{if(!l.test(t.value)){d("Looks like that data isn't valid"),e.stopPropagation(),e.preventDefault();return}const n=t.value.match(l)[0],i=v(n);if(!i.blocks&&i.blocks.length){d("Looks like that data isn't valid"),e.stopPropagation(),e.preventDefault();return}s(0),fetch(`${window.sessionStorage.getItem("apiEndpoint")}save`,{body:n,method:"POST"}).then(a=>a.json()).then(a=>{document.querySelector("div#invalid").classList.add("hidden"),document.querySelector("div#valid").classList.remove("hidden"),o.value="https://dfonline.dev/edit/?template="+a.id,s(4),o.focus()})};const t=document.getElementById("input");t.onkeyup=e=>{t.onchange(e),e.key==="Enter"&&(e.stopPropagation(),p.click())};t.onload=t.onpaste=t.onkeydown=t.onchange=()=>{if(t.classList.remove("bad"),t.classList.remove("good"),l.test(t.value)){t.classList.add("good");return}t.classList.add("bad")};document.onkeydown=e=>{c===3&&t.onkeyup(e)};
