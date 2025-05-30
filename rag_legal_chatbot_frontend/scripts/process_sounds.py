import os
import requests
from pydub import AudioSegment
import io

# Sound URLs from Freesound.org (CC0 License)
SOUND_URLS = {
    'unlock': 'https://cdn.freesound.org/previews/270/270402_5123851-lq.mp3',  # Magical unlock sound
    'hover': 'https://cdn.freesound.org/previews/131/131142_2337290-lq.mp3',   # Soft UI hover
    'click': 'https://cdn.freesound.org/previews/242/242501_4284968-lq.mp3',   # Light click
    'share': 'https://cdn.freesound.org/previews/270/270310_5123851-lq.mp3'    # Success sound
}

def download_sound(url, filename):
    """Download sound file from URL"""
    response = requests.get(url)
    if response.status_code == 200:
        return response.content
    return None

def process_sound(audio_data, filename):
    """Process and optimize sound file"""
    # Load audio from bytes
    sound = AudioSegment.from_mp3(io.BytesIO(audio_data))
    
    # Normalize volume
    sound = sound.normalize()
    
    # Convert to mono
    sound = sound.set_channels(1)
    
    # Set sample rate to 44.1kHz
    sound = sound.set_frame_rate(44100)
    
    # Export as MP3 with optimized settings
    output_path = os.path.join('src', 'assets', 'sounds', filename)
    sound.export(
        output_path,
        format='mp3',
        bitrate='96k',
        parameters=['-q:a', '2']  # High quality setting
    )
    
    print(f"Processed {filename}")

def main():
    # Create sounds directory if it doesn't exist
    os.makedirs(os.path.join('src', 'assets', 'sounds'), exist_ok=True)
    
    # Process each sound
    for sound_type, url in SOUND_URLS.items():
        print(f"Downloading {sound_type} sound...")
        audio_data = download_sound(url, f"{sound_type}.mp3")
        if audio_data:
            process_sound(audio_data, f"{sound_type}.mp3")
        else:
            print(f"Failed to download {sound_type} sound")

if __name__ == "__main__":
    main() 