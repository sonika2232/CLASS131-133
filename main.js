function setup()
{
canvas= createCanvas(600 , 400);
canvas.center();
objectDetector=ml5.objectDetector('cocossd' , modelLoaded);
document.getElementById("status").innerHTML="status: detecting objects";
}

img="";
status="";
objects=[];

function modelLoaded()
{
console.log("modelLoaded");
status=true;
objectDetector.detect(img , gotResult);
}

function gotResult(error , results)
{
if(error)
{
console.log(error);
}
console.log(results);
objects= results;
}

function preload()
{
img=loadImage('dog_cat.jpg');
}

function draw()
{
image(img , 0 , 0 , 600 , 400);
if(status!="")
{
for(i=0;
    i<objects.length;
    i++)
    {
    document.getElementById("status").innerHTML="status: object detected";

    fill('#FF0000');
    percent=floor(objects[i].confidence * 100);
    text(objects[i].label + "" + percent + "%" , objects[i].x + 15 , objects[i].y + 15);
    noFill();
    stroke('#8B0000');
    rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
    
    }
    }
}