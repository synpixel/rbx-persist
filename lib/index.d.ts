export declare const LogLevel: {
    None: 0,
    Warn: 1,
    Info: 2,
    Debug: 3
}

export type LogLevel = 0 | 1 | 2 | 3

export { default as Store } from "./Store"
export { default as Session } from "./Session"

export declare function setLogLevel(logLevel: LogLevel): void