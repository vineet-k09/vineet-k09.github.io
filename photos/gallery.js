const ShadowText1 = document.getElementById('ShadowText1');
const ShadowText2 = document.getElementById('ShadowText2');
const range = 16;
function updateShadow(e) {
    const x = Math.round(e.clientX * range / window.innerWidth) - range / 2;
    const y = Math.round(e.clientY * range / window.innerHeight) - range / 2;
  
    document.documentElement.style.setProperty('--x', x);
    document.documentElement.style.setProperty('--y', y);
  
    ShadowText1.style.textShadow = `calc(var(--x) * -1px) calc(var(--y) * -1px) 0px #ffeeaa, calc(var(--x) * -2px) calc(var(--y) * -2px) 0px #ffdd55, calc(var(--x) * -3px) calc(var(--y) * -3px) 0px #ffcc00`;
    ShadowText2.style.textShadow = `calc(var(--x) * -1px) calc(var(--y) * -1px) 0px #ffeeaa, calc(var(--x) * -2px) calc(var(--y) * -2px) 0px #ffdd55, calc(var(--x) * -3px) calc(var(--y) * -3px) 0px #ffcc00`;
  }

document.body.addEventListener('mousemove', updateShadow);