var j=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)};var r=(n,e,t)=>(j(n,e,"read from private field"),t?t.call(n):e.get(n)),l=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)},d=(n,e,t,a)=>(j(n,e,"write to private field"),a?a.call(n,t):e.set(n,t),t);var C=(n,e,t)=>(j(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var k,L;class Y{constructor({view:e,model:t}){l(this,k,void 0);l(this,L,void 0);d(this,k,e),d(this,L,t)}renderFoods(){const e=r(this,L).getExampleFoods();r(this,k).showFoods(e)}}k=new WeakMap,L=new WeakMap;class Q{getExampleFoods(){return[{name:"Pempek",region:"Palembang",image:"/images/pages-picture/home_page_pempek_pictures.jpg",category:"olahan ikan, makanan khas,gorengan"},{name:"Bebek Betutu",region:"Bali",image:"/images/pages-picture/home_page_bebek_betutu_pictures.jpg",category:"olahan bebek, makanan khas, daging"}]}}var E;class H{constructor(){l(this,E,null)}async render(){return document.body.classList.remove("signin-bg"),document.body.classList.remove("signup-bg"),`
      <section class="container" style="padding-top: 0;">
        <div class="home-hero-section">
          <h1>SELAMAT DATANG DI FOODLENS</h1>
          <p>Platform cerdas berbasis gambar untuk mengenali,mengindetifikasi, dan mengeksplorasi makanan tradisional Indonesia lengkap dengan Asal Daerahnya.</p>
          <div class="home-hero-actions">
            <button class="button-primary" id="go-upload">Coba Sekarang <img src="https://cdn-icons-png.flaticon.com/512/545/545682.png" alt="right arrow" style="width:20px;height:20px;margin-left:8px;vertical-align:middle;"/></button>
          </div>
        </div>
        <div class="home-food-section">
          <h2>Contoh Pengenalan Makanan Mengunakan Teknologi Prediksi</h2>
          <div class="home-food-list" id="home-food-list"></div>
        </div>
      </section>
      <footer class="footer-home">
        <div class="footer-container">
          <div class="footer-brand">
            <div class="footer-brand-logo">
              <img src="/images/Logo-App/food_lens_logo.jpg" alt="FoodLens Logo" />
              <span class="footer-brand-title">FOODLENS</span>
            </div>
            <div class="footer-brand-desc">
              FoodLens adalah platform inovatif yang memanfaatkan teknologi untuk membantu Anda menjelajahi dunia kuliner. Kami berdedikasi untuk memberikan pengalaman pencarian dan penemuan makanan yang cerdas dan memuaskan.
            </div>
            <div class="footer-social">
              <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter"><img src="/images/footer-pictures/twitter.png" alt="Twitter" /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><img src="/images/footer-pictures/facebook.png" alt="Facebook" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><img src="/images/footer-pictures/instagram.png" alt="Instagram" /></a>
              <a href="https://github.com" target="_blank" rel="noopener" aria-label="Github"><img src="/images/footer-pictures/github.png" alt="Github" /></a>
            </div>
          </div>
          <div class="footer-links">
            <div class="footer-links-title">Pages</div>
            <ul class="footer-links-list">
              <li><a href="#/home">Home</a></li>
              <li><a href="#/kategori">Kategori</a></li>
              <li><a href="#/about">Tentang kami</a></li>
              <li><a href="#/blog">Blog</a></li>
            </ul>
          </div>
          <div class="footer-instagram">
            <div class="footer-instagram-title">Follow Kami di Instagram</div>
            <div class="footer-pictures">
              <img src="/images/footer-pictures/makanan1.png" alt="Makanan 1" />
              <img src="/images/footer-pictures/makanan2.png" alt="Makanan 2" />
              <img src="/images/footer-pictures/makanan3.png" alt="Makanan 3" />
              <img src="/images/footer-pictures/makanan4.png" alt="Makanan 4" />
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          &copy; 2025 FoodLens. All rights reserved.
        </div>
      </footer>
    `}async afterRender(){d(this,E,new Y({view:this,model:new Q})),r(this,E).renderFoods(),setTimeout(()=>{const e=document.getElementById("go-upload");e&&(e.onclick=()=>{window.location.hash="/upload"})},0)}showFoods(e){const t=document.getElementById("home-food-list");t&&(t.innerHTML=e.map(a=>`
      <div class="home-food-card">
        <img src="${a.image}" alt="${a.name}">
        <div class="food-info">
          <div>NAMA MAKANAN: <span>${a.name}</span></div>
          <div>ASAL DAERAH: <span>${a.region}</span></div>
          <div>KATEGORI: <span>${a.category}</span></div>
        </div>
      </div>
    `).join(""))}}E=new WeakMap;function X(){return`
    <div class="tentang-cards">
      <div class="tentang-card">
        <img src="/images/icon/book.png" alt="Story" />
        <div>
          <h3>Our Story</h3>
          <p>Singkatnya tentang inspirasi dan awal mula FoodLens, bagaimana kami lahir dari kecintaan pada kuliner dan teknologi untuk memudahkan eksplorasi rasa.</p>
        </div>
      </div>
      <div class="tentang-card">
        <img src="/images/icon/target.png" alt="Mission" />
        <div>
          <h3>Our Mission</h3>
          <p>Menjadi panduan kuliner terpercaya, menghubungkan Anda dengan cita rasa dan kisah di balik setiap hidangan.</p>
        </div>
      </div>
      <div class="tentang-card">
        <img src="/images/icon/currency.png" alt="Values" />
        <div>
          <h3>Our Values</h3>
          <p>Inovasi teknologi, keaslian rasa, dan semangat membangun komunitas kuliner adalah inti dari setiap langkah kami.</p>
        </div>
      </div>
    </div>
  `}function Z(){return`
    <div class="tentang-stats-section">
      <div class="tentang-stats-container">
        <div class="tentang-stats-info">
          <h2>Mengenal FoodLens Lebih Jauh</h2>
          <div class="tentang-stats-list">
            <div class="tentang-stats-item">
              <span class="stats-value">34+</span>
              <div class="stats-label">Jumlah Kota/Provinsi</div>
            </div>
            <div class="tentang-stats-item">
              <span class="stats-value">2000+</span>
              <div class="stats-label">Hidangan Tercatat</div>
            </div>
            <div class="tentang-stats-item">
              <span class="stats-value">65+</span>
              <div class="stats-label">Pengguna Aktif</div>
            </div>
            <div class="tentang-stats-item">
              <span class="stats-value">100%</span>
              <div class="stats-label">Pengguna yg Puas</div>
            </div>
          </div>
        </div>
        <div class="tentang-stats-img">
          <img src="/images/tentang-kami/tentang-kami-reach-pictures.jpg" alt="Mengenal FoodLens" />
        </div>
      </div>
    </div>
  `}function ee(){return`
    <div class="tentang-testimoni-section">
      <h2 class="tentang-testimoni-title">Apa Kata Pengguna Kami</h2>
      <div class="tentang-testimoni-list">
        <div class="tentang-testimoni-card">
          <p class="testimoni-title">“Petualangan Kuliner Jadi Lebih Mudah!”</p>
          <div class="testimoni-desc">Dulu saya sering kesulitan mencari makanan khas daerah atau tempat makan unik. Dengan FoodLens, saya bisa menjelajahi berbagai pilihan dan menemukan permata tersembunyi yang benar-benar otentik.</div>
          <hr class="testimoni-divider" />
          <div class="testimoni-user">
            <img src="/images/tentang-kami/sophia.jpg" alt="Sophia" class="testimoni-img" />
            <div>
              <div class="testimoni-nama">Sophia</div>
              <div class="testimoni-loc">Jakarta, Indonesia</div>
            </div>
          </div>
        </div>
        <div class="tentang-testimoni-card">
          <p class="testimoni-title">“Rekomendasi FoodLens Selalu Tepat!”</p>
          <div class="testimoni-desc">Saya sangat mengandalkan rekomendasi dari FoodLens untuk mencoba hidangan baru. Deskripsi yang jelas dan asal makanan yang informatif. Rasanya tidak pernah mengecewakan, selalu sesuai ekspektasi!</div>
          <hr class="testimoni-divider" />
          <div class="testimoni-user">
            <img src="/images/tentang-kami/budi.jpeg" alt="Budi" class="testimoni-img" />
            <div>
              <div class="testimoni-nama">Budi</div>
              <div class="testimoni-loc">Surabaya, Indonesia</div>
            </div>
          </div>
        </div>
        <div class="tentang-testimoni-card">
          <p class="testimoni-title">“Sumber Inspirasi Kuliner Terbaik!”</p>
          <div class="testimoni-desc">FoodLens bukan hanya tentang mencari makanan, tapi juga tentang belajar dan terinspirasi. Saya jadi lebih mengenal kekayaan kuliner Indonesia dan bahkan mencoba memasak beberapa resep otentik yang saya temukan di sini.</div>
          <hr class="testimoni-divider" />
          <div class="testimoni-user">
            <img src="/images/tentang-kami/aisha.avif" alt="Aisha" class="testimoni-img" />
            <div>
              <div class="testimoni-nama">Aisha</div>
              <div class="testimoni-loc">Bandung, Indonesia</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function $(){return`
    <footer class="tentang-footer">
      <div class="tentang-footer-container">
        <div class="tentang-footer-logo">
          <div class="logo-row">
            <img src="/images/Logo-App/food_lens_logo.jpg" alt="FoodLens Logo" />
            <span>FOODLENS</span>
          </div>
          <div class="desc">FoodLens adalah platform inovatif yang memanfaatkan teknologi untuk membantu Anda menjelajahi dunia kuliner. Kami berdedikasi untuk memberikan pengalaman pencarian dan penemuan makanan yang cerdas dan memuaskan.</div>
          <div class="sosmed-row">
            <img src="/images/footer-pictures/twitter.png" alt="Twitter" />
            <img src="/images/footer-pictures/facebook.png" alt="Facebook" />
            <img src="/images/footer-pictures/instagram.png" alt="Instagram" />
            <img src="/images/footer-pictures/github.png" alt="Github" />
          </div>
        </div>
        <div class="tentang-footer-pages">
          <h4>Pages</h4>
          <ul>
            <li><a href="#/home">Home</a></li>
            <li><a href="#/kategori">Kategori</a></li>
            <li><a href="#/about">Tentang kami</a></li>
            <li><a href="#/blog">Blog</a></li>
          </ul>
        </div>
        <div class="tentang-footer-ig">
          <h4>Follow Kami di Instagram</h4>
          <div class="ig-grid ig-grid-large">
            <img src="/images/footer-pictures/makanan1.png" alt="Makanan 1" />
            <img src="/images/footer-pictures/makanan2.png" alt="Makanan 2" />
            <img src="/images/footer-pictures/makanan3.png" alt="Makanan 3" />
            <img src="/images/footer-pictures/makanan4.png" alt="Makanan 4" />
          </div>
        </div>
      </div>
      <div class="tentang-footer-copyright">
        &copy; 2025 FoodLens. All rights reserved.
      </div>
    </footer>
  `}class te{async render(){return`
      <section class="tentang-section">
        <div class="tentang-hero">
          <h1 class="tentang-hero-title">Menghubungkan Anda dengan Dunia Rasa dan Cerita Kuliner.</h1>
        </div>
        ${X()}
        ${Z()}
        ${ee()}
        <div id="tentang-kami-footer-container"></div>
      </section>
    `}async afterRender(){const e=document.getElementById("tentang-kami-footer-container");e&&(e.innerHTML=$())}}var p,x,S;class ae{constructor({view:e,model:t,authModel:a}){l(this,p,void 0);l(this,x,void 0);l(this,S,void 0);d(this,p,e),d(this,x,t),d(this,S,a)}async getLogin({email:e,password:t}){r(this,p).showSubmitLoadingButton();try{const a=await r(this,x).getLogin({email:e,password:t});if(!a.ok){console.error("getLogin: response:",a),r(this,p).loginFailed(a.message);return}r(this,S).putAccessToken(a.data.accessToken),r(this,p).loginSuccessfully(a.message,a.data)}catch(a){console.error("getLogin: error:",a),r(this,p).loginFailed(a.message)}finally{r(this,p).hideSubmitLoadingButton()}}}p=new WeakMap,x=new WeakMap,S=new WeakMap;function ne(n){const t=n.split("?")[0].split("/");return{resource:t[1]||null,id:t[2]||null}}function ie(n){let e="";return n.resource&&(e=e.concat(`/${n.resource}`)),n.id&&(e=e.concat("/:id")),e||"/"}function se(){return location.hash.replace("#","")||"/"}function G(){const n=se(),e=ne(n);return ie(e)}const D="accessToken";function O(){try{const n=localStorage.getItem(D);return n==="null"||n==="undefined"?null:n}catch(n){return console.error("getAccessToken: error:",n),null}}function oe(n){try{return localStorage.setItem(D,n),!0}catch(e){return console.error("putAccessToken: error:",e),!1}}function U(){try{return localStorage.removeItem(D),!0}catch(n){return console.error("getLogout: error:",n),!1}}const re=["/login","/register"];function w(n){const e=G(),t=!!O();return re.includes(e)&&t?(location.hash="/",null):n}function y(n){return!O()?(location.hash="/login",null):n}function F(){U()}function le(){const n=document.querySelectorAll(".pw_hide"),e=document.querySelector(".form_container"),t=document.querySelector("#signup"),a=document.querySelector("#login");n.forEach(s=>{s.addEventListener("click",()=>{let i=s.previousElementSibling;(!i||i.tagName!=="INPUT")&&(i=s.parentElement.querySelector('input[type="password"], input[type="text"]')),i&&(i.type==="password"?(i.type="text",s.classList.remove("uil-eye-slash"),s.classList.add("uil-eye")):(i.type="password",s.classList.remove("uil-eye"),s.classList.add("uil-eye-slash")))})}),t&&e&&t.addEventListener("click",s=>{s.preventDefault(),e.classList.add("active")}),a&&e&&a.addEventListener("click",s=>{s.preventDefault(),e.classList.remove("active")})}const z=Object.freeze(Object.defineProperty({__proto__:null,checkAuthenticatedRoute:y,checkUnauthenticatedRouteOnly:w,getAccessToken:O,getLogout:F,putAccessToken:oe,removeAccessToken:U,setupPasswordToggleAndFormSwitch:le},Symbol.toStringTag,{value:"Module"})),I="http://localhost:5000/api",_={async getLogin({email:n,password:e}){try{const t=await fetch(`${I}/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:e})}),a=await t.json();return{ok:t.ok,message:a.message,data:a.data}}catch(t){return{ok:!1,message:t.message,data:null}}},async register({email:n,password:e}){try{const t=await fetch(`${I}/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:e})}),a=await t.json();return{ok:t.ok,message:a.message,data:a.data}}catch(t){return{ok:!1,message:t.message,data:null}}},async forgotPassword({email:n}){try{const e=await fetch(`${I}/forgot-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n})}),t=await e.json();return{ok:e.ok,message:t.message,data:t.data}}catch(e){return{ok:!1,message:e.message,data:null}}},async resetPassword({token:n,password:e}){try{const t=await fetch(`${I}/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:n,password:e})}),a=await t.json();return{ok:t.ok,message:a.message,data:a.data}}catch(t){return{ok:!1,message:t.message,data:null}}}};var P,N,J;class de{constructor(){l(this,N);l(this,P,null)}async render(){return document.body.classList.remove("signup-bg"),document.body.classList.add("signin-bg"),`
      <div class="login-brand" style="text-align:center;margin-bottom:18px;">
        <img src="/images/Logo-App/food_lens_logo.jpg" alt="FoodLens Logo" class="food-lens-logo" style="width:56px;height:56px;object-fit:cover;border-radius:12px;" />
        <div class="brand-name" style="font-size:1.5rem;font-weight:700;color:#2196f3;margin-top:8px;">FOODLENS</div>
      </div>
      <div class="wrapper">
        <form id="login-form">
          <h1>Login</h1>
          <div class="input-box">
            <label for="login-email" class="visually-hidden">Email</label>
            <input type="email" id="login-email" placeholder="Email" required />
            <i class="bx bx-envelope"></i>
          </div>
          <div class="input-box">
            <label for="login-password" class="visually-hidden">Password</label>
            <input type="password" id="login-password" placeholder="Password" required />
            <i class="bx bx-lock"></i>
          </div>
          <div class="remember-forgot">
            <label><input type="checkbox" id="remember-me">Remember Me</label>
            <a href="#/forgot-password">Forgot Password?</a>
          </div>
          <div id="submit-button-container">
            <button type="submit" class="btn">Login</button>
          </div>
          <div class="register-link">
            <p>Don't have an account? <a href="#/register">Register Now</a></p>
          </div>
        </form>
      </div>
    `}async afterRender(){document.body.classList.remove("signup-bg"),document.body.classList.add("signin-bg"),d(this,P,new ae({view:this,model:_,authModel:z})),C(this,N,J).call(this),this.initPasswordToggle()}initPasswordToggle(){document.querySelectorAll(".input-group").forEach(e=>{const t=e.querySelector(".pw_hide");t&&t.addEventListener("click",()=>{const a=e.querySelector("input");if(!a)return;const s=a.getAttribute("style");a.type==="password"?(a.type="text",t.src="https://cdn-icons-png.flaticon.com/512/709/709612.png"):(a.type="password",t.src="https://cdn-icons-png.flaticon.com/512/2767/2767146.png"),s&&a.setAttribute("style",s)})})}loginSuccessfully(e){document.body.classList.remove("signin-bg"),window.renderNavbar&&window.renderNavbar(),location.hash="/home"}loginFailed(e){alert(e)}showSubmitLoadingButton(){document.getElementById("submit-button-container").innerHTML=`
      <button class="btn btn-primary" type="submit" disabled>
        <i class="fas fa-spinner loader-button"></i> Sign in
      </button>
    `}hideSubmitLoadingButton(){document.getElementById("submit-button-container").innerHTML=`
      <button class="btn btn-primary" type="submit">Sign in</button>
    `}}P=new WeakMap,N=new WeakSet,J=function(){document.getElementById("login-form").addEventListener("submit",async e=>{e.preventDefault();const t={email:document.getElementById("login-email").value,password:document.getElementById("login-password").value};await r(this,P).getLogin(t)})};var h,B,A;class ce{constructor({view:e,model:t,authModel:a}){l(this,h,void 0);l(this,B,void 0);l(this,A,void 0);d(this,h,e),d(this,B,t),d(this,A,a)}async register({email:e,password:t}){r(this,h).showSubmitLoadingButton();try{const a=await r(this,B).register({email:e,password:t});if(!a.ok){r(this,h).registerFailed(a.message);return}r(this,A).putAccessToken(a.data.accessToken),r(this,h).registerSuccessfully(a.message,a.data)}catch(a){r(this,h).registerFailed(a.message)}finally{r(this,h).hideSubmitLoadingButton()}}}h=new WeakMap,B=new WeakMap,A=new WeakMap;var T;class ge{constructor(){l(this,T,null)}async render(){return document.body.classList.remove("signin-bg"),document.body.classList.add("signup-bg"),`
      <div class="login-brand" style="text-align:center;margin-bottom:18px;">
        <img src="/images/Logo-App/food_lens_logo.jpg" alt="FoodLens Logo" class="food-lens-logo" style="width:56px;height:56px;object-fit:cover;border-radius:12px;" />
        <div class="brand-name" style="font-size:1.5rem;font-weight:700;color:#2196f3;margin-top:8px;">FOODLENS</div>
      </div>
      <div class="wrapper">
        <form id="register-form">
          <h1>Register</h1>
          <div class="input-box">
            <label for="register-email" class="visually-hidden">Email</label>
            <input type="email" id="register-email" placeholder="Email" required />
            <i class="bx bx-envelope"></i>
          </div>
          <div class="input-box">
            <label for="register-password" class="visually-hidden">Password</label>
            <input type="password" id="register-password" placeholder="Password" required />
            <i class="bx bx-lock"></i>
          </div>
          <div class="input-box">
            <label for="register-confirm-password" class="visually-hidden">Confirm Password</label>
            <input type="password" id="register-confirm-password" placeholder="Confirm Password" required />
            <i class="bx bx-lock"></i>
          </div>
          <div id="register-error" class="register-error" style="display: none; color: red;"></div>
          <div id="submit-button-container">
            <button type="submit" class="btn">Register</button>
          </div>
          <div class="register-link">
            <p>Already have an account? <a href="#/login">Login</a></p>
          </div>
        </form>
      </div>
    `}async afterRender(){document.body.classList.remove("signin-bg"),document.body.classList.add("signup-bg"),d(this,T,new ce({view:this,model:_,authModel:z})),document.getElementById("register-form").addEventListener("submit",async e=>{var o,g,c;e.preventDefault();const t=(o=document.getElementById("register-email"))==null?void 0:o.value,a=(g=document.getElementById("register-password"))==null?void 0:g.value,s=(c=document.getElementById("register-confirm-password"))==null?void 0:c.value,i=document.getElementById("register-error");if(!t||!a||!s||!i){console.error("One or more elements are missing in the DOM.");return}if(a!==s){i.textContent="Passwords do not match!",i.style.display="block";return}i.style.display="none",await r(this,T).register({email:t,password:a})}),this.initPasswordToggle()}initPasswordToggle(){document.querySelectorAll(".input-group").forEach(e=>{const t=e.querySelector(".pw_hide");t&&t.addEventListener("click",()=>{const a=e.querySelector("input");a&&(a.type==="password"?(a.type="text",t.src="https://cdn-icons-png.flaticon.com/512/709/709612.png"):(a.type="password",t.src="https://cdn-icons-png.flaticon.com/512/2767/2767146.png"))})})}showSubmitLoadingButton(){document.getElementById("submit-button-container").innerHTML=`
      <button class="btn btn-primary" type="submit" disabled>
        <i class="fas fa-spinner loader-button"></i> Signup Now
      </button>
    `}hideSubmitLoadingButton(){document.getElementById("submit-button-container").innerHTML=`
      <button class="btn btn-primary" type="submit">Signup Now</button>
    `}showNotification(e){window.Notification&&(Notification.permission==="granted"?new Notification(e||"Registrasi berhasil!"):Notification.permission!=="denied"&&Notification.requestPermission().then(t=>{t==="granted"&&new Notification(e||"Registrasi berhasil!")}))}registerSuccessfully(e){document.body.classList.remove("signup-bg"),this.showNotification(e||"Registrasi berhasil!"),window.renderNavbar&&window.renderNavbar(),location.hash="/home"}registerFailed(e){const t=document.getElementById("register-error");t.textContent=e,t.style.display="block"}}T=new WeakMap;class me{async render(){return document.body.classList.remove("signup-bg"),document.body.classList.add("signin-bg"),`
      <div class="login-brand" style="text-align:center;margin-bottom:18px;">
        <img src="/images/Logo-App/food_lens_logo.jpg" alt="FoodLens Logo" class="food-lens-logo" style="width:56px;height:56px;object-fit:cover;border-radius:12px;" />
        <div class="brand-name" style="font-size:1.5rem;font-weight:700;color:#2196f3;margin-top:8px;">FOODLENS</div>
      </div>
      <div class="wrapper">
        <form id="forgot-password-form">
          <h1>Forgot Password</h1>
          <div class="input-box">
            <label for="forgot-email-input" class="visually-hidden">Email</label>
            <input type="email" id="forgot-email-input" required placeholder="Enter your email" />
            <i class="bx bx-envelope"></i>
          </div>
          <div id="forgot-error" class="login-error"></div>
          <div id="submit-button-container">
            <button class="btn" type="submit">Send Reset Link</button>
          </div>
          <div class="register-link">
            <p>Remembered? <a href="#/login">Login</a></p>
          </div>
        </form>
      </div>
    `}async afterRender(){document.body.classList.remove("signup-bg"),document.body.classList.add("signin-bg"),document.getElementById("forgot-password-form").addEventListener("submit",async e=>{e.preventDefault();const t=document.getElementById("forgot-email-input").value,a=document.getElementById("forgot-error");a.style.display="none",this.showSubmitLoadingButton();const s=await _.forgotPassword({email:t});this.hideSubmitLoadingButton(),s.ok?(a.textContent="If this email is registered, a reset link has been sent.",a.style.color="#3b82f6"):(a.textContent=s.message||"Failed to send reset link.",a.style.color="#e74c3c"),a.style.display="block"})}showSubmitLoadingButton(){document.getElementById("submit-button-container").innerHTML=`
      <button class="btn btn-primary" type="submit" disabled>
        <i class="fas fa-spinner loader-button"></i> Sending...
      </button>
    `}hideSubmitLoadingButton(){document.getElementById("submit-button-container").innerHTML=`
      <button class="btn btn-primary" type="submit">Send Reset Link</button>
    `}}class ue{async render(){return document.body.classList.remove("signup-bg"),document.body.classList.add("signin-bg"),`
      <div class="login-brand" style="text-align:center;margin-bottom:18px;">
        <img src="/images/Logo-App/food_lens_logo.jpg" alt="FoodLens Logo" class="food-lens-logo" style="width:56px;height:56px;object-fit:cover;border-radius:12px;" />
        <div class="brand-name" style="font-size:1.5rem;font-weight:700;color:#2196f3;margin-top:8px;">FOODLENS</div>
      </div>
      <div class="wrapper">
        <form id="reset-password-form">
          <h1>Reset Password</h1>
          <div class="input-box">
            <label for="reset-password" class="visually-hidden">New password</label>
            <input type="password" id="reset-password" required placeholder="New password" />
            <i class="bx bx-lock"></i>
          </div>
          <div class="input-box">
            <label for="reset-confirm-password" class="visually-hidden">Confirm new password</label>
            <input type="password" id="reset-confirm-password" required placeholder="Confirm new password" />
            <i class="bx bx-lock"></i>
          </div>
          <div id="reset-error" class="login-error"></div>
          <div id="submit-button-container">
            <button class="btn" type="submit">Reset Password</button>
          </div>
          <div class="register-link">
            <p>Remembered? <a href="#/login">Login</a></p>
          </div>
        </form>
      </div>
    `}async afterRender(){document.body.classList.remove("signup-bg"),document.body.classList.add("signin-bg");const t=new URLSearchParams(window.location.hash.split("?")[1]).get("token"),a=document.getElementById("reset-error"),s=document.querySelector("#submit-button-container button");if(!t){a.textContent="Invalid or missing token. Please use the reset link from your email.",a.style.display="block",a.style.color="#e74c3c",s&&(s.disabled=!0);return}document.getElementById("reset-password-form").addEventListener("submit",async i=>{i.preventDefault();const o=document.getElementById("reset-password").value,g=document.getElementById("reset-confirm-password").value;if(a.style.display="none",o!==g){a.textContent="Passwords do not match!",a.style.display="block",a.style.color="#e74c3c";return}this.showSubmitLoadingButton();const c=await _.resetPassword({token:t,password:o});this.hideSubmitLoadingButton(),c.ok?(a.textContent="Password reset successful. Please login.",a.style.display="block",a.style.color="#3b82f6",setTimeout(()=>{location.hash="/login"},2e3)):(a.textContent=c.message||"Failed to reset password.",a.style.display="block",a.style.color="#e74c3c")})}showSubmitLoadingButton(){document.getElementById("submit-button-container").innerHTML=`
      <button class="btn btn-primary" type="submit" disabled>
        <i class="fas fa-spinner loader-button"></i> Resetting...
      </button>
    `}hideSubmitLoadingButton(){document.getElementById("submit-button-container").innerHTML=`
      <button class="btn btn-primary" type="submit">Reset Password</button>
    `}}const pe="modulepreload",he=function(n){return"/"+n},q={},be=function(e,t,a){if(!t||t.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(t.map(i=>{if(i=he(i),i in q)return;q[i]=!0;const o=i.endsWith(".css"),g=o?'[rel="stylesheet"]':"";if(!!a)for(let b=s.length-1;b>=0;b--){const v=s[b];if(v.href===i&&(!o||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${g}`))return;const m=document.createElement("link");if(m.rel=o?"stylesheet":pe,o||(m.as="script",m.crossOrigin=""),m.href=i,document.head.appendChild(m),o)return new Promise((b,v)=>{m.addEventListener("load",b),m.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};class ve{async render(){return`
      <section class="upload-section">
        <h1>Unggah Foto</h1>
        <div id="permissionPrompt" style="border: 1px solid #ccc; padding: 10px; display: none;">
          <p>Aplikasi membutuhkan izin untuk mengakses kamera Anda.</p>
          <button id="allowCamera">Izinkan Kamera</button>
        </div>
        <select id="cameraMode">
          <option value="user">Kamera Depan</option>
          <option value="environment">Kamera Belakang</option>
        </select>
        <button id="startCamera">Buka Kamera</button>
        <br /><br />
        <video id="video" autoplay playsinline width="300" style="display: none;"></video>
        <button id="capture" style="display: none;">Ambil Gambar</button>
        <br /><br />
        <input type="file" id="fileInput" accept="image/*" />
        <div id="drop-area" style="border:2px dashed #aaa;padding:24px;text-align:center;margin:16px 0;cursor:pointer;">Drag & Drop gambar di sini</div>
        <br />
        <canvas id="canvas" width="300" height="300" style="display: none;"></canvas>
        <img id="preview" src="" width="300" style="display:none;" />
        <br />
        <button id="analyzeBtn" style="display:none;margin-top:8px;">Analize Picture</button>
        <div id="prediction-result" style="margin-top:16px;font-weight:bold;"></div>
      </section>
    `}async afterRender(){const e=await be(()=>import("./upload-page-presenter-5654bf3b.js"),[]);typeof e.default=="function"&&e.default()}}class fe{async fetchKategoriList(){return(await(await fetch("http://localhost:5000/api/kategori")).json()).data}async fetchMakananByKategori(e){return(await(await fetch(`http://localhost:5000/api/makanan?kategori_id=${e}`)).json()).data}async fetchSemuaMakanan(){return(await(await fetch("http://localhost:5000/api/makanan")).json()).data}}class ye{constructor(e){this.root=e}renderSkeleton(){this.root.innerHTML=`
      <div class="kategori-section">
        <h1 class="kategori-title">KATEGORI MAKANAN</h1>
        <p class="kategori-subtitle">Jelajahi pilihan hidangan dan minuman lengkap, dari sarapan hingga makanan penutup.</p>
        <div class="kategori-filter-row" id="kategori-filter-row"></div>
        <div class="kategori-makanan-grid" id="kategori-makanan-grid"></div>
      </div>
      <div id="kategori-footer"></div>
    `}renderKategoriFilter(e,t){const a=this.root.querySelector("#kategori-filter-row");a.innerHTML="";const s=document.createElement("button");s.textContent="Semua",s.className="kategori-filter-btn active",s.onclick=()=>t(null,s),a.appendChild(s),e.forEach(i=>{if(i.nama_kategori.toLowerCase().includes("minuman"))return;const o=document.createElement("button");o.textContent=i.nama_kategori,o.className="kategori-filter-btn",o.onclick=()=>t(i.id,o),a.appendChild(o)})}setActiveFilterButton(e){this.root.querySelectorAll(".kategori-filter-btn").forEach(t=>t.classList.remove("active")),e.classList.add("active")}renderMakananGrid(e){const t=this.root.querySelector("#kategori-makanan-grid");if(!e.length){t.innerHTML='<div style="text-align:center;padding:32px;">Tidak ada makanan ditemukan.</div>';return}t.innerHTML="",e.forEach(a=>{const s=document.createElement("div");s.className="kategori-makanan-card";let i="/images/gambar-kategori-makanan/"+(a.gambar?a.gambar:"");a.gambar||(i="/images/icon/menu.png"),s.innerHTML=`
        <img src="${i}" alt="${a.nama_makanan}">
        <h3>${a.nama_makanan}</h3>
        ${a.lokasi?`<div class="kategori-makanan-lokasi">${a.lokasi}</div>`:""}
        ${a.deskripsi?`<p>${a.deskripsi}</p>`:""}
      `,t.appendChild(s)})}renderFooter(e){this.root.querySelector("#kategori-footer").innerHTML=e}}class we{constructor(e){this.model=new fe,this.view=new ye(e)}async init(){this.view.renderSkeleton();const e=await this.model.fetchKategoriList();this.view.renderKategoriFilter(e,this.handleFilterClick.bind(this)),await this.showAllMakanan(),this.view.renderFooter($())}async handleFilterClick(e,t){if(this.view.setActiveFilterButton(t),e){const a=await this.model.fetchMakananByKategori(e);this.view.renderMakananGrid(a)}else await this.showAllMakanan()}async showAllMakanan(){const e=await this.model.fetchSemuaMakanan();this.view.renderMakananGrid(e)}}async function ke(){window.renderNavbar&&window.renderNavbar();const n=document.getElementById("main-content");if(!n)return;n.innerHTML="",await new we(n).init()}const Le={async render(){return await ke(),""},async afterRender(){}},Ee={"/login":()=>w(new de),"/register":()=>w(new ge),"/forgot-password":()=>w(new me),"/reset-password":()=>w(new ue),"/home":()=>y(new H),"/about":()=>y(new te),"/upload":()=>y(new ve),"/kategori":()=>y(Le),"/":()=>y(new H)};var M,f,u,R,V;class xe{constructor({navigationDrawer:e,drawerButton:t,content:a}){l(this,R);l(this,M,null);l(this,f,null);l(this,u,null);d(this,M,a),d(this,f,t),d(this,u,e),r(this,f)&&r(this,u)&&C(this,R,V).call(this)}async renderPage(){const e=G();let t=Ee[e];if(typeof t=="function"&&(t=t()),!t)return;const a=await t.render();a!=null&&a!==""&&(r(this,M).innerHTML=a),await t.afterRender()}}M=new WeakMap,f=new WeakMap,u=new WeakMap,R=new WeakSet,V=function(){r(this,f).addEventListener("click",()=>{r(this,u).classList.toggle("open")}),document.body.addEventListener("click",e=>{!r(this,u).contains(e.target)&&!r(this,f).contains(e.target)&&r(this,u).classList.remove("open"),r(this,u).querySelectorAll("a").forEach(t=>{t.contains(e.target)&&r(this,u).classList.remove("open")})})};document.addEventListener("DOMContentLoaded",async()=>{const n=new xe({content:document.querySelector("#main-content"),drawerButton:null,navigationDrawer:null});function e(){return location.hash.replace("#","").split("?")[0]}function t(){const i=document.getElementById("navbar-root");if(!i)return;const o=e();if(O()&&o!=="/login"&&o!=="/register"){i.innerHTML=`
      <header>
        <div class="main-header container">
          <div class="brand-group">
            <img src="/images/Logo-App/food_lens_logo.jpg" alt="FoodLens Logo" class="food-lens-logo" />
            <a class="brand-name" href="#/">FOODLENS</a>
          </div>
          <button id="drawer-button" class="drawer-button" aria-label="Menu">☰</button>
          <nav id="navbar-desktop" class="navbar-desktop">
            <ul class="nav-list-desktop">
              <li><a href="#/home"><img src="/images/icon/home.png" alt="Home" style="width:20px;height:20px;margin-right:8px;vertical-align:middle;"/>HOME</a></li>
              <li><a href="#/kategori"><img src="/images/icon/menu.png" alt="Kategori" style="width:20px;height:20px;margin-right:8px;vertical-align:middle;"/>KATEGORI</a></li>
              <li><a href="#/about"><img src="/images/icon/about.png" alt="Tentang Kami" style="width:20px;height:20px;margin-right:8px;vertical-align:middle;"/>TENTANG KAMI</a></li>
              <li><button class="button logout-desktop" id="logout-btn-desktop"><img src="https://cdn-icons-png.flaticon.com/512/4400/4400629.png" alt="Logout" style="width:18px;height:18px;vertical-align:middle;margin-right:6px;">Logout</button></li>
            </ul>
          </nav>
          <nav id="navigation-drawer" class="navigation-drawer">
            <ul id="nav-list" class="nav-list">
              <li><a href="#/home"><img src="/images/icon/home.png" alt="Home" style="width:20px;height:20px;margin-right:8px;vertical-align:middle;"/>HOME</a></li>
              <li><a href="#/kategori"><img src="/images/icon/menu.png" alt="Kategori" style="width:20px;height:20px;margin-right:8px;vertical-align:middle;"/>KATEGORI</a></li>
              <li><a href="#/about"><img src="/images/icon/about.png" alt="Tentang Kami" style="width:20px;height:20px;margin-right:8px;vertical-align:middle;"/>TENTANG KAMI</a></li>
              <li><button class="button logout-mobile" id="logout-btn-mobile"><img src="https://cdn-icons-png.flaticon.com/512/4400/4400629.png" alt="Logout" style="width:18px;height:18px;vertical-align:middle;margin-right:6px;">Logout</button></li>
            </ul>
          </nav>
        </div>
      </header>
      `;const g=document.getElementById("drawer-button"),c=document.getElementById("navigation-drawer");g&&c&&(g.addEventListener("click",()=>{c.classList.toggle("open")}),document.body.addEventListener("click",K=>{!c.contains(K.target)&&!g.contains(K.target)&&c.classList.remove("open"),c.querySelectorAll("a").forEach(W=>{W.contains(K.target)&&c.classList.remove("open")})}));const m=document.getElementById("logout-btn");m&&m.addEventListener("click",()=>{F(),location.hash="/login",t()});const b=document.getElementById("logout-btn-desktop");b&&b.addEventListener("click",()=>{F(),location.hash="/login",t()});const v=document.getElementById("logout-btn-mobile");v&&v.addEventListener("click",()=>{F(),location.hash="/login",t()})}else i.innerHTML=""}function a(){const i=e(),o=document.body;o.className="",i==="/login"?o.classList.add("login-page"):i==="/register"?o.classList.add("register-page"):i==="/forgot-password"?o.classList.add("forgot-password-page"):i==="/reset-password"?o.classList.add("reset-password-page"):o.classList.add("home-page")}window.renderNavbar=t;async function s(){document.startViewTransition?document.startViewTransition(async()=>{a(),await n.renderPage(),t()}):(a(),await n.renderPage(),t())}window.addEventListener("hashchange",s),await s()});
