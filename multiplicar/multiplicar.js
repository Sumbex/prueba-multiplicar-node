const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            return reject(`El valor introducido: ${base}, no es un numero.`);
        } else if (!Number(limite)) {
            return reject(`El valor introducido: ${limite}, no es un numero.`);
        } else {
            console.log('====================='.green);
            console.log(`=====Tabla del ${base}=====`.green);
            console.log('====================='.green);
            for (let i = 1; i <= limite; i++) {
                console.log(`${base} * ${i} = ${(base*i)}`);
            }
        }
    });
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            return reject(`El valor introducido: ${base}, no es un numero.`);
        } else if (!Number(limite)) {
            return reject(`El valor introducido: ${limite}, no es un numero.`);
        } else {
            let contenido = '';
            for (let i = 1; i <= limite; i++) {
                contenido += `${base} * ${i} = ${(base*i)} \n`;
            }
            const data = new Uint8Array(Buffer.from(contenido));
            fs.writeFile(`./tablas/tabla-del-${base}-al-${limite}.txt`, data, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(`tabla-del-${base}-al-${limite}.txt`);
                }
            });
        }
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}