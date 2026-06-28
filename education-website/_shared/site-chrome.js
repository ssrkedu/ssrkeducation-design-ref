(function () {
  var mount = document.getElementById('site-chrome-mount');
  if (!mount) return;

  var tickerItems = [
    'Admissions Open 2025–26 — Apply Now for all UG &amp; PG programmes',
    'SSRK Degree College Ranked Among Top Colleges in Odisha — NAAC \'B++\'',
    'Scholarship Scheme Available for Meritorious Students — Last Date: 31 Aug 2025',
    'Annual Cultural Fest "UTKARSH 2025" — Register Before 15 Aug',
    'New B.Tech Programmes Launched — CSE (AI &amp; ML), Data Science',
    'Results Declared: +2 Science Batch 2024-25 — 94% Pass Rate'
  ];

  var tickerHtml = tickerItems.concat(tickerItems).map(function (item) {
    return '<span class="ticker-item">' + item + '</span>';
  }).join('');

  mount.outerHTML =
    '<div class="ticker-bar" role="marquee" aria-live="off">' +
      '<div class="ticker-label">Latest</div>' +
      '<div class="ticker-wrap">' +
        '<div class="ticker-inner" id="tickerInner">' + tickerHtml + '</div>' +
      '</div>' +
    '</div>' +
    '<div class="top-bar">' +
      '<div class="container">' +
        '<div class="top-bar-inner">' +
          '<div class="top-contact">' +
            '<a href="tel:+916742550000">' +
              '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>' +
              '+91 674 255 0000' +
            '</a>' +
            '<a href="mailto:info@ssrkedu.in">' +
              '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>' +
              'info@ssrkedu.in' +
            '</a>' +
            '<a href="#">' +
              '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>' +
              'Bhubaneswar, Odisha' +
            '</a>' +
          '</div>' +
          '<div class="top-right">' +
            '<div class="top-social">' +
              '<a href="#" aria-label="Facebook">f</a>' +
              '<a href="#" aria-label="YouTube">▶</a>' +
              '<a href="#" aria-label="Instagram">in</a>' +
              '<a href="#" aria-label="Twitter">X</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
})();
