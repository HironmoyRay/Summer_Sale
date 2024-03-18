function getProduct(id) {
  const productField = document.getElementById(id);
  const productFieldValue = productField.innerText;
  return productFieldValue;
}
function getPrice(id) {
  const priceField = document.getElementById(id);
  const priceFieldValue = parseFloat(priceField.innerText);
  return priceFieldValue;
}

function setProduct(idNo) {
  const itemsContainer = document.getElementById("items-container");
  const li = document.createElement("li");
  const childCount = itemsContainer.childElementCount;
  li.innerText = childCount + 1 + ". " + getProduct(`product-${idNo}`);
  itemsContainer.appendChild(li);
}

function setPrice(id) {
  const totalPriceField = document.getElementById("total-price-field");
  const totalPriceFieldValue = parseFloat(totalPriceField.innerText);
  const newTotalPrice = getPrice(id) + totalPriceFieldValue;

  const discountField = document.getElementById("discount-field");
  const discountFieldValue = parseFloat(discountField.innerText);

  const withDiscountTotalField = document.getElementById(
    "with-discount-total-field"
  );
  const withDiscountTotalFieldValue = newTotalPrice - discountFieldValue;
  withDiscountTotalField.innerText = withDiscountTotalFieldValue;

  totalPriceField.innerText = newTotalPrice;

  purchaseButtonEnable(newTotalPrice);
  applyButtonEnable(newTotalPrice);

}

function discount(price) {
  const discount = (price * 20) / 100;
  return discount;
}




