import fs from 'fs';

try {
    const contenido = fs.readFileSync('package.json', 'utf8');
    const contenidoObj = JSON.parse(contenido);
    const info = {
        contenidoStr: contenido,
        contenidoObj,
        size: fs.statSync('package.json').size
    };
    console.log(info);
    fs.writeFileSync('info.txt', JSON.stringify(info, null, '\t'));
} catch (error) {
    console.error('Error:', error.message);
}