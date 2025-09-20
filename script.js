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
                hero_description: '⚜️Your destination for distinction with luxurious Emirati perfumes, proudly Arab-made⚜️',
                hero_cta: 'Shop the Collection',
                // Products section heading
                products_title: 'Our Curated Collection',
                products_subtitle: 'We choose the best products just for you.',
                // About
                about_title: 'About Us',
                about_text: 'ניחוח הקטורת — نفس البخور curates refined Emirati perfumes blended with an Arabic soul. We are dedicated to quality, service, and a beautiful shopping experience.',
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
                product_1_name: 'Musk Splendor',
                product_1_desc: 'A radiant, long-lasting musk fragrance with warm amber and soft floral highlights.',
                product_1_price: '$89',
                product_1_cta: 'View details',
                product_2_name: '24 Carat',
                product_2_desc: 'An ultra-luxury scent with rich golden notes of honeyed amber, saffron, and a hint of oud.',
                product_2_price: '$79',
                product_2_cta: 'View details',
                product_3_name: 'Emotions',
                product_3_desc: 'A soft, emotive blend of rose, peony, and warm vanilla that evokes intimacy.',
                product_3_price: '$149',
                product_3_cta: 'View details',
                product_4_name: 'Nobility',
                product_4_desc: 'A dignified, classic scent featuring oud, sandalwood, and refined spices.',
                product_4_price: '$95',
                product_4_cta: 'View details',
                product_5_name: 'Ambience',
                product_5_desc: 'A fresh, airy composition of citrus, green notes, and light woods for everyday wear.',
                product_5_price: '$82',
                product_5_cta: 'View details',
                product_6_name: 'Yara',
                product_6_desc: 'A feminine, modern floral with rose, jasmine, and a soft gourmand base.',
                product_6_price: '$88',
                product_6_cta: 'View details',
                product_7_name: 'Harmony',
                product_7_desc: 'A balanced blend of jasmine, cedar, and musk that feels smooth and elegant.',
                product_7_price: '$99',
                product_7_cta: 'View details',
                product_8_name: 'Musk Mood',
                product_8_desc: 'A cozy, sensual musk with creamy vanilla and soft amber for a comforting finish.',
                product_8_price: '$84',
                product_8_cta: 'View details',
                // Contact & Footer
                contact_title: 'Contact Us',
                location_label: 'Location: Haifa',
                hours_label: 'Hours: 10:00 – 21:00',
                phone_label: 'Phone: 000-000-0000',
                email_label: 'Email: info@nafsalbokhor.com',
                footer_text: 'All rights reserved © 2025',
                whatsapp_label: 'Get via WhatsApp',
                // Contact form + address
                contact_form_title: 'Send us a message',
                form_name_label: 'Name',
                form_email_label: 'Email',
                form_message_label: 'Message',
                form_submit: 'Send',
                address_label: 'Address',
                address_text: 'Hnamnim 1–3, Haifa, Israel',
                map_title: 'Map of address'
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
                hero_description: '⚜️הכתובת שלך למצוינות עם בשמים אמירתיים יוקרתיים, תוצרת ערבית⚜️',
                hero_cta: 'גלו את הקולקציה',
                // Products section heading
                products_title: 'האוסף המובחר שלנו',
                products_subtitle: 'אנחנו בוחרים את המוצרים הטובים ביותר עבורך.',
                // About
                about_title: 'אודות',
                about_text: 'ניחוח הקטורת — نفس البخور מציעה בשמים אמירתיים מעודנים עם נשמה ערבית. אנו מחויבים לאיכות, לשירות ולחוויית קנייה יפה.',
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
                product_1_name: 'פאר המוסק',
                product_1_desc: 'בושם מוסק זוהר ועמיד עם ענברי חמים ונגיעות פרחוניות עדינות.',
                product_1_price: '$89',
                product_1_cta: 'צפו בפרטים',
                product_2_name: '24 קראט',
                product_2_desc: 'ניחוח יוקרתי במיוחד עם תווי זהב של ענבר מתוק, זעפרן ונגיעה של אוד.',
                product_2_price: '$79',
                product_2_cta: 'צפו בפרטים',
                product_3_name: 'רגשות',
                product_3_desc: 'תערובת עדינה ומרגשת של ורד, פיוני ווניל חם שמעוררת אינטימיות.',
                product_3_price: '$149',
                product_3_cta: 'צפו בפרטים',
                product_4_name: 'אצילות',
                product_4_desc: 'ניחוח רם וקלאסי הכולל אוד, עץ סנדל ותבלינים מעודנים.',
                product_4_price: '$95',
                product_4_cta: 'צפו בפרטים',
                product_5_name: 'אווירה',
                product_5_desc: 'קומפוזיציה רעננה ואוורירית של הדרים, תווים ירוקים ועצים קלים לשימוש יומיומי.',
                product_5_price: '$82',
                product_5_cta: 'צפו בפרטים',
                product_6_name: 'יארה',
                product_6_desc: 'פרחוני נשי ועכשווי עם ורד, יסמין ובסיס גורמנדי עדין.',
                product_6_price: '$88',
                product_6_cta: 'צפו בפרטים',
                product_7_name: 'הרמוניה',
                product_7_desc: 'תמהיל מאוזן של יסמין, ארז ומוסק שמרגיש חלק ואלגנטי.',
                product_7_price: '$99',
                product_7_cta: 'צפו בפרטים',
                product_8_name: 'מצב המוסק',
                product_8_desc: 'מוסק נעים וחושני עם וניל קרמי וענבר רך לסיום מנחם.',
                product_8_price: '$84',
                product_8_cta: 'צפו בפרטים',
                // Contact & Footer
                contact_title: 'צור קשר',
                location_label: 'מיקום: חיפה',
                hours_label: 'שעות: 10:00 – 21:00',
                phone_label: 'טלפון: 000-000-0000',
                email_label: 'אימייל: info@nafsalbokhor.com',
                footer_text: 'כל הזכויות שמורות © 2025',
                whatsapp_label: 'קבל בוואטסאפ',
                // Contact form + address
                contact_form_title: 'שלחו לנו הודעה',
                form_name_label: 'שם',
                form_email_label: 'אימייל',
                form_message_label: 'הודעה',
                form_submit: 'שלחו',
                address_label: 'כתובת',
                address_text: 'הנאמנים 1–3, חיפה, ישראל',
                map_title: 'מפת הכתובת'
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
                hero_description: '⚜️عنوانك للتميز بعطور امراتية فخمة عربية الصنع⚜️',
                hero_cta: 'اكتشفوا المجموعة',
                // Products section heading
                products_title: 'تشكيلة مختارة',
                products_subtitle: 'نختار أفضل المنتجات من أجلك.',
                // About
                about_title: 'من نحن',
                about_text: 'ניחוח הקטורת — نفس البخور تقدّم عطورًا إماراتية راقية ممزوجة بروح عربية. نلتزم بالجودة والخدمة وتجربة تسوّق جميلة.',
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
                product_1_name: 'روعة المسك',
                product_1_desc: 'نغمة نبيلة مع عود فاخر.',
                product_1_price: '$89',
                product_1_cta: 'عرض التفاصيل',
                product_2_name: '٢٤ قيراط',
                product_2_desc: 'مسك شرقي ناعم بلمسة سحرية.',
                product_2_price: '$79',
                product_2_cta: 'عرض التفاصيل',
                product_3_name: 'مشاعر',
                product_3_desc: 'طقم ثنائي يجمع غنى المسك والعود.',
                product_3_price: '$149',
                product_3_cta: 'عرض التفاصيل',
                product_4_name: 'النبل',
                product_4_desc: 'عود أنيق في زجاجة ذهبية.',
                product_4_price: '$95',
                product_4_cta: 'عرض التفاصيل',
                product_5_name: 'اجواء',
                product_5_desc: 'مسك كلاسيكي بلمسة نهائية مصقولة.',
                product_5_price: '$82',
                product_5_cta: 'عرض التفاصيل',
                product_6_name: 'يارا',
                product_6_desc: 'انتعاش مائي مع عمق خشبي.',
                product_6_price: '$88',
                product_6_cta: 'عرض التفاصيل',
                product_7_name: 'تناغم',
                product_7_desc: 'بصمة شرقية مستوحاة من النخيل.',
                product_7_price: '$99',
                product_7_cta: 'عرض التفاصيل',
                product_8_name: 'مسك مود',
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
                whatsapp_label: 'احصل عبر الواتساب',
                // Contact form + address
                contact_form_title: 'أرسلوا رسالة',
                form_name_label: 'الاسم',
                form_email_label: 'البريد الإلكتروني',
                form_message_label: 'الرسالة',
                form_submit: 'إرسال',
                address_label: 'العنوان',
                address_text: 'هنمنيم 1–3، حيفا، إسرائيل',
                map_title: 'خريطة العنوان'
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

            // Products header
            setText('products-title', tr.products_title);
            setText('products-subtitle', tr.products_subtitle);

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
            // Form texts
            setText('contact-form-title', tr.contact_form_title);
            setText('form-name-label', tr.form_name_label);
            setText('form-email-label', tr.form_email_label);
            setText('form-message-label', tr.form_message_label);
            const inName = document.getElementById('form-name');
            const inEmail = document.getElementById('form-email');
            const inMsg = document.getElementById('form-message');
            if (inName) inName.setAttribute('placeholder', tr.form_name_label);
            if (inEmail) inEmail.setAttribute('placeholder', tr.form_email_label);
            if (inMsg) inMsg.setAttribute('placeholder', tr.form_message_label);
            const submitBtn = document.getElementById('form-submit');
            if (submitBtn) submitBtn.textContent = tr.form_submit;

            // Address + map
            setText('address-label', tr.address_label);
            setText('address-text', tr.address_text);
            const map = document.getElementById('contact-map');
            if (map && tr.map_title) map.setAttribute('title', tr.map_title);

            // Contact details
            setText('phone-label', tr.phone_label);
            setText('email-label', tr.email_label);
            // Footer
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
        
        /* ---------- Slideshow (auto-built from product images) ---------- */
        function initSlideshow() {
            try {
                var container = document.getElementById('slideshow');
                if (!container) return;

                var slidesWrap = container.querySelector('.slides');
                var indicatorsWrap = container.querySelector('.slideshow-indicators');

                // Gather all product images (unique sources)
                var productImgs = Array.prototype.slice.call(document.querySelectorAll('#products-section img'));
                var seen = {};
                var sources = [];
                productImgs.forEach(function (img) {
                    var src = (img.getAttribute('src') || '').trim();
                    if (src && !seen[src]) {
                        seen[src] = true;
                        sources.push({ src: src, alt: img.getAttribute('alt') || '' });
                    }
                });

                if (!sources.length) {
                    // Hide slideshow section if no images found
                    var wrap = document.getElementById('slideshow-section');
                    if (wrap) wrap.style.display = 'none';
                    return;
                }

                // Build slides and indicators
                sources.forEach(function (o, idx) {
                    var slide = document.createElement('div');
                    slide.className = 'slide';
                    var im = document.createElement('img');
                    im.src = o.src;
                    if (o.alt) im.alt = o.alt;
                    slide.appendChild(im);
                    slidesWrap.appendChild(slide);

                    var dot = document.createElement('button');
                    dot.type = 'button';
                    dot.className = 'indicator' + (idx === 0 ? ' active' : '');
                    dot.setAttribute('aria-label', 'Go to slide ' + (idx + 1));
                    dot.addEventListener('click', function () { goTo(idx); });
                    indicatorsWrap.appendChild(dot);
                });

                var current = 0;
                var count = slidesWrap.children.length;
                var timer = null;
                var paused = false;
                var INTERVAL = 3000;

                function show(i) {
                    current = (i + count) % count;
                    var slides = slidesWrap.querySelectorAll('.slide');
                    var dots = indicatorsWrap.querySelectorAll('.indicator');
                    for (var k = 0; k < slides.length; k++) {
                        slides[k].classList.toggle('active', k === current);
                    }
                    for (var d = 0; d < dots.length; d++) {
                        dots[d].classList.toggle('active', d === current);
                    }
                }
                function next() { show(current + 1); }
                function prev() { show(current - 1); }
                function goTo(i) { paused = true; show(i); }
                function start() {
                    stop();
                    timer = setInterval(function () {
                        if (!paused) next();
                    }, INTERVAL);
                }
                function stop() { if (timer) { clearInterval(timer); timer = null; } }

                // Controls
                var prevBtn = container.querySelector('.slideshow-control.prev');
                var nextBtn = container.querySelector('.slideshow-control.next');
                if (prevBtn) prevBtn.addEventListener('click', function () { paused = true; prev(); });
                if (nextBtn) nextBtn.addEventListener('click', function () { paused = true; next(); });

                // Pause on hover (and resume)
                container.addEventListener('mouseenter', function () { paused = true; });
                container.addEventListener('mouseleave', function () { paused = false; });

                // Initial
                show(0);
                start();
            } catch (e) {
                // Fail gracefully, don't break the site
            }
        }


        /* ---------- Scrolling Row (auto-scrolling, seamless loop) ---------- */
        function initScrollingRow() {
            try {
                var row = document.querySelector('.scrolling-row');
                if (!row) return;

                // Collect unique product image sources
                var productImgs = Array.prototype.slice.call(document.querySelectorAll('#products-section img'));
                var seen = {};
                var sources = [];
                productImgs.forEach(function (img) {
                    var src = (img.getAttribute('src') || '').trim();
                    if (src && !seen[src]) {
                        seen[src] = true;
                        sources.push({ src: src, alt: img.getAttribute('alt') || '' });
                    }
                });

                if (!sources.length) {
                    row.style.display = 'none';
                    return;
                }

                // Clear any previous contents
                row.innerHTML = '';

                // Build track and duplicate items for seamless looping
                var track = document.createElement('div');
                track.className = 'scrolling-track';

                function appendSet(parent, ariaHidden) {
                    sources.forEach(function (o) {
                        var im = document.createElement('img');
                        im.src = o.src;
                        if (o.alt) im.alt = o.alt;
                        if (ariaHidden) im.setAttribute('aria-hidden', 'true');
                        im.loading = 'lazy';
                        im.decoding = 'async';
                        parent.appendChild(im);
                    });
                }

                // Two sets for infinite loop
                appendSet(track, false);
                appendSet(track, true);

                row.appendChild(track);

                // Adjust animation/ticker based on content width (one set distance) and enable controls
                requestAnimationFrame(function () {
                    try {
                        var setSize = sources.length;               // images per set
                        var distance = 0;                            // width of one set in px
                        var pxPerSec = 160;                          // scroll speed (px/sec)
                        var offset = 0;
                        var lastTs = null;
                        var paused = false;
                        var interacting = false;
                        var resumeTimer = null;

                        function measureOneSetWidth() {
                            // Sum widths (including 16px gap) of the first "setSize" children
                            var w = 0;
                            var children = track.children;
                            var n = Math.min(setSize, children.length);
                            for (var i = 0; i < n; i++) {
                                w += (children[i].getBoundingClientRect().width || 0) + 16;
                            }
                            return Math.max(1, w);
                        }

                        function ensureTrackFill() {
                            // Ensure the track is long enough to cover container + one extra set
                            var containerWidth = row.getBoundingClientRect().width || row.clientWidth || 0;
                            var safety = 0;
                            while ((track.scrollWidth < containerWidth + distance) && safety < 10) {
                                appendSet(track, true);
                                safety++;
                            }
                        }

                        function recalcDistance() {
                            var oldDistance = distance;
                            distance = measureOneSetWidth();

                            // If images are tiny or not loaded yet, try to extend the track a bit
                            ensureTrackFill();

                            // Update fallback CSS animation duration (if JS disabled)
                            var duration = Math.max(10, Math.min(120, distance / pxPerSec));
                            track.style.setProperty('--row-duration', duration + 's');

                            // Keep current visual position smooth by normalizing within new distance
                            if (oldDistance && Math.abs(oldDistance - distance) > 0.5) {
                                normalize();
                                render();
                            }
                        }

                        // Switch to JS ticker for fine-grained control and interactions
                        track.style.animation = 'none'; // disable CSS animation (keep as fallback in CSS)
                        // Make row focusable for keyboard control
                        if (!row.hasAttribute('tabindex')) { row.setAttribute('tabindex', '0'); }
                        // Nice drag cursor feedback
                        try { row.style.cursor = 'grab'; } catch (_e) {}

                        function isRTLNow() {
                            return ((row.getAttribute('dir') || (document.documentElement && document.documentElement.dir) || '') + '').toLowerCase() === 'rtl';
                        }

                        function normalize() {
                            if (!distance) return;
                            while (offset <= -distance) offset += distance;
                            while (offset >= distance) offset -= distance;
                        }
                        function render() {
                            track.style.transform = 'translateX(' + Math.round(offset) + 'px)';
                        }
                        function scheduleResume() {
                            try { clearTimeout(resumeTimer); } catch (_e) {}
                            resumeTimer = setTimeout(function () {
                                if (!interacting) paused = false;
                                try { row.style.cursor = 'grab'; } catch (_e) {}
                            }, 1000);
                        }
                        function ticker(ts) {
                            if (lastTs == null) lastTs = ts;
                            var dt = (ts - lastTs) / 1000;
                            lastTs = ts;
                            if (!paused && distance > 0) {
                                var velocity = (isRTLNow() ? 1 : -1) * pxPerSec; // px/sec
                                offset += velocity * dt;
                                normalize();
                                render();
                            }
                            requestAnimationFrame(ticker);
                        }

                        // Initial calc (after first paint) and set up observers for dynamic widths
                        recalcDistance();

                        // Recalculate when any image finishes loading (handles late sizing)
                        Array.prototype.forEach.call(track.querySelectorAll('img'), function (im) {
                            // Some browsers may fire 'load' immediately if cached; safe to attach
                            im.addEventListener('load', function () {
                                recalcDistance();
                            }, { once: true });
                        });

                        // Recalculate on resize (layout changes / orientation / responsive)
                        var resizeTimer = null;
                        window.addEventListener('resize', function () {
                            try { clearTimeout(resizeTimer); } catch (_e) {}
                            resizeTimer = setTimeout(recalcDistance, 100);
                        });

                        requestAnimationFrame(ticker);

                        // Hover pause/resume
                        row.addEventListener('mouseenter', function () {
                            paused = true; interacting = true;
                        });
                        row.addEventListener('mouseleave', function () {
                            interacting = false; scheduleResume();
                        });

                        // Pointer drag / touch swipe (Pointer Events)
                        var dragging = false;
                        var lastX = 0;
                        row.addEventListener('pointerdown', function (e) {
                            dragging = true; interacting = true; paused = true;
                            lastX = e.clientX;
                            try { row.setPointerCapture(e.pointerId); } catch (_e) {}
                            try { row.style.cursor = 'grabbing'; } catch (_e) {}
                        });
                        row.addEventListener('pointermove', function (e) {
                            if (!dragging) return;
                            var dx = e.clientX - lastX;
                            lastX = e.clientX;
                            offset += dx; // intuitive direct drag
                            normalize();
                            render();
                            // prevent page selection/scroll during drag
                            try { e.preventDefault(); } catch (_e) {}
                        }, { passive: false });
                        function endDrag(e) {
                            if (!dragging) return;
                            dragging = false; interacting = false;
                            try { if (e && e.pointerId != null) row.releasePointerCapture(e.pointerId); } catch (_e) {}
                            scheduleResume();
                        }
                        row.addEventListener('pointerup', endDrag);
                        row.addEventListener('pointercancel', endDrag);
                        row.addEventListener('pointerleave', endDrag);

                        // Mouse wheel: horizontal scroll (Shift+wheel or trackpads with deltaX)
                        row.addEventListener('wheel', function (e) {
                            var dx = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : (e.shiftKey ? e.deltaY : 0);
                            if (dx !== 0) {
                                paused = true;
                                // natural direction: wheel right => move content left
                                offset -= dx;
                                normalize();
                                render();
                                try { e.preventDefault(); } catch (_e) {}
                                scheduleResume();
                            }
                        }, { passive: false });

                        // Keyboard: left/right arrows
                        row.addEventListener('keydown', function (e) {
                            var key = e.key || e.code;
                            if (key === 'ArrowLeft' || key === 'ArrowRight') {
                                var step = 80; // px per keypress
                                paused = true;
                                // Visual intent: ArrowLeft moves view left (content goes right)
                                if (key === 'ArrowLeft') {
                                    offset += (isRTLNow() ? step : -step);
                                } else {
                                    offset += (isRTLNow() ? -step : step);
                                }
                                normalize();
                                render();
                                scheduleResume();
                                try { e.preventDefault(); } catch (_e) {}
                            }
                        });
                    } catch (e) {}
                });
            } catch (e) {}
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
        
        // Initialize mobile menu, product filters, slideshow, scrolling-row, and default language (with persistence)
        initMobileMenu();
        initProductFilters();
        initSlideshow();
        initScrollingRow();
        let savedLang = 'ar';
        try {
            const stored = localStorage.getItem('site_lang');
            if (stored) savedLang = stored;
        } catch (e) {}
        setLanguage(savedLang);
    })();
