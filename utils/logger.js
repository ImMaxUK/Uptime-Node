import chalk from 'chalk';
import { config } from './config.js';

/**
 * Four log levels:
 * [INF] INFO
 * [WRN] WARNING
 * [ERR] ERROR
 * [DBG] DEBUG
 */

/**
 * Takes the level + message and returns a formatted string.
 * @param {string} level The level of the message.
 * @param {string} message The message to be formatted.
 */

export function log(level, message) {
    // If --debug or -d flag
    if(level.toLocaleLowerCase('dbg')) {
        if(!process.argv.includes('-d') && !process.argv.includes('--debug')) return;
    }

    const levelsMap = {
        INF: chalk.bgGreen(' INF '),
        WRN: chalk.bgYellow(' WRN '),
        ERR: chalk.bgRed(' ERR '),
        DBG: chalk.bgBlue(' DBG '),
    };
    var levels = ["err", "wrn", "inf", "dbg"];
    if (levels.indexOf(level.toLocaleLowerCase()) === -1) throw new Error('An invalid logging level was provided.')
    console.log(date() + `${levelsMap[level.toLocaleUpperCase()]} ${message}`);
}

/**
 * 
 * @returns {string} The current date and time.
 */

function date() {
    try {
        const timezone = (new Date().toLocaleString('en-GB', { timeZone: config.TIMEZONE }) + ' ')
            .replace(',', '')
        return chalk.cyan(timezone)
    } catch (error) {
        return chalk.red('Invalid Timezone ')
    }
}