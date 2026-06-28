(function () {
  var NAV = [
    { id: 'home', href: 'index.html', label: 'Home', i18n: 'navHome' },
    { id: 'courses', href: 'Courses.html', label: 'Courses', i18n: 'navCourses' },
    { id: 'scholarships', href: 'Scholarships.html', label: 'Scholarships', i18n: 'navSchol' },
    { id: 'faculty', href: 'Faculty.html', label: 'Faculty', i18n: 'navFaculty' },
    { id: 'gallery', href: 'Gallery.html', label: 'Gallery', i18n: 'navGallery' },
    { id: 'contact', href: 'Contact.html', label: 'Contact', i18n: 'navContact' }
  ];

  var mount = document.getElementById('inst-header-mount');
  if (!mount) return;

  var active = mount.dataset.active || '';
  var enquireHref = mount.dataset.enquireHref || 'Contact.html';
  var enquireButton = mount.dataset.enquireButton === 'true';
  var showLang = mount.dataset.showLang === 'true';
  var showTrust = mount.dataset.showTrust === 'true';
  var i18n = mount.dataset.i18n === 'true';

  function t(key, fallback) {
    return i18n ? ' data-t="' + key + '"' : '';
  }

  function navLinks(className) {
    return NAV.map(function (item) {
      var isActive = item.id === active ? ' active' : '';
      var attrs = t(item.i18n, item.label);
      return '<a href="' + item.href + '" class="' + className + isActive + '"' + attrs + '>' + item.label + '</a>';
    }).join('');
  }

  function mobileNavItems() {
    return NAV.map(function (item) {
      return '<div class="mobile-nav-item"><a href="' + item.href + '">' + item.label + '</a></div>';
    }).join('');
  }

  function enquireCta(className, extraAttrs) {
    extraAttrs = extraAttrs || '';
    if (enquireButton) {
      var click = className === 'mobile-apply' ? 'openModal();toggleMenu()' : 'openModal()';
      return '<button type="button" class="' + className + '" onclick="' + click + '"' + extraAttrs + '>Enquire Now</button>';
    }
    var mobileClose = className === 'mobile-apply' ? ' onclick="toggleMenu()"' : '';
    return '<a href="' + enquireHref + '" class="' + className + '"' + mobileClose + extraAttrs + '>Enquire Now</a>';
  }

  var trustHtml = showTrust
    ? '<div class="logo-trust"><a href="../trust/index.html" style="color:inherit;opacity:.7"' + t('trustLink', 'Part of SSRK Edu') + '>Part of SSRK Edu</a></div>'
    : '';

  var langHtml = showLang
    ? '<div class="lang-toggle" role="group" aria-label="Language selector">' +
      '<button class="lang-opt active" id="langEn" onclick="switchLang(\'en\')" aria-pressed="true">EN</button>' +
      '<button class="lang-opt" id="langOr" onclick="switchLang(\'or\')" aria-pressed="false" style="font-family:var(--fo)">ଓଡ଼ିଆ</button>' +
      '</div>'
    : '';

  var mobileLangHtml = showLang
    ? '<div class="mobile-lang">' +
      '<button class="active" onclick="switchLang(\'en\');closeMobileMenuLang(this)" id="mLangEn">English</button>' +
      '<button onclick="switchLang(\'or\');closeMobileMenuLang(this)" id="mLangOr" style="font-family:var(--fo)">ଓଡ଼ିଆ</button>' +
      '</div>'
    : '';

  mount.outerHTML =
    '<header class="site-header" role="banner">' +
      '<div class="container">' +
        '<div class="header-inner">' +
          '<div class="logo" aria-label="SSRK Degree College">' +
            '<div class="logo-top">' +
              '<a href="index.html" class="logo-mark" aria-label="SSRK Degree College home">DC</a>' +
              '<div class="logo-text">' +
                '<div class="logo-name-row">' +
                  '<span class="logo-name">' +
                    '<span class="logo-name-full"' + t('logoName', 'SSRK Degree College') + '>SSRK Degree College</span>' +
                    '<span class="logo-name-short">DC-SSRK</span>' +
                  '</span>' +
                  '<span class="logo-sub"' + t('logoSub', 'Cuttack, Odisha') + '>Cuttack, Odisha</span>' +
                '</div>' +
                trustHtml +
              '</div>' +
            '</div>' +
          '</div>' +
          '<nav class="main-nav" role="navigation" aria-label="Main navigation">' + navLinks('nav-link') + '</nav>' +
          '<div class="header-actions">' +
            langHtml +
            enquireCta('header-enquire', t('headerEnquire', 'Enquire Now')) +
            '<div class="hamburger" id="hamburger" onclick="toggleMenu()" aria-label="Menu" aria-expanded="false" role="button">' +
              '<span></span><span></span><span></span>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</header>' +
    '<div class="mobile-menu" id="mobileMenu" aria-hidden="true">' +
      '<button class="mobile-close" onclick="toggleMenu()" aria-label="Close menu">✕</button>' +
      '<div class="mobile-nav">' +
        mobileLangHtml +
        mobileNavItems() +
        enquireCta('mobile-apply', t('headerEnquire', 'Enquire Now')) +
      '</div>' +
    '</div>';

  window.toggleMenu = function () {
    var hb = document.getElementById('hamburger');
    var mm = document.getElementById('mobileMenu');
    if (!hb || !mm) return;
    var open = hb.classList.toggle('open');
    mm.classList.toggle('open', open);
    mm.setAttribute('aria-hidden', !open);
    hb.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  window.closeMobileMenuLang = window.closeMobileMenuLang || function () {};
})();
