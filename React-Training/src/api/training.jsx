import axios from 'axios';
import { config } from '../config';
//const token = window.localStorage.getItem('popol-token');

// export const savePizza = (datas) => {
//     return axios.post(config.api_url + "/api/v1/pizza/save",
//         datas, { headers: { 'x-access-token': token } })
//         .then((response) => {
//             // console.log(response)
//             return response
//         }).catch((err) => {
//             console.log("Echec AJAX", err)
//         })

// }

export const getAllTraining = async () => {
    try {
        const response = await axios.get(config.api_url + "/api/trainings");
        return response;
    } catch (err) {
        return err;
    }

}
// export async function getAllTraining() {
//     try {
//         const response = await axios.get(config.api_url + "/api/trainings")
//         console.log(response);
//         return response
//     } catch (error) {
//         console.error(error);
//         return error
//     }
// }

// export const updatePizza = (id, datas) => {
//     return axios.put(config.api_url + "/api/v1/pizza/update/" + id, datas, { headers: { 'x-access-token': token } })
//         .then((response) => {
//             return response;
//         })
//         .catch((err) => {
//             return err;
//         })

// }


// export const deletePizza = (id) => {
//     return axios.delete(config.api_url + "/api/v1/pizza/delete/" + id, { headers: { 'x-access-token': token } })
//         .then((res) => {
//             return res;
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }

