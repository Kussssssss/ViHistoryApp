import pandas as pd
import os

# List of input CSV file paths
input_files = [
    '/home/gad/My Study/Workspace/Code Storages/University/HK6/CS313/Final Project/ViHistoryApp/rag_legal_chatbot_frontend/src/data/Lịch sử Việt Nam Dataset - Giai đoạn 40-938.csv',
    '/home/gad/My Study/Workspace/Code Storages/University/HK6/CS313/Final Project/ViHistoryApp/rag_legal_chatbot_frontend/src/data/Lịch sử Việt Nam Dataset - Giai đoạn 938-1858.csv',
    '/home/gad/My Study/Workspace/Code Storages/University/HK6/CS313/Final Project/ViHistoryApp/rag_legal_chatbot_frontend/src/data/Lịch sử Việt Nam Dataset - Giai đoạn 1858-1945.csv',
    '/home/gad/My Study/Workspace/Code Storages/University/HK6/CS313/Final Project/ViHistoryApp/rag_legal_chatbot_frontend/src/data/Lịch sử Việt Nam Dataset - Giai đoạn 1945-1954.csv',
    '/home/gad/My Study/Workspace/Code Storages/University/HK6/CS313/Final Project/ViHistoryApp/rag_legal_chatbot_frontend/src/data/Lịch sử Việt Nam Dataset - Giai đoạn 1954-1975.csv',
    '/home/gad/My Study/Workspace/Code Storages/University/HK6/CS313/Final Project/ViHistoryApp/rag_legal_chatbot_frontend/src/data/Lịch sử Việt Nam Dataset - Giai đoạn 1975-2000.csv',
]
# Using the original output directory name
output_dir = '/home/gad/My Study/Workspace/Code Storages/University/HK6/CS313/Final Project/ViHistoryApp/rag_legal_chatbot_frontend/data/chunks'
chunksize = 1000

# Create output directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

print(f"Output directory: {output_dir}")
print(f"Chunk size: {chunksize} rows")
print(f"Output filename format: chunk_xxxx.csv (index is global across all files to prevent overwrites)\n")

global_chunk_filename_index = 0 # This counter will ensure unique chunk filenames

for input_csv_path in input_files:
    print(f'Attempting to split: {input_csv_path}')

    if not os.path.exists(input_csv_path):
        print(f"  ERROR: Input file not found at '{input_csv_path}'. Skipping this file.\n")
        continue # Skip to the next file in the list

    try:
        chunks_created_for_this_file = 0
        # 'file_chunk_idx' is the 0-based index of chunks *within the current file*
        for file_chunk_idx, chunk_df in enumerate(pd.read_csv(input_csv_path, chunksize=chunksize)):
            # Use the 'global_chunk_filename_index' for the actual output filename
            # This ensures that chunk_0000.csv, chunk_0001.csv, etc., are unique across all processed files.
            output_filename = f'chunk_{global_chunk_filename_index:04d}.csv'
            output_filepath = os.path.join(output_dir, output_filename)
            
            chunk_df.to_csv(output_filepath, index=False)
            print(f'  Saved chunk {file_chunk_idx} from "{os.path.basename(input_csv_path)}" as "{output_filepath}"')
            
            global_chunk_filename_index += 1 # Increment the global counter for the next chunk from any file
            chunks_created_for_this_file += 1
        
        if chunks_created_for_this_file > 0:
            print(f"Successfully split '{os.path.basename(input_csv_path)}' into {chunks_created_for_this_file} chunk(s).\n")
        else:
            # This case might occur if pd.read_csv iterates but yields no actual data chunks
            # (e.g., for a file that is structured in a way that results in no iterable chunks by pandas,
            # though typically an empty file would raise EmptyDataError earlier).
            # Or if a file with only headers produces one chunk with headers, it will be caught by the if above.
            print(f"No data chunks were generated from '{os.path.basename(input_csv_path)}'. The file might be empty or structured such that no chunks were yielded.\n")

    except pd.errors.EmptyDataError:
        print(f"  ERROR: Input file '{input_csv_path}' is empty or contains no data to parse. Skipping this file.\n")
    except Exception as e:
        print(f"  An unexpected error occurred while processing '{input_csv_path}': {e}. Skipping this file.\n")

print(f"Finished processing all specified input files. Total chunks created in '{output_dir}': {global_chunk_filename_index}")