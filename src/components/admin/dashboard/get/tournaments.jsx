import axios from 'axios';

export function GetDevTournaments() {
    axios.post('/api/tournament/fetch_all')
        .then(response => console.log(response.data))
        .catch(error => { return error; });
}

export async function GetTournaments() {
    try {
        const response = await axios.post('/api/tournament/fetch_all');
        return response.data;
    } catch (error) {
        return error;
    }
}
