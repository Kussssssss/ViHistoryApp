#!/bin/bash

# Tạo môi trường ảo Python
python -m venv venv

# Kích hoạt môi trường ảo
source venv/bin/activate

# Cài đặt các thư viện cần thiết
pip install -r requirements.txt

# Chạy script tải và tối ưu hóa hình ảnh
python download_images.py

# Tắt môi trường ảo
deactivate

echo "Đã hoàn thành tải và tối ưu hóa hình ảnh!" 