const fs = require('fs').promises;

async function procesarArchivo() {
    try {
        const contenido = await fs.readFile('package.json', 'utf8');
        const stats = await fs.stat('package.json');
        
        const info = {
            contenidoStr: contenido,
            contenidoObj: JSON.parse(contenido),
            size: stats.size
        };
        
        console.log(info);
        await fs.writeFile('info.txt', JSON.stringify(info, null, '\t'));
    } catch (error) {
        console.error('Error:', error.message);
    }
}

procesarArchivo();