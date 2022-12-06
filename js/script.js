const expandTap = document.querySelector('.expand-tap');
const expandTapWave = expandTap.querySelector('.expand-tap__wave');
const expandTapButton = expandTap.querySelector('.expand-tap__wave button[type=button]');
const expandTapTarget = document.querySelector('.expand-tap-target');

window.addEventListener('click', ({ target }) => {
  if (!expandTap.contains(target)) {
    expandTap.classList.remove('expand-tap--open');
  }
});

expandTapButton.addEventListener('click', ({ target }) => {
  if (expandTap.classList.contains('expand-tap--open')) {
    expandTap.classList.remove('expand-tap--open');
  }

  expandTapTarget.classList.toggle('expand-tap-target--show');
});
