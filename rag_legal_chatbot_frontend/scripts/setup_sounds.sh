#!/bin/bash

# Create virtual environment
python -m venv venv

# Activate virtual environment
source venv/bin/activate

# Install requirements
pip install -r requirements.txt

# Run sound processing script
python process_sounds.py

# Deactivate virtual environment
deactivate

echo "Sound processing completed!" 