function lineShrink() {
    document.getElementById('div1').style.height = "15px";
    document.getElementById('div2').style.height = "8px";
    document.getElementById('div3').style.height = "10px";
}

function lineExpand() {
    document.getElementById('div1').style.height = "20px";
    document.getElementById('div2').style.height = "20px";
    document.getElementById('div3').style.height = "20px";
}
function show() {
    document.getElementById('line').style.top = "0px";
}
function hide() {
    document.getElementById('line').style.top = "-20px";
}
function slide(tab) {
    if (tab == home) {
        document.getElementById('line').style.left = "320px";
    }
    if (tab == about) {
        document.getElementById('line').style.left = "455px";
    }
    if (tab == services) {
        document.getElementById('line').style.left = "625px";
    }
    if (tab == contact) {
        document.getElementById('line').style.left = "800px";
    }
    if (tab == India) {
        document.getElementById('line').style.left = "930px";
    }
}

function displaybox(event,id) {
    var x = event.clientX;
    var y = event.clientY;
    document.getElementById(id).style.visibility="visible";
  
    document.getElementById(id).style.left=`${x}px`;
    document.getElementById(id).style.top=`${y}px`;
  }
function displayOff(event,id){
    document.getElementById(id).style.visibility="hidden";
      
}

function display(event,id){
    document.getElementById("India").style.visibility="hidden"; 
    const states=['wb','ut','up','tr','tn','tg','sk','rj','py','pb','or','nl','mz','mp','mn','ml','mh','ld','kl','ka','jk','jh','hr','hp','gj','ga','dn','dl','dd','ct','ch','br','as','ar','ap','an'];
    for (i=0;i<=36;i++){
        if (states[i]!=id){
            document.getElementById(states[i]).style.visibility="hidden";
            console.log('hidden',states[i]);
        }
        else{
            document.getElementById(id).style.visibility="visible";
        }
    }
}

function info(id) {
    var x = document.getElementById(id);
    if(x.style.display!="block")
        x.style.display="none";
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }