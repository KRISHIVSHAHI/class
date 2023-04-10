nosex=0;
nosey=0;

function preload()

{
    clownnose=loadImage('https://i.postimg.cc/pLqHkFdC/clownnose.jpg');

}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,model_loaded);
    poseNet.on('pose',got_pose);

}

function got_pose(results)
{
    if(results.length > 0)
    {
        console.log(results);
       nosex =  results[0].pose.nose.x;
        nosey =  results[0].pose.nose.y;
    }

}

function model_loaded()
{
    console.log("Posenet is intialised");
}

function draw()
{
    image(video,0,0,300,300);
   image(clownnose,nosex,nosey,30,30);
    

}

function take_snapshot()
{
    save('filter_image.png');
}