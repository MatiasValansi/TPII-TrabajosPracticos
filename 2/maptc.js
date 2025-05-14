const fs = require('fs').promises;

fs.readFile('package.json', 'utf8')
    .then(contenido => {
        return fs.stat('package.json').then(stats => ({ contenido, stats }));
    })
    .then(({ contenido, stats }) => {
        const info = {
            contenidoStr: contenido,
            contenidoObj: JSON.parse(contenido),
            size: stats.size
        };
        console.log(info);
        return fs.writeFile('info.txt', JSON.stringify(info, null, '\t'));
    })
    .catch(error => console.error('Error:', error.message));