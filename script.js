const categories = [
 {
  name: "Fans",
  image: "assets/f1.png",
  items: [
    {
      name: "Ceiling Fan",
      image: "assets/fans-display.jpg"
    },
    {
      name: "Table Fan",
      image: "assets/img21.webp"
    },
    {
      name: "Wall Fan",
      image: "assets/img16.jpg"
    },
    {
      name: "cabin Fan",
      image: "assets/img22.jpg"
    },
    {
      name: "pedestall Fan",
      image: "assets/img18.jpg"
    },
  ]
},
 {
  name: "Air Coolers",
  image: "assets/c1.png",
  items: [
    {
      name: "Air cooler 16 inch",
      image: "assets/img14.png"
    },
    {
      name: "Air cooler 12 inch",
      image: "assets/img10.png"
    },
    {
      name: "Air cooler 75ltr",
      image: "assets/img9.png"
    }
  ]
},
{
  name: "kitchen appliances",
  image: "assets/k1.png",
  items: [
    {
      name: "Mixer Grinder cello ",
      image: "assets/img36.jpeg"
    },
    {
      name: "Hand Blender ",
      image: "assets/img35.jpg"
    },
  ]
},
{
  name: "TV & Audio",
  image: "assets/tv.png",
  items: [
    {
      name: "led tv 43 inch",
      image: "assets/img24.jpg"
    },
    {
      name: "Party speaker ",
      image: "assets/img29.jpg"
    },
    {
      name: "Home thatre ",
      image: "assets/img26.jpg"
    },
    {
      name: "Sound Bar",
      image: "assets/img28.jpg"
    },
  ]
},
{
  name: "Lighting",
  image: "assets/l1.png",
  items: [
    {
      name: "led bulb",
      image: "assets/img30.jpg"
    },
    {
      name: "Tubelight 20,30,40 Watts ",
      image: "assets/img33.jpg"
    },
  ]
},
{
  name: "Electrical Essentials",
  image: "assets/ee.png",
  items: [
    {
      name: "Switches & sockets",
      image: "assets/img32.jpg"
    },
    {
      name: "wires & cables",
      image: "assets/img34.webp"
    },
    {
      name: "Extention boards",
      image: "assets/img31.jpg"
    },
  ]
},
{
  name: "Heating & Water Appliances",
  image: "assets/hw1.png",
  items: [
    {
      name: "Surya geyser 5 ltr",
      image: "assets/img41.jpeg"
    },
    {
      name: "Bajaj flora 3 ltr",
      image: "assets/img39.jpg"
    },
    {
      name: "Gas geyser ",
      image: "assets/img40.jpg"
    },
    {
      name: "Ro purifer ",
      image: "assets/img38.jpg"
    },
    {
      name: "Ro purifer 9 ltr ",
      image: "assets/img37.jpg"
    },
  ]
},
{
  name: "Accessories",
  image: "assets/a1.png",
  items: [
    {
      name: "Mobile accessoires",
      image: "assets/img42.jpg"
    },
    {
      name: "Torches",
      image: "assets/img43.jpg"
    },
    {
      name: "bt speakers",
      image: "assets/img44.jpg"
    },
  ]
},
];
const brands=["Usha","Bajaj","Polycab","Crompton","Havells","Surya","Cello","Ubon","Orient","Anchor",
  "Takai","Iconic","Beston","Airtec","Cambreeze","Aeronics","Jainex","GM","Taparia","Sumeet"];
const $=id=>document.getElementById(id);
$("year").textContent=new Date().getFullYear();
$("categories").innerHTML=categories.map((c,i)=>`<article class="category" data-cat="${i}"><div class="catpic"><img src="${c.image}" alt="${c.name}"></div><div class="catname">${c.name}<span>Explore →</span></div></article>`).join("");
$("brandsList").innerHTML=brands.map(b=>`<div class="brand">${b}</div>`).join("");
$("categories").addEventListener("click",e=>{
 const card=e.target.closest("[data-cat]"); if(!card)return;
 const c=categories[Number(card.dataset.cat)];
 $("productTitle").textContent=c.name;
$("productItems").innerHTML = c.items.map(p => `
  <div class="product">
    <img src="${p.image}" alt="${p.name}">
    <strong>${p.name}</strong>
  </div>
`).join("");
 $("productOverlay").classList.add("show"); document.body.style.overflow="hidden";
});
function close(){ $("productOverlay").classList.remove("show"); document.body.style.overflow=""; }
document.querySelectorAll("[data-close]").forEach(b=>b.addEventListener("click",close));
$("productOverlay").addEventListener("click",e=>{if(e.target===$("productOverlay"))close();});
$("menu").addEventListener("click",()=>$("nav").classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>$("nav").classList.remove("open")));
