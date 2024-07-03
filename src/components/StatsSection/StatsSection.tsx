import { UserStats } from "../../models/UserStats";
import CommonModeCard from "../CommonModeCard/CommonModeCard";
import localStyles from "./StatsSection.module.css";


interface StatsSectionProps {
    userStatsData: UserStats | null;
}

function StatsSection({userStatsData}: StatsSectionProps):JSX.Element | null {
    if (!userStatsData) return null;

    return (
        <section className={localStyles.statsSection}>
            {userStatsData.chess_daily && (
                <CommonModeCard 
                    mode="Daily"
                    stats={userStatsData.chess_daily}
                    icon="path/to/daily-icon.png"
                />
            )}
        </section>
    )
}
export default StatsSection;