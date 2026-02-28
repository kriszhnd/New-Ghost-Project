import { readFileSync, writeFileSync } from 'fs';

// Read package.json
const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));

// Read default.hbs
const content = readFileSync('default.hbs', 'utf8');

let updatedContent;

// Capitalize first letter of package name
const capitalizedName = packageJson.name.charAt(0).toUpperCase() + packageJson.name.slice(1);

// Check if theme meta tag already exists
if (content.includes('name="ghost-theme"')) {
  // Update existing ghost-theme meta tag - replace the content without adding newlines
  updatedContent = content.replace(
    /<meta name="ghost-theme" content="[^"]*">/,
    `<meta name="ghost-theme" content="${capitalizedName} ${packageJson.version}">`
  );
} else {
  // Add ghost-theme meta tag after theme-color if it doesn't exist
  updatedContent = content.replace(
    /(<meta name="theme-color" content="[^"]*">)/,
    `$1\n    <meta name="ghost-theme" content="${capitalizedName} ${packageJson.version}">`
  );
}

// Write back to default.hbs
writeFileSync('default.hbs', updatedContent);