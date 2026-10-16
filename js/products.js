const baseProducts=[
{id:1,name:"Fresh Apples",category:"Fruits",price:180,packs:[{label:"500 g",multiplier:0.5},{label:"1 kg",multiplier:1},{label:"2 kg",multiplier:2}],img:"images/apples.png"},
{id:2,name:"Bananas",category:"Fruits",price:60,packs:[{label:"500 g",multiplier:0.5},{label:"1 kg",multiplier:1},{label:"2 kg",multiplier:2}],img:"images/bananas.png"},
{id:3,name:"Oranges",category:"Fruits",price:100,packs:[{label:"500 g",multiplier:0.5},{label:"1 kg",multiplier:1},{label:"2 kg",multiplier:2}],img:"images/oranges.png"},
{id:4,name:"Grapes",category:"Fruits",price:120,packs:[{label:"250 g",multiplier:0.25},{label:"500 g",multiplier:0.5},{label:"1 kg",multiplier:1}],img:"images/grapes.png"},
{id:5,name:"Carrots",category:"Vegetables",price:50,packs:[{label:"500 g",multiplier:0.5},{label:"1 kg",multiplier:1},{label:"2 kg",multiplier:2}],img:"images/carrots.png"},
{id:6,name:"Broccoli",category:"Vegetables",price:80,packs:[{label:"1 piece",multiplier:1},{label:"2 pieces",multiplier:2},{label:"4 pieces",multiplier:4}],img:"images/broccoli.png"},
{id:7,name:"Tomatoes",category:"Vegetables",price:40,packs:[{label:"500 g",multiplier:0.5},{label:"1 kg",multiplier:1},{label:"2 kg",multiplier:2}],img:"images/tomatoes.png"},
{id:8,name:"Potatoes",category:"Vegetables",price:35,packs:[{label:"500 g",multiplier:0.5},{label:"1 kg",multiplier:1},{label:"2 kg",multiplier:2}],img:"images/potatoes.png"},
{id:9,name:"Fresh Milk",category:"Dairy",price:60,packs:[{label:"250 ml",multiplier:0.25},{label:"500 ml",multiplier:0.5},{label:"1 litre",multiplier:1},{label:"2 litres",multiplier:2}],img:"images/milk.png"},
{id:10,name:"Curd",category:"Dairy",price:70,packs:[{label:"200 g",multiplier:0.2},{label:"500 g",multiplier:0.5},{label:"1 kg",multiplier:1}],img:"images/curd.png"},
{id:11,name:"Cheese",category:"Dairy",price:150,packs:[{label:"200 g",multiplier:1},{label:"500 g",multiplier:2.25},{label:"1 kg",multiplier:4}],img:"images/cheese.png"},
{id:12,name:"Butter",category:"Dairy",price:58,packs:[{label:"100 g",multiplier:1},{label:"200 g",multiplier:2},{label:"500 g",multiplier:5}],img:"images/butter.png"},
{id:13,name:"Whole Wheat Bread",category:"Bakery",price:45,packs:[{label:"1 pack",multiplier:1},{label:"2 packs",multiplier:2},{label:"4 packs",multiplier:4}],img:"images/bread.png"},
{id:14,name:"Cookies",category:"Snacks",price:80,packs:[{label:"1 pack",multiplier:1},{label:"2 packs",multiplier:2},{label:"6 packs",multiplier:6}],img:"images/cookies.png"},
{id:15,name:"Potato Chips",category:"Snacks",price:50,packs:[{label:"1 pack",multiplier:1},{label:"2 packs",multiplier:2},{label:"6 packs",multiplier:6}],img:"images/chips.png"},
{id:16,name:"Milk Chocolate",category:"Snacks",price:50,packs:[{label:"1 bar",multiplier:1},{label:"Pack of 3",multiplier:3},{label:"Pack of 6",multiplier:6}],img:"images/chocolate.png"},
{id:17,name:"Biscuits",category:"Snacks",price:35,packs:[{label:"1 pack",multiplier:1},{label:"Pack of 3",multiplier:3},{label:"Pack of 6",multiplier:6}],img:"images/biscuits.png"},
{id:18,name:"Orange Juice",category:"Beverages",price:110,packs:[{label:"250 ml",multiplier:0.25},{label:"500 ml",multiplier:0.5},{label:"1 litre",multiplier:1},{label:"2 litres",multiplier:2}],img:"images/orange-juice.png"},
{id:19,name:"Mango Juice",category:"Beverages",price:120,packs:[{label:"250 ml",multiplier:0.25},{label:"500 ml",multiplier:0.5},{label:"1 litre",multiplier:1},{label:"2 litres",multiplier:2}],img:"images/mango-juice.png"},
{id:20,name:"Apple Juice",category:"Beverages",price:130,packs:[{label:"250 ml",multiplier:0.25},{label:"500 ml",multiplier:0.5},{label:"1 litre",multiplier:1}],img:"images/apple-juice.png"},
{id:21,name:"Mineral Water",category:"Beverages",price:20,packs:[{label:"500 ml",multiplier:1},{label:"1 litre",multiplier:2},{label:"2 litres",multiplier:4}],img:"images/water.png"},
{id:22,name:"Basmati Rice",category:"Staples",price:120,packs:[{label:"1 kg",multiplier:1},{label:"5 kg",multiplier:5},{label:"10 kg",multiplier:10}],img:"images/rice.png"},
{id:23,name:"Wheat Flour",category:"Staples",price:55,packs:[{label:"1 kg",multiplier:1},{label:"5 kg",multiplier:5},{label:"10 kg",multiplier:10}],img:"images/flour.png"},
{id:24,name:"Toor Dal",category:"Staples",price:170,packs:[{label:"500 g",multiplier:0.5},{label:"1 kg",multiplier:1},{label:"2 kg",multiplier:2}],img:"images/dal.png"},
{id:25,name:"Sunflower Oil",category:"Staples",price:160,packs:[{label:"500 ml",multiplier:0.5},{label:"1 litre",multiplier:1},{label:"2 litres",multiplier:2}],img:"images/oil.png"},
{id:26,name:"Tata Salt",category:"Staples",price:28,packs:[{label:"1 kg",multiplier:1},{label:"2 kg",multiplier:2},{label:"5 kg",multiplier:5}],img:"images/salt.png"},
{id:27,name:"Colgate Toothpaste",category:"Personal Care",price:95,packs:[{label:"100 g",multiplier:1},{label:"2 tubes",multiplier:2},{label:"3 tubes",multiplier:3}],img:"images/toothpaste.png"},
{id:28,name:"Dishwash Liquid",category:"Household",price:110,packs:[{label:"500 ml",multiplier:1},{label:"1 litre",multiplier:2},{label:"2 litres",multiplier:4}],img:"images/dishwash.png"}
];
function defaultPacks(p){return p.packs||[{label:"1 unit",multiplier:1},{label:"Pack of 2",multiplier:2},{label:"Pack of 6",multiplier:6}]}
function getInventory(){return JSON.parse(localStorage.getItem("purepickInventory")||"[]").map((p,i)=>({...p,id:p.id||100000+i,img:p.img||"images/product-generic.png",packs:defaultPacks(p)}))}
function getAllProducts(){return baseProducts.concat(getInventory())}
function getCart(){return JSON.parse(localStorage.getItem("purepickCart")||"[]")}
function saveCart(c){localStorage.setItem("purepickCart",JSON.stringify(c));updateCount()}
function updateCount(){document.querySelectorAll("#cartCount").forEach(e=>e.textContent=getCart().reduce((s,p)=>s+(p.qty||1),0))}
function selectedPack(id){const el=document.getElementById("pack-"+id);return el?Number(el.value):0}
function selectedQty(id){const el=document.getElementById("qty-"+id);return Math.max(1,Number(el.value)||1)}
function changeQty(id,delta){const el=document.getElementById("qty-"+id);if(!el)return;el.value=Math.min(99,Math.max(1,(Number(el.value)||1)+delta))}
function updateCardPrice(id){const p=getAllProducts().find(x=>x.id===id),sel=selectedPack(id);if(!p||!p.packs[sel])return;const price=Math.round(p.price*p.packs[sel].multiplier);const el=document.getElementById("unit-price-"+id);if(el)el.textContent="₹"+price}
function addToCart(id){if(typeof requireLogin==="function"&&!requireLogin())return;const p=getAllProducts().find(x=>x.id===id);if(!p)return;const packIndex=selectedPack(id),pack=p.packs[packIndex]||p.packs[0],qty=selectedQty(id),unitPrice=Math.round(p.price*pack.multiplier),key=id+"-"+pack.label;const c=getCart();const old=c.find(x=>x.key===key);if(old)old.qty=(old.qty||1)+qty;else c.push({...p,packLabel:pack.label,unitPrice,price:unitPrice,qty,key});saveCart(c);alert(qty+" × "+p.name+" ("+pack.label+") added to cart!")}
function escapeHtml(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]))}
function viewProductImage(id){const p=getAllProducts().find(x=>x.id===id);if(!p)return;let modal=document.getElementById("pictureModal");if(!modal){modal=document.createElement("div");modal.id="pictureModal";modal.className="picture-modal";modal.innerHTML='<div class="picture-modal-backdrop" onclick="closeProductImage()"></div><div class="picture-modal-card"><button class="picture-close" onclick="closeProductImage()" aria-label="Close">×</button><img id="pictureModalImg" alt=""><h2 id="pictureModalTitle"></h2><p id="pictureModalCategory"></p></div>';document.body.appendChild(modal)}document.getElementById("pictureModalImg").src=p.img||"images/product-generic.png";document.getElementById("pictureModalImg").onerror=()=>{document.getElementById("pictureModalImg").src="images/product-generic.png"};document.getElementById("pictureModalImg").alt=p.name;document.getElementById("pictureModalTitle").textContent=p.name;document.getElementById("pictureModalCategory").textContent=p.category;modal.classList.add("open")}
function closeProductImage(){const modal=document.getElementById("pictureModal");if(modal)modal.classList.remove("open")}
function card(p){
  const packs=defaultPacks(p), img=p.img||"images/product-generic.png";
  return `<article class="product-card">
    <div class="product-image">
      <img src="${escapeHtml(img)}" alt="${escapeHtml(p.name)}" loading="lazy" onerror="this.onerror=null;this.src='images/product-generic.png'">
    </div>
    <div class="product-info">
      <span class="tag">${escapeHtml(p.category)}</span>
      <h3>${escapeHtml(p.name)}</h3>
      <button type="button" class="view-picture-btn" onclick="viewProductImage(${p.id})">View picture</button>
      <label class="option-label">Pack / size</label>
      <select class="pack-select" id="pack-${p.id}" onchange="updateCardPrice(${p.id})">${packs.map((x,i)=>`<option value="${i}">${escapeHtml(x.label)}</option>`).join("")}</select>
      <div class="product-buy-row">
        <div class="qty-control"><button type="button" onclick="changeQty(${p.id},-1)">−</button><input id="qty-${p.id}" type="number" min="1" max="99" value="1"><button type="button" onclick="changeQty(${p.id},1)">+</button></div>
        <span class="price" id="unit-price-${p.id}">₹${Math.round(p.price*packs[0].multiplier)}</span>
      </div>
      <button type="button" class="add-btn full-add" onclick="addToCart(${p.id})">+ Add to cart</button>
    </div>
  </article>`
}
function render(){const q=(document.getElementById("searchInput").value||"").toLowerCase();const cat=document.getElementById("categoryFilter").value;const list=getAllProducts().filter(p=>(!q||p.name.toLowerCase().includes(q)||p.category.toLowerCase().includes(q))&&(cat==="all"||p.category===cat));document.getElementById("productGrid").innerHTML=list.length?list.map(card).join(""):`<div class="empty" style="grid-column:1/-1">No products found.</div>`}
const params=new URLSearchParams(location.search);const initialCat=params.get("cat");const initialQ=params.get("q");if(initialCat)document.getElementById("categoryFilter").value=initialCat;if(initialQ)document.getElementById("searchInput").value=initialQ;document.getElementById("searchInput").addEventListener("input",render);document.getElementById("categoryFilter").addEventListener("change",render);render();updateCount();
