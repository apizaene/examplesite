'use strict';
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const IDX = { ky: 0, ru: 1, en: 2, ar: 3 };

/* ===== Translations (nav, buttons) ===== */
const translations = {
  ky: { home: "Башкы бет", about: "Институт жөнүндө", education: "Билим берүү", quran: "Куран", sciences: "Ислам илимдери", teachers: "Мугалимдер", gallery: "Галерея", news: "Жаңылыктар", admission: "Кабыл алуу", contact: "Байланыш", apply: "Окууга тапшыруу" },
  ru: { home: "Главная", about: "Об институте", education: "Образование", quran: "Коран", sciences: "Исламские науки", teachers: "Преподаватели", gallery: "Галерея", news: "Новости", admission: "Поступление", contact: "Контакты", apply: "Подать заявку" },
  en: { home: "Home", about: "About", education: "Education", quran: "Quran", sciences: "Islamic Sciences", teachers: "Teachers", gallery: "Gallery", news: "News", admission: "Admission", contact: "Contact", apply: "Apply Now" },
  ar: { home: "الرئيسية", about: "عن المعهد", education: "التعليم", quran: "القرآن", sciences: "العلوم الإسلامية", teachers: "المعلمون", gallery: "المعرض", news: "الأخبار", admission: "القبول", contact: "اتصل بنا", apply: "قدّم الآن" }
};
/* Other texts use "Kyrgyz|Russian|English|Arabic" strings inside data-t */

let lang = localStorage.getItem('lang') || 'ky';
const L = s => s.split('|')[IDX[lang]];
const sp = s => `<span data-t="${s}">${L(s)}</span>`;

/* ===== Content data (edit freely) ===== */
const ABOUT = [
  ['📜', 'Тарых|История|History|التاريخ', 'Институт Кара-Суу шаарында ислам билимин жайылтуу максатында иштейт.|Институт работает в Кара-Суу для распространения исламских знаний.|The institute works in Kara-Suu to spread Islamic knowledge.|يعمل المعهد في كارا-سو لنشر العلم الإسلامي.'],
  ['🎯', 'Миссия|Миссия|Mission|المهمة', 'Сапаттуу диний жана руханий билим берүү.|Давать качественное религиозное и духовное образование.|To provide quality religious and spiritual education.|تقديم تعليم ديني وروحي عالي الجودة.'],
  ['🔭', 'Көз караш|Видение|Vision|الرؤية', 'Билимдүү, адептүү жана коомго пайдалуу муун тарбиялоо.|Воспитать образованное, нравственное поколение, полезное обществу.|To raise an educated, ethical generation that serves society.|تنشئة جيل متعلم وخلوق يخدم المجتمع.'],
  ['💎', 'Баалуулуктар|Ценности|Values|القيم', 'Ыймандуулук, чынчылдык, урмат жана тынымсыз окуу.|Вера, честность, уважение и непрерывное обучение.|Faith, honesty, respect and lifelong learning.|الإيمان والصدق والاحترام والتعلم المستمر.']
];

const QURAN = [
  ['📖', 'Куран окуу|Чтение Корана|Quran Reading|قراءة القرآن', 'Туура жана ыраактуу окууну үйрөнүү.|Правильное и беглое чтение.|Learn correct, fluent recitation.|تعلّم القراءة الصحيحة والسلسة.'],
  ['🎙️', 'Тажвид|Таджвид|Tajweed|التجويد', 'Тамгалардын чыгуу жайы жана окуу эрежелери.|Правила произношения букв и чтения.|Rules of pronunciation and recitation.|أحكام مخارج الحروف والتلاوة.'],
  ['🧠', 'Хифз|Хифз|Hifz|الحفظ', 'Куранды жатка үйрөнүү программасы.|Программа заучивания Корана.|A Quran memorization programme.|برنامج حفظ القرآن الكريم.'],
  ['📜', 'Тафсир|Тафсир|Tafsir|التفسير', 'Куран маанилерин түшүнүү жана чечмелөө.|Понимание и толкование смыслов Корана.|Understanding and interpreting the Quran.|فهم معاني القرآن وتفسيرها.']
];
const SCI = [
  ['⚖️', 'Фикх|Фикх|Fiqh|الفقه'], ['📚', 'Хадис|Хадис|Hadith|الحديث'], ['🕌', 'Акыйда|Акида|Aqeedah|العقيدة'], ['📜', 'Тафсир|Тафсир|Tafsir|التفسير'],
  ['✍️', 'Араб тили|Арабский язык|Arabic Language|اللغة العربية'], ['🏛️', 'Ислам тарыхы|История ислама|Islamic History|التاريخ الإسلامي'], ['🌿', 'Адеп-ахлак|Этика|Islamic Ethics|الأخلاق الإسلامية']
];
const EDU = [
  ['📖', 'Куран|Коран|Quran|القرآن', ['Куран окуу|Чтение Корана|Quran reading|قراءة القرآن', 'Тажвид|Таджвид|Tajweed|التجويد', 'Хифз|Хифз|Memorization|الحفظ', 'Тафсир|Тафсир|Tafsir|التفسير'], '#quran'],
  ['🕌', 'Ислам илимдери|Исламские науки|Islamic Sciences|العلوم الإسلامية', ['Фикх|Фикх|Fiqh|الفقه', 'Хадис|Хадис|Hadith|الحديث', 'Акыйда|Акида|Aqeedah|العقيدة', 'Араб тили|Арабский язык|Arabic|اللغة العربية', 'Ислам тарыхы|История ислама|Islamic History|التاريخ الإسلامي', 'Адеп-ахлак|Этика|Ethics|الأخلاق'], '#sciences']
];
const SUBJ = SCI.map(s => s[1]);
const TEACH = [0, 1, 2, 3, 4, 5].map(i => ({
  n: `Мугалим|Преподаватель|Teacher|معلم`,
  s: SUBJ[[0, 1, 2, 4, 5, 6][i]],
  icon: ['👳', '📖', '🧑‍🏫', '📚', '🎓', '🌙'][i]
}));
const BIO = 'Бул жерге мугалимдин өмүр баяны, билими жана тажрыйбасы жазылат.|Здесь будет биография преподавателя, его образование и опыт.|The teacher’s biography, education and experience will be added here.|ستُضاف هنا السيرة الذاتية للمعلم وتعليمه وخبرته.';
const STU = [
  ['🎓', 'Билим алуу|Обучение|Learning|التعلم', 0], ['📖', 'Куран сабактары|Уроки Корана|Quran lessons|دروس القرآن', 1], ['🔬', 'Илимий иш-чаралар|Научные мероприятия|Academic events|الفعاليات العلمية', 2],
  ['🤝', 'Тарбиялык иш-чаралар|Воспитательные мероприятия|Character-building events|الفعاليات التربوية', 3], ['⚽', 'Спорт жана эс алуу|Спорт и отдых|Sports & leisure|الرياضة والترفيه', 4], ['🌱', 'Коомдук иштер|Общественные дела|Community service|الأعمال المجتمعية', 5]
];
const CATS = [['all', 'Баары|Все|All|الكل'], ['lessons', 'Сабактар|Занятия|Lessons|الدروس'], ['students', 'Студенттер|Студенты|Students|الطلاب'], ['events', 'Иш-чаралар|События|Events|الفعاليات'], ['inst', 'Институт|Институт|Institute|المعهد']];
const GAL = ['inst', 'lessons', 'students', 'events', 'inst', 'lessons', 'students', 'events'].map((c, i) => ({ c, src: `images/image${i + 1}.jpg` }));
const NEWS = [
  ['01.09.2026', 'Жаңы окуу жылы башталды|Начался новый учебный год|The new academic year has begun|بدأ العام الدراسي الجديد'],
  ['15.08.2026', 'Куран окуу сынагы|Конкурс чтения Корана|Quran recitation contest|مسابقة تلاوة القرآن'],
  ['28.07.2026', 'Ачык эшиктер күнү|День открытых дверей|Open day|يوم الأبواب المفتوحة'],
  ['10.07.2026', 'Окуучулар үчүн илимий семинар|Научный семинар для студентов|Academic seminar for students|ندوة علمية للطلاب'],
  ['20.06.2026', 'Бүтүрүү кечеси|Выпускной вечер|Graduation ceremony|حفل التخرج'],
  ['05.06.2026', 'Кабыл алуу башталды|Начался приём документов|Admissions are open|فتح باب القبول']
].map((n, i) => ({ d: n[0], t: n[1], cat: ['Жаңылык|Новость|News|خبر', 'Иш-чара|Событие|Event|فعالية'][i % 2], img: `images/image${i + 1}.jpg` }));
const NTXT = 'Бул жерге жаңылыктын толук тексти жазылат. Датаны, сүрөттү жана текстти өзүңүз алмаштырыңыз.|Здесь будет полный текст новости. Замените дату, фото и текст на свои.|The full article text goes here. Replace the date, photo and text with your own.|سيُكتب هنا النص الكامل للخبر. استبدل التاريخ والصورة والنص بما يناسبك.';
const WA = '996556981111';
const SV = p => `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const ICON = {
  ig: SV('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>'),
  fb: SV('<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" fill="currentColor" stroke="none"/>'),
  wa: SV('<path d="M3 21l1.7-5A9 9 0 1 1 8 19.3L3 21z"/><path d="M9 8.5c0 3.2 3.3 6.5 6.5 6.5l1-1.6-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2L9 8.5z" fill="currentColor" stroke="none"/>'),
  mail: SV('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>'),
  pin: SV('<path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>'),
  tel: SV('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>')
};
const CONT = [
  [ICON.pin, 'Дарек|Адрес|Address|العنوان', 'Апиза эне Ислам институту, Кара-Суу шаары, Ош облусу, Кыргызстан|Институт Апиза эне, г. Кара-Суу, Ошская область, Кыргызстан|Apiza Ene Islamic Institute, Kara-Suu, Osh Region, Kyrgyzstan|المعهد الإسلامي باسم حفيظة انا، كارا-سو، منطقة أوش، قيرغيزستان', 'https://maps.app.goo.gl/5WXnFnEHjqV5Xnqq9'],
  [ICON.tel, 'Телефон|Телефон|Phone|الهاتف', '+996 556 981 111', 'tel:+' + WA],
  [ICON.wa, 'WhatsApp', '+996 556 981 111', 'https://wa.me/' + WA],
  [ICON.mail, 'Email', 'apizaeneinstitut@gmail.com', 'mailto:apizaeneinstitut@gmail.com'],
  [ICON.ig, 'Instagram', '@apizaene_islam_institutu', 'https://www.instagram.com/apizaene_islam_institutu/'],
  [ICON.fb, 'Facebook', 'facebook.com/apizaene', 'https://www.facebook.com/apizaene/?locale=ru_RU']
];

/* ===== Render ===== */
const card = (ic, t, p, extra = '') => `<article class="c rv"><div class="ic">${ic}</div><h3>${sp(t)}</h3>${p ? `<p>${sp(p)}</p>` : ''}${extra}</article>`;
$('#aboutCards').innerHTML = ABOUT.map(a => card(a[0], a[1], a[2])).join('');
$('#quranCards').innerHTML = QURAN.map(a => card(a[0], a[1], a[2])).join('');
$('#sciCards').innerHTML = SCI.map(a => card(a[0], a[1])).join('');
$('#eduCards').innerHTML = EDU.map(e => card(e[0], e[1], '', `<ul>${e[2].map(x => `<li>${sp(x)}</li>`).join('')}</ul><a class="btn out" href="${e[3]}" data-t="Көбүрөөк билүү|Узнать больше|Learn More|اعرف المزيد">${L('Көбүрөөк билүү|Узнать больше|Learn More|اعرف المزيد')}</a>`)).join('');
$('#teachCards').innerHTML = TEACH.map((t, i) => `<article class="c rv"><div class="av">${t.icon}</div><h3>${sp(t.n)} ${i + 1}</h3><p>${sp(t.s)}</p><button class="btn out" data-teach="${i}" data-t="Профилди көрүү|Профиль|View Profile|عرض الملف">${L('Профилди көрүү|Профиль|View Profile|عرض الملف')}</button></article>`).join('');
$('#stuCards').innerHTML = STU.map(s => `<article class="c rv"><div class="stuimg"><img src="images/image${s[2] + 1}.jpg" alt="" loading="lazy"></div><h3>${s[0]} ${sp(s[1])}</h3></article>`).join('');
$('#newsCards').innerHTML = NEWS.map((n, i) => `<article class="c rv"><div class="stuimg"><img src="${n.img}" alt="" loading="lazy"></div><div class="meta"><time>${n.d}</time>${sp(n.cat)}</div><h3>${sp(n.t)}</h3><p>${sp(NTXT.split('.')[0] + '.|' + NTXT.split('|')[1].split('.')[0] + '.|' + NTXT.split('|')[2].split('.')[0] + '.|' + NTXT.split('|')[3].split('.')[0] + '.')}</p><button class="btn out" data-news="${i}" data-t="Толугу менен|Читать далее|Read More|اقرأ المزيد">${L('Толугу менен|Читать далее|Read More|اقرأ المزيد')}</button></article>`).join('');
$('#contCards').innerHTML = CONT.map(c => `<a class="c rv" href="${c[4]}" target="_blank" rel="noopener"><div class="ic">${c[0]}</div><h3>${c[1].includes('|') ? sp(c[1]) : c[1]}</h3><p>${c[2].includes('|') ? sp(c[2]) : c[2]}</p></a>`).join('');
$('.social').innerHTML = [[ICON.ig, CONT[4][4], 'Instagram'], [ICON.fb, CONT[5][4], 'Facebook'], [ICON.wa, CONT[2][4], 'WhatsApp'], [ICON.mail, CONT[3][4], 'Email']].map(x => `<a href="${x[1]}" target="_blank" rel="noopener" aria-label="${x[2]}">${x[0]}</a>`).join('');
$('#waBtn').insertAdjacentHTML('afterbegin', ICON.wa);
$('body').insertAdjacentHTML('beforeend', `<a id="wa" href="https://wa.me/${WA}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICON.wa}</a>`);
$('#waBtn').addEventListener('click', e => { const f = $('#form'); e.currentTarget.href = `https://wa.me/${WA}?text=` + encodeURIComponent(L('Саламатсызбы! Апиза эне Ислам институтуна катталгым келет.|Здравствуйте! Хочу записаться в институт Апиза эне.|Hello! I would like to register at Apiza Ene Islamic Institute.|السلام عليكم! أرغب في التسجيل في المعهد.') + (f.name.value ? '\n' + f.name.value : '')); });
$('#filters').innerHTML = CATS.map(c => `<button data-cat="${c[0]}" data-t="${c[1]}">${L(c[1])}</button>`).join('');

/* ===== Language ===== */
const navLang = $('.langs').cloneNode(true); navLang.classList.add('navl'); $('#nav').appendChild(navLang);
function setLang(l) {
  lang = l; localStorage.setItem('lang', l);
  document.documentElement.lang = l; document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  $$('[data-i18n]').forEach(e => e.textContent = translations[l][e.dataset.i18n]);
  $$('[data-t]').forEach(e => e.textContent = L(e.dataset.t));
  $$('[data-l]').forEach(b => b.classList.toggle('on', b.dataset.l === l));
  closeModal();
}
document.addEventListener('click', e => { const b = e.target.closest('[data-l]'); if (b) setLang(b.dataset.l); });

/* ===== Theme ===== */
function setTheme(t) { document.documentElement.dataset.theme = t; $('#theme').textContent = t === 'dark' ? '☀️' : '🌙'; try { localStorage.setItem('theme', t); } catch (e) { } }
setTheme(localStorage.getItem('theme') || 'light');
$('#theme').onclick = () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');

/* ===== Mobile menu ===== */
const burger = $('#burger'), nav = $('#nav'), ov = $('#overlay');
function menu(open) { burger.classList.toggle('open', open); nav.classList.toggle('open', open); ov.classList.toggle('show', open); burger.setAttribute('aria-expanded', open); document.body.style.overflow = open ? 'hidden' : ''; }
burger.onclick = () => menu(!nav.classList.contains('open'));
ov.onclick = () => menu(false);
nav.addEventListener('click', e => { if (e.target.closest('a')) menu(false); });

/* ===== Modal ===== */
const modal = $('#modal');
function openModal(html) { $('#mBody').innerHTML = html; modal.hidden = false; modal.querySelector('.x').focus(); document.body.style.overflow = 'hidden'; }
function closeModal() { if (!modal.hidden) { modal.hidden = true; document.body.style.overflow = ''; } }
modal.addEventListener('click', e => { if (e.target === modal || e.target.closest('[data-close]')) closeModal(); });
document.addEventListener('click', e => {
  const t = e.target.closest('[data-teach]'), n = e.target.closest('[data-news]');
  if (t) { const x = TEACH[t.dataset.teach]; openModal(`<div class="av" style="max-width:220px;margin-inline:auto">${x.icon}</div><h3>${L(x.n)} ${+t.dataset.teach + 1}</h3><p><b>${L(x.s)}</b></p><p>${L(BIO)}</p>`); }
  if (n) { const x = NEWS[n.dataset.news]; openModal(`<img src="${x.img}" alt=""><div class="meta"><time>${x.d}</time>${L(x.cat)}</div><h3>${L(x.t)}</h3><p>${L(NTXT)}</p>`); }
});

/* ===== Gallery + lightbox ===== */
let cat = 'all', shown = [], cur = 0;
function renderGal() {
  shown = GAL.filter(g => cat === 'all' || g.c === cat);
  $('#galGrid').innerHTML = shown.map((g, i) => `<button class="gi" data-i="${i}" aria-label="Open image ${i + 1}"><img src="${g.src}" alt="Apiza Ene Institute photo ${i + 1}" loading="lazy"></button>`).join('');
  $$('#filters button').forEach(b => b.classList.toggle('on', b.dataset.cat === cat));
}
$('#filters').onclick = e => { const b = e.target.closest('button'); if (b) { cat = b.dataset.cat; renderGal(); } };
$('#galGrid').onclick = e => { const b = e.target.closest('.gi'); if (b) openLb(+b.dataset.i); };
const lb = $('#lb');
function showLb() { $('#lbImg').src = shown[cur].src; $('#lbImg').alt = 'Photo ' + (cur + 1); $('#lbC').textContent = `${cur + 1} / ${shown.length}`; }
function openLb(i) { cur = i; showLb(); lb.hidden = false; document.body.style.overflow = 'hidden'; $('#lbX').focus(); }
function closeLb() { lb.hidden = true; document.body.style.overflow = ''; }
const step = d => { cur = (cur + d + shown.length) % shown.length; showLb(); };
$('#lbX').onclick = closeLb; $('#lbP').onclick = () => step(-1); $('#lbN').onclick = () => step(1);
lb.onclick = e => { if (e.target === lb) closeLb(); };
renderGal();

/* ===== Keyboard ===== */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeLb(); menu(false); }
  if (!lb.hidden) { const r = document.dir === 'rtl' || document.documentElement.dir === 'rtl'; if (e.key === 'ArrowRight') step(r ? -1 : 1); if (e.key === 'ArrowLeft') step(r ? 1 : -1); }
});

/* ===== Toasts ===== */
function toast(title, msg, type = 'ok') {
  const d = document.createElement('div'); d.className = 'toast ' + (type === 'err' ? 'err' : ''); d.setAttribute('role', 'status');
  d.innerHTML = `<b>${title}</b>${msg}`; $('#toasts').appendChild(d);
  setTimeout(() => { d.classList.add('out'); setTimeout(() => d.remove(), 400); }, 4200);
}

/* ===== Form validation ===== */
const MSG = {
  okT: 'Ийгиликтүү!|Успешно!|Success!|تم بنجاح!',
  ok: 'Арызыңыз кабыл алынды (демо — маалымат эч жакка жөнөтүлгөн жок).|Ваша заявка принята (демо — данные никуда не отправляются).|Your application has been submitted (demo — no data is sent anywhere).|تم استلام طلبك (عرض تجريبي — لا تُرسل أي بيانات).',
  errT: 'Ката|Ошибка|Error|خطأ',
  req: 'Сураныч, бардык милдеттүү талааларды толтуруңуз.|Пожалуйста, заполните все обязательные поля.|Please complete all required fields.|يرجى ملء جميع الحقول المطلوبة.',
  mail: 'Email туура эмес.|Некорректный email.|Invalid email address.|البريد الإلكتروني غير صحيح.',
  tel: 'Телефон номери туура эмес.|Некорректный номер телефона.|Invalid phone number.|رقم الهاتف غير صحيح.',
  big: 'Файл 5 МБдан чоң.|Файл больше 5 МБ.|File is larger than 5 MB.|الملف أكبر من 5 ميغابايت.'
};
$('#form').addEventListener('submit', e => {
  e.preventDefault(); const f = e.target; let bad = false, extra = '';
  $$('#form [required]').forEach(i => { const v = !i.value.trim(); i.classList.toggle('bad', v); if (v) bad = true; });
  if (bad) return toast(L(MSG.errT), L(MSG.req), 'err');
  if (!/^\S+@\S+\.\S+$/.test(f.email.value)) { f.email.classList.add('bad'); return toast(L(MSG.errT), L(MSG.mail), 'err'); }
  if (f.phone.value.replace(/\D/g, '').length < 9) { f.phone.classList.add('bad'); return toast(L(MSG.errT), L(MSG.tel), 'err'); }
  if (f.file.files[0] && f.file.files[0].size > 5 * 1024 * 1024) return toast(L(MSG.errT), L(MSG.big), 'err');
  toast(L(MSG.okT), L(MSG.ok)); f.reset();
});
$('#form').addEventListener('input', e => e.target.classList.remove('bad'));

/* ===== Scroll: header, top button, active nav, reveal, counters ===== */
const topBtn = $('#top');
addEventListener('scroll', () => { $('#hdr').classList.toggle('sc', scrollY > 30); topBtn.classList.toggle('show', scrollY > 500); }, { passive: true });
topBtn.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });

const links = $$('#nav a[href^="#"]');
const secObs = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) links.forEach(a => a.classList.toggle('act', a.getAttribute('href') === '#' + en.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
$$('main section[id]').forEach(s => secObs.observe(s));

function count(el) {
  const end = +el.dataset.count, t0 = performance.now(), d = 1600;
  const tick = t => { const p = Math.min((t - t0) / d, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); };
  matchMedia('(prefers-reduced-motion:reduce)').matches ? el.textContent = end : requestAnimationFrame(tick);
}
const rvObs = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) { const el = en.target; el.style.transitionDelay = (Array.from(el.parentElement.children).indexOf(el) % 4) * 90 + 'ms'; setTimeout(() => { el.style.transitionDelay = ''; el.classList.add('done'); }, 1100); en.target.classList.add('in'); const c = en.target.querySelector('[data-count]'); if (c) count(c); rvObs.unobserve(en.target); }
}), { threshold: .15 });
$$('.rv').forEach(el => rvObs.observe(el));

setLang(lang);
