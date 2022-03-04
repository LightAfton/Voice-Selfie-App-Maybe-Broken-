var SpeechRecogniton=window.webkitSpeechRecogniton;
var recogniton=new SpeechRecogniton();
function start()
{
    document.getElementById("textbox").innerHTML="";
    recogniton.start();
}
recogniton.onresult= function(event)
{
    console.log(event);
    var content=event.results[0][0].transscript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    if (content=="take my selfie")
    {
        console.log("taking selfie--");
        speak();
    
    }
}
function speak()
{
    var synth=window.speechSynthesis;
    speakdata="taking your selfie in 5 seconds";
    var utterthis=new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterthis);
    webcam.attach(camera);
    setTimeout(function()
    
    {
        takesnapshot();
        save();
    },5000);
}

camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});
function takesnapshot(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="selfieimage" src="'+data_uri+'">';
    });
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfieimage").src;
    link.href=image;
    link.click();
}