let products = [
  {
    id: 1,
    name: "Iphone 15 Pro Max",
    price: 31000000,
    brand: "Apple",
    thumbnail:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhoanghamobile.com%2Fdien-thoai-di-dong%2Fapple-iphone-15-pro-128gb-chinh-hang-vn-a&psig=AOvVaw3EGZYHxVygjVGbFkVPxTbt&ust=1700973399918000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIiPi-yp3oIDFQAAAAAdAAAAABAJ",
    rating: 5,
  },
  {
    id: 2,
    name: "Iphone 15 Pro Max",
    price: 31000000,
    brand: "Apple",
    thumbnail:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhoanghamobile.com%2Fdien-thoai-di-dong%2Fapple-iphone-15-pro-128gb-chinh-hang-vn-a&psig=AOvVaw3EGZYHxVygjVGbFkVPxTbt&ust=1700973399918000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIiPi-yp3oIDFQAAAAAdAAAAABAJ",
    rating: 5,
  },
  {
    id: 3,
    name: "Iphone 15 Pro Max",
    price: 31000000,
    brand: "Apple",
    thumbnail:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhoanghamobile.com%2Fdien-thoai-di-dong%2Fapple-iphone-15-pro-128gb-chinh-hang-vn-a&psig=AOvVaw3EGZYHxVygjVGbFkVPxTbt&ust=1700973399918000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIiPi-yp3oIDFQAAAAAdAAAAABAJ",
    rating: 5,
  },
  {
    id: 4,
    name: "Iphone 15 Pro Max",
    price: 31000000,
    brand: "Apple",
    thumbnail:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhoanghamobile.com%2Fdien-thoai-di-dong%2Fapple-iphone-15-pro-128gb-chinh-hang-vn-a&psig=AOvVaw3EGZYHxVygjVGbFkVPxTbt&ust=1700973399918000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIiPi-yp3oIDFQAAAAAdAAAAABAJ",
    rating: 5,
  },
  {
    id: 5,
    name: "Iphone 15 Pro Max",
    price: 31000000,
    brand: "Apple",
    thumbnail:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhoanghamobile.com%2Fdien-thoai-di-dong%2Fapple-iphone-15-pro-128gb-chinh-hang-vn-a&psig=AOvVaw3EGZYHxVygjVGbFkVPxTbt&ust=1700973399918000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIiPi-yp3oIDFQAAAAAdAAAAABAJ",
    rating: 5,
  },
];
const mainTitle = document.createElement("h2");
mainTitle.innerText = "List product";
const productDivList = document.createElement("div");
productDivList.innerHTML = "";
function renderProducts(products) {
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
            <div class="course-item-image">
                <img src="${product.thumbnail}" alt="">
            </div>
            <div class="course-item-info p-3">
                <h2 class="fs-5 mb-4 text-dark">${product.name}</h2>
                <div class="d-flex justify-content-between align-items-center fw-light text-black-50">
                    <p class="type">${product.brand}</p>
                    <p class="rating">
                        <span>3</span>
                        <span class="text-warning"><i class="fa-solid fa-star"></i></span>
                    </p>
                </div>
                <p class="price text-danger fs-5">${product.price} </p>
            </div>`;
    productDivList.appendChild(productDiv);
  });
}
renderProducts(products);
