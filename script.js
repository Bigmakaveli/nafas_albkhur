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
                footer_text: 'All rights reserved © 2025'
            },
            es: {
                brand_name: 'Nafs AlBukhoor',
                // Navigation
                nav_home: 'Inicio',
                nav_products: 'Productos',
                nav_about: 'Sobre nosotros',
                nav_story: 'Nuestra historia',
                nav_features: 'Características',
                nav_testimonials: 'Testimonios',
                nav_contact: 'Contacto',
                // Hero
                hero_title: 'Eleva tu esencia',
                hero_description: 'Perfumes emiratíes de lujo, creados con alma árabe',
                hero_cta: 'Ver la colección',
                // About
                about_title: 'Sobre nosotros',
                about_text: 'Nafs AlBukhoor selecciona perfumes emiratíes refinados con un alma árabe. Apostamos por la calidad, el servicio y una experiencia de compra hermosa.',
                // Story
                story_title: 'Nuestra historia',
                story_text: 'Nacida de la pasión por la alta perfumería, nuestra historia une artesanía y cultura para llevar aromas auténticos a los amantes del perfume.',
                // Features
                features_title: 'Características únicas',
                feature_1_title: 'Calidad artesanal',
                feature_1_text: 'Mezclas meticulosas con ingredientes de calidad.',
                feature_2_title: 'Herencia árabe',
                feature_2_text: 'Diseños inspirados en el arte árabe atemporal.',
                feature_3_title: 'Elegancia moderna',
                feature_3_text: 'Un toque contemporáneo para el lujo diario.',
                // Testimonials
                testimonials_title: 'Lo que dicen nuestros clientes',
                testimonial_1: '“Aromas inolvidables: ricos, elegantes y duraderos.”',
                testimonial_2: '“Frascos bellos y una experiencia de unboxing increíble.”',
                testimonial_3: '“El servicio al cliente fue excelente de principio a fin.”',
                // Products (placeholders)
                product_1_name: 'Al Noble Safeer',
                product_1_desc: 'Un acorde noble con oud de lujo.',
                product_1_price: '$89',
                product_1_cta: 'Ver detalles',
                product_2_name: 'Musk Mood',
                product_2_desc: 'Musk oriental suave con un toque mágico.',
                product_2_price: '$79',
                product_2_cta: 'Ver detalles',
                product_3_name: 'Musk & Oud Mood Set',
                product_3_desc: 'Set dúo que combina la riqueza del musk y el oud.',
                product_3_price: '$149',
                product_3_cta: 'Ver detalles',
                product_4_name: 'Oud Mood',
                product_4_desc: 'Oud elegante en un frasco dorado.',
                product_4_price: '$95',
                product_4_cta: 'Ver detalles',
                product_5_name: 'Rouat Al Musk',
                product_5_desc: 'Musk clásico con un acabado refinado.',
                product_5_price: '$82',
                product_5_cta: 'Ver detalles',
                product_6_name: 'Mashair Aqua',
                product_6_desc: 'Frescura acuática con profundidad amaderada.',
                product_6_price: '$88',
                product_6_cta: 'Ver detalles',
                product_7_name: 'Ajwaa',
                product_7_desc: 'Firma oriental inspirada en las palmeras.',
                product_7_price: '$99',
                product_7_cta: 'Ver detalles',
                product_8_name: 'Thanaghum',
                product_8_desc: 'Un delicado ramo floral de rosas.',
                product_8_price: '$84',
                product_8_cta: 'Ver detalles',
                // Contact & Footer
                contact_title: 'Contáctanos',
                location_label: 'Ubicación: Haifa',
                hours_label: 'Horario: 10:00 – 21:00',
                phone_label: 'Teléfono: 000-000-0000',
                email_label: 'Correo: info@nafsalbokhor.com',
                footer_text: 'Todos los derechos reservados © 2025'
            }
        };
        function setLanguage(lang) {
            const tr = translations[lang];
            if (!tr) return;

            // Helper
            function setText(id, val) {
                const el = document.getElementById(id);
                if (el && typeof val === 'string') el.textContent = val;
            }

            // Brand
            setText('brand-name', tr.brand_name);

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

            // Always LTR for English & Spanish
            document.documentElement.lang = lang;
            document.documentElement.dir = 'ltr';

            // Update active class on language switchers
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
        
        // Bind click events to language links (both desktop and mobile)
        ['en','es'].forEach(function(lang) {
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
        setLanguage('en');
    })();
