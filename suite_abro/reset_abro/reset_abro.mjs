import * as $$hiphop from '@hop/hiphop';import { ReactiveMachine } from '@hop/hiphop';const reset_abro=$$hiphop.MODULE({'%location':{'filename':'reset_abro.hh.js','pos':81},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'reset_abro.hh.js','pos':94},'direction':'IN','name':'A'}),$$hiphop.SIGNAL({'%location':{'filename':'reset_abro.hh.js','pos':102},'direction':'IN','name':'B'}),$$hiphop.SIGNAL({'%location':{'filename':'reset_abro.hh.js','pos':110},'direction':'IN','name':'Reset'}),$$hiphop.SIGNAL({'%location':{'filename':'reset_abro.hh.js','pos':122},'direction':'OUT','name':'O','init_func':function () {
return 0;
}}),$$hiphop.LOOP({'%location':{'filename':'reset_abro.hh.js','pos':138}},$$hiphop.ABORT({'%location':{'filename':'reset_abro.hh.js','pos':149},'%tag':'ABORT','immediate':false,'apply':function () {
return ((() => {
const Reset=this.Reset;return Reset.now;
})());
}},$$hiphop.SIGACCESS({'signame':'Reset','pre':false,'val':false,'cnt':false}),$$hiphop.FORK({'%location':{'filename':'reset_abro.hh.js','pos':174},'%tag':'FORK'},$$hiphop.AWAIT({'%location':{'filename':'reset_abro.hh.js','pos':190},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const A=this.A;return A.now;
})());
}},$$hiphop.SIGACCESS({'signame':'A','pre':false,'val':false,'cnt':false})),$$hiphop.AWAIT({'%location':{'filename':'reset_abro.hh.js','pos':228},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const B=this.B;return B.now;
})());
}},$$hiphop.SIGACCESS({'signame':'B','pre':false,'val':false,'cnt':false}))),$$hiphop.EMIT({'%location':{'filename':'reset_abro.hh.js','pos':262},'%tag':'EMIT','signame':'O','apply':function () {
return ((() => {
const O=this.O;return O.preval + 1;
})());
}},$$hiphop.SIGACCESS({'signame':'O','pre':true,'val':true,'cnt':false}))),$$hiphop.IF({'%location':{'filename':'reset_abro.hh.js','pos':385},'%tag':'if','apply':function () {
return ((() => {
const Reset=this.Reset;return Reset.now;
})());
}},$$hiphop.SIGACCESS({'signame':'Reset','pre':false,'val':false,'cnt':false}),$$hiphop.EMIT({'%location':{'filename':'reset_abro.hh.js','pos':414},'%tag':'EMIT','signame':'O','apply':function () {
return 0;
}}))));
export { reset_abro };
//# sourceMappingURL=reset_abro.mjs.map
