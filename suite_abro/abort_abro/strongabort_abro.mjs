import * as $$hiphop from '@hop/hiphop';import { ReactiveMachine } from '@hop/hiphop';const strongabort_abro=$$hiphop.MODULE({'%location':{'filename':'strongabort_abro.hh.js','pos':87},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'strongabort_abro.hh.js','pos':101},'direction':'IN','name':'A'}),$$hiphop.SIGNAL({'%location':{'filename':'strongabort_abro.hh.js','pos':110},'direction':'IN','name':'B'}),$$hiphop.SIGNAL({'%location':{'filename':'strongabort_abro.hh.js','pos':119},'direction':'IN','name':'R'}),$$hiphop.SIGNAL({'%location':{'filename':'strongabort_abro.hh.js','pos':128},'direction':'OUT','name':'O','init_func':function () {
return 0;
}}),$$hiphop.ABORT({'%location':{'filename':'strongabort_abro.hh.js','pos':150},'%tag':'ABORT','immediate':false,'apply':function () {
return ((() => {
const R=this.R;return R.now;
})());
}},$$hiphop.SIGACCESS({'signame':'R','pre':false,'val':false,'cnt':false}),$$hiphop.LOOP({'%location':{'filename':'strongabort_abro.hh.js','pos':168}},$$hiphop.FORK({'%location':{'filename':'strongabort_abro.hh.js','pos':178},'%tag':'FORK'},$$hiphop.AWAIT({'%location':{'filename':'strongabort_abro.hh.js','pos':193},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const A=this.A;return A.now;
})());
}},$$hiphop.SIGACCESS({'signame':'A','pre':false,'val':false,'cnt':false})),$$hiphop.AWAIT({'%location':{'filename':'strongabort_abro.hh.js','pos':228},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const B=this.B;return B.now;
})());
}},$$hiphop.SIGACCESS({'signame':'B','pre':false,'val':false,'cnt':false}))),$$hiphop.EMIT({'%location':{'filename':'strongabort_abro.hh.js','pos':258},'%tag':'EMIT','signame':'O','apply':function () {
return ((() => {
const O=this.O;return O.preval + 1;
})());
}},$$hiphop.SIGACCESS({'signame':'O','pre':true,'val':true,'cnt':false})))));
export { strongabort_abro };
//# sourceMappingURL=strongabort_abro.mjs.map
