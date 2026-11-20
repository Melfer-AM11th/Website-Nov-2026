import EnquiryForm from '../components/EnquiryForm';
import SiteInteractions from '../components/SiteInteractions';
import { LanguageMetadata, LanguageToggle, Translated } from '../components/Language';

export default function Home() {
  return (
    <>
      <LanguageMetadata />

{/* Serif Pi cursor (AM11 mark) */}
<div id="am-cursor" aria-hidden="true"><svg width="28" height="23" viewBox="-4 -3 108 87"><defs><linearGradient id="cG" x1="0" y1="0" x2="0" y2="81" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#EDD07A"></stop><stop offset=".3" stopColor="#D4A843"></stop><stop offset=".65" stopColor="#B8922A"></stop><stop offset="1" stopColor="#7A5A14"></stop></linearGradient></defs><path d="M1 15 C-0.5 7 4 0.8 15 1 L100 0.3 C92 4 86 7 78 7.5 L75.5 7.5 L75 64 C75 74 80.5 77.4 89 78.2 L89 80 L53 80 L53 78.2 C57 77.4 59.4 74 59.4 64 L59 7.5 L39.5 7.5 L38.8 64 C38.8 74 43.5 77.4 50 78.2 L50 80 L14.5 80 L14.5 78.2 C20.5 77.4 23 74 23 64 L22.5 7.5 L15 7.6 C8 7.8 3 10 1 15 Z" fill="url(#cG)" stroke="#0F1B2D" strokeWidth="3.2" strokeLinejoin="round" paintOrder="stroke"></path></svg></div>
<div id="am-trail" aria-hidden="true"><svg width="18" height="15" viewBox="-4 -3 108 87"><path d="M1 15 C-0.5 7 4 0.8 15 1 L100 0.3 C92 4 86 7 78 7.5 L75.5 7.5 L75 64 C75 74 80.5 77.4 89 78.2 L89 80 L53 80 L53 78.2 C57 77.4 59.4 74 59.4 64 L59 7.5 L39.5 7.5 L38.8 64 C38.8 74 43.5 77.4 50 78.2 L50 80 L14.5 80 L14.5 78.2 C20.5 77.4 23 74 23 64 L22.5 7.5 L15 7.6 C8 7.8 3 10 1 15 Z" fill="#D4A843"></path></svg></div>

{/* icon sprite */}
<svg width="0" height="0" style={{ "position": "absolute" }} aria-hidden="true">
  <symbol id="i-check" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="m8.5 12 2.5 2.5 4.5-5"></path></symbol>
  <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"></path></symbol>
  <symbol id="i-out" viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"></path></symbol>
  <symbol id="i-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></symbol>
  <symbol id="i-chat" viewBox="0 0 24 24"><path d="M21 12a8 8 0 0 1-11.8 7L4 20l1.1-4.6A8 8 0 1 1 21 12z"></path></symbol>
  <symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"></path><circle cx="12" cy="9" r="2.5"></circle></symbol>
  <symbol id="i-menu" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"></path></symbol>
  <symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6z"></path><path d="m9 12 2 2 4-4"></path></symbol>
  <symbol id="i-target" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="12" r="5"></circle><circle cx="12" cy="12" r="1"></circle></symbol>
  <symbol id="i-scale" viewBox="0 0 24 24"><path d="M3 17 9 11l4 4 8-8"></path><path d="M15 7h6v6"></path></symbol>
  <symbol id="i-people" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5"></circle><path d="M2.5 20a6.5 6.5 0 0 1 13 0"></path><path d="M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4-6"></path></symbol>
  <symbol id="i-chart" viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"></path></symbol>
  <symbol id="i-code" viewBox="0 0 24 24"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16"></path></symbol>
  <symbol id="i-doc" viewBox="0 0 24 24"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><path d="M14 3v6h6M8 13h8M8 17h5"></path></symbol>
  <symbol id="i-handshake" viewBox="0 0 24 24"><path d="m11 17 2 2a1.5 1.5 0 0 0 2-2"></path><path d="m14 14 2.5 2.5a1.5 1.5 0 0 0 2-2l-3.5-3.5-1 .5a2.5 2.5 0 0 1-3-3.5L14 5h3l4 4v5"></path><path d="M3 9l4-4h3M3 9v5l6 6a1.5 1.5 0 0 0 2-2"></path></symbol>
</svg>

<header>
  <div className="wrap bar">
    <Translated as="a" href="#top" className="logo" aria-label="AMElleventh home" ariaAr="AMElleventh، الصفحة الرئيسية">
      <svg viewBox="0 0 108 150" aria-hidden="true"><defs><linearGradient id="lg" x1="0" y1="0" x2="0" y2="150" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#EDD07A"></stop><stop offset=".3" stopColor="#D4A843"></stop><stop offset=".65" stopColor="#B8922A"></stop><stop offset="1" stopColor="#7A5A14"></stop></linearGradient></defs><g fill="url(#lg)"><rect width="108" height="6" rx="1.5"></rect><path d="M10 18 L20 12 L42 12 L42 18 Z" opacity=".65"></path><rect x="10" y="18" width="32" height="7" rx="1.5"></rect><path d="M16 25 L36 25 L34 108 L18 108 Z"></path><rect x="6" y="113" width="40" height="8" rx="2"></rect><path d="M64 18 L74 12 L96 12 L96 18 Z" opacity=".65"></path><rect x="64" y="18" width="32" height="7" rx="1.5"></rect><path d="M70 25 L90 25 L88 108 L72 108 Z"></path><rect x="60" y="113" width="40" height="8" rx="2"></rect><rect y="126" width="108" height="5" rx="1.5" opacity=".4"></rect></g></svg>
      <span className="logo-word" dir="ltr">AME<b>ll</b>eventh</span>
    </Translated>
    <ul className="nav">
      <li><Translated as="a" href="#bpo" ar="ما نقدمه">What we provide</Translated></li>
      <li><Translated as="a" href="#how" ar="كيف نعمل">How it works</Translated></li>
      <li><Translated as="a" href="#assurance" ar="الجودة">Quality</Translated></li>
      <li><Translated as="a" href="#record" ar="سجلّ الإنجاز">Track record</Translated></li>
      <li><Translated as="a" href="#more" ar="خدمات أخرى">Other services</Translated></li>
    </ul>
    <div className="bar-right">
      <LanguageToggle />
      <a href="#enquire" className="btn btn-primary" style={{ "padding": ".75rem 1.2rem" }}><Translated as="span" ar="خطّط لمشروعك التجريبي">Plan a pilot</Translated> <svg className="i" style={{ "width": "18px", "height": "18px" }}><use href="#i-arrow"></use></svg></a>
      <Translated as="a" href="https://wa.me/971527188093?text=Hi%20AMElleventh%2C%20I%27d%20like%20to%20know%20more." className="icon-btn" aria-label="Message us on WhatsApp" ariaAr="راسلنا عبر واتساب"><svg className="i"><use href="#i-chat"></use></svg></Translated>
      <Translated as="button" className="icon-btn menu-btn" aria-label="Open menu" ariaAr="فتح القائمة" aria-expanded="false" aria-controls="mnav"><svg className="i" style={{ "width": "24px", "height": "24px" }}><use href="#i-menu"></use></svg></Translated>
    </div>
  </div>
  <nav className="mobile-nav" id="mnav" aria-label="Mobile">
    <Translated as="a" href="#bpo" ar="ما نقدمه">What we provide</Translated><Translated as="a" href="#how" ar="كيف نعمل">How it works</Translated><Translated as="a" href="#assurance" ar="الجودة">Quality</Translated><Translated as="a" href="#record" ar="سجلّ الإنجاز">Track record</Translated><Translated as="a" href="#more" ar="خدمات أخرى">Other services</Translated><Translated as="a" href="#faq" ar="الأسئلة">Questions</Translated>
    <Translated as="a" href="#enquire" className="btn btn-primary" ar="خطّط لمشروعك التجريبي">Plan a pilot</Translated>
  </nav>
</header>

<main id="top">
{/* HERO */}
<section className="hero">
  <div className="wrap hero-grid">
    <div>
      <div className="pill"><i></i><Translated as="span" ar="فرق عمل خارجية لشركات الإمارات والخليج">Outsourced teams for UAE &amp; GCC businesses</Translated></div>
      <Translated as="h1" ar={<>فريقك في مانيلا. <span className="g">وشريكك في دبي.</span></>}>Your team in Manila. <span className="g">Your partner in Dubai.</span></Translated>
      <Translated as="p" ar="فرق عمليات خدمة العملاء والخدمات المساندة لشركات الإمارات والخليج، تُنفَّذ في الفلبين وتُدار من دبي. تحصل على تكلفة أقل، وعقد واحد، وشريك محلي يتحمّل مسؤولية النتائج.">Customer operations and back-office teams for UAE and GCC businesses, delivered in the Philippines and governed from Dubai. You get lower costs, one contract and someone local who answers for the results.</Translated>
      <div className="cta-row">
        <a href="#enquire" className="btn btn-primary"><Translated as="span" ar="خطّط لمشروعك التجريبي">Plan a pilot</Translated> <svg className="i" style={{ "width": "18px", "height": "18px" }}><use href="#i-arrow"></use></svg></a>
        <Translated as="a" href="#bpo" className="btn btn-outline" ar="اطّلع على خدماتنا">See what we provide</Translated>
      </div>
      <Translated as="p" className="hero-note" ar={<>تبدأ المشاريع التجريبية عادةً من 30 مقعدًا. هل احتياجك أصغر؟ <a href="#enquire">احجز مكالمة لتحديد النطاق</a> وسنخبرك بصراحة إن كنا الخيار المناسب.</>}>Pilots typically start from 30 seats. Smaller requirement? <a href="#enquire">Book a scoping call</a> and we'll tell you honestly whether we're the right fit.</Translated>
    </div>
    <Translated as="aside" className="hero-card" aria-label="How the service is split between Dubai and Manila" ariaAr="توزيع الخدمة بين دبي ومانيلا">
      <div className="hc-row">
        <div className="hc-city"><svg className="i"><use href="#i-pin"></use></svg><div><Translated as="b" ar="دبي">Dubai</Translated><Translated as="span" ar="مدير حسابك">Your account lead</Translated></div></div>
        <div className="hc-time" id="t-dxb">--:--</div>
      </div>
      <ul className="hc-list"><Translated as="li" ar="العقد والأسعار ومستويات الخدمة">Contract, pricing and service levels</Translated><Translated as="li" ar="اختيار الشركاء ومراقبة الجودة">Partner selection and quality control</Translated><Translated as="li" ar="تقارير الأداء الشهرية">Monthly performance reporting</Translated></ul>
      <Translated as="div" className="hc-gap" ar="مانيلا تسبق دبي بـ 4 ساعات">Manila is 4 hours ahead</Translated>
      <div className="hc-row">
        <div className="hc-city"><svg className="i"><use href="#i-pin"></use></svg><div><Translated as="b" ar="مانيلا">Manila</Translated><Translated as="span" ar="فريق التنفيذ لديك">Your delivery team</Translated></div></div>
        <div className="hc-time" id="t-mnl">--:--</div>
      </div>
      <ul className="hc-list"><Translated as="li" ar="وظائف دعم العملاء والخدمات المساندة">Customer support and back-office roles</Translated><Translated as="li" ar="ورديات تتوافق مع ساعات عملك">Shifts set to your business hours</Translated></ul>
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

{/* BPO OFFER */}
<section id="bpo">
  <div className="wrap">
    <Translated as="div" className="kicker" ar="ما نقدمه">What we provide</Translated>
    <Translated as="h2" ar="فرق تدير عمليات خدمة العملاء والخدمات المساندة لديك">Teams that run your customer operations and back office</Translated>
    <Translated as="p" className="lead" ar="وظّف فريقًا كاملًا أو وظيفة واحدة. نحن نؤسس الفريق ونديره من دبي ونرفع لك تقريرًا عنه كل شهر. يُسعَّر كل دور على حدة، فتدفع فقط مقابل ما تحتاجه كل وظيفة.">Hire a full team or a single function. We set it up, manage it from Dubai and report on it every month. Each role is priced separately, so you only pay for what each position needs.</Translated>
    <div className="cards c2">
      <div className="card offer">
        <div className="tile"><svg className="i"><use href="#i-chat"></use></svg></div>
        <Translated as="h3" ar="عمليات خدمة العملاء">Customer operations</Translated>
        <Translated as="p" ar="دعم عملائك عبر الهاتف والدردشة والبريد الإلكتروني، مع إشراف ومراقبة للجودة ضمن الخدمة.">Voice, chat and email support for your customers, with supervision and quality monitoring built in.</Translated>
        <div className="chips"><Translated as="span" ar="موظفو خدمة العملاء">Customer service agents</Translated><Translated as="span" ar="قادة الفرق">Team leaders</Translated><Translated as="span" ar="مراقبة الجودة">Quality monitoring</Translated><Translated as="span" ar="إدارة الحسابات">Account management</Translated><Translated as="span" ar="إدارة العمليات">Operations management</Translated></div>
      </div>
      <div className="card offer">
        <div className="tile"><svg className="i"><use href="#i-people"></use></svg></div>
        <Translated as="h3" ar="الخدمات المساندة ودعم الكوادر">Back office and people support</Translated>
        <Translated as="p" ar="الأعمال الإدارية والمالية التي تُبقي نشاطك قائمًا، تُنجَز وفق إجراءاتك.">The admin and finance work that keeps your business running, done to your processes.</Translated>
        <div className="chips"><Translated as="span" ar="المالية والمحاسبة">Finance &amp; accounting</Translated><Translated as="span" ar="إدارة الموارد البشرية">HR administration</Translated><Translated as="span" ar="الرواتب والمزايا">Payroll &amp; benefits</Translated><Translated as="span" ar="التوظيف">Recruitment</Translated><Translated as="span" ar="التدريب">Training</Translated><Translated as="span" ar="المرافق والشؤون الإدارية">Facilities &amp; admin</Translated></div>
      </div>
    </div>
    <div className="note-bar"><svg className="i"><use href="#i-scale"></use></svg><Translated as="p" ar={<><b>لماذا تكلفتنا أقل؟</b> لأننا لا نشغّل مركز عمل خاصًا بنا. نضع المعيار وقائمة الأسعار، ثم ندير شركاء تنفيذ معتمدين وفقها، فلا تتحمل تكاليفنا التشغيلية. <button className="link" data-open="d-model">تعرّف على توزيع الأدوار</button></>}><b>Why it costs less:</b> we don't run a floor of our own. We set the standard and the rate card, then manage vetted delivery partners to it, so you don't pay for our overheads. <button className="link" data-open="d-model">See who does what</button></Translated></div>
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
        <details><summary><Translated as="span" ar="البيانات والسرّية">Data and confidentiality</Translated><span className="plus">+</span></summary><Translated as="div" className="body" ar="تُدرج شروط السرّية والتعامل مع البيانات في عقدك وفي اتفاقية الشريك معًا. ويقتصر الوصول إلى أنظمتك على الأدوار التي تحتاجه، وتُتفق الضوابط معك أثناء تحديد النطاق.">Confidentiality and data-handling terms are written into both your contract and the partner agreement. Access to your systems is limited to the roles that need it, and the controls are agreed with you during scoping.</Translated></details>
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
        <Translated as="p" ar="عملتُ ميدانيًا في قطاع BPO في الفلبين وأدرتُ عمليات مصرفية في الإمارات. وأسّستُ AMElleventh ليحصل أصحاب الأعمال في الخليج على الكفاءات الفلبينية مع شريك محلي يتحمّل مسؤولية النتائج.">I've worked the BPO floor in the Philippines and run bank operations in the UAE. I built AMElleventh so GCC businesses get Philippine talent with someone local who answers for the results.</Translated>
        <Translated as="cite" ar="— المؤسس، AMElleventh">— Founder, AMElleventh</Translated>
      </article>
    </div>
    <div className="timeline">
      <div className="tl"><Translated as="div" className="when" ar="الفلبين">Philippines</Translated><Translated as="h3" ar="عمليات BPO والتأمين">BPO and insurance operations</Translated><Translated as="p" ar="تقديم الخدمة ومراقبة الجودة وقيادة الفرق.">Service delivery, quality control and team leadership.</Translated></div>
      <div className="tl"><Translated as="div" className="when" ar="الإمارات · 13 عامًا">UAE · 13 years</Translated><Translated as="h3" ar="القطاع المصرفي: بنك الخليج الأول، وبنك الإمارات دبي الوطني، وبنك أبوظبي الأول">Banking: FGB, Emirates NBD and FAB</Translated><Translated as="p" ar="نظم المعلومات الإدارية والتحليلات وحوكمة البيانات وعمليات الأداء.">MIS, analytics, data governance and performance operations.</Translated></div>
      <div className="tl"><Translated as="div" className="when" ar="الإمارات">UAE</Translated><Translated as="h3" ar="مدفوعات رقمية مرخّصة">Licensed digital payments</Translated><Translated as="p" ar="شركة مدفوعات حاصلة على ترخيص مزدوج من المصرف المركزي، بُنيت من الصفر.">Central Bank dual-licensed payments business, built from scratch.</Translated></div>
      <div className="tl"><Translated as="div" className="when" ar="الإمارات · الهند · الفلبين">UAE · India · Philippines</Translated><Translated as="h3" ar="خدمات تقنية متعددة الدول">Multi-country technology services</Translated><Translated as="p" ar="تنفيذ وحوكمة عبر ثلاث دول.">Delivery and governance across three countries.</Translated></div>
      <div className="tl now"><div className="when">2026</div><Translated as="h3" ar="تأسيس AMElleventh في دبي">AMElleventh founded in Dubai</Translated><Translated as="p" ar="تنفيذ فلبيني بمسؤولية إماراتية.">Philippine delivery with UAE accountability.</Translated></div>
    </div>
  </div>
</section>

{/* OTHER PATHS */}
<section className="alt" id="more">
  <div className="wrap">
    <Translated as="div" className="kicker" ar="ضمن AMElleventh أيضًا">Also from AMElleventh</Translated>
    <Translated as="h2" ar="خدمات وشراكات أخرى">Other services and partnerships</Translated>
    <Translated as="p" className="lead" ar="فرق العمل الخارجية هي نشاطنا الرئيسي. وتدعم هذه الخدمات العملاء الذين يؤسسون أعمالهم أو يوسّعونها في المنطقة.">Outsourced teams are our main business. These services support clients setting up or growing in the region.</Translated>
    <div className="cards c4">
      <button className="card" data-open="d-consult"><div className="tile"><svg className="i"><use href="#i-chart"></use></svg></div><Translated as="h3" ar="الاستشارات التجارية">Business consultancy</Translated><Translated as="p" ar="دخول الأسواق والهيكلة التجارية والجاهزية التنظيمية.">Market entry, commercial structure and regulatory readiness.</Translated><span className="more"><Translated as="span" ar="التفاصيل والرسوم">Details and fees</Translated> <svg className="i" style={{ "width": "16px", "height": "16px" }}><use href="#i-arrow"></use></svg></span></button>
      <button className="card" data-open="d-it"><div className="tile"><svg className="i"><use href="#i-code"></use></svg></div><Translated as="h3" ar="الحلول التقنية">IT solutions</Translated><Translated as="p" ar="إعداد أنظمة ERP وCRM، والبرمجيات المخصصة، وخدمات تقنية المعلومات المُدارة، والأتمتة.">ERP and CRM setup, custom software, managed IT and automation.</Translated><span className="more"><Translated as="span" ar="التفاصيل">Details</Translated> <svg className="i" style={{ "width": "16px", "height": "16px" }}><use href="#i-arrow"></use></svg></span></button>
      <button className="card" data-open="d-rd"><div className="tile"><svg className="i"><use href="#i-doc"></use></svg></div><Translated as="h3" ar="الاستشارات الضريبية للبحث والتطوير">R&amp;D tax advisory</Translated><Translated as="p" ar="جهّز سجلاتك للاستفادة من حافز البحث والتطوير الضريبي في الإمارات.">Get your records ready for the UAE R&amp;D tax incentive.</Translated><span className="more"><Translated as="span" ar="التفاصيل">Details</Translated> <svg className="i" style={{ "width": "16px", "height": "16px" }}><use href="#i-arrow"></use></svg></span></button>
      <button className="card" data-open="d-partners"><div className="tile"><svg className="i"><use href="#i-handshake"></use></svg></div><Translated as="h3" ar="كن شريكًا لنا">Partner with us</Translated><Translated as="p" ar="لشركات BPO ووكالات الترخيص.">For BPO companies and licensing agencies.</Translated><span className="more"><Translated as="span" ar="خيارات الشراكة">Partner options</Translated> <svg className="i" style={{ "width": "16px", "height": "16px" }}><use href="#i-arrow"></use></svg></span></button>
    </div>
  </div>
</section>

{/* FAQ */}
<section id="faq">
  <div className="wrap split">
    <div><Translated as="div" className="kicker" ar="الأسئلة">Questions</Translated><Translated as="h2" ar="أسئلة شائعة">Common questions</Translated><Translated as="p" className="lead" ar="لم تجد إجابتك؟ راسلنا عبر واتساب.">Can't find your answer? Send us a WhatsApp message.</Translated></div>
    <div className="acc">
      <details><summary><Translated as="span" ar="هل 30 مقعدًا هو الحد الأدنى؟">Is 30 seats the minimum?</Translated><span className="plus">+</span></summary><Translated as="div" className="body" ar="هي نقطة البداية لمعظم المشاريع التجريبية، لأنها تكفي لإقامة إشراف ومراقبة جودة سليمين. وإن كنت تحتاج عددًا أقل، فاحجز مكالمة لتحديد النطاق. سنخبرك بصراحة إن كان بإمكاننا تنفيذه بجودة أم أن خيارًا آخر أنسب لك.">It's where most pilots start, because that's enough to set up proper supervision and quality control. If you need fewer people, book a scoping call. We'll tell you honestly whether we can do it well or whether another option suits you better.</Translated></details>
      <details><summary><Translated as="span" ar="كيف تُحدَّد الأسعار؟">How is pricing set?</Translated><span className="plus">+</span></summary><Translated as="div" className="body" ar="يُسعَّر كل دور على حدة. وتحصل على قائمة الأسعار الكاملة في مقترحك المكتوب بعد مكالمة تحديد النطاق.">Each role is priced on its own. You get the full rate card in your written proposal after the scoping call.</Translated></details>
      <details><summary><Translated as="span" ar="من ينفّذ العمل؟">Who does the work?</Translated><span className="plus">+</span></summary><Translated as="div" className="body" ar="شركاء تنفيذ معتمدون، معظمهم في الفلبين، يعملون بموجب اتفاقيات الخدمة الخاصة بنا. ويبقى عقدك ومدير حسابك ومسؤوليتنا لدى AMElleventh في الإمارات.">Vetted delivery partners, mostly in the Philippines, working under our service agreements. Your contract, your account lead and our accountability all stay with AMElleventh in the UAE.</Translated></details>
      <details><summary><Translated as="span" ar="هل يمكن للفريق تغطية ساعات العمل في الإمارات؟">Can the team cover UAE business hours?</Translated><span className="plus">+</span></summary><Translated as="div" className="body" ar="نعم. مانيلا تسبق دبي بأربع ساعات، وتُضبط الورديات وفق الساعات التي تحتاجها، بما فيها المساء وعطلات نهاية الأسبوع.">Yes. Manila is four hours ahead of Dubai, and shifts are set around the hours you need, including evenings and weekends.</Translated></details>
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
        <Translated as="p" ar="أخبرنا بما تحتاجه. سنردّ خلال يوم عمل واحد لترتيب مكالمة تحديد النطاق.">Tell us what you need. We'll reply within one working day to arrange a scoping call.</Translated>
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
        <Translated as="a" href="#top" className="logo" aria-label="AMElleventh home" ariaAr="AMElleventh، الصفحة الرئيسية"><svg viewBox="0 0 108 150" aria-hidden="true" style={{ "width": "22px", "height": "30px" }}><g fill="url(#lg)"><rect width="108" height="6" rx="1.5"></rect><rect x="10" y="18" width="32" height="7" rx="1.5"></rect><path d="M16 25 L36 25 L34 108 L18 108 Z"></path><rect x="6" y="113" width="40" height="8" rx="2"></rect><rect x="64" y="18" width="32" height="7" rx="1.5"></rect><path d="M70 25 L90 25 L88 108 L72 108 Z"></path><rect x="60" y="113" width="40" height="8" rx="2"></rect><rect y="126" width="108" height="5" rx="1.5" opacity=".4"></rect></g></svg><span className="logo-word" dir="ltr">AME<b>ll</b>eventh</span></Translated>
        <Translated as="p" ar="فرق عمليات خدمة العملاء والخدمات المساندة لشركات الإمارات والخليج، تُنفَّذ في الفلبين وتُدار من دبي.">Customer operations and back-office teams for UAE and GCC businesses, delivered in the Philippines and governed from Dubai.</Translated>
        <div className="foot-contact">
          <a href="https://wa.me/971527188093?text=Hi%20AMElleventh%2C%20I%27d%20like%20to%20know%20more."><svg className="i" style={{ "width": "17px", "height": "17px" }}><use href="#i-chat"></use></svg><span><Translated as="span" ar="واتساب">WhatsApp</Translated> <bdi dir="ltr">+971 52 718 8093</bdi></span></a>
          <a href="mailto:engage@amelleventh.com"><svg className="i" style={{ "width": "17px", "height": "17px" }}><use href="#i-mail"></use></svg><bdi dir="ltr">engage@amelleventh.com</bdi></a>
        </div>
      </div>
      <div className="foot-col"><Translated as="h4" ar="الخدمات">Services</Translated><ul>
        <li><Translated as="a" href="#bpo" ar="فرق العمل الخارجية (BPO)">Outsourced teams (BPO)</Translated></li>
        <li><Translated as="button" data-open="d-consult" ar="الاستشارات التجارية">Business consultancy</Translated></li>
        <li><Translated as="button" data-open="d-it" ar="الحلول التقنية">IT solutions</Translated></li>
        <li><Translated as="button" data-open="d-rd" ar="الاستشارات الضريبية للبحث والتطوير">R&amp;D tax advisory</Translated></li>
      </ul></div>
      <div className="foot-col"><Translated as="h4" ar="الشركة">Company</Translated><ul>
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
  <Translated as="a" href="#enquire" className="btn btn-primary" data-close="" ar="اسأل عن الاستشارات">Ask about consultancy</Translated>
</div></dialog>

<dialog id="d-it" aria-labelledby="h3d"><div className="dlg">
  <Translated as="button" className="dlg-x" aria-label="Close" ariaAr="إغلاق">×</Translated>
  <Translated as="h3" id="h3d" ar="الحلول التقنية">IT solutions</Translated>
  <Translated as="p" ar="مشاريع تقنية تُدار من الإمارات وتُنفَّذ بواسطة شركاء تقنيين معتمدين، بتكاليف تنفيذ محددة.">Technology projects managed from the UAE and delivered by vetted technology partners, with set implementation costs.</Translated>
  <Translated as="h4" ar="ما نقدّمه">What we deliver</Translated>
  <div className="chips"><Translated as="span" ar="تنفيذ البرمجيات وتحديثها">Software implementation &amp; upgrades</Translated><Translated as="span" ar="أنظمة ERP وCRM مخصصة">Custom ERP &amp; CRM</Translated><Translated as="span" ar="تطبيقات الجوال والويب">Mobile &amp; web apps</Translated><Translated as="span" ar="أتمتة العمليات">Process automation</Translated><Translated as="span" ar="التقارير ولوحات المعلومات">Reporting &amp; dashboards</Translated><Translated as="span" ar="دعم المستوى الأول إلى الثالث">1st to 3rd-line support</Translated><Translated as="span" ar="الحوسبة السحابية وخدمات تقنية المعلومات المُدارة">Cloud &amp; managed IT</Translated></div>
  <Translated as="a" href="#enquire" className="btn btn-primary" data-close="" ar="اسأل عن المشاريع التقنية">Ask about IT projects</Translated>
</div></dialog>

<dialog id="d-rd" aria-labelledby="h4d"><div className="dlg">
  <Translated as="button" className="dlg-x" aria-label="Close" ariaAr="إغلاق">×</Translated>
  <Translated as="h3" id="h4d" ar="الاستشارات الضريبية للبحث والتطوير">R&amp;D tax advisory</Translated>
  <Translated as="p" ar="يتضمن نظام ضريبة الشركات في الإمارات حافزًا للبحث والتطوير، والاستفادة منه تعتمد على توفّر السجلات الصحيحة. نساعد الشركات على التحقق من أهليتها وتجهيز تلك السجلات.">The UAE's Corporate Tax framework includes an incentive for research and development, and claiming it depends on having the right records. We help businesses check whether they qualify and get those records ready.</Translated>
  <Translated as="h4" ar="ما نغطيه">What we cover</Translated>
  <div className="chips"><Translated as="span" ar="فحص الأهلية">Eligibility check</Translated><Translated as="span" ar="تتبّع تكاليف البحث والتطوير">R&amp;D cost tracking</Translated><Translated as="span" ar="ملف التوثيق">Documentation pack</Translated><Translated as="span" ar="دعم إعداد المطالبة">Claim preparation support</Translated></div>
  <Translated as="p" className="fine" ar="نعمل جنبًا إلى جنب مع مستشاريك الضريبيين، ومع شركاء متخصصين في الضرائب عند الحاجة.">We work alongside your tax advisors, with specialist tax partners where needed.</Translated>
  <Translated as="a" href="#enquire" className="btn btn-primary" data-close="" ar="تحقّق من الأهلية">Check eligibility</Translated>
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
  <Translated as="p" ar="اكسب عملاء في الإمارات والخليج دون الحاجة إلى التأسيس في المنطقة. نحن نوفّر العملاء وندير العلاقة، وأنتم تنفّذون وفق قائمة أسعارنا ومستويات الخدمة.">Win UAE and GCC clients without setting up in the region. We bring the clients and manage the relationship, and you deliver to our rate card and service levels.</Translated>
  <Translated as="h4" ar="وكالات الترخيص">Licensing agencies</Translated>
  <Translated as="p" ar="أحِل إلينا الشركات حديثة الترخيص التي تحتاج إلى موظفين وهيكل تشغيلي. نقوم نحن بالعمل وتحصل أنت على عمولة، دون أي عمل تنفيذي على فريقك.">Refer newly licensed businesses that need staff and structure. We do the work and you earn a commission, with no delivery work for your team.</Translated>
  <Translated as="a" href="mailto:engage@amelleventh.com?subject=Partnership%20enquiry" className="btn btn-primary" ar="ناقش الشراكة">Discuss a partnership</Translated>
</div></dialog>





      <SiteInteractions />
    </>
  );
}
