import { UserStats } from "../../models/UserStats";
import localStyles from "./StatsSection.module.css";


interface StatsSectionProps {
    userStatsData: UserStats | null;
}

function StatsSection({userStatsData}: StatsSectionProps):JSX.Element | null {
    return (
        <section className={localStyles.statsSection}>
            {userStatsData?.chess_blitz?.best.date}
        </section>
    )
}
export default StatsSection;