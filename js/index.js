// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = Number(product.querySelector('.price span').innerText)
  let quantity = Number(product.querySelector('.quantity input').valueAsNumber)
  let subtotalPrice = Number(price * quantity)
  let subtotalSpan = product.querySelector('.subtotal span')

  subtotalSpan.innerText = subtotalPrice;
}


// ITERATION 2 & 3

function calculateAll() {


  let total = 0;
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    updateSubtotal(product)
    total += Number(product.querySelector('.subtotal span').innerText)
    document.querySelector('#total-value span').innerText = total
    console.log(total)
  });
}


function removeProduct(event) {
  const target = event.currentTarget;
  target.closest('tr').remove()
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let boto = document.querySelector('btn-remove');

  const tableProducts = document.querySelectorAll('.product');

  tableProducts.forEach(product => {
    product.querySelector('.btn-remove').addEventListener('click', removeProduct)

    console.log("botó actiu")
  });

  //... your code goes here
}
)
