/**
 * Input and Floating Input through Utility
 */

let inputIcon = document.querySelectorAll('.e-input-group-icon');
for (let i = 0; i < inputIcon.length; i++) {
    inputIcon[i].addEventListener('mousedown', function () {
        this.classList.add('e-input-btn-ripple');
    });
    inputIcon[i].addEventListener('mouseup', function () {
        let element = this;
        setTimeout(function () {
            element.classList.remove('e-input-btn-ripple');
        }, 500);
    });
}
