(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}})();const f={WHATSAPP_NUMBER:"2348100367176",BANK_DETAILS:{ACCOUNT_NUMBER:"6804007750"},GOOGLE_FORM:{FORM_ACTION_URL:"https://docs.google.com/forms/d/e/1FAIpQLSc5R4jPvgi1LxfW42IRj1XvdyTxT5zWU_ONhTOHPbOwOVFzwA/formResponse",ENTRIES:{FULL_NAME:"entry.1766674401",PHONE:"entry.1492403813",WHATSAPP:"entry.217527985",ADDRESS:"entry.1331952165",CITY:"entry.491644368",STATE:"entry.543617531",PACKAGE_DETAILS:"entry.860879482"}}},g={"3kg_5kg":[{id:"pkg-3kg-1",title:"Buy 1 Unit",cylinder:"For 3kg, 5kg & 6kg Cylinders",price:24900,priceFormatted:"₦24,900",badge:"",savings:"",freeOffer:"",tag:"Standard Pack",units:"1 Burner Wand"},{id:"pkg-3kg-2",title:"Buy 2 Units",cylinder:"For 3kg, 5kg & 6kg Cylinders",price:40560,priceFormatted:"₦40,560",badge:"Popular Choice",savings:"Save ₦9,000!",freeOffer:"",tag:"Save ₦9,000",units:"2 Burner Wands"},{id:"pkg-3kg-3",title:"Buy 3 Units (Get 1 FREE)",cylinder:"For 3kg, 5kg & 6kg Cylinders",price:74700,priceFormatted:"₦74,700",badge:"Best Value",savings:"",freeOffer:"🎁 Get 1 for FREE! (4 Burners Total)",tag:"Get 1 Free",units:"4 Burner Wands Total"},{id:"pkg-3kg-5",title:"Buy 5 Units (Get 2 FREE)",cylinder:"For 3kg, 5kg & 6kg Cylinders",price:124500,priceFormatted:"₦124,500",badge:"Wholesale / Bulk",savings:"",freeOffer:"🎁 Get 2 for FREE! (7 Burners Total)",tag:"Get 2 Free",units:"7 Burner Wands Total"}],"12_5kg":[{id:"pkg-12kg-1",title:"Buy 1 Unit",cylinder:"For 12.5kg Industrial Gas Cylinder",price:28600,priceFormatted:"₦28,600",badge:"",savings:"",freeOffer:"",tag:"Standard Pack",units:"1 Burner Wand"},{id:"pkg-12kg-2",title:"Buy 2 Units",cylinder:"For 12.5kg Industrial Gas Cylinder",price:47200,priceFormatted:"₦47,200",badge:"Popular Choice",savings:"Save ₦10,000!",freeOffer:"",tag:"Save ₦10,000",units:"2 Burner Wands"},{id:"pkg-12kg-3",title:"Buy 3 Units (Get 1 FREE)",cylinder:"For 12.5kg Industrial Gas Cylinder",price:85800,priceFormatted:"₦85,800",badge:"Best Value",savings:"",freeOffer:"🎁 Get 1 for FREE! (4 Burners Total)",tag:"Get 1 Free",units:"4 Burner Wands Total"},{id:"pkg-12kg-5",title:"Buy 5 Units (Get 2 FREE)",cylinder:"For 12.5kg Industrial Gas Cylinder",price:143e3,priceFormatted:"₦143,000",badge:"Wholesale / Bulk",savings:"",freeOffer:"🎁 Get 2 for FREE! (7 Burners Total)",tag:"Get 2 Free",units:"7 Burner Wands Total"}]},o={selectedCylinder:"3kg_5kg",selectedPackage:g["3kg_5kg"][1],paymentPreference:"Payment on Delivery",latestOrder:null},h=f.WHATSAPP_NUMBER,E=f.BANK_DETAILS.ACCOUNT_NUMBER;document.addEventListener("DOMContentLoaded",()=>{b(),C(),u(),T(),I(),F(),S(),N()});function b(){const e=document.getElementById("mobileMenuToggle"),r=document.getElementById("mobileNavDrawer");if(!e||!r)return;e.addEventListener("click",()=>{r.classList.toggle("open")}),r.querySelectorAll("a").forEach(i=>{i.addEventListener("click",()=>{r.classList.remove("open")})})}function C(){const e=document.getElementById("tabCylinder3kg"),r=document.getElementById("tabCylinder12kg");e&&r&&(e.addEventListener("click",()=>{o.selectedCylinder="3kg_5kg",e.classList.add("active"),r.classList.remove("active"),u(),P()}),r.addEventListener("click",()=>{o.selectedCylinder="12_5kg",r.classList.add("active"),e.classList.remove("active"),u(),P()}))}function u(){const e=document.getElementById("pricingCardsGrid");if(!e)return;const r=g[o.selectedCylinder];e.innerHTML="",r.forEach((t,i)=>{const a=o.selectedPackage.id===t.id,n=t.badge.includes("Popular"),s=t.badge.includes("Best"),c=document.createElement("div");c.className=`package-card ${n?"popular":""} ${s?"best-value":""} ${a?"selected":""}`;let l="";t.badge&&(l=`<span class="package-badge ${n?"popular-badge":"value-badge"}">${t.badge}</span>`);let m="";t.savings?m=`<div class="package-savings">${t.savings}</div>`:t.freeOffer&&(m=`<div class="package-free-offer">${t.freeOffer}</div>`),c.innerHTML=`
      ${l}
      <h3 class="package-title">${t.title}</h3>
      <div class="package-cylinder">${t.cylinder}</div>
      <div class="package-price-wrap">
        <div class="package-price">${t.priceFormatted}</div>
        ${m}
      </div>
      <ul class="package-perks">
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
          <strong>${t.units}</strong>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
          Heavy-duty Brass Regulator Valve
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
          Free High-Pressure Hose Included
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
          Nationwide Delivery Available
        </li>
      </ul>
      <button type="button" class="btn-package-select" data-id="${t.id}">
        <span>Select This Package</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>
    `,c.querySelector(".btn-package-select").addEventListener("click",()=>{B(t),A()}),e.appendChild(c)})}function B(e){o.selectedPackage=e,u(),v(),k()}function A(){const e=document.getElementById("order-form-container");e&&e.scrollIntoView({behavior:"smooth",block:"start"})}function T(){document.querySelectorAll('input[name="cylinder_type"]').forEach(r=>{r.addEventListener("change",t=>{o.selectedCylinder=t.target.value,o.selectedPackage=g[o.selectedCylinder][1];const i=document.getElementById("tabCylinder3kg"),a=document.getElementById("tabCylinder12kg");i&&a&&(o.selectedCylinder==="3kg_5kg"?(i.classList.add("active"),a.classList.remove("active")):(a.classList.add("active"),i.classList.remove("active"))),w(),u(),v(),k()})}),v()}function P(){const e=document.querySelector(`input[name="cylinder_type"][value="${o.selectedCylinder}"]`);e&&(e.checked=!0,w(),o.selectedPackage=g[o.selectedCylinder][1],v(),k())}function w(){document.querySelectorAll(".cylinder-radio-label").forEach(e=>{const r=e.querySelector("input");r&&r.checked?e.classList.add("selected"):e.classList.remove("selected")})}function v(){const e=document.getElementById("formPackagesContainer");if(!e)return;const r=g[o.selectedCylinder];e.innerHTML="",r.forEach(t=>{const i=o.selectedPackage.id===t.id,a=document.createElement("label");a.className=`package-radio-card ${i?"selected":""}`;let n=t.tag?`<span class="package-radio-tag">${t.tag}</span>`:"";a.innerHTML=`
      <div class="package-radio-left">
        <input type="radio" name="selected_bundle" value="${t.id}" ${i?"checked":""}>
        <div>
          <span class="package-radio-name">${t.title}</span>
          ${n}
        </div>
      </div>
      <div class="package-radio-price">${t.priceFormatted}</div>
    `,a.querySelector("input").addEventListener("change",()=>{o.selectedPackage=t,document.querySelectorAll(".package-radio-card").forEach(s=>s.classList.remove("selected")),a.classList.add("selected"),u(),k()}),e.appendChild(a)})}function k(){const e=document.getElementById("summaryPkgName"),r=document.getElementById("summaryPkgPrice"),t=document.getElementById("summaryTotalAmount");e&&(e.textContent=`${o.selectedPackage.title} (${o.selectedPackage.cylinder})`),r&&(r.textContent=o.selectedPackage.priceFormatted),t&&(t.textContent=o.selectedPackage.priceFormatted)}function I(){const e=document.getElementById("orderForm");if(!e)return;document.querySelectorAll('input[name="payment_preference"]').forEach(t=>{t.addEventListener("change",i=>{o.paymentPreference=i.target.value,document.querySelectorAll(".payment-preference-label").forEach(a=>{const n=a.querySelector("input");n&&n.checked?a.classList.add("selected"):a.classList.remove("selected")})})}),e.addEventListener("submit",async t=>{t.preventDefault();const i=e.full_name.value.trim(),a=e.phone_number.value.trim(),n=e.whatsapp_number.value.trim(),s=e.delivery_address.value.trim(),c=e.city.value.trim(),l=e.state.value.trim(),m=e.country.value.trim(),p=e.order_notes?e.order_notes.value.trim():"";if(!i||!a||!n||!s||!c||!l){alert("Please fill in all required fields marked with an asterisk (*).");return}const d=document.getElementById("btnSubmitOrder"),L=d.innerHTML;d.disabled=!0,d.innerHTML=`
      <svg class="animate-spin" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
      Processing Order...
    `;const y={orderId:"QZ-"+Math.floor(1e5+Math.random()*9e5),date:new Date().toLocaleString("en-NG"),customer:{fullName:i,phone:a,whatsapp:n,address:s,city:c,state:l,country:m||"Nigeria",notes:p},package:{id:o.selectedPackage.id,title:o.selectedPackage.title,cylinder:o.selectedPackage.cylinder,price:o.selectedPackage.price,priceFormatted:o.selectedPackage.priceFormatted},paymentPreference:o.paymentPreference};o.latestOrder=y,localStorage.setItem("quazard_latest_order",JSON.stringify(y)),await O(y),setTimeout(()=>{d.disabled=!1,d.innerHTML=L,$(y)},600)})}async function O(e){var a,n;const r=(a=f.GOOGLE_FORM)==null?void 0:a.FORM_ACTION_URL,t=((n=f.GOOGLE_FORM)==null?void 0:n.ENTRIES)||{},i=`${e.package.title} - ${e.package.priceFormatted} (${e.package.cylinder}) | Payment: ${e.paymentPreference} | Ref: ${e.orderId}`;try{let s=document.getElementById("gform_hidden_iframe");s||(s=document.createElement("iframe"),s.id="gform_hidden_iframe",s.name="gform_hidden_iframe",s.style.display="none",document.body.appendChild(s));const c=document.createElement("form");c.action=r,c.method="POST",c.target="gform_hidden_iframe",c.style.display="none";const l={[t.FULL_NAME||"entry.1766674401"]:e.customer.fullName,[t.PHONE||"entry.1492403813"]:e.customer.phone,[t.WHATSAPP||"entry.217527985"]:e.customer.whatsapp,[t.ADDRESS||"entry.1331952165"]:e.customer.address,[t.CITY||"entry.491644368"]:e.customer.city,[t.STATE||"entry.543617531"]:e.customer.state,[t.PACKAGE_DETAILS||"entry.860879482"]:i};for(const[m,p]of Object.entries(l)){const d=document.createElement("input");d.type="hidden",d.name=m,d.value=p,c.appendChild(d)}document.body.appendChild(c),c.submit(),setTimeout(()=>c.remove(),2500),console.log("Order successfully recorded to Google Form.")}catch(s){console.warn("Iframe form submission:",s)}try{const s=new FormData;s.append(t.FULL_NAME||"entry.1766674401",e.customer.fullName),s.append(t.PHONE||"entry.1492403813",e.customer.phone),s.append(t.WHATSAPP||"entry.217527985",e.customer.whatsapp),s.append(t.ADDRESS||"entry.1331952165",e.customer.address),s.append(t.CITY||"entry.491644368",e.customer.city),s.append(t.STATE||"entry.543617531",e.customer.state),s.append(t.PACKAGE_DETAILS||"entry.860879482",i),await fetch(r,{method:"POST",mode:"no-cors",body:s})}catch{}}function F(){const e=document.getElementById("paymentModal"),r=document.getElementById("closePaymentModal"),t=document.getElementById("btnCopyAccount"),i=document.getElementById("btnModalPaidWhatsApp"),a=document.getElementById("btnModalPodWhatsApp");r&&e&&r.addEventListener("click",()=>{e.classList.remove("active")}),t&&t.addEventListener("click",()=>{navigator.clipboard.writeText(E).then(()=>{t.classList.add("copied"),t.innerHTML=`
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
          <span>Copied!</span>
        `,setTimeout(()=>{t.classList.remove("copied"),t.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
            <span>Click to Copy</span>
          `},2500)}).catch(()=>{alert(`Account Number: ${E}`)})}),i&&i.addEventListener("click",()=>{const n=o.latestOrder;if(!n)return;const s=`*PAYMENT PROOF - QUAZARD ANIMAL GAS BURNER*
Hello Quazard Global Limited,
I have made payment for my order. Here are the details:

*Order ID:* ${n.orderId}
*Name:* ${n.customer.fullName}
*Calling Phone:* ${n.customer.phone}
*WhatsApp Phone:* ${n.customer.whatsapp}
*Selected Package:* ${n.package.title} (${n.package.cylinder})
*Total Amount Paid:* ${n.package.priceFormatted}
*Delivery Address:* ${n.customer.address}, ${n.customer.city}, ${n.customer.state}, ${n.customer.country}
${n.customer.notes?`*Notes:* ${n.customer.notes}
`:""}
*Bank Transferred to:*
Moniepoint MFB - 6804007750 (Quazard Global Limited)

I am attaching my transfer receipt/screenshot now. Kindly confirm and schedule immediate dispatch. Thank you!`,c=`https://wa.me/${h}?text=${encodeURIComponent(s)}`;window.open(c,"_blank")}),a&&a.addEventListener("click",()=>{const n=o.latestOrder;if(!n)return;const s=`*PAYMENT ON DELIVERY CONFIRMATION - QUAZARD ANIMAL GAS BURNER*
Hello Quazard Global Limited,
I have just placed an order for Payment on Delivery.

*Order ID:* ${n.orderId}
*Name:* ${n.customer.fullName}
*Calling Phone:* ${n.customer.phone}
*WhatsApp Phone:* ${n.customer.whatsapp}
*Selected Package:* ${n.package.title} (${n.package.cylinder})
*Amount to Pay on Delivery:* ${n.package.priceFormatted}
*Delivery Address:* ${n.customer.address}, ${n.customer.city}, ${n.customer.state}, ${n.customer.country}
${n.customer.notes?`*Notes:* ${n.customer.notes}
`:""}
*Payment Preference:* Payment on Delivery (POD) / Part Payment

Please confirm my order and inform me when the delivery rider will arrive. I am ready to receive it. Thank you!`,c=`https://wa.me/${h}?text=${encodeURIComponent(s)}`;window.open(c,"_blank")})}function $(e){const r=document.getElementById("paymentModal"),t=document.getElementById("modalOrderSummary");t&&(t.innerHTML=`
      <div style="background:#f1f5f2; border:1px solid #e2e8e3; border-radius:10px; padding:16px; margin-bottom:18px;">
        <div style="display:flex; justify-content:space-between; margin-bottom:6px; font-size:0.9rem;">
          <span style="color:#62766d;">Order ID:</span>
          <strong>${e.orderId}</strong>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:6px; font-size:0.9rem;">
          <span style="color:#62766d;">Customer Name:</span>
          <strong>${e.customer.fullName}</strong>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:6px; font-size:0.9rem;">
          <span style="color:#62766d;">Package:</span>
          <strong>${e.package.title}</strong>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:1.1rem; font-weight:800; border-top:1px dashed #cbd5e1; padding-top:8px; margin-top:8px;">
          <span>Total Amount:</span>
          <span style="color:#139c5b;">${e.package.priceFormatted}</span>
        </div>
      </div>
    `),r&&r.classList.add("active")}function S(){const e=document.getElementById("floatingContactToggle"),r=document.getElementById("floatingContactMenu");!e||!r||(e.addEventListener("click",()=>{r.classList.toggle("open"),e.classList.toggle("active")}),document.addEventListener("click",t=>{!e.contains(t.target)&&!r.contains(t.target)&&(r.classList.remove("open"),e.classList.remove("active"))}))}function N(){const e=document.querySelectorAll(".faq-item");e.forEach(r=>{const t=r.querySelector(".faq-question");t&&t.addEventListener("click",()=>{const i=r.classList.contains("active");e.forEach(a=>a.classList.remove("active")),i||r.classList.add("active")})})}
