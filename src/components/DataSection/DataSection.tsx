import styles from "./DataSection.module.css";
import { User } from '../../models/User';  // Adjust the import path as necessary
import ProfileSection from "../ProfileSection/ProfileSection";
import StatsSection from "../StatsSection/StatsSection";

interface DataSectionProps {
    userData: User | null;
}

function DataSection({ userData }: DataSectionProps): JSX.Element | null {
    if (!userData) return null;

    return (
        <section className={styles.dataSection}>
            <ProfileSection userProfileData={userData.profile}/>
            <StatsSection userStatsData={userData.stats}/>            
        </section>
    );
}

export default DataSection;