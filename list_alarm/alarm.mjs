import * as $$hiphop from '@hop/hiphop';import { ReactiveMachine } from '@hop/hiphop';const AlarmSpec=$$hiphop.MODULE({'id':'Alarm','%location':{'filename':'alarm.hh.mjs','pos':80},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'alarm.hh.mjs','pos':99},'direction':'IN','name':'CLOCK'}),$$hiphop.SIGNAL({'%location':{'filename':'alarm.hh.mjs','pos':111},'direction':'IN','name':'SNOOZE'}),$$hiphop.SIGNAL({'%location':{'filename':'alarm.hh.mjs','pos':124},'direction':'IN','name':'STOP'}),$$hiphop.SIGNAL({'%location':{'filename':'alarm.hh.mjs','pos':135},'direction':'OUT','name':'BEEP','init_func':function () {
return false;
}}),$$hiphop.ABORT({'%location':{'filename':'alarm.hh.mjs','pos':156},'%tag':'ABORT','immediate':false,'apply':function () {
return ((() => {
const STOP=this.STOP;return STOP.now;
})());
}},$$hiphop.SIGACCESS({'signame':'STOP','pre':false,'val':false,'cnt':false}),$$hiphop.LOOP({'%location':{'filename':'alarm.hh.mjs','pos':179}},$$hiphop.AWAIT({'%location':{'filename':'alarm.hh.mjs','pos':192},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const CLOCK=this.CLOCK;return CLOCK.nowval;
})());
}},$$hiphop.SIGACCESS({'signame':'CLOCK','pre':false,'val':true,'cnt':false})),$$hiphop.IF({'%location':{'filename':'alarm.hh.mjs','pos':220},'%tag':'if','apply':function () {
return ((() => {
const SNOOZE=this.SNOOZE;return SNOOZE.now;
})());
}},$$hiphop.SIGACCESS({'signame':'SNOOZE','pre':false,'val':false,'cnt':false}),$$hiphop.SEQUENCE({'%location':{'filename':'alarm.hh.mjs','pos':236},'%tag':'sequence'},$$hiphop.EMIT({'%location':{'filename':'alarm.hh.mjs','pos':313},'%tag':'EMIT','signame':'BEEP','apply':function () {
return false;
}}),$$hiphop.AWAIT({'%location':{'filename':'alarm.hh.mjs','pos':334},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const CLOCK=this.CLOCK;return CLOCK.nowval;
})());
}},$$hiphop.SIGACCESS({'signame':'CLOCK','pre':false,'val':true,'cnt':false})),$$hiphop.AWAIT({'%location':{'filename':'alarm.hh.mjs','pos':364},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const CLOCK=this.CLOCK;return CLOCK.nowval;
})());
}},$$hiphop.SIGACCESS({'signame':'CLOCK','pre':false,'val':true,'cnt':false})),$$hiphop.AWAIT({'%location':{'filename':'alarm.hh.mjs','pos':394},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const CLOCK=this.CLOCK;return CLOCK.nowval;
})());
}},$$hiphop.SIGACCESS({'signame':'CLOCK','pre':false,'val':true,'cnt':false})),$$hiphop.AWAIT({'%location':{'filename':'alarm.hh.mjs','pos':424},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const CLOCK=this.CLOCK;return CLOCK.nowval;
})());
}},$$hiphop.SIGACCESS({'signame':'CLOCK','pre':false,'val':true,'cnt':false})),$$hiphop.AWAIT({'%location':{'filename':'alarm.hh.mjs','pos':454},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const CLOCK=this.CLOCK;return CLOCK.nowval;
})());
}},$$hiphop.SIGACCESS({'signame':'CLOCK','pre':false,'val':true,'cnt':false}))),$$hiphop.EMIT({'%location':{'filename':'alarm.hh.mjs','pos':544},'%tag':'EMIT','signame':'BEEP','apply':function () {
return true;
}})))),$$hiphop.EMIT({'%location':{'filename':'alarm.hh.mjs','pos':642},'%tag':'EMIT','signame':'BEEP','apply':function () {
return false;
}}));
const mach=new ReactiveMachine(AlarmSpec);
export { AlarmSpec };export { mach };
//# sourceMappingURL=alarm.mjs.map
