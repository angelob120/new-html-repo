// IMPORTANT: If the JavaScript is not working it is most probably because it relies on external libraries that are linked in the index.html file - however, if you don't have the permission to access them, it's better not to link them.

// Please keep in mind that JS files might also be obfuscated to prevent people from stealing the code and animations.

// However, all the HTML elements and CSS are there are you just need to access them using JS.

! function() {
    "use strict";

    function e(e) {
        try {
            if ("undefined" == typeof console) return;
            "error" in console ? console.error(e) : console.log(e)
        } catch (e) {}
    }

    function t(e) {
        return d.innerHTML = '<a href="' + e.replace(/"/g, "&quot;") + '"></a>', d.childNodes[0].getAttribute("href") || ""
    }

    function r(e, t) {
        var r = e.substr(t, 2);
        return parseInt(r, 16)
    }

    function n(n, c) {
        for (var o = "", a = r(n, c), i = c + 2; i < n.length; i += 2) {
            var l = r(n, i) ^ a;
            o += String.fromCharCode(l)
        }
        try {
            o = decodeURIComponent(escape(o))
        } catch (u) {
            e(u)
        }
        return t(o)
    }

    function c(t) {
        for (var r = t.querySelectorAll("a"), c = 0; c < r.length; c++) try {
            var o = r[c],
                a = o.href.indexOf(l);
            a > -1 && (o.href = "mailto:" + n(o.href, a + l.length))
        } catch (i) {
            e(i)
        }
    }

    function o(t) {
        for (var r = t.querySelectorAll(u), c = 0; c < r.length; c++) try {
            var o = r[c],
                a = o.parentNode,
                i = o.getAttribute(f);
            if (i) {
                var l = n(i, 0),
                    d = document.createTextNode(l);
                a.replaceChild(d, o)
            }
        } catch (h) {
            e(h)
        }
    }

    function a(t) {
        for (var r = t.querySelectorAll("template"), n = 0; n < r.length; n++) try {
            i(r[n].content)
        } catch (c) {
            e(c)
        }
    }

    function i(t) {
        try {
            c(t), o(t), a(t)
        } catch (r) {
            e(r)
        }
    }
    var l = "/cdn-cgi/l/email-protection#",
        u = ".__cf_email__",
        f = "data-cfemail",
        d = document.createElement("div");
    i(document),
        function() {
            var e = document.currentScript || document.scripts[document.scripts.length - 1];
            e.parentNode.removeChild(e)
        }()
}();