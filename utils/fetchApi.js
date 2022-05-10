import axios from "axios";
export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '6220484683msh72b3f1054133c20p1fe247jsna7872d93c0eb'
        },
    });
    return data;
}