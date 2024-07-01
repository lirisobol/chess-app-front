import { User } from "../../models/User";
import styles from "./DataSection.module.css"

interface DataSectionProps {
    User: User | null;
}

function DataSection({User}:DataSectionProps):JSX.Element | null {
    
    return (
        <div className={styles.dataSection}>
            {User?.profile}
            {User?.stats}
        </div>
    )
}
export default DataSection;