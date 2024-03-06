import {createPlayer} from '@/libs/databaseUtils'

export default function Main(){
    createPlayer(1, 'John', 'Webstorm', {tournament_id: 0});
}