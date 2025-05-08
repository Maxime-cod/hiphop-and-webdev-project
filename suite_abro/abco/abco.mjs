import * as $$hiphop from '@hop/hiphop';import { ReactiveMachine } from '@hop/hiphop';const abco=$$hiphop.MODULE({'%location':{'filename':'abco.hh.js','pos':75},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'abco.hh.js','pos':89},'direction':'IN','name':'A'}),$$hiphop.SIGNAL({'%location':{'filename':'abco.hh.js','pos':98},'direction':'IN','name':'B'}),$$hiphop.SIGNAL({'%location':{'filename':'abco.hh.js','pos':107},'direction':'IN','name':'C'}),$$hiphop.SIGNAL({'%location':{'filename':'abco.hh.js','pos':116},'direction':'OUT','name':'O','init_func':function () {
return 0;
}}),$$hiphop.FORK({'%location':{'filename':'abco.hh.js','pos':134},'%tag':'FORK'},$$hiphop.AWAIT({'%location':{'filename':'abco.hh.js','pos':149},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const A=this.A;return A.now;
})());
}},$$hiphop.SIGACCESS({'signame':'A','pre':false,'val':false,'cnt':false})),$$hiphop.AWAIT({'%location':{'filename':'abco.hh.js','pos':184},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const B=this.B;return B.now;
})());
}},$$hiphop.SIGACCESS({'signame':'B','pre':false,'val':false,'cnt':false})),$$hiphop.AWAIT({'%location':{'filename':'abco.hh.js','pos':219},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const C=this.C;return C.now;
})());
}},$$hiphop.SIGACCESS({'signame':'C','pre':false,'val':false,'cnt':false}))),$$hiphop.EMIT({'%location':{'filename':'abco.hh.js','pos':248},'%tag':'EMIT','signame':'O','apply':function () {
return ((() => {
const O=this.O;return O.preval + 1;
})());
}},$$hiphop.SIGACCESS({'signame':'O','pre':true,'val':true,'cnt':false})));
export { abco };
//# sourceMappingURL=abco.mjs.map
