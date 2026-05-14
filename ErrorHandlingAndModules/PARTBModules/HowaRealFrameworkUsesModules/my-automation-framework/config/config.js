// Named exports — configuration values
export const config = {
    baseURL: "https://myapp.com",

    environments: {
        dev:     "https://dev.myapp.com",
        staging: "https://staging.myapp.com",
        prod:    "https://myapp.com"
    },

    timeouts: {
        navigation: 30000,
        element:    10000,
        assertion:  5000
    },

    browser: {
        headless: true,
        slowMo:   0
    }
};

export const currentEnv = process.env.ENV || "staging";
export const baseURL    = config.environments[currentEnv];