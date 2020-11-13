// ITERATION 1

function updateSubtotal(product) {

  let price = Number(product.querySelector('.price span').innerText)
  let quantity = Number(product.querySelector('.quantity input').valueAsNumber)
  let subtotalPrice = Number(price * quantity)
  let subtotalSpan = product.querySelector('.subtotal span')

  subtotalSpan.innerText = subtotalPrice;

  return subtotalPrice;

}

// ITERATION 2 & 3

function calculateAll() {

  let total = 0;
  const products = document.querySelectorAll('.product');
  products.forEach(product => {

    updateSubtotal(product)

    total += updateSubtotal(product)
    document.querySelector('#total-value span').innerText = total

  });
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.closest('tr').remove()
  calculateAll();

}

// ITERATION 5

function createProduct() {

  const tableProducts = document.querySelector("tbody")

  let productInput = document.getElementById('inputProduct').value
  let productPrice = document.getElementById('inputPrice').value

  let template = `<td class="name"> <span>${productInput}</span>  </td>  <td class="price">$<span>${productPrice}</span></td>        <td class="quantity">    <input type="number" value="0" min="0" placeholder="Quantity" />        </td>        <td class="subtotal">$<span>0</span></td>        <td class="action">          <button class="btn btn-remove">Remove</button>        </td>`
  let row = tableProducts.insertRow();
  row.className = 'product';
  row.innerHTML = template;

  calculateAll()

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const tableProducts = document.querySelectorAll('.product');
  tableProducts.forEach(product => {
    product.querySelector('.btn-remove').addEventListener('click', removeProduct)
  });

  const newProductButton = document.getElementById('create');
  newProductButton.addEventListener('click', createProduct);
}
    
)

