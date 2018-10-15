import { Answer } from './answer.model';

export class Question {
    constructor (
        public text: string,
        public answers: Answer[],
        public isAnswered = false,
        public isCorrect?: boolean
    ) {}
}
