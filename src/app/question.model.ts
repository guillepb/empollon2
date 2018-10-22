import { Answer } from './answer.model';

export class Question {
    constructor (
        public text: string,
        public answers: Answer[],
        public isAnswered = false,
        public isCorrect?: boolean
    ) {}

    static mapFromApi(array: Array<Object>): Question[] {
        return array.map(obj => {
            const answers = Answer.mapFromApi(obj['respuestas']);
            return new Question(obj['texto'], answers);
        });
    }
}
