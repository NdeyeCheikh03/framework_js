// importer la classe Qcm
const Qcm = require('./qcm');

// remplacer les simples chaines de caracteres par des instances de la classe Qcm
const qcms = [
    new Qcm({ id: 0, name: 'La reponse est', nbpoints: 20, subject: 'Javascript' }),
    new Qcm({ id: 1, name: 'La reponse est', nbpoints: 20, subject: 'Angular' }),
    new Qcm({ id: 2, name: 'La reponse est', nbpoints: 10, subject: 'Express' }),
    new Qcm({ id: 3, name: 'La reponse est', nbpoints: 30, subject: 'Tryhard'}),
];

const question = require ('./question');
const questions=[
    new question({id:1,name:'Question1',score:+10,subject:'',enonce:'Quel est le langage de programmation utilisé'}),
    new question({id:2,name:'Question2',score:+15,subject:'',enonce:'Quel est le framework frontend utilisé'}),
    new question({id:3,name:'Question3',score:+20,subject:'',enonce:'Quel est le framework backend utilisé'}),
]


const addQcm = (rawObject) => {
    //FIXME: fonction qui ajoute un element a la liste et incremente l'id
    let maxId = 0;
    //recupere l'id le plus grand
    qcms.forEach((qcm) => {
        if (maxId < qcm.Id) {
            maxId = qcm.id;
        }
    });

    // creation du QCM avec l id max
    const qcm = new Qcm(
        {
            id: maxId + 1,
            name: rawObject.name,
            subject: rawObject.subject,
            nbpoints: Number(rawObject.nbpoints)
        });
    // ajout du QCM a la liste
    qcms.push(qcm);
}
const addquestion = (rawObject) => {
    //FIXME: fonction qui ajoute un element a la liste et incremente l'id
    let maxId = 0;
    //recupere l'id le plus grand
     questions.forEach((question) => {
            if (maxId < question.Id) {
                maxId = question.id;
            }
        });

       
    const question= new question(
        {
            id: maxId + 1,
            name: rawObject.name,
            subject: rawObject.subject,
            score: Number(rawObject.score)
        });
    // ajout du QCM a la liste
    questions.push(question);
}




module.exports = { qcms, addQcm,questions,addquestion };
