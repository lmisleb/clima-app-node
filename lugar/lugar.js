const axios = require('axios');

const getLugarLatLon = async(dir) => {

    const encodedUrl = encodeURI(dir);
    //console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl}`,
        headers: { 'x-rapidapi-key': '6fc728f1c6msh832963a4d2e1b1cp18e457jsn4d19ee92274c' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados pasa ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion,
        lat,
        lon
    }

};

module.exports = {
    getLugarLatLon
}