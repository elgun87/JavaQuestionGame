var game = {

    answerC: 0,
    answerU: 0,
    unAnswered: 0,

    gameQuestion: [
        {
            question: "What is a Class Variable?",
            answers: ["These are variables declared with in a class, outside any method, with the static keyword.", 
            "These are variables declared with in a class, outside any method, with the static keyword.", 
            "All variables when you create a Class", 
            "All answers are correct"],
            correctAnswer: "These are variables declared with in a class, outside any method, with the static keyword."
          }, 
          {
            question: "What kind of variables a class can consist of?",
            answers: ["Local variable", "instance variables and class variables", "class variables", "All above"],
            correctAnswer: "All above"
          }, 
          {
            question: "What is a Local Variable?",
            answers: ["Variables defined inside methods", "Variables defined inside methods and blocks", "Variables defined inside methods, constructors or blocks are called local variables", 
            "Variables defined inside only blocks"],
            correctAnswer: "Variables defined inside methods, constructors or blocks are called local variables"
          }, 
          {
            question: "If a variable is declared as private, where may the variable be accessed??",
            answers: ["You need create object from class in order to have access", "out of another class", "A private variable may only be accessed within the class in which it is declared.", 
            "if private no access is allowed"],
            correctAnswer: "A private variable may only be accessed within the class in which it is declared."
          }, 
          {
            question: "Can a double value be cast to a byte?",
            answers: ["No double is bigger", "Not possible byte is bigger", "Not possible byte is smaller", "Yes double valuse can be cast to a byte"],
            correctAnswer: "Yes double valuse can be cast to a byte"
          }, 
          {
            question: "What is the difference between this strings: String str1 = null and String str2 = ' ' ",
            answers: ["No difference", "str2 has no value", "str1 does not have memory in the heap", "str2 does not have memory in the heap"],
            correctAnswer: "str1 does not memory in the heap"
          }, 
          {
            question: "Variable of the boolean type is automatically initialized as?",
            answers: ["true", "no default value", "null", "false"],
            correctAnswer: "false"
          }, 
          {
            question: "Select correct answer",
            answers: ["If we do not explicitly write a constructor for a class the java compiler does not build a default constructor for that class.",
             "Constructor gets invoked when a new object is created. Every class does not have a constructor.We need to create it", "Default value of byte datatype is null", "Global variables can have null value"],
            correctAnswer: "Global variables can have null value"
          },
         
    ],
};


$('#start').on('click', function(){
    var myVar = setInterval(myTimer,1000);
    document.getElementById('sub-wrapper').innerHTML = '';

    let secondDiv = document.createElement('h2');
    secondDiv.append(document.createTextNode('You have ' + second + ' seconds'));
    secondDiv.style = 'font-size: 40px';
    $('#second').html(secondDiv);

    var button = document.createElement('button');

    button.classList.add('.button');

    button.append(document.createTextNode('End Game'));

    for(let i = 0;i < game.gameQuestion.length;i++){

        let questionDiv = document.createElement('h2');

        questionDiv.append(document.createTextNode(game.gameQuestion[i].question));

        questionDiv.style = 'margin-top: 10px;'

        $('#sub-wrapper').append(questionDiv);

        for(let j = 0;j < game.gameQuestion[i].answers.length; j++){

            let label = document.createElement('label');
            label.append(document.createTextNode(game.gameQuestion[i].answers[j]));
            let input = document.createElement('input');
            input.dataset['answer'] = game.gameQuestion[i].answers[j];
            input.setAttribute('type','radio');
            input.style = 'margin-left: 10px';
            input.setAttribute('name','name - '+i);
            input.classList.add('all_input');
            $('#sub-wrapper').append(input);
            $('#sub-wrapper').append(label);

        }
    }
    $('#sub-wrapper').append(button);

    $(button).on('click', function(){
        $('#second').html('');
        showResult();
        function stopTime(){
            clearInterval(myVar);
        };
        stopTime();
    });

});



///// This is function to display question before or after end of time or when you click end button ////
//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////
function showResult(){
    var input_list = $('.all_input:checked');
        for(let i = 0;i < input_list.length;i ++){
            if(input_list[i].dataset['answer'] === game.gameQuestion[i].correctAnswer){
                game.answerC ++;
            }else{
                game.answerU ++;
            }
    };
        document.getElementById('sub-wrapper').innerHTML = '';
        document.getElementById('second').innerHTML = '';
        var title = document.createElement('h2');
        title.append(document.createTextNode('ALL DONE!!!'));

        var correctDiv = document.createElement('div');
        var corrAnswer = document.createElement('h3')
        corrAnswer.append(document.createTextNode('Correct answer: ' + game.answerC));
        correctDiv.append(corrAnswer);

        var uncorrectDiv = document.createElement('div');
        var uncorrAnswer = document.createElement('h3');
        uncorrAnswer.append(document.createTextNode('Incorrect answer: ' + game.answerU));
        uncorrectDiv.append(uncorrAnswer);

        $('#sub-wrapper').append(title);
        $('#sub-wrapper').append(correctDiv);
        $('#sub-wrapper').append(uncorrectDiv);
};

////////////////////////////////////////////////////////////
/////////////// this is function is for display the seconds////////

var second = 300;

function myTimer(){
    second --;
    if(second < 0){
        showResult();
        return false;
    };
    displaySecond();
}

function displaySecond(){
    let secondDiv = document.createElement('h2');
    secondDiv.append(document.createTextNode('You have ' + second + ' seconds'));
    secondDiv.style = 'font-size: 40px';
    $('#second').html(secondDiv);
};



