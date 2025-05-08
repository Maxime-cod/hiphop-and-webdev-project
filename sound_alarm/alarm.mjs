import * as $$hiphop from '@hop/hiphop';import { ReactiveMachine } from '@hop/hiphop';const AlarmSpec=$$hiphop.MODULE({'id':'Alarm','%location':{'filename':'alarm.hh.mjs','pos':80},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'alarm.hh.mjs','pos':99},'direction':'IN','name':'CLOCK'}),$$hiphop.SIGNAL({'%location':{'filename':'alarm.hh.mjs','pos':111},'direction':'IN','name':'SNOOZE'}),$$hiphop.SIGNAL({'%location':{'filename':'alarm.hh.mjs','pos':124},'direction':'IN','name':'STOP'}),$$hiphop.SIGNAL({'%location':{'filename':'alarm.hh.mjs','pos':135},'direction':'OUT','name':'BEEP','init_func':function () {
return false;
}}),$$hiphop.ABORT({'%location':{'filename':'alarm.hh.mjs','pos':156},'%tag':'ABORT','immediate':false,'apply':function () {
return ((() => {
const STOP=this.STOP;return STOP.now;
})());
}},$$hiphop.SIGACCESS({'signame':'STOP','pre':false,'val':false,'cnt':false}),$$hiphop.LOOP({'%location':{'filename':'alarm.hh.mjs','pos':179}},$$hiphop.IF({'%location':{'filename':'alarm.hh.mjs','pos':192},'%tag':'if','apply':function () {
return ((() => {
const SNOOZE=this.SNOOZE;return SNOOZE.now;
})());
}},$$hiphop.SIGACCESS({'signame':'SNOOZE','pre':false,'val':false,'cnt':false}),$$hiphop.SEQUENCE({'%location':{'filename':'alarm.hh.mjs','pos':208},'%tag':'sequence'},$$hiphop.EMIT({'%location':{'filename':'alarm.hh.mjs','pos':285},'%tag':'EMIT','signame':'BEEP','apply':function () {
return false;
}}),$$hiphop.AWAIT({'%location':{'filename':'alarm.hh.mjs','pos':306},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const CLOCK=this.CLOCK;return CLOCK.now;
})());
}},$$hiphop.SIGACCESS({'signame':'CLOCK','pre':false,'val':false,'cnt':false})),$$hiphop.AWAIT({'%location':{'filename':'alarm.hh.mjs','pos':333},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const CLOCK=this.CLOCK;return CLOCK.now;
})());
}},$$hiphop.SIGACCESS({'signame':'CLOCK','pre':false,'val':false,'cnt':false})),$$hiphop.AWAIT({'%location':{'filename':'alarm.hh.mjs','pos':360},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const CLOCK=this.CLOCK;return CLOCK.now;
})());
}},$$hiphop.SIGACCESS({'signame':'CLOCK','pre':false,'val':false,'cnt':false})),$$hiphop.AWAIT({'%location':{'filename':'alarm.hh.mjs','pos':387},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const CLOCK=this.CLOCK;return CLOCK.now;
})());
}},$$hiphop.SIGACCESS({'signame':'CLOCK','pre':false,'val':false,'cnt':false})),$$hiphop.AWAIT({'%location':{'filename':'alarm.hh.mjs','pos':414},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const CLOCK=this.CLOCK;return CLOCK.now;
})());
}},$$hiphop.SIGACCESS({'signame':'CLOCK','pre':false,'val':false,'cnt':false}))),$$hiphop.SEQUENCE({'%location':{'filename':'alarm.hh.mjs','pos':446},'%tag':'sequence'},$$hiphop.EMIT({'%location':{'filename':'alarm.hh.mjs','pos':501},'%tag':'EMIT','signame':'BEEP','apply':function () {
return true;
}}),$$hiphop.AWAIT({'%location':{'filename':'alarm.hh.mjs','pos':521},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const CLOCK=this.CLOCK;return CLOCK.now;
})());
}},$$hiphop.SIGACCESS({'signame':'CLOCK','pre':false,'val':false,'cnt':false})))))),$$hiphop.EMIT({'%location':{'filename':'alarm.hh.mjs','pos':626},'%tag':'EMIT','signame':'BEEP','apply':function () {
return false;
}}));
const mach=new ReactiveMachine(AlarmSpec);
export { AlarmSpec };export { mach };
//# sourceMappingURL=alarm.mjs.map
