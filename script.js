let cart = {};

function toggleCart() {
  document.getElementById("cart").classList.toggle("hidden");
}

function addToCart(name, price) {
  cart[name] = cart[name] ? cart[name] + 1 : 1;
  renderCart(price);
}

function renderCart(price) {
  const items = document.getElementById("cart-items");
  items.innerHTML = "";
  let total = 0;

  for (let item in cart) {
    total += cart[item] * price;
    items.innerHTML += `
      <div>
        ${item} x ${cart[item]}
        <button onclick="cart['${item}']--; if(cart['${item}']<=0) delete cart['${item}']; renderCart(${price})">-</button>
        <button onclick="cart['${item}']++; renderCart(${price})">+</button>
      </div>
    `;
  }

  document.getElementById("cart-total").innerText = "Total: $" + total;
}
