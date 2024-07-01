import styles from "./DataSection.module.css"
interface UserData {
    profile:any;
    stats:any;
}
interface DataSectionProps {
    userData: UserData | null;
}

function DataSection({userData}:DataSectionProps):JSX.Element | null {
    
    return (
        <div className={styles.dataSection}></div>
    )
}
export default DataSection;