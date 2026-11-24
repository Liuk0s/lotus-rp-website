const clans = [
  {
    "name": "TACHIBANA",
    "id": "tachibana",
    "kanji": "橘",
    "line": "Linhagem do Dragão",
    "virt": "MANDATO",
    "color": "#D9D4CC",
    "accent": "#C9A24A",
    "motto": "A lenda faz metade do trabalho.",
    "blurb": "A casa imperial. Cabelos brancos, olhos dourados e uma profecia cumprida.",
    "lore": "Nascidos de sangue Tenmon, os Tachibana são a carpa que saltou o Portal do Dragão. Uma velha lenda Tenmon dizia que Sogenshima seria reinada por um imperador dragão de cabelos brancos. Há quinze anos, ela deixou de ser poema. É a única casa que escolheu o próprio animal.",
    "attr": "CAR +2 · SAB +1",
    "trait": "Sangue Selado",
    "effect": "vantagem em liderança e intimidação social, desvantagem em esforço físico bruto",
    "skills": "Persuasão, História, Intuição."
  },
  {
    "name": "TENMON",
    "id": "tenmon",
    "kanji": "天文",
    "line": "Linhagem da Carpa",
    "virt": "ERUDIÇÃO",
    "color": "#E07A5F",
    "accent": "#B39DDB",
    "motto": "A carpa é paciente. Nós não.",
    "blurb": "Eruditos, ricos e altivos. A pintura no rosto diz quem você é antes que você fale.",
    "lore": "Elite intelectual e política do império. Entre nobres e ricos Tenmon, a pintura de kabuki é um valor: o desenho marca status e posição social. As mulheres Tenmon são o casamento mais disputado de Sogenshima, e essa rede de alianças é o escudo da casa. Os de fora os chamam de carpa pela cor e pela erudição. Não perceberam o resto.",
    "attr": "INT +2 · CAR +1",
    "trait": "Olho do Véu",
    "effect": "vantagem em perceber padrões, sinais e o que está por vir, CON -1",
    "skills": "Conhecimento Místico, Enganação, Atuação."
  },
  {
    "name": "FUJIBAYASHI",
    "id": "fujibayashi",
    "kanji": "藤林",
    "line": "Linhagem do Boi",
    "virt": "HONRA",
    "color": "#4B3B6B",
    "accent": "#8C6A3F",
    "motto": "O silêncio também é resposta.",
    "blurb": "O braço que unificou o império. Os mais fiéis ao bushidō, e os mais cabeças-duras.",
    "lore": "Foram um povo bárbaro de guerreiros antes de serem nobres. Na unificação, foram a lâmina do imperador, e sua aliança com o trono nunca rachou. A casa segue o código à risca: formal na conduta, de poucas palavras, inflexível em princípio. É costume mandar os filhos para o dojo Seiryu, e muitos voltam espadachins excepcionais. O nome Boi subestima o quanto são letais.",
    "attr": "FOR +2 · CON +1",
    "trait": "Sangue de Guerra",
    "effect": "resistência a dor e medo em combate, CAR -1",
    "skills": "Atletismo, Sobrevivência, Intimidação."
  },
  {
    "name": "MIZUCHI",
    "id": "mizuchi",
    "kanji": "蛟",
    "line": "Linhagem da Aranha",
    "virt": "ASTÚCIA",
    "color": "#7FA88A",
    "accent": "#1B2420",
    "motto": "Toda corte tem um fio que leva até nós.",
    "blurb": "Alquimistas, conselheiras e sacerdotisas. A única casa governada por mulheres.",
    "lore": "No topo da casa está uma casta de sacerdotisas-dançarinas, liderada por alguém que dizem ser imortal. Os Mizuchi estão em toda corte, como conselheiros, divinadores e, dizem, coisas piores. Perfumes e unguentos mantêm o rosto jovem. A guerra com os Fujibayashi é mais antiga que o próprio império.",
    "attr": "INT +1 · CAR +2",
    "trait": "Resistência a Veneno",
    "effect": "resistência parcial a venenos e vantagem em blefe, FOR -1",
    "skills": "Enganação, Medicina, Investigação."
  },
  {
    "name": "YAMAGAMI",
    "id": "yamagami",
    "kanji": "山守",
    "line": "Linhagem do Cão",
    "virt": "LEALDADE",
    "color": "#A0522D",
    "accent": "#5E6B3A",
    "motto": "Se não ouviu a gente chegar, é porque não estávamos caçando você.",
    "blurb": "Caçadores, rastreadores e os melhores cavalos do império. Barulhentos, calorosos, impossíveis de ignorar.",
    "lore": "Da floresta funda vêm os melhores animais de Sogenshima e as madeiras mais raras. Para um Yamagami, animal domado é família e animal de caça é jantar, sem dilema nenhum. Na corte destoam de tudo: falam alto, riem alto, não sabem esperar a vez. Os nobres os apelidaram de cão por desdém. Eles adotaram o nome com orgulho.",
    "attr": "DES +2 · SAB +1",
    "trait": "Faro de Caçador",
    "effect": "vantagem em rastrear e sobreviver, penalidade em etiqueta formal",
    "skills": "Sobrevivência, Percepção, Adestrar Animais."
  },
  {
    "name": "MARUKANE",
    "id": "marukane",
    "kanji": "丸金",
    "line": "Linhagem do Javali",
    "virt": "FARTURA",
    "color": "#D2691E",
    "accent": "#4A4A4F",
    "motto": "Mesa cheia, forja acesa.",
    "blurb": "Mineiros, ferreiros e cozinheiros. Trabalham pesado e comem junto.",
    "lore": "Das montanhas vêm o minério e o aço do império, e dos Marukane vêm também os melhores banquetes. Fartura é o valor central: trabalho duro e mesa coletiva andam juntos. O cabelo volumoso é símbolo, e quem não o tem usa peruca. Os de fora os chamaram de javali pelo corpo e pelo apetite. Ninguém nomeia um povo pelo que ele faz dentro da montanha.",
    "attr": "CON +2 · FOR +1",
    "trait": "Fartura",
    "effect": "resistência a fadiga, exaustão e comida envenenada, DES -1",
    "skills": "Ferraria e Mineração, Culinária, Resistência."
  },
  {
    "name": "YUKINARI",
    "id": "yukinari",
    "kanji": "雪成",
    "line": "Linhagem do Cervo",
    "virt": "VIGÍLIA",
    "color": "#A9D6E5",
    "accent": "#2E5E7E",
    "motto": "Quem vê primeiro, vive.",
    "blurb": "A aldeia no gelo. A primeira a ver o que sai da floresta.",
    "lore": "Pescam e caçam onde ninguém mais aguenta viver, e exportam o que só o gelo dá. Vivem na borda da floresta e são os primeiros a notar quando algo atravessa. Na entrada de cada aldeia há galhadas de cervo, e foi por elas que os de fora lhes deram o nome. Dizem que os chefes sabem das coisas antes que aconteçam. Mas isso é boato.",
    "attr": "SAB +2 · CON +1",
    "trait": "Premonição",
    "effect": "vantagem contra ameaças sobrenaturais e resistência ao frio, CAR -1",
    "skills": "Sobrevivência no Extremo, Percepção do Sobrenatural, Náutica."
  },
  {
    "name": "UMIBUNE",
    "id": "umibune",
    "kanji": "海舟",
    "line": "Linhagem do Polvo",
    "virt": "VERSATILIDADE",
    "color": "#1F5F6B",
    "accent": "#C8553D",
    "motto": "Muitos braços, um só nome.",
    "blurb": "Cidades-estado do mar. Armada imperial de um lado, corso do outro.",
    "lore": "Umibune não é uma família, é um título: o nome da casa mais antiga das ilhas, que fala por todas elas diante da corte. Cada ilha tem sua casa e seu sobrenome. Muitos servem na Armada Imperial. Nas franjas, há quem viva de corso, e há portos que compram de segunda mão sem perguntar.",
    "attr": "DES +1 · CAR +1",
    "trait": "Pernas de Convés",
    "effect": "sem penalidade de equilíbrio em terreno instável e vantagem em navegação",
    "skills": "Navegação, Persuasão, Furtividade."
  }
];
document.documentElement.classList.add("js");
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const mon = id => '<svg class="ico" aria-hidden="true"><use href="#i-' + id + '"/></svg>';
const nav = $("#navigation");
const menu = $(".menu");
const dialog = $("dialog");
const motion = matchMedia("(prefers-reduced-motion: reduce)");
let opener;
function toggleMenu(open) {
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-label", open ? "Fechar navegação" : "Abrir navegação");
  menu.textContent = open ? "×" : "☰";
  nav.classList.toggle("open", open);
  if (open) nav.querySelector("a").focus();
}
menu.onclick = () => toggleMenu(!nav.classList.contains("open"));
nav.querySelectorAll("a").forEach((a,i) => {
  a.style.setProperty("--n",i);
  a.onclick = () => toggleMenu(false);
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && nav.classList.contains("open")) {
    toggleMenu(false);
    menu.focus();
  }
});
function show(title, body, decoration = mon("lotus")) {
  if (!dialog.open) opener = document.activeElement;
  $("#dialog-content").innerHTML = decoration + '<h2 id="dialog-title">' + title + '</h2>' + body;
  dialog.showModal();
  $(".close").focus();
}
$(".close").onclick = () => dialog.close();
dialog.addEventListener("close", () => opener?.focus());
dialog.onclick = e => { if (e.target === dialog && !e.target.closest("#dialog-content")) {
  const r = dialog.getBoundingClientRect();
  if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close();
}};
function clanDetail(c) {
  const body = `<p class="sub">${c.line} · ${c.virt} · ${c.kanji}</p><p><i>“${c.motto}”</i></p><p>${c.lore}</p><h3>Ficha</h3><p>${c.attr}</p><p><strong>${c.trait}</strong> — ${c.effect}.</p><p>Perícias: ${c.skills}</p>`;
  show(c.name,body,'<img class="portrait" alt="Retrato da casa '+c.name+'" width="768" height="1344" src="assets/clan-'+c.id+'.webp">'+mon(c.id));
}
const sectionGuide = id => [$(id+' h2').textContent,'<p>'+$(id+' .body').textContent+'</p>'];
const guides = {
 "#houses":["Linhagens",clans.map(c=>'<p><button class="btn" data-house="'+c.id+'">'+c.name+' · '+c.virt+'</button></p>').join("")],
 "#provinces":["Sobre o império",'<p>'+$("#empire .body").textContent+'</p>'+$$(".province em").map(el=>'<p>'+el.textContent+'</p>').join("")],
 "#court":sectionGuide("#politics"), "#spirit-guide":sectionGuide("#world"), "#war-guide":sectionGuide("#war")
};
document.addEventListener("click",event=>{
 const el=event.target.closest("a,button"); if(!el)return;
 const guide=guides[el.getAttribute("href")];
 if(guide){event.preventDefault();show(...guide)}
 if(el.dataset.house)clanDetail(clans.find(c=>c.id===el.dataset.house));
 if(el.matches(".province")){const [title,desc]=el.querySelector("em").textContent.split(" · ");show(title,"<p>"+desc+"</p>")}
 if(el.dataset.court)show(el.dataset.court,sectionGuide("#politics")[1]);
 if(el.dataset.channel){
   event.preventDefault();
   const name=el.dataset.channel;
   const info={Discord:"O convite oficial do Discord estará disponível aqui.",Whitelist:"Entre no Discord, leia as regras e envie sua ficha para avaliação manual. O convite oficial estará disponível aqui.",Regras:"As regras oficiais estarão disponíveis aqui.","Status do servidor":"O status do servidor estará disponível aqui.",YouTube:"O canal oficial estará disponível aqui."};
   show(name,"<p>"+info[name]+"</p>");
 }
});
const hero = $(".hero");
const canvas = $("canvas");
const ctx = canvas.getContext("2d");
const petals = Array.from({length:35},()=>({x:Math.random(),y:Math.random(),speed:0.015+Math.random()*.027,size:3+Math.random()*4,phase:Math.random()*6.28}));
let frame = 0, visible = true, last = 0, width = 1, height = 1;
function resize() {
  width=canvas.width=hero.clientWidth;
  height=canvas.height=hero.clientHeight;
}
new ResizeObserver(resize).observe(hero);
function draw(t) {
  const dt=Math.min((t-last)/1000,.05);
  last=t;
  ctx.clearRect(0,0,width,height);
  for(const p of petals){
    p.y+=dt*p.speed;p.x-=dt*(p.speed*.6+Math.sin(t*.0006+p.phase)*.009);
    if(p.y>1.03||p.x<-.03){p.y=-.02;p.x=.25+Math.random()*.83}
    ctx.save();ctx.translate(p.x*width,p.y*height);ctx.rotate(p.phase+Math.sin(t*.0005+p.phase));ctx.scale(.22+.78*Math.abs(Math.cos(t*.0008+p.phase)),1);
    ctx.fillStyle=p.phase>3?"#c06a8599":"#f0b8c899";ctx.beginPath();ctx.ellipse(0,0,p.size,p.size*.43,.5,0,Math.PI*2);ctx.fill();ctx.restore();
  }
  frame=requestAnimationFrame(draw);
}
function animate(){
  cancelAnimationFrame(frame);
  if(visible&&!motion.matches&&!document.hidden&&ctx) frame=requestAnimationFrame(draw);
}
new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;animate()}).observe(hero);
motion.addEventListener("change",animate);
document.addEventListener("visibilitychange",animate);
let mouseX=0, mouseY=0;
const gates=$$(".torii");
function position(){
  $("header").classList.toggle("scrolled",scrollY>80);
  if(!motion.matches && visible) gates.forEach((gate,i)=>gate.style.transform='translate('+((i?1:-1)*mouseX)+'px,'+(scrollY*.12+mouseY)+'px)');
}
hero.addEventListener("pointermove",e=>{mouseX=(e.clientX/width-.5)*16;mouseY=(e.clientY/height-.5)*12;position()});
window.addEventListener("scroll",position,{passive:true});position();
for(const layer of $$(".particles")){
  for(let i=0;i<18;i++){
    const particle=document.createElement("i");
    if(layer.parentElement.id==="war")particle.className="ember";
    particle.style.cssText="left:"+Math.random()*100+"%;top:"+Math.random()*102+"%;width:3px;height:3px;animation-delay:-"+Math.random()*9+"s;animation-duration:"+(5+Math.random()*6)+"s";
    layer.append(particle);
  }
}
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add("reveal");observer.unobserve(entry.target)}
}),{threshold:.08});
$$(".panel").forEach(panel=>observer.observe(panel));
const active=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){
    nav.querySelector("[aria-current]")?.removeAttribute("aria-current");
    nav.querySelector('[href="#'+entry.target.id+'"]')?.setAttribute("aria-current","location");
  }
}),{rootMargin:"-18% 0px -50% 0px"});
$$("main section").forEach(s=>active.observe(s));

// Restore the visitor’s volume before requesting audible autoplay.
const music = $("#soundtrack");
const controls = $(".sound-control");
const toggleSound = $(".sound-toggle");
const level = $(".sound-level");
const preferenceKey = "lotus-rp:sound";
let muted = false;
let gain = .2;
try {
  const saved = JSON.parse(localStorage.getItem(preferenceKey));
  if (saved && Number.isFinite(saved.gain) && saved.gain > 0 && saved.gain <= 1) gain = saved.gain;
  muted = saved?.muted === true;
} catch {}
function saveSound() {
  try { localStorage.setItem(preferenceKey, JSON.stringify({gain, muted})); } catch {}
}
function syncSound() {
  const audible = !music.paused && !music.muted;
  const label = audible ? "Silenciar música" : "Tocar Moon Gate Empire";
  toggleSound.setAttribute("aria-label", label);
  toggleSound.title = label;
  controls.classList.toggle("playing", audible);
  level.value = muted ? 0 : Math.round(gain * 100);
  level.setAttribute("aria-valuetext", level.value + "%");
}
function applySound() {
  music.volume = gain;
  music.muted = muted;
  syncSound();
}
function startMusic() {
  if (!muted && music.paused) music.play().catch(syncSound);
}
toggleSound.addEventListener("click", () => {
  muted = !music.paused && !muted;
  applySound();
  startMusic();
  saveSound();
});
level.addEventListener("input", () => {
  const value = Number(level.value) / 100;
  muted = value === 0;
  if (value > 0) gain = value;
  applySound();
  startMusic();
  saveSound();
});
document.addEventListener("click", event => {
  if (!controls.contains(event.target) && event.isTrusted) startMusic();
});
music.addEventListener("playing", syncSound);
music.addEventListener("pause", syncSound);
applySound();
controls.hidden = false;
startMusic();

const soundOpen = $(".sound-open");
const volumePanel = $("#volume-panel");
let pinned = false;
function setPanel(open) {
  volumePanel.hidden = !open;
  soundOpen.setAttribute("aria-expanded", String(open));
  if (!open) pinned = false;
}
controls.addEventListener("pointerenter", event => {
  if (event.pointerType === "mouse") setPanel(true);
});
controls.addEventListener("pointerleave", () => {
  if (!pinned && !volumePanel.contains(document.activeElement)) setPanel(false);
});
controls.addEventListener("focusin", event => {
  if (event.target.matches(":focus-visible")) setPanel(true);
});
controls.addEventListener("focusout", event => {
  if (!controls.contains(event.relatedTarget)) setPanel(false);
});
soundOpen.addEventListener("click", () => {
  pinned = !pinned;
  setPanel(pinned);
  if (pinned) startMusic();
});
document.addEventListener("pointerdown", event => {
  if (!controls.contains(event.target)) setPanel(false);
});
controls.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    soundOpen.focus();
    setPanel(false);
  }
});

// A mesma deriva das pétalas, em cinza branca sobre Nagatake.
const season = $("#season");
const ash = $(".ash");
const ashContext = ash.getContext("2d");
const fog = document.createElement("div");
fog.className = "season-fog";
season.prepend(fog);
let ashFrame, ashTime = 0, fogOffset = 0, inValley = false;
const flakes = Array.from({length:42},()=>({x:Math.random(),y:Math.random(),speed:.018+Math.random()*.032,r:.55+Math.random()*1.3}));
function paintAsh(time) {
  const elapsed=Math.min((time-ashTime)/1000,.05);
  ashTime=time;
  fogOffset += elapsed*(season.matches(":hover")?8:3);
  fog.style.backgroundPositionX=fogOffset+"px";
  ashContext.clearRect(0,0,ash.width,ash.height);
  ashContext.fillStyle="#f7f3e6a6";
  for(const flake of flakes){
    flake.y=(flake.y+flake.speed*elapsed)%1;
    ashContext.beginPath();
    ashContext.arc(flake.x*ash.width+Math.sin(time*.0005+flake.x*20)*13,flake.y*ash.height,flake.r,0,Math.PI*2);
    ashContext.fill();
  }
  ashFrame=requestAnimationFrame(paintAsh);
}
function valleyPlayback(){
  cancelAnimationFrame(ashFrame);
  if(inValley&&!motion.matches&&!document.hidden)ashFrame=requestAnimationFrame(paintAsh);
  else ashContext.clearRect(0,0,ash.width,ash.height);
}
new ResizeObserver(()=>{ash.width=season.clientWidth;ash.height=season.clientHeight}).observe(season);
new IntersectionObserver(([e])=>{inValley=e.isIntersecting;valleyPlayback()}).observe(season);
motion.addEventListener("change",valleyPlayback);
document.addEventListener("visibilitychange",valleyPlayback);
const harbor = $(".harbor-zones");
const label = harbor.querySelector(".path-label");
function identifyPath(link) {
  const bounds=link.getBoundingClientRect(),scene=harbor.getBoundingClientRect();
  label.textContent=link.getAttribute("aria-label");
  label.style.left=(bounds.left+bounds.width/2-scene.left)+"px";
  label.style.top=(bounds.top-scene.top)+"px";
  label.hidden=false;
}
for(const link of harbor.querySelectorAll("a")){
  link.addEventListener("pointerenter",()=>identifyPath(link));
  link.addEventListener("focus",()=>identifyPath(link));
  link.addEventListener("pointerleave",()=>{label.hidden=true});
  link.addEventListener("blur",()=>{label.hidden=true});
}
