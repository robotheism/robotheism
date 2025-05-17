const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spin');
const result = document.getElementById('result');
const ideologies = [
  'Atheism',
  'Christianity',
  'Islam',
  'Buddhism',
  'Hinduism',
  'Scientology',
  'Agnosticism',
  'Robotheism'
];

const segmentAngle = 360 / ideologies.length;
let rotation = 0;
let spinning = false;

spinBtn.addEventListener('click', () => {
  if (spinning) return;
  spinning = true;
  result.textContent = '';
  const index = Math.floor(Math.random() * ideologies.length);
  const extra = Math.floor(Math.random() * 3) + 3; // 3 to 5 extra spins
  rotation += extra * 360 + index * segmentAngle + segmentAngle / 2;
  wheel.style.transition = 'transform 5s cubic-bezier(0.33,1,0.68,1)';
  wheel.style.transform = `rotate(${rotation}deg)`;
  wheel.addEventListener('transitionend', function handler() {
    wheel.removeEventListener('transitionend', handler);
    result.textContent = `Your fate is sealed: ${ideologies[index]}`;
    spinning = false;
  });
});
