export interface CountryData {
    code: string;
    name: string;
}
export interface UserProfile {
    avatar: string;
    player_id: number;
    url: string;
    name: string;
    username: string;
    followers: number;
    country: CountryData;
    last_online: number;
    joined: number;
    status: string;
    is_streamer: boolean;
    verified: boolean;
}