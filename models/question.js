// id, name, theme, subject, author, nbpoints

class question {

    #id;
    #name;
    #enonce;
    #score;

    constructor(new_question) {
        this.#id = new_question.id;
        this.#name = new_question.name;
        this.#enonce = new_question.enonce;
        this.#score = new_question.score;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get enonce() {
        return this.#enonce;
    }
    set enonce(value) {
        this.#enonce = value;
    }

    get score() {
        return this.#score;
    }
    set score(value) {
        this.#score = value;
    }
    toJSON(key) {
        console.log(key);
        return {id: this.#id, name: this.#name};
    }
}

module.exports = question;