function setup() {
	createCanvas(600, 600);
	angleMode(DEGREES);
}

function draw() {
	background(0);
	translate(300, 300);
	rotate(270);
	let hr = hour();
	let mn = minute();
	let sc = second();
	
	
	strokeWeight(5);
	stroke(255);
	noFill();
	ellipse(0, 0, 450, 450);
	
	let end1 = map(sc, 0, 60, 0, 360);
	arc(0, 0, 450, 450, 0, end1);
	let end2 = map(mn, 0, 60, 0, 360);
	arc(0, 0, 450, 450, 0, end2);
	let end3 = map(hr, 0, 12, 0, 360);
	arc(0, 0, 450, 450, 0, end3);

	push();
	rotate(end1);
	stroke(180, 180, 180);
	strokeWeight(2);
	line(0, 0, 215, 0);
	pop();

	push();
	rotate(end2);
	stroke(180, 50, 130);
	strokeWeight(5);
	line(0, 0, 190, 0);
	pop();

	push();
	rotate(end3);
	stroke(230, 80, 10);
	strokeWeight(5);
	line(0, 0, 150, 0);
	pop();
	
	stroke(230, 230, 230);
	point(0, 0);
	
	
	/* fill(255);
	noStroke();
	text(hours + ':' + minutes + ':' + seconds, 280, 300); */
}



