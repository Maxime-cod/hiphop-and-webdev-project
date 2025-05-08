import * as $$hiphop from '@hop/hiphop';import { ReactiveMachine } from '@hop/hiphop';import { emit } from 'xstate';const every_preemption_aro=$$hiphop.MODULE({'%location':{'filename':'every_preemption_abro.hh.js','pos':122},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'every_preemption_abro.hh.js','pos':136},'direction':'IN','name':'A'}),$$hiphop.SIGNAL({'%location':{'filename':'every_preemption_abro.hh.js','pos':145},'direction':'IN','name':'R'}),$$hiphop.SIGNAL({'%location':{'filename':'every_preemption_abro.hh.js','pos':154},'direction':'OUT','name':'O','init_func':function () {
return 0;
}}),$$hiphop.LOOPEACH({'%location':{'filename':'every_preemption_abro.hh.js','pos':172},'%tag':'LOOPEACH','immediate':false,'apply':function () {
return ((() => {
const R=this.R;return R.now;
})());
}},$$hiphop.SIGACCESS({'signame':'R','pre':false,'val':false,'cnt':false}),$$hiphop.EMIT({'%location':{'filename':'every_preemption_abro.hh.js','pos':185},'%tag':'EMIT','signame':'O','apply':function () {
return 0;
}}),$$hiphop.AWAIT({'%location':{'filename':'every_preemption_abro.hh.js','pos':195},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const A=this.A;return A.now;
})());
}},$$hiphop.SIGACCESS({'signame':'A','pre':false,'val':false,'cnt':false})),$$hiphop.EMIT({'%location':{'filename':'every_preemption_abro.hh.js','pos':218},'%tag':'EMIT','signame':'O','apply':function () {
return ((() => {
const O=this.O;return O.preval + 1;
})());
}},$$hiphop.SIGACCESS({'signame':'O','pre':true,'val':true,'cnt':false})),$$hiphop.AWAIT({'%location':{'filename':'every_preemption_abro.hh.js','pos':239},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const A=this.A;return A.now;
})());
}},$$hiphop.SIGACCESS({'signame':'A','pre':false,'val':false,'cnt':false})),$$hiphop.EMIT({'%location':{'filename':'every_preemption_abro.hh.js','pos':262},'%tag':'EMIT','signame':'O','apply':function () {
return ((() => {
const O=this.O;return O.preval + 1;
})());
}},$$hiphop.SIGACCESS({'signame':'O','pre':true,'val':true,'cnt':false})),$$hiphop.AWAIT({'%location':{'filename':'every_preemption_abro.hh.js','pos':283},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const A=this.A;return A.now;
})());
}},$$hiphop.SIGACCESS({'signame':'A','pre':false,'val':false,'cnt':false})),$$hiphop.EMIT({'%location':{'filename':'every_preemption_abro.hh.js','pos':306},'%tag':'EMIT','signame':'O','apply':function () {
return ((() => {
const O=this.O;return O.preval + 1;
})());
}},$$hiphop.SIGACCESS({'signame':'O','pre':true,'val':true,'cnt':false})),$$hiphop.AWAIT({'%location':{'filename':'every_preemption_abro.hh.js','pos':327},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const A=this.A;return A.now;
})());
}},$$hiphop.SIGACCESS({'signame':'A','pre':false,'val':false,'cnt':false})),$$hiphop.EMIT({'%location':{'filename':'every_preemption_abro.hh.js','pos':350},'%tag':'EMIT','signame':'O','apply':function () {
return ((() => {
const O=this.O;return O.preval + 1;
})());
}},$$hiphop.SIGACCESS({'signame':'O','pre':true,'val':true,'cnt':false}))));
export { every_preemption_aro };
//# sourceMappingURL=every_preemption_abro.mjs.map
