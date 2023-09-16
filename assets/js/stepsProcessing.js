const tags = document.querySelectorAll(".steps-tag");
const texts = document.querySelectorAll(".steps-text");

tags.forEach((tag) => {
    tag.addEventListener('click', (e) => {
        let idx;
        tags.forEach((tag, index) => {
            tag.classList.remove('active');
            if (tag == e.target) {
                tag.classList.add('active');
                idx = index;
            }
        });
        texts.forEach((text) => {
            text.classList.remove('active');
        });
        texts[idx + 1].classList.add('active');
    });
})