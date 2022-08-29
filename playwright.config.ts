import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {   
    timeout: 50000,
    retries: 0,
    testDir: 'tests',
    use:{
        headless: false,
        viewport: {width:1400, height:900},
        actionTimeout: 10000,
        ignoreHTTPSErrors: true,
        video: 'retain-on-failure',/*off*/
        screenshot: 'only-on-failure',/*off*/
    },
    projects:[
        {
            name: 'Chromium',
            use: {browserName: 'chromium'},
        },
        {
            name: 'Firefox',
            use: {browserName: 'firefox'},
        },
        {
            name: 'Webkit',
            use: {browserName: 'webkit'},
        },
    ],
}
export default config