export class Application {
    constructor(
        public id: number,
        public documents: string,
        public timestamp: Date,
        public user: number,
        public job: number
    ) {}
}
