(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["singlepost"],{"64d9":function(e,t,c){"use strict";var s=c("3f4a");t["a"]={me:function(){return Object(s["a"])().get("me")},postpic:function(e){return Object(s["a"])().put("updatepic",e)},createPost:function(e){return Object(s["a"])().post("createpost",e)},addcomment:function(e){return Object(s["a"])().put("comment",e)},mypost:function(){return Object(s["a"])().get("mypost")},showpost:function(e){return Object(s["a"])().get("post/".concat(e))},like:function(e,t){return Object(s["a"])().put("".concat(e,"/like"),{userId:t})}}},b7fb:function(e,t,c){"use strict";c.r(t);c("b0c0");var s=c("7a23"),n=Object(s["K"])("data-v-118741f2");Object(s["v"])("data-v-118741f2");var a={class:"container mt-2"},i={class:"card1 mb-3"},o={class:"row g-0"},r={class:"col-md-12 col-xl-4 col-lg-6 col-sm-7 col-xs-12"},l={class:"col-md-12 col-xl-8 col-lg-6 col-sm-12 col-xs-12"},u={class:"card-body"},m={key:0,class:"d-flex position-relative"},b={class:"mt-0"},d={class:"name"},j={class:"icons"},O={class:"badge "},p={key:1,class:"fas fa-comment"},f={class:"badge "},v=Object(s["i"])("i",{class:"fab fa-telegram-plane"},null,-1),g={key:0,class:"mt-4"},h={class:"scrollable"},x={class:""},k={class:""},w={class:"mt-0 comment__name"},y={class:"comment__text"},C=Object(s["i"])("small",{class:"card-footer text-muted"}," 1 minute ago ",-1),_={class:"comment-box"},B={class:"row mt-1"},R={class:"col-8"},P={class:"form-floating"},$=Object(s["i"])("label",{for:"floatingTextarea2"},"Comments",-1),I={class:"col-4"};Object(s["t"])();var J=n((function(e,t,c,n,J,S){return Object(s["s"])(),Object(s["e"])("div",a,[Object(s["i"])("div",i,[Object(s["i"])("div",o,[Object(s["i"])("div",r,[Object(s["i"])("img",{src:J.item.photo,alt:"...",class:"img"},null,8,["src"])]),Object(s["i"])("div",l,[Object(s["i"])("div",u,[J.item.postedBy?(Object(s["s"])(),Object(s["e"])("div",m,[Object(s["i"])("img",{src:J.item.postedBy.pic,class:"flex-shrink-0 me-3",alt:"..."},null,8,["src"]),Object(s["i"])("div",null,[Object(s["i"])("h2",b,Object(s["C"])(J.item.postedBy.name),1),Object(s["i"])("small",d,Object(s["C"])(J.item.postedBy.nationality)+", "+Object(s["C"])(J.item.postedBy.city),1)])])):Object(s["f"])("",!0),Object(s["i"])("p",null,Object(s["C"])(J.item.body),1),Object(s["i"])("div",j,[J.item.likes?(Object(s["s"])(),Object(s["e"])("i",{key:0,class:["fas fa-heart",{liked:J.item.likes}],onClick:t[1]||(t[1]=function(e){return S.like()})},[Object(s["i"])("span",O,Object(s["C"])(J.item.likes.length),1)],2)):Object(s["f"])("",!0),J.item.comments?(Object(s["s"])(),Object(s["e"])("i",p,[Object(s["i"])("span",f,Object(s["C"])(J.item.comments.length),1)])):Object(s["f"])("",!0),v]),Object(s["i"])("section",null,[J.comments.length?Object(s["f"])("",!0):(Object(s["s"])(),Object(s["e"])("h4",g," Not Commented Yet ")),Object(s["i"])("div",h,[(Object(s["s"])(!0),Object(s["e"])(s["a"],null,Object(s["z"])(J.comments,(function(e){return Object(s["s"])(),Object(s["e"])("div",{class:" bg-light d-flex position-relative",key:e.id},[Object(s["i"])("div",x,[Object(s["i"])("img",{src:e.postedBy.pic,class:"commentuser flex-shrink-0 me-3",alt:"..."},null,8,["src"])]),Object(s["i"])("div",k,[Object(s["i"])("h2",w,Object(s["C"])(e.postedBy.name),1),Object(s["i"])("div",null,[Object(s["i"])("p",y,Object(s["C"])(e.text),1)]),C])])})),128))]),Object(s["i"])("div",_,[Object(s["i"])("div",B,[Object(s["i"])("div",R,[Object(s["i"])("div",P,[Object(s["I"])(Object(s["i"])("textarea",{class:"form-control",placeholder:"Leave a comment here",id:"floatingTextarea2","onUpdate:modelValue":t[2]||(t[2]=function(e){return J.text=e}),rows:"2"},null,512),[[s["E"],J.text]]),$])]),Object(s["i"])("div",I,[Object(s["i"])("button",{type:"button",class:"btn btn-success",onClick:t[3]||(t[3]=function(e){return S.onSubmit()})}," Post ")])])])])])])])])])})),S=c("1da1"),T=(c("96cf"),c("64d9")),z={data:function(){return{_id:this.$route.params.id,item:{},text:"",comments:[],liked:Boolean}},methods:{getPost:function(){var e=this;return Object(S["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T["a"].showpost(e._id).then((function(t){e.item=t.data.post,e.comments=t.data.post.comments}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},like:function(){var e=this;return Object(S["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T["a"].like(e._id,e.$store.state.user._id).then((function(t){e.$toast.success(t.data.message,{position:"top"}),e.getPost(),e.liked=!0}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),e.$toast.error(t.t0.response.data.message,{position:"top"});case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},onSubmit:function(){var e=this;return Object(S["a"])(regeneratorRuntime.mark((function t(){var c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return c={id:e.item._id,text:e.text},t.prev=1,t.next=4,T["a"].addcomment(c).then((function(t){e.$toast.success(t.data.message,{position:"top"}),e.getPost()}));case 4:t.next=10;break;case 6:t.prev=6,t.t0=t["catch"](1),e.$toast.error(t.t0.response.data.error,{position:"top"}),console.log(t.t0);case 10:e.text="";case 11:case"end":return t.stop()}}),t,null,[[1,6]])})))()}},mounted:function(){var e=this;return Object(S["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getPost();case 1:case"end":return t.stop()}}),t)})))()}};c("e5e2");z.render=J,z.__scopeId="data-v-118741f2";t["default"]=z},e5e2:function(e,t,c){"use strict";c("e75a")},e75a:function(e,t,c){}}]);