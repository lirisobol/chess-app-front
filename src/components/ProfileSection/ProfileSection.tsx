import { UserProfile } from "../../models/UserProfile";
import localStyles from "./ProfileSection.module.css";

interface ProfileSectionProps { 
    userProfileData: UserProfile | null;
}

function ProfileSection({userProfileData}: ProfileSectionProps): JSX.Element | null {
    return (
        <section className={localStyles.profileSection}>
            {userProfileData?.joined}
        </section>
    )
}
export default ProfileSection;