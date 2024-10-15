'use server';
import axios from "axios";

export async function FetchData({ country, name }) {
    console.log('api ', { country, name });
    const url_api = `http://universities.hipolabs.com/search`;
    return await axios.get(url_api, {
        params: {
            country: country,
            name: name
        }
    })
        .then(res => res.data)
        // .catch(err => console.error(err));
}