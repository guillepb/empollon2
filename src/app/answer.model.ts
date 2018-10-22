export class Answer {
    constructor (
        public text: string,
        public isCorrect: boolean
    ) {}

    static mapFromApi(array: Array<Object>): Answer[] {
        return array.map(obj => new Answer(obj['texto'], obj['correcta']));
    }

}
