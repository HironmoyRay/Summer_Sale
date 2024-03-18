function handleApplyClick() {
    // console.log("hello");
    const couponInputField = document.getElementById("coupon-input-field");
    const couponInputFieldValue = couponInputField.value;
    const couponCode = "SELL200";
    if (couponCode === couponInputFieldValue) {
      const handleTotalPriceField = document.getElementById("total-price-field");
      const handleTotalPriceFieldValue = handleTotalPriceField.innerText;
      console.log(handleTotalPriceFieldValue);
  
      const handleDiscountField = document.getElementById("discount-field");
      const handleDiscountFieldValue = discount(handleTotalPriceFieldValue);
      handleDiscountField.innerText = handleDiscountFieldValue;
  
      const handleTotalField = document.getElementById(
        "with-discount-total-field"
      );
      const handleTotalValue =
        handleTotalPriceFieldValue - handleDiscountFieldValue;
      handleTotalField.innerText = handleTotalValue;
    }
  }