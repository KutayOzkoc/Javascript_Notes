export interface Point {
    x: number,
    y: number
}

export interface Vehicle {
    travelTo(point: Point): void;
}
