import * as $$hiphop from '@hop/hiphop';import { ReactiveMachine } from '@hop/hiphop';const prg=$$hiphop.MODULE({'id':'Counter','%location':{'filename':'counter.hh.mjs','pos':67},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'counter.hh.mjs','pos':88},'direction':'IN','name':'A'}),$$hiphop.SIGNAL({'%location':{'filename':'counter.hh.mjs','pos':96},'direction':'IN','name':'B'}),$$hiphop.SIGNAL({'%location':{'filename':'counter.hh.mjs','pos':104},'direction':'IN','name':'Reset'}),$$hiphop.SIGNAL({'%location':{'filename':'counter.hh.mjs','pos':116},'direction':'OUT','name':'O','init_func':function () {
return 0;
}}),$$hiphop.LOOP({'%location':{'filename':'counter.hh.mjs','pos':132}},$$hiphop.ABORT({'%location':{'filename':'counter.hh.mjs','pos':143},'%tag':'ABORT','immediate':false,'apply':function () {
return ((() => {
const Reset=this.Reset;return Reset.now;
})());
}},$$hiphop.SIGACCESS({'signame':'Reset','pre':false,'val':false,'cnt':false}),$$hiphop.FORK({'%location':{'filename':'counter.hh.mjs','pos':168},'%tag':'FORK'},$$hiphop.AWAIT({'%location':{'filename':'counter.hh.mjs','pos':184},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const A=this.A;return A.now;
})());
}},$$hiphop.SIGACCESS({'signame':'A','pre':false,'val':false,'cnt':false})),$$hiphop.AWAIT({'%location':{'filename':'counter.hh.mjs','pos':222},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const B=this.B;return B.now;
})());
}},$$hiphop.SIGACCESS({'signame':'B','pre':false,'val':false,'cnt':false}))),$$hiphop.EMIT({'%location':{'filename':'counter.hh.mjs','pos':256},'%tag':'EMIT','signame':'O','apply':function () {
return ((() => {
const O=this.O;return O.preval + 1;
})());
}},$$hiphop.SIGACCESS({'signame':'O','pre':true,'val':true,'cnt':false}))),$$hiphop.IF({'%location':{'filename':'counter.hh.mjs','pos':379},'%tag':'if','apply':function () {
return ((() => {
const Reset=this.Reset;return Reset.now;
})());
}},$$hiphop.SIGACCESS({'signame':'Reset','pre':false,'val':false,'cnt':false}),$$hiphop.EMIT({'%location':{'filename':'counter.hh.mjs','pos':408},'%tag':'EMIT','signame':'O','apply':function () {
return 0;
}}))));
const mach=new ReactiveMachine(prg);
export { mach };
//# sourceMappingURL=counter.mjs.map
