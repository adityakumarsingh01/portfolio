const fs = require('fs');
let content = fs.readFileSync('e:/Portfolio/src/components/IndustryAssessments.tsx', 'utf-8');

const order = ['fundsroom', 'vocallabs', 'acdyon', 'cipherschools', 'insideiim'];
const dates = {
  'fundsroom': 'Aug 2026',
  'vocallabs': 'Aug 2026',
  'acdyon': 'Aug 2026',
  'cipherschools': 'Jul 2026',
  'insideiim': 'Jun 2026'
};

const regex = /const assessmentsData: Assessment\[\] = \[\s*([\s\S]*?)\s*\];\n/;
const match = content.match(regex);
if(match) {
  let inner = match[1];
  
  // Split by the start of each object: "  {\n    id:"
  let blocks = inner.split(/\n  \{(?=\n    id:)/).filter(b => b.trim());
  
  // Re-attach the leading curly brace if it was removed by split
  blocks = blocks.map(b => {
    if (!b.startsWith('  {\n') && !b.startsWith('{\n') && !b.startsWith(' {\n')) {
      return '  {' + b;
    }
    return b;
  });

  // Now we have the 5 blocks. We can map them to their IDs.
  let blockMap = {};
  for(let b of blocks) {
    let m = b.match(/id:\s*"([^"]+)"/);
    if(m) {
      let id = m[1];
      // Add the date right after the category field
      b = b.replace(/(category:\s*"[^"]+",\n)/, '\$1    date: "' + dates[id] + '",\n');
      blockMap[id] = b;
    }
  }

  // Rebuild the array
  let newInner = '\n';
  for(let i=0; i<order.length; i++) {
    newInner += blockMap[order[i]];
    if (i < order.length - 1) {
      newInner += '\n'; // Add separator
    }
  }
  
  // Replace in original content
  content = content.replace(regex, 'const assessmentsData: Assessment[] = [' + newInner + '];\n');
  fs.writeFileSync('e:/Portfolio/src/components/IndustryAssessments.tsx', content);
  console.log('Reordered successfully!');
} else {
  console.log('Could not find assessmentsData array.');
}
