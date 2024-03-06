import {fetchAllPlayers} from '@/libs/databaseUtils'

export default function Main(){
    (async () => {
        try {
          const players = await fetchAllPlayers();
          console.log(JSON.stringify(players, null, 2));
        } catch (error) {
          console.error(`Error occurred while fetching players: ${error}`);
        }
      })();
}