import { ChessVariantStats } from "../../models/UserStats";
import localStyles from "./CommonModeCard.module.css";
import { faArrowUpRightFromSquare ,faTrophy, faTimesCircle, faHandshake} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface CommonModeCardProps {
    mode: string;
    stats: ChessVariantStats;
    icon: string;
}
function CommonModeCard({mode, stats, icon}: CommonModeCardProps):JSX.Element {
    if (!stats) {
        return <div className={localStyles.commonModeCard}>No data available for {mode}</div>;
    }

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
                <div className={localStyles.variantRecordContainer}>
                    <div>
                        <FontAwesomeIcon icon={faTrophy}/>
                        <p className={localStyles.recordTitle}> Wins</p>
                        <p className={localStyles.recordScore}>{stats.record.win}</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faTimesCircle}/>
                        <p className={localStyles.recordTitle}> Losses</p>
                        <p className={localStyles.recordScore}>{stats.record.loss}</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faHandshake}/>
                        <p className={localStyles.recordTitle}> Draws</p>
                        <p className={localStyles.recordScore}>{stats.record.draw}</p>
                    </div>
                </div>
            </div>
            <div className="vr"></div>

            <div className={localStyles.cardBestSection}>
                future rating trend or more stats
            </div>

            <div className="vr"></div>

            <div className={localStyles.moreDetailsLink}>
                <button 
                    className="btn btn-outline-dark rounded-pill" 
                    onClick={handleMoreDetailsLink}
                    >
                    More Details 
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={localStyles.buttonIcon} />
                </button>
            </div>

        </div>
    );
}

export default CommonModeCard;