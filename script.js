new Typed(".typing",{
strings:[
"AI Enthusiast",
"Prompt Engineer",
"Software Developer"
],
typeSpeed:70,
backSpeed:50,
loop:true
});

document.getElementById("themeBtn")
.onclick=function(){
document.body.classList.toggle("light");
};

tsParticles.load("tsparticles",{
particles:{
number:{value:70},
size:{value:2},
move:{enable:true},
links:{
enable:true
}
}
});