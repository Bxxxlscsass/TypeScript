//const artist = "Augusta savage";
//console.log({ artist });

//let bestSong = Math.random() > 0.5
//? "Chain of fools"
//: "Repect";

//let firstName = "Whitney";
//firstName.length();  .. 

//let rawdataFirts: boolean | number | string | null | undefined
//let rawdataSecond: boolean | number | string | null | undefined
//let rawdataThird: boolean | number | string | null | undefined 

type Poet = {
    born: number;
    name: string;
};

let poetLater: Poet;

//Ok 
poetLater = {
    born: 1935,
    name: "Sara teasdale",
};

poetLater =  {
    born: 1789,
    name: "Emily Dicknson"};
//Error:Type ´script´ is not assignale to ´Poet hypatia´