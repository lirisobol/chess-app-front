import globalStyles from "../../Global.module.css";
import localStyles from "./ProfileSection.module.css";
import { fromUnixTime } from "date-fns/fromUnixTime";
import { UserProfile } from "../../models/UserProfile";
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

            <div>
                <h1 className={globalStyles.bigTitle}>{userProfileData?.username}</h1>
                <h3 className={globalStyles.mediumTitle}>{userProfileData?.name}</h3>
            </div>

            <div className={localStyles.userDetails}>
                {userProfileData?.fide && (
                    <p className={globalStyles.mediumTitle}>Fide Rating: {userProfileData.fide}</p>
                )}
                {userProfileData?.title && (
                    <p className={globalStyles.mediumTitle}>Title: {userProfileData.title}</p>
                )}
                {joinedDate && (
                    <p className={globalStyles.mediumTitle}>Joined: {joinedDate}</p>
                )}
                {userProfileData?.followers && (
                    <p className={globalStyles.mediumTitle}>Followers: {userProfileData.followers}</p>
                )}
            </div>
        </section>
    )
}
export default ProfileSection;