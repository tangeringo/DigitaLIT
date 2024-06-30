export enum UserTypes {
    CHECK_USER_SESSION = 'user/CHECK_USER_SESSION',
    SET_CURRENT_USER = 'user/SET_CURRENT_USER',
    MANUAL_SIGN_IN_START = "user/MANUAL_SIGN_IN_START",
    GOOGLE_SIGN_IN_START = 'user/GOOGLE_SIGN_IN_START',
    FACEBOOK_SIGN_IN_START = 'user/FACEBOOK_SIGN_IN_START',
    TWITTER_SIGN_IN_START = 'user/TWITTER_SIGN_IN_START',
    SIGN_IN_FAILED = 'user/SIGN_IN_FAILED',
    SIGN_IN_SUCCESS = 'user/SIGN_IN_SUCCESS',
    SIGN_OUT_START = 'user/SIGN_OUT_START',
    SIGN_OUT_FAILED = 'user/SIGN_OUT_FAILED',
    SIGN_OUT_SUCCESS = 'user/SIGN_OUT_SUCCESS',
}