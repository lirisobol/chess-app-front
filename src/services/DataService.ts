import axios from "axios";
import { appConfig } from "../utils/appConfig";

class DataService {
    public async getUserProfileData (username:string):Promise<unknown> {
        const response = await axios.get(appConfig.CHESS_COM_BASE_URL + username);
        const userProfileData = response.data;
        console.log(userProfileData);        
        return userProfileData
    }
}

export const dataService = new DataService;