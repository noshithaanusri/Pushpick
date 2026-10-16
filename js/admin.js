/* PurePick admin access: only emails listed here can open the admin panel.
   Change these demo member emails to the members you want to authorize. */
const ADMIN_EMAILS=["admin@purepick.com","manager@purepick.com"];
const categoryImages={
  Fruits:"images/fruits.png",Vegetables:"images/vegetables.png",Dairy:"images/dairy.png",Bakery:"images/bakery.png",
  Snacks:"images/snacks.png",Beverages:"images/beverages.png",Staples:"images/rice.png", "Personal Care":"images/toothpaste.png",Household:"images/dishwash.png"
};
let inventory=JSON.parse(localStorage.getItem("purepickInventory")||"[]");
function currentAdminUser(){return JSON.parse(localStorage.getItem("purepickCurrentUser")||localStorage.getItem("purepickUser")||"null")}
function isAdmin(){const u=currentAdminUser();return !!(u&&u.email&&ADMIN_EMAILS.includes(String(u.email).toLowerCase()))}
function denyAdmin(){document.body.innerHTML=`<main class="auth-page"><section class="auth-card"><a class="brand centered" href="index.html"><span class="brand-mark">P</span><span>Pure<span class="green">Pick</span></span></a><h1>Admin access restricted</h1><p>Only authorized PurePick members can access inventory management.</p><a class="primary-btn full" href="login.html">Sign in</a><a class="back-home" href="index.html">← Back to store</a></section></main>`}
function escapeHtml(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]))}
function safeImg(src,fallback){return src||fallback||"images/product-generic.svg"}
function renderInv(){const box=document.getElementById("inventory"),count=document.getElementById("inventoryCount");if(!box)return;if(count)count.textContent=inventory.length+" custom products";if(!inventory.length){box.innerHTML='<div class="empty">No custom products yet.</div>';return}box.innerHTML=inventory.map((p,i)=>`<div class="inventory-row"><div><b>${escapeHtml(p.name)}</b><small class="muted">${escapeHtml(p.category)}</small></div><span>₹${Number(p.price).toFixed(0)}</span><img src="${safeImg(p.img,categoryImages[p.category])}" onerror="this.onerror=null;this.src='images/product-generic.svg'" alt="${escapeHtml(p.name)}"><button class="delete-btn" onclick="del(${i})">Delete</button></div>`).join("")}
function addProduct(){
  if(!isAdmin()){denyAdmin();return}
  const name=document.getElementById("productName").value.trim(),price=Number(document.getElementById("productPrice").value),category=document.getElementById("productCategory").value,url=document.getElementById("productImage").value.trim(),file=document.getElementById("productImageFile");
  if(!name||!price||price<1){alert("Enter a valid product name and price.");return}
  const finish=img=>{inventory.push({id:Date.now(),name,price,category,img:safeImg(img,categoryImages[category]),packs:[{label:"1 unit",multiplier:1},{label:"Pack of 2",multiplier:2},{label:"Pack of 6",multiplier:6}]});localStorage.setItem("purepickInventory",JSON.stringify(inventory));renderInv();document.getElementById("productName").value="";document.getElementById("productPrice").value="";document.getElementById("productImage").value="";document.getElementById("productImageFile").value="";alert(name+" added successfully. The picture will also appear on the customer Products page.")};
  if(file&&file.files&&file.files[0]){const reader=new FileReader();reader.onload=e=>finish(e.target.result);reader.readAsDataURL(file.files[0])}else finish(url)
}
function del(i){if(!isAdmin()){denyAdmin();return}if(confirm("Remove this product from inventory?")){inventory.splice(i,1);localStorage.setItem("purepickInventory",JSON.stringify(inventory));renderInv()}}
if(isAdmin())renderInv();else denyAdmin();
