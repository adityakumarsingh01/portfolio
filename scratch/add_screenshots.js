const fs = require('fs');

const mainFile = 'e:/Portfolio/src/components/IndustryAssessments.tsx';
let content = fs.readFileSync(mainFile, 'utf-8');

// Replacements
content = content.replace(
  /id: "fundsroom",\s*company: "FundsRoom",([\s\S]*?)screenshots: \[\]/g, 
  'id: "fundsroom",\n    company: "FundsRoom",$1screenshots: ["/assignment/FundsRoom.png"]'
);
content = content.replace(
  /id: "acdyon",\s*company: "ACDYON TECHNOLOGIES",([\s\S]*?)screenshots: \[\]/g, 
  'id: "acdyon",\n    company: "ACDYON TECHNOLOGIES",$1screenshots: ["/assignment/ACDYON TECHNOLOGIES.png"]'
);
content = content.replace(
  /id: "insideiim-investiq",\s*company: "InsideIIM",([\s\S]*?)screenshots: \[\]/g, 
  'id: "insideiim-investiq",\n    company: "InsideIIM",$1screenshots: ["/assignment/InvestIQ.png"]'
);

fs.writeFileSync(mainFile, content);
console.log('Added screenshots to arrays.');
