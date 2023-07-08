import type { Signal } from "@rbxts/beacon"
import Store from "./Store"

export default class Session<TKey, TData> {
    public key: TKey
    public keyInfo: DataStoreKeyInfo
    public data: TData
    public isReleased: boolean
    public isReleasing: boolean
    public store: Store<TKey, TData>
    public released: Signal<boolean>

    constructor(store: Store<TKey, TData>, key: TKey, data: TData, keyInfo: DataStoreKeyInfo)
    update(): Promise<void>
    release(): Promise<void>
}