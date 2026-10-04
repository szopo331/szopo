document.querySelector('.menu-btn')?.addEventListener('click', () => {
  const nav = document.querySelector('nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.position = 'absolute';
  nav.style.right = '4%';
  nav.style.top = '62px';
  nav.style.flexDirection = 'column';
  nav.style.background = '#111319';
  nav.style.padding = '18px 25px';
  nav.style.border = '1px solid #24262d';
});
