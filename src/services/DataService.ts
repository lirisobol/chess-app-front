import axios from "axios";
import { appConfig } from "../utils/appConfig";
import { UserProfile } from "../models/UserProfile";
import { UserStats } from "../models/UserStats";
import { User } from "../models/User";

class DataService {
    // Constructs User Object loaded with profile and stats data.
    public async getUserData(username:string):Promise<User> {
        const [profile, stats] = await Promise.all ([
            this.getUserProfileData(username),
            this.getUserStatsData(username)
        ])
        return new User(profile, stats);
    }
    // URL pattern: https://api.chess.com/pub/player/{username}
    public async getUserProfileData (username:string):Promise<UserProfile> {
        const response = await axios.get(appConfig.CHESS_COM_BASE_URL + username);
        return response.data
    }
    // URL pattern: https://api.chess.com/pub/player/{username}/stats
    public async getUserStatsData (username:string):Promise<UserStats> {
        const response = await axios.get(`${appConfig.CHESS_COM_BASE_URL}${username}/stats`)
        return response.data;
    }
}
export const dataService = new DataService;