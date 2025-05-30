import os
import requests
from PIL import Image
from io import BytesIO
import concurrent.futures
from pathlib import Path

# Cấu hình
IMAGE_SIZES = {
    'thumbnail': (400, 225),  # 16:9 ratio
    'medium': (800, 450),     # 16:9 ratio
    'large': (1200, 675)      # 16:9 ratio
}

# Danh sách hình ảnh cần tải
IMAGES_TO_DOWNLOAD = {
    'events': {
        'bach-dang-victory': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Battle_of_Bach_Dang_1288.jpg/1200px-Battle_of_Bach_Dang_1288.jpg',
        'spring-victory': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Saigon_Liberation_Day_1975.jpg/1200px-Saigon_Liberation_Day_1975.jpg',
        'august-revolution': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/August_Revolution_1945.jpg/1200px-August_Revolution_1945.jpg'
    },
    'characters': {
        'ngo-quyen': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Ngo_Quyen_Statue.jpg/1200px-Ngo_Quyen_Statue.jpg',
        'tran-hung-dao': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Tran_Hung_Dao_Statue.jpg/1200px-Tran_Hung_Dao_Statue.jpg',
        'le-loi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Le_Loi_Statue.jpg/1200px-Le_Loi_Statue.jpg'
    },
    'locations': {
        'bach-dang-river': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Bach_Dang_River.jpg/1200px-Bach_Dang_River.jpg',
        'co-loa-citadel': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Co_Loa_Citadel.jpg/1200px-Co_Loa_Citadel.jpg',
        'hung-temple': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Hung_Temple.jpg/1200px-Hung_Temple.jpg'
    },
    'artifacts': {
        'bach-dang-stakes': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Bach_Dang_Stakes.jpg/1200px-Bach_Dang_Stakes.jpg',
        'dong-son-drum': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Dong_Son_Drum.jpg/1200px-Dong_Son_Drum.jpg',
        'hong-duc-map': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Hong_Duc_Map.jpg/1200px-Hong_Duc_Map.jpg'
    }
}

def download_image(url, save_path):
    """Tải hình ảnh từ URL và lưu vào đường dẫn được chỉ định."""
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        return response.content
    except Exception as e:
        print(f"Lỗi khi tải hình ảnh từ {url}: {e}")
        return None

def optimize_image(image_data, save_path, size):
    """Tối ưu hóa hình ảnh và lưu với kích thước được chỉ định."""
    try:
        # Mở hình ảnh từ dữ liệu bytes
        img = Image.open(BytesIO(image_data))
        
        # Chuyển đổi sang RGB nếu là PNG
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')
        
        # Thay đổi kích thước
        img.thumbnail(size, Image.Resampling.LANCZOS)
        
        # Tạo thư mục nếu chưa tồn tại
        os.makedirs(os.path.dirname(save_path), exist_ok=True)
        
        # Lưu hình ảnh với chất lượng tối ưu
        img.save(save_path, 'JPEG', quality=85, optimize=True)
        print(f"Đã lưu hình ảnh: {save_path}")
        
    except Exception as e:
        print(f"Lỗi khi xử lý hình ảnh {save_path}: {e}")

def process_image(category, name, url):
    """Xử lý một hình ảnh với nhiều kích thước khác nhau."""
    image_data = download_image(url, None)
    if image_data:
        base_path = f"public/images/{category}/{name}"
        
        # Tạo các phiên bản với kích thước khác nhau
        for size_name, dimensions in IMAGE_SIZES.items():
            save_path = f"{base_path}_{size_name}.jpg"
            optimize_image(image_data, save_path, dimensions)

def main():
    """Hàm chính để tải và tối ưu hóa tất cả hình ảnh."""
    print("Bắt đầu tải và tối ưu hóa hình ảnh...")
    
    # Sử dụng ThreadPoolExecutor để tải nhiều hình ảnh cùng lúc
    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
        futures = []
        for category, images in IMAGES_TO_DOWNLOAD.items():
            for name, url in images.items():
                futures.append(
                    executor.submit(process_image, category, name, url)
                )
        
        # Đợi tất cả các tác vụ hoàn thành
        concurrent.futures.wait(futures)
    
    print("Hoàn thành tải và tối ưu hóa hình ảnh!")

if __name__ == "__main__":
    main() 