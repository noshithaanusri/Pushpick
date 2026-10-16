if(typeof isLoggedIn==="function"&&!isLoggedIn()){localStorage.setItem("purepickReturnUrl",location.href);location.href="login.html"}

const box=document.getElementById("ordersContainer");

function getOrders(){return JSON.parse(localStorage.getItem("purepickOrders")||"[]")}
function saveOrders(o){localStorage.setItem("purepickOrders",JSON.stringify(o))}
function cancelOrder(id){
  const orders=getOrders();
  const index=orders.findIndex(o=>o.id===id);
  if(index<0)return;
  if(orders[index].status==="Cancelled")return;
  if(!confirm("Are you sure you want to cancel this order?"))return;
  orders[index].status="Cancelled";
  orders[index].cancelledAt=new Date().toLocaleString();
  saveOrders(orders);
  renderOrders();
}
function toggleMap(id){
  const el=document.getElementById("map-"+id);
  if(el) el.classList.toggle("show");
}
function mapUrl(a){
  const address=[a.line,a.city,a.pin,a.state,a.landmark].filter(Boolean).join(", ");
  return "https://www.google.com/maps?q="+encodeURIComponent(address)+"&output=embed";
}
function renderOrders(){
  const orders=getOrders();
  if(!orders.length){
    box.innerHTML='<div class="empty"><h2>No orders yet</h2><p>Your placed orders will appear here.</p><br><a class="primary-btn" href="products.html">Start shopping</a></div>';
    return;
  }
  box.innerHTML="";
  orders.slice().reverse().forEach(o=>{
    const d=document.createElement("article");
    d.className="order-card";
    const cancelled=o.status==="Cancelled";
    const a=o.address||{};
    const safeId=String(o.id).replace(/[^a-zA-Z0-9_-]/g,"");
    d.innerHTML=`
      <div class="order-head">
        <div><span class="eyebrow">ORDER</span><h2>#${o.id}</h2><small>Placed ${o.placedAt||""}</small></div>
        <span class="status ${cancelled?"cancelled":""}">${o.status}</span>
      </div>
      <div class="order-items">${o.items.map(i=>`<p>${i.name} — ${i.packLabel||'1 unit'} × ${i.qty||1} — ₹${(i.price*(i.qty||1)).toFixed(0)}</p>`).join("")}</div>
      <div class="order-details">
        <div><b>Total</b><span>₹${o.total}</span></div>
        <div><b>Delivery</b><span>${o.date} • ${o.time}</span></div>
        <div><b>Deliver to</b><span>${a.name||"Customer"}, ${a.phone||""}<br>${a.line||""}, ${a.city||""} - ${a.pin||""}, ${a.state||""}${a.landmark?`<br>Landmark: ${a.landmark}`:""}</span></div>
      </div>
      <div class="order-map" id="map-${safeId}">
        <div class="map-title"><strong>📍 Delivery location</strong><span>Based on your entered address</span></div>
        <iframe loading="lazy" src="${mapUrl(a)}" title="Map showing delivery location for order ${o.id}" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <a class="map-link" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent([a.line,a.city,a.pin,a.state,a.landmark].filter(Boolean).join(", "))}" target="_blank" rel="noopener">Open in Google Maps ↗</a>
      </div>
      <div class="order-actions">
        ${cancelled
          ? `<button class="secondary-btn" disabled>Order cancelled</button>`
          : `<button class="primary-btn" onclick="toggleMap('${safeId}')">📍 Show order map</button>
             <button class="cancel-btn" onclick="cancelOrder('${o.id}')">Cancel order</button>`}
      </div>`;
    box.appendChild(d);
  });
}
document.querySelectorAll("#cartCount").forEach(e=>e.textContent=(JSON.parse(localStorage.getItem("purepickCart")||"[]")).reduce((s,p)=>s+(p.qty||1),0));
renderOrders();
