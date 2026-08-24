const fs = require('fs');
let content = fs.readFileSync('e:/Portfolio/src/components/IndustryAssessments.tsx', 'utf-8');

// Just fix missing commas between the objects in the array
content = content.replace(/  \}\n  \{/g, '  },\n  {');

fs.writeFileSync('e:/Portfolio/src/components/IndustryAssessments.tsx', content);
console.log('Fixed missing commas');
