const menuBtn=document.getElementById("menuBtn");
const nav=document.getElementById("nav");
menuBtn.addEventListener("click",()=>nav.classList.toggle("active"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("active")));

document.querySelectorAll(".faq-item").forEach(item=>{
  item.addEventListener("click",()=>item.classList.toggle("open"));
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

let fps=144;
setInterval(()=>{
  fps=138+Math.floor(Math.random()*18);
  const el=document.getElementById("fps");
  if(el)el.textContent=fps;
},900);

function downloadNotice(e){
  e.preventDefault();
  alert("The latest QuiltClient download will appear here when the release file is published.");
}
