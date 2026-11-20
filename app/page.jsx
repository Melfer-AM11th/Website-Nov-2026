import EnquiryForm from '../components/EnquiryForm';
import NetworkForm from '../components/NetworkForm';
import SiteInteractions from '../components/SiteInteractions';
import { LanguageMetadata, LanguageToggle, Translated } from '../components/Language';

export default function Home() {
  return (
    <>
      <LanguageMetadata />


{/* executive crown cursor */}
<div id="am-cursor" aria-hidden="true"><svg width="22" height="27" viewBox="-40 -145 900 1088"><defs><linearGradient id="cG" gradientUnits="userSpaceOnUse" x1="0" y1="-120" x2="0" y2="903"><stop offset="0" stopColor="#EDD07A"></stop><stop offset=".4" stopColor="#D4A843"></stop><stop offset=".75" stopColor="#B8922A"></stop><stop offset="1" stopColor="#7A5A14"></stop></linearGradient></defs><g fill="url(#cG)" stroke="#5A3E0A" strokeWidth="24" strokeLinejoin="round" paintOrder="stroke"><g transform="translate(410,165) scale(1.55) translate(-410,-165)"><path fillRule="evenodd" d="M260 130 270 40 305 95 340 25 375 85 410 0 445 85 480 25 515 95 550 40 560 130V165H260ZM335 147.5 346 136.5 357 147.5 346 158.5ZM399 147.5 410 136.5 421 147.5 410 158.5ZM463 147.5 474 136.5 485 147.5 474 158.5Z"></path><circle cx="270" cy="34" r="11"></circle><circle cx="340" cy="19" r="11"></circle><circle cx="410" cy="-6" r="11"></circle><circle cx="480" cy="19" r="11"></circle><circle cx="550" cy="34" r="11"></circle></g><g transform="translate(0,203)"><rect x="59" y="0" width="52" height="700"></rect><rect x="179" y="0" width="52" height="700"></rect><rect x="589" y="0" width="52" height="700"></rect><rect x="709" y="0" width="52" height="700"></rect><rect x="35" y="650" width="100" height="50"></rect><rect x="155" y="650" width="100" height="50"></rect><rect x="565" y="650" width="100" height="50"></rect><rect x="685" y="650" width="100" height="50"></rect><path d="M410 163 452 205 410 247 368 205ZM410 403 452 445 410 487 368 445Z"></path></g></g></svg></div>
<div id="am-trail" aria-hidden="true"><svg width="14" height="17" viewBox="-40 -145 900 1088"><g fill="#D9AB36"><g transform="translate(410,165) scale(1.55) translate(-410,-165)"><path fillRule="evenodd" d="M260 130 270 40 305 95 340 25 375 85 410 0 445 85 480 25 515 95 550 40 560 130V165H260ZM335 147.5 346 136.5 357 147.5 346 158.5ZM399 147.5 410 136.5 421 147.5 410 158.5ZM463 147.5 474 136.5 485 147.5 474 158.5Z"></path><circle cx="270" cy="34" r="11"></circle><circle cx="340" cy="19" r="11"></circle><circle cx="410" cy="-6" r="11"></circle><circle cx="480" cy="19" r="11"></circle><circle cx="550" cy="34" r="11"></circle></g><g transform="translate(0,203)"><rect x="59" y="0" width="52" height="700"></rect><rect x="179" y="0" width="52" height="700"></rect><rect x="589" y="0" width="52" height="700"></rect><rect x="709" y="0" width="52" height="700"></rect><rect x="35" y="650" width="100" height="50"></rect><rect x="155" y="650" width="100" height="50"></rect><rect x="565" y="650" width="100" height="50"></rect><rect x="685" y="650" width="100" height="50"></rect><path d="M410 163 452 205 410 247 368 205ZM410 403 452 445 410 487 368 445Z"></path></g></g></svg></div>

<svg width="0" height="0" style={{ "position": "absolute" }} aria-hidden="true">
  <defs>
    <linearGradient id="lgM" x1="0" y1="-125" x2="0" y2="903" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#C9A030"></stop><stop offset=".35" stopColor="#9A7418"></stop><stop offset=".7" stopColor="#7A5A14"></stop><stop offset="1" stopColor="#5A3E0A"></stop></linearGradient>
  </defs>
  {/* AMElleventh executive mark v6: crown directly over four pillars on feet, no bar under the crown */}
  <symbol id="am-mark" viewBox="-20 -125 860 1048"><g fill="url(#lgM)"><g transform="translate(410,165) scale(1.55) translate(-410,-165)"><path fillRule="evenodd" d="M260 130 270 40 305 95 340 25 375 85 410 0 445 85 480 25 515 95 550 40 560 130V165H260ZM335 147.5 346 136.5 357 147.5 346 158.5ZM399 147.5 410 136.5 421 147.5 410 158.5ZM463 147.5 474 136.5 485 147.5 474 158.5Z"></path><circle cx="270" cy="34" r="11"></circle><circle cx="340" cy="19" r="11"></circle><circle cx="410" cy="-6" r="11"></circle><circle cx="480" cy="19" r="11"></circle><circle cx="550" cy="34" r="11"></circle></g><g transform="translate(0,203)"><rect x="59" y="0" width="52" height="700"></rect><rect x="179" y="0" width="52" height="700"></rect><rect x="589" y="0" width="52" height="700"></rect><rect x="709" y="0" width="52" height="700"></rect><rect x="35" y="650" width="100" height="50"></rect><rect x="155" y="650" width="100" height="50"></rect><rect x="565" y="650" width="100" height="50"></rect><rect x="685" y="650" width="100" height="50"></rect><path d="M410 163 452 205 410 247 368 205ZM410 403 452 445 410 487 368 445Z"></path></g></g></symbol>
  <symbol id="i-check" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="m8.5 12 2.5 2.5 4.5-5"></path></symbol>
  <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"></path></symbol>
  <symbol id="i-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></symbol>
  <symbol id="i-chat" viewBox="0 0 24 24"><path d="M21 12a8 8 0 0 1-11.8 7L4 20l1.1-4.6A8 8 0 1 1 21 12z"></path></symbol>
  <symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"></path><circle cx="12" cy="9" r="2.5"></circle></symbol>
  <symbol id="i-menu" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"></path></symbol>
  <symbol id="i-scale" viewBox="0 0 24 24"><path d="M3 17 9 11l4 4 8-8"></path><path d="M15 7h6v6"></path></symbol>
  <symbol id="i-people" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5"></circle><path d="M2.5 20a6.5 6.5 0 0 1 13 0"></path><path d="M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4-6"></path></symbol>
  <symbol id="i-user" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"></circle><path d="M4 21a8 8 0 0 1 16 0"></path></symbol>
  <symbol id="i-refer" viewBox="0 0 24 24"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"></path></symbol>
  <symbol id="i-headset" viewBox="0 0 24 24"><path d="M4 14v-2a8 8 0 0 1 16 0v2"></path><rect x="3" y="14" width="4" height="6" rx="1.5"></rect><rect x="17" y="14" width="4" height="6" rx="1.5"></rect><path d="M19 20c0 1.5-2 2-5 2"></path></symbol>
  <symbol id="i-code" viewBox="0 0 24 24"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"></path></symbol>
  <symbol id="i-calc" viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="2"></rect><path d="M8.5 7h7M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 16h.01M12 16h.01M15.5 16h.01"></path></symbol>
  <symbol id="ia-adv" viewBox="0 0 24 24"><path d="M3 17 9 11l4 4 8-8M15 7h6v6"></path></symbol>
  <symbol id="ia-it" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="2"></rect><path d="M8 20h8M12 16v4M9.5 8.5 7.5 10l2 1.5M14.5 8.5l2 1.5-2 1.5"></path></symbol>
  <symbol id="ia-rd" viewBox="0 0 24 24"><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3M7.5 15h9"></path></symbol>
  <symbol id="ia-pt" viewBox="0 0 24 24"><circle cx="9" cy="12" r="5"></circle><circle cx="15" cy="12" r="5"></circle></symbol>
  <symbol id="i-bank" viewBox="0 0 24 24"><path d="M3 9.5 12 4l9 5.5M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"></path></symbol>
</svg>

<header>
  <div className="wrap bar">
    <Translated as="a" href="#top" className="logo" aria-label="AMElleventh home" ariaAr="AMElleventh، الصفحة الرئيسية">
      <svg viewBox="-20 -125 860 1048" aria-hidden="true"><use href="#am-mark"></use></svg>
      <span className="logo-word" dir="ltr">AMe<b>11</b>eventh</span>
    </Translated>
    <ul className="nav">
      <li><Translated as="a" href="#bpo" ar="ما نقدمه">What we provide</Translated></li>
      <li><Translated as="a" href="#how" ar="كيف نعمل">How it works</Translated></li>
      <li><Translated as="a" href="#assurance" ar="الجودة">Quality</Translated></li>
      <li><Translated as="a" href="#record" ar="سجلّ الإنجاز">Track record</Translated></li>
      <li><Translated as="a" href="#more" ar="خدمات أخرى">Other services</Translated></li>
      <li><Translated as="a" href="#network" ar="انضم إلى شبكتنا">Join our network</Translated></li>
    </ul>
    <div className="bar-right">
      <LanguageToggle />
      <a href="#enquire" className="btn btn-primary" style={{ "padding": ".75rem 1.2rem" }}><Translated as="span" ar="خطّط لمشروعك التجريبي">Plan a pilot</Translated> <svg className="i" style={{ "width": "18px", "height": "18px" }}><use href="#i-arrow"></use></svg></a>
      <Translated as="a" href="https://wa.me/971527188093?text=Hi%20AMElleventh%2C%20I%27d%20like%20to%20know%20more." className="icon-btn" aria-label="Message us on WhatsApp" ariaAr="راسلنا عبر واتساب"><svg className="i"><use href="#i-chat"></use></svg></Translated>
      <Translated as="button" className="icon-btn menu-btn" aria-label="Open menu" ariaAr="فتح القائمة" aria-expanded="false" aria-controls="mnav"><svg className="i" style={{ "width": "24px", "height": "24px" }}><use href="#i-menu"></use></svg></Translated>
    </div>
  </div>
  <nav className="mobile-nav" id="mnav" aria-label="Mobile">
    <Translated as="a" href="#bpo" ar="ما نقدمه">What we provide</Translated><Translated as="a" href="#how" ar="كيف نعمل">How it works</Translated><Translated as="a" href="#assurance" ar="الجودة">Quality</Translated><Translated as="a" href="#record" ar="سجلّ الإنجاز">Track record</Translated><Translated as="a" href="#more" ar="خدمات أخرى">Other services</Translated><Translated as="a" href="#network" ar="انضم إلى شبكتنا">Join our network</Translated><Translated as="a" href="#faq" ar="الأسئلة">Questions</Translated>
    <Translated as="a" href="#enquire" className="btn btn-primary" ar="خطّط لمشروعك التجريبي">Plan a pilot</Translated>
  </nav>
</header>

<main id="top">
{/* HERO */}
<section className="hero">
  <div className="wrap hero-grid">
    <div>
      <div className="pill"><i></i><Translated as="span" ar="الحادي عشر: ما يتجاوز جودة الخدمة">The eleventh: beyond service quality</Translated></div>
      <Translated as="h1" ar={<>الفريق المناسب، <span className="g">بإدارة من دبي.</span></>}>The right team, <span className="g">governed from Dubai.</span></Translated>
      <Translated as="p" ar="فرق خدمة العملاء والمبيعات والتحصيل والخدمات المساندة لشركات الإمارات والسعودية وبقية دول الخليج، تُنفَّذ من الفلبين أو الهند أو المنطقة العربية وتُدار من دبي. تحصل على تكلفة أقل، وعقد واحد، وشريك محلي يتحمّل مسؤولية النتائج.">Customer service, sales, collections and back-office teams for businesses in the UAE, Saudi Arabia and the wider GCC, delivered from the Philippines, India or the Arab region and governed from Dubai. You get lower costs, one contract and someone local who answers for the results.</Translated>
      <Translated as="div" className="hero-roles" aria-label="Teams we build" ariaAr="الفرق التي نبنيها"><Translated as="span" ar="خدمة العملاء">Customer service</Translated><Translated as="span" ar="مبيعات البطاقات والقروض والتمويل العقاري">Cards, loans &amp; mortgage sales</Translated><Translated as="span" ar="التأجير والتحصيل العقاري">Rental &amp; collections</Translated><Translated as="span" ar="الخدمات المساندة">Back office</Translated></Translated>
      <div className="cta-row">
        <a href="#enquire" className="btn btn-primary"><Translated as="span" ar="خطّط لمشروعك التجريبي">Plan a pilot</Translated> <svg className="i" style={{ "width": "18px", "height": "18px" }}><use href="#i-arrow"></use></svg></a>
        <Translated as="a" href="#bpo" className="btn btn-outline" ar="اطّلع على خدماتنا">See what we provide</Translated>
      </div>
      <Translated as="p" className="hero-note" ar={<>تبدأ المشاريع التجريبية عادةً من 30 مقعدًا. هل احتياجك أصغر؟ <a href="#enquire">احجز مكالمة لتحديد النطاق</a> وسنخبرك بصراحة إن كنا الخيار المناسب.</>}>Pilots typically start from 30 seats. Smaller requirement? <a href="#enquire">Book a scoping call</a> and we'll tell you honestly whether we're the right fit.</Translated>
    </div>
    <Translated as="aside" className="hero-card" aria-label="Where we serve and where we deliver" ariaAr="أين نخدم وأين ننفّذ">
      <Translated as="div" className="hc-label" ar="نخدم عملاءنا في">We serve clients in</Translated>
      <div className="chips hc-chips"><Translated as="span" ar="الإمارات">UAE</Translated><Translated as="span" ar="السعودية">Saudi Arabia</Translated><Translated as="span" ar="قطر">Qatar</Translated><Translated as="span" ar="الكويت">Kuwait</Translated><Translated as="span" ar="البحرين">Bahrain</Translated><Translated as="span" ar="عُمان">Oman</Translated></div>
      <div className="hc-sep"></div>
      <div className="hc-row">
        <div className="hc-city"><svg className="i"><use href="#i-pin"></use></svg><div><Translated as="b" ar="دبي">Dubai</Translated><Translated as="span" ar="العقد والحوكمة والتقارير">Contract, governance, reporting</Translated></div></div>
        <div className="hc-time sm" id="t-dxb">--:--</div>
      </div>
      <div className="hc-sep"></div>
      <Translated as="div" className="hc-label" ar="ونُنفّذ من المركز الأنسب لعملك">And we deliver from the hub that fits your work</Translated>
      <div className="hc-row hub">
        <div className="hc-city"><div><Translated as="b" ar="الفلبين">Philippines</Translated><Translated as="span" ar="الخدمة والمبيعات والتحصيل والخدمات المساندة">Service, sales, collections, back office</Translated></div></div>
        <div className="hc-right"><Translated as="span" className="tag core" ar="مركز أساسي">Core hub</Translated><span className="hc-time sm" id="t-mnl">--:--</span></div>
      </div>
      <div className="hc-row hub">
        <div className="hc-city"><div><Translated as="b" ar="الهند">India</Translated><Translated as="span" ar="الدعم التقني والمالية والفرق متعددة اللغات">Tech support, finance, multilingual teams</Translated></div></div>
        <div className="hc-right"><Translated as="span" className="tag" ar="حسب البرنامج">By programme</Translated><span className="hc-time sm" id="t-ind">--:--</span></div>
      </div>
      <div className="hc-row hub">
        <div className="hc-city"><div><Translated as="b" ar="المنطقة العربية">Arab region</Translated><Translated as="span" ar="فرق ناطقة بالعربية لعملاء الخليج">Arabic-speaking teams for GCC customers</Translated></div></div>
        <div className="hc-right"><Translated as="span" className="tag" ar="حسب البرنامج">By programme</Translated></div>
      </div>
    </Translated>
  </div>
</section>

{/* TRUST */}
<div className="trust">
  <div className="wrap trust-grid">
    <div className="trust-item"><svg className="i"><use href="#i-check"></use></svg><div><Translated as="b" ar="أكثر من 21 عامًا">21+ years</Translated><Translated as="span" ar="من خبرة المؤسس بين الإمارات والفلبين">founder's experience across the UAE and Philippines</Translated></div></div>
    <div className="trust-item"><svg className="i"><use href="#i-check"></use></svg><div><Translated as="b" ar="صفر ملاحظات تدقيق">Zero audit findings</Translated><Translated as="span" ar="على مدى دورة رقابية مدتها 4 سنوات لدى المصرف المركزي (في منصب سابق للمؤسس)">over a 4-year Central Bank cycle (founder's previous role)</Translated></div></div>
    <div className="trust-item"><svg className="i"><use href="#i-check"></use></svg><div><Translated as="b" ar="عقد واحد">One contract</Translated><Translated as="span" ar="يُدار من الإمارات">governed in the UAE</Translated></div></div>
    <div className="trust-item"><svg className="i"><use href="#i-check"></use></svg><div><Translated as="b" ar="تقارير شهرية">Monthly reporting</Translated><Translated as="span" ar="مقابل مستويات الخدمة المتفق عليها">against agreed service levels</Translated></div></div>
  </div>
</div>

{/* THE ELEVENTH STANDARD */}
<section className="standard" id="standard">
  <div className="wrap">
    <Translated as="div" className="kicker" ar="معيارنا">Our standard</Translated>
    <Translated as="h2" ar={<>نحن <span className="g">الحادي عشر.</span></>}>We are <span className="g">the eleventh.</span></Translated>
    <Translated as="p" ar="لسنا العشرة المثالية، بل ما يتجاوز جودة الخدمة. هذا هو المعيار الذي نحاسب به كل فريق وكل شريك وكل تقرير نرسله إليك.">Not a perfect 10, but beyond service quality. That is the standard we hold every team, every partner and every report we send you to.</Translated>
    <div className="pts"><Translated as="span" ar="خطوة إضافية في كل مهمة">One step beyond on every task</Translated><Translated as="span" ar="تقارير صريحة">Honest reporting</Translated><Translated as="span" ar="مسؤولية واضحة من دبي">Clear accountability from Dubai</Translated></div>
  </div>
</section>

{/* BPO OFFER */}
<section id="bpo">
  <div className="wrap">
    <Translated as="div" className="kicker" ar="ما نقدمه">What we provide</Translated>
    <Translated as="h2" ar="فرق تدير عمليات خدمة العملاء والمبيعات والخدمات المساندة لديك">Teams that run your customer operations, sales and back office</Translated>
    <Translated as="p" className="lead" ar="وظّف فريقًا كاملًا أو وظيفة واحدة. نحن نؤسس الفريق ونديره من دبي ونرفع لك تقريرًا عنه كل شهر. يُسعَّر كل دور على حدة، فتدفع فقط مقابل ما تحتاجه كل وظيفة.">Hire a full team or a single function. We set it up, manage it from Dubai and report on it every month. Each role is priced separately, so you only pay for what each position needs.</Translated>
    <div className="cards c3">
      <div className="card offer">
        <div className="tile"><svg className="i"><use href="#i-chat"></use></svg></div>
        <Translated as="h3" ar="عمليات خدمة العملاء">Customer operations</Translated>
        <Translated as="p" ar="دعم عملائك عبر الهاتف والدردشة والبريد الإلكتروني، مع إشراف ومراقبة للجودة ضمن الخدمة.">Voice, chat and email support for your customers, with supervision and quality monitoring built in.</Translated>
        <div className="chips"><Translated as="span" ar="موظفو خدمة العملاء">Customer service agents</Translated><Translated as="span" ar="قادة الفرق">Team leaders</Translated><Translated as="span" ar="مراقبة الجودة">Quality monitoring</Translated><Translated as="span" ar="إدارة الحسابات">Account management</Translated></div>
        <Translated as="a" href="#enquire" className="btn btn-outline btn-sm" data-prefill="Customer operations" ar="ابنِ فريق خدمة عملاء">Build a service team</Translated>
      </div>
      <div className="card offer">
        <div className="tile"><svg className="i"><use href="#i-bank"></use></svg></div>
        <Translated as="h3" ar="فرق المبيعات والتحصيل">Sales and collections teams</Translated>
        <Translated as="p" ar="فرق مبيعات وتحصيل للوكالات المعتمدة لدى البنوك والشركات العقارية، تعمل وفق نصوصك وأهدافك وشروط الجهة الرقابية والبنك الذي تمثّله.">Dedicated teams for banks' authorised sales agencies and real estate firms, working to your scripts, targets and the rules of the bank or regulator you represent.</Translated>
        <div className="chips"><Translated as="span" ar="بطاقات ائتمانية">Credit cards</Translated><Translated as="span" ar="قروض شخصية">Personal loans</Translated><Translated as="span" ar="تمويل عقاري">Mortgages</Translated><Translated as="span" ar="تأجير عقاري">Rental leasing</Translated><Translated as="span" ar="تحصيل الإيجارات والمستحقات">Rent &amp; receivables collections</Translated></div>
        <Translated as="a" href="#enquire" className="btn btn-primary btn-sm" data-prefill="Sales &amp; collections teams" ar="ابنِ فريق مبيعات">Build a sales team</Translated>
      </div>
      <div className="card offer">
        <div className="tile"><svg className="i"><use href="#i-people"></use></svg></div>
        <Translated as="h3" ar="الخدمات المساندة ودعم الكوادر">Back office and people support</Translated>
        <Translated as="p" ar="الأعمال الإدارية والمالية التي تُبقي نشاطك قائمًا، تُنجَز وفق إجراءاتك.">The admin and finance work that keeps your business running, done to your processes.</Translated>
        <div className="chips"><Translated as="span" ar="المالية والمحاسبة">Finance &amp; accounting</Translated><Translated as="span" ar="إدارة الموارد البشرية">HR administration</Translated><Translated as="span" ar="الرواتب والمزايا">Payroll &amp; benefits</Translated><Translated as="span" ar="التوظيف">Recruitment</Translated><Translated as="span" ar="التدريب">Training</Translated></div>
        <Translated as="a" href="#enquire" className="btn btn-outline btn-sm" data-prefill="Back office / finance" ar="ابنِ فريق خدمات مساندة">Build a back-office team</Translated>
      </div>
    </div>
    <div className="note-bar"><svg className="i"><use href="#i-scale"></use></svg><Translated as="p" ar={<><b>لماذا تكلفتنا أقل؟</b> لأننا لا نشغّل مركز عمل خاصًا بنا. نضع المعيار وقائمة الأسعار، ثم ندير شركاء تنفيذ معتمدين وفقها، فلا تتحمل تكاليفنا التشغيلية. <button className="link" data-open="d-model">تعرّف على توزيع الأدوار</button></>}><b>Why it costs less:</b> we don't run a floor of our own. We set the standard and the rate card, then manage vetted delivery partners to it, so you don't pay for our overheads. <button className="link" data-open="d-model">See who does what</button></Translated></div>
  </div>
</section>

{/* COVERAGE */}
<section id="coverage">
  <div className="wrap">
    <Translated as="div" className="kicker" ar="أين نخدم وأين ننفّذ">Where we serve and where we deliver</Translated>
    <Translated as="h2" ar="عملاء في كل دول الخليج. وفريق من المركز الذي يناسبك.">Clients across the GCC. A team from the hub that fits.</Translated>
    <Translated as="p" className="lead" ar="قد يكون نشاطك في الرياض أو الكويت أو دبي. نختار مركز التنفيذ حسب اللغة وساعات العمل والمهارات والتكلفة، ويبقى عقدك ومدير حسابك وتقاريرك في دبي.">Your business can be in Riyadh, Kuwait City or Dubai. We pick the delivery hub by language, hours, skills and cost, while your contract, account lead and reporting stay in Dubai.</Translated>
    <div className="cards c3">
      <div className="card"><div className="tile"><svg className="i"><use href="#i-pin"></use></svg></div><Translated as="h3" ar={<>الفلبين <span className="tag core">مركز أساسي</span></>}>Philippines <span className="tag core">Core hub</span></Translated><Translated as="p" ar="خدمة عملاء بالإنجليزية أولًا، ومبيعات، وتحصيل، وخدمات مساندة. هنا خبرتنا الأعمق وأغلب برامجنا.">English-first customer service, sales, collections and back office. Our deepest experience, and where most programmes run.</Translated></div>
      <div className="card"><div className="tile"><svg className="i"><use href="#i-pin"></use></svg></div><Translated as="h3" ar={<>الهند <span className="tag">حسب البرنامج</span></>}>India <span className="tag">By programme</span></Translated><Translated as="p" ar="دعم تقني، وخدمات مالية ومحاسبية مساندة، وفرق تدعم الإنجليزية والهندية والأردية، عبر شركاء مُعتمدين.">Technology support, finance and accounting back office, and teams that support English, Hindi and Urdu, through vetted partners.</Translated></div>
      <div className="card"><div className="tile"><svg className="i"><use href="#i-pin"></use></svg></div><Translated as="h3" ar={<>المنطقة العربية <span className="tag">حسب البرنامج</span></>}>Arab region <span className="tag">By programme</span></Translated><Translated as="p" ar="فرق ناطقة بالعربية لخدمة العملاء والمبيعات في السعودية وبقية دول الخليج، عبر شركاء مُعتمدين.">Arabic-speaking teams for customer service and sales in Saudi Arabia and the wider GCC, through vetted partners.</Translated></div>
    </div>
    <div className="note-bar"><svg className="i"><use href="#i-check"></use></svg><Translated as="p" ar={<><b>في السعودية وبقية دول الخليج:</b> نؤكد معك أثناء تحديد النطاق متطلبات اللغة والتوظيف المحلي والتعامل مع البيانات الخاصة بسوقك، وذلك قبل أي التزام. <a className="link" href="#enquire">أخبرنا أين نشاطك</a></>}>
<b>Saudi Arabia and the rest of the GCC:</b> during scoping we confirm the language, local-hiring and data-handling requirements for your market, before any commitment. <a className="link" href="#enquire">Tell us where you operate</a></Translated></div>
  </div>
</section>

{/* HOW IT WORKS */}
<section className="alt" id="how">
  <div className="wrap">
    <Translated as="div" className="kicker" ar="كيف نعمل">How it works</Translated>
    <Translated as="h2" ar="من المكالمة الأولى إلى فريق متكامل">From first call to a full team</Translated>
    <div className="steps">
      <div className="step"><Translated as="h3" ar="تحديد النطاق">Scope</Translated><Translated as="p" ar="مكالمة لتحديد النطاق نتفق فيها على الأدوار والأحجام وساعات العمل ومستويات الخدمة. ثم يصلك مقترح مكتوب بأسعار كل دور.">A scoping call to agree the roles, volumes, hours and service levels. You get a written proposal with per-role pricing.</Translated></div>
      <div className="step"><Translated as="h3" ar="التجربة">Pilot</Translated><Translated as="p" ar="تبدأ بفريق صغير، عادةً من 30 مقعدًا، وتقيّم الجودة وفق أهداف متفق عليها.">Start with a small team, typically from 30 seats, and judge the quality against agreed targets.</Translated></div>
      <div className="step"><Translated as="h3" ar="التوسّع">Scale</Translated><Translated as="p" ar="ننمو إلى الحجم الكامل متى حقّقت التجربة أهدافها. وتعمل معظم البرامج بنحو 100 مقعد.">Grow to full size once the pilot hits its targets. Most programmes run around 100 seats.</Translated></div>
      <div className="step"><Translated as="h3" ar="المراجعة">Review</Translated><Translated as="p" ar="تقارير شهرية عن الأداء والجودة من مدير حسابك في دبي.">Monthly performance and quality reports from your account lead in Dubai.</Translated></div>
    </div>
  </div>
</section>

{/* DELIVERY RISK */}
<section id="assurance">
  <div className="wrap split">
    <div>
      <Translated as="div" className="kicker" ar="كيف ندير التنفيذ">How we manage delivery</Translated>
      <Translated as="h2" ar="ما يحميك حين يكون الفريق خارج بلدك">What protects you when the team is offshore</Translated>
      <Translated as="p" className="lead" ar="تتعثر الاستعانة بمصادر خارجية حين لا يتحمّل أحد مسؤولية الجودة. وهكذا نتحمّلها نحن.">Outsourcing goes wrong when nobody owns quality. Here is how we own it.</Translated>
      <div className="acc">
        <details open><summary><Translated as="span" ar="اختيار الشركاء">Partner selection</Translated><span className="plus">+</span></summary><Translated as="div" className="body" ar="يُقيَّم شركاء التنفيذ قبل أن يتسلّموا أي عمل: منشآتهم وإدارتهم ومعايير التوظيف لديهم وسجلّ أعمالهم. ويوقّع كل شريك اتفاقية الخدمة الخاصة بنا ويعمل وفق قائمة أسعارنا.">Delivery partners are vetted before they take on work: their facilities, management, hiring standards and track record. Each one signs our service agreement and works to our rate card.</Translated></details>
        <details><summary><Translated as="span" ar="مراقبة الجودة">Quality monitoring</Translated><span className="plus">+</span></summary><Translated as="div" className="body" ar="لكل برنامج أهداف متفق عليها، مثل زمن الاستجابة والدقة وحلّ الطلبات. نراجعها أسبوعيًا مع الشريك، وتصلك خلاصة شهرية.">Every programme has agreed targets, such as response times, accuracy and resolution. We review them weekly with the partner, and you get a summary every month.</Translated></details>
        <details><summary><Translated as="span" ar="التصعيد">Escalation</Translated><span className="plus">+</span></summary><Translated as="div" className="body" ar="مدير حسابك في دبي هو نقطة التصعيد الوحيدة لديك. إذا تراجع أحد المؤشرات، نتفق مع الشريك على حلّ ونُبلغك بما يجري اتخاذه وبموعده.">Your account lead in Dubai is your single point of escalation. If a target slips, we agree a fix with the partner and tell you what's being done and by when.</Translated></details>
        <details><summary><Translated as="span" ar="استمرارية العمل">Continuity</Translated><span className="plus">+</span></summary><Translated as="div" className="body" ar="تُوثَّق إجراءاتك ويُدرَّب موظفون احتياطيون، فلا يعطّل الغياب أو دوران الموظفين عملياتك. وإن قصّر أحد الشركاء، يمكننا نقل العمل إلى شريك آخر.">Your processes are written down and backup staff are trained, so absences and staff turnover don't stop your operation. If a partner underperforms, we can move the work to another one.</Translated></details>
        <details><summary><Translated as="span" ar="البيانات والسرّية والامتثال">Data, confidentiality and compliance</Translated><span className="plus">+</span></summary><Translated as="div" className="body" ar="تُدرج شروط السرّية والتعامل مع البيانات في عقدك وفي اتفاقية الشريك معًا. ويقتصر الوصول إلى أنظمتك على الأدوار التي تحتاجه. وفي برامج المبيعات والتحصيل، نبني التدريب والمراقبة وفق قواعد البنك أو الجهة الرقابية التي تمثّلها، وتُتفق الضوابط معك أثناء تحديد النطاق.">Confidentiality and data-handling terms are written into both your contract and the partner agreement. Access to your systems is limited to the roles that need it. For sales and collections programmes, we build training and monitoring around the rules of the bank or regulator you represent, and the controls are agreed with you during scoping.</Translated></details>
      </div>
    </div>
    <Translated as="div" className="report" aria-label="Example monthly report" ariaAr="نموذج لتقرير شهري">
      <div className="report-head"><Translated as="b" ar="تقرير الأداء الشهري">Monthly performance report</Translated><Translated as="span" ar="نموذج للتخطيط">Example layout</Translated></div>
      <div className="kpis">
        <div><Translated as="small" ar="الالتزام بمستوى الخدمة">Service level met</Translated><Translated as="b" ar="المستهدف مقابل الفعلي">Target vs actual</Translated><i style={{ "--w": "92%" }}></i></div>
        <div><Translated as="small" ar="متوسط زمن الاستجابة">Average response time</Translated><Translated as="b" ar="المستهدف مقابل الفعلي">Target vs actual</Translated><i style={{ "--w": "78%" }}></i></div>
        <div><Translated as="small" ar="درجة الجودة">Quality score</Translated><Translated as="b" ar="المستهدف مقابل الفعلي">Target vs actual</Translated><i style={{ "--w": "88%" }}></i></div>
        <div><Translated as="small" ar="نسبة الحضور">Attendance</Translated><Translated as="b" ar="المستهدف مقابل الفعلي">Target vs actual</Translated><i style={{ "--w": "95%" }}></i></div>
      </div>
      <ul className="report-list"><Translated as="li" ar="المشكلات المُثارة وكيف عولجت">Issues raised and how they were fixed</Translated><Translated as="li" ar="عدد الموظفين والتغييرات في الفريق">Headcount and staff changes</Translated><Translated as="li" ar="الإجراءات المتفق عليها للشهر القادم">Actions agreed for next month</Translated></ul>
      <Translated as="p" className="fine" ar="هذا نموذج للتخطيط فقط. يعتمد تقريرك على الأهداف الواردة في عقدك.">This is an example of the layout only. Your report uses the targets in your contract.</Translated>
    </Translated>
  </div>
</section>

{/* CTA BAND */}
<div className="band"><div className="wrap"><div className="cta-band">
  <Translated as="h2" ar="اعرف كم سيكلّفك فريقك، دورًا بدور">Find out what your team would cost, role by role</Translated>
  <Translated as="p" ar="أخبرنا بالأدوار التي تحتاجها. نرد خلال يوم عمل واحد ونرسل لك مقترحًا مكتوبًا بسعر كل دور وخطة للمشروع التجريبي.">Tell us the roles you need. We reply within one working day and send a written proposal with a price for each role and a pilot plan.</Translated>
  <a href="#enquire" className="btn btn-white"><Translated as="span" ar="احصل على مقترحك">Get your proposal</Translated> <svg className="i" style={{ "width": "18px", "height": "18px" }}><use href="#i-arrow"></use></svg></a>
</div></div></div>

{/* FOUNDER TRACK RECORD */}
<section className="alt" id="record">
  <div className="wrap">
    <Translated as="div" className="kicker" ar="سجلّ الإنجاز">Track record</Translated>
    <Translated as="h2" ar="AMElleventh جديدة. أما الخبرة وراءها فليست كذلك.">AMElleventh is new. The experience behind it isn't.</Translated>
    <Translated as="p" className="lead" ar="قاد مؤسسنا الأعمال التالية في مناصب سابقة، قبل تأسيس AMElleventh. وهي معروضة دون أسماء العملاء حفاظًا على السرّية.">Engagements below were led by our founder in previous roles, before AMElleventh was formed. They're shown without client names to protect confidentiality.</Translated>
    <div className="cases">
      <details className="case"><summary><div><Translated as="b" ar="منصة مدفوعات رقمية مرخّصة">Licensed digital payments platform</Translated><Translated as="span" ar="الإمارات · الخدمات المالية · منصب سابق للمؤسس">UAE · Financial services · Founder's previous role</Translated></div><span className="plus">+</span></summary><div className="case-body"><Translated as="p" ar={<><strong>المهمة:</strong> بناء العمليات والامتثال والحوكمة اللازمة للحصول على موافقة المصرف المركزي، بدءًا من الصفر.</>}><strong>The brief:</strong> build the operations, compliance and governance needed for Central Bank approval, starting from nothing.</Translated><Translated as="p" className="result" ar="اعتماد الترخيص المزدوج (SVF + RPSCS). صفر ملاحظات تدقيق على مدى أربع سنوات، وأكثر من 180 إجراءً مكتوبًا، وأكثر من 10,000 عميل.">Dual licence (SVF + RPSCS) approved. Zero audit findings over four years, 180+ written procedures and 10,000+ customers.</Translated></div></details>
      <details className="case"><summary><div><Translated as="b" ar="خدمات تقنية في ثلاث دول">Three-country technology services</Translated><Translated as="span" ar="الإمارات والهند والفلبين · منصب سابق للمؤسس">UAE, India and the Philippines · Founder's previous role</Translated></div><span className="plus">+</span></summary><div className="case-body"><Translated as="p" ar={<><strong>المهمة:</strong> إنشاء منظومة التنفيذ والحوكمة والضوابط التجارية في ثلاث دول في آنٍ واحد.</>}><strong>The brief:</strong> set up delivery, governance and commercial controls in three countries at the same time.</Translated><Translated as="p" className="result" ar="تأسيس شركة خدمات مُدارة في الفلبين وفريق تطوير من 50 شخصًا تحت الحوكمة في الهند، مع مسؤولية كاملة عن الأرباح والخسائر.">Managed-services company founded in the Philippines and a 50-person development team governed in India, with full P&amp;L accountability.</Translated></div></details>
      <details className="case"><summary><div><Translated as="b" ar="هيكل استثماري لقطاع BPO">BPO investment structure</Translated><Translated as="span" ar="الفلبين والإمارات · مهمة سابقة للمؤسس">Philippines and UAE · Founder's previous engagement</Translated></div><span className="plus">+</span></summary><div className="case-body"><Translated as="p" ar={<><strong>المهمة:</strong> هيكلة استثمار في قطاع BPO عبر دولتين، بملكية محلية متوافقة مع الأنظمة وقاعدة في الإمارات.</>}><strong>The brief:</strong> structure a BPO investment across two countries, with compliant local ownership and a UAE base.</Translated><Translated as="p" className="result" ar="إطار استثماري بقيمة 53 مليون بيزو فلبيني مع هيكل ملكية متوافق مع متطلبات هيئة الأوراق المالية والبورصات (SEC) ونموذج تشغيلي بكيانين.">PHP 53M investment framework with SEC-compliant shareholding and a two-entity operating model.</Translated></div></details>
      <details className="case"><summary><div><Translated as="b" ar="برنامج وطني للمدفوعات عبر الجوال">National mobile payments programme</Translated><Translated as="span" ar="الشرق الأوسط · التقنية المالية · مهمة سابقة للمؤسس">Middle East · Fintech · Founder's previous engagement</Translated></div><span className="plus">+</span></summary><div className="case-body"><Translated as="p" ar={<><strong>المهمة:</strong> تصميم مسار الترخيص ونموذج الأعمال وخطة الإطلاق لشبكة مدفوعات مرخّصة.</>}><strong>The brief:</strong> design the licensing route, business model and rollout plan for a licensed payments network.</Translated><Translated as="p" className="result" ar="تصميم برنامج بقيمة 5.3 مليون دولار أمريكي وخارطة طريق لمدة 36 شهرًا، جاهزة للمستثمرين.">USD 5.3M programme design and a 36-month roadmap, ready for investors.</Translated></div></details>
    </div>
  </div>
</section>

{/* FOUNDER */}
<section id="story">
  <div className="wrap split">
    <div>
      <Translated as="div" className="kicker" ar="القيادة">Leadership</Translated>
      <Translated as="h2" ar="شريك، لا مجرد مورّد آخر">A partner, not another vendor</Translated>
      <article className="quote">
        <div className="mark" aria-hidden="true">“</div>
        <Translated as="blockquote" ar="«ينبغي أن تبدو الاستعانة بمصادر خارجية كأنها فريقك أنت، لكنها أسهل في الإدارة.»">“Outsourcing should feel like your own team, only easier to run.”</Translated>
        <Translated as="p" ar="عملتُ ميدانيًا في قطاع BPO في الفلبين وأدرتُ عمليات مصرفية في الإمارات. وأسّستُ AMElleventh ليحصل أصحاب الأعمال في الخليج على الفريق المناسب من الفلبين أو الهند أو المنطقة العربية مع شريك محلي يتحمّل مسؤولية النتائج.">I've worked the BPO floor in the Philippines and run bank operations in the UAE. I built AMElleventh so GCC businesses get the right offshore team, from the Philippines, India or the Arab region, with someone local who answers for the results.</Translated>
        <Translated as="cite" ar="— المؤسس، AMElleventh">— Founder, AMElleventh</Translated>
      </article>
    </div>
    <div className="timeline">
      <div className="tl"><Translated as="div" className="when" ar="الفلبين">Philippines</Translated><Translated as="h3" ar="عمليات BPO والتأمين">BPO and insurance operations</Translated><Translated as="p" ar="تقديم الخدمة ومراقبة الجودة وقيادة الفرق.">Service delivery, quality control and team leadership.</Translated></div>
      <div className="tl"><Translated as="div" className="when" ar="الإمارات · 13 عامًا">UAE · 13 years</Translated><Translated as="h3" ar="القطاع المصرفي: بنك الخليج الأول، وبنك الإمارات دبي الوطني، وبنك أبوظبي الأول">Banking: FGB, Emirates NBD and FAB</Translated><Translated as="p" ar="نظم المعلومات الإدارية والتحليلات وحوكمة البيانات وعمليات الأداء.">MIS, analytics, data governance and performance operations.</Translated></div>
      <div className="tl"><Translated as="div" className="when" ar="الإمارات">UAE</Translated><Translated as="h3" ar="مدفوعات رقمية مرخّصة">Licensed digital payments</Translated><Translated as="p" ar="شركة مدفوعات حاصلة على ترخيص مزدوج من المصرف المركزي، بُنيت من الصفر.">Central Bank dual-licensed payments business, built from scratch.</Translated></div>
      <div className="tl"><Translated as="div" className="when" ar="الإمارات · الهند · الفلبين">UAE · India · Philippines</Translated><Translated as="h3" ar="خدمات تقنية متعددة الدول">Multi-country technology services</Translated><Translated as="p" ar="تنفيذ وحوكمة عبر ثلاث دول.">Delivery and governance across three countries.</Translated></div>
      <div className="tl now"><div className="when">2026</div><Translated as="h3" ar="تأسيس AMElleventh في دبي">AMElleventh founded in Dubai</Translated><Translated as="p" ar="تنفيذ من المركز الأنسب بمسؤولية إماراتية.">Delivery from the right hub, with UAE accountability.</Translated></div>
    </div>
  </div>
</section>

{/* OTHER SERVICES */}
<section className="alt" id="more">
  <div className="wrap">
    <Translated as="div" className="kicker" ar="ضمن AMElleventh أيضًا">Also from AMElleventh</Translated>
    <Translated as="h2" ar="خدمات وشراكات أخرى">Other services and partnerships</Translated>
    <Translated as="p" className="lead" ar="فرق العمل الخارجية هي نشاطنا الرئيسي. وتدعم هذه الخدمات العملاء الذين يؤسسون أعمالهم أو يوسّعونها في المنطقة.">Outsourced teams are our main business. These services support clients setting up or growing in the region.</Translated>
    <div className="cards c4">
      <button className="card" data-open="d-consult">
        <div className="art" aria-hidden="true"><svg className="aw" viewBox="0 0 24 24"><use href="#ia-adv"></use></svg><svg className="ai" viewBox="0 0 24 24"><use href="#ia-adv"></use></svg></div>
        <Translated as="h3" ar="الاستشارات التجارية">Business consultancy</Translated><Translated as="p" ar="دخول الأسواق والهيكلة التجارية والجاهزية التنظيمية.">Market entry, commercial structure and regulatory readiness.</Translated><span className="more"><Translated as="span" ar="التفاصيل والرسوم">Details and fees</Translated> <svg className="i" style={{ "width": "16px", "height": "16px" }}><use href="#i-arrow"></use></svg></span></button>
      <button className="card" data-open="d-it">
        <div className="art" aria-hidden="true"><svg className="aw" viewBox="0 0 24 24"><use href="#ia-it"></use></svg><svg className="ai" viewBox="0 0 24 24"><use href="#ia-it"></use></svg></div>
        <Translated as="h3" ar="الحلول التقنية">IT solutions</Translated><Translated as="p" ar="إعداد أنظمة ERP وCRM، والبرمجيات المخصصة، وخدمات تقنية المعلومات المُدارة، والأتمتة.">ERP and CRM setup, custom software, managed IT and automation.</Translated><span className="more"><Translated as="span" ar="التفاصيل">Details</Translated> <svg className="i" style={{ "width": "16px", "height": "16px" }}><use href="#i-arrow"></use></svg></span></button>
      <button className="card" data-open="d-rd">
        <div className="art" aria-hidden="true"><svg className="aw" viewBox="0 0 24 24"><use href="#ia-rd"></use></svg><svg className="ai" viewBox="0 0 24 24"><use href="#ia-rd"></use></svg></div>
        <Translated as="h3" ar="الاستشارات الضريبية للبحث والتطوير">R&amp;D tax advisory</Translated><Translated as="p" ar="جهّز سجلاتك للاستفادة من حافز البحث والتطوير الضريبي في الإمارات.">Get your records ready for the UAE R&amp;D tax incentive.</Translated><span className="more"><Translated as="span" ar="التفاصيل">Details</Translated> <svg className="i" style={{ "width": "16px", "height": "16px" }}><use href="#i-arrow"></use></svg></span></button>
      <button className="card" data-open="d-partners">
        <div className="art" aria-hidden="true"><svg className="aw" viewBox="0 0 24 24"><use href="#ia-pt"></use></svg><svg className="ai" viewBox="0 0 24 24"><use href="#ia-pt"></use></svg></div>
        <Translated as="h3" ar="كن شريكًا لنا">Partner with us</Translated><Translated as="p" ar="لشركات BPO ووكالات الترخيص والوكالات المصرفية والعقارية.">For BPO companies, licensing agencies and bank or property sales agencies.</Translated><span className="more"><Translated as="span" ar="خيارات الشراكة">Partner options</Translated> <svg className="i" style={{ "width": "16px", "height": "16px" }}><use href="#i-arrow"></use></svg></span></button>
    </div>
  </div>
</section>

{/* JOIN OUR NETWORK */}
<section id="network">
  <div className="wrap">
    <Translated as="div" className="kicker" ar="شبكة AMElleventh">The AMElleventh network</Translated>
    <Translated as="h2" ar="انضم إلى شبكتنا">Join our network</Translated>
    <Translated as="p" className="lead" ar="نبني فرقًا وشراكات لعملاء الإمارات والخليج، ونعمل مع من يشاركنا معيار «الحادي عشر». سجّل اهتمامك، وسنتواصل معك حين يناسب ملفّك أحد برامجنا أو عملائنا.">We build teams and partnerships for UAE and GCC clients, and we work with people who share the eleventh standard. Register your interest and we'll contact you when your profile fits one of our programmes or clients.</Translated>
    <div className="net">
      <div className="net-card"><div className="tile"><svg className="i"><use href="#i-user"></use></svg></div><Translated as="h3" ar="محترف مستقل">Individual professional</Translated><Translated as="p" ar="تبحث عن فرصة في المبيعات أو التحصيل أو خدمة العملاء أو الخدمات المساندة؟ أرسل بياناتك وسيرتك الذاتية.">Looking for opportunities in sales, collections, customer service or back office? Send your details and CV.</Translated><Translated as="button" type="button" className="btn btn-outline btn-sm" data-apply="Individual professional" ar="سجّل كمحترف">Join as a professional</Translated></div>
      <div className="net-card"><div className="tile"><svg className="i"><use href="#i-refer"></use></svg></div><Translated as="h3" ar="وكيل إحالة">Referral agent</Translated><Translated as="p" ar="تعرف شركات تحتاج إلى فرق عمل؟ أحِلها إلينا واكسب عمولة وفق شروط مكتوبة.">Know businesses that need a team? Refer them to us and earn a commission on written terms.</Translated><Translated as="button" type="button" className="btn btn-outline btn-sm" data-apply="Referral agent" ar="انضم كوكيل إحالة">Join as a referrer</Translated></div>
      <div className="net-card"><div className="tile"><svg className="i"><use href="#i-headset"></use></svg></div><Translated as="h3" ar="شركة BPO">BPO company</Translated><Translated as="p" ar="شركة تنفيذ في الفلبين أو الهند أو دولة عربية وتريد عملاء في الإمارات والخليج دون التأسيس هناك.">A delivery company in the Philippines, India or an Arab country that wants UAE and GCC clients without setting up there.</Translated><Translated as="button" type="button" className="btn btn-outline btn-sm" data-apply="BPO company" ar="انضم كشريك BPO">Join as a BPO partner</Translated></div>
      <div className="net-card"><div className="tile"><svg className="i"><use href="#i-code"></use></svg></div><Translated as="h3" ar="شركة تقنية معلومات">IT company</Translated><Translated as="p" ar="شركة برمجيات أو خدمات تقنية مُدارة تريد تنفيذ مشاريع عملائنا أو الإحالة المتبادلة.">A software or managed-IT firm that wants to deliver our clients' projects or exchange referrals.</Translated><Translated as="button" type="button" className="btn btn-outline btn-sm" data-apply="IT company" ar="انضم كشريك تقني">Join as an IT partner</Translated></div>
      <div className="net-card"><div className="tile"><svg className="i"><use href="#i-calc"></use></svg></div><Translated as="h3" ar="شركة محاسبة وضرائب">Accounting &amp; tax firm</Translated><Translated as="p" ar="مكتب محاسبة أو ضرائب يخدم عملاءنا في الامتثال والتقارير والبحث والتطوير.">An accounting or tax practice serving our clients on compliance, reporting and R&amp;D.</Translated><Translated as="button" type="button" className="btn btn-outline btn-sm" data-apply="Accounting &amp; tax firm" ar="انضم كشريك محاسبي">Join as a finance partner</Translated></div>
    </div>
    <div className="note-bar net-note"><svg className="i"><use href="#i-people"></use></svg><Translated as="p" ar="يراجع فريقنا كل تسجيل. الأفراد يصلون إلى الموارد البشرية على hr@amelleventh.com، والشركات ووكلاء الإحالة إلى فريق الشراكات على engage@amelleventh.com. لا نفرض أي رسوم على المسجّلين.">Our team reviews every registration. Individuals go to HR at hr@amelleventh.com; companies and referral agents go to our partnerships team at engage@amelleventh.com. We never charge anyone to join.</Translated></div>
  </div>
</section>

{/* FAQ */}
<section className="alt" id="faq">
  <div className="wrap split">
    <div><Translated as="div" className="kicker" ar="الأسئلة">Questions</Translated><Translated as="h2" ar="أسئلة شائعة">Common questions</Translated><Translated as="p" className="lead" ar="لم تجد إجابتك؟ راسلنا عبر واتساب.">Can't find your answer? Send us a WhatsApp message.</Translated></div>
    <div className="acc">
      <details><summary><Translated as="span" ar="هل 30 مقعدًا هو الحد الأدنى؟">Is 30 seats the minimum?</Translated><span className="plus">+</span></summary><Translated as="div" className="body" ar="هي نقطة البداية لمعظم المشاريع التجريبية، لأنها تكفي لإقامة إشراف ومراقبة جودة سليمين. وإن كنت تحتاج عددًا أقل، فاحجز مكالمة لتحديد النطاق. سنخبرك بصراحة إن كان بإمكاننا تنفيذه بجودة أم أن خيارًا آخر أنسب لك.">It's where most pilots start, because that's enough to set up proper supervision and quality control. If you need fewer people, book a scoping call. We'll tell you honestly whether we can do it well or whether another option suits you better.</Translated></details>
      <details><summary><Translated as="span" ar="هل يمكنكم بناء فرق مبيعات المنتجات المصرفية والتحصيل؟">Can you build bank-product sales and collections teams?</Translated><span className="plus">+</span></summary><Translated as="div" className="body" ar="نعم. نبني فرق مبيعات للبطاقات والقروض والتمويل العقاري، وفرق تأجير وتحصيل للشركات العقارية، وفق نصوصك وأهدافك. وتبقى قواعد المنتج والموافقات المطلوبة من البنك أو الجهة الرقابية هي المرجع، ونبني التدريب ومراقبة الجودة حولها.">Yes. We build sales teams for cards, loans and mortgages, and leasing and collections teams for real estate firms, working to your scripts and targets. The product rules and approvals required by your principal bank or regulator stay the reference, and we build training and quality monitoring around them.</Translated></details>
      <details><summary><Translated as="span" ar="كيف تُحدَّد الأسعار؟">How is pricing set?</Translated><span className="plus">+</span></summary><Translated as="div" className="body" ar="يُسعَّر كل دور على حدة. وتحصل على قائمة الأسعار الكاملة في مقترحك المكتوب بعد مكالمة تحديد النطاق.">Each role is priced on its own. You get the full rate card in your written proposal after the scoping call.</Translated></details>
      <details><summary><Translated as="span" ar="هل تخدمون عملاء في السعودية وبقية دول الخليج؟">Do you serve clients in Saudi Arabia and the rest of the GCC?</Translated><span className="plus">+</span></summary><Translated as="div" className="body" ar="نعم. يمكن أن يكون نشاطك في أي دولة خليجية. يبقى عقدك ومدير حسابك وتقاريرك في دبي، ونختار مركز التنفيذ المناسب لك. ونؤكد معك أثناء تحديد النطاق أي متطلبات خاصة بسوقك من لغة وتوظيف محلي وتعامل مع البيانات.">Yes. Your business can be anywhere in the GCC. Your contract, account lead and reporting stay in Dubai, and we choose the delivery hub that suits you. During scoping we confirm any requirements specific to your market, such as language, local hiring and data handling.</Translated></details>
      <details><summary><Translated as="span" ar="هل يمكنكم التنفيذ من الهند أو دولة عربية؟">Can you deliver from India or an Arab country?</Translated><span className="plus">+</span></summary><Translated as="div" className="body" ar="نعم، حسب البرنامج. الفلبين هي مركزنا الأساسي، ونعمل في الهند والمنطقة العربية عبر شركاء تنفيذ مُعتمدين حين تتطلب اللغة أو المهارات أو التكلفة ذلك. أخبرنا باحتياجك وسنقترح المركز الأنسب بصراحة.">Yes, by programme. The Philippines is our core hub, and we work in India and the Arab region through vetted delivery partners when language, skills or cost call for it. Tell us what you need and we'll recommend the best fit, honestly.</Translated></details>
      <details><summary><Translated as="span" ar="من ينفّذ العمل؟">Who does the work?</Translated><span className="plus">+</span></summary><Translated as="div" className="body" ar="شركاء تنفيذ معتمدون في الفلبين أو الهند أو المنطقة العربية حسب البرنامج، يعملون بموجب اتفاقيات الخدمة الخاصة بنا. ويبقى عقدك ومدير حسابك ومسؤوليتنا لدى AMElleventh في الإمارات.">Vetted delivery partners in the Philippines, India or the Arab region depending on the programme, working under our service agreements. Your contract, your account lead and our accountability all stay with AMElleventh in the UAE.</Translated></details>
      <details><summary><Translated as="span" ar="هل يمكن للفريق تغطية ساعات عملي؟">Can the team cover my business hours?</Translated><span className="plus">+</span></summary><Translated as="div" className="body" ar="نعم. تُضبط الورديات وفق الساعات التي تحتاجها في الإمارات أو السعودية أو أي سوق خليجي، بما فيها المساء وعطلات نهاية الأسبوع. وتسبق مانيلا دبي بأربع ساعات، والهند بساعة ونصف، وتتأخر السعودية ساعة واحدة عنها.">Yes. Shifts are set around the hours you need in the UAE, Saudi Arabia or any GCC market, including evenings and weekends. Manila is four hours ahead of Dubai, India is one and a half hours ahead, and Saudi Arabia is one hour behind.</Translated></details>
      <details><summary><Translated as="span" ar="كم يستغرق بدء المشروع التجريبي؟">How quickly can a pilot start?</Translated><span className="plus">+</span></summary><Translated as="div" className="body" ar="يتوقف ذلك على الأدوار والأحجام. يتضمن مقترحك موعد البدء وخطة التشغيل التدريجي بعد اكتمال تحديد النطاق.">It depends on the roles and volumes. Your proposal includes a start date and a ramp-up plan once scoping is done.</Translated></details>
    </div>
  </div>
</section>

{/* ENQUIRY */}
<section id="enquire" style={{ "paddingTop": "0" }}>
  <div className="wrap">
    <div className="enquiry">
      <div className="enq-copy">
        <Translated as="h2" ar="خطّط لمشروعك التجريبي">Plan your pilot</Translated>
        <Translated as="p" ar="أخبرنا بما تحتاجه. وهذا ما يحدث بعدها:">Tell us what you need. Here is what happens next:</Translated>
        <ol className="enq-next">
          <Translated as="li" ar={<><b>خلال يوم عمل واحد</b> نردّ عليك ونرتّب مكالمة لتحديد النطاق.</>}><span><b>Within one working day</b> we reply and arrange a scoping call.</span></Translated>
          <Translated as="li" ar={<><b>مقترح مكتوب</b> بسعر كل دور.</>}><span><b>A written proposal</b> with a price for each role.</span></Translated>
          <Translated as="li" ar={<><b>خطة للمشروع التجريبي</b> بموعد البدء والتشغيل التدريجي.</>}><span><b>A pilot plan</b> with start date and ramp-up.</span></Translated>
        </ol>
        <div className="enq-contacts">
          <a href="https://wa.me/971527188093?text=Hi%20AMElleventh%2C%20I%27d%20like%20to%20plan%20a%20pilot."><svg className="i"><use href="#i-chat"></use></svg><span><Translated as="small" ar="واتساب">WhatsApp</Translated><bdi dir="ltr">+971 52 718 8093</bdi></span></a>
          <a href="mailto:engage@amelleventh.com"><svg className="i"><use href="#i-mail"></use></svg><span><Translated as="small" ar="البريد الإلكتروني">Email</Translated><bdi dir="ltr">engage@amelleventh.com</bdi></span></a>
        </div>
      </div>
      <EnquiryForm />
    </div>
  </div>
</section>
</main>

<footer>
  <div className="wrap">
    <div className="foot-grid">
      <div className="foot-brand">
        <Translated as="a" href="#top" className="logo" aria-label="AMElleventh home" ariaAr="AMElleventh، الصفحة الرئيسية"><svg viewBox="-20 -125 860 1048" aria-hidden="true" style={{ "width": "32px", "height": "39px" }}><use href="#am-mark"></use></svg><span className="logo-word" dir="ltr">AMe<b>11</b>eventh</span></Translated>
        <Translated as="p" ar="نحن الحادي عشر. لسنا العشرة المثالية، بل ما يتجاوز جودة الخدمة.">We are the eleventh. Not a perfect 10, but beyond service quality.</Translated>
        <div className="foot-contact">
          <a href="https://wa.me/971527188093?text=Hi%20AMElleventh%2C%20I%27d%20like%20to%20know%20more."><svg className="i" style={{ "width": "17px", "height": "17px" }}><use href="#i-chat"></use></svg><span><Translated as="span" ar="واتساب">WhatsApp</Translated> <bdi dir="ltr">+971 52 718 8093</bdi></span></a>
          <a href="mailto:engage@amelleventh.com"><svg className="i" style={{ "width": "17px", "height": "17px" }}><use href="#i-mail"></use></svg><bdi dir="ltr">engage@amelleventh.com</bdi></a>
          <a href="mailto:hr@amelleventh.com"><svg className="i" style={{ "width": "17px", "height": "17px" }}><use href="#i-people"></use></svg><span><Translated as="span" ar="الأفراد">Individuals</Translated> <bdi dir="ltr">hr@amelleventh.com</bdi></span></a>
        </div>
      </div>
      <div className="foot-col"><Translated as="h4" ar="الخدمات">Services</Translated><ul>
        <li><Translated as="a" href="#bpo" ar="فرق العمل الخارجية (BPO)">Outsourced teams (BPO)</Translated></li>
        <li><Translated as="button" data-open="d-consult" ar="الاستشارات التجارية">Business consultancy</Translated></li>
        <li><Translated as="button" data-open="d-it" ar="الحلول التقنية">IT solutions</Translated></li>
        <li><Translated as="button" data-open="d-rd" ar="الاستشارات الضريبية للبحث والتطوير">R&amp;D tax advisory</Translated></li>
      </ul></div>
      <div className="foot-col"><Translated as="h4" ar="الشركة">Company</Translated><ul>
        <li><Translated as="a" href="#network" ar="انضم إلى شبكتنا">Join our network</Translated></li>
        <li><Translated as="a" href="#standard" ar="معيارنا: الحادي عشر">Our standard: the eleventh</Translated></li>
        <li><Translated as="a" href="#story" ar="مؤسسنا">Our founder</Translated></li>
        <li><Translated as="a" href="#record" ar="سجلّ الإنجاز">Track record</Translated></li>
        <li><Translated as="a" href="#assurance" ar="كيف ندير الجودة">How we manage quality</Translated></li>
        <li><Translated as="button" data-open="d-partners" ar="كن شريكًا لنا">Partner with us</Translated></li>
      </ul></div>
      <div className="foot-col"><Translated as="h4" ar="تواصل معنا">Get in touch</Translated><ul>
        <li><Translated as="a" href="#enquire" ar="خطّط لمشروعك التجريبي">Plan a pilot</Translated></li>
        <li><Translated as="a" href="#faq" ar="أسئلة شائعة">Common questions</Translated></li>
        <li><Translated as="a" href="mailto:engage@amelleventh.com" ar="راسلنا عبر البريد">Email us</Translated></li>
      </ul></div>
    </div>
    <Translated as="div" className="copy" ar="© 2026 Amelleventh - FZCO. جميع الحقوق محفوظة.">© 2026 Amelleventh - FZCO. All rights reserved.</Translated>
  </div>
</footer>

{/* DIALOGS */}
<dialog id="d-consult" aria-labelledby="h2d"><div className="dlg">
  <Translated as="button" className="dlg-x" aria-label="Close" ariaAr="إغلاق">×</Translated>
  <Translated as="h3" id="h2d" ar="الاستشارات التجارية">Business consultancy</Translated>
  <Translated as="p" ar="للشركات التي تدخل أسواق الإمارات أو الخليج، أو تؤسس نشاطًا خاضعًا للتنظيم، أو تستعد للمستثمرين. لكل مشروع نطاق ثابت يُتفق عليه كتابةً.">For companies entering the UAE or GCC, setting up a regulated business or getting ready for investors. Every engagement has a fixed scope agreed in writing.</Translated>
  <Translated as="h4" ar="الرسوم الاسترشادية">Indicative fees</Translated>
  <div className="rows">
    <div><Translated as="span" ar="تقييم الهيكلة التجارية">Commercial structuring assessment</Translated><Translated as="b" ar="من 5,000 درهم">from AED 5,000</Translated></div>
    <div><Translated as="span" ar="دخول السوق والمخطط التجاري">Market entry &amp; commercial blueprint</Translated><Translated as="b" ar="25,000–75,000 درهم">AED 25,000–75,000</Translated></div>
    <div><Translated as="span" ar="برنامج الجاهزية للمستثمرين">Investor readiness programme</Translated><Translated as="b" ar="15,000–50,000 درهم">AED 15,000–50,000</Translated></div>
    <div><Translated as="span" ar="عقد استشاري مستمر">Ongoing advisory retainer</Translated><Translated as="b" ar="8,000–25,000 درهم / شهريًا">AED 8,000–25,000 / mo</Translated></div>
  </div>
  <Translated as="p" className="fine" ar="هذه نطاقات استرشادية. تُؤكَّد رسومك النهائية في مقترح موقّع.">These are guide ranges. Your final fee is confirmed in a signed proposal.</Translated>
  <Translated as="a" href="#enquire" className="btn btn-primary" data-close="" data-prefill="Consultancy, IT or R&amp;D tax" ar="اسأل عن الاستشارات">Ask about consultancy</Translated>
</div></dialog>

<dialog id="d-it" aria-labelledby="h3d"><div className="dlg">
  <Translated as="button" className="dlg-x" aria-label="Close" ariaAr="إغلاق">×</Translated>
  <Translated as="h3" id="h3d" ar="الحلول التقنية">IT solutions</Translated>
  <Translated as="p" ar="مشاريع تقنية تُدار من الإمارات وتُنفَّذ بواسطة شركاء تقنيين معتمدين، بتكاليف تنفيذ محددة.">Technology projects managed from the UAE and delivered by vetted technology partners, with set implementation costs.</Translated>
  <Translated as="h4" ar="ما نقدّمه">What we deliver</Translated>
  <div className="chips"><Translated as="span" ar="تنفيذ البرمجيات وتحديثها">Software implementation &amp; upgrades</Translated><Translated as="span" ar="أنظمة ERP وCRM مخصصة">Custom ERP &amp; CRM</Translated><Translated as="span" ar="تطبيقات الجوال والويب">Mobile &amp; web apps</Translated><Translated as="span" ar="أتمتة العمليات">Process automation</Translated><Translated as="span" ar="التقارير ولوحات المعلومات">Reporting &amp; dashboards</Translated><Translated as="span" ar="دعم المستوى الأول إلى الثالث">1st to 3rd-line support</Translated><Translated as="span" ar="الحوسبة السحابية وخدمات تقنية المعلومات المُدارة">Cloud &amp; managed IT</Translated></div>
  <Translated as="a" href="#enquire" className="btn btn-primary" data-close="" data-prefill="Consultancy, IT or R&amp;D tax" ar="اسأل عن المشاريع التقنية">Ask about IT projects</Translated>
</div></dialog>

<dialog id="d-rd" aria-labelledby="h4d"><div className="dlg">
  <Translated as="button" className="dlg-x" aria-label="Close" ariaAr="إغلاق">×</Translated>
  <Translated as="h3" id="h4d" ar="الاستشارات الضريبية للبحث والتطوير">R&amp;D tax advisory</Translated>
  <Translated as="p" ar="يتضمن نظام ضريبة الشركات في الإمارات حافزًا للبحث والتطوير، والاستفادة منه تعتمد على توفّر السجلات الصحيحة. نساعد الشركات على التحقق من أهليتها وتجهيز تلك السجلات.">The UAE's Corporate Tax framework includes an incentive for research and development, and claiming it depends on having the right records. We help businesses check whether they qualify and get those records ready.</Translated>
  <Translated as="h4" ar="ما نغطيه">What we cover</Translated>
  <div className="chips"><Translated as="span" ar="فحص الأهلية">Eligibility check</Translated><Translated as="span" ar="تتبّع تكاليف البحث والتطوير">R&amp;D cost tracking</Translated><Translated as="span" ar="ملف التوثيق">Documentation pack</Translated><Translated as="span" ar="دعم إعداد المطالبة">Claim preparation support</Translated></div>
  <Translated as="p" className="fine" ar="نعمل جنبًا إلى جنب مع مستشاريك الضريبيين، ومع شركاء متخصصين في الضرائب عند الحاجة.">We work alongside your tax advisors, with specialist tax partners where needed.</Translated>
  <Translated as="a" href="#enquire" className="btn btn-primary" data-close="" data-prefill="Consultancy, IT or R&amp;D tax" ar="تحقّق من الأهلية">Check eligibility</Translated>
</div></dialog>

<dialog id="d-model" aria-labelledby="h5d"><div className="dlg">
  <Translated as="button" className="dlg-x" aria-label="Close" ariaAr="إغلاق">×</Translated>
  <Translated as="h3" id="h5d" ar="لماذا تكلفتنا أقل">Why it costs less</Translated>
  <Translated as="p" ar="تبني معظم شركات الاستعانة بمصادر خارجية مراكز عمل خاصة بها وتحمّل تكلفتها عليك. أما نحن فنعمل بطريقة مختلفة.">Most outsourcing firms build their own floor and pass the cost on to you. We work differently.</Translated>
  <Translated as="h4" ar="من يقوم بماذا">Who does what</Translated>
  <div className="rows">
    <div><Translated as="span" ar="وضع المعيار وقائمة الأسعار">Sets the standard and the rate card</Translated><b>AMElleventh</b></div>
    <div><Translated as="span" ar="اختيار شريك التنفيذ وإدارته">Selects and manages the delivery partner</Translated><b>AMElleventh</b></div>
    <div><Translated as="span" ar="التنفيذ وفق مستويات الخدمة لدينا">Delivers to our service levels</Translated><Translated as="b" ar="شريك BPO">BPO partner</Translated></div>
    <div><Translated as="span" ar="عقد واحد ونقطة مسؤولية واحدة">One contract, one point of accountability</Translated><Translated as="b" ar="أنت">You</Translated></div>
  </div>
  <Translated as="p" className="fine" ar="ولأننا لا نتحمل تكاليف مراكز عمل ثابتة، نستطيع تسعير خدماتنا بأقل ونتوسع مع الطلب.">With no fixed floor costs to carry, we can price lower and grow with demand.</Translated>
  <Translated as="a" href="#enquire" className="btn btn-primary" data-close="" ar="خطّط لمشروعك التجريبي">Plan a pilot</Translated>
</div></dialog>

<dialog id="d-partners" aria-labelledby="h6d"><div className="dlg">
  <Translated as="button" className="dlg-x" aria-label="Close" ariaAr="إغلاق">×</Translated>
  <Translated as="h3" id="h6d" ar="كن شريكًا لنا">Partner with us</Translated>
  <Translated as="h4" ar="شركات BPO">BPO companies</Translated>
  <Translated as="p" ar="اكسب عملاء في الإمارات والسعودية والخليج دون الحاجة إلى التأسيس في المنطقة، سواء كنت في الفلبين أو الهند أو دولة عربية. نحن نوفّر العملاء وندير العلاقة، وأنتم تنفّذون وفق قائمة أسعارنا ومستويات الخدمة.">Win UAE, Saudi and GCC clients without setting up in the region, whether you are in the Philippines, India or an Arab country. We bring the clients and manage the relationship, and you deliver to our rate card and service levels.</Translated>
  <Translated as="h4" ar="وكالات الترخيص وتأسيس الشركات">Licensing and company-setup agencies</Translated>
  <Translated as="p" ar="أحِل إلينا الشركات حديثة الترخيص التي تحتاج إلى موظفين وهيكل تشغيلي. نقوم نحن بالعمل وتحصل أنت على عمولة وفق شروط مكتوبة، دون أي عمل تنفيذي على فريقك.">Refer newly licensed businesses that need staff and structure. We do the work and you earn a commission on written terms, with no delivery work for your team.</Translated>
  <Translated as="h4" ar="الوكالات المصرفية والعقارية">Bank-product and property agencies</Translated>
  <Translated as="p" ar="تحتاج إلى فريق مبيعات بطاقات وقروض وتمويل عقاري، أو فريق تأجير وتحصيل؟ نبني الفريق ونديره ونرفع لك تقريرًا شهريًا، وتحتفظ أنت بعلاقتك مع البنك أو المالك.">Need a cards, loans or mortgage sales team, or a leasing and collections team? We build it, manage it and report on it monthly, while you keep your relationship with the bank or property owner.</Translated>
  <Translated as="a" href="#enquire" className="btn btn-primary" data-close="" data-prefill="Partnership" ar="ناقش الشراكة">Discuss a partnership</Translated>
</div></dialog>

<dialog id="d-apply" aria-labelledby="h7d"><div className="dlg">
  <Translated as="button" className="dlg-x" aria-label="Close" ariaAr="إغلاق">×</Translated>
  <Translated as="h3" id="h7d" ar="انضم إلى شبكة AMElleventh">Join the AMElleventh network</Translated>
  <Translated as="p" ar="سجّل اهتمامك. سنتواصل معك حين يناسب ملفّك أحد برامجنا.">Register your interest. We will contact you when your profile fits one of our programmes.</Translated>
  <NetworkForm />
</div></dialog>



      <SiteInteractions />
    </>
  );
}
