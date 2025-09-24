document.getElementById('creditForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const data = {
        transaction_count: parseInt(document.getElementById('transaction_count').value),
        avg_transaction_amount: parseFloat(document.getElementById('avg_transaction_amount').value),
        airtime_recharge_freq: parseInt(document.getElementById('airtime_recharge_freq').value),
        airtime_spend: parseFloat(document.getElementById('airtime_spend').value),
        late_payments: parseInt(document.getElementById('late_payments').value),
        savings_balance: parseFloat(document.getElementById('savings_balance').value)
    };
    
    try {
        const response = await fetch('https://<your-codespace-port-url>/predict', {  // Replace with your public Codespace URL, e.g., https://<codespace-id>-5000.app.github.dev/predict
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            <strong>Risk Level:</strong> ${result.risk}<br>
            <strong>High Risk Probability:</strong> ${result.probability}<br>
            <strong>Loan Eligibility:</strong> ${result.eligibility}
        `;
        resultDiv.style.display = 'block';
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to get score. Check console.');
    }
});