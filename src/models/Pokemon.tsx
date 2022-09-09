export interface Pokemon{
    id: number,
    name: string,
    types: string[],
    evolution: {
        id: number,
        image: string,
    }[]
    //Stats
    baseHappines: number,
    captureRate: number,
    hatchCounter: number,
    //Sprites
    frontImage: string,
    backImage: string,
}