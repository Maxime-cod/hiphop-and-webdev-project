import * as $$hiphop from '@hop/hiphop';import { ReactiveMachine } from '@hop/hiphop';const prg=$$hiphop.MODULE({'id':'Counter','%location':{'filename':'counter.hh.mjs','pos':67},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'counter.hh.mjs','pos':89},'direction':'IN','name':'A'}),$$hiphop.SIGNAL({'%location':{'filename':'counter.hh.mjs','pos':98},'direction':'IN','name':'B'}),$$hiphop.SIGNAL({'%location':{'filename':'counter.hh.mjs','pos':107},'direction':'IN','name':'R'}),$$hiphop.SIGNAL({'%location':{'filename':'counter.hh.mjs','pos':116},'direction':'IN','name':'TICK'}),$$hiphop.SIGNAL({'%location':{'filename':'counter.hh.mjs','pos':168},'direction':'OUT','name':'O','init_func':function () {
return 0;
}}),$$hiphop.SIGNAL({'%location':{'filename':'counter.hh.mjs','pos':182},'direction':'OUT','name':'DEBUG','init_func':function () {
return '';
}}),$$hiphop.LOOP({'%location':{'filename':'counter.hh.mjs','pos':205}},$$hiphop.AWAIT({'%location':{'filename':'counter.hh.mjs','pos':218},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const TICK=this.TICK;return TICK.now;
})());
}},$$hiphop.SIGACCESS({'signame':'TICK','pre':false,'val':false,'cnt':false})),$$hiphop.IF({'%location':{'filename':'counter.hh.mjs','pos':249},'%tag':'if','apply':function () {
return ((() => {
const R=this.R;return R.nowval == 1;
})());
}},$$hiphop.SIGACCESS({'signame':'R','pre':false,'val':true,'cnt':false}),$$hiphop.SEQUENCE({'%location':{'filename':'counter.hh.mjs','pos':268},'%tag':'sequence'},$$hiphop.EMIT({'%location':{'filename':'counter.hh.mjs','pos':284},'%tag':'EMIT','signame':'O','apply':function () {
return 0;
}}),$$hiphop.EMIT({'%location':{'filename':'counter.hh.mjs','pos':304},'%tag':'EMIT','signame':'DEBUG','apply':function () {
return 'Tick: Reset triggered';
}})),$$hiphop.IF({'%location':{'filename':'counter.hh.mjs','pos':349},'%tag':'if','apply':function () {
return ((() => {
const B=this.B;const A=this.A;return A.nowval == 1 && B.nowval == 1;
})());
}},$$hiphop.SIGACCESS({'signame':'A','pre':false,'val':true,'cnt':false}),$$hiphop.SIGACCESS({'signame':'B','pre':false,'val':true,'cnt':false}),$$hiphop.SEQUENCE({'%location':{'filename':'counter.hh.mjs','pos':381},'%tag':'sequence'},$$hiphop.EMIT({'%location':{'filename':'counter.hh.mjs','pos':397},'%tag':'EMIT','signame':'O','apply':function () {
return ((() => {
const O=this.O;return O.preval + 1;
})());
}},$$hiphop.SIGACCESS({'signame':'O','pre':true,'val':true,'cnt':false})),$$hiphop.EMIT({'%location':{'filename':'counter.hh.mjs','pos':428},'%tag':'EMIT','signame':'DEBUG','apply':function () {
return 'Tick: Both A and B triggered: incrementing counter';
}})),$$hiphop.IF({'%location':{'filename':'counter.hh.mjs','pos':502},'%tag':'if','apply':function () {
return ((() => {
const A=this.A;return A.nowval == 1;
})());
}},$$hiphop.SIGACCESS({'signame':'A','pre':false,'val':true,'cnt':false}),$$hiphop.EMIT({'%location':{'filename':'counter.hh.mjs','pos':535},'%tag':'EMIT','signame':'DEBUG','apply':function () {
return 'Tick: Only A triggered: waiting for B';
}}),$$hiphop.IF({'%location':{'filename':'counter.hh.mjs','pos':596},'%tag':'if','apply':function () {
return ((() => {
const B=this.B;return B.now == 1;
})());
}},$$hiphop.SIGACCESS({'signame':'B','pre':false,'val':false,'cnt':false}),$$hiphop.EMIT({'%location':{'filename':'counter.hh.mjs','pos':626},'%tag':'EMIT','signame':'DEBUG','apply':function () {
return 'Tick: Only B triggered: waiting for A';
}})))))));
const mach=new ReactiveMachine(prg);
export { mach };
//# sourceMappingURL=counter.mjs.map
