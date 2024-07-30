import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export async function getAllCards() {
    const response = await axios.get(`${API_URL}/all`);
    return response.data;
}

export async function addCard(newCard) {
    const response = await axios.post(`${API_URL}/cards/add`, newCard);
    return response.data;
}

export async function updateCard(id, updatedCard) {
    const response = await axios.put(`${API_URL}/cards/edit/${id}`, updatedCard);
    console.log(response);
    return response.data;
}

export function deleteCard(id) {
    return axios.delete(`${API_URL}/cards/delete/${id}`);
}
