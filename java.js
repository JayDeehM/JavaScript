
function showDate() {
	var a = document.getElementById('display-date');
    if (a.style.display === 'none') {
        a.style.display = 'block';
    } else {
        a.style.display = 'none';
    }
}

function showCal() {
	var b = document.getElementById('calculate');
    if (b.style.display === 'none') {
        b.style.display = 'block';
    } else {
        b.style.display = 'none';
    }
}

function areaCal() {
	var c = document.getElementById('area');
    if (c.style.display === 'none') {
        c.style.display = 'block';
    } else {
        c.style.display = 'none';
    }
}

function genIdea() {
	var d = document.getElementById('ideagen');
    if (d.style.display === 'none') {
        d.style.display = 'block';
    } else {
        d.style.display = 'none';
    }
}

function displayDate(id) {
    id.innerHTML = Date();
}

function add() {
	var x = document.getElementById('firstNum').value;
	var y = document.getElementById('secondNum').value;

	var z = +x + +y;

	document.getElementById("result").innerHTML = z;
}

function dif() {
	var x = document.getElementById('firstNum').value;
	var y = document.getElementById('secondNum').value;

	var z = x - y;

	document.getElementById("result").innerHTML = z;
}

function pro() {
	var x = document.getElementById('firstNum').value;
	var y = document.getElementById('secondNum').value;

	var z = x * y;

	document.getElementById("result").innerHTML = z;
}

function quo() {
	var x = document.getElementById('firstNum').value;
	var y = document.getElementById('secondNum').value;

	var z = x / y;

	document.getElementById("result").innerHTML = z;
}

function generate() {
	var activities = [
		"Bungee jumping",
		"Strip pole workouts",
		"Skydiving",
		"Shark cage diving",
		"Scuba diving",
		"Whitewater rafting",
		"Go on a safari",
		"Ride a motorcycle (Wheelie if you're brave)",
		"Handbrake turn a car while traveling over 30 mph",
		"Get in a physical fight",
		"Drive a lamborghini",
		"Go camping",
		"Spend a night sleeping under the stars",
		"Go on a holiday with your best friend",
		"Take a cross-country road trip with your friend",
		"Build your own igloo",
		"Learn to do a standing somersault",
		"Go to a nightclub on your own and make some new friends",
		"Throw a huge party for all your friends",
		"Witness a final match of a World Cup event, live",
		"Visit the Eiffel tower",
		"Go to the pyramids of Egypt",
		"Live in a foreign country for at least 3 months",
		"Live on an island for at least a month",
		"Build a giant sandcastle",
		"Point at someone and shout 'You're one of them!' Run and pretend to trip  Crawl away slowly",
		"Go to a library and ask for a book on how to read",
		"Bring a desk on an elevator  When people try to get on ask if they have an appointment",
		"Come running out of the zoo yelling 'I'm free! I'm free!",
		"Hug a tree and when people walk by you and say 'we're having a moment",
		"Play a game of poker",
		"Play a game of blackjack",
		"Get your fortune told",
		"Kiss a total stranger",
		"Go on a blind date",
		"Go skinny-dipping in the ocean",
		"Go to a strip-club",
		"Join the mile-high club",
		"Get married",
		"Say 'I love you'",
		"Get a proffessional photo portfolio",
		"Be a teacher",
		"Help someone without wanting anything in return",
		"Discover your life's purpose",
		"Get your life in shape",
		"Make a difference to the world",
		"Watch the sun rise",
		"Watch the sun set",
		"Plant a tree",
		"Learn a foreign language",
		"Learn to play an instrument",
		"Learn to dance",
		"Write your own book",
		"Eat something that's alive",
		"Fast for at least 2 days",
		"Climb a high mountain",
		"Buld something that will outlast you",
		"Attend a concert or a music festival",
		"Send a message in a bottle",
		"Dance in the pouring rain",
		"Take a vow of silence for a day",
		"Forgive someone",
		"Make a donation",
		"Catch a fish",
		"Interview a tree in public",
		"Go to a random house and walk in and say honey I'm home",
		"Go out and drink with a friend",
		"Send a letter to an old friend",
		"Make a cocktail",
		"Celebrate cheat day today!",
		"Share your playlist",
		"Dance til you drop",
		"Go to a theme park",
		"Visit your grandparents",
		"Pick up a random book at the library and read it"];

	var rand = Math.floor(Math.random() * activities.length);
	var x = activities[rand];

	document.getElementById("idea").innerHTML = x;
}

function circleArea() {
	var e = document.getElementById('circle');
    if (e.style.display === 'none') {
        e.style.display = 'block';
    } else {
        e.style.display = 'none';
    }
}

function triangleArea() {
	var f = document.getElementById('triangle');
    if (f.style.display === 'none') {
        f.style.display = 'block';
    } else {
        f.style.display = 'none';
    }
}

function areatri() {
	var w = document.getElementById('Numone').value;
	var x = document.getElementById('Numtwo').value;

	var y = w / x;
	var z = y / 2;

	document.getElementById("areaans").innerHTML = z;
}

function areacirc() {
	var w = 3.141592653589793238462643383279502884197;
	var x = document.getElementById('rad').value;

	var y = x * x;
	var z = w * y;

	document.getElementById("areaans").innerHTML = z;
}
