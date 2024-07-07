import { UserStats } from "../../models/UserStats";
import CommonModeCard from "../CommonModeCard/CommonModeCard";
import localStyles from "./StatsSection.module.css";

// Chess Variant Icons
import chessBlitzIcon from "../../assets/images/chess_blitz_icon.png";
import chessRapidIcon from "../../assets/images/chess_rapid_icon.png";
import chessBulletIcon from "../../assets/images/chess_bullet_icon.png";
import chessDailyIcon from "../../assets/images/chess_daily_icon.png";
import chess960Icon from "../../assets/images/chess_960_icon.png";

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
                    icon={chessDailyIcon}
                />
            )}

            {userStatsData.chess960_daily && (
                <CommonModeCard 
                    mode="Daily 960"
                    stats={userStatsData.chess960_daily}
                    icon={chess960Icon}
                />
            )}

            {userStatsData.chess_bullet && (
                <CommonModeCard 
                    mode="Bullet"
                    stats={userStatsData.chess_bullet}
                    icon={chessBulletIcon}
                />
            )}

            {userStatsData.chess_blitz && (
                <CommonModeCard 
                    mode="Blitz"
                    stats={userStatsData.chess_blitz}
                    icon={chessBlitzIcon}
                />
            )}

            {userStatsData.chess_rapid && (
                <CommonModeCard 
                    mode="Rapid"
                    stats={userStatsData.chess_rapid}
                    icon={chessRapidIcon}
                />
            )}
        </section>
    )
}
export default StatsSection;