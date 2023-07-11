/**
 * Evexi API
 * Version 2.9.0
 */
var t,
  e,
  n =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {},
  i = {};
(t = i),
  Object.defineProperty(t, "__esModule", {
    value: !0,
  }),
  (t.Actions = void 0),
  ((e = t.Actions || (t.Actions = {})).INFO = "info"),
  (e.LOG = "log"),
  (e.STORAGE_GET = "storage.get"),
  (e.STORAGE_PUT = "storage.put"),
  (e.STORAGE_DELETE = "storage.delete"),
  (e.STORAGE_LIST = "storage.list"),
  (e.STORAGE_CLEAR = "storage.clear"),
  (e.STORAGE_DOWNLOAD = "storage.download"),
  (e.STORAGE_EXISTS = "storage.exists"),
  (e.INTERACT_CREATE = "interact.create"),
  (e.INTERACT_START = "interact.start"),
  (e.INTERACT_DESTROY = "interact.destroy"),
  (e.INTERACT_MESSAGE = "interact.message"),
  (e.INTERACT_KICK = "interact.kick"),
  (e.KIOSK_BARCODE = "kiosk.barcode"),
  (e.KIOSK_PRINTER = "kiosk.printer"),
  (e.PROXY = "proxy"),
  (e.ENV_VAR = "envVar"),
  (e.SERIAL_OPEN = "serial.open"),
  (e.SERIAL_CLOSE = "serial.close"),
  (e.SERIAL_WRITE = "serial.write"),
  (e.SERIAL_DATA = "serial.data"),
  (e.OTI_PAY = "oti.pay"),
  (e.OTI_CANCEL = "cancel"),
  (e.NEXMOSPHERE_OPEN = "nexmosphere.open"),
  (e.NEXMOSPHERE_DATA = "nexmosphere.data"),
  (e.NEXMOSPHERE_CLOSE = "nexmosphere.close"),
  (e.NEXMOSPHERE_WRITE = "nexmosphere.write");
var o = function (t, e) {
  return (
    (o =
      Object.setPrototypeOf ||
      ({
        __proto__: [],
      } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }),
    o(t, e)
  );
};
var r = function () {
  return (
    (r =
      Object.assign ||
      function (t) {
        for (var e, n = 1, i = arguments.length; n < i; n++)
          for (var o in (e = arguments[n]))
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t;
      }),
    r.apply(this, arguments)
  );
};

function s(t, e, n, i) {
  return new (n || (n = Promise))(function (o, r) {
    function s(t) {
      try {
        c(i.next(t));
      } catch (e) {
        r(e);
      }
    }

    function a(t) {
      try {
        c(i["throw"](t));
      } catch (e) {
        r(e);
      }
    }

    function c(t) {
      var e;
      t.done
        ? o(t.value)
        : ((e = t.value),
          e instanceof n
            ? e
            : new n(function (t) {
                t(e);
              })).then(s, a);
    }
    c((i = i.apply(t, e || [])).next());
  });
}

function a(t, e) {
  var n,
    i,
    o,
    r,
    s = {
      label: 0,
      sent: function () {
        if (1 & o[0]) throw o[1];
        return o[1];
      },
      trys: [],
      ops: [],
    };
  return (
    (r = {
      next: a(0),
      throw: a(1),
      return: a(2),
    }),
    "function" == typeof Symbol &&
      (r[Symbol.iterator] = function () {
        return this;
      }),
    r
  );

  function a(r) {
    return function (a) {
      return (function (r) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; s; )
          try {
            if (
              ((n = 1),
              i &&
                (o =
                  2 & r[0]
                    ? i["return"]
                    : r[0]
                    ? i["throw"] || ((o = i["return"]) && o.call(i), 0)
                    : i.next) &&
                !(o = o.call(i, r[1])).done)
            )
              return o;
            switch (((i = 0), o && (r = [2 & r[0], o.value]), r[0])) {
              case 0:
              case 1:
                o = r;
                break;
              case 4:
                return (
                  s.label++,
                  {
                    value: r[1],
                    done: !1,
                  }
                );
              case 5:
                s.label++, (i = r[1]), (r = [0]);
                continue;
              case 7:
                (r = s.ops.pop()), s.trys.pop();
                continue;
              default:
                if (
                  !((o = s.trys),
                  (o = o.length > 0 && o[o.length - 1]) ||
                    (6 !== r[0] && 2 !== r[0]))
                ) {
                  s = 0;
                  continue;
                }
                if (3 === r[0] && (!o || (r[1] > o[0] && r[1] < o[3]))) {
                  s.label = r[1];
                  break;
                }
                if (6 === r[0] && s.label < o[1]) {
                  (s.label = o[1]), (o = r);
                  break;
                }
                if (o && s.label < o[2]) {
                  (s.label = o[2]), s.ops.push(r);
                  break;
                }
                o[2] && s.ops.pop(), s.trys.pop();
                continue;
            }
            r = e.call(t, s);
          } catch (a) {
            (r = [6, a]), (i = 0);
          } finally {
            n = o = 0;
          }
        if (5 & r[0]) throw r[1];
        return {
          value: r[0] ? r[1] : void 0,
          done: !0,
        };
      })([r, a]);
    };
  }
}
var c = {};
Object.defineProperty(c, "__esModule", {
  value: !0,
}),
  (c.queryString = c.keys = u = c.promiseTimeout = void 0);
var u = (c.promiseTimeout = function (t, e) {
  const n = new Promise((e, n) => {
    const i = window.setTimeout(() => {
      window.clearTimeout(i), n("Timed out in " + t + "ms.");
    }, t);
  });
  return Promise.race([e, n]);
});
(c.keys = function (t) {
  return Object.keys(t);
}),
  (c.queryString = function (t) {
    const e = Object.keys(t)
      .map((e) => e + "=" + t[e])
      .join("&");
    return e ? `?${e}` : "";
  });
var l = {},
  f = {};
!(function (t) {
  var e, n, i, o;
  Object.defineProperty(t, "__esModule", {
    value: !0,
  }),
    (t.MediaType = t.TransitionOUT = t.TransitionIn = t.ContentKind = void 0),
    ((e = t.ContentKind || (t.ContentKind = {})).SCHEDULE = "Schedule"),
    (e.PLAYLIST = "Playlist"),
    (e.MEDIA = "Media"),
    ((n = t.TransitionIn || (t.TransitionIn = {})).SLIDE_LEFT =
      "slide-in-from-left"),
    (n.SLIDE_TOP = "slide-in-from-top"),
    (n.SLIDE_BOTTOM = "slide-in-from-bottom"),
    (n.SLIDE_RIGHT = "slide-in-from-right"),
    (n.FADE = "fade-in"),
    (n.ZOOM = "zoom-in"),
    ((i = t.TransitionOUT || (t.TransitionOUT = {})).SLIDE_LEFT =
      "slide-out-to-left"),
    (i.SLIDE_TOP = "slide-out-to-top"),
    (i.SLIDE_BOTTOM = "slide-out-to-bottom"),
    (i.SLIDE_RIGHT = "slide-out-to-right"),
    (i.FADE = "fade-out"),
    (i.ZOOM = "zoom-out"),
    ((o = t.MediaType || (t.MediaType = {})).WEB = "Web"),
    (o.IMAGE = "Image"),
    (o.VIDEO = "Video"),
    (o.APP = "App");
})(f);
var h = {};
Object.defineProperty(h, "__esModule", {
  value: !0,
});
var p = {};
!(function (t) {
  var e;
  Object.defineProperty(t, "__esModule", {
    value: !0,
  }),
    (t.InteractiveEvent = void 0),
    ((e = t.InteractiveEvent || (t.InteractiveEvent = {})).MESSAGE = "message"),
    (e.CONNECT = "connect"),
    (e.DISCONNECT = "disconnect"),
    (e.KICK = "kick");
})(p);
var d = {};
!(function (t) {
  var e;
  Object.defineProperty(t, "__esModule", {
    value: !0,
  }),
    (t.EnvironmentType = void 0),
    ((e = t.EnvironmentType || (t.EnvironmentType = {})).SSSP2 = "SSSP2"),
    (e.HTML = "HTML"),
    (e.TIZEN = "TIZEN"),
    (e.KIOSK = "KIOSK");
})(d),
  (function (t) {
    var e,
      i =
        (n && n.__createBinding) ||
        (Object.create
          ? function (t, e, n, i) {
              i === undefined && (i = n);
              var o = Object.getOwnPropertyDescriptor(e, n);
              (o &&
                !("get" in o ? !e.__esModule : o.writable || o.configurable)) ||
                (o = {
                  enumerable: !0,
                  get: function () {
                    return e[n];
                  },
                }),
                Object.defineProperty(t, i, o);
            }
          : function (t, e, n, i) {
              i === undefined && (i = n), (t[i] = e[n]);
            }),
      o =
        (n && n.__setModuleDefault) ||
        (Object.create
          ? function (t, e) {
              Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e,
              });
            }
          : function (t, e) {
              t["default"] = e;
            }),
      r =
        (n && n.__importStar) ||
        function (t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var n in t)
              "default" !== n &&
                Object.prototype.hasOwnProperty.call(t, n) &&
                i(e, t, n);
          return o(e, t), e;
        };
    Object.defineProperty(t, "__esModule", {
      value: !0,
    }),
      (t.WebsocketAction =
        t.HealthCheck =
        t.Interact =
        t.Settings =
        t.Sp =
          void 0),
      (t.Sp = r(f)),
      (t.Settings = r(h)),
      (t.Interact = r(p)),
      (t.HealthCheck = r(d)),
      ((e = t.WebsocketAction || (t.WebsocketAction = {})).SP = "sp"),
      (e.SETTINGS = "settings"),
      (e.CLEAR_AND_RESTART = "clearrestart"),
      (e.REBOOT = "reboot"),
      (e.LOGS = "logs"),
      (e.PING = "ping"),
      (e.INTERACT = "interact"),
      (e.INTERACT_START = "interact:start"),
      (e.TRANSITION = "transition"),
      (e.HC_HEALTH = "health"),
      (e.HC_SETTINGS = "info:settings"),
      (e.HC_INFO = "info"),
      (e.HC_STORAGE = "info:storage");
  })(l);
var v = new (function () {
    var t = this;
    (this.events = {}),
      (this.all = {
        create: function (t, e, n, o) {
          return O(
            r(
              r(
                r(
                  {
                    action: i.Actions.INTERACT_CREATE,
                    maxRuntime: t,
                  },
                  e && {
                    clientUrl: e,
                  }
                ),
                n && {
                  maxClients: n,
                }
              ),
              o && {
                noCommunicationTimeout: o,
              }
            )
          );
        },
        start: function (t) {
          return y(
            r(
              {
                action: i.Actions.INTERACT_START,
              },
              t && {
                application: t,
              }
            )
          );
        },
        destroy: function () {
          (t.events = {}),
            y({
              action: i.Actions.INTERACT_DESTROY,
            });
        },
        message: function (t, e) {
          return y(
            r(
              {
                action: i.Actions.INTERACT_MESSAGE,
                data: t,
              },
              e && {
                client: e,
              }
            )
          );
        },
        kick: function (t) {
          return y({
            action: i.Actions.INTERACT_KICK,
            client: t,
          });
        },
        onMessage: function (e) {
          t.events.onMessage = e;
        },
        onConnect: function (e) {
          t.events.onConnect = e;
        },
        onDisconnect: function (e) {
          t.events.onDisconnect = e;
        },
        onKick: function (e) {
          t.events.onKick = e;
        },
      });
  })(),
  E = function () {
    var t = this;
    (this.events = {}),
      (this.all = {
        open: function (t, e) {
          return O(
            r(
              {
                action: i.Actions.SERIAL_OPEN,
                port: t,
              },
              e
            )
          );
        },
        close: function (e) {
          (t.events = {}),
            O({
              action: i.Actions.SERIAL_CLOSE,
              port: e,
            });
        },
        write: function (t, e) {
          return O({
            action: i.Actions.SERIAL_WRITE,
            port: t,
            data: e,
          });
        },
        onMessage: function (e) {
          t.events.onMessage = e;
        },
      });
  },
  T = new E(),
  S = new (function () {
    var t = this;
    (this.events = {}),
      (this.all = {
        open: function (t) {
          return O(
            r(
              {
                action: i.Actions.NEXMOSPHERE_OPEN,
              },
              t && {
                port: t,
              }
            )
          );
        },
        onMessage: function (e) {
          t.events.onMessage = e;
        },
        close: function () {
          return (
            (t.events = {}),
            O({
              action: i.Actions.NEXMOSPHERE_CLOSE,
            })
          );
        },
        write: function (t) {
          return O({
            action: i.Actions.NEXMOSPHERE_WRITE,
            data: t,
          });
        },
      });
  })(),
  g = new ((function () {
    function t() {
      var t = this;
      (this.events = {}),
        (this.requestId = 0),
        window.addEventListener("message", function (e) {
          if (!e || !e.data || typeof e.data !== "string") return;
          var n = JSON.parse(e.data);
          if (n.action === i.Actions.INTERACT_MESSAGE)
            return (
              n.event === l.Interact.InteractiveEvent.MESSAGE &&
                v.events.onMessage &&
                n.data &&
                v.events.onMessage(n.data, n.client),
              n.event === l.Interact.InteractiveEvent.CONNECT &&
                v.events.onConnect &&
                v.events.onConnect(n.client),
              n.event === l.Interact.InteractiveEvent.DISCONNECT &&
                v.events.onDisconnect &&
                v.events.onDisconnect(n.client),
              void (
                n.event === l.Interact.InteractiveEvent.KICK &&
                v.events.onKick &&
                v.events.onKick(n.client)
              )
            );
          n.action !== i.Actions.SERIAL_DATA
            ? n.action !== i.Actions.NEXMOSPHERE_DATA
              ? n.requestId &&
                t.events[n.requestId] &&
                (t.events[n.requestId](n), t.unListen(n.requestId))
              : S.events.onMessage && S.events.onMessage(n.response)
            : T.events.onMessage && T.events.onMessage(n.response);
        });
    }
    return (
      (t.prototype.listen = function (t) {
        var e = this;
        return (
          this.requestId++,
          {
            promise: u(
              t || 5e3,
              new Promise(function (t) {
                e.events[e.requestId] = function (e) {
                  return t(e.response);
                };
              })
            )["catch"](function (t) {
              throw (e.unListen(e.requestId), new Error(t));
            }),
            requestId: this.requestId,
          }
        );
      }),
      (t.prototype.unListen = function (t) {
        delete this.events[t];
      }),
      t
    );
  })())();

function y(t) {
  if (!window.parent) return console.error("wrapperNoListener error");
  window.parent.postMessage(JSON.stringify(r({}, t)), "*");
}

function O(t, e) {
  return s(this, void 0, void 0, function () {
    var n, i, o;
    return a(this, function (s) {
      switch (s.label) {
        case 0:
          return window.parent
            ? ((n = g.listen(e)),
              (i = n.promise),
              (o = n.requestId),
              window.parent.postMessage(
                JSON.stringify(
                  r(r({}, t), {
                    requestId: o,
                  })
                ),
                "*"
              ),
              [4, i])
            : [2, Promise.reject("wrapper error")];
        case 1:
          return [2, s.sent()];
      }
    });
  });
}
var I,
  A,
  _ = new (function () {
    this.all = {
      get: function (t) {
        return O({
          action: i.Actions.STORAGE_GET,
          name: t,
        });
      },
      put: function (t, e) {
        return O({
          action: i.Actions.STORAGE_PUT,
          name: t,
          data: e,
        });
      },
      del: function (t) {
        return O({
          action: i.Actions.STORAGE_DELETE,
          name: t,
        });
      },
      list: function () {
        return O({
          action: i.Actions.STORAGE_LIST,
        });
      },
      clear: function () {
        return O({
          action: i.Actions.STORAGE_CLEAR,
        });
      },
      download: function (t, e) {
        return O({
          action: i.Actions.STORAGE_DOWNLOAD,
          url: t,
          name: e,
        });
      },
      exists: function (t) {
        return O({
          action: i.Actions.STORAGE_EXISTS,
          name: t,
        });
      },
    };
  })(),
  w = new (function () {
    this.all = {
      barcode: function () {
        return O(
          {
            action: i.Actions.KIOSK_BARCODE,
          },
          3e4
        );
      },
      printer: function (t, e) {
        return O({
          action: i.Actions.KIOSK_PRINTER,
          data: t,
          printerSettings: e,
        });
      },
    };
  })(),
  m = new (function () {
    this.all = {
      request: function (t, e) {
        return O({
          action: i.Actions.PROXY,
          proxy: {
            url: t,
            request: e,
          },
        });
      },
    };
  })(),
  R = new (function () {
    this.all = {
      env: function (t) {
        return O({
          action: i.Actions.ENV_VAR,
          name: t,
        });
      },
    };
  })(),
  x = new (function () {
    this.all = {
      pay: function (t, e, n) {
        var o = n ? 1e3 * n + 10 : 60010;
        return O(
          {
            action: i.Actions.OTI_PAY,
            amount: t,
            currencyCode: e,
            timeout: n,
          },
          o
        );
      },
      cancel: function () {
        return y({
          action: i.Actions.OTI_CANCEL,
        });
      },
    };
  })(),
  b = function () {
    (this.fs = _.all),
      (this.interactive = v.all),
      (this.tizen = w.all),
      (this.proxy = m.all),
      (this.env = R.all.env),
      (this.serial = T.all),
      (this.oti = x.all),
      (this.log = function (t) {
        return y({
          action: i.Actions.LOG,
          data: t,
        });
      }),
      (this.info = function () {
        return O({
          action: i.Actions.INFO,
        });
      }),
      (this.nexmosphere = S.all);
  },
  C = {
    receiptGenerator: (function () {
      function t() {
        (this.characters = 42), (this.data = "");
      }
      return (
        (t.prototype.blank = function (t) {
          return (
            void 0 === t && (t = 1),
            (this.data += ""
              .concat(" ".repeat(this.characters), "\n")
              .repeat(t)),
            this
          );
        }),
        (t.prototype.left = function (t) {
          try {
            var e = this.characters - t.length;
            this.data += "".concat(t).concat(" ".repeat(e), "\n");
          } catch (n) {
            throw new Error(
              "Error receipt generator: Left text generator over ".concat(
                this.characters,
                " characters"
              )
            );
          }
          return this;
        }),
        (t.prototype.right = function (t) {
          try {
            var e = this.characters - t.length;
            this.data += "".concat(" ".repeat(e)).concat(t, "\n");
          } catch (n) {
            throw new Error(
              "Error receipt generator: Right text generator over ".concat(
                this.characters,
                " characters"
              )
            );
          }
          return this;
        }),
        (t.prototype.stretch = function (t, e, n) {
          void 0 === n && (n = " ");
          try {
            var i = this.characters - (t.length + e.length);
            this.data += "".concat(t).concat(n.repeat(i)).concat(e, "\n");
          } catch (o) {
            throw new Error(
              "Error receipt generator: Stretch text generator over ".concat(
                this.characters,
                " characters"
              )
            );
          }
          return this;
        }),
        (t.prototype.centre = function (t) {
          try {
            var e = this.characters - t.length;
            this.data += ""
              .concat(" ".repeat(Math.floor(e / 2)))
              .concat(t)
              .concat(" ".repeat(Math.floor(e / 2)), "\n");
          } catch (n) {
            throw new Error(
              "Error receipt generator: Center text generator over ".concat(
                this.characters,
                " characters"
              )
            );
          }
          return this;
        }),
        (t.prototype.fill = function (t) {
          try {
            this.data += "".concat(t.repeat(this.characters), "\n");
          } catch (e) {
            throw new Error(
              "Error receipt generator: Fill text generator over ".concat(
                this.characters,
                " characters"
              )
            );
          }
          return this;
        }),
        (t.prototype.inject = function (t) {
          return (this.data += t), this;
        }),
        (t.prototype.generate = function (t) {
          return (
            void 0 === t && (t = !0),
            t &&
              (this.data += ""
                .concat(" ".repeat(this.characters), "\n")
                .repeat(6)),
            this.data
          );
        }),
        t
      );
    })(),
  };
!(function (t) {
  (t.Prod = "wss://mrx.cx/interactive/socket"),
    (t.Dev = "wss://dev.mrx.cx/interactive/socket"),
    (t.Edge = "wss://edge.mrx.cx/interactive/socket"),
    (t.Local = "ws://localhost:1337");
})(I || (I = {})),
  (function (t) {
    t.InitializationError = "Initialization Failed";
  })(A || (A = {}));
var M = (function (t) {
    function e(e) {
      var n = t.call(this, e) || this;
      return (n.name = A.InitializationError), n;
    }
    return (
      (function (t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Class extends value " + String(e) + " is not a constructor or null"
          );

        function n() {
          this.constructor = t;
        }
        o(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      })(e, t),
      e
    );
  })(Error),
  N = (function () {
    function t(t, e) {
      var n,
        i = this;
      if (
        ((this.sessionId = t),
        (this.environmentKey = e),
        (this.socket = null),
        (this.pingInterval = null),
        (this.events = {
          onMessage: null,
          onOpen: null,
          onClose: null,
        }),
        !t)
      )
        throw new M("sessionId not provided");
      (this.socket = new WebSocket(
        "".concat(((n = e), I[n || "Prod"]), "/").concat(t)
      )),
        (this.socket.onmessage = function (t) {
          if (i.events.onMessage) {
            var e = JSON.parse(t.data);
            "ping" !== e.action &&
              "pong" !== e.action &&
              i.events.onMessage(e.data);
          }
        }),
        (this.socket.onopen = function () {
          i.events.onOpen && i.events.onOpen();
        }),
        (this.socket.onclose = function (t) {
          i.events.onClose && i.events.onClose(t.code), i.destroy();
        }),
        (this.pingInterval = window.setInterval(function () {
          return i.send("ping", "ping");
        }, 5e3));
    }
    return (
      (t.prototype.send = function (t, e) {
        void 0 === e && (e = "message"),
          this.socket &&
            this.socket.readyState === WebSocket.OPEN &&
            this.socket.send(
              JSON.stringify({
                action: e,
                data: t,
              })
            );
      }),
      (t.prototype.onOpen = function (t) {
        return (this.events.onOpen = t.bind(this)), this;
      }),
      (t.prototype.onClose = function (t) {
        return (this.events.onClose = t.bind(this)), this;
      }),
      (t.prototype.onMessage = function (t) {
        return (this.events.onMessage = t.bind(this)), this;
      }),
      (t.prototype.destroy = function () {
        this.socket && this.socket.close(1e3),
          (this.events.onMessage = null),
          (this.events.onOpen = null),
          (this.events.onClose = null),
          (this.socket = null),
          this.pingInterval && window.clearInterval(this.pingInterval);
      }),
      (t.urlParam = function (t) {
        return (
          void 0 === t && (t = "session"),
          new URLSearchParams(window.location.search).get(t)
        );
      }),
      t
    );
  })(),
  P = {};
!(function (t) {
  Object.defineProperty(t, "__esModule", {
    value: !0,
  }),
    (t.TransactionStatus = void 0),
    (function (t) {
      (t.OK = "OK"),
        (t.Declined = "Declined"),
        (t.Error = "Error"),
        (t.Timeout = "Timeout"),
        (t.Cancelled = "Cancelled");
    })(t.TransactionStatus || (t.TransactionStatus = {}));
})(P);
var k = {};
!(function (t) {
  Object.defineProperty(t, "__esModule", {
    value: !0,
  }),
    (t.SerialDataBits = t.SerialParity = void 0),
    (function (t) {
      (t.NONE = "NONE"), (t.ODD = "ODD"), (t.EVEN = "EVEN");
    })(t.SerialParity || (t.SerialParity = {})),
    (function (t) {
      (t.BITS5 = "BITS5"),
        (t.BITS6 = "BITS6"),
        (t.BITS7 = "BITS7"),
        (t.BITS8 = "BITS8");
    })(t.SerialDataBits || (t.SerialDataBits = {}));
})(k);
var D = (function () {
    function t(t) {
      (this.Evexi = t), (this.nexmosphereMessageCb = null);
    }
    return (
      (t.prototype.all = function () {
        return (
          this.fs()
            .interactive()
            .proxy("/")
            .env({})
            .tizen({
              barcodeReturn: "",
            })
            .log()
            .info()
            .oti()
            .serial()
            .nexmosphere(),
          this
        );
      }),
      (t.prototype.fs = function () {
        var t = this;
        return (
          (this.Evexi.fs = {
            get: function (e) {
              return s(t, void 0, void 0, function () {
                return a(this, function (t) {
                  return [
                    2,
                    {
                      name: e,
                      error: null,
                      type: "text",
                      data: "text",
                    },
                  ];
                });
              });
            },
            put: function () {
              return s(t, void 0, void 0, function () {
                return a(this, function (t) {
                  return [2, !0];
                });
              });
            },
            del: function () {
              return s(t, void 0, void 0, function () {
                return a(this, function (t) {
                  return [2, !0];
                });
              });
            },
            list: function () {
              return s(t, void 0, void 0, function () {
                return a(this, function (t) {
                  return [2, []];
                });
              });
            },
            clear: function () {
              return s(t, void 0, void 0, function () {
                return a(this, function (t) {
                  return [2, 1];
                });
              });
            },
            download: function (e) {
              return s(t, void 0, void 0, function () {
                return a(this, function (t) {
                  return [
                    2,
                    {
                      url: e,
                      data: "",
                      error: null,
                    },
                  ];
                });
              });
            },
            exists: function () {
              return s(t, void 0, void 0, function () {
                return a(this, function (t) {
                  return [2, !0];
                });
              });
            },
          }),
          this
        );
      }),
      (t.prototype.interactive = function () {
        var t = this;
        return (
          (this.Evexi.interactive = {
            create: function () {
              return s(t, void 0, void 0, function () {
                return a(this, function (t) {
                  return [
                    2,
                    {
                      qr: "",
                      url: "",
                      sessionId: "",
                    },
                  ];
                });
              });
            },
            start: function () {},
            destroy: function () {},
            message: function () {},
            kick: function (t) {},
            onMessage: function (t) {},
            onConnect: function (t) {},
            onDisconnect: function (t) {},
            onKick: function (t) {},
          }),
          this
        );
      }),
      (t.prototype.proxy = function (t) {
        var e = this,
          n = function (n, i) {
            return s(e, void 0, void 0, function () {
              var e, o, r;
              return a(this, function (s) {
                switch (s.label) {
                  case 0:
                    return (
                      i || (i = {}),
                      i.headers ||
                        (i.headers = {
                          "Content-Type": "application/json",
                        }),
                      i ? [4, window.fetch("".concat(t).concat(n), i)] : [3, 2]
                    );
                  case 1:
                    return (o = s.sent()), [3, 4];
                  case 2:
                    return [4, window.fetch("".concat(t).concat(n))];
                  case 3:
                    (o = s.sent()), (s.label = 4);
                  case 4:
                    (e = o), (s.label = 5);
                  case 5:
                    return s.trys.push([5, 7, , 8]), [4, e.json()];
                  case 6:
                    return (r = s.sent()), [3, 8];
                  case 7:
                    return s.sent(), [2, !1];
                  case 8:
                    return [
                      2,
                      {
                        status: e.status,
                        statusText: e.statusText,
                        url: e.url,
                        ok: e.ok,
                        json: r,
                      },
                    ];
                }
              });
            });
          },
          i = function (n, i) {
            return s(e, void 0, void 0, function () {
              var e;
              return a(this, function (i) {
                return (e = t.find(function (t) {
                  return -1 !== n.indexOf(t.endpoint);
                }))
                  ? [
                      2,
                      {
                        status: 200,
                        statusText: "",
                        url: n,
                        ok: !0,
                        json: e.response,
                      },
                    ]
                  : [
                      2,
                      {
                        status: 404,
                        statusText: "Endpoint not stubbed",
                        url: n,
                        ok: !1,
                        json: undefined,
                      },
                    ];
              });
            });
          };
        return (
          (this.Evexi.proxy = function (e, o) {
            return s(this, void 0, void 0, function () {
              return a(this, function (r) {
                return "object" == typeof t ? [2, i(e)] : [2, n(e, o)];
              });
            });
          }),
          this
        );
      }),
      (t.prototype.env = function (t) {
        return (
          (this.Evexi.env = function (e) {
            return s(this, void 0, void 0, function () {
              return a(this, function (n) {
                return [2, t[e]];
              });
            });
          }),
          this
        );
      }),
      (t.prototype.tizen = function (t) {
        return (
          (this.Evexi.tizen = {
            printer: function (t, e) {
              return s(this, void 0, void 0, function () {
                return a(this, function (n) {
                  return console.log(t, e), [2, !0];
                });
              });
            },
            barcode: function () {
              var e;
              return s(this, void 0, void 0, function () {
                return a(this, function (n) {
                  return [
                    2,
                    null !== (e = t.barcodeReturn) && void 0 !== e ? e : "",
                  ];
                });
              });
            },
          }),
          this
        );
      }),
      (t.prototype.log = function () {
        return (
          (this.Evexi.log = function (t) {
            console.log(t);
          }),
          this
        );
      }),
      (t.prototype.info = function () {
        return (
          (this.Evexi.info = function () {
            return s(this, void 0, void 0, function () {
              return a(this, function (t) {
                return [
                  2,
                  {
                    deviceId: "",
                    version: "",
                    provider: !1,
                  },
                ];
              });
            });
          }),
          this
        );
      }),
      (t.prototype.oti = function (t) {
        return (
          (this.Evexi.oti.pay = function (e, n, i) {
            return s(this, void 0, void 0, function () {
              return a(this, function (o) {
                return (
                  console.log(e, n, i),
                  5 === e
                    ? [
                        2,
                        r(
                          r(
                            r(
                              {
                                status: P.TransactionStatus.Declined,
                              },
                              t &&
                                t.ref && {
                                  ref: t.ref,
                                }
                            ),
                            t &&
                              t.cardType && {
                                cardType: t.cardType,
                              }
                          ),
                          t &&
                            t.cardRef && {
                              cardRef: t.cardRef,
                            }
                        ),
                      ]
                    : 100 === e
                    ? [
                        2,
                        {
                          status: P.TransactionStatus.Timeout,
                        },
                      ]
                    : [
                        2,
                        null != t
                          ? t
                          : {
                              status: P.TransactionStatus.OK,
                            },
                      ]
                );
              });
            });
          }),
          this
        );
      }),
      (t.prototype.serial = function (t) {
        var e = null;
        return (
          (this.Evexi.serial.open = function (t, e) {
            return s(this, void 0, void 0, function () {
              return a(this, function (n) {
                return console.log("serial open", t, e), [2, !0];
              });
            });
          }),
          (this.Evexi.serial.close = function (t) {
            return console.log("serial close", t), !0;
          }),
          (this.Evexi.serial.write = function (n, i) {
            return s(this, void 0, void 0, function () {
              return a(this, function (o) {
                return (
                  console.log("serial write", n, i),
                  e && t && t[i] && e(t[i]),
                  [2, !0]
                );
              });
            });
          }),
          (this.Evexi.serial.onMessage = function (t) {
            e = t;
          }),
          this
        );
      }),
      (t.prototype.nexmosphere = function () {
        var t = this;
        return (
          (this.Evexi.nexmosphere.open = function (t) {
            return Promise.resolve(!0);
          }),
          (this.Evexi.nexmosphere.close = function () {
            return Promise.resolve(!0);
          }),
          (this.Evexi.nexmosphere.onMessage = function (e) {
            t.nexmosphereMessageCb = e;
          }),
          this
        );
      }),
      (t.prototype.nexmosphereMessage = function (t) {
        this.nexmosphereMessageCb && this.nexmosphereMessageCb(t);
      }),
      t
    );
  })(),
  L = function () {
    (this.api = new b()),
      (this.helper = C),
      (this.Scan = N),
      (this.env = this.api.env),
      (this.fs = {
        get: this.api.fs.get,
        put: this.api.fs.put,
        del: this.api.fs.del,
        list: this.api.fs.list,
        clear: this.api.fs.clear,
        download: this.api.fs.download,
        exists: this.api.fs.exists,
      }),
      (this.info = this.api.info),
      (this.interactive = {
        create: this.api.interactive.create,
        start: this.api.interactive.start,
        destroy: this.api.interactive.destroy,
        message: this.api.interactive.message,
        kick: this.api.interactive.kick,
        onMessage: this.api.interactive.onMessage,
        onConnect: this.api.interactive.onConnect,
        onDisconnect: this.api.interactive.onDisconnect,
        onKick: this.api.interactive.onKick,
      }),
      (this.log = this.api.log),
      (this.proxy = this.api.proxy.request),
      (this.tizen = {
        barcode: this.api.tizen.barcode,
        printer: this.api.tizen.printer,
      }),
      (this.serial = {
        open: this.api.serial.open,
        close: this.api.serial.close,
        write: this.api.serial.write,
        onMessage: this.api.serial.onMessage,
      }),
      (this.oti = {
        pay: this.api.oti.pay,
        cancel: this.api.oti.cancel,
      }),
      (this.nexmosphere = {
        open: this.api.nexmosphere.open,
        onMessage: this.api.nexmosphere.onMessage,
        close: this.api.nexmosphere.close,
        write: this.api.nexmosphere.write,
      });
  },
  K = new L(),
  G = k.SerialDataBits,
  j = k.SerialParity,
  H = P.TransactionStatus;
export {
  K as Evexi,
  L as EvexiInstance,
  D as EvexiMock,
  G as SerialDataBits,
  j as SerialParity,
  H as TransactionStatus,
  K as default,
};