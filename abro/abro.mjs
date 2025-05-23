import * as $$hiphop from '@hop/hiphop';import { ReactiveMachine } from '@hop/hiphop';const prg=$$hiphop.MODULE({'%location':{'filename':'abro.hh.mjs','pos':67},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'abro.hh.mjs','pos':81},'direction':'IN','name':'A'}),$$hiphop.SIGNAL({'%location':{'filename':'abro.hh.mjs','pos':90},'direction':'IN','name':'B'}),$$hiphop.SIGNAL({'%location':{'filename':'abro.hh.mjs','pos':99},'direction':'IN','name':'R'}),$$hiphop.SIGNAL({'%location':{'filename':'abro.hh.mjs','pos':108},'direction':'OUT','name':'O','init_func':function () {
return 0;
}}),$$hiphop.LOOPEACH({'%location':{'filename':'abro.hh.mjs','pos':126},'%tag':'LOOPEACH','immediate':false,'apply':function () {
return ((() => {
const R=this.R;return R.now;
})());
}},$$hiphop.SIGACCESS({'signame':'R','pre':false,'val':false,'cnt':false}),$$hiphop.FORK({'%location':{'filename':'abro.hh.mjs','pos':137},'%tag':'FORK'},$$hiphop.AWAIT({'%location':{'filename':'abro.hh.mjs','pos':153},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const A=this.A;return A.now;
})());
}},$$hiphop.SIGACCESS({'signame':'A','pre':false,'val':false,'cnt':false})),$$hiphop.AWAIT({'%location':{'filename':'abro.hh.mjs','pos':191},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const B=this.B;return B.now;
})());
}},$$hiphop.SIGACCESS({'signame':'B','pre':false,'val':false,'cnt':false}))),$$hiphop.EMIT({'%location':{'filename':'abro.hh.mjs','pos':225},'%tag':'EMIT','signame':'O','apply':function () {
return ((() => {
const O=this.O;return O.preval + 1;
})());
}},$$hiphop.SIGACCESS({'signame':'O','pre':true,'val':true,'cnt':false}))));
const mach=new ReactiveMachine(prg);
export { mach };
//# sourceMappingURL=abro.mjs.map
