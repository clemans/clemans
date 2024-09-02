import * as fs from 'fs';
import * as path from 'path';

// Read and parse the JSON data
const dataFilePath = path.join('data', 'techstack.json');
const rawData = fs.readFileSync(dataFilePath, 'utf8');
const data = JSON.parse(rawData) as Array<{
    type: string;
    subcategory: string;
    toolService: string;
    description: string;
}>;

// Sort by Subcategory
data.sort((a, b) => a.subcategory.localeCompare(b.subcategory));

// Convert to Markdown table format
const markdownTable = `
# Professional IT Stack

|Type             |Subcategory        | Tool/Service            |Usage / Description                |
|:-               |:-                 |:-                       |-:                                 |
${data.map(row => `|${row.type}|${row.subcategory}|${row.toolService}|${row.description}|`).join('\n')}
`;

// Write the sorted table to a file
const outputPath = path.join('TECHSTACK.md');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, markdownTable.trim(), 'utf8');

console.log(`✅ 'TECHSTACK.md' has been created/updated.`);