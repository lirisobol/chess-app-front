import { ChessVariantStats } from "../../models/UserStats";
import localStyles from "./CommonModeCard.module.css";

interface CommonModeCardProps {
    mode: string;
    stats: ChessVariantStats;
    icon: string;
}
function CommonModeCard({mode, stats, icon}: CommonModeCardProps):JSX.Element {
    if (!stats) {
        return <div className={localStyles.commonModeCard}>No data available for {mode}</div>;
    }

    return (
        <div className={localStyles.commonModeCard}>
            <div className={localStyles.cardHeader}>
                <img src={icon} alt={`${mode} icon`} />
                <h3>{mode}</h3>
            </div>

            <div className="vr"></div>

            <div className={localStyles.cardRecord}>
                <h3>Record</h3>
                <p>Rating: {stats.last.rating}</p>
            </div>

            <div className="vr"></div>

            <div className={localStyles.cardBest}>
                <h3>Best</h3>
                <p>Date: {new Date(stats.best.date * 1000).toLocaleDateString()}</p>
                <p>
                    <a href={stats.best.game} target="_blank" rel="noopener noreferrer">
                        View Game
                    </a>
                </p>
                <p>Rating: {stats.best.rating}</p>
            </div>
        </div>
    );
}

export default CommonModeCard;