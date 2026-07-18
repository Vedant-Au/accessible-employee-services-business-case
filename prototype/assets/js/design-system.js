/* @ds-bundle: {"format":4,"namespace":"GlobalTechAccessibleDS_ff3d6f","components":[{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Card","sourcePath":"components/feedback/Card.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Choice","sourcePath":"components/forms/Choice.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Choice.jsx"},{"name":"Radio","sourcePath":"components/forms/Choice.jsx"},{"name":"Fieldset","sourcePath":"components/forms/Fieldset.jsx"},{"name":"Link","sourcePath":"components/forms/Link.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"Icon","sourcePath":"components/foundation/Icon.jsx"},{"name":"MediaPlayer","sourcePath":"components/media/MediaPlayer.jsx"},{"name":"SkipLink","sourcePath":"components/navigation/SkipLink.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"}],"sourceHashes":{"components/feedback/Alert.jsx":"4d301b5684f6","components/feedback/Badge.jsx":"39858afc0ef8","components/feedback/Card.jsx":"46bf3e91e3b9","components/forms/Button.jsx":"8fb9a468387b","components/forms/Choice.jsx":"6f57c2efb853","components/forms/Fieldset.jsx":"3ff757ef016a","components/forms/Link.jsx":"cc77a41680e6","components/forms/Select.jsx":"2641e9de7e07","components/forms/TextInput.jsx":"4fcbbdaab10c","components/foundation/Icon.jsx":"3e1ae9e4b8a5","components/media/MediaPlayer.jsx":"284ff0a3a483","components/navigation/SkipLink.jsx":"bcca0939b997","components/navigation/TopNav.jsx":"c339f2fe042e","ui_kits/intranet/AppShell.jsx":"6f2743f7b561","ui_kits/intranet/HRPortal.jsx":"b072b3ff1daf","ui_kits/intranet/HomePage.jsx":"e882530d087f","ui_kits/intranet/ITSupport.jsx":"c48336b63b48","ui_kits/intranet/Training.jsx":"5b79da8ab2b6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GlobalTechAccessibleDS_ff3d6f = window.GlobalTechAccessibleDS_ff3d6f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/foundation/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Icon set — Lucide (ISC licensed) path data, inlined so components stay
   self-contained. 24×24 viewBox, 2px stroke, round caps/joins.
   Decorative by default (aria-hidden); pass `title` to expose an
   accessible name when the icon carries meaning on its own.

   NB: every glyph is a lazy render function so no JSX is evaluated at
   module-import time (which would call React.createElement before React
   is in scope in the bundler context). They run only inside Icon(). */

const STROKE = {
  check: () => /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }),
  x: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12"
  })),
  "chevron-down": () => /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }),
  "chevron-right": () => /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  }),
  "chevron-left": () => /*#__PURE__*/React.createElement("path", {
    d: "m15 18-6-6 6-6"
  }),
  "arrow-left": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m12 19-7-7 7-7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 12H5"
  })),
  "arrow-right": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 5 7 7-7 7"
  })),
  info: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 16v-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8h.01"
  })),
  "circle-check": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 12 2 2 4-4"
  })),
  "circle-x": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m15 9-6 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 9 6 6"
  })),
  "alert-triangle": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 17h.01"
  })),
  search: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })),
  "external-link": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M15 3h6v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 14 21 3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
  })),
  menu: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 12h16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 6h16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 18h16"
  })),
  user: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
  })),
  "volume-2": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11 4.7a.7.7 0 0 0-1.2-.5L6 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3l3.8 3.8a.7.7 0 0 0 1.2-.5Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 9a5 5 0 0 1 0 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.4 5.6a10 10 0 0 1 0 12.8"
  })),
  "volume-x": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11 4.7a.7.7 0 0 0-1.2-.5L6 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3l3.8 3.8a.7.7 0 0 0 1.2-.5Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22 9-6 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m16 9 6 6"
  })),
  captions: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "5",
    width: "20",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 15h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 15h2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11h2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 11h4"
  })),
  maximize: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8 3H5a2 2 0 0 0-2 2v3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 8V5a2 2 0 0 0-2-2h-3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 16v3a2 2 0 0 0 2 2h3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 21h3a2 2 0 0 0 2-2v-3"
  })),
  settings: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  })),
  home: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 22V12h6v10"
  })),
  "log-out": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m16 17 5-5-5-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12H9"
  })),
  bell: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
  })),
  calendar: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8 2v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 2v4"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 10h18"
  })),
  file: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 2v5h5"
  })),
  clock: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 6v6l4 2"
  })),
  "help-circle": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 17h.01"
  })),
  book: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
  })),
  laptop: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.054 15.987H3.946"
  })),
  ticket: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 5v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 17v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 11v2"
  })),
  lock: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "11",
    width: "18",
    height: "11",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4"
  })),
  mail: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
  }))
};
const FILLED = {
  play: () => /*#__PURE__*/React.createElement("path", {
    d: "M6 3.5v17a1 1 0 0 0 1.54.84l13-8.5a1 1 0 0 0 0-1.68l-13-8.5A1 1 0 0 0 6 3.5Z"
  }),
  pause: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "4",
    width: "4",
    height: "16",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "4",
    width: "4",
    height: "16",
    rx: "1"
  }))
};
function Icon({
  name,
  size = 24,
  title,
  className,
  style,
  strokeWidth = 2,
  ...rest
}) {
  const filled = name in FILLED;
  const render = filled ? FILLED[name] : STROKE[name];
  const decorative = !title;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: filled ? "currentColor" : "none",
    stroke: filled ? "none" : "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    style: {
      flex: "0 0 auto",
      display: "inline-block",
      verticalAlign: "middle",
      ...style
    },
    role: decorative ? undefined : "img",
    "aria-hidden": decorative ? "true" : undefined,
    "aria-label": title || undefined,
    focusable: "false"
  }, rest), title ? /*#__PURE__*/React.createElement("title", null, title) : null, render ? render() : null);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/Icon.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Alert — role="alert" (assertive) or role="status" (polite) banner.
   Icon + text; optional heading; optional dismiss. Colour reinforced by
   icon and a strong left keyline + label text. */

const tones = {
  info: {
    fg: "var(--color-info)",
    bg: "var(--color-info-surface)",
    border: "var(--color-info-border)",
    icon: "info",
    label: "Information"
  },
  success: {
    fg: "var(--color-success)",
    bg: "var(--color-success-surface)",
    border: "var(--color-success-border)",
    icon: "circle-check",
    label: "Success"
  },
  warning: {
    fg: "var(--color-warning)",
    bg: "var(--color-warning-surface)",
    border: "var(--color-warning-border)",
    icon: "alert-triangle",
    label: "Warning"
  },
  error: {
    fg: "var(--color-error)",
    bg: "var(--color-error-surface)",
    border: "var(--color-error-border)",
    icon: "circle-x",
    label: "Error"
  }
};
function Alert({
  tone = "info",
  title,
  children,
  onDismiss,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.info;
  const assertive = tone === "error" || tone === "warning";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: assertive ? "alert" : "status",
    style: {
      display: "flex",
      gap: "var(--space-3)",
      padding: "var(--space-4)",
      background: t.bg,
      border: `var(--border-width) solid ${t.border}`,
      borderLeft: `6px solid ${t.border}`,
      borderRadius: "var(--radius-md)",
      color: "var(--text-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 24,
    style: {
      color: t.fg,
      marginTop: "1px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-body-size)",
      fontWeight: "var(--font-weight-bold)",
      color: t.fg
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "gt-visually-hidden"
  }, t.label, ": "), title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: title ? "var(--space-1) 0 0" : 0,
      fontSize: "var(--text-body-size)",
      color: "var(--text-body)"
    }
  }, children)), onDismiss ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onDismiss,
    "aria-label": "Dismiss this message",
    style: {
      flex: "0 0 auto",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "var(--target-min)",
      height: "var(--target-min)",
      margin: "calc(var(--space-2) * -1)",
      background: "transparent",
      border: "none",
      borderRadius: "var(--radius-md)",
      color: "var(--text-body)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 20
  })) : null);
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Badge — status pill that ALWAYS pairs an icon + text label; colour is
   reinforcement, never the sole signal. Meets 4.5:1 text on its surface. */

const tones = {
  neutral: {
    fg: "var(--color-ink-soft)",
    bg: "var(--color-surface-sunken)",
    border: "var(--color-border)",
    icon: "info"
  },
  info: {
    fg: "var(--color-info)",
    bg: "var(--color-info-surface)",
    border: "var(--color-info-border)",
    icon: "info"
  },
  success: {
    fg: "var(--color-success)",
    bg: "var(--color-success-surface)",
    border: "var(--color-success-border)",
    icon: "circle-check"
  },
  warning: {
    fg: "var(--color-warning)",
    bg: "var(--color-warning-surface)",
    border: "var(--color-warning-border)",
    icon: "alert-triangle"
  },
  error: {
    fg: "var(--color-error)",
    bg: "var(--color-error-surface)",
    border: "var(--color-error-border)",
    icon: "circle-x"
  }
};
function Badge({
  tone = "neutral",
  icon,
  children,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-1)",
      padding: "2px var(--space-2)",
      minHeight: "24px",
      fontSize: "var(--text-small-size)",
      fontWeight: "var(--font-weight-semibold)",
      lineHeight: 1.3,
      color: t.fg,
      background: t.bg,
      border: `var(--border-width) solid ${t.border}`,
      borderRadius: "var(--radius-pill)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || t.icon,
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Card — neutral content container. When `href`/`onClick` is set it becomes
   a single interactive block with a heading-anchored link (the whole card is
   clickable, but only the title is the accessible link — no nested targets). */

function Card({
  title,
  titleAs = "h3",
  icon,
  href,
  onClick,
  children,
  footer,
  style,
  ...rest
}) {
  const interactive = Boolean(href || onClick);
  const [hover, setHover] = React.useState(false);
  const Heading = titleAs;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      padding: "var(--space-6)",
      background: "var(--surface-card)",
      border: `var(--border-width) solid ${hover && interactive ? "var(--color-primary)" : "var(--border-divider)"}`,
      borderRadius: "var(--radius-lg)",
      boxShadow: hover && interactive ? "var(--shadow-md)" : "var(--shadow-sm)",
      transition: "border-color 120ms ease, box-shadow 120ms ease",
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), title ? /*#__PURE__*/React.createElement(Heading, {
    style: {
      margin: 0,
      fontSize: "var(--text-h3-size)",
      fontWeight: "var(--font-weight-semibold)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)"
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22,
    style: {
      color: "var(--color-primary)"
    }
  }) : null, interactive ? /*#__PURE__*/React.createElement("a", {
    href: href || "#",
    onClick: onClick,
    style: {
      color: "var(--text-body)",
      textDecoration: "none"
    },
    onFocus: () => setHover(true),
    onBlur: () => setHover(false)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      textDecoration: hover ? "underline" : "none",
      textUnderlineOffset: "2px"
    }
  }, title)) : /*#__PURE__*/React.createElement("span", null, title)) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-body)"
    }
  }, children) : null, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-2)"
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Button — primary / secondary / text variants.
   ≥44px target, always a visible text label, full state coverage
   (default / hover / focus / disabled). Focus handled by the global
   :focus-visible ring; we only add the hover/active/disabled visuals. */

const base = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--space-2)",
  minHeight: "var(--control-height)",
  minWidth: "var(--target-min)",
  padding: "0 var(--space-4)",
  fontFamily: "var(--font-sans)",
  fontSize: "var(--text-body-size)",
  fontWeight: "var(--font-weight-semibold)",
  lineHeight: 1.2,
  borderRadius: "var(--radius-md)",
  border: "var(--border-width-strong) solid transparent",
  cursor: "pointer",
  textDecoration: "none",
  transition: "background-color 120ms ease, border-color 120ms ease, color 120ms ease"
};
const variants = {
  primary: {
    rest: {
      background: "var(--color-primary)",
      color: "var(--color-primary-ink)",
      borderColor: "var(--color-primary)"
    },
    hover: {
      background: "var(--color-primary-hover)",
      borderColor: "var(--color-primary-hover)"
    },
    active: {
      background: "var(--color-primary-active)",
      borderColor: "var(--color-primary-active)"
    }
  },
  secondary: {
    rest: {
      background: "var(--color-white)",
      color: "var(--color-primary)",
      borderColor: "var(--color-primary)"
    },
    hover: {
      background: "var(--color-info-surface)"
    },
    active: {
      background: "#DCE6FB"
    }
  },
  text: {
    rest: {
      background: "transparent",
      color: "var(--color-primary)",
      borderColor: "transparent",
      textDecoration: "underline",
      textUnderlineOffset: "2px"
    },
    hover: {
      background: "var(--color-info-surface)",
      color: "var(--color-primary-hover)"
    },
    active: {
      background: "#DCE6FB"
    }
  }
};
const disabledStyle = {
  background: "var(--color-disabled-bg)",
  color: "var(--color-disabled-ink)",
  borderColor: "var(--color-disabled-border)",
  cursor: "not-allowed",
  textDecoration: "none"
};
function Button({
  variant = "primary",
  type = "button",
  disabled = false,
  iconLeft,
  iconRight,
  href,
  children,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const composed = {
    ...base,
    ...v.rest,
    ...(hover && !disabled ? v.hover : null),
    ...(active && !disabled ? v.active : null),
    ...(disabled ? disabledStyle : null),
    ...style
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 20
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: "nowrap"
    }
  }, children), iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: 20
  }) : null);
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  };
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: composed,
      onClick: onClick
    }, handlers, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    "aria-disabled": disabled || undefined,
    onClick: onClick,
    style: composed
  }, handlers, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Choice.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Checkbox & Radio — 24px control, whole label clickable, ≥44px row target.
   The native input is visually hidden but focusable; we draw the box and
   render the global focus ring on the visual box via :has / focus-within.
   Because inline styles can't express focus-within, we track focus in state. */

let uid = 0;
function useId(prefix) {
  const [id] = React.useState(() => `${prefix}-${++uid}`);
  return id;
}
function Choice({
  kind,
  label,
  checked,
  onChange,
  name,
  value,
  disabled = false,
  style,
  ...rest
}) {
  const id = useId(`gt-${kind}`);
  const [focus, setFocus] = React.useState(false);
  const isRadio = kind === "radio";
  const boxStyle = {
    position: "relative",
    flex: "0 0 auto",
    width: "var(--control-choice)",
    height: "var(--control-choice)",
    borderRadius: isRadio ? "var(--radius-pill)" : "var(--radius-sm)",
    border: `var(--border-width-strong) solid ${disabled ? "var(--color-disabled-border)" : checked ? "var(--color-primary)" : "var(--border-field)"}`,
    background: disabled ? "var(--color-disabled-bg)" : checked ? "var(--color-primary)" : "var(--color-white)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--color-primary-ink)",
    // focus ring drawn here since the real input is visually hidden
    outline: focus ? "var(--focus-outline)" : "none",
    outlineOffset: "var(--focus-ring-offset)",
    boxShadow: focus ? "var(--focus-halo)" : "none",
    transition: "background-color 120ms ease, border-color 120ms ease"
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      minHeight: "var(--target-min)",
      padding: "var(--space-2) 0",
      cursor: disabled ? "not-allowed" : "pointer",
      color: disabled ? "var(--color-disabled-ink)" : "var(--text-body)",
      fontSize: "var(--text-body-size)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: isRadio ? "radio" : "checkbox",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    className: "gt-visually-hidden"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: boxStyle,
    "aria-hidden": "true"
  }, checked && !isRadio ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 18,
    strokeWidth: 3
  }) : null, checked && isRadio ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: "10px",
      height: "10px",
      borderRadius: "var(--radius-pill)",
      background: "var(--color-primary-ink)"
    }
  }) : null), /*#__PURE__*/React.createElement("span", null, label));
}
function Checkbox(props) {
  return /*#__PURE__*/React.createElement(Choice, _extends({
    kind: "checkbox"
  }, props));
}
function Radio(props) {
  return /*#__PURE__*/React.createElement(Choice, _extends({
    kind: "radio"
  }, props));
}
Object.assign(__ds_scope, { Choice, Checkbox, Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Choice.jsx", error: String((e && e.message) || e) }); }

// components/forms/Fieldset.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Fieldset — groups related controls (checkbox/radio sets) with a
   <legend>. Supports group-level help + error, wired via aria-describedby
   on the fieldset. */

let uid = 0;
function useId(prefix) {
  const [id] = React.useState(() => `${prefix}-${++uid}`);
  return id;
}
function Fieldset({
  legend,
  help,
  error,
  required = false,
  children,
  style,
  ...rest
}) {
  const id = useId("gt-fieldset");
  const helpId = `${id}-help`;
  const errorId = `${id}-error`;
  const describedBy = [help ? helpId : null, error ? errorId : null].filter(Boolean).join(" ") || undefined;
  return /*#__PURE__*/React.createElement("fieldset", _extends({
    "aria-describedby": describedBy,
    "aria-invalid": error ? "true" : undefined,
    style: {
      border: "none",
      margin: 0,
      padding: 0,
      minInlineSize: "auto",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("legend", {
    style: {
      padding: 0,
      fontSize: "var(--text-h3-size)",
      fontWeight: "var(--font-weight-semibold)",
      color: "var(--text-body)",
      marginBottom: "var(--space-1)"
    }
  }, legend, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-error)",
      fontWeight: "var(--font-weight-semibold)"
    }
  }, " (required)") : null), help ? /*#__PURE__*/React.createElement("p", {
    id: helpId,
    style: {
      margin: "0 0 var(--space-2)",
      fontSize: "var(--text-small-size)",
      color: "var(--text-muted)"
    }
  }, help) : null, error ? /*#__PURE__*/React.createElement("p", {
    id: errorId,
    role: "alert",
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: "var(--space-1)",
      margin: "0 0 var(--space-2)",
      fontSize: "var(--text-small-size)",
      color: "var(--color-error)",
      fontWeight: "var(--font-weight-medium)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-x",
    size: 18,
    style: {
      marginTop: "1px"
    }
  }), /*#__PURE__*/React.createElement("span", null, error)) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1)"
    }
  }, children));
}
Object.assign(__ds_scope, { Fieldset });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Fieldset.jsx", error: String((e && e.message) || e) }); }

// components/forms/Link.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Link — always underlined, descriptive. Adds an "opens in new tab"
   affordance (icon + SR text) when external. Inherits the global focus ring. */

function Link({
  href,
  external = false,
  children,
  style,
  ...rest
}) {
  const linkStyle = {
    color: "var(--color-link)",
    textDecoration: "underline",
    textUnderlineOffset: "2px",
    fontWeight: "var(--font-weight-medium)",
    display: "inline",
    ...style
  };
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: linkStyle,
    target: external ? "_blank" : undefined,
    rel: external ? "noopener noreferrer" : undefined
  }, rest), children, external ? /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "external-link",
    size: 16,
    style: {
      verticalAlign: "-2px"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "gt-visually-hidden"
  }, " (opens in a new tab)")) : null);
}
Object.assign(__ds_scope, { Link });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Link.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Select — native <select> (no custom listbox widget), visible label above,
   help + error support, custom chevron drawn with the Icon set. */

let uid = 0;
function useId(prefix) {
  const [id] = React.useState(() => `${prefix}-${++uid}`);
  return id;
}
function Select({
  label,
  value,
  onChange,
  options = [],
  help,
  error,
  required = false,
  disabled = false,
  placeholder,
  id,
  style,
  ...rest
}) {
  const auto = useId("gt-select");
  const selectId = id || auto;
  const helpId = `${selectId}-help`;
  const errorId = `${selectId}-error`;
  const describedBy = [help ? helpId : null, error ? errorId : null].filter(Boolean).join(" ") || undefined;
  const selectStyle = {
    width: "100%",
    minHeight: "var(--control-height)",
    padding: "var(--space-2) var(--space-8) var(--space-2) var(--space-3)",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-body-size)",
    color: "var(--text-body)",
    background: disabled ? "var(--color-disabled-bg)" : "var(--color-white)",
    border: `var(--border-width-strong) solid ${error ? "var(--color-error-border)" : "var(--border-field)"}`,
    borderRadius: "var(--radius-md)",
    appearance: "none",
    WebkitAppearance: "none",
    cursor: disabled ? "not-allowed" : "pointer"
  };
  const norm = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      fontSize: "var(--text-label-size)",
      fontWeight: "var(--text-label-weight)",
      color: "var(--text-body)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-error)"
    }
  }, " (required)") : null), help ? /*#__PURE__*/React.createElement("span", {
    id: helpId,
    style: {
      fontSize: "var(--text-small-size)",
      color: "var(--text-muted)"
    }
  }, help) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    value: value,
    onChange: onChange,
    disabled: disabled,
    required: required,
    "aria-required": required || undefined,
    "aria-invalid": error ? "true" : undefined,
    "aria-describedby": describedBy,
    style: selectStyle
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder) : null, norm.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 20,
    style: {
      position: "absolute",
      right: "var(--space-3)",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: disabled ? "var(--color-disabled-ink)" : "var(--text-body)"
    }
  })), error ? /*#__PURE__*/React.createElement("span", {
    id: errorId,
    role: "alert",
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: "var(--space-1)",
      fontSize: "var(--text-small-size)",
      color: "var(--color-error)",
      fontWeight: "var(--font-weight-medium)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-x",
    size: 18,
    style: {
      marginTop: "1px"
    }
  }), /*#__PURE__*/React.createElement("span", null, error)) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* TextInput — visible label above, optional help text, error state with
   red border + icon + message. Required marked with text, not colour alone.
   Wires label/help/error via aria-describedby + aria-invalid. */

let uid = 0;
function useId(prefix) {
  const [id] = React.useState(() => `${prefix}-${++uid}`);
  return id;
}
function TextInput({
  label,
  value,
  onChange,
  type = "text",
  help,
  error,
  required = false,
  disabled = false,
  placeholder,
  id,
  style,
  ...rest
}) {
  const auto = useId("gt-input");
  const inputId = id || auto;
  const helpId = `${inputId}-help`;
  const errorId = `${inputId}-error`;
  const describedBy = [help ? helpId : null, error ? errorId : null].filter(Boolean).join(" ") || undefined;
  const inputStyle = {
    width: "100%",
    minHeight: "var(--control-height)",
    padding: "var(--space-2) var(--space-3)",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-body-size)",
    lineHeight: 1.4,
    color: "var(--text-body)",
    background: disabled ? "var(--color-disabled-bg)" : "var(--color-white)",
    border: `var(--border-width-strong) solid ${error ? "var(--color-error-border)" : "var(--border-field)"}`,
    borderRadius: "var(--radius-md)",
    cursor: disabled ? "not-allowed" : "text"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: "var(--text-label-size)",
      fontWeight: "var(--text-label-weight)",
      color: "var(--text-body)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-error)",
      fontWeight: "var(--font-weight-semibold)"
    }
  }, " (required)") : null), help ? /*#__PURE__*/React.createElement("span", {
    id: helpId,
    style: {
      fontSize: "var(--text-small-size)",
      color: "var(--text-muted)"
    }
  }, help) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    required: required,
    "aria-required": required || undefined,
    "aria-invalid": error ? "true" : undefined,
    "aria-describedby": describedBy,
    style: inputStyle
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    id: errorId,
    role: "alert",
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: "var(--space-1)",
      fontSize: "var(--text-small-size)",
      color: "var(--color-error)",
      fontWeight: "var(--font-weight-medium)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-x",
    size: 18,
    style: {
      marginTop: "1px"
    }
  }), /*#__PURE__*/React.createElement("span", null, error)) : null);
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/media/MediaPlayer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* MediaPlayer — accessible video wrapper. Native-quality custom controls
   that are fully keyboard operable, each a ≥44px button with a text/aria
   label. Captions toggle included. NEVER autoplays. Honours reduced-motion
   by not animating. Progress is a native <input type=range> (slider) with
   aria labels and time readout. */

function fmt(t) {
  if (!isFinite(t)) return "0:00";
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}
const ctrlBtn = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--space-1)",
  minWidth: "var(--target-min)",
  height: "var(--target-min)",
  padding: "0 var(--space-2)",
  background: "transparent",
  border: "var(--border-width-strong) solid transparent",
  borderRadius: "var(--radius-md)",
  color: "var(--color-white)",
  cursor: "pointer",
  fontFamily: "var(--font-sans)",
  fontSize: "var(--text-small-size)",
  fontWeight: "var(--font-weight-semibold)"
};
function MediaPlayer({
  src,
  poster,
  captionsSrc,
  captionsLang = "en",
  captionsLabel = "English captions",
  title = "Video",
  style,
  ...rest
}) {
  const videoRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);
  const [muted, setMuted] = React.useState(false);
  const [captions, setCaptions] = React.useState(false);
  const [time, setTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTime = () => setTime(v.currentTime);
    const onMeta = () => setDuration(v.duration);
    const onEnd = () => setPlaying(false);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("loadedmetadata", onMeta);
    v.addEventListener("ended", onEnd);
    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("loadedmetadata", onMeta);
      v.removeEventListener("ended", onEnd);
    };
  }, []);
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v || !v.textTracks || !v.textTracks[0]) return;
    v.textTracks[0].mode = captions ? "showing" : "hidden";
  }, [captions]);
  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };
  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };
  const seek = e => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = Number(e.target.value);
    setTime(v.currentTime);
  };
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      border: "var(--border-width) solid var(--color-border)",
      background: "#000",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("video", {
    ref: videoRef,
    src: src,
    poster: poster,
    preload: "metadata",
    playsInline: true,
    style: {
      display: "block",
      width: "100%",
      height: "auto",
      background: "#000"
    },
    "aria-label": title
  }, captionsSrc ? /*#__PURE__*/React.createElement("track", {
    kind: "captions",
    src: captionsSrc,
    srcLang: captionsLang,
    label: captionsLabel,
    default: false
  }) : null), /*#__PURE__*/React.createElement("figcaption", {
    className: "gt-visually-hidden"
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: "var(--space-2) var(--space-3)",
      background: "#111418",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: togglePlay,
    style: ctrlBtn,
    "aria-label": playing ? "Pause" : "Play"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: playing ? "pause" : "play",
    size: 22
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-white)",
      fontSize: "var(--text-small-size)",
      fontVariantNumeric: "tabular-nums",
      minWidth: "88px",
      textAlign: "center"
    }
  }, fmt(time), " / ", fmt(duration)), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: 0,
    max: duration || 0,
    step: "any",
    value: time,
    onChange: seek,
    "aria-label": "Seek",
    "aria-valuetext": `${fmt(time)} of ${fmt(duration)}`,
    style: {
      flex: 1,
      minWidth: "120px",
      height: "var(--target-min)",
      accentColor: "#5B9BFF",
      cursor: "pointer"
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: toggleMute,
    style: ctrlBtn,
    "aria-label": muted ? "Unmute" : "Mute"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: muted ? "volume-x" : "volume-2",
    size: 22
  })), captionsSrc ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setCaptions(c => !c),
    "aria-pressed": captions,
    style: {
      ...ctrlBtn,
      borderColor: captions ? "#5B9BFF" : "transparent",
      background: captions ? "rgba(91,155,255,0.18)" : "transparent"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "captions",
    size: 22
  }), /*#__PURE__*/React.createElement("span", null, "CC ", captions ? "on" : "off")) : null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => videoRef.current?.requestFullscreen?.(),
    style: ctrlBtn,
    "aria-label": "Full screen"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "maximize",
    size: 20
  }))));
}
Object.assign(__ds_scope, { MediaPlayer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/MediaPlayer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SkipLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* SkipLink — first focusable element on the page. Visually hidden until
   focused, then slides into view. Points at the id of the <main>. */

function SkipLink({
  targetId = "main-content",
  children = "Skip to main content",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: `#${targetId}`,
    className: "gt-skip-link",
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { SkipLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SkipLink.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* TopNav — landmark <header> + <nav>. Current page marked THREE ways:
   bold + underline + aria-current="page" (never colour alone).
   Includes brand, primary links, and an optional right-side slot.
   Collapses to a disclosure menu button under `mobile`. */

function NavLink({
  item,
  current,
  onNavigate
}) {
  const isCurrent = current === item.id;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: item.href,
    "aria-current": isCurrent ? "page" : undefined,
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(item.id);
      }
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      minHeight: "var(--target-min)",
      padding: "0 var(--space-3)",
      color: "var(--text-body)",
      fontSize: "var(--text-body-size)",
      fontWeight: isCurrent ? "var(--font-weight-bold)" : "var(--font-weight-medium)",
      textDecoration: isCurrent || hover ? "underline" : "none",
      textUnderlineOffset: "4px",
      textDecorationThickness: isCurrent ? "3px" : "2px",
      borderRadius: "var(--radius-sm)"
    }
  }, item.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: item.icon,
    size: 20
  }) : null, /*#__PURE__*/React.createElement("span", null, item.label));
}
function TopNav({
  brand = "GlobalTech",
  brandHref = "/",
  items = [],
  current,
  actions,
  onNavigate,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      background: "var(--color-white)",
      borderBottom: "var(--border-width) solid var(--color-border)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      padding: "0 var(--layout-gutter)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      minHeight: "64px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: brandHref,
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate("home");
      }
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      color: "var(--text-body)",
      textDecoration: "none",
      fontWeight: "var(--font-weight-bold)",
      fontSize: "var(--text-h3-size)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "32px",
      height: "32px",
      background: "var(--color-primary)",
      color: "var(--color-primary-ink)",
      borderRadius: "var(--radius-md)",
      fontWeight: 700,
      fontSize: "1rem"
    }
  }, "G"), brand), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Primary",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-1)",
      marginLeft: "var(--space-4)"
    },
    className: "gt-nav-desktop"
  }, items.map(it => /*#__PURE__*/React.createElement(NavLink, {
    key: it.id,
    item: it,
    current: current,
    onNavigate: onNavigate
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)"
    }
  }, actions, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "gt-nav-toggle",
    "aria-expanded": open,
    "aria-controls": "gt-nav-mobile",
    onClick: () => setOpen(o => !o),
    style: {
      display: "none",
      alignItems: "center",
      gap: "var(--space-2)",
      minHeight: "var(--target-min)",
      padding: "0 var(--space-3)",
      background: "var(--color-white)",
      border: "var(--border-width-strong) solid var(--border-field)",
      borderRadius: "var(--radius-md)",
      color: "var(--text-body)",
      fontWeight: "var(--font-weight-semibold)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? "x" : "menu",
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, "Menu")))), open ? /*#__PURE__*/React.createElement("nav", {
    id: "gt-nav-mobile",
    "aria-label": "Primary",
    style: {
      borderTop: "var(--border-width) solid var(--border-divider)",
      padding: "var(--space-2) var(--layout-gutter)"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      borderBottom: "var(--border-width) solid var(--border-divider)"
    }
  }, /*#__PURE__*/React.createElement(NavLink, {
    item: it,
    current: current,
    onNavigate: onNavigate
  })))) : null, /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 720px) {
          .gt-nav-desktop { display: none !important; }
          .gt-nav-toggle { display: inline-flex !important; }
        }
      `));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/intranet/AppShell.jsx
try { (() => {
(function () {
  const {
    TopNav,
    SkipLink
  } = window.GlobalTechAccessibleDS_ff3d6f;
  const NAV_ITEMS = [{
    id: "home",
    label: "Home",
    href: "#home",
    icon: "home"
  }, {
    id: "hr",
    label: "HR Portal",
    href: "#hr",
    icon: "user"
  }, {
    id: "it",
    label: "IT Support",
    href: "#it",
    icon: "laptop"
  }, {
    id: "learn",
    label: "Training",
    href: "#learn",
    icon: "book"
  }];
  function AppShell({
    current = "home",
    children,
    onNavigate
  }) {
    const {
      Button
    } = window.GlobalTechAccessibleDS_ff3d6f;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: "100%",
        background: "var(--surface-page)",
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement(SkipLink, {
      targetId: "main-content"
    }), /*#__PURE__*/React.createElement(TopNav, {
      brand: "GlobalTech",
      current: current,
      items: NAV_ITEMS,
      onNavigate: onNavigate,
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        iconLeft: "user",
        onClick: () => onNavigate && onNavigate("hr")
      }, "ABC N.")
    }), children, /*#__PURE__*/React.createElement("footer", {
      style: {
        marginTop: "auto",
        background: "var(--color-surface-alt)",
        borderTop: "var(--border-width) solid var(--color-border)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--layout-max)",
        margin: "0 auto",
        padding: "var(--space-6) var(--layout-gutter)",
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--space-6)",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "var(--text-small-size)",
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, "\xA9 GlobalTech Inc. \u2014 Internal use only."), /*#__PURE__*/React.createElement("nav", {
      "aria-label": "Footer"
    }, /*#__PURE__*/React.createElement("ul", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--space-4)",
        listStyle: "none",
        margin: 0,
        padding: 0
      }
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "Accessibility statement")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "IT security policy")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "Contact the service desk")))))));
  }
  window.AppShell = AppShell;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/intranet/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/intranet/HRPortal.jsx
try { (() => {
(function () {
  const NS = () => window.GlobalTechAccessibleDS_ff3d6f;
  const AppShell = window.AppShell;
  function Breadcrumb({
    items,
    onNavigate
  }) {
    const target = label => label === "Home" ? "home" : label === "HR Portal" ? "hr" : null;
    return /*#__PURE__*/React.createElement("nav", {
      "aria-label": "Breadcrumb",
      style: {
        marginBottom: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("ol", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--space-2)",
        listStyle: "none",
        margin: 0,
        padding: 0,
        fontSize: "var(--text-small-size)"
      }
    }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "flex",
        gap: "var(--space-2)",
        alignItems: "center"
      }
    }, i > 0 ? /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        color: "var(--text-muted)"
      }
    }, "/") : null, i < items.length - 1 ? /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        const t = target(it);
        if (t && onNavigate) {
          e.preventDefault();
          onNavigate(t);
        }
      }
    }, it) : /*#__PURE__*/React.createElement("span", {
      "aria-current": "page",
      style: {
        color: "var(--text-muted)"
      }
    }, it)))));
  }
  function LeaveForm() {
    const {
      TextInput,
      Select,
      Fieldset,
      Radio,
      Checkbox,
      Button,
      Alert
    } = NS();
    const [type, setType] = React.useState("");
    const [kind, setKind] = React.useState("full");
    const [start, setStart] = React.useState("");
    const [ack, setAck] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);
    const [errors, setErrors] = React.useState({});
    const submit = e => {
      e.preventDefault();
      const errs = {};
      if (!type) errs.type = "Choose a leave type";
      if (!start) errs.start = "Enter a start date";
      if (!ack) errs.ack = "You must confirm before submitting";
      setErrors(errs);
      if (Object.keys(errs).length === 0) {
        setSubmitted(true);
      } else {
        setSubmitted(false);
      }
    };
    return /*#__PURE__*/React.createElement("form", {
      onSubmit: submit,
      noValidate: true,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)",
        maxWidth: "40rem"
      }
    }, submitted ? /*#__PURE__*/React.createElement(Alert, {
      tone: "success",
      title: "Leave request submitted"
    }, "Your manager, Dele Okafor, has been notified for approval.") : null, !submitted && Object.keys(errors).length ? /*#__PURE__*/React.createElement(Alert, {
      tone: "error",
      title: `There ${Object.keys(errors).length === 1 ? "is 1 problem" : `are ${Object.keys(errors).length} problems`} with your request`
    }, "Review the highlighted fields below.") : null, /*#__PURE__*/React.createElement(Select, {
      label: "Leave type",
      required: true,
      placeholder: "Choose a type",
      options: [{
        value: "annual",
        label: "Annual leave"
      }, {
        value: "sick",
        label: "Sick leave"
      }, {
        value: "parental",
        label: "Parental leave"
      }, {
        value: "unpaid",
        label: "Unpaid leave"
      }],
      value: type,
      onChange: e => setType(e.target.value),
      error: errors.type
    }), /*#__PURE__*/React.createElement(Fieldset, {
      legend: "Duration"
    }, /*#__PURE__*/React.createElement(Radio, {
      name: "kind",
      value: "full",
      label: "Full days",
      checked: kind === "full",
      onChange: () => setKind("full")
    }), /*#__PURE__*/React.createElement(Radio, {
      name: "kind",
      value: "half",
      label: "Half day",
      checked: kind === "half",
      onChange: () => setKind("half")
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(TextInput, {
      label: "Start date",
      type: "date",
      required: true,
      value: start,
      onChange: e => setStart(e.target.value),
      error: errors.start
    }), /*#__PURE__*/React.createElement(TextInput, {
      label: "End date",
      type: "date",
      value: "",
      onChange: () => {},
      help: "Leave blank for a single day"
    })), /*#__PURE__*/React.createElement(TextInput, {
      label: "Note for your manager",
      value: "",
      onChange: () => {},
      help: "Optional \u2014 add any context for the approver"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Checkbox, {
      label: "I confirm my team is covered for these dates",
      checked: ack,
      onChange: e => setAck(e.target.checked)
    }), errors.ack ? /*#__PURE__*/React.createElement("p", {
      role: "alert",
      style: {
        margin: "0 0 0 36px",
        color: "var(--color-error)",
        fontSize: "var(--text-small-size)",
        fontWeight: 500
      }
    }, errors.ack) : null), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      type: "submit"
    }, "Submit request"), /*#__PURE__*/React.createElement(Button, {
      type: "button",
      variant: "text"
    }, "Save as draft")));
  }
  function Balances() {
    const {
      Card,
      Badge
    } = NS();
    const rows = [{
      label: "Annual leave",
      value: "14.5 days",
      note: "of 25",
      tone: null
    }, {
      label: "Sick leave",
      value: "Unlimited",
      note: "policy",
      tone: null
    }, {
      label: "Pending approval",
      value: "2 requests",
      note: null,
      tone: /*#__PURE__*/React.createElement(Badge, {
        tone: "info"
      }, "Awaiting")
    }];
    return /*#__PURE__*/React.createElement("aside", {
      "aria-labelledby": "balance-heading",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      id: "balance-heading",
      style: {
        fontSize: "var(--text-h3-size)"
      }
    }, "Your balances"), rows.map((r, i) => /*#__PURE__*/React.createElement(Card, {
      key: i,
      style: {
        padding: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: "var(--space-2)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-muted)",
        fontSize: "var(--text-small-size)"
      }
    }, r.label), r.tone), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: "var(--space-2)",
        marginTop: "var(--space-1)"
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontSize: "var(--text-h2-size)"
      }
    }, r.value), r.note ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-muted)",
        fontSize: "var(--text-small-size)"
      }
    }, r.note) : null))));
  }
  function HRPortal({
    onNavigate = () => {}
  }) {
    return /*#__PURE__*/React.createElement(AppShell, {
      current: "hr",
      onNavigate: onNavigate
    }, /*#__PURE__*/React.createElement("main", {
      id: "main-content",
      tabIndex: -1,
      style: {
        maxWidth: "var(--layout-max)",
        margin: "0 auto",
        padding: "var(--space-8) var(--layout-gutter)",
        width: "100%",
        boxSizing: "border-box"
      }
    }, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: ["Home", "HR Portal", "Request leave"],
      onNavigate: onNavigate
    }), /*#__PURE__*/React.createElement("h1", {
      style: {
        marginBottom: "var(--space-6)"
      }
    }, "Request leave"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,2fr) minmax(240px,1fr)",
        gap: "var(--space-12)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(LeaveForm, null), /*#__PURE__*/React.createElement(Balances, null))));
  }
  window.HRPortal = HRPortal;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/intranet/HRPortal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/intranet/HomePage.jsx
try { (() => {
(function () {
  const NS = () => window.GlobalTechAccessibleDS_ff3d6f;
  const AppShell = window.AppShell;
  function Hero({
    onNavigate
  }) {
    const {
      Button,
      Icon
    } = NS();
    return /*#__PURE__*/React.createElement("section", {
      "aria-labelledby": "welcome-heading",
      style: {
        background: "var(--color-surface-alt)",
        borderBottom: "var(--border-width) solid var(--border-divider)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--layout-max)",
        margin: "0 auto",
        padding: "var(--space-12) var(--layout-gutter)",
        display: "grid",
        gridTemplateColumns: "minmax(0,1.3fr) minmax(0,1fr)",
        gap: "var(--space-12)",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 var(--space-2)",
        fontSize: "var(--text-small-size)",
        fontWeight: 600,
        letterSpacing: ".04em",
        textTransform: "uppercase",
        color: "var(--text-muted)"
      }
    }, "Tuesday, 1 July 2026"), /*#__PURE__*/React.createElement("h1", {
      id: "welcome-heading",
      style: {
        margin: "0 0 var(--space-3)"
      }
    }, "Welcome back, ABC"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 var(--space-6)",
        fontSize: "var(--text-lead-size)",
        color: "var(--text-body)"
      }
    }, "Everything you need for your workday at GlobalTech \u2014 HR, IT support and training, in one place."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      iconLeft: "calendar",
      onClick: () => onNavigate("hr")
    }, "Request time off"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconLeft: "ticket",
      onClick: () => onNavigate("it")
    }, "Raise an IT ticket"))), /*#__PURE__*/React.createElement("form", {
      role: "search",
      "aria-label": "Search the intranet",
      onSubmit: e => e.preventDefault(),
      style: {
        background: "var(--surface-card)",
        border: "var(--border-width) solid var(--border-divider)",
        borderRadius: "var(--radius-lg)",
        padding: "var(--space-6)",
        boxShadow: "var(--shadow-sm)"
      }
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "global-search",
      style: {
        display: "block",
        fontSize: "var(--text-label-size)",
        fontWeight: 600,
        marginBottom: "var(--space-2)"
      }
    }, "Search GlobalTech"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-2)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        flex: 1,
        display: "flex"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 20,
      style: {
        position: "absolute",
        left: "12px",
        top: "50%",
        transform: "translateY(-50%)",
        color: "var(--text-muted)"
      }
    }), /*#__PURE__*/React.createElement("input", {
      id: "global-search",
      type: "search",
      placeholder: "People, policies, apps\u2026",
      style: {
        width: "100%",
        minHeight: "var(--control-height)",
        padding: "0 var(--space-3) 0 40px",
        fontSize: "var(--text-body-size)",
        border: "var(--border-width-strong) solid var(--border-field)",
        borderRadius: "var(--radius-md)",
        fontFamily: "var(--font-sans)"
      }
    })), /*#__PURE__*/React.createElement(Button, {
      type: "submit"
    }, "Search")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "var(--space-3) 0 0",
        fontSize: "var(--text-small-size)",
        color: "var(--text-muted)"
      }
    }, "Popular: ", /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "payslips"), ", ", /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "VPN setup"), ", ", /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "org chart")))));
  }
  function QuickLinks({
    onNavigate
  }) {
    const {
      Card,
      Badge
    } = NS();
    const links = [{
      id: "hr",
      icon: "user",
      title: "HR Portal",
      body: "Payslips, benefits, leave and personal details.",
      badge: null
    }, {
      id: "it",
      icon: "laptop",
      title: "IT Support",
      body: "Report an issue, track tickets and reset passwords.",
      badge: /*#__PURE__*/React.createElement(Badge, {
        tone: "info"
      }, "2 open")
    }, {
      id: "learn",
      icon: "book",
      title: "Training",
      body: "Assigned courses, certifications and live sessions.",
      badge: /*#__PURE__*/React.createElement(Badge, {
        tone: "warning"
      }, "1 due")
    }, {
      id: "dir",
      icon: "search",
      title: "People directory",
      body: "Find colleagues, teams and office locations.",
      badge: null
    }];
    return /*#__PURE__*/React.createElement("section", {
      "aria-labelledby": "services-heading"
    }, /*#__PURE__*/React.createElement("h2", {
      id: "services-heading"
    }, "Your services"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
        gap: "var(--space-4)"
      }
    }, links.map(l => /*#__PURE__*/React.createElement(Card, {
      key: l.id,
      title: l.title,
      titleAs: "h3",
      icon: l.icon,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate(l.id === "dir" ? "home" : l.id);
      },
      footer: l.badge
    }, l.body))));
  }
  function Tasks() {
    const {
      Badge,
      Button
    } = NS();
    const rows = [{
      t: "Complete: Annual security awareness",
      meta: "Training · due Fri 4 Jul",
      badge: /*#__PURE__*/React.createElement(Badge, {
        tone: "warning"
      }, "Due soon")
    }, {
      t: "Approve: Timesheet for J. Okafor",
      meta: "HR · submitted 2 days ago",
      badge: /*#__PURE__*/React.createElement(Badge, {
        tone: "info"
      }, "Needs review")
    }, {
      t: "Ticket #4821: VPN drops on Wi-Fi",
      meta: "IT Support · updated 1h ago",
      badge: /*#__PURE__*/React.createElement(Badge, {
        tone: "success"
      }, "In progress")
    }];
    return /*#__PURE__*/React.createElement("section", {
      "aria-labelledby": "tasks-heading"
    }, /*#__PURE__*/React.createElement("h2", {
      id: "tasks-heading"
    }, "Tasks & approvals"), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        margin: 0,
        padding: 0,
        border: "var(--border-width) solid var(--border-divider)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        background: "var(--surface-card)"
      }
    }, rows.map((r, i) => /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-4)",
        padding: "var(--space-4) var(--space-6)",
        borderTop: i ? "var(--border-width) solid var(--border-divider)" : "none",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: "200px"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        color: "var(--text-body)"
      }
    }, r.t)), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "2px 0 0",
        fontSize: "var(--text-small-size)",
        color: "var(--text-muted)"
      }
    }, r.meta)), r.badge, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary"
    }, "Open")))));
  }
  function Announcement() {
    const {
      Alert,
      Link
    } = NS();
    return /*#__PURE__*/React.createElement(Alert, {
      tone: "info",
      title: "Planned maintenance this weekend"
    }, "The HR Portal will be unavailable Saturday 5 Jul, 22:00\u201302:00 BST while we upgrade payroll systems.", " ", /*#__PURE__*/React.createElement(Link, {
      href: "#"
    }, "Read the full notice"), ".");
  }
  function HomePage({
    onNavigate = () => {}
  }) {
    return /*#__PURE__*/React.createElement(AppShell, {
      current: "home",
      onNavigate: onNavigate
    }, /*#__PURE__*/React.createElement("main", {
      id: "main-content",
      tabIndex: -1,
      style: {
        outline: "none"
      }
    }, /*#__PURE__*/React.createElement(Hero, {
      onNavigate: onNavigate
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--layout-max)",
        margin: "0 auto",
        padding: "var(--space-8) var(--layout-gutter)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement(Announcement, null), /*#__PURE__*/React.createElement(QuickLinks, {
      onNavigate: onNavigate
    }), /*#__PURE__*/React.createElement(Tasks, null))));
  }
  window.HomePage = HomePage;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/intranet/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/intranet/ITSupport.jsx
try { (() => {
(function () {
  const NS = () => window.GlobalTechAccessibleDS_ff3d6f;
  const AppShell = window.AppShell;
  function TicketRow({
    id,
    title,
    status,
    updated
  }) {
    const {
      Badge
    } = NS();
    const tone = {
      open: "info",
      progress: "warning",
      resolved: "success"
    }[status.key];
    return /*#__PURE__*/React.createElement("li", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-4)",
        padding: "var(--space-4) var(--space-6)",
        borderTop: "var(--border-width) solid var(--border-divider)",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-small-size)",
        color: "var(--text-muted)",
        minWidth: "84px"
      }
    }, id), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        flex: 1,
        minWidth: "200px",
        color: "var(--text-body)",
        fontWeight: 600
      }
    }, title), /*#__PURE__*/React.createElement(Badge, {
      tone: tone
    }, status.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-small-size)",
        color: "var(--text-muted)",
        minWidth: "110px"
      }
    }, updated));
  }
  function NewTicket() {
    const {
      Select,
      TextInput,
      Button,
      Alert
    } = NS();
    const [cat, setCat] = React.useState("");
    const [summary, setSummary] = React.useState("");
    const [done, setDone] = React.useState(false);
    const [err, setErr] = React.useState({});
    const submit = e => {
      e.preventDefault();
      const errs = {};
      if (!cat) errs.cat = "Choose a category";
      if (!summary.trim()) errs.summary = "Describe the issue in a few words";
      setErr(errs);
      setDone(Object.keys(errs).length === 0);
    };
    return /*#__PURE__*/React.createElement("form", {
      onSubmit: submit,
      noValidate: true,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)"
      }
    }, done ? /*#__PURE__*/React.createElement(Alert, {
      tone: "success",
      title: "Ticket raised"
    }, "Reference TICKET-4839 \u2014 the service desk will respond within 4 business hours.") : null, /*#__PURE__*/React.createElement(Select, {
      label: "Category",
      required: true,
      placeholder: "Choose a category",
      value: cat,
      onChange: e => setCat(e.target.value),
      error: err.cat,
      options: ["Hardware", "Software & licences", "Network / VPN", "Accounts & access", "Something else"]
    }), /*#__PURE__*/React.createElement(TextInput, {
      label: "Short summary",
      required: true,
      value: summary,
      onChange: e => setSummary(e.target.value),
      error: err.summary,
      help: "e.g. \u201CVPN disconnects on office Wi-Fi\u201D"
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Priority",
      value: "normal",
      onChange: () => {},
      options: [{
        value: "low",
        label: "Low — no rush"
      }, {
        value: "normal",
        label: "Normal"
      }, {
        value: "high",
        label: "High — blocking my work"
      }]
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      iconLeft: "ticket"
    }, "Raise ticket")));
  }
  function ITSupport({
    onNavigate = () => {}
  }) {
    const {
      Card,
      Alert,
      Link
    } = NS();
    return /*#__PURE__*/React.createElement(AppShell, {
      current: "it",
      onNavigate: onNavigate
    }, /*#__PURE__*/React.createElement("main", {
      id: "main-content",
      tabIndex: -1,
      style: {
        maxWidth: "var(--layout-max)",
        margin: "0 auto",
        padding: "var(--space-8) var(--layout-gutter)",
        width: "100%",
        boxSizing: "border-box"
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        marginBottom: "var(--space-6)"
      }
    }, "IT Support"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: "var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      tone: "warning",
      title: "Known issue: Outlook slow to sync"
    }, "We're investigating delayed email sync affecting the London office.", " ", /*#__PURE__*/React.createElement(Link, {
      href: "#"
    }, "Follow status updates"), ".")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1fr)",
        gap: "var(--space-12)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("section", {
      "aria-labelledby": "tickets-heading"
    }, /*#__PURE__*/React.createElement("h2", {
      id: "tickets-heading"
    }, "Your tickets"), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        margin: 0,
        padding: 0,
        border: "var(--border-width) solid var(--border-divider)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        background: "var(--surface-card)"
      }
    }, /*#__PURE__*/React.createElement("li", {
      style: {
        padding: "var(--space-3) var(--space-6)",
        background: "var(--color-surface-alt)",
        fontSize: "var(--text-small-size)",
        fontWeight: 600,
        color: "var(--text-muted)",
        display: "flex",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        minWidth: "84px"
      }
    }, "Ref"), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, "Issue"), /*#__PURE__*/React.createElement("span", null, "Status")), /*#__PURE__*/React.createElement(TicketRow, {
      id: "TICKET-4821",
      title: "VPN drops when switching to office Wi-Fi",
      status: {
        key: "progress",
        label: "In progress"
      },
      updated: "Updated 1h ago"
    }), /*#__PURE__*/React.createElement(TicketRow, {
      id: "TICKET-4790",
      title: "Request: Adobe Acrobat licence",
      status: {
        key: "open",
        label: "Open"
      },
      updated: "Updated yesterday"
    }), /*#__PURE__*/React.createElement(TicketRow, {
      id: "TICKET-4712",
      title: "Laptop won't charge past 80%",
      status: {
        key: "resolved",
        label: "Resolved"
      },
      updated: "Closed 3 Jun"
    }))), /*#__PURE__*/React.createElement("section", {
      "aria-labelledby": "new-heading"
    }, /*#__PURE__*/React.createElement("h2", {
      id: "new-heading"
    }, "Raise a new ticket"), /*#__PURE__*/React.createElement(Card, {
      style: {
        padding: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement(NewTicket, null)), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: "var(--space-4)",
        fontSize: "var(--text-small-size)",
        color: "var(--text-muted)"
      }
    }, "Urgent and system-down issues: call the 24/7 service desk on ", /*#__PURE__*/React.createElement("strong", null, "x4357"), ".")))));
  }
  window.ITSupport = ITSupport;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/intranet/ITSupport.jsx", error: String((e && e.message) || e) }); }

// ui_kits/intranet/Training.jsx
try { (() => {
(function () {
  const NS = () => window.GlobalTechAccessibleDS_ff3d6f;
  const AppShell = window.AppShell;
  function Progress({
    value,
    max,
    label
  }) {
    const pct = Math.round(value / max * 100);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "var(--text-small-size)",
        marginBottom: "var(--space-1)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-muted)"
      }
    }, value, " of ", max, " complete")), /*#__PURE__*/React.createElement("div", {
      role: "progressbar",
      "aria-valuenow": value,
      "aria-valuemin": 0,
      "aria-valuemax": max,
      "aria-label": label,
      style: {
        height: "12px",
        background: "var(--color-surface-sunken)",
        borderRadius: "var(--radius-pill)",
        overflow: "hidden",
        border: "1px solid var(--border-divider)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${pct}%`,
        height: "100%",
        background: "var(--color-success)"
      }
    })));
  }
  function CourseCard({
    title,
    meta,
    status
  }) {
    const {
      Card,
      Badge,
      Button
    } = NS();
    const tone = {
      due: "warning",
      progress: "info",
      done: "success"
    }[status.key];
    return /*#__PURE__*/React.createElement(Card, {
      style: {
        padding: "var(--space-6)"
      },
      title: title,
      titleAs: "h3",
      footer: /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--space-3)",
          flexWrap: "wrap"
        }
      }, /*#__PURE__*/React.createElement(Badge, {
        tone: tone
      }, status.label), /*#__PURE__*/React.createElement(Button, {
        variant: status.key === "done" ? "secondary" : "primary"
      }, status.key === "done" ? "Review" : status.key === "progress" ? "Resume" : "Start"))
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: "var(--text-muted)",
        fontSize: "var(--text-small-size)"
      }
    }, meta));
  }
  function FeaturedVideo() {
    const {
      MediaPlayer
    } = NS();
    return /*#__PURE__*/React.createElement("section", {
      "aria-labelledby": "featured-heading"
    }, /*#__PURE__*/React.createElement("h2", {
      id: "featured-heading"
    }, "Featured this week"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1.6fr) minmax(0,1fr)",
        gap: "var(--space-6)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(MediaPlayer, {
      src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      poster: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
      captionsSrc: "data:text/vtt;charset=utf-8,WEBVTT%0A%0A00:00.000 --> 00:05.000%0AInclusive leadership starts with listening.%0A%0A00:05.000 --> 00:10.000%0AIn this module we cover practical habits for managers.",
      title: "Inclusive leadership \u2014 module 1"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        marginTop: 0
      }
    }, "Inclusive leadership"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--text-body)"
      }
    }, "A four-part series for new managers. Captions and full transcripts are provided for every video."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-small-size)",
        color: "var(--text-muted)"
      }
    }, "18 min \xB7 Captions available \xB7 Certificate on completion"))));
  }
  function Training({
    onNavigate = () => {}
  }) {
    return /*#__PURE__*/React.createElement(AppShell, {
      current: "learn",
      onNavigate: onNavigate
    }, /*#__PURE__*/React.createElement("main", {
      id: "main-content",
      tabIndex: -1,
      style: {
        maxWidth: "var(--layout-max)",
        margin: "0 auto",
        padding: "var(--space-8) var(--layout-gutter)",
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        marginBottom: "var(--space-4)"
      }
    }, "Training"), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "32rem"
      }
    }, /*#__PURE__*/React.createElement(Progress, {
      value: 3,
      max: 5,
      label: "Required courses"
    }))), /*#__PURE__*/React.createElement("section", {
      "aria-labelledby": "assigned-heading"
    }, /*#__PURE__*/React.createElement("h2", {
      id: "assigned-heading"
    }, "Assigned to you"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(CourseCard, {
      title: "Annual security awareness",
      meta: "Compliance \xB7 25 min",
      status: {
        key: "due",
        label: "Due 4 Jul"
      }
    }), /*#__PURE__*/React.createElement(CourseCard, {
      title: "Data privacy essentials",
      meta: "Compliance \xB7 40 min",
      status: {
        key: "progress",
        label: "In progress"
      }
    }), /*#__PURE__*/React.createElement(CourseCard, {
      title: "Accessible document authoring",
      meta: "Skills \xB7 30 min",
      status: {
        key: "done",
        label: "Completed"
      }
    }))), /*#__PURE__*/React.createElement(FeaturedVideo, null)));
  }
  window.Training = Training;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/intranet/Training.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Choice = __ds_scope.Choice;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Fieldset = __ds_scope.Fieldset;

__ds_ns.Link = __ds_scope.Link;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.MediaPlayer = __ds_scope.MediaPlayer;

__ds_ns.SkipLink = __ds_scope.SkipLink;

__ds_ns.TopNav = __ds_scope.TopNav;

})();
