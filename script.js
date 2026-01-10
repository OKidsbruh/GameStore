const products = [
  {
    id: 1,
    title: "EA SPORTS FC 2026",
    price: 2999,
    category: "Simulator",
    platform_ps: true,
    platform_pc: true,
    platform_xbox: true,
    inStock: true,
    discount: false,
    isTop: true,
    feedback: "Найкращий футбольний симулятор року!",
    description: "Революційний футбольний симулятор з гіперреалістичною фізикою Hypermotion V та оновленими складами команд.",
    age_limit: false,
    image: "https://gaming-cdn.com/images/news/articles/13780/cover/1000x563/ea-has-revealed-the-cover-for-ea-sports-fc-26-with-jude-bellingham-and-jamal-musiala-cover6877b6af3319b.jpg",
    OS: "Windows",
    region: "all",
  },
  {
    id: 2,
    title: "ARC Raiders: Survival",
    price: 1399,
    category: "Action",
    platform_ps: true,
    platform_pc: true,
    platform_xbox: true,
    inStock: true,
    discount: false,
    isTop: true,
    feedback: "Захоплюючий візуал та динаміка.",
    description: "Напружений кооперативний шутер від третьої особи проти безжальних машин у постапокаліптичному світі.",
    age_limit: true,
    image: "https://cdn1.epicgames.com/spt-assets/9e8b37541e614575b4de303d2c2e44cf/arc-raiders-weavs.jpg?resize=1&w=480&h=270&quality=medium",
    OS: "Windows",
    region: "all",
  },
  {
    id: 3,
    title: "CyberQuest 2077: Phantom Edition",
    price: 1699,
    category: "RPG",
    platform_ps: true,
    platform_pc: true,
    platform_xbox: false,
    inStock: true,
    discount: true,
    isTop: true,
    feedback: "Неймовірна глибина сюжету.",
    description: "Глибока футуристична рольова гра у відкритому світі, де кожен ваш вибір кардинально змінює фінал історії.",
    age_limit: true,
    image: "https://assets.nintendo.com/image/upload/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000091968/97c8fa5b8930a31d2548e6fe22cc7b878bc5d7b8ddf57a88f0fd7f85ff85f5bf",
    OS: "Windows",
    region: "EU",
  },
  {
    id: 4,
    title: "Mystic Vale: Origins",
    price: 499,
    category: "Adventure",
    platform_ps: false,
    platform_pc: true,
    platform_xbox: false,
    inStock: false,
    discount: false,
    isTop: false,
    feedback: "Дуже атмосферна та спокійна гра.",
    description: "Атмосферна пригода про відновлення проклятих земель за допомогою магії природи та стародавніх рун.",
    age_limit: false,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnVLstjIGnKhQSRszdDHUAO9SBL9BOSsegrA&s",
    OS: "Windows",
    region: "all",
  },
  {
    id: 5,
    title: "Galaxy Racer: Overdrive",
    price: 1199,
    category: "Racing",
    platform_ps: true,
    platform_pc: true,
    platform_xbox: true,
    inStock: true,
    discount: true,
    isTop: false,
    feedback: "Шалені швидкості та неоновий стиль.",
    description: "Екстремальні аркадні перегони на космічних кораблях крізь неонові мегаполіси з шаленою швидкістю.",
    age_limit: false,
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/760680/capsule_616x353.jpg?t=1571760612",
    OS: "Windows",
    region: "all",
  },
  {
    id: 6,
    title: "Steel Arena: Titan Wars",
    price: 1899,
    category: "Action",
    platform_ps: true,
    platform_pc: true,
    platform_xbox: true,
    inStock: true,
    discount: false,
    isTop: true,
    feedback: "Епічні битви сталевих гігантів.",
    description: "Високотехнологічний екшн про тактичні битви гігантських бойових роботів у зруйнованих містах.",
    age_limit: true,
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3037010/capsule_616x353.jpg?t=1726041990",
    OS: "Windows",
    region: "US",
  },
  {
    id: 7,
    title: "Ocean Whisper VR",
    price: 899,
    category: "VR",
    platform_ps: false,
    platform_pc: true,
    platform_xbox: false,
    inStock: true,
    discount: true,
    isTop: false,
    feedback: "Ідеально для релаксації.",
    description: "Медитативне занурення у таємничий підводний світ та дослідження коралових рифів у віртуальній реальності.",
    age_limit: false,
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/422760/capsule_616x353.jpg?t=1517860245",
    OS: "Windows",
    region: "all",
  },
  {
    id: 8,
    title: "Kingdoms: Castle Builder",
    price: 1249,
    category: "Strategy",
    platform_ps: true,
    platform_pc: true,
    platform_xbox: false,
    inStock: false,
    discount: false,
    isTop: false,
    feedback: "Глибока економічна модель.",
    description: "Комплексна стратегія будівництва, розвитку економіки та оборони власного середньовічного королівства.",
    age_limit: false,
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3940030/aa29b6621df4407cb2ce047325f7e0da9d1ab30c/header.jpg?t=1764777429",
    OS: "Windows",
    region: "EU",
  },
  {
    id: 9,
    title: "Shadow Strike: Global Ops",
    price: 1599,
    category: "Shooter",
    platform_ps: true,
    platform_pc: true,
    platform_xbox: true,
    inStock: true,
    discount: false,
    isTop: true,
    feedback: "Високий рівень змагань.",
    description: "Кіберспортивний командний шутер з реалістичною балістикою та акцентом на тактичну взаємодію.",
    age_limit: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5f34X6oXYNUMZQrf2SHT-oWjxiirJ2Bp7YQ&s",
    OS: "Windows",
    region: "all",
  },
  {
    id: 10,
    title: "Frozen Realms: Eternal Winter",
    price: 999,
    category: "Strategy",
    platform_ps: false,
    platform_pc: true,
    platform_xbox: true,
    inStock: true,
    discount: true,
    isTop: false,
    feedback: "Хардкорне виживання.",
    description: "Стратегія виживання колонії в суворих умовах льодовикового періоду з важкими моральними виборами.",
    age_limit: false,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy8NZ0mhsPv-yMfaVbVzc_hOe05mei6h3nvQ&s",
    OS: "Windows",
    region: "all",
  },
  {
    id: 11,
    title: "Dragon Forge: Slayer's Path",
    price: 1450,
    category: "RPG",
    platform_ps: true,
    platform_pc: true,
    platform_xbox: false,
    inStock: true,
    discount: false,
    isTop: false,
    feedback: "Епічні битви з босами.",
    description: "Масштабне героїчне фентезі з відкритим світом, присвячене полюванню на стародавніх драконів.",
    age_limit: true,
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1163930/header.jpg?t=1679256885",
    OS: "Windows",
    region: "all",
  },
  {
    id: 12,
    title: "Pixel Farm Deluxe",
    price: 399,
    category: "Simulator",
    platform_ps: false,
    platform_pc: true,
    platform_xbox: true,
    inStock: true,
    discount: true,
    isTop: false,
    feedback: "Дуже мила графіка.",
    description: "Затишний симулятор фермера у піксельному стилі з можливістю крафту, риболовлі та спілкування.",
    age_limit: false,
    image: "https://cf.geekdo-images.com/ntcze9T3C1imHxyAiJog-g__opengraph/img/4YpG6UP3Hay1h-YVQuXHxKK9wMQ=/0x189:950x688/fit-in/1200x630/filters:strip_icc()/pic6100546.png",
    OS: "Windows",
    region: "all",
  },
  {
    id: 13,
    title: "Battle Drones: Sky Arena",
    price: 1099,
    category: "Shooter",
    platform_ps: true,
    platform_pc: true,
    platform_xbox: true,
    inStock: false,
    discount: false,
    isTop: true,
    feedback: "Унікальний геймплей.",
    description: "Адреналінові повітряні бої на кастомізованих бойових дронах з повною свободою переміщення.",
    age_limit: true,
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2205520/capsule_616x353.jpg?t=1719456535",
    OS: "Windows",
    region: "EU",
  },
];



let cart = [];
const minPriceInput = document.getElementById("min-price-input");
const cartInfo=document.getElementById("cart-info");
const productsContainer = document.getElementById("products-container");
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const resultsInfo = document.getElementById("results-info");

function loadCart(){
  const savedCart= localStorage.getItem("cart");
  if (savedCart){
    try{
      const parse =  JSON.parse(savedCart);
      if(Array.isArray(parse)){
        cart = parse;
      } else{
        cart=[];
      }
    } catch(error){
      cart = [];
    }
  } else{
    cart = [];
  }
}




function saveCart(){
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount(){
  cartInfo.textContent=`Товарів у кошику ${cart.length}`;
}


function renderProducts(productsArray){
productsArray.forEach(function(product){
  const card =document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `
    <img src="${product.image}">
    <h3>${product.title}</h3>
    <p class="product-category">Категорія: ${product.category}</p>
    <p class="product-description">${product.description}</p>
    <p class="product-price">Ціна: ${product.price}₴</p>
    <button class="add-to-card-btn">Додати в кошик</button>
  `;

  const addButton = card.querySelector(".add-to-card-btn");
  addButton.addEventListener("click", function(){
    cart.push(product.id);
    saveCart();
    updateCartCount();
    console.log(`Поточний список товарів: ${cart}`);
  }); 

  productsContainer.appendChild(card);
});
}

function filterAndRender() {
  const searchText = searchInput.value.toLowerCase().trim();
  const selectedCategory = categoryFilter.value;
  const minPriceValue = minPriceInput.value;

  const filteredProducts = products.filter(function (product) {
    const title = product.title.toLowerCase();
    const description = product.description.toLowerCase();

    const matchesText =
      searchText === "" ||
      title.includes(searchText) ||
      description.includes(searchText);

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const matchesPrice =
      minPriceValue === "" ||
      product.price >= Number(minPriceValue);

    return matchesText && matchesCategory && matchesPrice;
  });
  function updateResultsInfo(count) {
  if (count > 0) {
    resultsInfo.textContent = `Знайдено товарів: ${count}`;
  } else {
    resultsInfo.textContent = "За вашим запитом товарів не знайдено.";
  }
}

  productsContainer.innerHTML = "";
  renderProducts(filteredProducts);
  updateResultsInfo(filteredProducts.length);
}

loadCart();
updateCartCount();
filterAndRender();
minPriceInput.addEventListener("input", filterAndRender);
searchInput.addEventListener("input", filterAndRender);
categoryFilter.addEventListener("change", filterAndRender);


function clearcart(){
  localStorage.removeItem("cart");
  loadCart();
  updateCartCount();
}
