
const call = document.querySelectorAll(".vertical-numbers-stack .paint-num");
const container = document.querySelector(".vertical-numbers-stack");

let activated = false;
window.addEventListener("scroll", () => {

    let currentScroll = window.pageYOffset || window.scrollY;

    if (
        currentScroll > container.offsetTop - container.offsetHeight - 200
        && activated === false
    ) {
        call.forEach(counter => {
            counter.innerText = 0;
            let count = 0;

            function updateCount() {
                const target = parseFloat(counter.dataset.count);

                if (count < target) {
                    count++;
                    counter.innerText = count;
                    setTimeout(updateCount, 100); 
                } else {
                    counter.innerText = target;
                }
            }
            updateCount();

            activated = true;
        });

    } else if (
        currentScroll < container.offsetTop - container.offsetHeight - 500
        || currentScroll === 0
        && activated === true
    ) {
        call.forEach(counter => {
            counter.innerText = 0;
        });

        activated = false;
    }
});