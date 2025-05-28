import pandas as pd
import os

input_csv = 'legal-chatbot/home/ubuntu/rag_legal_chatbot_frontend/src/data/Lịch sử Việt Nam Dataset - Giai đoạn 40-938.csv'
output_dir = 'legal-chatbot/home/ubuntu/rag_legal_chatbot_frontend/data/chunks'
chunksize = 1000

# Create output directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

print(f'Splitting {input_csv} into chunks of size {chunksize}...')

try:
    for i, chunk in enumerate(pd.read_csv(input_csv, chunksize=chunksize)):
        output_csv = os.path.join(output_dir, f'chunk_{i:04d}.csv')
        chunk.to_csv(output_csv, index=False)
        print(f'Saved {output_csv}')
    print("Finished splitting CSV file.")
except FileNotFoundError:
    print(f"Error: Input file not found at {input_csv}")
except Exception as e:
    print(f"An error occurred: {e}") 