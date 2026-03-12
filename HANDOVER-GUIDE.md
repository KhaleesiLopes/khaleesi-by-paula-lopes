# Khaleesi by Paula Lopes — Website Handover Guide

**Prepared for:** Paula Lopes  
**Date:** March 2026  
**Website:** [https://khaleesi-by-lopes.lovable.app](https://khaleesi-by-lopes.lovable.app)

---

## Table of Contents

1. [Overview](#1-overview)
2. [How Your Website Works](#2-how-your-website-works)
3. [Managing Products on Shopify](#3-managing-products-on-shopify)
4. [Managing Your Published Website](#4-managing-your-published-website)
5. [Website Pages & Structure](#5-website-pages--structure)
6. [Social Media Links](#6-social-media-links)
7. [Custom Product Images](#7-custom-product-images)
8. [Project Code (ZIP File)](#8-project-code-zip-file)
9. [Account & Login Details](#9-account--login-details)
10. [Frequently Asked Questions](#10-frequently-asked-questions)
11. [Support & Contact](#11-support--contact)

---

## 1. Overview

Your **Khaleesi** website is a luxury fragrance and beauty e-commerce store. It showcases your products, brand story, ambassadors, and allows customers to browse, add items to their cart, and check out — all powered by **Shopify** for product and order management.

**Key points:**
- Your website automatically displays products from your Shopify store
- When you add, edit, or remove products in Shopify, the website updates automatically — **no code changes needed**
- Customer orders and payments are handled securely through Shopify's checkout

---

## 2. How Your Website Works

Your website is built as a **static front-end application** that connects to your Shopify store via their Storefront API. Here's what that means in simple terms:

| Component | What It Does | Where to Manage It |
|-----------|-------------|-------------------|
| **Website design & pages** | The look, layout, and content of your site | Lovable (code) |
| **Products, prices, descriptions** | What products appear, their prices and details | Shopify Admin |
| **Customer orders & payments** | Order processing, payment, shipping | Shopify Admin |
| **Domain & publishing** | Where your site is hosted and accessible | Lovable |

### The Simple Rule:
> **To change products, prices, or inventory → Go to Shopify**  
> **To change website design or pages → Go to Lovable**

---

## 3. Managing Products on Shopify

This is the most important section. You can manage all your products **without touching any code**.

### 3.1 Accessing Your Shopify Admin

1. Go to: **[https://admin.shopify.com/store/fcd20t-gd](https://admin.shopify.com/store/fcd20t-gd)**
2. Log in with your Shopify credentials
3. You'll see your Shopify dashboard

### 3.2 Adding a New Product

1. In the Shopify Admin, click **"Products"** in the left menu
2. Click **"Add product"** (top right)
3. Fill in the details:
   - **Title** — The product name (e.g., "Khaleesi Rose Eau de Parfum - 50ml")
   - **Description** — A detailed description of the product
   - **Media** — Upload beautiful product photos (the first image will be the main image on your website). Recommended: upload at least 2-3 high-quality images
   - **Pricing** — Set the price and compare-at price (for sale items)
   - **Inventory** — Track stock quantities if needed
   - **Variants** — Add size options (e.g., 50ml, 100ml) if the product comes in different sizes
4. Set the product **Status** to **"Active"** to make it visible on your website
5. Click **"Save"**

✅ **Your new product will automatically appear on your website within a few minutes!**

### 3.3 Editing an Existing Product

1. Go to **Products** in the Shopify Admin
2. Click on the product you want to edit
3. Change the title, description, price, images, or any other detail
4. Click **"Save"**

✅ **Changes appear on your website automatically!**

### 3.4 Changing a Product Price

1. Go to **Products** → click the product
2. Scroll down to **"Pricing"**
3. Update the **Price** field
4. If you want to show a "was" price (strikethrough), enter the original price in **"Compare-at price"**
5. Click **"Save"**

### 3.5 Updating Product Images

1. Go to **Products** → click the product
2. In the **"Media"** section, you can:
   - Drag and drop new images
   - Click to upload from your computer
   - Rearrange the order (the first image is the main one)
   - Delete old images
3. Click **"Save"**

> **Note:** For some products, the website uses special custom-designed images (see Section 7). If the Shopify image doesn't appear to change, it may be because a custom override is in place.

### 3.6 Removing a Product

1. Go to **Products** → click the product
2. Change the **Status** to **"Draft"** (this hides it from your website but keeps it in Shopify)
3. Or click **"Delete product"** at the bottom to permanently remove it
4. Click **"Save"**

### 3.7 Managing Inventory

1. Go to **Products** → click the product
2. Scroll to **"Inventory"**
3. Update the stock quantity
4. If a product is out of stock, it will show as "unavailable" on your website

### 3.8 Creating Product Variants (Sizes)

For products that come in multiple sizes (e.g., 50ml and 100ml):

1. Go to **Products** → click the product
2. In the **"Variants"** section, click **"Add options like size or color"**
3. Set the option name (e.g., "Size") and add values (e.g., "50ml", "100ml")
4. Set individual prices for each variant
5. Click **"Save"**

---

## 4. Managing Your Published Website

### 4.1 Your Website URL

Your website is live at: **[https://khaleesi-by-lopes.lovable.app](https://khaleesi-by-lopes.lovable.app)**

### 4.2 Custom Domain

If you want to use a custom domain (e.g., `www.khaleesibypaulalopes.com`), this can be set up in the Lovable project settings under **Settings → Domains**.

> A paid Lovable plan is required for custom domains.

---

## 5. Website Pages & Structure

Your website has the following pages:

| Page | URL Path | Description |
|------|----------|-------------|
| **Home** | `/` | Hero banner, featured products, categories, brand gallery |
| **Collection** | `/collection/fragrance`, `/collection/makeup`, etc. | Product listings by category |
| **Product Detail** | `/product/[product-name]` | Individual product page with images, description, variants, and "Add to Cart" |
| **About** | `/about` | Brand story, values, and your CEO bio |
| **Ambassadors** | `/ambassadors` | Brand ambassador profiles (Débora, Mary, Waldira) |
| **FAQ** | `/faq` | Frequently asked questions |
| **Contact** | `/contact` | Contact information |

### Cart & Checkout Flow
1. Customer browses products
2. Clicks **"Add to Cart"** → item appears in cart drawer
3. Clicks **"Checkout"** → redirected to **Shopify's secure checkout page**
4. Customer completes payment on Shopify

---

## 6. Social Media Links

Currently configured in the website footer:
- **Instagram:** [@khaleesi_pl](https://www.instagram.com/khaleesi_pl)
- **Facebook:** Not yet linked (currently points to `#`)

> To update social links, a code change in Lovable is needed, or you can ask your developer.

---

## 7. Custom Product Images

For some products, the website uses specially designed high-quality images instead of the Shopify product photos. These are currently set up for:

| Product | Custom Image Used |
|---------|------------------|
| Velvet Bloom | `product-velvet-bloom.jpg` |
| Insprezione 100ml | `product-inspreazione-100ml.jpg` |
| Insprezione 50ml | `product-inspirazione-50ml.jpg` |
| Rose | `product-rose.jpg` |
| Khal Eau de Parfum | `product-khal.jpg` |

**Important:** If you rename these products in Shopify, the custom images may stop matching. Keep the product titles consistent, or ask your developer to update the image mapping.

---

## 8. Project Code (ZIP File)

You will receive a ZIP file containing the complete website source code. Here's what's inside:

```
khaleesi-website/
├── src/                    # Main website code
│   ├── assets/             # All images (product photos, brand images, etc.)
│   ├── components/         # Website building blocks (Header, Footer, Cart, etc.)
│   ├── pages/              # Individual pages (Home, About, FAQ, etc.)
│   ├── stores/             # Shopping cart logic
│   ├── hooks/              # Data fetching from Shopify
│   └── lib/                # Shopify connection settings
├── public/                 # Static files (favicon, robots.txt)
├── index.html              # Main HTML file
└── package.json            # Project dependencies
```

### Key Files (for a developer):
- `src/lib/shopify.ts` — Shopify API connection settings
- `src/lib/productImageOverrides.ts` — Custom product image mappings
- `src/stores/cartStore.ts` — Cart and checkout logic
- `src/components/Footer.tsx` — Social media links
- `src/index.css` — Brand colours and design tokens

### To Run Locally (for a developer):
```bash
npm install
npm run dev
```

Requires environment variables (see Section 9).

---

## 9. Account & Login Details

### Lovable (Website Builder)
- **URL:** [https://lovable.dev](https://lovable.dev)
- **Email:** `khaleesibypaulalopes@gmail.com`
- **Password:** *(shared separately for security — do not store in plain text)*
- **Project:** Khaleesi by Lopes

### Shopify (Product & Order Management)
- **Admin URL:** [https://admin.shopify.com/store/fcd20t-gd](https://admin.shopify.com/store/fcd20t-gd)
- **Store Domain:** `fcd20t-gd.myshopify.com`
- Login with the same credentials or the Shopify account credentials

### Environment Variables (Technical)
These are configured in Lovable's project secrets and are needed if running the code locally:

| Variable | Purpose |
|----------|---------|
| `VITE_SHOPIFY_STORE_DOMAIN` | Your Shopify store domain (`fcd20t-gd.myshopify.com`) |
| `VITE_SHOPIFY_STOREFRONT_TOKEN` | API token for reading products (stored securely in Lovable) |

> These are already configured. You don't need to change them unless you connect a different Shopify store.

---

## 10. Frequently Asked Questions

### "I added a product in Shopify but it's not showing on my website"
- Make sure the product **Status** is set to **"Active"** in Shopify
- Wait a few minutes — it may take a moment to appear
- Try refreshing the website page

### "I want to change the website design or layout"
- This requires changes in the Lovable project (code)
- Log into [lovable.dev](https://lovable.dev) and open your project
- You can use the AI chat to request design changes

### "I want to add a new page"
- Log into Lovable and ask the AI to create a new page for you

### "Can I change the brand colours?"
- Yes, through Lovable. The brand colours are defined in the project's design system

### "How do customers pay?"
- Customers are redirected to Shopify's secure checkout
- Payment methods are configured in your Shopify Admin under **Settings → Payments**

### "How do I handle shipping?"
- Shipping settings are managed in Shopify Admin under **Settings → Shipping and delivery**

### "How do I see my orders?"
- Go to your Shopify Admin → **Orders** to see all customer orders

### "I want to offer a discount code"
- Go to Shopify Admin → **Discounts** → **Create discount**
- Or ask your developer to create one through Lovable

---

## 11. Support & Contact

For **product and order** questions → Use Shopify's help resources at [help.shopify.com](https://help.shopify.com)

For **website design changes** → Log into [lovable.dev](https://lovable.dev) and use the AI chat, or contact your developer

---

*This document was prepared as part of the Khaleesi by Paula Lopes website project handover.*
