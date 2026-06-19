let products = [];
let filteredProducts = [];
let cart = [];

const productsContainer = document.getElementById("products");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const cartCount = document.getElementById("cartCount");
const statusText = document.getElementById("status");

fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data => {
    products = data;
    filteredProducts = data;

    displayProducts(filteredProducts);
    displayStats(products);

    statusText.innerText = "Products Loaded Successfully";
})
.catch(error => {
    console.log(error);
    statusText.innerText = "Failed To Load Products";
})
.finally(() => {
    console.log("API Request Completed");
});

function displayProducts(data) {

    productsContainer.innerHTML = "";

    data.forEach(product => {

        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.image}">
            <h3>${product.title}</h3>
            <p><strong>Price:</strong> $${product.price}</p>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Rating:</strong> ${product.rating.rate}</p>
            <button class="add-btn" onclick="addToCart(${product.id})">
                Add To Cart
            </button>
            <button class="remove-btn" onclick="removeFromCart(${product.id})">
                Remove
            </button>
        `;

        productsContainer.appendChild(card);
    });
}

searchInput.addEventListener("keyup", () => {

    const searchValue = searchInput.value.toLowerCase();

    filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchValue)
    );

    categoryFilter();
});

categorySelect.addEventListener("change", categoryFilter);

function categoryFilter() {

    const categoryValue = categorySelect.value;

    let result = products.filter(product =>
        product.title.toLowerCase()
        .includes(searchInput.value.toLowerCase())
    );

    if (categoryValue !== "all") {
        result = result.filter(product =>
            product.category === categoryValue
        );
    }

    displayProducts(result);
}

function addToCart(id) {

    const product = products.find(item => item.id === id);

    cart.push(product);

    cartCount.innerText = cart.length;
}

function removeFromCart(id) {

    const index = cart.findIndex(item => item.id === id);

    if (index !== -1) {
        cart = cart.filter((item, i) => i !== index);
    }

    cartCount.innerText = cart.length;
}

function displayStats(data) {

    document.getElementById("totalProducts").innerText = data.length;

    const totalPrice = data.reduce((sum, item) => {
        return sum + item.price;
    }, 0);

    const averagePrice = totalPrice / data.length;

    document.getElementById("averagePrice").innerText =
        "$" + averagePrice.toFixed(2);

    const highestProduct = [...data].sort((a, b) =>
        b.price - a.price
    )[0];

    const lowestProduct = [...data].sort((a, b) =>
        a.price - b.price
    )[0];

    document.getElementById("highestPrice").innerText =
        highestProduct.title;

    document.getElementById("lowestPrice").innerText =
        lowestProduct.title;
}