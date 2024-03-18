function purchaseButtonEnable(price) {
  const btnPurchase = document.getElementById("btn-purchase");
  if (price > 0) {
    btnPurchase.removeAttribute("disabled");
  }
}

function applyButtonEnable(price) {
  const btnApply = document.getElementById("btn-apply");
  if (price >= 200) {
    btnApply.removeAttribute("disabled");
  }
}
