import re
import json

def parse_citation(text, start_id=1):
    # Split into parts using the periods as delimiters
    parts = text.split('. ')
    
    # Extract authors (first part)
    authors = parts[0] + '.'
    
    # Extract title (second part, up to the journal name before the comma)
    title = parts[1] + '.'
    
    # Extract journal/prelink and link
    # Find the comma after journal name and get everything before the URL
    prelink_match = re.search(r'([^,]+),', text)
    prelink = prelink_match.group(0) if prelink_match else ''
    
    # Extract URL
    link_match = re.search(r'https?://[^\s]+', text)
    link = link_match.group(0) if link_match else ''
    
    return {
        'id': start_id,
        'authors': authors,
        'title': title,
        'prelink': prelink,
        'link': link,
        'postlink': '',
    }

# Example usage
citations = "Khurshid B, Mousa A, Dallas SL, Deering J, Reznikov N, McKee MD. Trabecular bone formation in vitro by the OmGFP66 osteogenic cell line. Bone, https://doi.org/10.1016/j.bone.2025.117767."

result = parse_citation(citations,start_id=45)
print(json.dumps(result, indent=2))
