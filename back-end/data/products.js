const products = [


  {
    name: "Kids Emerald Omani Jubbah",
    category: "Kids",
    subCategory: "Omani",
    price: 899,
    image: "https://res.cloudinary.com/dgm809wdk/image/upload/v1771828110/kid1_nuwv1i.webp",
    description: "Premium emerald green omani style jubbah for kids.",
    sizes: [
      { ageRange: "0-5", stock: 10 },
      { ageRange: "6-10", stock: 8 },
      { ageRange: "11-15", stock: 6 }
    ]
  },
  {
    name: "Kids Royal Blue Arabic Jubbah",
    category: "Kids",
    subCategory: "Arabic",
    price: 999,
    image: "https://res.cloudinary.com/dgm809wdk/image/upload/v1771828110/kid5_ng1evy.webp",
    description: "Elegant royal blue arabic style jubbah.",
    sizes: [
      { ageRange: "0-5", stock: 7 },
      { ageRange: "6-10", stock: 9 },
      { ageRange: "11-15", stock: 5 }
    ]
  },
  {
    name: "Kids White Classic Jubbah",
    category: "Kids",
    subCategory: "Classic",
    price: 850,
    image: "https://res.cloudinary.com/dgm809wdk/image/upload/v1771828110/kid1_nuwv1i.webp",
    description: "Traditional white jubbah for special occasions.",
    sizes: [
      { ageRange: "0-5", stock: 12 },
      { ageRange: "6-10", stock: 10 },
      { ageRange: "11-15", stock: 6 }
    ]
  },
  {
    name: "Kids Grey Modern Jubbah",
    category: "Kids",
    subCategory: "Modern",
    price: 920,
    image: "https://res.cloudinary.com/dgm809wdk/image/upload/v1771828110/kid2_hvohdb.webp",
    description: "Modern cut grey kids jubbah.",
    sizes: [
      { ageRange: "0-5", stock: 8 },
      { ageRange: "6-10", stock: 6 },
      { ageRange: "11-15", stock: 4 }
    ]
  },
  {
    name: "Kids Navy Omani Jubbah",
    category: "Kids",
    subCategory: "Omani",
    price: 980,
    image: "https://res.cloudinary.com/dgm809wdk/image/upload/v1771828110/kid5_ng1evy.webp",
    description: "Navy blue omani style jubbah for kids.",
    sizes: [
      { ageRange: "0-5", stock: 6 },
      { ageRange: "6-10", stock: 7 },
      { ageRange: "11-15", stock: 5 }
    ]
  },
  {
    name: "Kids Sand Arabic Jubbah",
    category: "Kids",
    subCategory: "Arabic",
    price: 950,
    image: "https://res.cloudinary.com/dgm809wdk/image/upload/v1771828110/kid4_gerqir.webp",
    description: "Soft sand color arabic jubbah.",
    sizes: [
      { ageRange: "0-5", stock: 9 },
      { ageRange: "6-10", stock: 8 },
      { ageRange: "11-15", stock: 5 }
    ]
  },
  {
    name: "Kids Black Modern Jubbah",
    category: "Kids",
    subCategory: "Modern",
    price: 1100,
    image: "https://res.cloudinary.com/dgm809wdk/image/upload/v1771828110/kid2_hvohdb.webp",
    description: "Premium black modern jubbah.",
    sizes: [
      { ageRange: "0-5", stock: 5 },
      { ageRange: "6-10", stock: 6 },
      { ageRange: "11-15", stock: 3 }
    ]
  },
  {
    name: "Kids Beige Classic Jubbah",
    category: "Kids",
    subCategory: "Classic",
    price: 890,
    image: "https://res.cloudinary.com/dgm809wdk/image/upload/v1771828110/kid4_gerqir.webp",
    description: "Comfortable beige classic kids jubbah.",
    sizes: [
      { ageRange: "0-5", stock: 11 },
      { ageRange: "6-10", stock: 7 },
      { ageRange: "11-15", stock: 4 }
    ]
  },

  // ==========================
  // 👨 MEN JUBBAH (16–30 AGE)
  // ==========================

  {
    name: "Men Cream Omani Jubbah",
    category: "Men",
    subCategory: "Omani",
    price: 1499,
    image: "https://res.cloudinary.com/dgm809wdk/image/upload/v1771828110/men2_d4zsjs.webp",
    description: "Premium cream omani jubbah with tassel.",
    sizes: [
      { ageRange: "16-20", stock: 5 },
      { ageRange: "21-25", stock: 7 },
      { ageRange: "26-30", stock: 4 }
    ]
  },
  {
    name: "Men Navy Arabic Jubbah",
    category: "Men",
    subCategory: "Arabic",
    price: 1699,
    image: "https://res.cloudinary.com/dgm809wdk/image/upload/v1771828111/men5_w8ueda.webp",
    description: "Elegant navy arabic style jubbah.",
    sizes: [
      { ageRange: "16-20", stock: 6 },
      { ageRange: "21-25", stock: 5 },
      { ageRange: "26-30", stock: 3 }
    ]
  },
  {
    name: "Men White Classic Jubbah",
    category: "Men",
    subCategory: "Classic",
    price: 1399,
    image: "https://res.cloudinary.com/dgm809wdk/image/upload/v1771828110/men1_zuw6av.jpg",
    description: "Traditional white jubbah.",
    sizes: [
      { ageRange: "16-20", stock: 8 },
      { ageRange: "21-25", stock: 6 },
      { ageRange: "26-30", stock: 4 }
    ]
  },
  {
    name: "Men Grey Modern Jubbah",
    category: "Men",
    subCategory: "Modern",
    price: 1550,
    image: "https://res.cloudinary.com/dgm809wdk/image/upload/v1771828111/men5_w8ueda.webp",
    description: "Modern grey slim fit jubbah.",
    sizes: [
      { ageRange: "16-20", stock: 4 },
      { ageRange: "21-25", stock: 6 },
      { ageRange: "26-30", stock: 5 }
    ]
  },
  {
    name: "Men Dark Green Omani Jubbah",
    category: "Men",
    subCategory: "Omani",
    price: 1799,
    image: "https://res.cloudinary.com/dgm809wdk/image/upload/v1771828110/men4_gmu22q.webp",
    description: "Dark green omani style with embroidery.",
    sizes: [
      { ageRange: "16-20", stock: 3 },
      { ageRange: "21-25", stock: 5 },
      { ageRange: "26-30", stock: 4 }
    ]
  },
  {
    name: "Men Black Arabic Jubbah",
    category: "Men",
    subCategory: "Arabic",
    price: 1999,
    image: "https://res.cloudinary.com/dgm809wdk/image/upload/v1771828110/men1_zuw6av.jpg",
    description: "Luxury black arabic jubbah.",
    sizes: [
      { ageRange: "16-20", stock: 4 },
      { ageRange: "21-25", stock: 5 },
      { ageRange: "26-30", stock: 2 }
    ]
  },
  {
    name: "Men Sand Classic Jubbah",
    category: "Men",
    subCategory: "Classic",
    price: 1599,
    image: "https://res.cloudinary.com/dgm809wdk/image/upload/v1771828110/men3_wuh5s1.webp",
    description: "Elegant sand classic jubbah.",
    sizes: [
      { ageRange: "16-20", stock: 6 },
      { ageRange: "21-25", stock: 4 },
      { ageRange: "26-30", stock: 3 }
    ]
  },
  {
    name: "Men Royal Blue Modern Jubbah",
    category: "Men",
    subCategory: "Modern",
    price: 1899,
    image: "https://res.cloudinary.com/dgm809wdk/image/upload/v1771828110/men4_gmu22q.webp",
    description: "Royal blue premium modern jubbah.",
    sizes: [
      { ageRange: "16-20", stock: 5 },
      { ageRange: "21-25", stock: 6 },
      { ageRange: "26-30", stock: 3 }
    ]
  }

];

export default products;