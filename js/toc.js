let toc = this.document.getElementById("post-toc");
let fixedClsName = "post-toc-fixed";
let absoluteClsName = "post-toc-absolute";
window.addEventListener(
    'scroll',
    function (e) {
        let scroll_height = window.scrollY;
        if (scroll_height > 315) {
            if (toc.className != fixedClsName)
            {
                toc.className = fixedClsName;
            }
        } else {
            if (toc.className != absoluteClsName)
            {
                toc.className = absoluteClsName;
            }
        }
    }
);