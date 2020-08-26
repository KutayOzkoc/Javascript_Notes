function QuizQuestion(text, choice, answer) {
    this.text = text;
    this.choice = choice;
    this.answer = answer;
}

QuizQuestion.prototype.Ans = function (answer) {
    return this.answer === answer;
}


//Quiz Constructor

function Quiz(questionarr) {
    this.questionarr = questionarr;
    this.score = 0;
    this.qindex = 0;

}


Quiz.prototype.getQuestion = function () {
    return this.questionarr[this.qindex];
}


Quiz.prototype.FinisMark = function () {
    return this.questionarr.length === this.qindex;
}

Quiz.prototype.guess = function (answer) {
    var question = this.getQuestion();
    if (question.Ans(answer)) {
        this.score++;
    }
    this.qindex++;
}



var q1 = new QuizQuestion("What is my name ? ", ["kutay", "ali", "mehmet", "ahmet"], "kutay");
var q2 = new QuizQuestion("What is my job ? ", ["chef", "soldier", "engineer", "football player"], "engineer");
var q3 = new QuizQuestion("What is my favorite color ? ", ["red", "blue", "purple", "yellow"], "blue");


var questionarr = [q1, q2, q3];

//Quiz Start 

var quiz = new Quiz(questionarr);

loadQuestion();

function loadQuestion(){
    if(quiz.FinisMark()){
        
        showScore();
       
    }
    else{
        var ques = quiz.getQuestion();
        var choices = ques.choice;
        document.querySelector('#question').textContent = ques.text;

        for(var i = 0 ; i<choices.length;i++){
            var element = document.querySelector('#choice'+i);
            element.innerHTML = choices[i];

            guess('btn' + i,choices[i]);
            showProgress();
        }
    }
}

function guess(id,guess){
    var btn = document.getElementById(id);
    btn.onclick = function(){
        if(quiz.guess(guess)){
            btn.className = 'btn btn-success';
        }
        
        loadQuestion();
    }
}

function showScore(){
    var html = '<h1>Sonuc</h1> <h4>' + quiz.score + '</h4>';
    document.querySelector('.card-body').innerHTML = html;
    document.querySelector('#progress').innerHTML = "Bitti";
}

function showProgress(){
    var questionnotot = quiz.questionarr.length;
    var questionno = quiz.qindex+1;
    document.querySelector('#progress').innerHTML = questionno + " of " + questionnotot;
    
}