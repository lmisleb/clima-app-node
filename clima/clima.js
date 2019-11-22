const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b6109e8dcd35ec10a120969c5313d503&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}