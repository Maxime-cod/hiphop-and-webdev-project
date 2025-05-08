import * as $$hiphop from '@hop/hiphop';import { ReactiveMachine } from '@hop/hiphop';const weakabort_abro=$$hiphop.MODULE({'%location':{'filename':'weakabort_abro.hh.js','pos':85},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'weakabort_abro.hh.js','pos':99},'direction':'IN','name':'A'}),$$hiphop.SIGNAL({'%location':{'filename':'weakabort_abro.hh.js','pos':108},'direction':'IN','name':'B'}),$$hiphop.SIGNAL({'%location':{'filename':'weakabort_abro.hh.js','pos':117},'direction':'IN','name':'R'}),$$hiphop.SIGNAL({'%location':{'filename':'weakabort_abro.hh.js','pos':126},'direction':'OUT','name':'O','init_func':function () {
return 0;
}}),$$hiphop.WEAKABORT({'%location':{'filename':'weakabort_abro.hh.js','pos':148},'%tag':'WEAKABORT','immediate':false,'apply':function () {
return ((() => {
const R=this.R;return R.now;
})());
}},$$hiphop.SIGACCESS({'signame':'R','pre':false,'val':false,'cnt':false}),$$hiphop.LOOP({'%location':{'filename':'weakabort_abro.hh.js','pos':170}},$$hiphop.FORK({'%location':{'filename':'weakabort_abro.hh.js','pos':180},'%tag':'FORK'},$$hiphop.AWAIT({'%location':{'filename':'weakabort_abro.hh.js','pos':195},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const A=this.A;return A.now;
})());
}},$$hiphop.SIGACCESS({'signame':'A','pre':false,'val':false,'cnt':false})),$$hiphop.AWAIT({'%location':{'filename':'weakabort_abro.hh.js','pos':230},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const B=this.B;return B.now;
})());
}},$$hiphop.SIGACCESS({'signame':'B','pre':false,'val':false,'cnt':false}))),$$hiphop.EMIT({'%location':{'filename':'weakabort_abro.hh.js','pos':260},'%tag':'EMIT','signame':'O','apply':function () {
return ((() => {
const O=this.O;return O.preval + 1;
})());
}},$$hiphop.SIGACCESS({'signame':'O','pre':true,'val':true,'cnt':false})))));
export { weakabort_abro };
//# sourceMappingURL=weakabort_abro.mjs.map
