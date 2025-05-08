import * as $$hiphop from '@hop/hiphop';import { ReactiveMachine } from '@hop/hiphop';const loop_abo=$$hiphop.MODULE({'%location':{'filename':'loop_abo.hh.js','pos':79},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'loop_abo.hh.js','pos':93},'direction':'IN','name':'A'}),$$hiphop.SIGNAL({'%location':{'filename':'loop_abo.hh.js','pos':102},'direction':'IN','name':'B'}),$$hiphop.SIGNAL({'%location':{'filename':'loop_abo.hh.js','pos':111},'direction':'OUT','name':'O','init_func':function () {
return 0;
}}),$$hiphop.LOOP({'%location':{'filename':'loop_abo.hh.js','pos':129}},$$hiphop.FORK({'%location':{'filename':'loop_abo.hh.js','pos':139},'%tag':'FORK'},$$hiphop.AWAIT({'%location':{'filename':'loop_abo.hh.js','pos':150},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const A=this.A;return A.now;
})());
}},$$hiphop.SIGACCESS({'signame':'A','pre':false,'val':false,'cnt':false})),$$hiphop.AWAIT({'%location':{'filename':'loop_abo.hh.js','pos':185},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const B=this.B;return B.now;
})());
}},$$hiphop.SIGACCESS({'signame':'B','pre':false,'val':false,'cnt':false}))),$$hiphop.EMIT({'%location':{'filename':'loop_abo.hh.js','pos':215},'%tag':'EMIT','signame':'O','apply':function () {
return ((() => {
const O=this.O;return O.preval + 1;
})());
}},$$hiphop.SIGACCESS({'signame':'O','pre':true,'val':true,'cnt':false}))));
export { loop_abo };
//# sourceMappingURL=loop_abo.mjs.map
