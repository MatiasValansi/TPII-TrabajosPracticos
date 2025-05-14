const fs = require('fs');

fs.readFile('package.json', 'utf8', (err, contenido) => {
    if (err) return console.error('Error:', err.message);
    
    fs.stat('package.json', (err, stats) => {
        if (err) return console.error('Error:', err.message);
        
        const info = {
            contenidoStr: contenido,
            contenidoObj: JSON.parse(contenido),
            size: stats.size
        };
        console.log(info);
        
        fs.writeFile('info.txt', JSON.stringify(info, null, '\t'), (err) => {
            if (err) console.error('Error:', err.message);
        });
    });
});