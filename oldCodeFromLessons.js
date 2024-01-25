const answer = +prompt("Вам есть 18?", "18");
console.log(answer + 5);

const answers = [];

answers[0] = prompt("Как ваше имя?", '');
answers[1] = prompt("Как ваша фамилия?", '');
answers[2] = prompt("сколько вам лет?", '');

console.log(typeof(answers));
console.log(typeof(null));


const category = 'toys';

console.log(`https://someurl.com/${category}/5`);

const user = 'Daniil';

alert(`Привет, ${user}`)

console.log('arr' + "- object");
console.log(4 + +"5");

let incr = 10, 
    decr = 10;

++incr;
--decr;

console.log(++incr);
console.log(--decr);

console.log(5 % 2);

console.log(2 + 2 * 2 !== "6");

const isChecked = false,
      isClose = false;

console.log(isChecked || !isClose || 'no');

/*


//GITHUB


*/


/*
git init

git config --global user.name "Daniil"

git config --global user.email example@gmail.com

git status

git add -A

git add main.css

git add *.css

git commit -a -m"first commit"

git commit -a -m"second"

git log

git push

git clone https://github.com/LastStap/testProject.git project_2

"askjbvgkjweb"        =>          ctrl + c x2         =>        :wq!

*/
/*
if (1) {
    console.log('Ok');
} else {
    console.log('ERROR');
};



if (num < 40) {
    console.log("Error");
} else if (num > 100) {
    console.log('Too much');
} else {
    console.log('Ok');
};

(num === 50) ? console.log('Ok') : console.log('ERROR');

const num = 50;

switch (num) {
    case 49: 
        console.log('Wrong');
        break;
    case 100: 
        console.log('Wrong');
        break;
    case 51: 
        console.log('Correct');
        break;
    default: 
        console.log('Not in this time');
        break;
};
*/

const hamburger = 5;
const fries = 0;

if(hamburger && fries) {
    console.log('Im full');
};

console.log((hamburger && fries));
