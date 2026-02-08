import React from "react";
import Card from "./components/Card.jsx";
const App = () => {
  const products = [
    {
      id: 1,
      brand: "Nike",
      name: 'Dunk High "Green Satin" Sneakers',
      price: 180.0,
      image:
        "https://images.unsplash.com/photo-1747691875590-14db938e42d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
      badge: "Best Seller",
      isLiked: false,
    },
    {
      id: 2,
      brand: "Nike",
      name: 'Air Jordan 1 Retro High OG "Chicago"',
      price: 180.0,
      image:
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&auto=format&fit=crop",
      badge: "Limited Edition",
      isLiked: true,
    },
    {
      id: 3,
      brand: "Adidas",
      name: 'Yeezy Boost 350 V2 "Zebra"',
      price: 220.0,
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&auto=format&fit=crop",
      badge: "Trending",
      isLiked: false,
    },
    {
      id: 4,
      brand: "New Balance",
      name: '550 "White/Green"',
      price: 120.0,
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop",
      badge: "New Arrival",
      isLiked: false,
    },
    {
      id: 5,
      brand: "Nike",
      name: 'Air Force 1 \'07 "Triple White"',
      price: 110.0,
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop",
      badge: "Classic",
      isLiked: true,
    },
    {
      id: 6,
      brand: "Jordan",
      name: 'Air Jordan 4 "Military Black"',
      price: 210.0,
      image:
        "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "Hot",
      isLiked: false,
    },
    {
      id: 7,
      brand: "Adidas",
      name: 'Samba OG "Black/White"',
      price: 100.0,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "Best Seller",
      isLiked: false,
    },
    {
      id: 8,
      brand: "Puma",
      name: 'Suede Classic XXI "Black/White"',
      price: 70.0,
      image:
        "https://images.unsplash.com/photo-1667863034256-13526b9c44ac?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "Sale",
      isLiked: false,
    },
    {
      id: 9,
      brand: "Nike",
      name: 'Dunk Low "Panda"',
      price: 115.0,
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop",
      badge: "Most Popular",
      isLiked: true,
    },
    {
      id: 10,
      brand: "Converse",
      name: 'Chuck Taylor All Star 70 "Black"',
      price: 85.0,
      image:
        "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800&auto=format&fit=crop",
      badge: "Classic",
      isLiked: false,
    },
    {
      id: 11,
      brand: "Vans",
      name: 'Old Skool "Black/White"',
      price: 65.0,
      image:
        "https://media.istockphoto.com/id/1436061608/photo/flying-colorful-womens-sports-shoe-on-pink-background-fashionable-stylish-sneaker.jpg?s=2048x2048&w=is&k=20&c=UksBoEBPfhdu2Hx68RcpGpR5cJ8y898ZRDn9Z16SFG8=",
      badge: "Essential",
      isLiked: false,
    },
    {
      id: 12,
      brand: "Nike",
      name: 'Air Max 90 "Infrared"',
      price: 140.0,
      image:
        "https://images.unsplash.com/photo-1600901171436-154bd145b03b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
      badge: "Retro",
      isLiked: false,
    },
    {
      id: 13,
      brand: "Asics",
      name: 'Gel-Kayano 14 "Silver/White"',
      price: 150.0,
      image:
        "https://images.unsplash.com/photo-1612528960495-2171f16b236d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "New Arrival",
      isLiked: false,
    },
    {
      id: 14,
      brand: "Salomon",
      name: 'XT-6 "White/Lunar Rock"',
      price: 190.0,
      image:
        "https://media.istockphoto.com/id/1865283031/photo/modern-sneakers-for-travelling-and-walking-casual-shoe-on-podium-like-rocky-mountain-peak.webp?a=1&b=1&s=612x612&w=0&k=20&c=yvJYHuXebsq9MWDTA1Xe64IRw0E6oHv_IuUtCSezfr0=",
      badge: "Tech Runner",
      isLiked: false,
    },
    {
      id: 15,
      brand: "Nike",
      name: 'SB Dunk Low "Travis Scott"',
      price: 150.0,
      image:
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&auto=format&fit=crop",
      badge: "Collab",
      isLiked: true,
    },
    {
      id: 16,
      brand: "Reebok",
      name: 'Club C 85 Vintage "White/Green"',
      price: 90.0,
      image:
        "https://images.unsplash.com/photo-1657109709491-fd8ad7d9fb1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "Vintage",
      isLiked: false,
    },
    {
      id: 17,
      brand: "New Balance",
      name: '990v6 "Grey/Castlerock"',
      price: 200.0,
      image:
        "https://images.unsplash.com/photo-1580902215262-9b941bc6eab3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      badge: "Made in USA",
      isLiked: false,
    },
    {
      id: 18,
      brand: "Nike",
      name: 'Zoom Vomero 5 "Photon Dust"',
      price: 160.0,
      image:
        "https://media.istockphoto.com/id/1411209216/photo/one-sports-shoe-isolated-over-neoned-background-urban-city-fashion-fitness-sport-training.webp?a=1&b=1&s=612x612&w=0&k=20&c=QHY6l8Q1hJ9OIFLRsaWY_O2T-lh6oj2OaDaBoXiwxDE=",
      badge: "Comfort",
      isLiked: false,
    },
    {
      id: 19,
      brand: "Adidas",
      name: 'Campus 00s "Core Black"',
      price: 110.0,
      image:
        "https://media.istockphoto.com/id/1317021486/photo/trendy-green-shoes-on-colorful-background-sporty-fashionable-shoes.jpg?s=2048x2048&w=is&k=20&c=H_R-qFGN1PtPbc_4kg1OuEX0OeuLTFbx4qXW4fp26BE=",
      badge: "Y2K Style",
      isLiked: false,
    },
    {
      id: 20,
      brand: "On Running",
      name: 'Cloudmonster "Undyed"',
      price: 170.0,
      image:
        "https://plus.unsplash.com/premium_photo-1663100769321-9eb8fe5a8e6b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "Running",
      isLiked: false,
    },
  ];

  // console.log(products);

  return (
    <div className="main">
      {products.map((elem) => {
        return <Card key={products.id} element={elem} />;
      })}
    </div>
  );
};

export default App;
