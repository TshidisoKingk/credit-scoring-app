Smart Credit Scoring Tool for SMEs
Overview
This project is a smart credit scoring tool designed to help Small and Medium Enterprises (SMEs) access loans by evaluating their creditworthiness using mobile money history, airtime usage, and transaction records. It uses a Random Forest Classifier trained on synthetic data to predict credit risk (low/high) and loan eligibility. The backend is a Flask API, and the frontend is a simple web interface built with HTML, CSS, and JavaScript. The project leverages Google Colab for model training and GitHub Codespaces for development and testing.
Features

Machine Learning Model: Random Forest Classifier predicting credit risk based on features like transaction count, average transaction amount, airtime recharge frequency, airtime spend, late payments, and savings balance.
Backend API: Flask app serving a /predict endpoint for credit



1. Set Up the Codespace Environment
Bash:
# Update package lists
sudo apt update

# Install Python3 and pip if not already present
sudo apt install python3 python3-pip -y

# Create a virtual environment
python3 -m venv .venv

# Activate the virtual environment
source .venv/bin/activate

# Verify Python version (should be 3.8+)
python --version

# Install dependencies:
BASH:
pip install -r requirements.txt

# RUN BACKEND
BASH:
source .venv/bin/activate
python app.py

# RUN FRONTEND
BASH:
source .venv/bin/activate
python -m http.server 80
