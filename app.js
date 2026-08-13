const groups=[
['general','Genel durum / mortalite',['depresyon','iştahsızlık','yem tüketiminde azalma','su tüketiminde azalma','su tüketiminde artış','ani ölüm','mortalite artışı','yüksek mortalite','tüy kabartma','solgunluk/anemi','kilo kaybı','gelişme geriliği','hareket etmek istememe']],
['resp','Solunum sistemi',['hapşırma','öksürme','gasping/ağız açık soluma','hızlı soluma','solunum güçlüğü','hırıltı/wheezing','raller','gurgling','burun akıntısı','sulu göz','köpüklü konjunktivit','kanlı mukus','baş sallama']],
['head','Baş / göz / tarak / sakal',['konjunktivit','göz çevresinde şişlik','sinüs şişliği','yüz ödemi','baş şişliği','tarak-sakal siyanozu','tarak-sakal solgunluğu','sakallarda şişlik','başta koyulaşma','siğil/kabuk lezyonu']],
['neuro','Nörolojik',['torticollis','paralizi','tek/çift bacak felci','kanat felci','denge bozukluğu','yan yatma','ayağa kalkamama','baş-boyun tremoru','hock üzerinde oturma','başın bacaklar arasında tutulması']],
['digest','Sindirim / dışkı',['ishal','sulu ishal','sulu beyaz ishal','beyaz ishal','yeşil ishal','sarı ishal','kanlı dışkı','kahverengi köpüklü dışkı','sindirilmemiş yem','ıslak dışkı/altlık','dehidrasyon']],
['locomotor','Bacak / eklem / tendon',['topallık','yürümek istememe','ağrılı/titrek yürüyüş','eklem şişliği','hock şişliği','tendon şişliği','breast blister','kıvrık ayak parmakları','yumuşak/esnek bacak','yumuşak gaga']],
['skin','Deri / tüy',['tüylerde yanlış pozisyon','helicopter feather','fokal deri lezyonu','deri altı kanama','kas içi kanama','sarı-beyaz ağız plağı','akar/parazit görülmesi','kaşıntı/irritasyon']],
['egg','Yumurta / üreme',['yumurta veriminde düşüş','pik verime ulaşamama','ince kabuk','yumuşak kabuk','şekilsiz yumurta','kabuk renginde kayıp','iç kalite bozukluğu','glass window egg','kuluçka randımanında azalma','günlük civciv kalitesinde düşüş']],
['perf','Büyüme / performans',['sürüde düzensiz gelişme','düşük canlı ağırlık','FCR artışı','kötü performans']]
];

const D=(name,category,symptoms,age=[],species=['chicken','turkey'])=>({name,category,symptoms,age,species});
const diseases=[
D('Aspergillosis','Solunum',['depresyon','gasping/ağız açık soluma','hızlı soluma']),
D('Avian Influenza (HPAI/LPAI)','Solunum / sistemik',['hapşırma','öksürme','sulu göz','burun akıntısı','depresyon','yem tüketiminde azalma','yumurta veriminde düşüş','ani ölüm','mortalite artışı','yüksek mortalite','tarak-sakal siyanozu','yüz ödemi']),
D('Avian Metapneumovirus / TRT / SHS','Solunum',['hapşırma','raller','burun akıntısı','köpüklü konjunktivit','sinüs şişliği','baş şişliği','baş sallama','öksürme','yumurta veriminde düşüş']),
D('Infectious Bronchitis','Solunum',['gasping/ağız açık soluma','hapşırma','raller','burun akıntısı','depresyon','yem tüketiminde azalma','su tüketiminde artış','ıslak dışkı/altlık','yumurta veriminde düşüş','şekilsiz yumurta','iç kalite bozukluğu']),
D('Infectious Coryza','Solunum',['burun akıntısı','yüz ödemi','konjunktivit','iştahsızlık','yem tüketiminde azalma','yumurta veriminde düşüş']),
D('Infectious Laryngotracheitis','Solunum',['burun akıntısı','raller','gasping/ağız açık soluma','solunum güçlüğü','kanlı mukus','yumurta veriminde düşüş','mortalite artışı']),
D('Mycoplasma gallisepticum (CRD)','Solunum',['solunum güçlüğü','iştahsızlık','gelişme geriliği','hapşırma','yumurta veriminde düşüş','kuluçka randımanında azalma','günlük civciv kalitesinde düşüş']),
D('Mycoplasma synoviae','Solunum / eklem',['tarak-sakal solgunluğu','topallık','gelişme geriliği','tüy kabartma','eklem şişliği','breast blister','yumurta veriminde düşüş','glass window egg']),
D('Newcastle Disease','Solunum / nörolojik',['yüksek mortalite','depresyon','solunum güçlüğü','hırıltı/wheezing','gurgling','paralizi','torticollis','yumurta veriminde düşüş','ince kabuk']),
D('Lymphoid Leucosis','Neoplastik',['kilo kaybı','depresyon','tarak-sakal solgunluğu','yumurta veriminde düşüş'],['20+']),
D('Marek’s Disease','Neoplastik / nörolojik',['kilo kaybı','paralizi','tek/çift bacak felci','depresyon','mortalite artışı'],['10-20','20+']),
D("Egg Drop Syndrome ’76",'Üreme',['pik verime ulaşamama','yumurta veriminde düşüş','şekilsiz yumurta','yumuşak kabuk','kabuk renginde kayıp','tarak-sakal solgunluğu','ishal'],['20+']),
D('Inclusion Body Hepatitis / HHS','Adenoviral',['depresyon','tüy kabartma','mortalite artışı','yüksek mortalite'],['3-6','6-10']),
D('Avian Encephalomyelitis','Nörolojik',['baş-boyun tremoru','mortalite artışı','hock üzerinde oturma','yan yatma','yumurta veriminde düşüş','kuluçka randımanında azalma'],['1-3','20+']),
D('Chicken Anaemia Virus','İmmünsüpresif',['depresyon','mortalite artışı','tarak-sakal solgunluğu','gelişme geriliği','deri altı kanama','kas içi kanama','fokal deri lezyonu'],['0-1','1-3']),
D('Fowl Pox','Deri / solunum',['siğil/kabuk lezyonu','sarı-beyaz ağız plağı','depresyon','iştahsızlık','solunum güçlüğü','yumurta veriminde düşüş']),
D('Infectious Bursal Disease (Gumboro)','İmmünsüpresif',['depresyon','tarak-sakal solgunluğu','sulu beyaz ishal','mortalite artışı','kötü performans'],['3-6','6-10']),
D('Malabsorption / Runting-Stunting Syndrome','Enterik',['FCR artışı','gelişme geriliği','sürüde düzensiz gelişme','kahverengi köpüklü dışkı','sindirilmemiş yem','helicopter feather','kötü performans'],['0-1','1-3','3-6']),
D('Reovirus Infection / Viral Arthritis','Kas-iskelet',['mortalite artışı','topallık','yürümek istememe','ağrılı/titrek yürüyüş','tendon şişliği','helicopter feather'],['1-3','3-6','6-10']),
D('Colibacillosis','Bakteriyel',['topallık','gelişme geriliği','mortalite artışı','yem tüketiminde azalma','su tüketiminde azalma']),
D('Fowl Cholera','Bakteriyel',['depresyon','iştahsızlık','yumurta veriminde düşüş','yüksek mortalite','tarak-sakal siyanozu','sakallarda şişlik','yüz ödemi','torticollis']),
D('Infectious Synovitis / Staphylococcosis','Bakteriyel / eklem',['topallık','tüy kabartma','eklem şişliği','mortalite artışı']),
D('Necrotic Enteritis','Enterik',['depresyon','hareket etmek istememe','ishal','tüy kabartma','ani ölüm','mortalite artışı','kilo kaybı','FCR artışı'],['1-3','3-6','6-10']),
D('Ornithobacterium rhinotracheale','Solunum',['sulu göz','sinüs şişliği','solunum güçlüğü','gelişme geriliği']),
D('Pullorum Disease','Salmonella',['beyaz ishal','depresyon','iştahsızlık','gelişme geriliği','mortalite artışı','tüy kabartma'],['0-1','1-3']),
D('Fowl Typhoid','Salmonella',['depresyon','ishal','tüy kabartma','tarak-sakal solgunluğu','yumurta veriminde düşüş','mortalite artışı'],['10-20','20+']),
D('Blackhead / Histomonosis','Paraziter',['depresyon','tüy kabartma','sarı ishal','başta koyulaşma','yüksek mortalite'],[],['chicken','turkey']),
D('Coccidiosis','Paraziter',['kilo kaybı','kötü performans','depresyon','kanlı dışkı','mortalite artışı']),
D('Red Mite','Paraziter',['tarak-sakal solgunluğu','kaşıntı/irritasyon','yumurta veriminde düşüş','akar/parazit görülmesi']),
D('Worm Infections','Paraziter',['ishal','tarak-sakal solgunluğu','yumurta veriminde düşüş','kilo kaybı']),
D('Riboflavin (Vitamin B2) Deficiency','Beslenme',['kıvrık ayak parmakları','ayağa kalkamama','ishal'],['0-1','1-3']),
D('Vitamin D3 Deficiency / Rickets','Beslenme',['ayağa kalkamama','yumuşak/esnek bacak','yumuşak gaga','yumuşak kabuk','yumurta veriminde düşüş'],['1-3','3-6','20+']),
D('Vitamin E Deficiency / Encephalomalacia','Beslenme',['ayağa kalkamama','yan yatma','başın bacaklar arasında tutulması'],['0-1','1-3','3-6']),
D('Salmonellosis (non-Pullorum/non-Gallinarum)','Gıda güvenliği',[]),
D('Campylobacter','Gıda güvenliği',[])
];

const state={answers:{},selected:new Set()};
const groupsEl=document.getElementById('groups');
const consent=document.getElementById('consent');
const calcBtn=document.getElementById('calculateBtn');

function renderGroups(){
 groupsEl.innerHTML=groups.map(([id,title,items])=>`<div class="symptom-group" data-group="${id}"><div class="group-head"><h3>${title} belirtisi var mı?</h3><div class="yesno"><button data-answer="yes">Evet</button><button data-answer="no">Hayır</button></div></div><div class="symptom-options hidden">${items.map((s,i)=>`<span class="chip"><input type="checkbox" id="${id}-${i}" value="${s}"><label for="${id}-${i}">${s}</label></span>`).join('')}</div></div>`).join('');
 document.querySelectorAll('.symptom-group').forEach(g=>{
  g.querySelectorAll('.yesno button').forEach(b=>b.onclick=()=>{
   const yes=b.dataset.answer==='yes'; state.answers[g.dataset.group]=yes;
   g.querySelectorAll('.yesno button').forEach(x=>x.classList.remove('active-yes','active-no'));
   b.classList.add(yes?'active-yes':'active-no');
   const options=g.querySelector('.symptom-options'); options.classList.toggle('hidden',!yes);
   if(!yes) options.querySelectorAll('input').forEach(x=>{state.selected.delete(x.value);x.checked=false});
   calcBtn.disabled=!consent.checked;
  });
  g.querySelectorAll('input[type=checkbox]').forEach(x=>x.onchange=()=>x.checked?state.selected.add(x.value):state.selected.delete(x.value));
 });
}
renderGroups();
consent.onchange=()=>calcBtn.disabled=!consent.checked;

document.getElementById('resetBtn').onclick=()=>{state.selected.clear();state.answers={};document.querySelectorAll('input[type=checkbox]').forEach(x=>{if(x!==consent)x.checked=false});document.querySelectorAll('.symptom-options').forEach(x=>x.classList.add('hidden'));document.querySelectorAll('.yesno button').forEach(x=>x.classList.remove('active-yes','active-no'));document.getElementById('results').classList.add('hidden')};

function scoreDisease(d){
 if(!d.symptoms.length)return {...d,score:0,matched:[],missing:[]};
 const selected=[...state.selected]; const matched=d.symptoms.filter(s=>state.selected.has(s));
 let raw=matched.length/d.symptoms.length;
 const age=document.getElementById('age').value,species=document.getElementById('species').value;
 if(d.age.length&&d.age.includes(age))raw+=0.08; else if(d.age.length&&!d.age.includes(age))raw-=0.05;
 if(d.species.includes(species))raw+=0.03; else raw-=0.08;
 const distinctive=['kanlı mukus','torticollis','tarak-sakal siyanozu','kanlı dışkı','glass window egg','kıvrık ayak parmakları','siğil/kabuk lezyonu','baş-boyun tremoru'];
 matched.forEach(s=>{if(distinctive.includes(s))raw+=0.05});
 return {...d,score:Math.max(0,Math.min(100,Math.round(raw*100))),matched,missing:d.symptoms.filter(s=>!state.selected.has(s)).slice(0,4)};
}
function urgency(){
 const s=state.selected;
 if(s.has('yüksek mortalite')||s.has('ani ölüm')&&s.has('solunum güçlüğü')||s.has('tarak-sakal siyanozu')||s.has('kanlı mukus')) return ['Yüksek','red','Seçilen bulgular ciddi ve/veya ihbarı mecburi hastalıklarla uyum gösterebilir.'];
 if(s.has('mortalite artışı')||s.has('paralizi')||s.has('torticollis')||s.has('kanlı dışkı'))return ['Orta-Yüksek','amber','Veteriner hekim değerlendirmesi geciktirilmemelidir.'];
 return ['Rutin/Orta','green','Acil kırmızı bayrak seçilmedi; yine de kesin tanı için veteriner hekim değerlendirmesi gerekir.'];
}
function renderResults(){
 const ranked=diseases.map(scoreDisease).filter(d=>d.symptoms.length).sort((a,b)=>b.score-a.score).slice(0,5);
 const [u,cls,utxt]=urgency();
 const r=document.getElementById('results');r.classList.remove('hidden');
 r.innerHTML=`<div class="result-hero"><h2>Klinik Uyum Sonucu</h2><p>Bu yüzdeler hastalık olasılığı değil, seçilen bulguların kaynak hastalık profiliyle uyum skorudur.</p><div class="urgent ${cls}"><strong>Klinik aciliyet: ${u}</strong><br>${utxt}</div></div>`+
 ranked.map((d,i)=>`<article class="disease-card"><div class="disease-top"><div><h3>${i+1}. ${d.name}</h3><small>${d.category}</small></div><div class="score-circle">%${d.score}<br><small>uyum</small></div></div><div class="bar"><div style="width:${d.score}%"></div></div><div class="result-grid"><div class="mini-box"><h4>Eşleşen bulgular</h4><div class="tag-wrap">${d.matched.length?d.matched.map(x=>`<span class="tag">${x}</span>`).join(''):'<span>Belirgin eşleşme yok.</span>'}</div></div><div class="mini-box"><h4>Seçilmemiş tipik bulgular</h4><div class="tag-wrap">${d.missing.map(x=>`<span class="tag missing">${x}</span>`).join('')}</div></div></div></article>`).join('')+
 `<div class="doctor-warning"><strong>Veteriner Hekim Uyarısı:</strong> Bu sonuçlar kesin tanı değildir. Tedavi, ilaç kullanımı ve aşılama için yalnızca Veteriner Hekiminizden teknik destek alınız; internetten bulunan tedavi önerilerini kendi başınıza uygulamayınız. Kesin tanı için klinik muayene, nekropsi, patolojik inceleme ve laboratuvar testleri gerekebilir. Ani mortalite, ağır solunum/nörolojik bulgu veya ihbarı mecburi hastalık şüphesinde resmî veteriner otorite ile gecikmeden iletişim kurulmalıdır.</div><div class="lab-only"><strong>Not:</strong> Non-Pullorum/non-Gallinarum Salmonellosis ve Campylobacter kaynakta gıda güvenliği/kolonizasyon bağlamında yer aldığından klinik semptom yüzdesiyle sıralanmamaktadır; uygun laboratuvar izleme gerekir.</div>`;
 r.scrollIntoView({behavior:'smooth'});
}
calcBtn.onclick=renderResults;