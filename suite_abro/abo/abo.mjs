import * as $$hiphop from '@hop/hiphop';import { ReactiveMachine } from '@hop/hiphop';const abo=$$hiphop.MODULE({'%location':{'filename':'abo.hh.js','pos':74},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'abo.hh.js','pos':88},'direction':'IN','name':'A'}),$$hiphop.SIGNAL({'%location':{'filename':'abo.hh.js','pos':97},'direction':'IN','name':'B'}),$$hiphop.SIGNAL({'%location':{'filename':'abo.hh.js','pos':106},'direction':'OUT','name':'O','init_func':function () {
return 0;
}}),$$hiphop.FORK({'%location':{'filename':'abo.hh.js','pos':124},'%tag':'FORK'},$$hiphop.AWAIT({'%location':{'filename':'abo.hh.js','pos':135},'%tag':'await','immediate':false,'A':'A'}),$$hiphop.AWAIT({'%location':{'filename':'abo.hh.js','pos':166},'%tag':'await','immediate':false,'B':'B'})),$$hiphop.EMIT({'%location':{'filename':'abo.hh.js','pos':192},'%tag':'EMIT','signame':'O','apply':function () {
return ((() => {
const O=this.O;return O.preval + 1;
})());
}},$$hiphop.SIGACCESS({'signame':'O','pre':true,'val':true,'cnt':false})));
export { abo };
//# sourceMappingURL=abo.mjs.map
