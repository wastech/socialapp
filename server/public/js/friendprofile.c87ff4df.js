(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["friendprofile"],{"330b":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),i=Object(c["K"])("data-v-657ac935");Object(c["v"])("data-v-657ac935");var r={class:"container mt-3"},s={class:" bg"},o={class:"image"},a={class:"title"},l={class:"d-flex justify-content-between"},u=Object(c["i"])("h6",null,"posts",-1),b={key:0},f=Object(c["i"])("h6",null,"followers",-1),d={key:0},j=Object(c["i"])("h6",null,"following",-1),O={class:"row "},p={class:"  col-sm-12 col-md-8 col-lg-9 col-xl-9"},m={class:"col-sm-12 col-md-4 col-lg-3 col-xl-3"},w={class:"main"},h={key:0},g={class:"title"},v=Object(c["i"])("h2",{class:"H2"},"user information",-1),k={class:"info"},x={class:"-title"},y=Object(c["i"])("span",{class:"SPAN"}," City :",-1),C={class:"-title"},F=Object(c["i"])("span",{class:"SPAN"},"From : ",-1),_={class:"-title"},R=Object(c["i"])("span",{class:"SPAN"}," Relationship :",-1);Object(c["t"])();var $=i((function(e,t,n,i,$,A){var P=Object(c["A"])("friendPost"),I=Object(c["A"])("friendFollower");return Object(c["s"])(),Object(c["e"])("div",r,[Object(c["i"])("div",s,[Object(c["i"])("div",o,[Object(c["i"])("img",{src:$.item.pic,alt:""},null,8,["src"]),Object(c["i"])("h2",a,Object(c["C"])($.item.fullName),1)]),Object(c["i"])("div",l,[Object(c["i"])("div",null,[Object(c["i"])("h5",null,Object(c["C"])($.cnt),1),u]),Object(c["i"])("div",null,[$.item.followers?(Object(c["s"])(),Object(c["e"])("h5",b,Object(c["C"])($.item.followers.length),1)):Object(c["f"])("",!0),f]),Object(c["i"])("div",null,[$.item.followings?(Object(c["s"])(),Object(c["e"])("h5",d,Object(c["C"])($.item.followings.length),1)):Object(c["f"])("",!0),j])])]),Object(c["i"])("div",O,[Object(c["i"])("div",p,[Object(c["i"])(P,{items:$.items},null,8,["items"])]),Object(c["i"])("div",m,[Object(c["i"])("div",w,[e.$route.params.id!=e.$store.state.user._id?(Object(c["s"])(),Object(c["e"])("div",h,[$.Following?$.Following?(Object(c["s"])(),Object(c["e"])("button",{key:1,type:"button",class:"btn btn-primary btn-sm",onClick:t[2]||(t[2]=function(e){return A.unfollow()})}," Unfollow - ")):Object(c["f"])("",!0):(Object(c["s"])(),Object(c["e"])("button",{key:0,type:"button",class:"btn btn-primary btn-sm",onClick:t[1]||(t[1]=function(e){return A.follow()})}," Follow + "))])):Object(c["f"])("",!0),Object(c["i"])("div",g,[v,Object(c["i"])("div",k,[Object(c["i"])("h5",x,[y,Object(c["h"])(" "+Object(c["C"])($.item.city),1)]),Object(c["i"])("h5",C,[F,Object(c["h"])(" "+Object(c["C"])($.item.nationality),1)]),Object(c["i"])("h5",_,[R,Object(c["h"])(" "+Object(c["C"])($.item.status),1)]),Object(c["i"])("p",null,Object(c["C"])($.item.bio),1)])])]),Object(c["i"])(I,{followers:$.followers},null,8,["followers"])])])])})),A=n("1da1"),P=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("c5b9")),I=Object(c["j"])((function(){return n.e("chunk-149f2126").then(n.bind(null,"565c"))})),N=Object(c["j"])((function(){return n.e("chunk-2d0af85e").then(n.bind(null,"0f4f"))})),S=Object(c["j"])((function(){return n.e("chunk-573d98c5").then(n.bind(null,"8951"))})),J={components:{friendPost:I,friendInfo:N,friendFollower:S},data:function(){return{_id:this.$route.params.id,item:{},items:[],followers:[],cnt:"",Following:Boolean}},methods:{getuser:function(){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P["a"].singleuser(e._id).then((function(t){e.item=t.data.user,e.items=t.data.posts,e.cnt=t.data.posts.length}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},friends:function(){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P["a"].friends(e._id).then((function(t){e.followers=t.data}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},follow:function(){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.Following=!0,t.next=4,P["a"].follow(e.$store.state.user._id,e._id).then((function(t){e.Following=!0,e.$toast.success(t.data.message,{position:"top"}),e.getuser(),e.friends()}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.$toast.error(t.t0.response.data.message,{position:"top"});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},unfollow:function(){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.Following=!1,t.next=4,P["a"].unfollow(e.$store.state.user._id,e._id).then((function(t){e.$toast.success(t.data,{position:"top"}),e.getuser(),e.friends()}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.$toast.error(t.t0.response.data.message,{position:"top"});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()}},mounted:function(){this.getuser(),this.friends()}};n("d04d");J.render=$,J.__scopeId="data-v-657ac935";t["default"]=J},c5b9:function(e,t,n){"use strict";var c=n("3f4a");t["a"]={register:function(e){return Object(c["a"])().post("signup",e)},query:function(e){return Object(c["a"])().get("search-users",e)},login:function(e){return Object(c["a"])().post("signin",e)},user:function(){return Object(c["a"])().get("me")},update:function(e){return Object(c["a"])().put("updatepic",e)},singleuser:function(e){return Object(c["a"])().get("user/".concat(e))},friends:function(e){return Object(c["a"])().get("friends/".concat(e))},follow:function(e,t){return Object(c["a"])().put("".concat(e,"/follow"),{userId:t})},unfollow:function(e,t){return Object(c["a"])().put("".concat(e,"/unfollow"),{userId:t})}}},d04d:function(e,t,n){"use strict";n("e8b0")},e8b0:function(e,t,n){}}]);