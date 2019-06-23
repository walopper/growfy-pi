const axios = require('axios')
const { requestTimeout, endpoint } = require('../config')

let posting = false

module.exports = (strData) => {
    let data = {}
    try {
        data = JSON.parse(strData) || {}
    } catch(error) {
        // console.error("JSON parse error", strData)
    }

    if(data) console.log('Monitor de estado:\n', JSON.stringify(data, 0, 3))

    if(data.temp && !posting){
        console.log("Posting")
        posting = true

        axios.post(endpoint, data)
            .then(response => {
                console.log(data)
                posting = false
            })
            .catch(error => {
                console.log("Error al postear")
                console.error(error)
                posting = false
            })
    }
}