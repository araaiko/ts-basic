(() => {
  "use strict";
  var e = {
      607: function (e, t, r) {
        var s =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 });
        const o = s(r(54)),
          l = document.getElementById("root");
        new o.default("Hello Asuka!").sayHello(l);
      },
      54: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = class {
            constructor(e) {
              this.message = e;
            }
            sayHello(e) {
              e && (e.innerText = this.message);
            }
          });
      },
    },
    t = {};
  !(function r(s) {
    var o = t[s];
    if (void 0 !== o) return o.exports;
    var l = (t[s] = { exports: {} });
    return e[s].call(l.exports, l, l.exports, r), l.exports;
  })(607);
})();
