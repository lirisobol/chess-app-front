
class AppConfig {
    public readonly CHESS_COM_BASE_URL = "https://api.chess.com/pub/player/"
    public readonly CHESS_COM_PROFILE_URL = this.CHESS_COM_BASE_URL;
}

export const appConfig = new AppConfig();