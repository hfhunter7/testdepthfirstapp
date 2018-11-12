import jwt from 'jwt-simple';

export const googleAppID = {
    development: "298283731016-ike6a4d93pi8c04pvbkqsqj3g3uoa3q8.apps.googleusercontent.com",
    production: "298283731016-ike6a4d93pi8c04pvbkqsqj3g3uoa3q8.apps.googleusercontent.com",
};

export const googleAppSecret = {
    development: "ZAbVArsSRUsaLhQZcj5aBAbC",
    production: "ZAbVArsSRUsaLhQZcj5aBAbC",
};

const appToken = {
    development: "gw*1ar4Y0*KoF!v#yu%b2kG3e<4{v(*WV|J}|M",
    staging: process.env.REACT_APP_SECRET_TOKEN,
    production: process.env.REACT_APP_SECRET_TOKEN
};

const appHeader = {
    development: "trainingcenter@version1.0",
    staging: process.env.REACT_APP_SECRET_HEADER,
    production: process.env.REACT_APP_SECRET_HEADER
};

export function createJwtFromToken(token='',auth_token=''){
    const u = {
        appKey: appHeader[process.env.NODE_ENV],
        tokenKey: auth_token,
        emailToken: token
    };

    return jwt.encode(u, appToken[process.env.NODE_ENV]);
    //return tempToken;
}

export function createJwtForUser(user={}){
    const u = {
        user: {
            username: user.username || "",
            old_password: user.old_password || "",
            new_password: user.new_password || "",
            confirm_password: user.confirm_password || "",
        }
    };

    return jwt.encode(u, appToken[process.env.NODE_ENV]);
}

export const cloundConfig = {
    cloud_name: process.env.REACT_APP_CLOUD_NAME,
    api_key: process.env.REACT_APP_API_KEY,
    api_secret: process.env.REACT_APP_API_SECRET
}