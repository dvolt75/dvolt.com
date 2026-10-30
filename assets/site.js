(function () {
  var poem = document.querySelector('.poem');
  if (!poem) return;
  var buttons = Array.prototype.slice.call(document.querySelectorAll('.switch button'));
  var wide = window.matchMedia('(min-width: 52rem)');
  function stored() { try { return localStorage.getItem('dvolt-view'); } catch (e) { return null; } }
  function save(v) { try { localStorage.setItem('dvolt-view', v); } catch (e) {} }
  function set(v) {
    if (v === 'af' && !wide.matches) v = 'it';
    poem.setAttribute('data-view', v);
    buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.view === v)); });
  }
  buttons.forEach(function (b) {
    b.addEventListener('click', function () { save(b.dataset.view); set(b.dataset.view); });
  });
  var initial = stored() || (wide.matches ? 'af' : 'it');
  set(initial);
  var onChange = function () { set(stored() || (wide.matches ? 'af' : 'it')); };
  if (wide.addEventListener) wide.addEventListener('change', onChange); else if (wide.addListener) wide.addListener(onChange);
})();
