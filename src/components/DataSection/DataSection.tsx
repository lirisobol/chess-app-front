import styles from "./DataSection.module.css";
import { User } from '../../models/User';  // Adjust the import path as necessary

interface DataSectionProps {
    userData: User | null;
}

function DataSection({ userData }: DataSectionProps): JSX.Element | null {
    if (!userData) return null;

    return (
        <div className={styles.dataSection}>
            {userData.profile.joined}
        </div>
    );
}

export default DataSection;