import fs from 'fs';

let content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf-8');

// The file currently has:
// 711:   return context;
// 712: ,
// 713:   ko: { ...

const koRegex = /,\n  ko: \{[\s\S]*/;
const koMatch = content.match(koRegex);

if (koMatch) {
  let koBlockStr = koMatch[0].replace(/^,\n/, ''); // removes the leading ",\n"
  
  // Actually, wait, koBlockStr ends at the absolute end of file. It doesn't have the final "};\n" if I replaced it.
  // My original replace:
  // content.substring(0, lastBracketIdx) + ',\n  ko: ' + koString + '\n};\n' + content.substring(lastBracketIdx + 3)
  // lastBracketIdx + 3 was the end of the file. So the file now ends with "};\n".
  
  let preCorrupt = content.replace(koRegex, '\n};');
  // preCorrupt is now the file without the `ko` block, correctly ending with "\n};". Let's verify `export const LanguageProvider` starts around where `translations` ends.
  
  const translationsEndIndex = preCorrupt.indexOf('  }\n};\n\nexport const LanguageProvider');
  
  if (translationsEndIndex !== -1) {
    const fixedContent = preCorrupt.substring(0, translationsEndIndex + 3) + ',\n' + koBlockStr + '\n' + preCorrupt.substring(translationsEndIndex + 3);
    fs.writeFileSync('src/context/LanguageContext.tsx', fixedContent);
    console.log("Fixed successfully.");
  } else {
    console.log("Could not find the end of translations block.");
  }
} else {
  console.log("ko block not found.");
}
