interface GivesNumber {
    giveNumber(): number;

}
interface GivesString {
    giveString(): string;
}
interface GivesBothAndEither extends GivesNumber, GivesString {
    giveEither(): number | string;
}

function useGivesBoth(instance: GivesBothAndEither) {
    instance.giveEither();  //type: number | string
    instance.giveNumber();  //type: number 
    instance.giveString();  //type: string
}
    
