// Simple in-memory cache for exam test data (listening, reading, writing)
// TTL-based: cached entry expires after 1 hour
// Manual invalidation supported (called when admin updates/deletes a test)

interface CacheEntry<T> {
    data: T;
    expiresAt: number;
}

const TTL_MS = 60 * 60 * 1000; // 1 hour

const stores: Record<string, Map<string, CacheEntry<unknown>>> = {
    listening: new Map(),
    reading: new Map(),
    writing: new Map(),
};

const keyOf = (testNumber: number | string) => String(testNumber);

export const getCache = <T>(namespace: "listening" | "reading" | "writing", testNumber: number | string): T | null => {
    const store = stores[namespace];
    if (!store) return null;

    const entry = store.get(keyOf(testNumber));
    if (!entry) return null;

    if (Date.now() > entry.expiresAt) {
        store.delete(keyOf(testNumber));
        return null;
    }

    return entry.data as T;
};

export const setCache = <T>(namespace: "listening" | "reading" | "writing", testNumber: number | string, data: T): void => {
    const store = stores[namespace];
    if (!store) return;

    store.set(keyOf(testNumber), {
        data,
        expiresAt: Date.now() + TTL_MS,
    });
};

export const invalidateCache = (namespace: "listening" | "reading" | "writing", testNumber?: number | string): void => {
    const store = stores[namespace];
    if (!store) return;

    if (testNumber == null) {
        store.clear();
    } else {
        store.delete(keyOf(testNumber));
    }
};

export const invalidateAllCaches = (): void => {
    Object.values(stores).forEach((s) => s.clear());
};
