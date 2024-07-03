import { fromUnixTime } from "date-fns/fromUnixTime";
import { UserProfile } from "../../models/UserProfile";
import localStyles from "./ProfileSection.module.css";
import { format } from "date-fns";

interface ProfileSectionProps { 
    userProfileData: UserProfile | null;
}

function ProfileSection({userProfileData}: ProfileSectionProps): JSX.Element | null {
    if (!userProfileData) return null;

    // Initialize joinedDate as a string or null
    let joinedDate: string | null = null;
    if (userProfileData.joined !== undefined) {
        joinedDate = format(fromUnixTime(userProfileData.joined), 'yyyy-MM-dd');
    }

    return (
        <section className={localStyles.profileSection}>
            <div className={localStyles.avatar}>
                <img src={userProfileData?.avatar}/>
            </div>

            <div className={localStyles.userName}>
                <h1>{userProfileData?.username}</h1>
                <h3>{userProfileData?.name}</h3>
            </div>

            <div className={localStyles.userDetails}>
                {userProfileData?.fide && (
                    <h3>Fide Rating: {userProfileData.fide}</h3>
                )}
                {userProfileData?.title && (
                    <h3>Title: {userProfileData.title}</h3>
                )}
                {joinedDate && (
                    <h3>Joined: {joinedDate}</h3>
                )}
                {userProfileData?.followers && (
                    <h3>Followers: {userProfileData.followers}</h3>
                )}
            </div>
        </section>
    )
}
export default ProfileSection;