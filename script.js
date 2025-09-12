const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/plants") //promise of response
    .then((res) => res.json()) //promise of json data
    .then((json) => displayCategories(json));
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
    <button class="
    w-full text-left px-3 py-1 hover:bg-green-200 rounded
    ">
    Categories - ${categorie.name}
    </button>`;
    //  4. append into container
    CategoriesContainer.append(btnDiv);
  }
};
loadCategories();
