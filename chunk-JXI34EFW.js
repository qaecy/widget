import{a as D}from"./chunk-5ZRY3FKR.js";import{h as n,i as h}from"./chunk-PY4BY7WK.js";import"./chunk-2H5I36RE.js";import"./chunk-IIBQ532E.js";import"./chunk-VJUA2M4W.js";import"./chunk-HU7WFQWJ.js";import{j as g}from"./chunk-4QWHKD6C.js";import{Ka as m,Y as o,Ya as s,ac as C,bb as a,hb as d,ja as l,mb as f,qb as p,rb as r,sb as c,zb as u}from"./chunk-6VJMAFGR.js";import"./chunk-4JUNAGW5.js";import"./chunk-TJICSKBO.js";function v(t,F){if(t&1&&c(0,"lib-simple-table",1),t&2){let e=u();d("displayFilter",!1)("data",e.data())("columnDefs",e.columnDefs)}}var N=(()=>{class t{files=l([]);data=C(()=>{let e=this.files();return e!==void 0?e.map(i=>(i.modified!==void 0&&(i.modified=D(i.modified)),i)):[]});columnDefs=[new n("name","Name")];ngOnChanges(){this.columnDefs=[new n("name","Name")];let e=this.files();e!==void 0&&e.length&&e[0].modified!==void 0&&this.columnDefs.push(new n("modified","Modified"))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=s({type:t,selectors:[["app-file-list"]],inputs:{files:[1,"files"]},features:[o],decls:2,vars:1,consts:[[1,"container"],[3,"displayFilter","data","columnDefs"]],template:function(i,y){i&1&&(p(0,"div",0),a(1,v,1,3,"lib-simple-table",1),r()),i&2&&(m(),f(y.data().length?1:-1))},dependencies:[h,g],styles:[".container[_ngcontent-%COMP%]{overflow-y:auto;width:100%}"]})}return t})();export{N as FileListComponent};