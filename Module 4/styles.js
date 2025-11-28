function verifyServiceQuality(quality) {
    // Verify that a valid service quality was entered
    const validQualities = ['great', 'ok', 'poor'];
    const qualityLower = quality.toLowerCase().trim();

    if (validQualities.includes(qualityLower)) {
        return qualityLower;
    } else {
        return null;
    }
}

function verifyServiceAmount(amount) {
    // Verify that the service amount is between $5.00 and $500.00
    const amountFloat = parseFloat(amount);

    if (isNaN(amountFloat)) {
        return null;
    }

    if (amountFloat >= 5.00 && amountFloat <= 500.00) {
        return amountFloat;
    } else {
        return null;
    }
}

function calculateTip(amount, quality) {
    // Calculate the tip amount based on service quality.
    const tipPercentages = {
        'great': 0.20,
        'ok': 0.15,
        'poor': 0.10
    };

    const tipAmount = amount * tipPercentages[quality];
    return tipAmount;
}

function calculateAndDisplayTip() {
    const resultDiv = document.getElementById('result');
    const serviceAmountInput = document.getElementById('serviceAmount').value;
    const serviceQualityInput = document.getElementById('serviceQuality').value;

    // Verify service amount
    const serviceAmount = verifyServiceAmount(serviceAmountInput);

    if (serviceAmount === null) {
        resultDiv.className = 'error';
        resultDiv.innerHTML = "Invalid service amount. Please enter a value between $5.00 and $500.00.";
        resultDiv.style.display = 'block';
        return;
    }

    // Verify service quality
    const serviceQuality = verifyServiceQuality(serviceQualityInput);

    if (serviceQuality === null) {
        resultDiv.className= 'error';
        resultDiv.innerHTML = "Invalid service quality. Please enter 'great', 'ok', or 'poor'.";
        resultDiv.style.display = 'block';
        return;
    }

    // Calculate and display the tip
    const tip = calculateTip(serviceAmount, serviceQuality);

    resultDiv.className = 'success';
    resultDiv.innerHTML =  
    `
    <strong>--- Tip Recommendation ---</strong><br>
        Service Amount: $${serviceAmount.toFixed(2)}<br>
        ServiceQuality: ${serviceQuality.charAt(0).toUpperCase() + serviceQuality.slice(1)}<br>
        Recommended Tip: $${tip.toFixed(2)}<br>
        Total Amount: $${(serviceAmount + tip).toFixed(2)}
    `;
    resultDiv.style.display = 'block';
};


