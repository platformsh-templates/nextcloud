(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[95],{278:function(e,n){e.exports=function(e){var n="[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#!]*",a="(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|\\-)?\\d+)?",i={className:"literal",begin:"\\b(t{1}|nil)\\b"},s={className:"number",variants:[{begin:a,relevance:0},{begin:"#(b|B)[0-1]+(/[0-1]+)?"},{begin:"#(o|O)[0-7]+(/[0-7]+)?"},{begin:"#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?"},{begin:"#(c|C)\\("+a+" +"+a,end:"\\)"}]},b=e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),t=e.COMMENT(";","$",{relevance:0}),l={begin:"\\*",end:"\\*"},g={className:"symbol",begin:"[:&]"+n},c={begin:n,relevance:0},o={begin:"\\|[^]*?\\|"},r={contains:[s,b,l,g,{begin:"\\(",end:"\\)",contains:["self",i,b,s,c]},c],variants:[{begin:"['`]\\(",end:"\\)"},{begin:"\\(quote ",end:"\\)",keywords:{name:"quote"}},{begin:"'\\|[^]*?\\|"}]},d={variants:[{begin:"'"+n},{begin:"#'"+n+"(::"+n+")*"}]},m={begin:"\\(\\s*",end:"\\)"},v={endsWithParent:!0,relevance:0};return m.contains=[{className:"name",variants:[{begin:n},{begin:"\\|[^]*?\\|"}]},v],v.contains=[r,d,m,i,s,b,t,l,g,o,c],{illegal:/\S/,contains:[s,{className:"meta",begin:"^#!",end:"$"},i,b,t,r,d,m,c]}}}}]);
//# sourceMappingURL=lisp.js.map?v=b0748fc40a75293317f8