console.log("script.js loaded");
function calculatePrice() {
    var basePrice = Number(document.getElementById("basePrice").value);
    var competitorPrice = Number(document.getElementById("competitorPrice").value);
    var demand = document.getElementById("demand").value;
    var time = document.getElementById("time").value;

    if (!basePrice || !competitorPrice) {
        document.getElementById("output").innerHTML = "Please enter valid numeric values.";

        return;
    }

    // Demand multiplier
    var demandMultiplier = demand === "high" ? 1.2 :
                           demand === "medium" ? 1.1 : 0.95;

    // Time multiplier
    var timeMultiplier = time === "peak" ? 1.15 : 1.0;

    // Competitor influence factor
    var competitorFactor = 1;
    if (competitorPrice < basePrice) {
        competitorFactor = 1 - ((basePrice - competitorPrice) / basePrice) * 0.5;
    }

    // Final dynamic price
    var finalPrice = basePrice * demandMultiplier * timeMultiplier * competitorFactor;

    document.getElementById("output").innerHTML =
        "Final Dynamic Price: KES " + finalPrice.toFixed(2);
}
