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
  const discountField = document.getElementById("discount-field");
  const withDiscountTotalField = document.getElementById(
    "with-discount-total-field"
  );
  const totalPriceFieldValue = parseFloat(totalPriceField.innerText);
  const newTotalPrice = getPrice(id) + totalPriceFieldValue;
  totalPriceField.innerText = newTotalPrice;
  purchaseButtonEnable(newTotalPrice);
  applyButtonEnable(newTotalPrice);
  // console.log(typeof(newTotalPrice));
  // if (newTotalPrice >= 200) {
  //   const discountTotal = discount(newTotalPrice);
  //   console.log(typeof(discountTotal));
  //   discountField.innerText = discountTotal;
  //   withDiscountTotalField.innerText = newTotalPrice - discountTotal;
  // } else {
  //   withDiscountTotalField.innerText = newTotalPrice;
  // }
}

function discount(price) {
  const discount = (price * 20) / 100;
  return discount;
}

function purchaseButtonEnable(price){
  const btnPurchase = document.getElementById("btn-purchase");
  if(price>0){
    btnPurchase.removeAttribute("disabled");
  }
}

function applyButtonEnable(price){
  const btnApply = document.getElementById("btn-apply");
  if(price>=200){
    btnApply.removeAttribute("disabled");
    }
  }

function isCouponCode(){
  const couponInputField = document.getElementById("coupon-input-field");
  const couponInputFieldValue = couponInputField.innerText;
  if(couponInputFieldValue === SELL200){
    return true;
  }
  return false;

  function handleApplyClick(){
    
  }
}