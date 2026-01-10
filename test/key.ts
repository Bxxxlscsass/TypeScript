interface KeyValuePair<Key = string, Value = Key> {
    key: Key;
    value: Value;
}
//agora funciona sem <>, pois key assume 'string' por padrão 
let nowWorks: KeyValuePair = {
    key: "rating scale",
    value: "excellent",
};
//type: keyvaluepair<string, number>
let allExplicit: KeyValuePair<string, string> = {
    key: "rating scale",
    value: "10",
};

let firstMissing: KeyValuePair<string, number> = {
    //error generic type "keyvaluepair<key, value>" acrescentar só tinha o let firstMissing
    //requires between 1 and 2 type arguments 
    key: "rating scale",  //escala de classificação ou escala da avaliação 
    value: 10,
    //key = é string
    //value = number
};

