(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[118],{67626:function(C,T,s){"use strict";s.r(T);var n=s(90636),c=s(34792),i=s(48086),p=s(3182),P=s(5188),f=s(67294),Z=s(44194),m=s(85893),b=function(){var v=(0,f.useRef)(),g=function(){var _=(0,p.Z)((0,n.Z)().mark(function o(d){var l;return(0,n.Z)().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,(0,Z.i9)({topicId:d});case 2:l=h.sent,l?i.ZP.success("\u5220\u9664\u6210\u529F"):i.ZP.error("\u5220\u9664\u5931\u8D25");case 4:case"end":return h.stop()}},o)}));return function(d){return _.apply(this,arguments)}}(),M=[{title:"\u9898\u76EE\u6807\u9898",search:!1,dataIndex:"topicTitle",ellipsis:!0,tip:"\u8FC7\u957F\u4F1A\u81EA\u52A8\u6536\u7F29",formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u5185\u5BB9",search:!1,dataIndex:"topicContent",ellipsis:!0,tip:"\u8FC7\u957F\u4F1A\u81EA\u52A8\u6536\u7F29",formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u521B\u5EFA\u65F6\u95F4",search:!1,dataIndex:"createTime",valueType:"dateTime"},{title:"\u70B9\u8D5E\u6570",search:!1,dataIndex:"topicLikes",formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u64CD\u4F5C",valueType:"option",key:"option",render:function(o,d){return[(0,m.jsx)("a",{onClick:function(){return g(d.topicId)},children:"\u5220\u9664"})]}}];return(0,m.jsx)("div",{children:(0,m.jsx)(P.Z,{columns:M,actionRef:v,request:(0,p.Z)((0,n.Z)().mark(function _(){var o;return(0,n.Z)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,Z.Me)();case 2:return o=l.sent,l.abrupt("return",{data:o,success:!0});case 4:case"end":return l.stop()}},_)})),cardBordered:!0,editable:{type:"multiple"},columnsState:{persistenceKey:"pro-table-singe-demos",persistenceType:"localStorage",onChange:function(o){console.log("value: ",o)}},rowKey:"id",search:!1,options:{setting:{listsHeight:400}},pagination:{pageSize:5,onChange:function(o){return console.log(o)}},headerTitle:"\u9898\u76EE\u5217\u8868"})})};T.default=b},44194:function(C,T,s){"use strict";s.d(T,{Me:function(){return P},cO:function(){return Z},BN:function(){return b},fY:function(){return v},eS:function(){return M},fq:function(){return o},cG:function(){return l},i9:function(){return h},G0:function(){return D}});var n=s(90636),c=s(11849),i=s(3182),p=s(81072);function P(t){return f.apply(this,arguments)}function f(){return f=(0,i.Z)((0,n.Z)().mark(function t(r){return(0,n.Z)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,p.Z)("/api/topic/getTotalTopic",(0,c.Z)({method:"GET"},r||{})));case 1:case"end":return a.stop()}},t)})),f.apply(this,arguments)}function Z(t){return m.apply(this,arguments)}function m(){return m=(0,i.Z)((0,n.Z)().mark(function t(r){return(0,n.Z)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,p.Z)("/api/topic/getMyTopic",(0,c.Z)({method:"GET"},r||{})));case 1:case"end":return a.stop()}},t)})),m.apply(this,arguments)}function b(t,r){return y.apply(this,arguments)}function y(){return y=(0,i.Z)((0,n.Z)().mark(function t(r,u){return(0,n.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.Z)("/api/topic/getTopicById",(0,c.Z)({method:"POST",headers:{"Content-Type":"application/json"},data:r},u||{})));case 1:case"end":return e.stop()}},t)})),y.apply(this,arguments)}function v(t,r){return g.apply(this,arguments)}function g(){return g=(0,i.Z)((0,n.Z)().mark(function t(r,u){return(0,n.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.Z)("/api/topic/getTopicById",(0,c.Z)({method:"POST",headers:{"Content-Type":"application/json"},data:r},u||{})));case 1:case"end":return e.stop()}},t)})),g.apply(this,arguments)}function M(t,r){return _.apply(this,arguments)}function _(){return _=(0,i.Z)((0,n.Z)().mark(function t(r,u){return(0,n.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.Z)("/api/topic/searchTitle",(0,c.Z)({method:"POST",headers:{"Content-Type":"application/json"},data:r},u||{})));case 1:case"end":return e.stop()}},t)})),_.apply(this,arguments)}function o(t,r){return d.apply(this,arguments)}function d(){return d=(0,i.Z)((0,n.Z)().mark(function t(r,u){return(0,n.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.Z)("/api/topic/like",(0,c.Z)({method:"POST",headers:{"Content-Type":"application/json"},data:r},u||{})));case 1:case"end":return e.stop()}},t)})),d.apply(this,arguments)}function l(t,r){return E.apply(this,arguments)}function E(){return E=(0,i.Z)((0,n.Z)().mark(function t(r,u){return(0,n.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.Z)("/api/topic/deleteByAuthor",(0,c.Z)({method:"POST",headers:{"Content-Type":"application/json"},data:r},u||{})));case 1:case"end":return e.stop()}},t)})),E.apply(this,arguments)}function h(t,r){return O.apply(this,arguments)}function O(){return O=(0,i.Z)((0,n.Z)().mark(function t(r,u){return(0,n.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.Z)("/api/topic/deleteByManager",(0,c.Z)({method:"POST",headers:{"Content-Type":"application/json"},data:r},u||{})));case 1:case"end":return e.stop()}},t)})),O.apply(this,arguments)}function D(t,r){return w.apply(this,arguments)}function w(){return w=(0,i.Z)((0,n.Z)().mark(function t(r,u){return(0,n.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.Z)("/api/topic/star",(0,c.Z)({method:"POST",headers:{"Content-Type":"application/json"},data:r},u||{})));case 1:case"end":return e.stop()}},t)})),w.apply(this,arguments)}}}]);
