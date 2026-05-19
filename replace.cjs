const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src');

function walk(currentDir) {
  const files = fs.readdirSync(currentDir);
  for (const file of files) {
    const filePath = path.join(currentDir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walk(filePath);
    } else if (file.endsWith('.astro') || file.endsWith('.jsx') || file.endsWith('.css')) {
      let content = fs.readFileSync(filePath, 'utf-8');
      
      // Replacements
      content = content.replace(/teal-primary/g, 'black-primary');
      content = content.replace(/teal-50/g, 'gray-100');
      content = content.replace(/teal-100/g, 'gray-300');
      content = content.replace(/teal-600/g, 'gray-800');
      content = content.replace(/teal-700/g, 'gray-900');
      content = content.replace(/orange-accent/g, 'gold-accent');
      content = content.replace(/orange-600/g, 'yellow-600');
      content = content.replace(/orange-50/g, 'yellow-50');
      content = content.replace(/charcoal-dark/g, 'black-dark');
      content = content.replace(/PROSIP/g, 'VERTYS');
      content = content.replace(/prosip/g, 'vertys');
      content = content.replace(/PRO<span class="text-gold-accent">SIP<\/span>/g, '<img src={logo.src} alt="VERTYS Logo" class="h-10 w-auto" />');
      
      fs.writeFileSync(filePath, content, 'utf-8');
    }
  }
}

walk(dir);
console.log('Replacements complete.');
