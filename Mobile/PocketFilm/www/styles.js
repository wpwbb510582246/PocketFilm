(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/global.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@charset \"UTF-8\";\nhtml.ios{--ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif}\nhtml.md{--ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif}\nhtml{--ion-font-family: var(--ion-default-font)}\nbody{background:var(--ion-background-color)}\nbody.backdrop-no-scroll{overflow:hidden}\n.ion-color-primary{--ion-color-base: var(--ion-color-primary, #3880ff) !important;--ion-color-base-rgb: var(--ion-color-primary-rgb, 56,128,255) !important;--ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;--ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important}\n.ion-color-secondary{--ion-color-base: var(--ion-color-secondary, #0cd1e8) !important;--ion-color-base-rgb: var(--ion-color-secondary-rgb, 12,209,232) !important;--ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-secondary-shade, #0bb8cc) !important;--ion-color-tint: var(--ion-color-secondary-tint, #24d6ea) !important}\n.ion-color-tertiary{--ion-color-base: var(--ion-color-tertiary, #7044ff) !important;--ion-color-base-rgb: var(--ion-color-tertiary-rgb, 112,68,255) !important;--ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-tertiary-shade, #633ce0) !important;--ion-color-tint: var(--ion-color-tertiary-tint, #7e57ff) !important}\n.ion-color-success{--ion-color-base: var(--ion-color-success, #10dc60) !important;--ion-color-base-rgb: var(--ion-color-success-rgb, 16,220,96) !important;--ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-success-shade, #0ec254) !important;--ion-color-tint: var(--ion-color-success-tint, #28e070) !important}\n.ion-color-warning{--ion-color-base: var(--ion-color-warning, #ffce00) !important;--ion-color-base-rgb: var(--ion-color-warning-rgb, 255,206,0) !important;--ion-color-contrast: var(--ion-color-warning-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-warning-shade, #e0b500) !important;--ion-color-tint: var(--ion-color-warning-tint, #ffd31a) !important}\n.ion-color-danger{--ion-color-base: var(--ion-color-danger, #f04141) !important;--ion-color-base-rgb: var(--ion-color-danger-rgb, 240,65,65) !important;--ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-danger-shade, #d33939) !important;--ion-color-tint: var(--ion-color-danger-tint, #f25454) !important}\n.ion-color-light{--ion-color-base: var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb: var(--ion-color-light-rgb, 244,245,248) !important;--ion-color-contrast: var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0,0,0) !important;--ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important}\n.ion-color-medium{--ion-color-base: var(--ion-color-medium, #989aa2) !important;--ion-color-base-rgb: var(--ion-color-medium-rgb, 152,154,162) !important;--ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-medium-shade, #86888f) !important;--ion-color-tint: var(--ion-color-medium-tint, #a2a4ab) !important}\n.ion-color-dark{--ion-color-base: var(--ion-color-dark, #222428) !important;--ion-color-base-rgb: var(--ion-color-dark-rgb, 34,36,40) !important;--ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important}\n.ion-page{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;overflow:hidden;z-index:0}\nion-route,ion-route-redirect,ion-router,ion-select-option,ion-nav-controller,ion-menu-controller,ion-action-sheet-controller,ion-alert-controller,ion-loading-controller,ion-modal-controller,ion-picker-controller,ion-popover-controller,ion-toast-controller,.ion-page-hidden,[hidden]{display:none !important}\n.ion-page-invisible{opacity:0}\nhtml.plt-ios.plt-hybrid,html.plt-ios.plt-pwa{--ion-statusbar-padding: 20px}\n@supports (padding-top: 20px){html{--ion-safe-area-top: var(--ion-statusbar-padding)}}\n@supports (padding-top: constant(safe-area-inset-top)){html{--ion-safe-area-top: constant(safe-area-inset-top);--ion-safe-area-bottom: constant(safe-area-inset-bottom);--ion-safe-area-left: constant(safe-area-inset-left);--ion-safe-area-right: constant(safe-area-inset-right)}}\n@supports (padding-top: env(safe-area-inset-top)){html{--ion-safe-area-top: env(safe-area-inset-top);--ion-safe-area-bottom: env(safe-area-inset-bottom);--ion-safe-area-left: env(safe-area-inset-left);--ion-safe-area-right: env(safe-area-inset-right)}}\naudio,canvas,progress,video{vertical-align:baseline}\naudio:not([controls]){display:none;height:0}\nb,strong{font-weight:bold}\nimg{max-width:100%;border:0}\nsvg:not(:root){overflow:hidden}\nfigure{margin:1em 40px}\nhr{height:1px;border-width:0;box-sizing:content-box}\npre{overflow:auto}\ncode,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}\nlabel,input,select,textarea{font-family:inherit;line-height:normal}\ntextarea{overflow:auto;height:auto;font:inherit;color:inherit}\ntextarea::-webkit-input-placeholder{padding-left:2px}\ntextarea::-moz-placeholder{padding-left:2px}\ntextarea:-ms-input-placeholder{padding-left:2px}\ntextarea::-ms-input-placeholder{padding-left:2px}\ntextarea::placeholder{padding-left:2px}\nform,input,optgroup,select{margin:0;font:inherit;color:inherit}\nhtml input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{cursor:pointer;-webkit-appearance:button}\na,a div,a span,a ion-icon,a ion-label,button,button div,button span,button ion-icon,button ion-label,.ion-tappable,[tappable],[tappable] div,[tappable] span,[tappable] ion-icon,[tappable] ion-label,input,textarea{touch-action:manipulation}\na ion-label,button ion-label{pointer-events:none}\nbutton{border:0;border-radius:0;font-family:inherit;font-style:inherit;font-variant:inherit;line-height:1;text-transform:none;cursor:pointer;-webkit-appearance:button}\n[tappable]{cursor:pointer}\na[disabled],button[disabled],html input[disabled]{cursor:default}\nbutton::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}\ninput[type=\"checkbox\"],input[type=\"radio\"]{padding:0;box-sizing:border-box}\ninput[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}\ninput[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}\ntable{border-collapse:collapse;border-spacing:0}\ntd,th{padding:0}\n*{box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}\nhtml{width:100%;height:100%;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}\nhtml.plt-pwa{height:100vh}\nbody{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;position:fixed;width:100%;max-width:100%;height:100%;max-height:100%;text-rendering:optimizeLegibility;overflow:hidden;touch-action:manipulation;-webkit-user-drag:none;-ms-content-zooming:none;word-wrap:break-word;overscroll-behavior-y:none;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none}\nhtml{font-family:var(--ion-font-family)}\na{background-color:transparent;color:var(--ion-color-primary, #3880ff)}\nh1,h2,h3,h4,h5,h6{margin-top:16px;margin-bottom:10px;font-weight:500;line-height:1.2}\nh1{margin-top:20px;font-size:26px}\nh2{margin-top:18px;font-size:24px}\nh3{font-size:22px}\nh4{font-size:20px}\nh5{font-size:18px}\nh6{font-size:16px}\nsmall{font-size:75%}\nsub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}\nsup{top:-.5em}\nsub{bottom:-.25em}\n.ion-no-padding,[no-padding]{--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}\n.ion-padding,[padding]{--padding-start: var(--ion-padding, 16px);--padding-end: var(--ion-padding, 16px);--padding-top: var(--ion-padding, 16px);--padding-bottom: var(--ion-padding, 16px);padding-left:var(--ion-padding, 16px);padding-right:var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-padding,[padding]{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px);-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px)}}\n.ion-padding-top,[padding-top]{--padding-top: var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px)}\n.ion-padding-start,[padding-start]{--padding-start: var(--ion-padding, 16px);padding-left:var(--ion-padding, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-padding-start,[padding-start]{padding-left:unset;-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px)}}\n.ion-padding-end,[padding-end]{--padding-end: var(--ion-padding, 16px);padding-right:var(--ion-padding, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-padding-end,[padding-end]{padding-right:unset;-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px)}}\n.ion-padding-bottom,[padding-bottom]{--padding-bottom: var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}\n.ion-padding-vertical,[padding-vertical]{--padding-top: var(--ion-padding, 16px);--padding-bottom: var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}\n.ion-padding-horizontal,[padding-horizontal]{--padding-start: var(--ion-padding, 16px);--padding-end: var(--ion-padding, 16px);padding-left:var(--ion-padding, 16px);padding-right:var(--ion-padding, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-padding-horizontal,[padding-horizontal]{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px);-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px)}}\n.ion-no-margin,[no-margin]{--margin-start: 0;--margin-end: 0;--margin-top: 0;--margin-bottom: 0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}\n.ion-margin,[margin]{--margin-start: var(--ion-margin, 16px);--margin-end: var(--ion-margin, 16px);--margin-top: var(--ion-margin, 16px);--margin-bottom: var(--ion-margin, 16px);margin-left:var(--ion-margin, 16px);margin-right:var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-margin,[margin]{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px);-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px)}}\n.ion-margin-top,[margin-top]{--margin-top: var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px)}\n.ion-margin-start,[margin-start]{--margin-start: var(--ion-margin, 16px);margin-left:var(--ion-margin, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-margin-start,[margin-start]{margin-left:unset;-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px)}}\n.ion-margin-end,[margin-end]{--margin-end: var(--ion-margin, 16px);margin-right:var(--ion-margin, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-margin-end,[margin-end]{margin-right:unset;-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px)}}\n.ion-margin-bottom,[margin-bottom]{--margin-bottom: var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}\n.ion-margin-vertical,[margin-vertical]{--margin-top: var(--ion-margin, 16px);--margin-bottom: var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}\n.ion-margin-horizontal,[margin-horizontal]{--margin-start: var(--ion-margin, 16px);--margin-end: var(--ion-margin, 16px);margin-left:var(--ion-margin, 16px);margin-right:var(--ion-margin, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-margin-horizontal,[margin-horizontal]{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px);-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px)}}\n.ion-float-left,[float-left]{float:left !important}\n.ion-float-right,[float-right]{float:right !important}\n.ion-float-start,[float-start]{float:left !important}\n[dir=rtl] .ion-float-start,:host-context([dir=rtl]) .ion-float-start,[dir=rtl] [float-start],:host-context([dir=rtl]) [float-start]{float:right !important}\n.ion-float-end,[float-end]{float:right !important}\n[dir=rtl] .ion-float-end,:host-context([dir=rtl]) .ion-float-end,[dir=rtl] [float-end],:host-context([dir=rtl]) [float-end]{float:left !important}\n@media (min-width: 576px){.ion-float-sm-left,[float-sm-left]{float:left !important}.ion-float-sm-right,[float-sm-right]{float:right !important}.ion-float-sm-start,[float-sm-start]{float:left !important}[dir=rtl] .ion-float-sm-start,:host-context([dir=rtl]) .ion-float-sm-start,[dir=rtl] [float-sm-start],:host-context([dir=rtl]) [float-sm-start]{float:right !important}.ion-float-sm-end,[float-sm-end]{float:right !important}[dir=rtl] .ion-float-sm-end,:host-context([dir=rtl]) .ion-float-sm-end,[dir=rtl] [float-sm-end],:host-context([dir=rtl]) [float-sm-end]{float:left !important}}\n@media (min-width: 768px){.ion-float-md-left,[float-md-left]{float:left !important}.ion-float-md-right,[float-md-right]{float:right !important}.ion-float-md-start,[float-md-start]{float:left !important}[dir=rtl] .ion-float-md-start,:host-context([dir=rtl]) .ion-float-md-start,[dir=rtl] [float-md-start],:host-context([dir=rtl]) [float-md-start]{float:right !important}.ion-float-md-end,[float-md-end]{float:right !important}[dir=rtl] .ion-float-md-end,:host-context([dir=rtl]) .ion-float-md-end,[dir=rtl] [float-md-end],:host-context([dir=rtl]) [float-md-end]{float:left !important}}\n@media (min-width: 992px){.ion-float-lg-left,[float-lg-left]{float:left !important}.ion-float-lg-right,[float-lg-right]{float:right !important}.ion-float-lg-start,[float-lg-start]{float:left !important}[dir=rtl] .ion-float-lg-start,:host-context([dir=rtl]) .ion-float-lg-start,[dir=rtl] [float-lg-start],:host-context([dir=rtl]) [float-lg-start]{float:right !important}.ion-float-lg-end,[float-lg-end]{float:right !important}[dir=rtl] .ion-float-lg-end,:host-context([dir=rtl]) .ion-float-lg-end,[dir=rtl] [float-lg-end],:host-context([dir=rtl]) [float-lg-end]{float:left !important}}\n@media (min-width: 1200px){.ion-float-xl-left,[float-xl-left]{float:left !important}.ion-float-xl-right,[float-xl-right]{float:right !important}.ion-float-xl-start,[float-xl-start]{float:left !important}[dir=rtl] .ion-float-xl-start,:host-context([dir=rtl]) .ion-float-xl-start,[dir=rtl] [float-xl-start],:host-context([dir=rtl]) [float-xl-start]{float:right !important}.ion-float-xl-end,[float-xl-end]{float:right !important}[dir=rtl] .ion-float-xl-end,:host-context([dir=rtl]) .ion-float-xl-end,[dir=rtl] [float-xl-end],:host-context([dir=rtl]) [float-xl-end]{float:left !important}}\n.ion-text-center,[text-center]{text-align:center !important}\n.ion-text-justify,[text-justify]{text-align:justify !important}\n.ion-text-start,[text-start]{text-align:start !important}\n.ion-text-end,[text-end]{text-align:end !important}\n.ion-text-left,[text-left]{text-align:left !important}\n.ion-text-right,[text-right]{text-align:right !important}\n.ion-text-nowrap,[text-nowrap]{white-space:nowrap !important}\n.ion-text-wrap,[text-wrap]{white-space:normal !important}\n@media (min-width: 576px){.ion-text-sm-center,[text-sm-center]{text-align:center !important}.ion-text-sm-justify,[text-sm-justify]{text-align:justify !important}.ion-text-sm-start,[text-sm-start]{text-align:start !important}.ion-text-sm-end,[text-sm-end]{text-align:end !important}.ion-text-sm-left,[text-sm-left]{text-align:left !important}.ion-text-sm-right,[text-sm-right]{text-align:right !important}.ion-text-sm-nowrap,[text-sm-nowrap]{white-space:nowrap !important}.ion-text-sm-wrap,[text-sm-wrap]{white-space:normal !important}}\n@media (min-width: 768px){.ion-text-md-center,[text-md-center]{text-align:center !important}.ion-text-md-justify,[text-md-justify]{text-align:justify !important}.ion-text-md-start,[text-md-start]{text-align:start !important}.ion-text-md-end,[text-md-end]{text-align:end !important}.ion-text-md-left,[text-md-left]{text-align:left !important}.ion-text-md-right,[text-md-right]{text-align:right !important}.ion-text-md-nowrap,[text-md-nowrap]{white-space:nowrap !important}.ion-text-md-wrap,[text-md-wrap]{white-space:normal !important}}\n@media (min-width: 992px){.ion-text-lg-center,[text-lg-center]{text-align:center !important}.ion-text-lg-justify,[text-lg-justify]{text-align:justify !important}.ion-text-lg-start,[text-lg-start]{text-align:start !important}.ion-text-lg-end,[text-lg-end]{text-align:end !important}.ion-text-lg-left,[text-lg-left]{text-align:left !important}.ion-text-lg-right,[text-lg-right]{text-align:right !important}.ion-text-lg-nowrap,[text-lg-nowrap]{white-space:nowrap !important}.ion-text-lg-wrap,[text-lg-wrap]{white-space:normal !important}}\n@media (min-width: 1200px){.ion-text-xl-center,[text-xl-center]{text-align:center !important}.ion-text-xl-justify,[text-xl-justify]{text-align:justify !important}.ion-text-xl-start,[text-xl-start]{text-align:start !important}.ion-text-xl-end,[text-xl-end]{text-align:end !important}.ion-text-xl-left,[text-xl-left]{text-align:left !important}.ion-text-xl-right,[text-xl-right]{text-align:right !important}.ion-text-xl-nowrap,[text-xl-nowrap]{white-space:nowrap !important}.ion-text-xl-wrap,[text-xl-wrap]{white-space:normal !important}}\n.ion-text-uppercase,[text-uppercase]{text-transform:uppercase !important}\n.ion-text-lowercase,[text-lowercase]{text-transform:lowercase !important}\n.ion-text-capitalize,[text-capitalize]{text-transform:capitalize !important}\n@media (min-width: 576px){.ion-text-sm-uppercase,[text-sm-uppercase]{text-transform:uppercase !important}.ion-text-sm-lowercase,[text-sm-lowercase]{text-transform:lowercase !important}.ion-text-sm-capitalize,[text-sm-capitalize]{text-transform:capitalize !important}}\n@media (min-width: 768px){.ion-text-md-uppercase,[text-md-uppercase]{text-transform:uppercase !important}.ion-text-md-lowercase,[text-md-lowercase]{text-transform:lowercase !important}.ion-text-md-capitalize,[text-md-capitalize]{text-transform:capitalize !important}}\n@media (min-width: 992px){.ion-text-lg-uppercase,[text-lg-uppercase]{text-transform:uppercase !important}.ion-text-lg-lowercase,[text-lg-lowercase]{text-transform:lowercase !important}.ion-text-lg-capitalize,[text-lg-capitalize]{text-transform:capitalize !important}}\n@media (min-width: 1200px){.ion-text-xl-uppercase,[text-xl-uppercase]{text-transform:uppercase !important}.ion-text-xl-lowercase,[text-xl-lowercase]{text-transform:lowercase !important}.ion-text-xl-capitalize,[text-xl-capitalize]{text-transform:capitalize !important}}\n.ion-align-self-start,[align-self-start]{align-self:flex-start !important}\n.ion-align-self-end,[align-self-end]{align-self:flex-end !important}\n.ion-align-self-center,[align-self-center]{align-self:center !important}\n.ion-align-self-stretch,[align-self-stretch]{align-self:stretch !important}\n.ion-align-self-baseline,[align-self-baseline]{align-self:baseline !important}\n.ion-align-self-auto,[align-self-auto]{align-self:auto !important}\n.ion-wrap,[wrap]{flex-wrap:wrap !important}\n.ion-nowrap,[nowrap]{flex-wrap:nowrap !important}\n.ion-wrap-reverse,[wrap-reverse]{flex-wrap:wrap-reverse !important}\n.ion-justify-content-start,[justify-content-start]{justify-content:flex-start !important}\n.ion-justify-content-center,[justify-content-center]{justify-content:center !important}\n.ion-justify-content-end,[justify-content-end]{justify-content:flex-end !important}\n.ion-justify-content-around,[justify-content-around]{justify-content:space-around !important}\n.ion-justify-content-between,[justify-content-between]{justify-content:space-between !important}\n.ion-justify-content-evenly,[justify-content-evenly]{justify-content:space-evenly !important}\n.ion-align-items-start,[align-items-start]{align-items:flex-start !important}\n.ion-align-items-center,[align-items-center]{align-items:center !important}\n.ion-align-items-end,[align-items-end]{align-items:flex-end !important}\n.ion-align-items-stretch,[align-items-stretch]{align-items:stretch !important}\n.ion-align-items-baseline,[align-items-baseline]{align-items:baseline !important}\nbody {\n  font: normal normal 12px/2em \"宋体\", Verdana, Geneva, sans-serif;\n  color: #444; }\nion-toolbar {\n  color: \"danger\"; }\nion-title {\n  text-align: center; }\n.movie-detail {\n  font-size: 9px; }\nvideo {\n  background-color: #000;\n  width: 100%;\n  height: 100%; }\n.movie_img {\n  width: 152px;\n  height: 102px; }\n.sc-ion-segment-md-h {\n  --color-checked: red; }\n.c01 {\n  color: #23a7e9;\n  width: 400px; }\n.c02 {\n  color: #444; }\n.source_name {\n  font-family: \"Microsoft YaHei\", \"微软雅黑\", tahoma, arial, simsun, \"宋体\";\n  font-weight: normal;\n  font-size: 15px;\n  color: #23a7e9;\n  padding: 0px 0px 4px 0px; }\n.source_type {\n  float: left;\n  display: inline;\n  border: 1px solid #e0e0e0;\n  border-radius: 1px 1px 1px 1px;\n  margin: 0 4px 4px 0;\n  overflow: hidden;\n  text-align: center;\n  background: #f1f1f1;\n  text-decoration: none;\n  padding: 0px 4px; }\n.source_type_active {\n  color: #fff;\n  background-color: red; }\n.more_movie_type_name {\n  display: inline-block;\n  color: #444;\n  text-decoration: none;\n  line-height: 22px;\n  height: 22px;\n  text-align: center;\n  padding: 0 6px; }\n.more_movie_type_name_selected {\n  background-color: red;\n  color: #ffffff; }\na {\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvY29yZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL25vcm1hbGl6ZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3N0cnVjdHVyZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3R5cG9ncmFwaHkuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvZmxvYXQtZWxlbWVudHMuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LWFsaWdubWVudC5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9mbGV4LXV0aWxzLmNzcyIsIi9Vc2Vycy93ZWlwZW5nL1BlcnNvbmFsL1Byb2plY3RzL1BvY2tldEZpbG0vTW9iaWxlL1BvY2tldEZpbG0vc3JjL2dsb2JhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixTQUFTLDZGQUE2RjtBQUFDLFFBQVEsMERBQTBEO0FBQUMsS0FBSywwQ0FBMEM7QUFBQyxLQUFLLHNDQUFzQztBQUFDLHdCQUF3QixlQUFlO0FBQUMsbUJBQW1CLDhEQUE4RCxDQUFDLHlFQUF5RSxDQUFDLHdFQUF3RSxDQUFDLHVGQUF1RixDQUFDLHFFQUFxRSxDQUFDLG1FQUFtRTtBQUFDLHFCQUFxQixnRUFBZ0UsQ0FBQywyRUFBMkUsQ0FBQywwRUFBMEUsQ0FBQyx5RkFBeUYsQ0FBQyx1RUFBdUUsQ0FBQyxxRUFBcUU7QUFBQyxvQkFBb0IsK0RBQStELENBQUMsMEVBQTBFLENBQUMseUVBQXlFLENBQUMsd0ZB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O0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLFdBQVc7RUFDWCxxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTtBQUdoQjtFQUNFLHFCQUFxQjtFQUNyQixjQUFjLEVBQUE7QUFHaEI7RUFDRSxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvZ2xvYmFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5AaW1wb3J0IHVybCh+QGlvbmljL2FuZ3VsYXIvY3NzL2NvcmUuY3NzKTtcbkBpbXBvcnQgdXJsKH5AaW9uaWMvYW5ndWxhci9jc3Mvbm9ybWFsaXplLmNzcyk7XG5AaW1wb3J0IHVybCh+QGlvbmljL2FuZ3VsYXIvY3NzL3N0cnVjdHVyZS5jc3MpO1xuQGltcG9ydCB1cmwofkBpb25pYy9hbmd1bGFyL2Nzcy90eXBvZ3JhcGh5LmNzcyk7XG5AaW1wb3J0IHVybCh+QGlvbmljL2FuZ3VsYXIvY3NzL3BhZGRpbmcuY3NzKTtcbkBpbXBvcnQgdXJsKH5AaW9uaWMvYW5ndWxhci9jc3MvZmxvYXQtZWxlbWVudHMuY3NzKTtcbkBpbXBvcnQgdXJsKH5AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC1hbGlnbm1lbnQuY3NzKTtcbkBpbXBvcnQgdXJsKH5AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC10cmFuc2Zvcm1hdGlvbi5jc3MpO1xuQGltcG9ydCB1cmwofkBpb25pYy9hbmd1bGFyL2Nzcy9mbGV4LXV0aWxzLmNzcyk7XG5ib2R5IHtcbiAgZm9udDogbm9ybWFsIG5vcm1hbCAxMnB4LzJlbSBcIuWui+S9k1wiLCBWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNDQ0OyB9XG5cbmlvbi10b29sYmFyIHtcbiAgY29sb3I6IFwiZGFuZ2VyXCI7IH1cblxuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5tb3ZpZS1kZXRhaWwge1xuICBmb250LXNpemU6IDlweDsgfVxuXG52aWRlbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuLm1vdmllX2ltZyB7XG4gIHdpZHRoOiAxNTJweDtcbiAgaGVpZ2h0OiAxMDJweDsgfVxuXG4uc2MtaW9uLXNlZ21lbnQtbWQtaCB7XG4gIC0tY29sb3ItY2hlY2tlZDogcmVkOyB9XG5cbi5jMDEge1xuICBjb2xvcjogIzIzYTdlOTtcbiAgd2lkdGg6IDQwMHB4OyB9XG5cbi5jMDIge1xuICBjb2xvcjogIzQ0NDsgfVxuXG4uc291cmNlX25hbWUge1xuICBmb250LWZhbWlseTogXCJNaWNyb3NvZnQgWWFIZWlcIiwgXCLlvq7ova/pm4Xpu5FcIiwgdGFob21hLCBhcmlhbCwgc2ltc3VuLCBcIuWui+S9k1wiO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMjNhN2U5O1xuICBwYWRkaW5nOiAwcHggMHB4IDRweCAwcHg7IH1cblxuLnNvdXJjZV90eXBlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgYm9yZGVyLXJhZGl1czogMXB4IDFweCAxcHggMXB4O1xuICBtYXJnaW46IDAgNHB4IDRweCAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMHB4IDRweDsgfVxuXG4uc291cmNlX3R5cGVfYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDsgfVxuXG4ubW9yZV9tb3ZpZV90eXBlX25hbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjNDQ0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMCA2cHg7IH1cblxuLm1vcmVfbW92aWVfdHlwZV9uYW1lX3NlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogI2ZmZmZmZjsgfVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4iLCJodG1sLmlvc3stLWlvbi1kZWZhdWx0LWZvbnQ6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmfWh0bWwubWR7LS1pb24tZGVmYXVsdC1mb250OiBcIlJvYm90b1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9aHRtbHstLWlvbi1mb250LWZhbWlseTogdmFyKC0taW9uLWRlZmF1bHQtZm9udCl9Ym9keXtiYWNrZ3JvdW5kOnZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKX1ib2R5LmJhY2tkcm9wLW5vLXNjcm9sbHtvdmVyZmxvdzpoaWRkZW59Lmlvbi1jb2xvci1wcmltYXJ5ey0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsIDU2LDEyOCwyNTUpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiLCAyNTUsMjU1LDI1NSkgIWltcG9ydGFudDstLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUsICMzMTcxZTApICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCwgIzRjOGRmZikgIWltcG9ydGFudH0uaW9uLWNvbG9yLXNlY29uZGFyeXstLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LCAjMGNkMWU4KSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYiwgMTIsMjA5LDIzMikgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiLCAyNTUsMjU1LDI1NSkgIWltcG9ydGFudDstLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZSwgIzBiYjhjYykgIWltcG9ydGFudDstLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQsICMyNGQ2ZWEpICFpbXBvcnRhbnR9Lmlvbi1jb2xvci10ZXJ0aWFyeXstLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnksICM3MDQ0ZmYpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2IsIDExMiw2OCwyNTUpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2IsIDI1NSwyNTUsMjU1KSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGUsICM2MzNjZTApICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQsICM3ZTU3ZmYpICFpbXBvcnRhbnR9Lmlvbi1jb2xvci1zdWNjZXNzey0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLCAjMTBkYzYwKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2IsIDE2LDIyMCw5NikgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2IsIDI1NSwyNTUsMjU1KSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSwgIzBlYzI1NCkgIWltcG9ydGFudDstLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy10aW50LCAjMjhlMDcwKSAhaW1wb3J0YW50fS5pb24tY29sb3Itd2FybmluZ3stLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itd2FybmluZywgI2ZmY2UwMCkgIWltcG9ydGFudDstLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctcmdiLCAyNTUsMjA2LDApICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiLCAyNTUsMjU1LDI1NSkgIWltcG9ydGFudDstLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGUsICNlMGI1MDApICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctdGludCwgI2ZmZDMxYSkgIWltcG9ydGFudH0uaW9uLWNvbG9yLWRhbmdlcnstLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZjA0MTQxKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXJnYiwgMjQwLDY1LDY1KSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2IsIDI1NSwyNTUsMjU1KSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlLCAjZDMzOTM5KSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItdGludCwgI2YyNTQ1NCkgIWltcG9ydGFudH0uaW9uLWNvbG9yLWxpZ2h0ey0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1saWdodCwgI2Y0ZjVmOCkgIWltcG9ydGFudDstLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiwgMjQ0LDI0NSwyNDgpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdCwgIzAwMCkgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2IsIDAsMCwwKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUsICNkN2Q4ZGEpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQsICNmNWY2ZjkpICFpbXBvcnRhbnR9Lmlvbi1jb2xvci1tZWRpdW17LS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSwgIzk4OWFhMikgIWltcG9ydGFudDstLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IsIDE1MiwxNTQsMTYyKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2IsIDI1NSwyNTUsMjU1KSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlLCAjODY4ODhmKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCwgI2EyYTRhYikgIWltcG9ydGFudH0uaW9uLWNvbG9yLWRhcmt7LS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWRhcmssICMyMjI0MjgpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiwgMzQsMzYsNDApICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiLCAyNTUsMjU1LDI1NSkgIWltcG9ydGFudDstLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUsICMxZTIwMjMpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCwgIzM4M2EzZSkgIWltcG9ydGFudH0uaW9uLXBhZ2V7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmFic29sdXRlO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbjtjb250YWluOmxheW91dCBzaXplIHN0eWxlO292ZXJmbG93OmhpZGRlbjt6LWluZGV4OjB9aW9uLXJvdXRlLGlvbi1yb3V0ZS1yZWRpcmVjdCxpb24tcm91dGVyLGlvbi1zZWxlY3Qtb3B0aW9uLGlvbi1uYXYtY29udHJvbGxlcixpb24tbWVudS1jb250cm9sbGVyLGlvbi1hY3Rpb24tc2hlZXQtY29udHJvbGxlcixpb24tYWxlcnQtY29udHJvbGxlcixpb24tbG9hZGluZy1jb250cm9sbGVyLGlvbi1tb2RhbC1jb250cm9sbGVyLGlvbi1waWNrZXItY29udHJvbGxlcixpb24tcG9wb3Zlci1jb250cm9sbGVyLGlvbi10b2FzdC1jb250cm9sbGVyLC5pb24tcGFnZS1oaWRkZW4sW2hpZGRlbl17ZGlzcGxheTpub25lICFpbXBvcnRhbnR9Lmlvbi1wYWdlLWludmlzaWJsZXtvcGFjaXR5OjB9aHRtbC5wbHQtaW9zLnBsdC1oeWJyaWQsaHRtbC5wbHQtaW9zLnBsdC1wd2F7LS1pb24tc3RhdHVzYmFyLXBhZGRpbmc6IDIwcHh9QHN1cHBvcnRzIChwYWRkaW5nLXRvcDogMjBweCl7aHRtbHstLWlvbi1zYWZlLWFyZWEtdG9wOiB2YXIoLS1pb24tc3RhdHVzYmFyLXBhZGRpbmcpfX1Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtdG9wKSl7aHRtbHstLWlvbi1zYWZlLWFyZWEtdG9wOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtdG9wKTstLWlvbi1zYWZlLWFyZWEtYm90dG9tOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTstLWlvbi1zYWZlLWFyZWEtbGVmdDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWxlZnQpOy0taW9uLXNhZmUtYXJlYS1yaWdodDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KX19QHN1cHBvcnRzIChwYWRkaW5nLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKXtodG1sey0taW9uLXNhZmUtYXJlYS10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTstLWlvbi1zYWZlLWFyZWEtYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7LS1pb24tc2FmZS1hcmVhLWxlZnQ6IGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCk7LS1pb24tc2FmZS1hcmVhLXJpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KX19XG4iLCJhdWRpbyxjYW52YXMscHJvZ3Jlc3MsdmlkZW97dmVydGljYWwtYWxpZ246YmFzZWxpbmV9YXVkaW86bm90KFtjb250cm9sc10pe2Rpc3BsYXk6bm9uZTtoZWlnaHQ6MH1iLHN0cm9uZ3tmb250LXdlaWdodDpib2xkfWltZ3ttYXgtd2lkdGg6MTAwJTtib3JkZXI6MH1zdmc6bm90KDpyb290KXtvdmVyZmxvdzpoaWRkZW59ZmlndXJle21hcmdpbjoxZW0gNDBweH1ocntoZWlnaHQ6MXB4O2JvcmRlci13aWR0aDowO2JveC1zaXppbmc6Y29udGVudC1ib3h9cHJle292ZXJmbG93OmF1dG99Y29kZSxrYmQscHJlLHNhbXB7Zm9udC1mYW1pbHk6bW9ub3NwYWNlLCBtb25vc3BhY2U7Zm9udC1zaXplOjFlbX1sYWJlbCxpbnB1dCxzZWxlY3QsdGV4dGFyZWF7Zm9udC1mYW1pbHk6aW5oZXJpdDtsaW5lLWhlaWdodDpub3JtYWx9dGV4dGFyZWF7b3ZlcmZsb3c6YXV0bztoZWlnaHQ6YXV0bztmb250OmluaGVyaXQ7Y29sb3I6aW5oZXJpdH10ZXh0YXJlYTo6cGxhY2Vob2xkZXJ7cGFkZGluZy1sZWZ0OjJweH1mb3JtLGlucHV0LG9wdGdyb3VwLHNlbGVjdHttYXJnaW46MDtmb250OmluaGVyaXQ7Y29sb3I6aW5oZXJpdH1odG1sIGlucHV0W3R5cGU9XCJidXR0b25cIl0saW5wdXRbdHlwZT1cInJlc2V0XCJdLGlucHV0W3R5cGU9XCJzdWJtaXRcIl17Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbn1hLGEgZGl2LGEgc3BhbixhIGlvbi1pY29uLGEgaW9uLWxhYmVsLGJ1dHRvbixidXR0b24gZGl2LGJ1dHRvbiBzcGFuLGJ1dHRvbiBpb24taWNvbixidXR0b24gaW9uLWxhYmVsLC5pb24tdGFwcGFibGUsW3RhcHBhYmxlXSxbdGFwcGFibGVdIGRpdixbdGFwcGFibGVdIHNwYW4sW3RhcHBhYmxlXSBpb24taWNvbixbdGFwcGFibGVdIGlvbi1sYWJlbCxpbnB1dCx0ZXh0YXJlYXt0b3VjaC1hY3Rpb246bWFuaXB1bGF0aW9ufWEgaW9uLWxhYmVsLGJ1dHRvbiBpb24tbGFiZWx7cG9pbnRlci1ldmVudHM6bm9uZX1idXR0b257Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czowO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtdmFyaWFudDppbmhlcml0O2xpbmUtaGVpZ2h0OjE7dGV4dC10cmFuc2Zvcm06bm9uZTtjdXJzb3I6cG9pbnRlcjstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9ufVt0YXBwYWJsZV17Y3Vyc29yOnBvaW50ZXJ9YVtkaXNhYmxlZF0sYnV0dG9uW2Rpc2FibGVkXSxodG1sIGlucHV0W2Rpc2FibGVkXXtjdXJzb3I6ZGVmYXVsdH1idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXJ7cGFkZGluZzowO2JvcmRlcjowfWlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxpbnB1dFt0eXBlPVwicmFkaW9cIl17cGFkZGluZzowO2JveC1zaXppbmc6Ym9yZGVyLWJveH1pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLGlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257aGVpZ2h0OmF1dG99aW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lfXRhYmxle2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtib3JkZXItc3BhY2luZzowfXRkLHRoe3BhZGRpbmc6MH1cbiIsIip7Ym94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjpyZ2JhKDAsMCwwLDApOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZX1odG1se3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7dGV4dC1zaXplLWFkanVzdDoxMDAlfWh0bWwucGx0LXB3YXtoZWlnaHQ6MTAwdmh9Ym9keXstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtwb3NpdGlvbjpmaXhlZDt3aWR0aDoxMDAlO21heC13aWR0aDoxMDAlO2hlaWdodDoxMDAlO21heC1oZWlnaHQ6MTAwJTt0ZXh0LXJlbmRlcmluZzpvcHRpbWl6ZUxlZ2liaWxpdHk7b3ZlcmZsb3c6aGlkZGVuO3RvdWNoLWFjdGlvbjptYW5pcHVsYXRpb247LXdlYmtpdC11c2VyLWRyYWc6bm9uZTstbXMtY29udGVudC16b29taW5nOm5vbmU7d29yZC13cmFwOmJyZWFrLXdvcmQ7b3ZlcnNjcm9sbC1iZWhhdmlvci15Om5vbmU7dGV4dC1zaXplLWFkanVzdDpub25lfVxuIiwiaHRtbHtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHkpfWF7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZil9aDEsaDIsaDMsaDQsaDUsaDZ7bWFyZ2luLXRvcDoxNnB4O21hcmdpbi1ib3R0b206MTBweDtmb250LXdlaWdodDo1MDA7bGluZS1oZWlnaHQ6MS4yfWgxe21hcmdpbi10b3A6MjBweDtmb250LXNpemU6MjZweH1oMnttYXJnaW4tdG9wOjE4cHg7Zm9udC1zaXplOjI0cHh9aDN7Zm9udC1zaXplOjIycHh9aDR7Zm9udC1zaXplOjIwcHh9aDV7Zm9udC1zaXplOjE4cHh9aDZ7Zm9udC1zaXplOjE2cHh9c21hbGx7Zm9udC1zaXplOjc1JX1zdWIsc3Vwe3Bvc2l0aW9uOnJlbGF0aXZlO2ZvbnQtc2l6ZTo3NSU7bGluZS1oZWlnaHQ6MDt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1zdXB7dG9wOi0uNWVtfXN1Yntib3R0b206LS4yNWVtfVxuIiwiLmlvbi1uby1wYWRkaW5nLFtuby1wYWRkaW5nXXstLXBhZGRpbmctc3RhcnQ6IDA7LS1wYWRkaW5nLWVuZDogMDstLXBhZGRpbmctdG9wOiAwOy0tcGFkZGluZy1ib3R0b206IDA7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MH0uaW9uLXBhZGRpbmcsW3BhZGRpbmddey0tcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpOy0tcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTstLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7LS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctbGVmdDp2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy1yaWdodDp2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy10b3A6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctYm90dG9tOnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KX1Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCl7Lmlvbi1wYWRkaW5nLFtwYWRkaW5nXXtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpfX0uaW9uLXBhZGRpbmctdG9wLFtwYWRkaW5nLXRvcF17LS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctdG9wOnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KX0uaW9uLXBhZGRpbmctc3RhcnQsW3BhZGRpbmctc3RhcnRdey0tcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctbGVmdDp2YXIoLS1pb24tcGFkZGluZywgMTZweCl9QHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApey5pb24tcGFkZGluZy1zdGFydCxbcGFkZGluZy1zdGFydF17cGFkZGluZy1sZWZ0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpfX0uaW9uLXBhZGRpbmctZW5kLFtwYWRkaW5nLWVuZF17LS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctcmlnaHQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpfUBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKXsuaW9uLXBhZGRpbmctZW5kLFtwYWRkaW5nLWVuZF17cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpfX0uaW9uLXBhZGRpbmctYm90dG9tLFtwYWRkaW5nLWJvdHRvbV17LS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctYm90dG9tOnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KX0uaW9uLXBhZGRpbmctdmVydGljYWwsW3BhZGRpbmctdmVydGljYWxdey0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTstLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy10b3A6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctYm90dG9tOnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KX0uaW9uLXBhZGRpbmctaG9yaXpvbnRhbCxbcGFkZGluZy1ob3Jpem9udGFsXXstLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTstLXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy1sZWZ0OnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLXJpZ2h0OnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KX1Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCl7Lmlvbi1wYWRkaW5nLWhvcml6b250YWwsW3BhZGRpbmctaG9yaXpvbnRhbF17cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1pb24tcGFkZGluZywgMTZweCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KX19Lmlvbi1uby1tYXJnaW4sW25vLW1hcmdpbl17LS1tYXJnaW4tc3RhcnQ6IDA7LS1tYXJnaW4tZW5kOiAwOy0tbWFyZ2luLXRvcDogMDstLW1hcmdpbi1ib3R0b206IDA7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfS5pb24tbWFyZ2luLFttYXJnaW5dey0tbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTstLW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpOy0tbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7LS1tYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTttYXJnaW4tbGVmdDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTttYXJnaW4tcmlnaHQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLXRvcDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTttYXJnaW4tYm90dG9tOnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpfUBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKXsuaW9uLW1hcmdpbixbbWFyZ2luXXttYXJnaW4tbGVmdDp1bnNldDttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLWlubGluZS1zdGFydDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTstd2Via2l0LW1hcmdpbi1lbmQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLWlubGluZS1lbmQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCl9fS5pb24tbWFyZ2luLXRvcCxbbWFyZ2luLXRvcF17LS1tYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTttYXJnaW4tdG9wOnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpfS5pb24tbWFyZ2luLXN0YXJ0LFttYXJnaW4tc3RhcnRdey0tbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTttYXJnaW4tbGVmdDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KX1Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCl7Lmlvbi1tYXJnaW4tc3RhcnQsW21hcmdpbi1zdGFydF17bWFyZ2luLWxlZnQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLWlubGluZS1zdGFydDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KX19Lmlvbi1tYXJnaW4tZW5kLFttYXJnaW4tZW5kXXstLW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1yaWdodDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KX1Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCl7Lmlvbi1tYXJnaW4tZW5kLFttYXJnaW4tZW5kXXttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tZW5kOnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1pbmxpbmUtZW5kOnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpfX0uaW9uLW1hcmdpbi1ib3R0b20sW21hcmdpbi1ib3R0b21dey0tbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLWJvdHRvbTp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KX0uaW9uLW1hcmdpbi12ZXJ0aWNhbCxbbWFyZ2luLXZlcnRpY2FsXXstLW1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpOy0tbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLXRvcDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTttYXJnaW4tYm90dG9tOnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpfS5pb24tbWFyZ2luLWhvcml6b250YWwsW21hcmdpbi1ob3Jpem9udGFsXXstLW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7LS1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTttYXJnaW4tbGVmdDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTttYXJnaW4tcmlnaHQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCl9QHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApey5pb24tbWFyZ2luLWhvcml6b250YWwsW21hcmdpbi1ob3Jpem9udGFsXXttYXJnaW4tbGVmdDp1bnNldDttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLWlubGluZS1zdGFydDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTstd2Via2l0LW1hcmdpbi1lbmQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLWlubGluZS1lbmQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCl9fVxuIiwiLmlvbi1mbG9hdC1sZWZ0LFtmbG9hdC1sZWZ0XXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9Lmlvbi1mbG9hdC1yaWdodCxbZmxvYXQtcmlnaHRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9Lmlvbi1mbG9hdC1zdGFydCxbZmxvYXQtc3RhcnRde2Zsb2F0OmxlZnQgIWltcG9ydGFudH1bZGlyPXJ0bF0gLmlvbi1mbG9hdC1zdGFydCw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1zdGFydCxbZGlyPXJ0bF0gW2Zsb2F0LXN0YXJ0XSw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LXN0YXJ0XXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fS5pb24tZmxvYXQtZW5kLFtmbG9hdC1lbmRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9W2Rpcj1ydGxdIC5pb24tZmxvYXQtZW5kLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LWVuZCxbZGlyPXJ0bF0gW2Zsb2F0LWVuZF0sOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC1lbmRde2Zsb2F0OmxlZnQgIWltcG9ydGFudH1AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpey5pb24tZmxvYXQtc20tbGVmdCxbZmxvYXQtc20tbGVmdF17ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fS5pb24tZmxvYXQtc20tcmlnaHQsW2Zsb2F0LXNtLXJpZ2h0XXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fS5pb24tZmxvYXQtc20tc3RhcnQsW2Zsb2F0LXNtLXN0YXJ0XXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9W2Rpcj1ydGxdIC5pb24tZmxvYXQtc20tc3RhcnQsOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtc20tc3RhcnQsW2Rpcj1ydGxdIFtmbG9hdC1zbS1zdGFydF0sOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC1zbS1zdGFydF17ZmxvYXQ6cmlnaHQgIWltcG9ydGFudH0uaW9uLWZsb2F0LXNtLWVuZCxbZmxvYXQtc20tZW5kXXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fVtkaXI9cnRsXSAuaW9uLWZsb2F0LXNtLWVuZCw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1zbS1lbmQsW2Rpcj1ydGxdIFtmbG9hdC1zbS1lbmRdLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtc20tZW5kXXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7Lmlvbi1mbG9hdC1tZC1sZWZ0LFtmbG9hdC1tZC1sZWZ0XXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9Lmlvbi1mbG9hdC1tZC1yaWdodCxbZmxvYXQtbWQtcmlnaHRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9Lmlvbi1mbG9hdC1tZC1zdGFydCxbZmxvYXQtbWQtc3RhcnRde2Zsb2F0OmxlZnQgIWltcG9ydGFudH1bZGlyPXJ0bF0gLmlvbi1mbG9hdC1tZC1zdGFydCw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1tZC1zdGFydCxbZGlyPXJ0bF0gW2Zsb2F0LW1kLXN0YXJ0XSw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LW1kLXN0YXJ0XXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fS5pb24tZmxvYXQtbWQtZW5kLFtmbG9hdC1tZC1lbmRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9W2Rpcj1ydGxdIC5pb24tZmxvYXQtbWQtZW5kLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LW1kLWVuZCxbZGlyPXJ0bF0gW2Zsb2F0LW1kLWVuZF0sOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC1tZC1lbmRde2Zsb2F0OmxlZnQgIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KXsuaW9uLWZsb2F0LWxnLWxlZnQsW2Zsb2F0LWxnLWxlZnRde2Zsb2F0OmxlZnQgIWltcG9ydGFudH0uaW9uLWZsb2F0LWxnLXJpZ2h0LFtmbG9hdC1sZy1yaWdodF17ZmxvYXQ6cmlnaHQgIWltcG9ydGFudH0uaW9uLWZsb2F0LWxnLXN0YXJ0LFtmbG9hdC1sZy1zdGFydF17ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fVtkaXI9cnRsXSAuaW9uLWZsb2F0LWxnLXN0YXJ0LDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LWxnLXN0YXJ0LFtkaXI9cnRsXSBbZmxvYXQtbGctc3RhcnRdLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtbGctc3RhcnRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9Lmlvbi1mbG9hdC1sZy1lbmQsW2Zsb2F0LWxnLWVuZF17ZmxvYXQ6cmlnaHQgIWltcG9ydGFudH1bZGlyPXJ0bF0gLmlvbi1mbG9hdC1sZy1lbmQsOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtbGctZW5kLFtkaXI9cnRsXSBbZmxvYXQtbGctZW5kXSw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LWxnLWVuZF17ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KXsuaW9uLWZsb2F0LXhsLWxlZnQsW2Zsb2F0LXhsLWxlZnRde2Zsb2F0OmxlZnQgIWltcG9ydGFudH0uaW9uLWZsb2F0LXhsLXJpZ2h0LFtmbG9hdC14bC1yaWdodF17ZmxvYXQ6cmlnaHQgIWltcG9ydGFudH0uaW9uLWZsb2F0LXhsLXN0YXJ0LFtmbG9hdC14bC1zdGFydF17ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fVtkaXI9cnRsXSAuaW9uLWZsb2F0LXhsLXN0YXJ0LDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LXhsLXN0YXJ0LFtkaXI9cnRsXSBbZmxvYXQteGwtc3RhcnRdLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQteGwtc3RhcnRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9Lmlvbi1mbG9hdC14bC1lbmQsW2Zsb2F0LXhsLWVuZF17ZmxvYXQ6cmlnaHQgIWltcG9ydGFudH1bZGlyPXJ0bF0gLmlvbi1mbG9hdC14bC1lbmQsOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQteGwtZW5kLFtkaXI9cnRsXSBbZmxvYXQteGwtZW5kXSw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LXhsLWVuZF17ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fX1cbiIsIi5pb24tdGV4dC1jZW50ZXIsW3RleHQtY2VudGVyXXt0ZXh0LWFsaWduOmNlbnRlciAhaW1wb3J0YW50fS5pb24tdGV4dC1qdXN0aWZ5LFt0ZXh0LWp1c3RpZnlde3RleHQtYWxpZ246anVzdGlmeSAhaW1wb3J0YW50fS5pb24tdGV4dC1zdGFydCxbdGV4dC1zdGFydF17dGV4dC1hbGlnbjpzdGFydCAhaW1wb3J0YW50fS5pb24tdGV4dC1lbmQsW3RleHQtZW5kXXt0ZXh0LWFsaWduOmVuZCAhaW1wb3J0YW50fS5pb24tdGV4dC1sZWZ0LFt0ZXh0LWxlZnRde3RleHQtYWxpZ246bGVmdCAhaW1wb3J0YW50fS5pb24tdGV4dC1yaWdodCxbdGV4dC1yaWdodF17dGV4dC1hbGlnbjpyaWdodCAhaW1wb3J0YW50fS5pb24tdGV4dC1ub3dyYXAsW3RleHQtbm93cmFwXXt3aGl0ZS1zcGFjZTpub3dyYXAgIWltcG9ydGFudH0uaW9uLXRleHQtd3JhcCxbdGV4dC13cmFwXXt3aGl0ZS1zcGFjZTpub3JtYWwgIWltcG9ydGFudH1AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpey5pb24tdGV4dC1zbS1jZW50ZXIsW3RleHQtc20tY2VudGVyXXt0ZXh0LWFsaWduOmNlbnRlciAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1qdXN0aWZ5LFt0ZXh0LXNtLWp1c3RpZnlde3RleHQtYWxpZ246anVzdGlmeSAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1zdGFydCxbdGV4dC1zbS1zdGFydF17dGV4dC1hbGlnbjpzdGFydCAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1lbmQsW3RleHQtc20tZW5kXXt0ZXh0LWFsaWduOmVuZCAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1sZWZ0LFt0ZXh0LXNtLWxlZnRde3RleHQtYWxpZ246bGVmdCAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1yaWdodCxbdGV4dC1zbS1yaWdodF17dGV4dC1hbGlnbjpyaWdodCAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1ub3dyYXAsW3RleHQtc20tbm93cmFwXXt3aGl0ZS1zcGFjZTpub3dyYXAgIWltcG9ydGFudH0uaW9uLXRleHQtc20td3JhcCxbdGV4dC1zbS13cmFwXXt3aGl0ZS1zcGFjZTpub3JtYWwgIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXsuaW9uLXRleHQtbWQtY2VudGVyLFt0ZXh0LW1kLWNlbnRlcl17dGV4dC1hbGlnbjpjZW50ZXIgIWltcG9ydGFudH0uaW9uLXRleHQtbWQtanVzdGlmeSxbdGV4dC1tZC1qdXN0aWZ5XXt0ZXh0LWFsaWduOmp1c3RpZnkgIWltcG9ydGFudH0uaW9uLXRleHQtbWQtc3RhcnQsW3RleHQtbWQtc3RhcnRde3RleHQtYWxpZ246c3RhcnQgIWltcG9ydGFudH0uaW9uLXRleHQtbWQtZW5kLFt0ZXh0LW1kLWVuZF17dGV4dC1hbGlnbjplbmQgIWltcG9ydGFudH0uaW9uLXRleHQtbWQtbGVmdCxbdGV4dC1tZC1sZWZ0XXt0ZXh0LWFsaWduOmxlZnQgIWltcG9ydGFudH0uaW9uLXRleHQtbWQtcmlnaHQsW3RleHQtbWQtcmlnaHRde3RleHQtYWxpZ246cmlnaHQgIWltcG9ydGFudH0uaW9uLXRleHQtbWQtbm93cmFwLFt0ZXh0LW1kLW5vd3JhcF17d2hpdGUtc3BhY2U6bm93cmFwICFpbXBvcnRhbnR9Lmlvbi10ZXh0LW1kLXdyYXAsW3RleHQtbWQtd3JhcF17d2hpdGUtc3BhY2U6bm9ybWFsICFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7Lmlvbi10ZXh0LWxnLWNlbnRlcixbdGV4dC1sZy1jZW50ZXJde3RleHQtYWxpZ246Y2VudGVyICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWxnLWp1c3RpZnksW3RleHQtbGctanVzdGlmeV17dGV4dC1hbGlnbjpqdXN0aWZ5ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWxnLXN0YXJ0LFt0ZXh0LWxnLXN0YXJ0XXt0ZXh0LWFsaWduOnN0YXJ0ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWxnLWVuZCxbdGV4dC1sZy1lbmRde3RleHQtYWxpZ246ZW5kICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWxnLWxlZnQsW3RleHQtbGctbGVmdF17dGV4dC1hbGlnbjpsZWZ0ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWxnLXJpZ2h0LFt0ZXh0LWxnLXJpZ2h0XXt0ZXh0LWFsaWduOnJpZ2h0ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWxnLW5vd3JhcCxbdGV4dC1sZy1ub3dyYXBde3doaXRlLXNwYWNlOm5vd3JhcCAhaW1wb3J0YW50fS5pb24tdGV4dC1sZy13cmFwLFt0ZXh0LWxnLXdyYXBde3doaXRlLXNwYWNlOm5vcm1hbCAhaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KXsuaW9uLXRleHQteGwtY2VudGVyLFt0ZXh0LXhsLWNlbnRlcl17dGV4dC1hbGlnbjpjZW50ZXIgIWltcG9ydGFudH0uaW9uLXRleHQteGwtanVzdGlmeSxbdGV4dC14bC1qdXN0aWZ5XXt0ZXh0LWFsaWduOmp1c3RpZnkgIWltcG9ydGFudH0uaW9uLXRleHQteGwtc3RhcnQsW3RleHQteGwtc3RhcnRde3RleHQtYWxpZ246c3RhcnQgIWltcG9ydGFudH0uaW9uLXRleHQteGwtZW5kLFt0ZXh0LXhsLWVuZF17dGV4dC1hbGlnbjplbmQgIWltcG9ydGFudH0uaW9uLXRleHQteGwtbGVmdCxbdGV4dC14bC1sZWZ0XXt0ZXh0LWFsaWduOmxlZnQgIWltcG9ydGFudH0uaW9uLXRleHQteGwtcmlnaHQsW3RleHQteGwtcmlnaHRde3RleHQtYWxpZ246cmlnaHQgIWltcG9ydGFudH0uaW9uLXRleHQteGwtbm93cmFwLFt0ZXh0LXhsLW5vd3JhcF17d2hpdGUtc3BhY2U6bm93cmFwICFpbXBvcnRhbnR9Lmlvbi10ZXh0LXhsLXdyYXAsW3RleHQteGwtd3JhcF17d2hpdGUtc3BhY2U6bm9ybWFsICFpbXBvcnRhbnR9fVxuIiwiLmlvbi10ZXh0LXVwcGVyY2FzZSxbdGV4dC11cHBlcmNhc2Vde3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZSAhaW1wb3J0YW50fS5pb24tdGV4dC1sb3dlcmNhc2UsW3RleHQtbG93ZXJjYXNlXXt0ZXh0LXRyYW5zZm9ybTpsb3dlcmNhc2UgIWltcG9ydGFudH0uaW9uLXRleHQtY2FwaXRhbGl6ZSxbdGV4dC1jYXBpdGFsaXplXXt0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplICFpbXBvcnRhbnR9QG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXsuaW9uLXRleHQtc20tdXBwZXJjYXNlLFt0ZXh0LXNtLXVwcGVyY2FzZV17dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlICFpbXBvcnRhbnR9Lmlvbi10ZXh0LXNtLWxvd2VyY2FzZSxbdGV4dC1zbS1sb3dlcmNhc2Vde3RleHQtdHJhbnNmb3JtOmxvd2VyY2FzZSAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1jYXBpdGFsaXplLFt0ZXh0LXNtLWNhcGl0YWxpemVde3RleHQtdHJhbnNmb3JtOmNhcGl0YWxpemUgIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXsuaW9uLXRleHQtbWQtdXBwZXJjYXNlLFt0ZXh0LW1kLXVwcGVyY2FzZV17dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlICFpbXBvcnRhbnR9Lmlvbi10ZXh0LW1kLWxvd2VyY2FzZSxbdGV4dC1tZC1sb3dlcmNhc2Vde3RleHQtdHJhbnNmb3JtOmxvd2VyY2FzZSAhaW1wb3J0YW50fS5pb24tdGV4dC1tZC1jYXBpdGFsaXplLFt0ZXh0LW1kLWNhcGl0YWxpemVde3RleHQtdHJhbnNmb3JtOmNhcGl0YWxpemUgIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KXsuaW9uLXRleHQtbGctdXBwZXJjYXNlLFt0ZXh0LWxnLXVwcGVyY2FzZV17dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWxnLWxvd2VyY2FzZSxbdGV4dC1sZy1sb3dlcmNhc2Vde3RleHQtdHJhbnNmb3JtOmxvd2VyY2FzZSAhaW1wb3J0YW50fS5pb24tdGV4dC1sZy1jYXBpdGFsaXplLFt0ZXh0LWxnLWNhcGl0YWxpemVde3RleHQtdHJhbnNmb3JtOmNhcGl0YWxpemUgIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCl7Lmlvbi10ZXh0LXhsLXVwcGVyY2FzZSxbdGV4dC14bC11cHBlcmNhc2Vde3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZSAhaW1wb3J0YW50fS5pb24tdGV4dC14bC1sb3dlcmNhc2UsW3RleHQteGwtbG93ZXJjYXNlXXt0ZXh0LXRyYW5zZm9ybTpsb3dlcmNhc2UgIWltcG9ydGFudH0uaW9uLXRleHQteGwtY2FwaXRhbGl6ZSxbdGV4dC14bC1jYXBpdGFsaXplXXt0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplICFpbXBvcnRhbnR9fVxuIiwiLmlvbi1hbGlnbi1zZWxmLXN0YXJ0LFthbGlnbi1zZWxmLXN0YXJ0XXthbGlnbi1zZWxmOmZsZXgtc3RhcnQgIWltcG9ydGFudH0uaW9uLWFsaWduLXNlbGYtZW5kLFthbGlnbi1zZWxmLWVuZF17YWxpZ24tc2VsZjpmbGV4LWVuZCAhaW1wb3J0YW50fS5pb24tYWxpZ24tc2VsZi1jZW50ZXIsW2FsaWduLXNlbGYtY2VudGVyXXthbGlnbi1zZWxmOmNlbnRlciAhaW1wb3J0YW50fS5pb24tYWxpZ24tc2VsZi1zdHJldGNoLFthbGlnbi1zZWxmLXN0cmV0Y2hde2FsaWduLXNlbGY6c3RyZXRjaCAhaW1wb3J0YW50fS5pb24tYWxpZ24tc2VsZi1iYXNlbGluZSxbYWxpZ24tc2VsZi1iYXNlbGluZV17YWxpZ24tc2VsZjpiYXNlbGluZSAhaW1wb3J0YW50fS5pb24tYWxpZ24tc2VsZi1hdXRvLFthbGlnbi1zZWxmLWF1dG9de2FsaWduLXNlbGY6YXV0byAhaW1wb3J0YW50fS5pb24td3JhcCxbd3JhcF17ZmxleC13cmFwOndyYXAgIWltcG9ydGFudH0uaW9uLW5vd3JhcCxbbm93cmFwXXtmbGV4LXdyYXA6bm93cmFwICFpbXBvcnRhbnR9Lmlvbi13cmFwLXJldmVyc2UsW3dyYXAtcmV2ZXJzZV17ZmxleC13cmFwOndyYXAtcmV2ZXJzZSAhaW1wb3J0YW50fS5pb24tanVzdGlmeS1jb250ZW50LXN0YXJ0LFtqdXN0aWZ5LWNvbnRlbnQtc3RhcnRde2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0ICFpbXBvcnRhbnR9Lmlvbi1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyLFtqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXXtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyICFpbXBvcnRhbnR9Lmlvbi1qdXN0aWZ5LWNvbnRlbnQtZW5kLFtqdXN0aWZ5LWNvbnRlbnQtZW5kXXtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQgIWltcG9ydGFudH0uaW9uLWp1c3RpZnktY29udGVudC1hcm91bmQsW2p1c3RpZnktY29udGVudC1hcm91bmRde2p1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQgIWltcG9ydGFudH0uaW9uLWp1c3RpZnktY29udGVudC1iZXR3ZWVuLFtqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbl17anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW4gIWltcG9ydGFudH0uaW9uLWp1c3RpZnktY29udGVudC1ldmVubHksW2p1c3RpZnktY29udGVudC1ldmVubHlde2p1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHkgIWltcG9ydGFudH0uaW9uLWFsaWduLWl0ZW1zLXN0YXJ0LFthbGlnbi1pdGVtcy1zdGFydF17YWxpZ24taXRlbXM6ZmxleC1zdGFydCAhaW1wb3J0YW50fS5pb24tYWxpZ24taXRlbXMtY2VudGVyLFthbGlnbi1pdGVtcy1jZW50ZXJde2FsaWduLWl0ZW1zOmNlbnRlciAhaW1wb3J0YW50fS5pb24tYWxpZ24taXRlbXMtZW5kLFthbGlnbi1pdGVtcy1lbmRde2FsaWduLWl0ZW1zOmZsZXgtZW5kICFpbXBvcnRhbnR9Lmlvbi1hbGlnbi1pdGVtcy1zdHJldGNoLFthbGlnbi1pdGVtcy1zdHJldGNoXXthbGlnbi1pdGVtczpzdHJldGNoICFpbXBvcnRhbnR9Lmlvbi1hbGlnbi1pdGVtcy1iYXNlbGluZSxbYWxpZ24taXRlbXMtYmFzZWxpbmVde2FsaWduLWl0ZW1zOmJhc2VsaW5lICFpbXBvcnRhbnR9XG4iLCIvLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2NvcmUuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9ub3JtYWxpemUuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9zdHJ1Y3R1cmUuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy90eXBvZ3JhcGh5LmNzc1wiO1xuXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvZmxvYXQtZWxlbWVudHMuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LWFsaWdubWVudC5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9mbGV4LXV0aWxzLmNzc1wiO1xuXG5ib2R5IHtcbiAgZm9udDogbm9ybWFsIG5vcm1hbCAxMnB4LzJlbSBcIuWui+S9k1wiLCBWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNDQ0O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGNvbG9yOiBcImRhbmdlclwiO1xufVxuXG5pb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tb3ZpZS1kZXRhaWwge1xuICBmb250LXNpemU6IDlweDtcbn1cblxudmlkZW8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyAvL+WboOS4uuacieS4pOS4queZvei+ue+8jOaJgOS7peabtOaUueatpOiDjOaZr1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubW92aWVfaW1nIHtcbiAgd2lkdGg6IDE1MnB4O1xuICBoZWlnaHQ6IDEwMnB4O1xufVxuXG4uc2MtaW9uLXNlZ21lbnQtbWQtaCB7XG4gIC0tY29sb3ItY2hlY2tlZDogcmVkO1xufVxuXG4uYzAxIHtcbiAgY29sb3I6ICMyM2E3ZTk7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuLmMwMiB7XG4gIGNvbG9yOiAjNDQ0O1xufVxuXG4uc291cmNlX25hbWUge1xuICBmb250LWZhbWlseTogXCJNaWNyb3NvZnQgWWFIZWlcIiwgXCLlvq7ova/pm4Xpu5FcIiwgdGFob21hLCBhcmlhbCwgc2ltc3VuLCBcIuWui+S9k1wiO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMjNhN2U5O1xuICBwYWRkaW5nOiAwcHggMHB4IDRweCAwcHg7XG59XG5cbi5zb3VyY2VfdHlwZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIGJvcmRlci1yYWRpdXM6IDFweCAxcHggMXB4IDFweDtcbiAgbWFyZ2luOiAwIDRweCA0cHggMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDBweCA0cHg7XG59XG5cbi5zb3VyY2VfdHlwZV9hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ubW9yZV9tb3ZpZV90eXBlX25hbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjNDQ0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMCA2cHg7XG59XG5cbi5tb3JlX21vdmllX3R5cGVfbmFtZV9zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/theme/variables.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #3880ff;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #0cd1e8;\n  --ion-color-secondary-rgb: 12, 209, 232;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0bb8cc;\n  --ion-color-secondary-tint: #24d6ea;\n  /** tertiary **/\n  --ion-color-tertiary: #7044ff;\n  --ion-color-tertiary-rgb: 112, 68, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #633ce0;\n  --ion-color-tertiary-tint: #7e57ff;\n  /** success **/\n  --ion-color-success: #10dc60;\n  --ion-color-success-rgb: 16, 220, 96;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #0ec254;\n  --ion-color-success-tint: #28e070;\n  /** warning **/\n  --ion-color-warning: #ffce00;\n  --ion-color-warning-rgb: 255, 206, 0;\n  --ion-color-warning-contrast: #ffffff;\n  --ion-color-warning-contrast-rgb: 255, 255, 255;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n  /** danger **/\n  --ion-color-danger: #f04141;\n  --ion-color-danger-rgb: 245, 61, 61;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #d33939;\n  --ion-color-danger-tint: #f25454;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 34, 34;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 244, 244;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWlwZW5nL1BlcnNvbmFsL1Byb2plY3RzL1BvY2tldEZpbG0vTW9iaWxlL1BvY2tldEZpbG0vc3JjL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDBCQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsNEJBQW9CO0VBQ3BCLHFDQUF3QjtFQUN4QixxQ0FBNkI7RUFDN0IsK0NBQWlDO0VBQ2pDLGtDQUEwQjtFQUMxQixpQ0FBeUI7RUFFekIsZ0JBQUE7RUFDQSw4QkFBc0I7RUFDdEIsdUNBQTBCO0VBQzFCLHVDQUErQjtFQUMvQixpREFBbUM7RUFDbkMsb0NBQTRCO0VBQzVCLG1DQUEyQjtFQUUzQixlQUFBO0VBQ0EsNkJBQXFCO0VBQ3JCLHNDQUF5QjtFQUN6QixzQ0FBOEI7RUFDOUIsZ0RBQWtDO0VBQ2xDLG1DQUEyQjtFQUMzQixrQ0FBMEI7RUFFMUIsY0FBQTtFQUNBLDRCQUFvQjtFQUNwQixvQ0FBd0I7RUFDeEIscUNBQTZCO0VBQzdCLCtDQUFpQztFQUNqQyxrQ0FBMEI7RUFDMUIsaUNBQXlCO0VBRXpCLGNBQUE7RUFDQSw0QkFBb0I7RUFDcEIsb0NBQXdCO0VBQ3hCLHFDQUE2QjtFQUM3QiwrQ0FBaUM7RUFDakMsa0NBQTBCO0VBQzFCLGlDQUF5QjtFQUV6QixhQUFBO0VBQ0EsMkJBQW1CO0VBQ25CLG1DQUF1QjtFQUN2QixvQ0FBNEI7RUFDNUIsOENBQWdDO0VBQ2hDLGlDQUF5QjtFQUN6QixnQ0FBd0I7RUFFeEIsV0FBQTtFQUNBLHlCQUFpQjtFQUNqQixnQ0FBcUI7RUFDckIsa0NBQTBCO0VBQzFCLDRDQUE4QjtFQUM5QiwrQkFBdUI7RUFDdkIsOEJBQXNCO0VBRXRCLGFBQUE7RUFDQSwyQkFBbUI7RUFDbkIscUNBQXVCO0VBQ3ZCLG9DQUE0QjtFQUM1Qiw4Q0FBZ0M7RUFDaEMsaUNBQXlCO0VBQ3pCLGdDQUF3QjtFQUV4QixZQUFBO0VBQ0EsMEJBQWtCO0VBQ2xCLG9DQUFzQjtFQUN0QixtQ0FBMkI7RUFDM0IsdUNBQStCO0VBQy9CLGdDQUF3QjtFQUN4QiwrQkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG46cm9vdCB7XG4gIC8qKiBwcmltYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjMzg4MGZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNTYsIDEyOCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzMxNzFlMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNGM4ZGZmO1xuXG4gIC8qKiBzZWNvbmRhcnkgKiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzBjZDFlODtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogMTIsIDIwOSwgMjMyO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzBiYjhjYztcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICMyNGQ2ZWE7XG5cbiAgLyoqIHRlcnRpYXJ5ICoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzcwNDRmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMTIsIDY4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNjMzY2UwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjN2U1N2ZmO1xuXG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMTBkYzYwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogMTYsIDIyMCwgOTY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMGVjMjU0O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICMyOGUwNzA7XG5cbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmNlMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDIwNiwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGI1MDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmZDMxYTtcblxuICAvKiogZGFuZ2VyICoqL1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNmMDQxNDE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI0NSwgNjEsIDYxO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2QzMzkzOTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmMjU0NTQ7XG5cbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzQsIDM0O1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuXG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzk4OWFhMjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLCAxNTQsIDE2MjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjYTJhNGFiO1xuXG4gIC8qKiBsaWdodCAqKi9cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNmNGY1Zjg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQ0LCAyNDQsIDI0NDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XG59XG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/global.scss":
/*!*************************!*\
  !*** ./src/global.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./global.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/theme/variables.scss":
/*!**********************************!*\
  !*** ./src/theme/variables.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/lib/loader.js??ref--14-3!./variables.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!**********************************************************!*\
  !*** multi ./src/theme/variables.scss ./src/global.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/weipeng/Personal/Projects/PocketFilm/Mobile/PocketFilm/src/theme/variables.scss */"./src/theme/variables.scss");
module.exports = __webpack_require__(/*! /Users/weipeng/Personal/Projects/PocketFilm/Mobile/PocketFilm/src/global.scss */"./src/global.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map