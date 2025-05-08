import * as $$hiphop from '@hop/hiphop';import { HALT,ReactiveMachine } from '@hop/hiphop';const preemption_abort=$$hiphop.MODULE({'%location':{'filename':'preemption_abort.hh.js','pos':93},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'preemption_abort.hh.js','pos':106},'direction':'IN','name':'A'}),$$hiphop.SIGNAL({'%location':{'filename':'preemption_abort.hh.js','pos':112},'direction':'IN','name':'R'}),$$hiphop.SIGNAL({'%location':{'filename':'preemption_abort.hh.js','pos':118},'direction':'OUT','name':'O','init_func':function () {
return 0;
}}),$$hiphop.LOOP({'%location':{'filename':'preemption_abort.hh.js','pos':132}},$$hiphop.ABORT({'%location':{'filename':'preemption_abort.hh.js','pos':143},'%tag':'ABORT','immediate':false,'apply':function () {
return ((() => {
const R=this.R;return R.now;
})());
}},$$hiphop.SIGACCESS({'signame':'R','pre':false,'val':false,'cnt':false}),$$hiphop.AWAIT({'%location':{'filename':'preemption_abort.hh.js','pos':165},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const A=this.A;return A.now;
})());
}},$$hiphop.SIGACCESS({'signame':'A','pre':false,'val':false,'cnt':false})),$$hiphop.EMIT({'%location':{'filename':'preemption_abort.hh.js','pos':190},'%tag':'EMIT','signame':'O','apply':function () {
return 0;
}}),$$hiphop.PAUSE({'%location':{'filename':'preemption_abort.hh.js','pos':202},'%tag':'yield'}),$$hiphop.EMIT({'%location':{'filename':'preemption_abort.hh.js','pos':273},'%tag':'EMIT','signame':'O','apply':function () {
return 1;
}}),$$hiphop.PAUSE({'%location':{'filename':'preemption_abort.hh.js','pos':285},'%tag':'yield'})),$$hiphop.EMIT({'%location':{'filename':'preemption_abort.hh.js','pos':361},'%tag':'EMIT','signame':'O','apply':function () {
return 2;
}}),$$hiphop.PAUSE({'%location':{'filename':'preemption_abort.hh.js','pos':371},'%tag':'yield'})));
export { preemption_abort };
//# sourceMappingURL=preemption_abort.mjs.map
