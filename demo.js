const couponDetails = {
  "EDU18": "For Your Register Course",
  "EDU20": "For Your Register Course",
  "EDU22": "For Your Register Course",
  "EDU24": "For Your Register Course",
  "EDU25": "For Your Register Course",
  "TAL5": "For Your Register Course",
  "TAL6": "For Your Register Course",
  "TAL7": "For Your Register Course",
  "TAL8": "For Your Register Course",
  "TAL9": "For Your Register Course",
  "TAL10": "For Your Register Course"
};

function redeemCoupon() {
  const name = document.getElementById("username").value.trim();
  const codeInput = document.getElementById("couponCode").value.trim();
  const code = codeInput.toUpperCase();

  if (!name || !codeInput) {
    alert("⚠️ Please enter both your name and the coupon code.");
    return;
  }

  if (codeInput !== code) {
    alert("❌ Coupon code must be in uppercase (e.g., EDU18).");
    return;
  }

  if (!couponDetails[code]) {
    alert("❌ Invalid coupon code. Please try again.");
    return;
  }

  const redirectUrl = `thankyou.html?name=${encodeURIComponent(name)}&code=${encodeURIComponent(code)}`;
  window.location.href = redirectUrl;
}
