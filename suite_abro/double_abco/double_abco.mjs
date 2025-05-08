import * as $$hiphop from '@hop/hiphop';import { ReactiveMachine } from '@hop/hiphop';const abco=$$hiphop.MODULE({'%location':{'filename':'double_abco.hh.js','pos':75},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'double_abco.hh.js','pos':89},'direction':'IN','name':'A'}),$$hiphop.SIGNAL({'%location':{'filename':'double_abco.hh.js','pos':98},'direction':'IN','name':'B'}),$$hiphop.SIGNAL({'%location':{'filename':'double_abco.hh.js','pos':107},'direction':'IN','name':'C'}),$$hiphop.SIGNAL({'%location':{'filename':'double_abco.hh.js','pos':116},'direction':'OUT','name':'O','init_func':function () {
return 0;
}}),$$hiphop.FORK({'%location':{'filename':'double_abco.hh.js','pos':134},'%tag':'FORK'},$$hiphop.AWAIT({'%location':{'filename':'double_abco.hh.js','pos':149},'%tag':'await','immediate':false,'A':'A'}),$$hiphop.FORK({'%location':{'filename':'double_abco.hh.js','pos':180},'%tag':'FORK'},$$hiphop.AWAIT({'%location':{'filename':'double_abco.hh.js','pos':198},'%tag':'await','immediate':false,'B':'B'}),$$hiphop.AWAIT({'%location':{'filename':'double_abco.hh.js','pos':237},'%tag':'await','immediate':false,'C':'C'}))),$$hiphop.EMIT({'%location':{'filename':'double_abco.hh.js','pos':273},'%tag':'EMIT','signame':'O','apply':function () {
return ((() => {
const O=this.O;return O.preval + 1;
})());
}},$$hiphop.SIGACCESS({'signame':'O','pre':true,'val':true,'cnt':false})));
export { abco };
//# sourceMappingURL=double_abco.mjs.map
