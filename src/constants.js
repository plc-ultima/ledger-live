// @flow

export const SYNC_ALL_INTERVAL = 120 * 1000;
export const SYNC_BOOT_DELAY = 2 * 1000;
export const SYNC_PENDING_INTERVAL = 10 * 1000;
export const SYNC_MAX_CONCURRENT = 4;

export const UP_TO_DATE_THRESHOLD = SYNC_ALL_INTERVAL;

export const MAX_ACCOUNT_NAME_SIZE = 50;

export const BLE_SCANNING_NOTHING_TIMEOUT = 30 * 1000;

export const GENUINE_CHECK_TIMEOUT = 60 * 1000;

export const GET_CALLS_RETRY = 3;
export const GET_CALLS_TIMEOUT = 60000;

export const LEDGER_REST_API_BASE = "https://explorers.api.live.ledger.com";

export const VIBRATION_PATTERN_ERROR = [0, 150];
