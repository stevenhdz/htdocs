const Jimp=require("jimp");
const robot=require("robotjs");
const fs=require("fs");
setInterval(function(){
    var img=robot.screen.capture();
    var data=[];
    var bitmap=img.image;
    var i=0,l=bitmap.length;
    for(i=0;i<l;i+=4){
        data.push(bitmap[i+2],bitmap[i+1],bitmap[i],bitmap[i+3]);
    }
    new Jimp({
        "data":new Uint8Array(data),
        "width":img.width,
        "height":img.height
    },function(err,image){
        if(err){
            fs.writeFile(__dirname+"/data/screen.png","",function(){});
        }else{
            image.write(__dirname+"/data/screen.png");
        }
    });
},1000);