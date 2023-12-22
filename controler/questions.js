const {questions, addquestion} = require('../models/inmemory');

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

module.exports = {displayquestion, displayFormquestion, createNewquestion, displayquestionJson, displayquestionDetailed};