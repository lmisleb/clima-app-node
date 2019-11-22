const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLon(argv.direccion)
//     .then(console.log);

// clima.getClima(0, 0)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(direccion) => {
    //con promesas
    try {
        const coords = await lugar.getLugarLatLon(direccion);
        const temp = await clima.getClima(coords.lat, coords.lon);
        return `El clima de ${coords.direccion} es de ${ temp }.`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
    //sin promesas
    // try {
    //     const coords = await getLugarLatLon(direccion);
    //     const temp = await getClima(coords.lat, coords.lon);
    //     console.log(`El clima de ${direccion} es de ${temp}`);
    // } catch (e) {
    //     console.log(`No se pudo determinar el clima de ${direccion}`);
    // }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);

// getInfo(argv.direccion);