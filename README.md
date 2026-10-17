# Quarzard Animal Gas Burner — Official Web Application
> A specialized division of **Quazard Global Limited** (RC-1756738)  
> Head Office: 38 Oyedokun Agowande Street, Beside St. Michael Primary School, Off Igbona Market, Oke Oniti, Osogbo, Osun State, Nigeria.

---

## 🌟 Overview & Key Features

This web application has been engineered to match the luxury corporate design, colors, typography, header, and footer of the main website ([https://quazard-global-hub.lovable.app](https://quazard-global-hub.lovable.app)), tailored for the **Quarzard Animal Gas Burner** livestock singeing tool.

### 1. Extracted Header & Footer
- **Header Top Bar**: Official RC number (`RC-1756738`), global branch locations (*Osogbo, Nigeria · Muscat, Oman · Makkah, Saudi Arabia*), email (`quazardglobal@gmail.com`), phone number, and social media handles.
- **Main Nav Bar**: Official Quazard emblem logo, division title, quick navigation links (*Why Switch, Live Demos, Features, Pricing, Place Order, Contact*), and "Talk to Us" call button.
- **Footer**: Exact 4-column corporate footer listing all 6 divisions (Construction, Fabrication, Real Estate, Travel & Tours, Logistics, Consulting), international offices, full contact directory, and copyright.

### 2. Video & Media Placements
- **Video 1 (`1584786.mp4`)**: Featured in the **Hero Section** showing live heavy-duty abattoir action singeing tough animal hide with powerful high-intensity LPG gas flame.
- **Flyer (`photo_2026-10-17_03-13-49.jpg`)**: Featured in the **Urgent Health Advisory** section (*"KEROSENE KILLS • PETROL IS DEADLY • SWITCH TO ANIMAL GAS BURNER"*), comparing traditional tyre/petrol singeing against clean gas.
- **Video 2 (`video_2026-10-17_03-13-23.mp4`)**: Featured in the **Demonstration Section** highlighting the 30-second fast connection to gas cylinders and precision flame adjustment via the brass needle valve.
- **Video 3 (`video_2026-10-17_03-13-41.mp4`)**: Featured in the **Meat Results Section** demonstrating the hygienic, golden-brown finished meat free of carcinogenic soot and odors.

### 3. Pricing Packages & Interactive Selector
Supports both standard and industrial cylinder sizes with bundle discount savings and free bonus offers:

#### For 3kg, 5kg & 6kg Gas Cylinders:
- **Buy 1 Unit**: ₦24,900
- **Buy 2 Units**: ₦40,560 *(Save ₦9,000!)*
- **Buy 3 Units**: ₦74,700 *(Get 1 for FREE! - 4 Burners Total)*
- **Buy 5 Units**: ₦124,500 *(Get 2 for FREE! - 7 Burners Total)*

#### For 12.5kg Industrial Gas Cylinder:
- **Buy 1 Unit**: ₦28,600
- **Buy 2 Units**: ₦47,200 *(Save ₦10,000!)*
- **Buy 3 Units**: ₦85,800 *(Get 1 for FREE! - 4 Burners Total)*
- **Buy 5 Units**: ₦143,000 *(Get 2 for FREE! - 7 Burners Total)*

### 4. Interactive Order & Checkout Form
- **Form Fields**: Full Name, Calling Phone Number, WhatsApp Number, Full Delivery Address, City/Town, State (all 36 Nigerian states + FCT), Country, Package Selector, and Delivery Notes.
- **Payment Preferences**:
  - Payment on Delivery (POD)
  - Part Payment (Commitment deposit + balance upon delivery)
  - Full Payment Before Delivery (Priority VIP dispatch)

### 5. Bank Account & Payment Confirmation Modal
Immediately upon submitting the order form:
- Displays Order Status: **Order Pending Confirmation** with generated Order ID and Order Summary.
- Shows **QUAZARD PRODUCT SALES ACCOUNT**:
  - **Account Name**: Quazard Global Limited
  - **Account Number**: `6804007750`
  - **Bank Name**: Moniepoint MFB
  - **One-Click Copy**: Instant "Click to Copy" button with visual feedback.
- Two WhatsApp Action Buttons:
  1. **"I've Made Payment"**: Opens WhatsApp to `+2348100367176` with full customer details and a pre-written message to attach payment receipt proof.
  2. **"Payment on Delivery"**: Opens WhatsApp to `+2348100367176` with a pre-written POD confirmation message.

### 6. Floating & On-Page Contact Options
- **Floating "Order Now" Button**: Bottom-left fixed pill that smoothly scrolls directly to the order form.
- **Floating "Contact Us" Widget**: Bottom-right floating menu displaying:
  - Direct Phone Call (`tel:+2348100367176`)
  - Direct SMS (`sms:+2348100367176`)
  - WhatsApp Chat (`https://wa.me/2348100367176`)
- **On-Page Contact Section**: Full directory with click-to-call, click-to-SMS, and click-to-WhatsApp cards.

---

## 🚀 How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production (outputs to dist/)
npm run build
```

---

## 🌐 Deployment to Netlify & Vercel

The project includes `netlify.toml` and `vercel.json` and is ready for 1-click deployment on both platforms:

### Deploying to Netlify
1. Log into [Netlify](https://app.netlify.com).
2. Click **"Add new site"** -> **"Import an existing project"** (via GitHub/GitLab) OR **"Deploy manually"** (drag & drop the `dist/` folder).
3. If connecting via Git:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Netlify will detect `netlify.toml` automatically and deploy in under 30 seconds!

### Deploying to Vercel
1. Log into [Vercel](https://vercel.com).
2. Click **"Add New Project"** and import your repository.
3. Vercel automatically detects Vite and uses `vercel.json`:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **"Deploy"**!

---

## 📋 How to Connect Google Forms (Step-by-Step)

In `src/config.js`, you can connect your Google Form in 2 minutes:

1. Create a Google Form with fields:
   - *Full Name*
   - *Phone Number*
   - *WhatsApp Number*
   - *Delivery Address*
   - *Package Name*
   - *Price*
   - *Payment Preference*
2. In Google Forms, click the 3 vertical dots at top right -> **"Get pre-filled link"**.
3. Type dummy test text in each field (e.g., "Name", "0801234", etc.) and click **"Get Link"** -> **"Copy Link"**.
4. Paste the link into a notepad. It will look like:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform?usp=pp_url&entry.123456=Name&entry.789012=0801234...
   ```
5. Replace `/viewform` with `/formResponse`.
6. Open `src/config.js` and paste your URL and `entry.XXXXXX` numbers:
   ```javascript
   GOOGLE_FORM: {
     ENABLED: true,
     FORM_ACTION_URL: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse',
     ENTRIES: {
       FULL_NAME: 'entry.123456',
       PHONE: 'entry.789012',
       ...
     }
   }
   ```
7. Run `npm run build` to update the production bundle. Every order submitted on the website will now automatically record into your Google Form and linked Google Sheet!
