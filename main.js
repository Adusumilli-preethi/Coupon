// Define valid coupons and what they are for
const couponDetails = {
    "EDU18": "For Your Register Course",
    "EDU20": "For Your Register Course",
    "EDU22": "For Your Register Course",
    "EDU24": "FFor Your Register Course",
    "EDU25": "For Your Register Course",
    "TAL5": "For Your Register Course",
    "TAL6": "For Your Register Course",
    "TAL7": "For Your Register Course",
    "TAL8": "For Your Register Course",
    "TAL9": "For Your Register Course",
    "TAL10": "For Your Register Course",


};

function redeemCoupon() {
    const name = document.getElementById("username").value.trim();
    const code = document.getElementById("couponCode").value.trim().toUpperCase();

    if (!name || !code) {
        alert("⚠️ Please enter both your name and the coupon code.");
        return;
    }

    if (!couponDetails[code]) {
        alert("❌ Invalid coupon code. Please check and try again.");
        return;
    }

    // 🎉 Success message
    alert(`Hi ${name},\n\n🎉 Congratulations! You have successfully redeem your coupon [${code}] for "${couponDetails[code]}".\n\nFor further information, please visit our Academy.`);
}
