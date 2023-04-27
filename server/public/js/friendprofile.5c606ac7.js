"use strict";(self["webpackChunkchatting_app"]=self["webpackChunkchatting_app"]||[]).push([[709],{7371:function(t,s,e){var i=e(6018);s["Z"]={register(t){return(0,i.Z)().post("signup",t)},query(t){return(0,i.Z)().get("search-users",t)},login(t){return(0,i.Z)().post("signin",t)},user(){return(0,i.Z)().get("me")},update(t){return(0,i.Z)().put("updatepic",t)},singleuser(t){return(0,i.Z)().get(`user/${t}`)},friends(t){return(0,i.Z)().get(`friends/${t}`)},follow(t,s){return(0,i.Z)().put(`${t}/follow`,{userId:s})},unfollow(t,s){return(0,i.Z)().put(`${t}/unfollow`,{userId:s})}}},4935:function(t,s,e){e.r(s),e.d(s,{default:function(){return j}});var i=e(6252),l=e(3577);const o=t=>((0,i.dD)("data-v-657ac935"),t=t(),(0,i.Cn)(),t),n={class:"container mt-3"},a={class:"bg"},r={class:"image"},c=["src"],u={class:"title"},d={class:"d-flex justify-content-between"},h=o((()=>(0,i._)("h6",null,"posts",-1))),w={key:0},f=o((()=>(0,i._)("h6",null,"followers",-1))),p={key:0},g=o((()=>(0,i._)("h6",null,"following",-1))),m={class:"row"},_={class:"col-sm-12 col-md-8 col-lg-9 col-xl-9"},y={class:"col-sm-12 col-md-4 col-lg-3 col-xl-3"},v={class:"main"},b={key:0},k={class:"title"},Z=o((()=>(0,i._)("h2",{class:"H2"},"user information",-1))),$={class:"info"},F={class:"-title"},C=o((()=>(0,i._)("span",{class:"SPAN"}," City :",-1))),z={class:"-title"},D=o((()=>(0,i._)("span",{class:"SPAN"},"From : ",-1))),q={class:"-title"},P=o((()=>(0,i._)("span",{class:"SPAN"}," Relationship :",-1)));function I(t,s,e,o,I,N){const R=(0,i.up)("friendPost"),U=(0,i.up)("friendFollower");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("div",a,[(0,i._)("div",r,[(0,i._)("img",{src:I.item.pic,alt:""},null,8,c),(0,i._)("h2",u,(0,l.zw)(I.item.fullName),1)]),(0,i._)("div",d,[(0,i._)("div",null,[(0,i._)("h5",null,(0,l.zw)(I.cnt),1),h]),(0,i._)("div",null,[I.item.followers?((0,i.wg)(),(0,i.iD)("h5",w,(0,l.zw)(I.item.followers.length),1)):(0,i.kq)("",!0),f]),(0,i._)("div",null,[I.item.followings?((0,i.wg)(),(0,i.iD)("h5",p,(0,l.zw)(I.item.followings.length),1)):(0,i.kq)("",!0),g])])]),(0,i._)("div",m,[(0,i._)("div",_,[(0,i.Wm)(R,{items:I.items},null,8,["items"])]),(0,i._)("div",y,[(0,i._)("div",v,[t.$route.params.id!=t.$store.state.user._id?((0,i.wg)(),(0,i.iD)("div",b,[I.Following?I.Following?((0,i.wg)(),(0,i.iD)("button",{key:1,type:"button",class:"btn btn-primary btn-sm",onClick:s[1]||(s[1]=t=>N.unfollow())}," Unfollow - ")):(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("button",{key:0,type:"button",class:"btn btn-primary btn-sm",onClick:s[0]||(s[0]=t=>N.follow())}," Follow + "))])):(0,i.kq)("",!0),(0,i._)("div",k,[Z,(0,i._)("div",$,[(0,i._)("h5",F,[C,(0,i.Uk)(" "+(0,l.zw)(I.item.city),1)]),(0,i._)("h5",z,[D,(0,i.Uk)(" "+(0,l.zw)(I.item.nationality),1)]),(0,i._)("h5",q,[P,(0,i.Uk)(" "+(0,l.zw)(I.item.status),1)]),(0,i._)("p",null,(0,l.zw)(I.item.bio),1)])])]),(0,i.Wm)(U,{followers:I.followers},null,8,["followers"])])])])}var N=e(7371);const R=(0,i.RC)((()=>e.e(314).then(e.bind(e,1314)))),U=(0,i.RC)((()=>e.e(736).then(e.bind(e,2736)))),x=(0,i.RC)((()=>e.e(180).then(e.bind(e,1180))));var A={components:{friendPost:R,friendInfo:U,friendFollower:x},data(){return{_id:this.$route.params.id,item:{},items:[],followers:[],cnt:"",Following:Boolean}},methods:{async getuser(){try{await N.Z.singleuser(this._id).then((t=>{this.item=t.data.user,this.items=t.data.posts,this.cnt=t.data.posts.length}))}catch(t){console.log(t)}},async friends(){try{await N.Z.friends(this._id).then((t=>{this.followers=t.data}))}catch(t){console.log(t)}},async follow(){try{this.Following=!0,await N.Z.follow(this.$store.state.user._id,this._id).then((t=>{this.Following=!0,this.$toast.success(t.data.message,{position:"top"}),this.getuser(),this.friends()}))}catch(t){this.$toast.error(t.response.data.message,{position:"top"})}},async unfollow(){try{this.Following=!1,await N.Z.unfollow(this.$store.state.user._id,this._id).then((t=>{this.$toast.success(t.data,{position:"top"}),this.getuser(),this.friends()}))}catch(t){this.$toast.error(t.response.data.message,{position:"top"})}}},mounted(){this.getuser(),this.friends()}},S=e(3744);const W=(0,S.Z)(A,[["render",I],["__scopeId","data-v-657ac935"]]);var j=W}}]);