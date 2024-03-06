import axios from 'axios';

export async function GetPlayers() {
    try {
        const response = await axios.post('/api/player/fetch_all');
        return response.data;
    } catch (error) {
        return error;
    }
}
