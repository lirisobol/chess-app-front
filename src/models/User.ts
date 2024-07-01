import { UserProfile } from "./UserProfile";
import { UserStats } from "./UserStats";

export class User {
    profile: UserProfile;
    stats: UserStats;

    constructor(profile: UserProfile, stats: UserStats) {
        this.profile = profile;
        this.stats = stats;
    }
}