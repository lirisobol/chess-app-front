export interface ChessVariantStats {
    last: {
        rating: number;
        date: number;
        rd: number;
    };
    best: {
        rating: number;
        date: number;
        game: string;
    };
    record: {
        win: number;
        loss: number;
        draw: number;
        time_per_move?: number; // Optional since not all modes have it
        timeout_percent?: number; // Optional since not all modes have it
    };
}

export interface TacticsStats {
    highest: {
        rating: number;
        date: number;
    };
    lowest: {
        rating: number;
        date: number;
    };
}

export interface UserStats {
    chess_daily?: ChessVariantStats;
    chess960_daily?: ChessVariantStats;
    chess_rapid?: ChessVariantStats;
    chess_bullet?: ChessVariantStats;
    chess_blitz?: ChessVariantStats;
    fide?: number;
    tactics: TacticsStats;
    lessons?: { 
        highest: {
            rating: number;
            date: number;
        };
    };
    puzzle_rush: {
        best: {
            total_attempts: number;
            score: number;
        };
    };
}
