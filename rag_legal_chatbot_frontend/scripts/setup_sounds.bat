@echo off
echo Setting up sound processing environment...

:: Create virtual environment
python -m venv venv

:: Activate virtual environment
call venv\Scripts\activate.bat

:: Install requirements
pip install -r requirements.txt

:: Run sound processing script
python process_sounds.py

:: Deactivate virtual environment
call venv\Scripts\deactivate.bat

echo Sound processing completed!
pause 