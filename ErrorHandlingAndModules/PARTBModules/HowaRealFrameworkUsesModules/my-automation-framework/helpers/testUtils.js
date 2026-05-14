// Utility functions used across all tests
export function formatDuration(ms) {
    if (ms < 1000) return `${ms}ms`;
    return `${(ms / 1000).toFixed(1)}s`;
}

export function getPassRate(passed, total) {
    if (total === 0) return "0%";
    return `${Math.round((passed / total) * 100)}%`;
}

export function generateTestEmail() {
    let id = Math.floor(Math.random() * 100000);
    return `testuser${id}@automation.com`;
}

export async function withRetry(action, retries = 3, delay = 1000) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            return await action();
        } catch (error) {
            if (attempt === retries) throw error;
            await new Promise(r => setTimeout(r, delay));
        }
    }
}

export function printDivider(char = "=", length = 50) {
    console.log(char.repeat(length));
}