export interface LeapSecond {
    timestamp: number;
    offset: number;
}
export interface List {
    leap_seconds: LeapSecond[],
    last_updated: number;
    expiration_date: number;
    hash: string;
}
declare const list: List;
export default list;
