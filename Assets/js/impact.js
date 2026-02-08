// Tooltip for Schools Reached
document.addEventListener('DOMContentLoaded', () => {
    const schoolsBox = document.querySelector('.impact-box:last-child');
    const tooltip = schoolsBox?.querySelector('.schools-tooltip');
    if (schoolsBox && tooltip) {
        schoolsBox.addEventListener('mouseenter', () => {
            tooltip.style.display = 'block';
        });
        schoolsBox.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });
        schoolsBox.addEventListener('touchstart', () => {
            tooltip.style.display = 'block';
        });
        schoolsBox.addEventListener('touchend', () => {
            tooltip.style.display = 'none';
        });
    }
});
const counters = document.querySelectorAll('.counter');
let started = false;

function startCounting() {
    if (started) return;

    const section = document.getElementById('impactNumbers');
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {
        counters.forEach(counter => {
            const target = +counter.dataset.target;
            let count = 0;
            const speed = target / 100;

            const update = () => {
                count += speed;
                if (count < target) {
                    counter.textContent = Math.floor(count);
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target;
                }
            };

            update();
        });

        started = true;
    }
}

window.addEventListener('scroll', startCounting);
startCounting();
