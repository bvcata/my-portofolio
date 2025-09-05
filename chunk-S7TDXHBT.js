import{a as d,b as u,d as h}from"./chunk-S27CQHC7.js";import{B as s,W as m,d as i,l as c,m as g,s as o,t as r,u as a}from"./chunk-DNK45LU6.js";var l="firstGreetingDone";var f=class p{questions=[{text:"I would like to know more about you",action:()=>{this.talkingText=`I am a Senior Frontend Developer with 6 years of experience, focused on crafting modern, scalable, and maintainable web applications using Angular.
I bring vision and purpose to every project\u2014designing systems from the ground up, leading frontend architecture, and delivering clean, reusable code that supports long-term growth. I care deeply about UX, product direction, and building consistent design systems that create a high-quality experience.
My skills include:
Frontend
- Angular, TypeScript
- Angular Material, SCSS, HTML
- Responsive design, pixel-perfect UI
- RxJS, NgRx
- Unit & E2E Testing (Karma, Jasmine, jest)

Architecture & Collaboration
- Component-based architecture
- Scalable, reusable design systems
- Agile/Scrum workflows
- Product-focused thinking & stakeholder collaboration`,this._store.startTalking(),this.questions=this.questions.slice(1)}},{text:"Can you show me your skills?",action:()=>this.navigateTo("skills")},{text:"I would like to see your previous projects",action:()=>this.navigateTo("projects")},{text:"How can I contact you?",action:()=>this.navigateTo("contact")}];talkingText="";sideCharacter={idlePath:"/images/one-hand-idling.png",talkingPath:"/images/one-hand-talking.gif"};_firstGreetingText=`Hi, I'm Cata
How can I help?`;_ongoingGreetingText="Anything else I can help you with?";_router=i(m);_store=i(d);constructor(){sessionStorage.getItem(l)?this.talkingText=this._ongoingGreetingText:(this.talkingText=this._firstGreetingText,sessionStorage.setItem(l,"true"))}onSlideDone(){this._store.startTalking()}onTalkingDone(){this._store.startIdling()}navigateTo(t){this._router.navigate([t])}static \u0275fac=function(n){return new(n||p)};static \u0275cmp=g({type:p,selectors:[["app-home"]],decls:2,vars:3,consts:[[3,"slideDone","sideCharacter"],[3,"talkingDone","questions","talkingText"]],template:function(n,e){n&1&&(r(0,"app-side-character",0),s("slideDone",function(){return e.onSlideDone()}),a(),r(1,"app-conversation-box",1),s("talkingDone",function(){return e.onTalkingDone()}),a()),n&2&&(o("sideCharacter",e.sideCharacter),c(),o("questions",e.questions)("talkingText",e.talkingText))},dependencies:[h,u],encapsulation:2})};export{f as HomeComponent};
