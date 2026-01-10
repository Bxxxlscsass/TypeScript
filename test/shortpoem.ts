type ShortPoemBase = { author: string };
type Haiku = ShortPoemBase & { kigo: string; type: "haiku"};
type Villanelle = ShortPoemBase & { meter: number; type: "villanelle"};
type ShortPoem = Haiku | Villanelle;

const oneArt: ShortPoem = {
    author: "Elizabeth Bishop",
    type: "villanelle",
    meter: 5, // requirement satisfied for function 
};
//type "{author: string, type:}"
//is not assignable to type "ShortPoem"
//is not assignable to type
//property 'meter' is missing type
//but requiered in type
//never let notNumber, but functiexcellent using 
//escolher um campo detalhado para sua função 




