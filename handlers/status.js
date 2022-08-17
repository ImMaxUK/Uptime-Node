const { default: services } = await import("../services.json", {
    assert: {
        type: "json",
    },
});
import { http } from '../services/https.js';
import { log } from '../utils/logger.js';
import { config } from '../utils/config.js';
import chalk from 'chalk';

function checkServices() {
    for (let i = 0; i < services.length; i++) {
        (async function (check) {
            if (services[i].type === "https") {
                const response = await http(services[i].address);
                log("inf", `${chalk.yellow(services[i].name)} is ${response.status === "OK" ? `${chalk.greenBright('online')} and has a latency of ${response.latency}ms` : `${chalk.red('offline')}`}`);
                await new Promise(resolve => setTimeout(resolve, 100));
            }
        })(i)
    }
}

// Run the first check for service status
checkServices()

// Automate checks every XYZ
setInterval(() => {
    checkServices()
}, process.env.CHECKINTERVAL * 1000)