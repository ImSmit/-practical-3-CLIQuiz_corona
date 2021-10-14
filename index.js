const firebase = require('firebase-admin');
var rs = require('readline-sync');
let chalk = require("chalk");
var score = 0;

let red = chalk.bold.red;
let green = chalk.bold.green;
let blue = chalk.bold.blue;
let orange = chalk.bold.orange;
let yellow = chalk.bold.yellow;
let white = chalk.bold.white;

var start = () => {
    console.log(chalk.blue("-----Welcome To Game-----"));
    var name = rs.question(yellow("Enter Your Name : "));
    console.log(green("Hello "+name));
    console.log(white("There will be 5 Question"));
    console.log(blue("+5 for correct answer and -2 for Worng ans"));
    console.log(green("(A)(B)(C)(D)"),white("For Answer"));

    var rand = question.sort(() =>  .5 - Math.random()).slice(0,10);
    for (q in rand){
        console.log(yellow(question[q].que));
        console.log(blue(question[q].a));
        console.log(blue(question[q].b));
        console.log(blue(question[q].c));
        console.log(blue(question[q].d));
        var qu = q;
        var ans = rs.question(white("ans : "));
        checkans(q,ans);
    }
    finalScore(score);
}
function checkans(ques,anss){
    if(question[ques].ans.toLowerCase() === anss.toLowerCase()){
        score += 5;
        console.log(white("Your ans is "),green("True"), white("Current Score is : ") + green(score));
        console.log("------------------------");
    }else{
        score -= 2;
        console.log(white("Your ans is "),red("False"), white("Current Score is : ") + green(score));
        currectAns = question[q].ans;
        if(currectAns.toLowerCase() === 'a'){
            console.log(white("Correct Answer is : ")+green(question[q].a));
        }else if(currectAns.toLowerCase() === 'b'){
            console.log(white("Correct Answer is : ")+green(question[q].b));
        }else if(currectAns.toLowerCase() === 'c'){
            console.log(white("Correct Answer is : ")+green(question[q].c));
        }else if(currectAns.toLowerCase() === 'd'){
            console.log(white("Correct Answer is : ")+green(question[q].d));
        }
        console.log("------------------------");
    }
}
function finalScore(sc){
    console.log(white("Final Score is :") + green(sc), white("/ 50"));
    console.log(green("Thank you for Playing"));
}
//firebase.database().ref("Questions").set("hello")
var question = [{
    que: "The most common symptoms of COVID-19 are Fever Dry cough Fatigue",
    a : "A. Fever",
    b : "B. Dry",
    c : "C. cough",
    d : "D. All of Those",
    ans: "d"
}, {
    que: "What does the “19” in “COVID-19” refer to?",
    a : "A. There are 19 variants of the coronavirus",
    b : "B. There are 19 symptoms of coronavirus disease.",
    c : "C. This is the 19th coronavirus pandemic.",
    d : "D. The coronavirus and the disease it causes were identified in 2019. ",
    ans: "d"
}, {
    que: "There is more than one coronavirus.",
    a: "A. True.",
    b: "B. False.",
    c: "C. Can be True or False",
    d: "Non of these",
    ans: "a"
}, {
    que: "The “corona” in coronavirus means: ",
    a: "A. Sun",
    b: "B. Beer",
    c: "C. Strong",
    d: "D. Crown",
    ans: "d"
}, {
    que: "An effective hand sanitizer contains at least this percentage of alcohol to kill the coronavirus and other germs:",
    a: "A. 30%",
    b : "B. 45%",
    c: "C. 60%",
    d : "D. 80%",
    ans: "c"
},{
    que: "When was COVID-19 first discovered?",
    a: "A. 2017",
    b : "B. 2018",
    c: "C. 2019",
    d : "D. 2020",
    ans: "c"
},{
    que: "Once you are fully vaccinated you may not be required to wear a mask in public places.",
    a: "A. True",
    b : "B. False",
    c: "C. Maybe True Or False",
    d : "D. Non of These",
    ans: "a"
},{
    que: "When is it safe to be closer than 6 feet to another person who is not sick with COVID-19?",
    a: "A. When the person is related to you.",
    b: "B. When you have already had COVID-19.",
    c: "C. When the person normally lives with you.",
    d: "D. When you are outdoors.",
    ans: "c"
},{
    que: "Which of these is not a common COVID-19 symptom?",
    a: "A. Blurred vision.",
    b: "B. A cough.",
    c: "C. Unusual fatigue.",
    d: "D. Fever.",
    ans: "a"
},{
    que: "Staying apart from other people when you have been exposed to the coronavirus is called:",
    a: "A. Physical distancing.",
    b: "B. Isolation.",
    c: "C. Quarantine.",
    d: "D. None of These",
    ans: "c"
}];
start();
