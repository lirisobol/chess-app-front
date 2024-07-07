import { ChessVariantStats } from "../../models/UserStats";
import localStyles from "./CommonModeCard.module.css";
import externalLinkIcon from "../../assets/images/external_link_icon_dark.svg";

interface CommonModeCardProps {
    mode: string;
    stats: ChessVariantStats;
    icon: string;
}
function CommonModeCard({mode, stats, icon}: CommonModeCardProps):JSX.Element {
    if (!stats) {
        return <div className={localStyles.commonModeCard}>No data available for {mode}</div>;
    }
    const handleViewGameClick = () => {
        window.open(stats.best.game, '_blank', 'noopener,noreferrer');
    };
    const handleMoreDetailsLink = () => {
        // TEMPORARY FOR TESTING !
        window.open(stats.best.game, '_blank', 'noopener,noreferrer');
    };


    return (
        <div className={localStyles.commonModeCard}>

            <div className={localStyles.cardHeaderSection}>
                <div className={localStyles.variantIcon}>
                    <img src={icon} alt={`${mode} icon`} />
                </div>
                <h3>{mode}</h3>
            </div>

            <div className="vr"></div>

            <div className={localStyles.cardRecordSection}>
                <div className={localStyles.variantRecord}>
                    <div>
                        <p className={localStyles.recordTitle}>Wins</p>
                        <p className={localStyles.recordScore}>{stats.record.win}</p>
                    </div>
                    <div>
                        <p className={localStyles.recordTitle}>Losses</p>
                        <p className={localStyles.recordScore}>{stats.record.loss}</p>
                    </div>
                    <div>
                        <p className={localStyles.recordTitle}>Draws</p>
                        <p className={localStyles.recordScore}>{stats.record.draw}</p>
                    </div>
                </div>
            </div>
            <div className="vr"></div>


            <div className={localStyles.cardBestSection}>
                <h5>Best Game</h5>
                <div className={localStyles.variantBest}>
                    <div>
                        <p className={localStyles.bestTitle}>Date</p>
                        <p className={localStyles.bestScore}>{new Date(stats.best?.date * 1000).toLocaleDateString()}</p>
                    </div>
                    <div>
                        <p className={localStyles.bestTitle}>Rating</p>
                        <p className={localStyles.bestScore}>{stats.best?.rating}</p>
                    </div>
                </div>
                <button 
                    className="btn btn-dark rounded-pill" 
                    onClick={handleViewGameClick}
                    >
                        View Game <img src={externalLinkIcon} alt="External Link Icon"/>
                    </button>

            </div>

            <div className="vr"></div>

            <div className={localStyles.moreDetailsLink}>
                <button 
                    className="btn btn-dark rounded-pill" 
                    onClick={handleMoreDetailsLink}
                    >
                    More Details <img src={externalLinkIcon} alt="External Link Icon"/>
                </button>
            </div>

        </div>
    );
}

export default CommonModeCard;