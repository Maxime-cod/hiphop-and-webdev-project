import * as $$hiphop from '@hop/hiphop';import { ReactiveMachine } from '@hop/hiphop';const AlarmSpec=$$hiphop.MODULE({'id':'Alarm','%location':{'filename':'alarm.hh.mjs','pos':96},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'alarm.hh.mjs','pos':115},'direction':'IN','name':'CLOCK'}),$$hiphop.SIGNAL({'%location':{'filename':'alarm.hh.mjs','pos':127},'direction':'IN','name':'SNOOZE'}),$$hiphop.SIGNAL({'%location':{'filename':'alarm.hh.mjs','pos':140},'direction':'IN','name':'STOP'}),$$hiphop.SIGNAL({'%location':{'filename':'alarm.hh.mjs','pos':151},'direction':'IN','name':'RESET'}),$$hiphop.SIGNAL({'%location':{'filename':'alarm.hh.mjs','pos':188},'direction':'OUT','name':'BEEP','init_func':function () {
return false;
}}),$$hiphop.LOOP({'%location':{'filename':'alarm.hh.mjs','pos':259}},$$hiphop.ABORT({'%location':{'filename':'alarm.hh.mjs','pos':321},'%tag':'ABORT','immediate':false,'apply':function () {
return ((() => {
const RESET=this.RESET;return RESET.now;
})());
}},$$hiphop.SIGACCESS({'signame':'RESET','pre':false,'val':false,'cnt':false}),$$hiphop.ABORT({'%location':{'filename':'alarm.hh.mjs','pos':397},'%tag':'ABORT','immediate':false,'apply':function () {
return ((() => {
const STOP=this.STOP;return STOP.now;
})());
}},$$hiphop.SIGACCESS({'signame':'STOP','pre':false,'val':false,'cnt':false}),$$hiphop.LOOP({'%location':{'filename':'alarm.hh.mjs','pos':424}},$$hiphop.AWAIT({'%location':{'filename':'alarm.hh.mjs','pos':493},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const CLOCK=this.CLOCK;return CLOCK.nowval;
})());
}},$$hiphop.SIGACCESS({'signame':'CLOCK','pre':false,'val':true,'cnt':false})),$$hiphop.IF({'%location':{'filename':'alarm.hh.mjs','pos':525},'%tag':'if','apply':function () {
return ((() => {
const SNOOZE=this.SNOOZE;return SNOOZE.now;
})());
}},$$hiphop.SIGACCESS({'signame':'SNOOZE','pre':false,'val':false,'cnt':false}),$$hiphop.SEQUENCE({'%location':{'filename':'alarm.hh.mjs','pos':541},'%tag':'sequence'},$$hiphop.EMIT({'%location':{'filename':'alarm.hh.mjs','pos':560},'%tag':'EMIT','signame':'BEEP','apply':function () {
return false;
}}),$$hiphop.AWAIT({'%location':{'filename':'alarm.hh.mjs','pos':585},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const CLOCK=this.CLOCK;return CLOCK.nowval;
})());
}},$$hiphop.SIGACCESS({'signame':'CLOCK','pre':false,'val':true,'cnt':false})),$$hiphop.AWAIT({'%location':{'filename':'alarm.hh.mjs','pos':607},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const CLOCK=this.CLOCK;return CLOCK.nowval;
})());
}},$$hiphop.SIGACCESS({'signame':'CLOCK','pre':false,'val':true,'cnt':false})),$$hiphop.AWAIT({'%location':{'filename':'alarm.hh.mjs','pos':641},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const CLOCK=this.CLOCK;return CLOCK.nowval;
})());
}},$$hiphop.SIGACCESS({'signame':'CLOCK','pre':false,'val':true,'cnt':false})),$$hiphop.AWAIT({'%location':{'filename':'alarm.hh.mjs','pos':663},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const CLOCK=this.CLOCK;return CLOCK.nowval;
})());
}},$$hiphop.SIGACCESS({'signame':'CLOCK','pre':false,'val':true,'cnt':false})),$$hiphop.AWAIT({'%location':{'filename':'alarm.hh.mjs','pos':697},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const CLOCK=this.CLOCK;return CLOCK.nowval;
})());
}},$$hiphop.SIGACCESS({'signame':'CLOCK','pre':false,'val':true,'cnt':false}))),$$hiphop.EMIT({'%location':{'filename':'alarm.hh.mjs','pos':755},'%tag':'EMIT','signame':'BEEP','apply':function () {
return true;
}})))),$$hiphop.EMIT({'%location':{'filename':'alarm.hh.mjs','pos':850},'%tag':'EMIT','signame':'BEEP','apply':function () {
return false;
}}),$$hiphop.AWAIT({'%location':{'filename':'alarm.hh.mjs','pos':909},'%tag':'await','immediate':false,'apply':function () {
return ((() => {
const RESET=this.RESET;return RESET.now;
})());
}},$$hiphop.SIGACCESS({'signame':'RESET','pre':false,'val':false,'cnt':false})))));
const mach=new ReactiveMachine(AlarmSpec);
export { AlarmSpec };export { mach };
//# sourceMappingURL=alarm.mjs.map
