function getCurrentUser(){return JSON.parse(localStorage.getItem("purepickCurrentUser")||localStorage.getItem("purepickUser")||"null")}
function isLoggedIn(){return !!getCurrentUser()}
function requireLogin(){if(isLoggedIn())return true;localStorage.setItem("purepickReturnUrl",location.href);alert("Please sign in before shopping. You can browse products without signing in, but adding items to the cart requires an account.");location.href="login.html";return false}
function getCartCount(){return JSON.parse(localStorage.getItem("purepickCart")||"[]").reduce((s,p)=>s+(p.qty||1),0)}
function updateCommonUI(){document.querySelectorAll("#cartCount").forEach(e=>e.textContent=getCartCount());const u=getCurrentUser();document.querySelectorAll("[data-account-link]").forEach(a=>{if(u){a.href="dashboard.html";a.textContent="👤 My Account";a.classList.add("login-btn")}else{a.href="login.html";a.textContent="Login"}})}
function goSearch(){const el=document.getElementById("globalSearch")||document.getElementById("homeSearch")||document.getElementById("searchInput");const q=el?el.value.trim():"";location.href="products.html"+(q?"?q="+encodeURIComponent(q):"")}
document.addEventListener("DOMContentLoaded",updateCommonUI);
