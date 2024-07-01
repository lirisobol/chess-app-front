import axios from "axios";
import { appConfig } from "../utils/appConfig";

class DataService {
    // URL pattern: https://api.chess.com/pub/player/{username}
    public async getUserProfileData (username:string):Promise<unknown> {
        const response = await axios.get(appConfig.CHESS_COM_BASE_URL + username);
        const userProfileData = response.data;
        console.log(userProfileData);        
        return userProfileData
    }

    // URL pattern: https://api.chess.com/pub/player/{username}/stats
    public async getUserStatsData (username:string): Promise<unknown> {
        const response = await axios.get(`${appConfig.CHESS_COM_BASE_URL}${username}/stats`)
        const userStatsData = response.data;
        console.log(userStatsData);
        return userStatsData;
    }
}
export const dataService = new DataService;