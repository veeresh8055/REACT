import React from 'react'
import Home from './components/Home'

const App = () => {

  let products =   [
  {
    "id": 1,
    "name": "QuantumX Wireless Headphones",
    "sku": "AUD-QX-001",
    "description": "Over-ear noise-canceling headphones with 40-hour battery life and spatial audio.",
    "price": 129.99,
    "currency": "USD",
    "category": "Electronics",
    "stock": 45,
    "rating": 4.7,
    "image_url": "https://example.com"
  },
  {
    "id": 2,
    "name": "Apex Ergonomic Office Chair",
    "sku": "FUR-APX-04",
    "description": "High-back mesh chair featuring dynamic lumbar support and adjustable armrests.",
    "price": 249.50,
    "currency": "USD",
    "category": "Furniture",
    "stock": 12,
    "rating": 4.5,
    "image_url": "https://example.com"
  },
  {
    "id": 3,
    "name": "HydroStream Stainless Water Bottle",
    "sku": "OUT-HYD-750",
    "description": "Double-walled vacuum insulated bottle that keeps drinks cold for up to 24 hours.",
    "price": 24.95,
    "currency": "USD",
    "category": "Fitness & Outdoors",
    "stock": 120,
    "rating": 4.8,
    "image_url": "https://example.com"
  },
  {
    "id": 4,
    "name": "Titanium Chef Kitchen Blender",
    "sku": "KIT-TCB-900",
    "description": "High-speed 1200W motor blender with pulse control and 3 pre-programmed cycles.",
    "price": 89.99,
    "currency": "USD",
    "category": "Kitchen Appliances",
    "stock": 31,
    "rating": 4.2,
    "image_url": "https://example.com"
  },
  {
    "id": 5,
    "name": "AeroStep Trail Running Shoes",
    "sku": "APP-AST-09",
    "description": "Lightweight, breathable sneakers with high-traction soles optimized for rugged terrain.",
    "price": 110.00,
    "currency": "USD",
    "category": "Apparel & Footwear",
    "stock": 58,
    "rating": 4.6,
    "image_url": "https://example.com"
  },
  {
    "id": 6,
    "name": "Lumina RGB Mechanical Keyboard",
    "sku": "COMP-LUM-RGB",
    "description": "Hot-swappable mechanical gaming keyboard with custom linear switches and RGB backlighting.",
    "price": 74.99,
    "currency": "USD",
    "category": "Electronics",
    "stock": 22,
    "rating": 4.4,
    "image_url": "https://example.com"
  },
  {
    "id": 7,
    "name": "GlowSkin Vitamin C Serum",
    "sku": "BTY-GSVC-30",
    "description": "Brightening and anti-aging facial serum infused with hyaluronic acid.",
    "price": 35.00,
    "currency": "USD",
    "category": "Beauty & Personal Care",
    "stock": 85,
    "rating": 4.9,
    "image_url": "https://example.com"
  },
  {
    "id": 8,
    "name": "Terra Firma Minimalist Leather Wallet",
    "sku": "ACC-TFLW-02",
    "description": "Slim, RFID-blocking top grain leather wallet with quick-access card slots.",
    "price": 42.50,
    "currency": "USD",
    "category": "Accessories",
    "stock": 64,
    "rating": 4.3,
    "image_url": "https://example.com"
  },
  {
    "id": 9,
    "name": "OmniCharge 10K Power Bank",
    "sku": "COMP-OMNI-10",
    "description": "Ultra-compact 10,000mAh portable charger with USB-C Power Delivery.",
    "price": 29.99,
    "currency": "USD",
    "category": "Electronics",
    "stock": 142,
    "rating": 4.6,
    "image_url": "https://example.com"
  },
  {
    "id": 10,
    "name": "Solas Smart LED Desk Lamp",
    "sku": "HOME-SLDL-22",
    "description": "Dimmable desk lamp featuring wireless charging pad, timer, and 5 color modes.",
    "price": 49.99,
    "currency": "USD",
    "category": "Home Decor",
    "stock": 19,
    "rating": 4.1,
    "image_url": "https://example.com"
  }
]


  return (
    <div>
      <Home  productData = 'AMOZON PRODUCTS'  user="VEERESH" products={products} />
    </div>
  )
}

export default App