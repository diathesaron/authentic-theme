!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../../addon/mode/simple")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../../addon/mode/simple"],e):e(CodeMirror)}(function(e){"use strict";var n=new RegExp("^(\\s*)\\b(from)\\b","i"),t=["run","cmd","entrypoint","shell"],r=new RegExp("^(\\s*)("+t.join("|")+")(\\s+\\[)","i"),o=new RegExp("^(\\s*)(expose)(\\s+)","i"),l=["arg","from","maintainer","label","env","add","copy","volume","user","workdir","onbuild","stopsignal","healthcheck","shell"],s=["from","expose"].concat(t).concat(l),x="("+s.join("|")+")",g=new RegExp("^(\\s*)"+x+"(\\s*)(#.*)?$","i"),i=new RegExp("^(\\s*)"+x+"(\\s+)","i");e.defineSimpleMode("dockerfile",{start:[{regex:/^\s*#.*$/,sol:!0,token:"comment"},{regex:n,token:[null,"keyword"],sol:!0,next:"from"},{regex:g,token:[null,"keyword",null,"error"],sol:!0},{regex:r,token:[null,"keyword",null],sol:!0,next:"array"},{regex:o,token:[null,"keyword",null],sol:!0,next:"expose"},{regex:i,token:[null,"keyword",null],sol:!0,next:"arguments"},{regex:/./,token:null}],from:[{regex:/\s*$/,token:null,next:"start"},{regex:/(\s*)(#.*)$/,token:[null,"error"],next:"start"},{regex:/(\s*\S+\s+)(as)/i,token:[null,"keyword"],next:"start"},{token:null,next:"start"}],single:[{regex:/(?:[^\\']|\\.)/,token:"string"},{regex:/'/,token:"string",pop:!0}],double:[{regex:/(?:[^\\"]|\\.)/,token:"string"},{regex:/"/,token:"string",pop:!0}],array:[{regex:/\]/,token:null,next:"start"},{regex:/"(?:[^\\"]|\\.)*"?/,token:"string"}],expose:[{regex:/\d+$/,token:"number",next:"start"},{regex:/[^\d]+$/,token:null,next:"start"},{regex:/\d+/,token:"number"},{regex:/[^\d]+/,token:null},{token:null,next:"start"}],arguments:[{regex:/^\s*#.*$/,sol:!0,token:"comment"},{regex:/"(?:[^\\"]|\\.)*"?$/,token:"string",next:"start"},{regex:/"/,token:"string",push:"double"},{regex:/'(?:[^\\']|\\.)*'?$/,token:"string",next:"start"},{regex:/'/,token:"string",push:"single"},{regex:/[^#"']+[\\`]$/,token:null},{regex:/[^#"']+$/,token:null,next:"start"},{regex:/[^#"']+/,token:null},{token:null,next:"start"}],meta:{lineComment:"#"}}),e.defineMIME("text/x-dockerfile","dockerfile")});