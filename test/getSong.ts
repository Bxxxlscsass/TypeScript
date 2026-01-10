function getSongRecordingDate(song: string): Date | undefined {
    switch (song) {
        case "Stringe Fruit":
        return new Date('April 20, 1939'); //Ok

        case "Greensleeves":
            return undefined; 
            //return "unknown"; error
            //Ok: return underfied 
            //error: type 'string' is not assingnable to type 'Date'

            default:
                return undefined; //Ok, must be spelled correctly 
    }
}

