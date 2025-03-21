(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const f=()=>{document.querySelector("#app").innerHTML=`
    <div id="loading">
      <div class="spinner"></div>
      <p>Loading...</p>
    </div>
  `,setTimeout(()=>{document.querySelector("#app").innerHTML=`
      <div class="container">
        <h1>Password Generator</h1>
        <main class="content">
          <div id="result">
            <div id="input-div">
              <label for="password" hidden>Password</label>
              <input type="text" id="password" readonly>
              <button id="generate">&#x21BB</button>
            </div>
            <button id="copy">Copy</button>
          </div>
          <div id="settings">
            <label for="length">Password Length:</label>
            <input type="range" id="length" min="4" max="20" value="8">
            <p id="lengthDisplay">8</p>
          </div>
          <div id="options">
            <div>
              <input type="checkbox" id="uppercase">
              <label for="uppercase">ABC</label>
            </div>
            <div>
              <input type="checkbox" id="lowercase" checked>
              <label for="lowercase">abc</label>
            </div>
            <div>
              <input type="checkbox" id="numbers" checked>
              <label for="numbers">123</label>
            </div>
            <div>
              <input type="checkbox" id="symbols">
              <label for="symbols">@#$</label>
            </div>
          </div>
          <div id="strength-indicator">
            <p>Password Strength: <span id="strength-text">Weak</span></p>
            <div id="strength-bar">
              <div id="strength-bar-fill"></div>
            </div>
          </div>
        </main>
        <p id="notification" class="hidden"></p>
        <p class="footer">Gaurav Shrestha</p>
      </div>
    `},1e3)},c=(e,o=!1,s=3e3)=>{const r=document.querySelector("#notification");r.textContent=e,r.className=o?"notification error":"notification success",r.classList.add("visible"),setTimeout(()=>{r.classList.remove("visible")},s)},g=async e=>{try{await navigator.clipboard.writeText(e),c("Password copied to clipboard")}catch{c("Failed to copy password",!0)}},y=()=>String.fromCharCode(Math.floor(Math.random()*26)+97),m=()=>String.fromCharCode(Math.floor(Math.random()*26)+65),v=()=>String.fromCharCode(Math.floor(Math.random()*10)+48),w=()=>{const e="!@#$%^&*(){}[]=<>/,.-_";return e[Math.floor(Math.random()*e.length)]},u={upper:m,lower:y,num:v,sym:w},x=(e,o)=>{e.textContent=o},C=e=>e.split("").sort(()=>Math.random()-.5).join(""),S=(e,o)=>{let s="";s=o.reduce((r,{type:t})=>r+u[t](),"");for(let r=s.length;r<e;r++){const t=o[Math.floor(Math.random()*o.length)].type;s+=u[t]()}return C(s)},k=e=>{const o=e.length,s=/[A-Z]/.test(e),r=/[a-z]/.test(e),t=/[0-9]/.test(e),n=/[^A-Za-z0-9]/.test(e);let i=0;return o>=8&&(i+=1),o>=12&&(i+=1),s&&(i+=1),r&&(i+=1),t&&(i+=1),n&&(i+=1),i},L=e=>{const o=document.querySelector("#strength-text"),s=document.querySelector("#strength-bar-fill");let r="Weak",t="red",n="25%";e>=6?(r="Very Strong",t="green",n="100%"):e>=4?(r="Strong",t="orange",n="75%"):e>=2&&(r="Medium",t="yellow",n="50%"),o.textContent=r,s.style.width=n,s.style.backgroundColor=t},a=e=>{const{passwordInput:o,lengthInput:s,uppercaseCheckbox:r,lowercaseCheckbox:t,numbersCheckbox:n,symbolsCheckbox:i}=e,p=s.value,l=[{type:"upper",enabled:r.checked},{type:"lower",enabled:t.checked},{type:"num",enabled:n.checked},{type:"sym",enabled:i.checked}].filter(b=>b.enabled);if(s.disabled=!1,l.length===0){c("Please select at least one option",!0),s.disabled=!0;return}const d=S(p,l);o.value=d;const h=k(d);L(h)},M=e=>{if(Object.values(e).some(o=>!o)){c("One or more DOM elements are missing!",!0),console.error("One or more DOM elements are missing!");return}[e.uppercaseCheckbox,e.lowercaseCheckbox,e.numbersCheckbox,e.symbolsCheckbox].forEach(o=>{o.addEventListener("change",()=>a(e))}),e.lengthInput.addEventListener("input",()=>{x(e.lengthDisplay,e.lengthInput.value),a(e)}),e.generateButton.addEventListener("click",()=>a(e)),e.copyButton.addEventListener("click",async()=>{await g(e.passwordInput.value)})};f();setTimeout(()=>{const e={passwordInput:document.querySelector("#password"),generateButton:document.querySelector("#generate"),copyButton:document.querySelector("#copy"),lengthInput:document.querySelector("#length"),uppercaseCheckbox:document.querySelector("#uppercase"),lowercaseCheckbox:document.querySelector("#lowercase"),numbersCheckbox:document.querySelector("#numbers"),symbolsCheckbox:document.querySelector("#symbols"),lengthDisplay:document.querySelector("#lengthDisplay")};e.lengthDisplay.textContent=e.lengthInput.value,M(e),a(e)},1e3);
