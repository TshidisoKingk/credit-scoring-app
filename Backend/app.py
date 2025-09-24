from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# Load model and scaler
model = joblib.load('credit_model.pkl')
scaler = joblib.load('scaler.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    # Extract features in order
    features = np.array([[
        data['transaction_count'],
        data['avg_transaction_amount'],
        data['airtime_recharge_freq'],
        data['airtime_spend'],
        data['late_payments'],
        data['savings_balance']
    ]])
    scaled = scaler.transform(features)
    prediction = model.predict(scaled)[0]
    prob = model.predict_proba(scaled)[0][1]  # Probability of high risk
    risk = 'High' if prediction == 1 else 'Low'
    eligible = 'Eligible for loan' if prediction == 0 else 'Not eligible; improve transaction history'
    return jsonify({'risk': risk, 'probability': f"{prob:.2f}", 'eligibility': eligible})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)