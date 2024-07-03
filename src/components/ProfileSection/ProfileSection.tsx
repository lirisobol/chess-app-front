import { fromUnixTime } from "date-fns/fromUnixTime";
import { UserProfile } from "../../models/UserProfile";
import localStyles from "./ProfileSection.module.css";

interface ProfileSectionProps { 
    userProfileData: UserProfile | null;
}

function ProfileSection({userProfileData}: ProfileSectionProps): JSX.Element | null {
    const joinedDate:Date = fromUnixTime(userProfileData?.joined);

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
                    <h3>Joined: {joinedDate.toLocaleDateString()}</h3>
                )}
                {userProfileData?.followers && (
                    <h3>Followers: {userProfileData.followers}</h3>
                )}
            </div>
        </section>
    )
}
export default ProfileSection;