let cart = [];

function addToCart(name, price) {
  cart.push({name, price});
  updateCart();
}

function updateCart() {
  let list = document.getElementById("cart-items");
  let total = 0;
  list.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item.name + " - ₹" + item.price;
    list.appendChild(li);
    total += item.price;
  });

  document.getElementById("total").innerText = total;
  document.getElementById("cart-count").innerText = cart.length;
}

function checkout() {
  let phone = "917009362775";
  let message = "Order:%0A";

  cart.forEach(item => {
    message += item.name + " - ₹" + item.price + "%0A";
  });

  let url = "https://wa.me/" + phone + "?text=" + message;
  window.open(url, "_blank");
}
