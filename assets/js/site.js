/* The ABADA AI Briefing: light/dark toggle and "Copy link" buttons */
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  var label = document.getElementById('theme-label');

  function isDark() {
    var t = root.getAttribute('data-theme');
    if (t) return t === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function sync() {
    if (!btn || !label) return;
    var d = isDark();
    label.textContent = d ? 'Light mode' : 'Dark mode';
    btn.setAttribute('aria-pressed', d ? 'true' : 'false');
  }
  if (btn) {
    btn.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('abada-theme', next); } catch (e) {}
      sync();
    });
  }
  sync();

  var copyButtons = document.querySelectorAll('.copy-link');
  Array.prototype.forEach.call(copyButtons, function (b) {
    b.addEventListener('click', function () {
      var url = b.getAttribute('data-url') || window.location.href;
      var original = b.textContent;
      function done(msg) {
        b.textContent = msg;
        setTimeout(function () { b.textContent = original; }, 2000);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(function () { done('Link copied'); }, function () { done('Copy failed'); });
      } else {
        var field = document.createElement('textarea');
        field.value = url;
        field.setAttribute('readonly', '');
        field.style.position = 'absolute';
        field.style.left = '-9999px';
        document.body.appendChild(field);
        field.select();
        try { document.execCommand('copy'); done('Link copied'); } catch (e) { done('Copy failed'); }
        document.body.removeChild(field);
      }
    });
  });
})();
