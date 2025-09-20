    (function() {
        const translations = {
            ar: {
                brand_name: 'نفس البخور',
                nav_home: 'الرئيسية',
                nav_products: 'المنتجات',
                nav_about: 'من نحن',
                nav_contact: 'تواصل معنا',
                hero_title: 'نفس البخور',
                hero_description: 'عنوانك للتميز بعطور إماراتية فخمة صناعة عربية',
                about_title: 'من نحن',
                about_text: 'نفس البخور متجر متخصص في تقديم أفخم وأرقى العطور الإماراتية بتصميمات عربية مميزة. نسعى لتوفير تجربة تسوق فريدة لعشاق العطر، مع ضمان جودة عالية وخدمة ممتازة.',
                contact_title: 'تواصل معنا',
                location_label: 'الموقع: حيفا',
                hours_label: 'ساعات العمل: 10:00 – 21:00',
                phone_label: 'الهاتف: 000-000-0000',
                email_label: 'البريد الإلكتروني: info@nafsalbokhor.com',
                footer_text: 'جميع الحقوق محفوظة © 2025'
            },
            he: {
                brand_name: 'נפס אל-בוחור',
                nav_home: 'בית',
                nav_products: 'מוצרים',
                nav_about: 'עלינו',
                nav_contact: 'צור קשר',
                hero_title: 'נפס אל-בוחור',
                hero_description: 'כתובתך למצוינות עם בשמים אמירתיים יוקרתיים בעיצוב ערבי',
                about_title: 'עלינו',
                about_text: 'נפס אל-בוחור הוא חנות המתמחה בהצעת בשמים אמירתיים יוקרתיים בעיצוב ערבי ייחודי. אנו שואפים להעניק חוויית קנייה ייחודית לחובבי הבשמים, תוך הבטחת איכות גבוהה ושירות מצוין.',
                contact_title: 'צור קשר',
                location_label: 'מיקום: חיפה',
                hours_label: 'שעות: 10:00 – 21:00',
                phone_label: 'טלפון: 000-000-0000',
                email_label: 'אימייל: info@nafsalbokhor.com',
                footer_text: 'כל הזכויות שמורות © 2025'
            },
            en: {
                brand_name: 'Nafs AlBukhoor',
                nav_home: 'Home',
                nav_products: 'Products',
                nav_about: 'About Us',
                nav_contact: 'Contact Us',
                hero_title: 'Nafs AlBukhoor',
                hero_description: 'Your address for excellence with luxurious Emirati perfumes, crafted in the Arab world',
                about_title: 'About Us',
                about_text: 'Nafs AlBukhoor is a boutique specializing in offering luxurious Emirati perfumes with unique Arabic designs. We strive to provide a distinctive shopping experience for perfume lovers, ensuring high quality and excellent service.',
                contact_title: 'Contact Us',
                location_label: 'Location: Haifa',
                hours_label: 'Hours: 10:00 – 21:00',
                phone_label: 'Phone: 000-000-0000',
                email_label: 'Email: info@nafsalbokhor.com',
                footer_text: 'All rights reserved © 2025'
            }
        };
        function setLanguage(lang) {
            const tr = translations[lang];
            if (!tr) return;
            // Update textual content
            document.getElementById('brand-name').textContent = tr.brand_name;
            document.getElementById('nav-home').textContent = tr.nav_home;
            document.getElementById('nav-products').textContent = tr.nav_products;
            document.getElementById('nav-about').textContent = tr.nav_about;
            document.getElementById('nav-contact').textContent = tr.nav_contact;
            document.getElementById('hero-title').textContent = tr.hero_title;
            document.getElementById('hero-description').textContent = tr.hero_description;
            document.getElementById('about-title').textContent = tr.about_title;
            document.getElementById('about-text').textContent = tr.about_text;
            document.getElementById('contact-title').textContent = tr.contact_title;
            document.getElementById('location-label').textContent = tr.location_label;
            document.getElementById('hours-label').textContent = tr.hours_label;
            document.getElementById('phone-label').textContent = tr.phone_label;
            document.getElementById('email-label').textContent = tr.email_label;
            document.getElementById('footer-text').textContent = tr.footer_text;
            
            // Update mobile menu content
            const mobileNavHome = document.getElementById('nav-home-mobile');
            const mobileNavProducts = document.getElementById('nav-products-mobile');
            const mobileNavAbout = document.getElementById('nav-about-mobile');
            const mobileNavContact = document.getElementById('nav-contact-mobile');
            
            if (mobileNavHome) mobileNavHome.textContent = tr.nav_home;
            if (mobileNavProducts) mobileNavProducts.textContent = tr.nav_products;
            if (mobileNavAbout) mobileNavAbout.textContent = tr.nav_about;
            if (mobileNavContact) mobileNavContact.textContent = tr.nav_contact;
            
            // Set language and direction attributes
            let dir = (lang === 'en') ? 'ltr' : 'rtl';
            document.documentElement.lang = lang;
            document.documentElement.dir = dir;
            
            // Update active class on language switcher links (both desktop and mobile)
            document.querySelectorAll('.lang-switcher a').forEach(function(a) {
                a.classList.remove('active');
            });
            const activeLink = document.getElementById('lang-' + lang);
            const activeLinkMobile = document.getElementById('lang-' + lang + '-mobile');
            if (activeLink) activeLink.classList.add('active');
            if (activeLinkMobile) activeLinkMobile.classList.add('active');
        }
        // Mobile menu functionality
        function initMobileMenu() {
            const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
            const mobileMenu = document.getElementById('mobile-menu');
            
            if (mobileMenuToggle && mobileMenu) {
                mobileMenuToggle.addEventListener('click', function() {
                    mobileMenu.classList.toggle('active');
                    // Change hamburger icon to X when menu is open
                    if (mobileMenu.classList.contains('active')) {
                        mobileMenuToggle.innerHTML = '✕';
                    } else {
                        mobileMenuToggle.innerHTML = '☰';
                    }
                });
                
                // Close mobile menu when clicking on a link
                const mobileNavLinks = mobileMenu.querySelectorAll('nav a');
                mobileNavLinks.forEach(function(link) {
                    link.addEventListener('click', function() {
                        mobileMenu.classList.remove('active');
                        mobileMenuToggle.innerHTML = '☰';
                    });
                });
                
                // Close mobile menu when clicking outside
                document.addEventListener('click', function(event) {
                    if (!mobileMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                        mobileMenu.classList.remove('active');
                        mobileMenuToggle.innerHTML = '☰';
                    }
                });
            }
        }
        
        // Bind click events to language links (both desktop and mobile)
        ['ar','he','en'].forEach(function(lang) {
            const link = document.getElementById('lang-' + lang);
            const mobileLink = document.getElementById('lang-' + lang + '-mobile');
            
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
        });
        
        // Initialize mobile menu and default language
        initMobileMenu();
        setLanguage('ar');
    })();
    </script>
