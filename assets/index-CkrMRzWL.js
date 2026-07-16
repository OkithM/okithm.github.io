(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{title:`Focus Track - Study Timer`,description:`Built a mobile productivity app to help users manage study time, making focus easier with one-tap tracking and progress charts, by developing the app using Flutter and Dart.`,image:`/projectImg/FocusTrack.webp`,tech:`Flutter • Dart • JSON Data Management`,link:`https://play.google.com/store/apps/details?id=com.okithm.focustrack&hl=en&pli=1`,linkLabel:`View on Play Store`},{title:`Hidden Note`,description:``,image:`/projectImg/HiddenNote.webp`,tech:``,link:`http://hiddennote.app/`,linkLabel:`Visit Website`}],t=`/assets/Background-DPWASn9C.png`,n=document.getElementById(`landingCanvas`),r=n.getContext(`2d`),i=document.getElementById(`aboutMeBtn`);n.width=window.innerWidth,n.height=window.innerHeight,window.addEventListener(`resize`,()=>{n.width=window.innerWidth,n.height=window.innerHeight});var a=new Image;a.src=t;var o=!1,s=`ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`,c=18,l=n.width/c,u=[];for(let e=0;e<l;e++)u[e]=1;function d(){let e=n.width-400,t=n.height/2,i=`"Sakana"`;r.font=`80px ${i}`;let a=r.measureText(`O`).width;r.font=`65px ${i}`;let o=r.measureText(`KITH`).width,s=e+a,c=s+o;r.strokeStyle=`black`,r.lineJoin=`round`,r.font=`80px ${i}`,r.lineWidth=40,r.strokeText(`O`,e,t),r.font=`65px ${i}`,r.lineWidth=25,r.strokeText(`KITH`,s,t),r.font=`80px ${i}`,r.lineWidth=40,r.strokeText(`M`,c,t),r.fillStyle=`#FF0000`,r.font=`80px ${i}`,r.fillText(`O`,e,t),r.font=`65px ${i}`,r.fillText(`KITH`,s,t),r.font=`80px ${i}`,r.fillText(`M`,c,t),r.font=`40px arial`,r.lineWidth=20,r.strokeStyle=`black`,r.strokeText(`Okith Moksha`,e+55,t+40),r.fillText(`Okith Moksha`,e+55,t+40)}setInterval(()=>{r.fillStyle=`rgba(0, 0, 0, 0.05)`,r.fillRect(0,0,n.width,n.height),r.fillStyle=`#FF0000`,r.font=`18px monospace`;for(let e=0;e<u.length;e++){let t=s.charAt(Math.floor(Math.random()*36));r.fillText(t,e*c,u[e]*c),u[e]*c>n.height&&Math.random()>.975&&(u[e]=0,o=!0),u[e]++}if(o){let e=Math.max(n.width/a.width,n.height/a.height),t=a.width*e,o=a.height*e,s=n.width-t;if(n.height-o,r.drawImage(a,s,0,t,o),d(),i){i.style.display=`block`;let e=n.width-400,t=n.height/2;i.style.left=e+150+`px`,i.style.top=t+75+`px`}}},30),window.toAboutMe=function(){document.getElementById(`me`)?.scrollIntoView({behavior:`auto`})};function f(){let t=document.getElementById(`projects-container`);t&&(t.innerHTML=e.map(e=>`
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
    `).join(``),window.lucide&&window.lucide.createIcons())}f();