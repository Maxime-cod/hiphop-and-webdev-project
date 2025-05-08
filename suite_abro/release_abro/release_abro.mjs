import * as $$hiphop from '@hop/hiphop';import { ReactiveMachine } from '@hop/hiphop';const release_abro=$$hiphop.MODULE({'%location':{'filename':'release_abro.hh.js','pos':83},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'release_abro.hh.js','pos':97},'direction':'IN','name':'A'}),$$hiphop.SIGNAL({'%location':{'filename':'release_abro.hh.js','pos':106},'direction':'IN','name':'B'}),$$hiphop.SIGNAL({'%location':{'filename':'release_abro.hh.js','pos':115},'direction':'IN','name':'R'}),$$hiphop.SIGNAL({'%location':{'filename':'release_abro.hh.js','pos':124},'direction':'OUT','name':'O','init_func':function () {
return 0;
}}),$$hiphop.LOOPEACH({'%location':{'filename':'release_abro.hh.js','pos':142},'%tag':'LOOPEACH','immediate':false,'apply':function () {
return ((() => {
const R=this.R;return R.now;
})());
}},$$hiphop.SIGACCESS({'signame':'R','pre':false,'val':false,'cnt':false}),$$hiphop.FORK({'%location':{'filename':'release_abro.hh.js','pos':150},'%tag':'FORK'},$$hiphop.AWAIT({'%location':{'filename':'release_abro.hh.js','pos':161},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const A=this.A;return A.now;
})());
}},$$hiphop.SIGACCESS({'signame':'A','pre':false,'val':false,'cnt':false})),$$hiphop.AWAIT({'%location':{'filename':'release_abro.hh.js','pos':196},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const B=this.B;return B.now;
})());
}},$$hiphop.SIGACCESS({'signame':'B','pre':false,'val':false,'cnt':false}))),$$hiphop.EMIT({'%location':{'filename':'release_abro.hh.js','pos':226},'%tag':'EMIT','signame':'O','apply':function () {
return ((() => {
const O=this.O;return O.preval + 1;
})());
}},$$hiphop.SIGACCESS({'signame':'O','pre':true,'val':true,'cnt':false}))));
export { release_abro };
//# sourceMappingURL=release_abro.mjs.map
