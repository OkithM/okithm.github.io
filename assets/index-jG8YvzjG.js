(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{title:`Focus Track - Study Timer`,description:`Built a mobile productivity app to help users manage study time, making focus easier with one-tap tracking and progress charts, by developing the app using Flutter and Dart.`,image:`/projectImg/FocusTrack.webp`,tech:`Flutter • Dart • JSON Data Management`,link:`https://play.google.com/store/apps/details?id=com.okithm.focustrack&hl=en&pli=1`,linkLabel:`View on Play Store`},{title:`Hidden Note`,description:``,image:`/projectImg/HiddenNote.webp`,tech:``,link:`http://hiddennote.app/`,linkLabel:`Visit Website`}],t=`/assets/Background-DPWASn9C.png`,n=document.getElementById(`percentage`),r=document.querySelector(`.loader-wrapper`),i=document.getElementById(`loader-bar`),a=0,o=!1,s=setInterval(()=>{a=Math.min(a+(o?3:1),100),n&&(n.textContent=`${Math.floor(a)}%`),i&&(i.style.width=a+`%`),a>=100&&(clearInterval(s),setTimeout(()=>{r&&o&&r.classList.add(`fade-out`)},300))},50);window.addEventListener(`load`,()=>{o=!0});var c=document.getElementById(`landingCanvas`),l=c.getContext(`2d`),u=document.getElementById(`aboutMeBtn`);c.width=window.innerWidth,c.height=window.innerHeight,window.addEventListener(`resize`,()=>{c.width=window.innerWidth,c.height=window.innerHeight});var d=new Image;d.src=t;var f=!1,p=`ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`,m=18,h=c.width/m,g=[];for(let e=0;e<h;e++)g[e]=1;function _(){let e=c.width-400,t=c.height/2,n=`"Sakana"`;l.font=`80px ${n}`;let r=l.measureText(`O`).width;l.font=`65px ${n}`;let i=l.measureText(`KITH`).width,a=e+r,o=a+i;l.strokeStyle=`black`,l.lineJoin=`round`,l.font=`80px ${n}`,l.lineWidth=40,l.strokeText(`O`,e,t),l.font=`65px ${n}`,l.lineWidth=25,l.strokeText(`KITH`,a,t),l.font=`80px ${n}`,l.lineWidth=40,l.strokeText(`M`,o,t),l.fillStyle=`#FF0000`,l.font=`80px ${n}`,l.fillText(`O`,e,t),l.font=`65px ${n}`,l.fillText(`KITH`,a,t),l.font=`80px ${n}`,l.fillText(`M`,o,t),l.font=`40px arial`,l.lineWidth=20,l.strokeStyle=`black`,l.strokeText(`Okith Moksha`,e+55,t+40),l.fillText(`Okith Moksha`,e+55,t+40)}setInterval(()=>{l.fillStyle=`rgba(0, 0, 0, 0.05)`,l.fillRect(0,0,c.width,c.height),l.fillStyle=`#FF0000`,l.font=`18px monospace`;for(let e=0;e<g.length;e++){let t=p.charAt(Math.floor(Math.random()*36));l.fillText(t,e*m,g[e]*m),g[e]*m>c.height&&Math.random()>.975&&(g[e]=0,f=!0),g[e]++}if(f){let e=Math.max(c.width/d.width,c.height/d.height),t=d.width*e,n=d.height*e,r=c.width-t;if(c.height-n,l.drawImage(d,r,0,t,n),_(),u){u.style.display=`block`;let e=c.width-400,t=c.height/2;u.style.left=e+150+`px`,u.style.top=t+75+`px`}}},30),window.toAboutMe=function(){document.getElementById(`me`)?.scrollIntoView({behavior:`auto`})};function v(){let t=document.getElementById(`projects-container`);t&&(t.innerHTML=e.map(e=>`
        <div class="project-item border-2 border-red-500/50 p-4 rounded-lg font-mono flex flex-col md:flex-row gap-4">
          <!-- Image Section -->
          <div
            style="background-image: url('${e.image}'); height: 300px; width: 300px; border-radius: 8px; background-size: cover; background-position: top; flex-shrink: 0;">
          </div>

          <!-- Content Section -->
          <div class="flex flex-col justify-between flex-1">
            <div>
              <div>
                <div class="text-red-500 text-2xl font-mono mb-2">${e.title}</div>
                <div class="text-white/90 text-lg font-mono mb-4">
                  ${e.description}
                </div>
              </div>
              <!-- Tech Stack -->
              <div class="flex flex-col items-start justify-between">
                <div class="text-md text-red-500 font-mono">${e.tech}</div>
              </div>
            </div>
            ${e.link?`
            <a href="${e.link}" target="_blank"
              rel="noopener noreferrer" class="btn-primary flex items-center gap-2 w-fit cursor-pointer">
              ${e.linkLabel||`View`}<i data-lucide="arrow-right" class="h-5"></i>
            </a>
            `:``}
          </div>
        </div>
    `).join(``),window.lucide&&window.lucide.createIcons())}v();