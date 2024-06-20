var __$loc_data = null;
! function (e) {
    let n = !1;

    function l() {
        n = !0;
        var t = document.createElement("link"),
            l = document.createElement("meta");
        viewport = document.querySelector("meta[name=viewport]"), t.rel = "stylesheet", t.href = "https://img.ebit.com.br/ebitBR/selo-ebit/css/styleEbitv6.css", null == viewport && (l.name = "viewport", l.content = "user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width", document.getElementsByTagName("head")[0].appendChild(l)), document.getElementsByTagName("head")[0].appendChild(t);
        var i = document.createElement("div"),
            r = "";
        if (0 == document.getElementsByName("boxLight").length) {
            r += '<div id="dark" class="dark">', r += "</div>", r += '<div id="boxLight" name="boxLight" class="boxLight" style="cursor:pointer;">', r += '<a target="_blank" href="' + (null != g ? "https://newsurvey.ebit.com.br/Survey/Open/" + o + "?" + g.value : "https://newsurvey.ebit.com.br/Survey/Open/" + o + "?") + '" ><div id="boxClick" class="boxClick" style="cursor:pointer;">', r += "</div></a>", r += '<span id="btFechar" class="btFechar">X</span>', r += "</div>", i.innerHTML = r, e.document.getElementsByTagName("body")[0].appendChild(i), document.getElementById("btFechar").onclick = function () {
                document.getElementById("boxLight").style.display = "none", document.getElementById("dark").style.display = "none"
            }, document.getElementById("dark").onclick = function () {
                document.getElementById("boxLight").style.display = "none", document.getElementById("dark").style.display = "none"
            }
        }
    }

    function i(e) {
        return r(e) || (function (e) {
            var t = new Date,
                n = new Date;
            n.setDate(t.getFullYear() + 5), n.toGMTString(), document.cookie = "_ebinfo=" + e
        }('{"key":' + (new Date).getTime() + "}"), r(e))
    }

    function r(e) {
        for (var t = e + "=", n = document.cookie.split(";"), l = 0; l < n.length; l++) {
            for (var i = n[l];
                " " == i.charAt(0);) i = i.substring(1);
            if (0 == i.indexOf(t)) return i.substring(t.length, i.length)
        }
        return ""
    }

    function a(e) {
        let t = JSON.parse(e),
            n = "";
        for (let e in t) n += t[e] + "|";
        return n
    }
    let o = document.getElementById("getSelo").src.split("?")[1],
        u = !1;
    if (-1 !== o.search("&")) {
        let e = o.split("&")[0]; - 1 !== o.split("&")[1].search("lightbox=true") && (u = !0), o = e
    }
    let d = document.getElementById("seloEbit"),
        c = document.getElementById("bannerEbit"),
        g = document.getElementById("ebitParam");
    const m = /[0-9]/g;

    function a(e) {
        let t = e.split("&"),
            l = {
                sourceId: 0,
                storeId: null,
                platform: null,
                email: null,
                gender: null,
                birthday: null,
                zipCode: null,
                parcels: null,
                deliveryTax: null,
                deliveryTime: null,
                deliveryType: null,
                totalSpent: null,
                transactionId: null,
                invoiceEmissor: null,
                paymentType: null,
                cardFlag: null,
                age: null,
                ligthBox: n,
                userAgent: navigator.userAgent,
                dateCapture: null,
                dateInsert: null,
                host: document.referrer,
                hashCode: null,
                city: null,
                state: null,
                ip: null,
                hitDetails: null
            },
            i = null,
            r = null,
            a = null,
            o = null,
            u = null,
            s = null,
            d = null;
        if (t.map(function (e) {
                let t = e.indexOf("="),
                    n = e.substring(0, t).toLowerCase();
                if ("storeid" === n) {
                    let t = e.trim().substring("storeid".length + 1, e.length + 1);
                    l.storeId = "storeId" === t ? null : t
                }
                if ("platform" === n) {
                    let t = e.trim().substring("platform".length + 1, e.length + 1);
                    l.platform = "platform" === t ? null : t
                }
                if ("gender" === n) {
                    let t = e.trim().substring("gender".length + 1, e.length + 1);
                    l.gender = "gender" === t ? null : t
                }
                if ("birthday" === n) {
                    let t = e.trim().substring("birthday".length + 1, e.length + 1);
                    l.birthday = "birthday" === t ? null : t
                }
                if ("zipcode" === n) {
                    let t = e.trim().substring("zipcode".length + 1, e.length + 1);
                    l.zipCode = "zipcode" === t ? null : t
                }
                if ("parcels" === n) {
                    let t = e.trim().substring("parcels".length + 1, e.length + 1);
                    l.parcels = "parcels" === t ? null : t
                }
                if ("deliverytax" === n) {
                    let t = e.trim().substring("deliverytax".length + 1, e.length + 1);
                    l.deliveryTax = "deliveryTax" === t ? null : t
                }
                if ("deliverytime" === n) {
                    let t = e.trim().substring("deliverytime".length + 1, e.length + 1);
                    l.deliveryTime = "deliveryTime" === t ? null : t
                }
                if ("deliverytype" === n) {
                    let t = e.trim().substring("deliverytype".length + 1, e.length + 1);
                    l.deliveryType = "deliveryType" === t ? null : t
                }
                if ("totalspent" === n) {
                    let t = e.trim().substring("totalspent".length + 1, e.length + 1);
                    l.totalSpent = "totalSpent" === t ? null : t
                }
                if ("transactionid" === n) {
                    let t = e.trim().substring("transactionid".length + 1, e.length + 1);
                    l.transactionId = "transactionId" === t ? null : t
                }
                if ("invoiceemissor" === n) {
                    let t = e.trim().substring("invoiceemissor".length + 1, e.length + 1);
                    l.invoiceEmissor = "invoiceEmissor" === t ? null : t
                }
                if ("paymenttype" === n) {
                    let t = e.trim().substring("paymenttype".length + 1, e.length + 1);
                    l.paymentType = "paymentType" === t ? null : t
                }
                if ("cardflag" === n) {
                    let t = e.trim().substring("cardflag".length + 1, e.length + 1);
                    l.cardFlag = "cardFlag" === t ? null : t
                }
                if ("age" === n) {
                    let t = e.trim().substring("age".length + 1, e.length + 1);
                    l.age = "age" === t ? null : t
                }
                "value" === n && (i = "value" === (i = e.trim().substring("value".length + 1, e.length + 1)) ? null : i.split("|")), "quantity" === n && (r = "quantity" === (r = e.trim().substring("quantity".length + 1, e.length + 1)) ? null : r.split("|")), "productname" === n && (a = "productName" === (a = e.trim().substring("productname".length + 1, e.length + 1)) ? null : a.split("|")), "ean" === n && (o = "ean" === (o = e.trim().substring("ean".length + 1, e.length + 1)) ? null : o.split("|")), "sku" === n && (u = "sku" === (u = e.trim().substring("sku".length + 1, e.length + 1)) ? null : u.split("|")), "mktsaleid" === n && (s = "mktSaleId" === (s = e.trim().substring("mktsaleid".length + 1, e.length + 1)) ? null : s.split("|")), "productcondition" === n && (d = "productCondition" === (d = e.trim().substring("productcondition".length + 1, e.length + 1)) ? null : d.split("|"))
            }), null !== a) {
            let e = [];
            a.forEach((t, n) => {
                e[n] = {
                    Sequence: n,
                    Sku: null !== u && u.length >= n + 1 ? u[n] : null,
                    Ean: null !== o && o.length >= n + 1 ? o[n] : null,
                    Name: null !== a && a.length >= n + 1 ? a[n] : null,
                    Value: null !== i && i.length >= n + 1 ? i[n] : null,
                    Quantity: null !== r && r.length >= n + 1 ? r[n] : null,
                    MktSaleId: null !== s && s.length >= n + 1 ? s[n] : null,
                    ProductCondition: null !== d && d.length >= n + 1 ? d[n] : null
                }
            }), l.hitDetails = e
        }
        return l
    }
    null !== g && (g.value = function (e, t) {
        const n = e.split("&");
        return n.forEach(function (e, l) {
            let i = e.indexOf("="),
                r = e.substring(0, i).toLowerCase();
            "zipcode" === r && (n[l] = "zipCode=", null !== e.match(t) && e.match(t).forEach(function (e, t) {
                t < 5 && (n[l] += `${e}`)
            })), "email" === r && (n[l] = null)
        }), n.join("&")
    }(g.value, m), g.value = function (e) {
        let t = "";
        return e.split("&").forEach(e => {
            t = `${t}${e.trim()}&`
        }), t
    }(g.value), g.value += `device=${function(){let e=new Date;return e.getFullYear().toString()+(e.getMonth()+1<10?`0${e.getMonth()+1}`:`${e.getMonth()+1}`)+(e.getDate()<10?`0${e.getDate()}`:`${e.getDate()}`)+(e.getHours()<10?`0${e.getHours()}`:`${e.getHours()}`)+(e.getMinutes()<10?`0${e.getMinutes()}`:`${e.getMinutes()}`)}()+function(){function e(e,t){return e+(t>>>4).toString(16)+(15&t).toString(16)}let t=crypto.getRandomValues(new Uint8Array(16));return t[6]=t[6]>>>4|64,t[8]=t[8]>>>3|128,t.slice(0,4).reduce(e,"")+t.slice(4,6).reduce(e,"-")+t.slice(6,8).reduce(e,"-")+t.slice(8,10).reduce(e,"-")+t.slice(10,16).reduce(e,"-")}().substring(0,13).replace("-","")}`), void 0 !== c && function () {
        if (null !== g) {
            const n = a(g.value);
            n.hashCode = "", null === n.storeId && (n.storeId = o.match(m).join("")),
                /*function (e) {
                    fetch("https://hits-banner-cloud-function.azurewebsites.net/api/HitsBannerCloudFunction?code=kKlujzLTYG6vTm7UuoSFeIbw1EorNIQt0VxDHAgMazmY2TDxg3hi6w==", {
                        method: "POST",
                        mode: "no-cors",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(e),
                        referrer: "client"
                    })
                }*/(n); 
            var t = "";
            try {
                let t = document.getElementsByTagName("h1"),
                    n = document.getElementsByTagName("h2"),
                    l = document.referrer,
                    r = (e.location, document.title, document.getElementsByTagName("a"), !1);
                void 0 !== c && (r = !0), new Date, t = t.length > 0 ? t[0].innerHTML : "", n = n.length > 0 ? n[0].innerHTML : "";
                let o = {};
                if (void 0 !== g) {
                    let u;
                    null !== g && (g.value += "&lightbox=" + s), g.value.replace(/([^&=]+)=?([^&]*)(?:&+|$)/g, function (e, t, n) {
                        (o[t] = o[t] || []).push(n)
                    });
                    let d = void 0 === o.transactionId ? "" : o.transactionId,
                        c = void 0 === o.buscapeId ? "" : o.buscapeId,
                        m = void 0 === o.totalSpent ? "" : o.totalSpent,
                        p = void 0 === o.value ? "" : o.value,
                        v = void 0 === o.quantity ? "" : o.quantity,
                        b = void 0 === o.sku ? "" : o.sku,
                        y = void 0 === o.productName ? "" : o.productName,
                        f = void 0 === o.storeId ? "" : o.storeId,
                        w = void 0 === o.email ? "" : o.email,
                        E = void 0 === o.paymentType ? "" : o.paymentType,
                        T = void 0 === o.ean ? "" : o.ean,
                        I = void 0 === o.deliveryTax ? "" : o.deliveryTax,
                        x = void 0 === o.deliveryTime ? "" : o.deliveryTime,
                        k = void 0 === o.lightbox || o.lightbox;
                    if (k) {
                        let e = JSON.parse(k);
                        if (void 0 !== o.email) e.key, o.email[0], (new Date).getTime()
                    }
                    u = a(k = i("_ebinfo")), g.value += "&ebid=" + u, __$loc_data = {
                        propriedade: "EB",
                        url_pag: e.location,
                        tit_pag: document.title,
                        ck_pag: r,
                        h1_pag: t,
                        h2_pag: n,
                        referer_pag: l,
                        id_transacao: d,
                        emp_transacao: c,
                        valor_transacao: m,
                        vl: p,
                        pq: v,
                        prod_transacao: b,
                        prod_desc_transacao: y,
                        disableCallback: !0,
                        qa: !0,
                        lj1: f,
                        el: w,
                        mt: E,
                        pe: T,
                        ft: I,
                        te: x,
                        ebid: h
                    }()
                }
            } catch (e) {}
            if (e.innerWidth <= 320 || screen.width <= 320 ? t = "_240" : (e.innerWidth < 640 || screen.width <= 640) && (t = "_320") ,null != c) {
                let e = new Image;
                e.src = null !== g ? "https://www.ebitempresa.com.br/bitrate/banners/b1" + o + "5" + t + ".gif?" + g.value : "https://www.ebitempresa.com.br/bitrate/banners/b1" + o + "5" + t + ".gif", e.style.border = "0px", e.style.maxHeight = "350px", e.onerror = function () {
                    e.src = null !== g ? "https://www.ebitempresa.com.br/bitrate/banners/banner" + t + ".gif?storeId=" + o + "&" + g.value : "https://www.ebitempresa.com.br/bitrate/banners/banner" + t + ".gif?storeId=" + o
                }, c.innerHTML = "";
                let n = "";
                n = null !== g ? "https://newsurvey.ebit.com.br/Survey/Open/" + o + "?" + g.value : "https://newsurvey.ebit.com.br/Survey/Open/" + o + "?", c.href = n, c.style.display = "block", c.style.overflow = "hidden", c.style.position = "relative", c.target = "_blank", c.appendChild(e),
                    function () {
                        let e = "";
                        for (let t = document.getElementsByTagName("script"), n = 0; n < t.length; ++n) "" !== t[n].id && "getSelo" === t[n].id && (e = t[n]);
                        if ("" !== e) {
                            var t = e.src.replace(/^[^\?]+\??/, "");
                            "getSelo" === e.id && function (e) {
                                var t = new Object;
                                if (!e) return t;
                                for (var n = e.split(/[;&]/), i = 0; i < n.length; i++) {
                                    var r = n[i].split("=");
                                    "lightbox" === r[0] && "true" === r[1] && l()
                                }
                            }(t)
                        }
                    }()
            }
        }
    }(), void 0 !== d && function (n) {
        if (void 0 !== e.addEventListener) e.addEventListener("load", n, !1);
        else if (void 0 !== e.attachEvent) e.attachEvent("onload", n);
        else if (null !== e.onload) {
            var l = e.onload;
            e.onload = function (t) {
                l(t), e[n]()
            }
        } else e.onload = t
    }(async function () {
        if (null != d) {
            var e = document.getElementById("seloEbit").getAttribute("value");
            let alt = "Ebit medal";
            try{const r = await fetch('https://newimgebit-a.akamaihd.net/ebitBR/medal/' + o + '.json', {cache: 'no-store'}); alt = (await r.json()).medal;}catch(e){}
            d.innerHTML = "";
            let n = new Image;
			const timestamp = new Date().getTime();
            return n.src = "https://newimgebit-a.akamaihd.net/ebitBR/selo/img_" + o + ".png?" + timestamp, n.alt = alt, n.style.border = "0px", d.style.display = "block", d.style.overflow = "hidden", d.style.position = "relative", d.title = alt, d.setAttribute("onContextmenu", 'alert("Cópia proibida! A certificação Ebit é de uso exclusivo das lojas conveniadas Ebit.");return false;'), -1 === d.href.indexOf("/selo") && (function (e) {
                validChar = "0123456789.,-";
                for (var t = 0; t < e.length; t++)
                    if (validChar.indexOf(e.substr(t, 1)) < 0) return !1
            }(d.href.substr(d.href.indexOf("#") + 1, d.href.length)), d.href = d.href + "/selo"), t = d.href.replace("#", ""), d.href = t, d.appendChild(n), void(void 0 === e && document.getElementById("seloEbit").setAttribute("value", "1"))
        }
    })
}(window);