// File: helpers/testUtils.js

// Export right at declaration
export function formatDuration(ms) {
    if (ms < 1000) return `${ms}ms`;
    return `${(ms / 1000).toFixed(1)}s`;
}

export function generateTestId(prefix = "TC") {
    return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

export function getPassRate(passed, total) {
    if (total === 0) return "0%";
    return `${Math.round((passed / total) * 100)}%`;
}

export const DEFAULT_TIMEOUT = 30000;
export const BASE_URL        = "https://myapp.com";