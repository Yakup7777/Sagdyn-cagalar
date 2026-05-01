import fs from 'fs';

let content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf-8');

// Find the corrupted ko block which starts at '\n,\n  ko: {'
// Specifically, at line 712: ",\n  ko: {"

const corruptIndex = content.indexOf(',\n  ko: {');
if (corruptIndex !== -1) {
  // Extract the ko object
  const koBlockStr = content.substring(corruptIndex + 2); // "\n  ko: {\n...."
  
  // Clean up the end of the file which is currently corrupted
  const preCorrupt = content.substring(0, corruptIndex);
  
  // In preCorrupt, find where "  }\n};" is 
  const providerStart = preCorrupt.indexOf('export const LanguageProvider');
  
  // The translations end is just before export const LanguageProvider
  // Specifically: "  }\n};\n\nexport const LanguageProvider"
  
  const translationsEndIndex = preCorrupt.indexOf('};\n\nexport const LanguageProvider');
  
  if (translationsEndIndex !== -1) {
     const newContent = preCorrupt.substring(0, translationsEndIndex) + ',\n  ' + koBlockStr.trim() + '\n};\n\n' + preCorrupt.substring(translationsEndIndex + 4) + '\n};';
     fs.writeFileSync('src/context/LanguageContext.tsx', newContent);
  }
}
