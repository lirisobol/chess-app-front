import localStyles from "./DataSection.module.css";
import { User } from '../../models/User';  // Adjust the import path as necessary
import ProfileSection from "../ProfileSection/ProfileSection";
import StatsSection from "../StatsSection/StatsSection";

interface DataSectionProps {
    userData: User | null;
}

function DataSection({ userData }: DataSectionProps): JSX.Element | null {
    if (!userData) return null;

    return (
        <section className={localStyles.dataSection}>
            <div className={localStyles.profileWrapper}>
                <ProfileSection userProfileData={userData.profile} />
            </div>
            <div className={localStyles.statsWrapper}>
                <StatsSection userStatsData={userData.stats} />
            </div>
        </section>
    );
}
export default DataSection;
