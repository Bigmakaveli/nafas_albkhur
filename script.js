    (function() {
        const translations = {
            en: {
                brand_name: 'Nafs AlBukhoor',
                // Navigation
                nav_home: 'Home',
                nav_products: 'Products',
                nav_about: 'About Us',
                nav_story: 'Our Story',
                nav_features: 'Features',
                nav_testimonials: 'Testimonials',
                nav_contact: 'Contact',
                // Hero
                hero_title: 'Elevate Your Scent',
                hero_description: 'Luxurious Emirati fragrances, crafted with an Arabic soul',
                hero_cta: 'Shop the Collection',
                // About
                about_title: 'About Us',
                about_text: 'Nafs AlBukhoor curates refined Emirati perfumes blended with an Arabic soul. We are dedicated to quality, service, and a beautiful shopping experience.',
                // Story
                story_title: 'Our Story',
                story_text: 'Born from a passion for fine fragrance, our story is one of craftsmanship and culture—bringing authentic aromas to modern fragrance lovers.',
                // Features
                features_title: 'Unique Features',
                feature_1_title: 'Crafted Quality',
                feature_1_text: 'Meticulous blends using quality ingredients.',
                feature_2_title: 'Arabic Heritage',
                feature_2_text: 'Designs inspired by timeless Arabic artistry.',
                feature_3_title: 'Modern Elegance',
                feature_3_text: 'A contemporary touch for everyday luxury.',
                // Testimonials
                testimonials_title: 'What Our Customers Say',
                testimonial_1: '“The scents are unforgettable—rich, elegant, and long-lasting.”',
                testimonial_2: '“Beautiful bottles and an amazing unboxing experience.”',
                testimonial_3: '“Customer service was outstanding from start to finish.”',
                // Products (placeholders)
                product_1_name: 'Al Noble Safeer',
                product_1_desc: 'A noble accord with luxurious oud.',
                product_1_price: '$89',
                product_1_cta: 'View details',
                product_2_name: 'Musk Mood',
                product_2_desc: 'Soft oriental musk with a magical touch.',
                product_2_price: '$79',
                product_2_cta: 'View details',
                product_3_name: 'Musk & Oud Mood Set',
                product_3_desc: 'A duo set of musk and oud richness.',
                product_3_price: '$149',
                product_3_cta: 'View details',
                product_4_name: 'Oud Mood',
                product_4_desc: 'Elegant oud in a golden bottle.',
                product_4_price: '$95',
                product_4_cta: 'View details',
                product_5_name: 'Rouat Al Musk',
                product_5_desc: 'Classic musk with a refined finish.',
                product_5_price: '$82',
                product_5_cta: 'View details',
                product_6_name: 'Mashair Aqua',
                product_6_desc: 'Aquatic freshness with woody depth.',
                product_6_price: '$88',
                product_6_cta: 'View details',
                product_7_name: 'Ajwaa',
                product_7_desc: 'An oriental signature inspired by palms.',
                product_7_price: '$99',
                product_7_cta: 'View details',
                product_8_name: 'Thanaghum',
                product_8_desc: 'A delicate floral bouquet of roses.',
                product_8_price: '$84',
                product_8_cta: 'View details',
                // Contact & Footer
                contact_title: 'Contact Us',
                location_label: 'Location: Haifa',
                hours_label: 'Hours: 10:00 – 21:00',
                phone_label: 'Phone: 000-000-0000',
                email_label: 'Email: info@nafsalbokhor.com',
                footer_text: 'All rights reserved © 2025',
                whatsapp_label: 'Get via WhatsApp'
            },
            he: {
                brand_name: 'נפס אל־בכור',
                // Navigation
                nav_home: 'בית',
                nav_products: 'מוצרים',
                nav_about: 'אודות',
                nav_story: 'הסיפור שלנו',
                nav_features: 'מאפיינים',
                nav_testimonials: 'המלצות',
                nav_contact: 'צור קשר',
                // Hero
                hero_title: 'רוממו את הניחוח שלכם',
                hero_description: 'בשמים אמירתיים יוקרתיים, נרקחו ברוח ערבית',
                hero_cta: 'גלו את הקולקציה',
                // About
                about_title: 'אודות',
                about_text: 'Nafs AlBukhoor מציעה בשמים אמירתיים מעודנים עם נשמה ערבית. אנו מחויבים לאיכות, לשירות ולחוויית קנייה יפה.',
                // Story
                story_title: 'הסיפור שלנו',
                story_text: 'מתוך תשוקה לעולם הניחוחות, סיפורנו הוא על מלאכת מחשבת ותרבות—מביאים ארומות אותנטיות לחובבי בישום מודרניים.',
                // Features
                features_title: 'מאפיינים ייחודיים',
                feature_1_title: 'איכות מעשה־יד',
                feature_1_text: 'בלנדים מוקפדים עם רכיבים איכותיים.',
                feature_2_title: 'מורשת ערבית',
                feature_2_text: 'עיצובים בהשראת אמנות ערבית על־זמנית.',
                feature_3_title: 'אלגנטיות מודרנית',
                feature_3_text: 'נגיעה עכשווית ללוקס יומיומי.',
                // Testimonials
                testimonials_title: 'מה הלקוחות שלנו אומרים',
                testimonial_1: '“הניחוחות נשארים בזיכרון—עשירים, אלגנטיים ובעלי עמידות גבוהה.”',
                testimonial_2: '“בקבוקים יפים וחוויית פתיחה מרגשת.”',
                testimonial_3: '“שירות הלקוחות היה מצוין מהתחלה ועד הסוף.”',
                // Products (placeholders)
                product_1_name: 'Al Noble Safeer',
                product_1_desc: 'אקורד אצילי עם עץ אוד יוקרתי.',
                product_1_price: '$89',
                product_1_cta: 'צפו בפרטים',
                product_2_name: 'Musk Mood',
                product_2_desc: 'מושק אוריינטלי רך עם נגיעה קסומה.',
                product_2_price: '$79',
                product_2_cta: 'צפו בפרטים',
                product_3_name: 'Musk & Oud Mood Set',
                product_3_desc: 'סט זוגי המשלב עושר של מושק ואוד.',
                product_3_price: '$149',
                product_3_cta: 'צפו בפרטים',
                product_4_name: 'Oud Mood',
                product_4_desc: 'אוד אלגנטי בבקבוק מוזהב.',
                product_4_price: '$95',
                product_4_cta: 'צפו בפרטים',
                product_5_name: 'Rouat Al Musk',
                product_5_desc: 'מושק קלאסי עם פיניש מעודן.',
                product_5_price: '$82',
                product_5_cta: 'צפו בפרטים',
                product_6_name: 'Mashair Aqua',
                product_6_desc: 'רעננות ימית עם עומק עצי.',
                product_6_price: '$88',
                product_6_cta: 'צפו בפרטים',
                product_7_name: 'Ajwaa',
                product_7_desc: 'חתימה אוריינטלית בהשראת דקלים.',
                product_7_price: '$99',
                product_7_cta: 'צפו בפרטים',
                product_8_name: 'Thanaghum',
                product_8_desc: 'זר עדין של פרחי ורדים.',
                product_8_price: '$84',
                product_8_cta: 'צפו בפרטים',
                // Contact & Footer
                contact_title: 'צור קשר',
                location_label: 'מיקום: חיפה',
                hours_label: 'שעות: 10:00 – 21:00',
                phone_label: 'טלפון: 000-000-0000',
                email_label: 'אימייל: info@nafsalbokhor.com',
                footer_text: 'כל הזכויות שמורות © 2025',
                whatsapp_label: 'קבל בוואטסאפ'
            },
            ar: {
                brand_name: 'نفس البخور',
                // Navigation
                nav_home: 'الرئيسية',
                nav_products: 'المنتجات',
                nav_about: 'من نحن',
                nav_story: 'قصتنا',
                nav_features: 'المزايا',
                nav_testimonials: 'آراء العملاء',
                nav_contact: 'تواصل',
                // Hero
                hero_title: 'ارتقِ بعطرك',
                hero_description: 'عطور إماراتية فاخرة بروح عربية',
                hero_cta: 'اكتشفوا المجموعة',
                // About
                about_title: 'من نحن',
                about_text: 'Nafs AlBukhoor تقدّم عطورًا إماراتية راقية ممزوجة بروح عربية. نلتزم بالجودة والخدمة وتجربة تسوّق جميلة.',
                // Story
                story_title: 'قصتنا',
                story_text: 'وُلدت من شغف بالعطور الراقية؛ قصتنا حكاية حرفة وثقافة—ننقل روائح أصيلة لعشّاق العطر المعاصرين.',
                // Features
                features_title: 'مزايا فريدة',
                feature_1_title: 'جودة مصنوعة بإتقان',
                feature_1_text: 'تركيبات دقيقة بمكوّنات عالية الجودة.',
                feature_2_title: 'إرث عربي',
                feature_2_text: 'تصاميم بوحي الفن العربي الخالد.',
                feature_3_title: 'أناقة عصرية',
                feature_3_text: 'لمسة معاصرة لفخامة يومية.',
                // Testimonials
                testimonials_title: 'ماذا يقول عملاؤنا',
                testimonial_1: '“عطور لا تُنسى—غنية وأنيقة وطويلة الثبات.”',
                testimonial_2: '“زجاجات جميلة وتجربة فتح علبة مبهرة.”',
                testimonial_3: '“خدمة عملاء مميّزة من البداية إلى النهاية.”',
                // Products (placeholders)
                product_1_name: 'Al Noble Safeer',
                product_1_desc: 'نغمة نبيلة مع عود فاخر.',
                product_1_price: '$89',
                product_1_cta: 'عرض التفاصيل',
                product_2_name: 'Musk Mood',
                product_2_desc: 'مسك شرقي ناعم بلمسة سحرية.',
                product_2_price: '$79',
                product_2_cta: 'عرض التفاصيل',
                product_3_name: 'Musk & Oud Mood Set',
                product_3_desc: 'طقم ثنائي يجمع غنى المسك والعود.',
                product_3_price: '$149',
                product_3_cta: 'عرض التفاصيل',
                product_4_name: 'Oud Mood',
                product_4_desc: 'عود أنيق في زجاجة ذهبية.',
                product_4_price: '$95',
                product_4_cta: 'عرض التفاصيل',
                product_5_name: 'Rouat Al Musk',
                product_5_desc: 'مسك كلاسيكي بلمسة نهائية مصقولة.',
                product_5_price: '$82',
                product_5_cta: 'عرض التفاصيل',
                product_6_name: 'Mashair Aqua',
                product_6_desc: 'انتعاش مائي مع عمق خشبي.',
                product_6_price: '$88',
                product_6_cta: 'عرض التفاصيل',
                product_7_name: 'Ajwaa',
                product_7_desc: 'بصمة شرقية مستوحاة من النخيل.',
                product_7_price: '$99',
                product_7_cta: 'عرض التفاصيل',
                product_8_name: 'Thanaghum',
                product_8_desc: 'باقة زهرية رقيقة من الورود.',
                product_8_price: '$84',
                product_8_cta: 'عرض التفاصيل',
                // Contact & Footer
                contact_title: 'تواصل معنا',
                location_label: 'الموقع: حيفا',
                hours_label: 'ساعات العمل: 10:00 – 21:00',
                phone_label: 'الهاتف: 000-000-0000',
                email_label: 'البريد الإلكتروني: info@nafsalbokhor.com',
                footer_text: 'جميع الحقوق محفوظة © 2025',
                whatsapp_label: 'احصل عبر الواتساب'
            }
        };
        // Locale helpers: convert Latin digits to Arabic-Indic when Arabic is active
        function convertDigitsToArabicInNode(node) {
            const map = {'0':'٠','1':'١','2':'٢','3':'٣','4':'٤','5':'٥','6':'٦','7':'٧','8':'٨','9':'٩'};
            function convertText(s) {
                return s.replace(/[0-9]/g, d => map[d]);
            }
            const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, {
                acceptNode: function(n) {
                    if (!n.nodeValue || !/[0-9]/.test(n.nodeValue)) return NodeFilter.FILTER_SKIP;
                    const p = n.parentNode && n.parentNode.nodeName;
                    if (p === 'SCRIPT' || p === 'STYLE' || p === 'NOSCRIPT') return NodeFilter.FILTER_SKIP;
                    return NodeFilter.FILTER_ACCEPT;
                }
            });
            const toChange = [];
            while (walker.nextNode()) {
                toChange.push(walker.currentNode);
            }
            toChange.forEach(t => { t.nodeValue = convertText(t.nodeValue); });
        }

        const WHATSAPP_PHONE = 'PHONE_NUMBER';

        function updateWhatsAppLinks() {
            try {
                document.querySelectorAll('.product-card .whatsapp-btn').forEach(function(btn) {
                    const nameId = btn.getAttribute('data-product-name-id');
                    const nameEl = nameId ? document.getElementById(nameId) : null;
                    const productName = nameEl ? (nameEl.textContent || '').trim() : '';
                    const lang = document.documentElement.lang || 'ar';
                    const tr = (translations && translations[lang]) ? translations[lang] : (translations && translations['ar']) ? translations['ar'] : {};
                    const label = (tr && tr.whatsapp_label) ? tr.whatsapp_label : 'احصل عبر الواتساب';
                    const msg = 'مرحباً، أود الحصول على هذا المنتج: ' + productName;
                    const href = 'https://wa.me/' + WHATSAPP_PHONE + '?text=' + encodeURIComponent(msg);
                    btn.setAttribute('href', href);
                    // Update button visible label
                    var span = btn.querySelector('span');
                    if (span) { span.textContent = label; }
                    // Improve accessibility label per language
                    btn.setAttribute('aria-label', (productName ? (label + ' - ' + productName) : label));
                    btn.setAttribute('target', '_blank');
                    btn.setAttribute('rel', 'noopener');
                });
            } catch (e) {}
        }

        function setLanguage(lang) {
            const tr = translations[lang];
            if (!tr) return;

            // Helper
            function setText(id, val) {
                const el = document.getElementById(id);
                if (el && typeof val === 'string') el.textContent = val;
            }

            // Brand (dynamic): update header brand lines and hero brand per language
            (function updateBrandTexts() {
                const brandRoot = document.getElementById('brand-name');
                if (brandRoot) {
                    const enEl = brandRoot.querySelector('.brand-line[data-lang="en"]');
                    const arEl = brandRoot.querySelector('.brand-line[data-lang="ar"]');
                    const heEl = brandRoot.querySelector('.brand-line[data-lang="he"]');
                    if (enEl && translations.en && translations.en.brand_name) enEl.textContent = translations.en.brand_name;
                    if (arEl && translations.ar && translations.ar.brand_name) arEl.textContent = translations.ar.brand_name;
                    if (heEl && translations.he && translations.he.brand_name) heEl.textContent = translations.he.brand_name;
                }
                const heroBrand = document.getElementById('hero-brand-name');
                if (heroBrand && tr.brand_name) {
                    heroBrand.textContent = tr.brand_name;
                }
            })();

            // Navigation (desktop)
            setText('nav-home', tr.nav_home);
            setText('nav-products', tr.nav_products);
            setText('nav-about', tr.nav_about);
            setText('nav-story', tr.nav_story);
            setText('nav-features', tr.nav_features);
            setText('nav-testimonials', tr.nav_testimonials);
            setText('nav-contact', tr.nav_contact);

            // Navigation (mobile)
            setText('nav-home-mobile', tr.nav_home);
            setText('nav-products-mobile', tr.nav_products);
            setText('nav-about-mobile', tr.nav_about);
            setText('nav-story-mobile', tr.nav_story);
            setText('nav-features-mobile', tr.nav_features);
            setText('nav-testimonials-mobile', tr.nav_testimonials);
            setText('nav-contact-mobile', tr.nav_contact);

            // Hero
            setText('hero-title', tr.hero_title);
            setText('hero-description', tr.hero_description);
            setText('hero-cta', tr.hero_cta);
            const cta = document.getElementById('hero-cta');
            if (cta) cta.setAttribute('aria-label', tr.hero_cta);

            // Sections
            setText('about-title', tr.about_title);
            setText('about-text', tr.about_text);

            setText('story-title', tr.story_title);
            setText('story-text', tr.story_text);

            setText('features-title', tr.features_title);
            setText('feature-1-title', tr.feature_1_title);
            setText('feature-1-text', tr.feature_1_text);
            setText('feature-2-title', tr.feature_2_title);
            setText('feature-2-text', tr.feature_2_text);
            setText('feature-3-title', tr.feature_3_title);
            setText('feature-3-text', tr.feature_3_text);

            setText('testimonials-title', tr.testimonials_title);
            setText('testimonial-1', tr.testimonial_1);
            setText('testimonial-2', tr.testimonial_2);
            setText('testimonial-3', tr.testimonial_3);

            // Products
            for (let i = 1; i <= 8; i++) {
                setText(`product-${i}-name`, tr[`product_${i}_name`]);
                setText(`product-${i}-desc`, tr[`product_${i}_desc`]);
                setText(`product-${i}-price`, tr[`product_${i}_price`]);
                setText(`product-${i}-cta`, tr[`product_${i}_cta`]);
            }

            // Contact & footer
            setText('contact-title', tr.contact_title);
            setText('location-label', tr.location_label);
            setText('hours-label', tr.hours_label);
            setText('phone-label', tr.phone_label);
            setText('email-label', tr.email_label);
            setText('footer-text', tr.footer_text);

            // Set language and direction (RTL for Hebrew/Arabic)
            document.documentElement.lang = lang;
            document.documentElement.dir = (lang === 'ar' || lang === 'he') ? 'rtl' : 'ltr';

            // Persist selection
            try {
                localStorage.setItem('site_lang', lang);
            } catch (e) {}

            // Update active class and aria-pressed on language switchers
            document.querySelectorAll('.lang-switcher a').forEach(function(a) {
                a.classList.remove('active');
                a.setAttribute('aria-pressed', 'false');
            });
            const activeLink = document.getElementById('lang-' + lang);
            const activeLinkMobile = document.getElementById('lang-' + lang + '-mobile');
            const activeLinkBar = document.getElementById('lang-' + lang + '-bar');
            if (activeLink) {
                activeLink.classList.add('active');
                activeLink.setAttribute('aria-pressed', 'true');
            }
            if (activeLinkMobile) {
                activeLinkMobile.classList.add('active');
                activeLinkMobile.setAttribute('aria-pressed', 'true');
            }
            if (activeLinkBar) {
                activeLinkBar.classList.add('active');
                activeLinkBar.setAttribute('aria-pressed', 'true');
            }

            // Toggle brand name visibility per selected language
            document.querySelectorAll('#brand-name .brand-line').forEach(function(span) {
                var spanLang = span.getAttribute('data-lang');
                span.setAttribute('aria-hidden', (spanLang === lang) ? 'false' : 'true');
            });

            // Update WhatsApp links with current (possibly translated) product names
            updateWhatsAppLinks();

            // Locale-specific numeral shaping for Arabic
            if (lang === 'ar') {
                convertDigitsToArabicInNode(document.body);
            }
        }
        // Mobile menu functionality
        function initMobileMenu() {
            const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
            const mobileMenu = document.getElementById('mobile-menu');
            const header = document.querySelector('header');

            if (!mobileMenuToggle || !mobileMenu) return;

            // Ensure ARIA attributes for accessibility
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            mobileMenuToggle.setAttribute('aria-controls', 'mobile-menu');
            mobileMenu.setAttribute('aria-hidden', 'true');

            const OPEN_ICON = '✕';
            const CLOSED_ICON = '☰';

            function setPanelTop() {
                const headerHeight = header ? header.offsetHeight : 0;
                // Position panel directly below the header so the toggle remains visible
                mobileMenu.style.top = headerHeight + 'px';
            }

            function openMenu() {
                setPanelTop();
                mobileMenu.classList.add('active');
                mobileMenuToggle.innerHTML = OPEN_ICON;
                mobileMenuToggle.setAttribute('aria-expanded', 'true');
                mobileMenu.setAttribute('aria-hidden', 'false');
            }

            function closeMenu() {
                mobileMenu.classList.remove('active');
                mobileMenuToggle.innerHTML = CLOSED_ICON;
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                mobileMenu.setAttribute('aria-hidden', 'true');
            }

            function toggleMenu() {
                if (mobileMenu.classList.contains('active')) {
                    closeMenu();
                } else {
                    openMenu();
                }
            }

            // Click toggles
            mobileMenuToggle.addEventListener('click', toggleMenu);

            // Keyboard support: Enter/Space toggle, Escape closes
            mobileMenuToggle.addEventListener('keydown', function (e) {
                const key = e.key || e.code;
                if (key === 'Enter' || key === ' ' || key === 'Spacebar') {
                    e.preventDefault();
                    toggleMenu();
                }
            });

            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape' || e.key === 'Esc') {
                    closeMenu();
                }
            });

            // Adjust panel position on resize while open
            window.addEventListener('resize', function () {
                if (mobileMenu.classList.contains('active')) {
                    setPanelTop();
                }
            });

            // Close when clicking a link
            const mobileNavLinks = mobileMenu.querySelectorAll('nav a');
            mobileNavLinks.forEach(function (link) {
                link.addEventListener('click', function () {
                    closeMenu();
                });
            });

            // Close when clicking outside (anywhere not in the panel or the toggle)
            document.addEventListener('click', function (event) {
                if (!mobileMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                    closeMenu();
                }
            });

            // Also close when clicking on the overlay background itself
            mobileMenu.addEventListener('click', function (event) {
                if (event.target === mobileMenu) {
                    closeMenu();
                }
            });
        }
        
        // Product filters (simple client-side)
        function initProductFilters() {
            const filterBar = document.querySelector('.product-filters');
            if (!filterBar) return;
            const buttons = filterBar.querySelectorAll('.filter-btn');
            const cards = document.querySelectorAll('#products-section .product-card');
            function applyFilter(val) {
                cards.forEach(card => {
                    const list = (card.getAttribute('data-category') || '').split(',').map(s => s.trim());
                    const show = (val === 'all') || list.includes(val);
                    card.style.display = show ? '' : 'none';
                });
            }
            buttons.forEach(btn => {
                btn.addEventListener('click', function () {
                    buttons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed','false'); });
                    this.classList.add('active');
                    this.setAttribute('aria-pressed','true');
                    applyFilter(this.dataset.filter || 'all');
                });
                btn.addEventListener('keydown', function(e) {
                    const key = e.key || e.code;
                    if (key === 'Enter' || key === ' ' || key === 'Spacebar') {
                        e.preventDefault();
                        btn.click();
                    }
                });
            });
        }

        // Bind click events to language links (both desktop and mobile)
        ['he','ar','en'].forEach(function(lang) {
            const link = document.getElementById('lang-' + lang);
            const mobileLink = document.getElementById('lang-' + lang + '-mobile');
            const barLink = document.getElementById('lang-' + lang + '-bar');
            
            if (link) {
                link.addEventListener('click', function() {
                    setLanguage(lang);
                });
            }
            
            if (mobileLink) {
                mobileLink.addEventListener('click', function() {
                    setLanguage(lang);
                    // Close mobile menu after language selection
                    const mobileMenu = document.getElementById('mobile-menu');
                    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
                    if (mobileMenu && mobileMenuToggle) {
                        mobileMenu.classList.remove('active');
                        mobileMenuToggle.innerHTML = '☰';
                    }
                });
            }

            if (barLink) {
                barLink.addEventListener('click', function() {
                    setLanguage(lang);
                });
            }
        });
        
        // Initialize mobile menu, product filters, and default language (with persistence)
        initMobileMenu();
        initProductFilters();
        let savedLang = 'ar';
        try {
            const stored = localStorage.getItem('site_lang');
            if (stored) savedLang = stored;
        } catch (e) {}
        setLanguage(savedLang);
    })();
