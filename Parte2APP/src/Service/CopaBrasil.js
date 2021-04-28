import axios from "axios";

let urlFases = "https://api.api-futebol.com.br/v1/campeonatos/2"
let token = 'live_a77a3b888bcb40f4051d8129f16424'

export const getFasesCopaBrasil = () => {

    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.get(urlFases, {
                headers: {
                'Authorization': `Bearer ${token}`
                }
            })
            resolve(response.data.fases)
        } catch (error) {
            reject(error)
        }
    })
}

export const getPartidasCopaBrasil = (props) => {
    let url = `https://api.api-futebol.com.br${props}`
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.get(url, {
                headers: {
                'Authorization': `Bearer ${token}`
                }
            })
            resolve(response.data.chaves)
        } catch (error) {
            reject(error)
        }
    })
}


