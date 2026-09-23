const stars = document.querySelector(".stars");
for(let i=0;i<45;i++){
  const s=document.createElement("span");
  s.className="star";
  s.style.left=Math.random()*100+"%";
  s.style.top=Math.random()*75+"%";
  s.style.animationDelay=(Math.random()*2)+"s";
  stars.appendChild(s);
}

function makePetal(){
  const p=document.createElement("span");
  p.className="fall";
  p.textContent="✦";
  p.style.left=Math.random()*100+"vw";
  p.style.setProperty("--drift",(Math.random()*240-120)+"px");
  p.style.animationDuration=(4+Math.random()*4)+"s";
  p.style.fontSize=(12+Math.random()*18)+"px";
  document.getElementById("petals").appendChild(p);
  setTimeout(()=>p.remove(),8500);
}
setInterval(makePetal,420);

document.getElementById("more").addEventListener("click",()=>{
  for(let i=0;i<18;i++) setTimeout(makePetal,i*80);
  const text=document.querySelector(".message p");
  text.textContent="Espero que estas rosas te recuerden lo especial que eres. 💛";
});
