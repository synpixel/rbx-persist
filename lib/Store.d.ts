import type { Signal } from "@rbxts/beacon"
import Session from "./Session"

export interface StoreOptions<TKey, TData> {
    dataStore?: GlobalDataStore,
    lockId?: string,
    key?: (key: TKey) => string,
    data: (key: TKey) => TData,
    default: (key: TKey) => TData,
    metadata?: (key: TKey) => Map<unknown, unknown> | undefined,
    userIds?: ((key: TKey) => [number] | undefined),
    releaseSessionsOnClose?: boolean,
    autosaveSeconds?: number
}

export default class Store<TKey, TData> {
    public defaultLockId: string
    public datastore: GlobalDataStore
    public lockId: string
    public name: string
    public sessions: {[key: string]: Session<TKey, TData>}
    public sessionReleased: Signal<LuaTuple<[session: Session<TKey, TData>, didSave: boolean]>>

    constructor(name: string, options: StoreOptions<TKey, TData>)
    getKey(key: TKey): string
    getData(key: TKey): TData
    getDefault(key: TKey): TData
    getMetadata(key: TKey): Map<unknown, unknown> | undefined
    getUserIds(key: TKey): [number] | undefined
    getSession(key: TKey): Session<TKey, TData> | undefined
    load(key: TKey, onSessionLocked?: "requestRelease" | "steal", defaultData?: TData): Promise<Session<TKey, TData>>
}