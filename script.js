const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories") //promise of response
    .then((res) => res.json()) //promise of json data
    .then((json) => displayCategories(json.categories));
};
const loadCategoriesCard = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategoriesCard(data.plants));
};
const displayCategoriesCard = (card) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  if (card.length == 0) {
    alert("no word detected");
    return;
  }

  //   {
  // "id": 1,
  // "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
  // "name": "Mango Tree",
  // "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
  // "category": "Fruit Tree",
  // "price": 500
  // },

  card.forEach((card) => {
    console.log(card);
    const word = document.createElement("div");
    word.innerHTML = `
     <div class="rounded-lg bg-white shadow-lg p-2">
              <div>
                <img class="rounded-lg" src="${card.image}" alt="" />
              </div>
              <div class="space-y-3 pt-5">
                <h3 class="lg:text-xl text-lg font-semibold">${card.name}</h3>
                <p>
                 ${card.description}
                </p>
                <div class="flex justify-between items-center gap-5">
                  <button
                    class="rounded-full cursor-pointer pr-5 py-1 px-2 bg-[#DCFCE7] text-green-700"
                  >
                    ${card.category}
                  </button>
                  <p>Rs.${card.price}</p>
                </div>
              </div>
            </div>

    
    `;
    cardContainer.append(word);
  });
};

const displayCategories = (categories) => {
  //  1. get the conatainer
  const CategoriesContainer = document.getElementById("categories-container");
  CategoriesContainer.innerHTML = "";

  //  2.get into every Categories
  for (let categorie of categories) {
    //  3. create element
    console.log(categorie);
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    <button onclick="loadCategoriesCard('${categorie.id}')" class="
    w-full text-left px-3 py-1 hover:bg-green-200 rounded
    ">
   
    ${categorie.category_name}
    </button>`;
    //  4. append into container
    CategoriesContainer.append(btnDiv);
  }
};

loadCategories();
