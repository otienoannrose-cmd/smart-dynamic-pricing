
document.getElementById("calculateBtn").addEventListener("click", calculatePrice);

function calculatePrice() {
    let basePrice = parseFloat(document.getElementById("basePrice").value);
    let competitorPrice = parseFloat(document.getElementById("competitorPrice").value);
    let demand = document.getElementById("demand").value;
    let time = document.getElementById("time").value;

    if (isNaN(basePrice) || isNaN(competitorPrice)) {
        document.getElementById("output").innerText = "Please enter valid prices.";
        return; // ✅ now legal
    }

    let finalPrice = basePrice;

    if (demand === "high") finalPrice += basePrice * 0.20;
    if (demand === "medium") finalPrice += basePrice * 0.10;
    if (time === "peak") finalPrice += basePrice * 0.15;
    if (competitorPrice < basePrice) finalPrice -= basePrice * 0.05;

    document.getElementById("output").innerText =
        "Final Price: KES " + finalPrice.toFixed(2);
}
