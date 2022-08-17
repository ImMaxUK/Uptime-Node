/**
 * Copyright (C) 2022-Present github.com/ImMaxUK
 * 
 * This project is licensed under the Apache License.
 * 
 * Contact me VIA max@maxuk.me on Email
 *             OR MΛX#1464 on Discord
 */

import { log } from './utils/logger.js'

log("dbg", "Starting UptimeNode 🕐");

import { http } from './services/https.js';
console.log(await http('https://derock-dev.vercel.app'))