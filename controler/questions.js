const {questions, addquestion} = require('../models/inmemory');

class Question {
    #id;
    #name;
    #theme;
    #nbpoints;

    constructor(QuestionTocreate) {
      this.#id = QuestionTocreate.id;
      this.#name = QuestionTocreate.name;
      this.#theme = QuestionTocreate.theme;

      this.#nbpoints = QuestionTocreate.nbpoints;
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

    get theme() {
      return this.#theme;
    }





    toJSON(key) {
      return { id: this.#id, name: this.#name };
    }
  }

const displayquestion = (req, res) => {
    for (let question of questions) {
        console.log(`${question.score}: ${typeof(question.score)}`);
    }
    res.render('questions', {questions: questions});
};

const displayquestionDetailed = (req, res) => {
    const id = Number(req.params.question.id);
    console.log(id);
    const question = questions.find((element) => element.id === id);
    res.render('question', {question});
}

const displayquestionJson = (req, res) => {
    res.json({questions});
}

const displayFormquestion = (req, res) => {
    res.render('new_question');
};

const createNewquestion = (req, res) => {
    console.log(req.body);
    addquestion({
        name: req.body.name,
        subject: req.body.subject,
        score: req.body.score
    });
    res.redirect('/questions');
};




module.exports = {Question, displayquestion, displayFormquestion, createNewquestion, displayquestionJson, displayquestionDetailed};
