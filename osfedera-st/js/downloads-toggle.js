document.addEventListener('DOMContentLoaded', () => {
    const downloads = document.querySelector('.links-wrapper')
    const arrow = document.querySelector('.arrow')

    arrow.addEventListener('click', () => {
        downloads.classList.toggle('d-none');
        arrow.classList.toggle('fa-angle-up');
        arrow.classList.toggle('fa-angle-down');
    });
});