import zipfile
import xml.etree.ElementTree as ET
import sys
import os

def get_docx_text(path):
    """
    Take the path of a docx file as argument, return the text in markdown-ish format.
    """
    try:
        with zipfile.ZipFile(path) as z:
            xml_content = z.read('word/document.xml')
        
        tree = ET.fromstring(xml_content)
        namespace = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        
        texts = []
        for p in tree.findall('.//w:p', namespace):
            paragraph_text = ""
            for t in p.findall('.//w:t', namespace):
                if t.text:
                    paragraph_text += t.text
            if paragraph_text:
                texts.append(paragraph_text)
        
        return "\n\n".join(texts)
    except Exception as e:
        return f"Error extracting {path}: {str(e)}"

if __name__ == "__main__":
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
    if len(sys.argv) < 2:
        print("Usage: python extract_docx.py <file1.docx> <file2.docx> ...")
        sys.exit(1)
    
    for arg in sys.argv[1:]:
        print(f"--- START OF {os.path.basename(arg)} ---")
        print(get_docx_text(arg))
        print(f"--- END OF {os.path.basename(arg)} ---")
