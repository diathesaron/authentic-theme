!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";e.defineMode("mathematica",function(e,a){function t(e,a){var t;return'"'===(t=e.next())?(a.tokenize=n,a.tokenize(e,a)):"("===t&&e.eat("*")?(a.commentLevel++,a.tokenize=r,a.tokenize(e,a)):(e.backUp(1),e.match(m,!0,!1)?"number":e.match(c,!0,!1)?"number":e.match(/(?:In|Out)\[[0-9]*\]/,!0,!1)?"atom":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::usage)/,!0,!1)?"meta":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::[a-zA-Z\$][a-zA-Z0-9\$]*):?/,!0,!1)?"string-2":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*\s*:)(?:(?:[a-zA-Z\$][a-zA-Z0-9\$]*)|(?:[^:=>~@\^\&\*\)\[\]'\?,\|])).*/,!0,!1)?"variable-2":e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+[a-zA-Z\$][a-zA-Z0-9\$]*/,!0,!1)?"variable-2":e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+/,!0,!1)?"variable-2":e.match(/_+[a-zA-Z\$][a-zA-Z0-9\$]*/,!0,!1)?"variable-2":e.match(/\\\[[a-zA-Z\$][a-zA-Z0-9\$]*\]/,!0,!1)?"variable-3":e.match(/(?:\[|\]|{|}|\(|\))/,!0,!1)?"bracket":e.match(/(?:#[a-zA-Z\$][a-zA-Z0-9\$]*|#+[0-9]?)/,!0,!1)?"variable-2":e.match(i,!0,!1)?"keyword":e.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%)/,!0,!1)?"operator":(e.next(),"error"))}function n(e,a){for(var n,r=!1,o=!1;null!=(n=e.next());){if('"'===n&&!o){r=!0;break}o=!o&&"\\"===n}return r&&!o&&(a.tokenize=t),"string"}function r(e,a){for(var n,r;a.commentLevel>0&&null!=(r=e.next());)"("===n&&"*"===r&&a.commentLevel++,"*"===n&&")"===r&&a.commentLevel--,n=r;return a.commentLevel<=0&&(a.tokenize=t),"comment"}var o="(?:\\.\\d+|\\d+\\.\\d*|\\d+)",m=new RegExp("(?:(?:\\d+)(?:\\^\\^(?:\\.\\w+|\\w+\\.\\w*|\\w+)(?:`(?:`?"+o+")?)?(?:\\*\\^[+-]?\\d+)?))"),c=new RegExp("(?:"+o+"(?:`(?:`?"+o+")?)?(?:\\*\\^[+-]?\\d+)?)"),i=new RegExp("(?:`?)(?:[a-zA-Z\\$][a-zA-Z0-9\\$]*)(?:`(?:[a-zA-Z\\$][a-zA-Z0-9\\$]*))*(?:`?)");return{startState:function(){return{tokenize:t,commentLevel:0}},token:function(e,a){return e.eatSpace()?null:a.tokenize(e,a)},blockCommentStart:"(*",blockCommentEnd:"*)"}}),e.defineMIME("text/x-mathematica",{name:"mathematica"})});