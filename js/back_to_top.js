let bttCollection = this.document.getElementsByClassName("back-to-top");
let btt = bttCollection[0];
window.addEventListener(
    'scroll',
    function (e) {
        let scroll_height = window.scrollY;
        if (scroll_height > 315) {
            if (btt.style.display == "none") {
                btt.style.display = "";
            }
        } else {
            if (btt.style.display != "none") {
                btt.style.display = "none";
            }
        }
    }
);