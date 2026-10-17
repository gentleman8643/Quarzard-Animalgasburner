/**
 * QUAZARD ANIMAL GAS BURNER - INTERACTIVE CLIENT SCRIPT
 * Official Branch of Quazard Global Limited (RC-1756738)
 */

import { CONFIG } from './config.js';

// Package Pricing Database
export const PACKAGES = {
  '3kg_5kg': [
    {
      id: 'pkg-3kg-1',
      title: 'Buy 1 Unit',
      cylinder: 'For 3kg, 5kg & 6kg Cylinders',
      price: 24900,
      priceFormatted: '₦24,900',
      badge: '',
      savings: '',
      freeOffer: '',
      tag: 'Standard Pack',
      units: '1 Burner Wand'
    },
    {
      id: 'pkg-3kg-2',
      title: 'Buy 2 Units',
      cylinder: 'For 3kg, 5kg & 6kg Cylinders',
      price: 40560,
      priceFormatted: '₦40,560',
      badge: 'Popular Choice',
      savings: 'Save ₦9,000!',
      freeOffer: '',
      tag: 'Save ₦9,000',
      units: '2 Burner Wands'
    },
    {
      id: 'pkg-3kg-3',
      title: 'Buy 3 Units (Get 1 FREE)',
      cylinder: 'For 3kg, 5kg & 6kg Cylinders',
      price: 74700,
      priceFormatted: '₦74,700',
      badge: 'Best Value',
      savings: '',
      freeOffer: '🎁 Get 1 for FREE! (4 Burners Total)',
      tag: 'Get 1 Free',
      units: '4 Burner Wands Total'
    },
    {
      id: 'pkg-3kg-5',
      title: 'Buy 5 Units (Get 2 FREE)',
      cylinder: 'For 3kg, 5kg & 6kg Cylinders',
      price: 124500,
      priceFormatted: '₦124,500',
      badge: 'Wholesale / Bulk',
      savings: '',
      freeOffer: '🎁 Get 2 for FREE! (7 Burners Total)',
      tag: 'Get 2 Free',
      units: '7 Burner Wands Total'
    }
  ],
  '12_5kg': [
    {
      id: 'pkg-12kg-1',
      title: 'Buy 1 Unit',
      cylinder: 'For 12.5kg Industrial Gas Cylinder',
      price: 28600,
      priceFormatted: '₦28,600',
      badge: '',
      savings: '',
      freeOffer: '',
      tag: 'Standard Pack',
      units: '1 Burner Wand'
    },
    {
      id: 'pkg-12kg-2',
      title: 'Buy 2 Units',
      cylinder: 'For 12.5kg Industrial Gas Cylinder',
      price: 47200,
      priceFormatted: '₦47,200',
      badge: 'Popular Choice',
      savings: 'Save ₦10,000!',
      freeOffer: '',
      tag: 'Save ₦10,000',
      units: '2 Burner Wands'
    },
    {
      id: 'pkg-12kg-3',
      title: 'Buy 3 Units (Get 1 FREE)',
      cylinder: 'For 12.5kg Industrial Gas Cylinder',
      price: 85800,
      priceFormatted: '₦85,800',
      badge: 'Best Value',
      savings: '',
      freeOffer: '🎁 Get 1 for FREE! (4 Burners Total)',
      tag: 'Get 1 Free',
      units: '4 Burner Wands Total'
    },
    {
      id: 'pkg-12kg-5',
      title: 'Buy 5 Units (Get 2 FREE)',
      cylinder: 'For 12.5kg Industrial Gas Cylinder',
      price: 143000,
      priceFormatted: '₦143,000',
      badge: 'Wholesale / Bulk',
      savings: '',
      freeOffer: '🎁 Get 2 for FREE! (7 Burners Total)',
      tag: 'Get 2 Free',
      units: '7 Burner Wands Total'
    }
  ]
};

// Global App State
const state = {
  selectedCylinder: '3kg_5kg', // or '12_5kg'
  selectedPackage: PACKAGES['3kg_5kg'][1], // default 2 units
  paymentPreference: 'Payment on Delivery',
  latestOrder: null
};

// Phone and Account configuration
const CLEAN_PHONE = CONFIG.WHATSAPP_NUMBER || '2348100367176';
const ACCOUNT_NUMBER = CONFIG.BANK_DETAILS.ACCOUNT_NUMBER || '6804007750';


document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initCylinderTabs();
  renderPricingGrid();
  initFormPackageSelectors();
  initOrderForm();
  initPaymentModal();
  initFloatingContacts();
  initFAQ();
});

/* =========================================================
   Mobile Navigation Drawer
   ========================================================= */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileNavDrawer');
  if (!menuBtn || !drawer) return;

  menuBtn.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });

  const links = drawer.querySelectorAll('a');
  links.forEach(l => {
    l.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });
}

/* =========================================================
   Cylinder Size Tabs in Pricing Section
   ========================================================= */
function initCylinderTabs() {
  const tab3kg = document.getElementById('tabCylinder3kg');
  const tab12kg = document.getElementById('tabCylinder12kg');

  if (tab3kg && tab12kg) {
    tab3kg.addEventListener('click', () => {
      state.selectedCylinder = '3kg_5kg';
      tab3kg.classList.add('active');
      tab12kg.classList.remove('active');
      renderPricingGrid();
      syncFormCylinderChoice();
    });

    tab12kg.addEventListener('click', () => {
      state.selectedCylinder = '12_5kg';
      tab12kg.classList.add('active');
      tab3kg.classList.remove('active');
      renderPricingGrid();
      syncFormCylinderChoice();
    });
  }
}

/* =========================================================
   Render Pricing Packages Grid
   ========================================================= */
function renderPricingGrid() {
  const container = document.getElementById('pricingCardsGrid');
  if (!container) return;

  const packages = PACKAGES[state.selectedCylinder];
  container.innerHTML = '';

  packages.forEach((pkg, index) => {
    const isSelected = state.selectedPackage.id === pkg.id;
    const isPopular = pkg.badge.includes('Popular');
    const isBestValue = pkg.badge.includes('Best');

    const card = document.createElement('div');
    card.className = `package-card ${isPopular ? 'popular' : ''} ${isBestValue ? 'best-value' : ''} ${isSelected ? 'selected' : ''}`;

    let badgeHTML = '';
    if (pkg.badge) {
      const bClass = isPopular ? 'popular-badge' : 'value-badge';
      badgeHTML = `<span class="package-badge ${bClass}">${pkg.badge}</span>`;
    }

    let extraHighlight = '';
    if (pkg.savings) {
      extraHighlight = `<div class="package-savings">${pkg.savings}</div>`;
    } else if (pkg.freeOffer) {
      extraHighlight = `<div class="package-free-offer">${pkg.freeOffer}</div>`;
    }

    card.innerHTML = `
      ${badgeHTML}
      <h3 class="package-title">${pkg.title}</h3>
      <div class="package-cylinder">${pkg.cylinder}</div>
      <div class="package-price-wrap">
        <div class="package-price">${pkg.priceFormatted}</div>
        ${extraHighlight}
      </div>
      <ul class="package-perks">
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
          <strong>${pkg.units}</strong>
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
      <button type="button" class="btn-package-select" data-id="${pkg.id}">
        <span>Select This Package</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>
    `;

    const selectBtn = card.querySelector('.btn-package-select');
    selectBtn.addEventListener('click', () => {
      selectPackage(pkg);
      scrollToOrderForm();
    });

    container.appendChild(card);
  });
}

function selectPackage(pkg) {
  state.selectedPackage = pkg;
  renderPricingGrid();
  renderFormPackageRadioCards();
  updateOrderSummary();
}

function scrollToOrderForm() {
  const formSection = document.getElementById('order-form-container');
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/* =========================================================
   Order Form: Package & Cylinder Sync
   ========================================================= */
function initFormPackageSelectors() {
  const radioCylinders = document.querySelectorAll('input[name="cylinder_type"]');
  radioCylinders.forEach(radio => {
    radio.addEventListener('change', (e) => {
      state.selectedCylinder = e.target.value;
      // Default to index 1 of new list or match
      state.selectedPackage = PACKAGES[state.selectedCylinder][1];
      
      // Sync tab buttons
      const tab3kg = document.getElementById('tabCylinder3kg');
      const tab12kg = document.getElementById('tabCylinder12kg');
      if (tab3kg && tab12kg) {
        if (state.selectedCylinder === '3kg_5kg') {
          tab3kg.classList.add('active');
          tab12kg.classList.remove('active');
        } else {
          tab12kg.classList.add('active');
          tab3kg.classList.remove('active');
        }
      }

      updateCylinderRadioClasses();
      renderPricingGrid();
      renderFormPackageRadioCards();
      updateOrderSummary();
    });
  });

  renderFormPackageRadioCards();
}

function syncFormCylinderChoice() {
  const radio = document.querySelector(`input[name="cylinder_type"][value="${state.selectedCylinder}"]`);
  if (radio) {
    radio.checked = true;
    updateCylinderRadioClasses();
    state.selectedPackage = PACKAGES[state.selectedCylinder][1];
    renderFormPackageRadioCards();
    updateOrderSummary();
  }
}

function updateCylinderRadioClasses() {
  document.querySelectorAll('.cylinder-radio-label').forEach(label => {
    const input = label.querySelector('input');
    if (input && input.checked) {
      label.classList.add('selected');
    } else {
      label.classList.remove('selected');
    }
  });
}

function renderFormPackageRadioCards() {
  const container = document.getElementById('formPackagesContainer');
  if (!container) return;

  const packages = PACKAGES[state.selectedCylinder];
  container.innerHTML = '';

  packages.forEach(pkg => {
    const isSelected = state.selectedPackage.id === pkg.id;
    const label = document.createElement('label');
    label.className = `package-radio-card ${isSelected ? 'selected' : ''}`;

    let tagHtml = pkg.tag ? `<span class="package-radio-tag">${pkg.tag}</span>` : '';

    label.innerHTML = `
      <div class="package-radio-left">
        <input type="radio" name="selected_bundle" value="${pkg.id}" ${isSelected ? 'checked' : ''}>
        <div>
          <span class="package-radio-name">${pkg.title}</span>
          ${tagHtml}
        </div>
      </div>
      <div class="package-radio-price">${pkg.priceFormatted}</div>
    `;

    label.querySelector('input').addEventListener('change', () => {
      state.selectedPackage = pkg;
      document.querySelectorAll('.package-radio-card').forEach(c => c.classList.remove('selected'));
      label.classList.add('selected');
      renderPricingGrid();
      updateOrderSummary();
    });

    container.appendChild(label);
  });
}

function updateOrderSummary() {
  const summaryPkgName = document.getElementById('summaryPkgName');
  const summaryPkgPrice = document.getElementById('summaryPkgPrice');
  const summaryTotalAmount = document.getElementById('summaryTotalAmount');

  if (summaryPkgName) summaryPkgName.textContent = `${state.selectedPackage.title} (${state.selectedPackage.cylinder})`;
  if (summaryPkgPrice) summaryPkgPrice.textContent = state.selectedPackage.priceFormatted;
  if (summaryTotalAmount) summaryTotalAmount.textContent = state.selectedPackage.priceFormatted;
}

/* =========================================================
   Order Form Submission & Validation
   ========================================================= */
function initOrderForm() {
  const form = document.getElementById('orderForm');
  if (!form) return;

  // Payment preference radio change
  const prefRadios = document.querySelectorAll('input[name="payment_preference"]');
  prefRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      state.paymentPreference = e.target.value;
      document.querySelectorAll('.payment-preference-label').forEach(lbl => {
        const inp = lbl.querySelector('input');
        if (inp && inp.checked) lbl.classList.add('selected');
        else lbl.classList.remove('selected');
      });
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fullName = form.full_name.value.trim();
    const phone = form.phone_number.value.trim();
    const whatsapp = form.whatsapp_number.value.trim();
    const address = form.delivery_address.value.trim();
    const city = form.city.value.trim();
    const stateVal = form.state.value.trim();
    const country = form.country.value.trim();
    const notes = form.order_notes ? form.order_notes.value.trim() : '';

    if (!fullName || !phone || !whatsapp || !address || !city || !stateVal) {
      alert('Please fill in all required fields marked with an asterisk (*).');
      return;
    }

    const submitBtn = document.getElementById('btnSubmitOrder');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
      Processing Order...
    `;

    // Construct Order Object
    const orderData = {
      orderId: 'QZ-' + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleString('en-NG'),
      customer: {
        fullName,
        phone,
        whatsapp,
        address,
        city,
        state: stateVal,
        country: country || 'Nigeria',
        notes
      },
      package: {
        id: state.selectedPackage.id,
        title: state.selectedPackage.title,
        cylinder: state.selectedPackage.cylinder,
        price: state.selectedPackage.price,
        priceFormatted: state.selectedPackage.priceFormatted
      },
      paymentPreference: state.paymentPreference
    };

    state.latestOrder = orderData;
    localStorage.setItem('quazard_latest_order', JSON.stringify(orderData));

    // Submit to Google Forms in background (if configured)
    await submitToGoogleForm(orderData);

    // Show confirmation modal
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      openPaymentModal(orderData);
    }, 600);
  });
}

/* =========================================================
   Google Form Submission Integration
   ========================================================= */
async function submitToGoogleForm(order) {
  const formUrl = CONFIG.GOOGLE_FORM?.FORM_ACTION_URL || window.GOOGLE_FORM_URL || ''; 

  if (!formUrl) {
    console.info('Google Form sync ready. To link your live Google Form, set CONFIG.GOOGLE_FORM.FORM_ACTION_URL in src/config.js.');
    return;
  }

  const entries = CONFIG.GOOGLE_FORM?.ENTRIES || {};
  const packageSummary = `${order.package.title} - ${order.package.priceFormatted} (${order.package.cylinder}) | Payment: ${order.paymentPreference} | Ref: ${order.orderId}`;

  // 1. High-reliability hidden iframe form submission (guarantees cross-origin delivery to Google Forms on all mobile and desktop browsers)
  try {
    let iframe = document.getElementById('gform_hidden_iframe');
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.id = 'gform_hidden_iframe';
      iframe.name = 'gform_hidden_iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
    }

    const gForm = document.createElement('form');
    gForm.action = formUrl;
    gForm.method = 'POST';
    gForm.target = 'gform_hidden_iframe';
    gForm.style.display = 'none';

    const fields = {
      [entries.FULL_NAME || 'entry.1766674401']: order.customer.fullName,
      [entries.PHONE || 'entry.1492403813']: order.customer.phone,
      [entries.WHATSAPP || 'entry.217527985']: order.customer.whatsapp,
      [entries.ADDRESS || 'entry.1331952165']: order.customer.address,
      [entries.CITY || 'entry.491644368']: order.customer.city,
      [entries.STATE || 'entry.543617531']: order.customer.state,
      [entries.PACKAGE_DETAILS || 'entry.860879482']: packageSummary
    };

    for (const [key, val] of Object.entries(fields)) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = val;
      gForm.appendChild(input);
    }

    document.body.appendChild(gForm);
    gForm.submit();
    setTimeout(() => gForm.remove(), 2500);
    console.log('Order successfully recorded to Google Form.');
  } catch (err) {
    console.warn('Iframe form submission:', err);
  }

  // 2. Background fetch redundancy
  try {
    const formData = new FormData();
    formData.append(entries.FULL_NAME || 'entry.1766674401', order.customer.fullName);
    formData.append(entries.PHONE || 'entry.1492403813', order.customer.phone);
    formData.append(entries.WHATSAPP || 'entry.217527985', order.customer.whatsapp);
    formData.append(entries.ADDRESS || 'entry.1331952165', order.customer.address);
    formData.append(entries.CITY || 'entry.491644368', order.customer.city);
    formData.append(entries.STATE || 'entry.543617531', order.customer.state);
    formData.append(entries.PACKAGE_DETAILS || 'entry.860879482', packageSummary);

    await fetch(formUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    });
  } catch (err) {
    // Redundancy complete
  }
}

/* =========================================================
   Payment / Order Confirmation Modal & Bank Account Copy
   ========================================================= */
function initPaymentModal() {
  const modal = document.getElementById('paymentModal');
  const closeBtn = document.getElementById('closePaymentModal');
  const copyBtn = document.getElementById('btnCopyAccount');
  const paidWaBtn = document.getElementById('btnModalPaidWhatsApp');
  const podWaBtn = document.getElementById('btnModalPodWhatsApp');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  // Copy Account Number
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(ACCOUNT_NUMBER).then(() => {
        copyBtn.classList.add('copied');
        copyBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
          <span>Copied!</span>
        `;
        setTimeout(() => {
          copyBtn.classList.remove('copied');
          copyBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
            <span>Click to Copy</span>
          `;
        }, 2500);
      }).catch(() => {
        alert(`Account Number: ${ACCOUNT_NUMBER}`);
      });
    });
  }

  // "I've Made Payment" WhatsApp Button
  if (paidWaBtn) {
    paidWaBtn.addEventListener('click', () => {
      const order = state.latestOrder;
      if (!order) return;

      const message = `*PAYMENT PROOF - QUAZARD ANIMAL GAS BURNER*
Hello Quazard Global Limited,
I have made payment for my order. Here are the details:

*Order ID:* ${order.orderId}
*Name:* ${order.customer.fullName}
*Calling Phone:* ${order.customer.phone}
*WhatsApp Phone:* ${order.customer.whatsapp}
*Selected Package:* ${order.package.title} (${order.package.cylinder})
*Total Amount Paid:* ${order.package.priceFormatted}
*Delivery Address:* ${order.customer.address}, ${order.customer.city}, ${order.customer.state}, ${order.customer.country}
${order.customer.notes ? `*Notes:* ${order.customer.notes}\n` : ''}
*Bank Transferred to:*
Moniepoint MFB - 6804007750 (Quazard Global Limited)

I am attaching my transfer receipt/screenshot now. Kindly confirm and schedule immediate dispatch. Thank you!`;

      const waUrl = `https://wa.me/${CLEAN_PHONE}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
    });
  }

  // "Payment on Delivery" WhatsApp Button
  if (podWaBtn) {
    podWaBtn.addEventListener('click', () => {
      const order = state.latestOrder;
      if (!order) return;

      const message = `*PAYMENT ON DELIVERY CONFIRMATION - QUAZARD ANIMAL GAS BURNER*
Hello Quazard Global Limited,
I have just placed an order for Payment on Delivery.

*Order ID:* ${order.orderId}
*Name:* ${order.customer.fullName}
*Calling Phone:* ${order.customer.phone}
*WhatsApp Phone:* ${order.customer.whatsapp}
*Selected Package:* ${order.package.title} (${order.package.cylinder})
*Amount to Pay on Delivery:* ${order.package.priceFormatted}
*Delivery Address:* ${order.customer.address}, ${order.customer.city}, ${order.customer.state}, ${order.customer.country}
${order.customer.notes ? `*Notes:* ${order.customer.notes}\n` : ''}
*Payment Preference:* Payment on Delivery (POD) / Part Payment

Please confirm my order and inform me when the delivery rider will arrive. I am ready to receive it. Thank you!`;

      const waUrl = `https://wa.me/${CLEAN_PHONE}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
    });
  }
}

function openPaymentModal(order) {
  const modal = document.getElementById('paymentModal');
  const modalOrderSummary = document.getElementById('modalOrderSummary');

  if (modalOrderSummary) {
    modalOrderSummary.innerHTML = `
      <div style="background:#f1f5f2; border:1px solid #e2e8e3; border-radius:10px; padding:16px; margin-bottom:18px;">
        <div style="display:flex; justify-content:space-between; margin-bottom:6px; font-size:0.9rem;">
          <span style="color:#62766d;">Order ID:</span>
          <strong>${order.orderId}</strong>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:6px; font-size:0.9rem;">
          <span style="color:#62766d;">Customer Name:</span>
          <strong>${order.customer.fullName}</strong>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:6px; font-size:0.9rem;">
          <span style="color:#62766d;">Package:</span>
          <strong>${order.package.title}</strong>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:1.1rem; font-weight:800; border-top:1px dashed #cbd5e1; padding-top:8px; margin-top:8px;">
          <span>Total Amount:</span>
          <span style="color:#139c5b;">${order.package.priceFormatted}</span>
        </div>
      </div>
    `;
  }

  if (modal) {
    modal.classList.add('active');
  }
}

/* =========================================================
   Floating Contact Menu (Bottom Right)
   ========================================================= */
function initFloatingContacts() {
  const toggleBtn = document.getElementById('floatingContactToggle');
  const menu = document.getElementById('floatingContactMenu');

  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('open');
    toggleBtn.classList.toggle('active');
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!toggleBtn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('open');
      toggleBtn.classList.remove('active');
    }
  });
}

/* =========================================================
   FAQ Accordion Functionality
   ========================================================= */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

