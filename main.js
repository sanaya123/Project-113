function preload(){

}

function setup(){
    canvas=createCanvas(400,350)
    canvas.position(110,250)
    video=createCapture(VIDEO)
    video.hide()
}

function draw(){
    image(video,100,100,200,150)
    stroke("red")
    fill("red")
    circle(30,30,40)
    circle(370,320,40)
    circle(370,30,40)
    circle(30,320,40)
    stroke("green")
    fill("green")
    rect(25,50,10,250)
    rect(365,50,10,250)
    rect(50,25,300,10)
    rect(50,315,300,10)
}


function take_snapshot(){
    save("student_name.png")
}