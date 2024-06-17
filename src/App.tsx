interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

async function getProducts(): Promise<Product[]> {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  return data as Product[];
}

function displayProducts(products: Product[]) {
  const container = document.getElementById('card-container');
  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h3>${product.title}</h3>
      <p>$${product.price}</p>
      <img class="card-image" src="${product.image}" alt="${product.title}">
      <div class="card-details">
        <p>${product.description}</p>
        <p>Category: ${product.category}</p>
      </div>
    `;
    card.addEventListener('click', () => {
      const details = card.querySelector('.card-details');
      details!.style.display = details!.style.display === 'none' ? 'block' : 'none';
    });
    container!.appendChild(card);
  });
}

async function main() {
  const products = await getProducts();
  displayProducts(products);
}

main();
