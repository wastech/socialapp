"use strict";(self["webpackChunkchatting_app"]=self["webpackChunkchatting_app"]||[]).push([[106],{9594:function(t,s,e){var a=e(6018);s["Z"]={me(){return(0,a.Z)().get("me")},postpic(t){return(0,a.Z)().put("updatepic",t)},createPost(t){return(0,a.Z)().post("createpost",t)},addcomment(t){return(0,a.Z)().put("comment",t)},mypost(){return(0,a.Z)().get("mypost")},showpost(t){return(0,a.Z)().get(`post/${t}`)},like(t,s){return(0,a.Z)().put(`${t}/like`,{userId:s})}}},4912:function(t,s,e){e.r(s),e.d(s,{default:function(){return j}});var a=e(6252),o=e(3577),i=e(9963);const l=t=>((0,a.dD)("data-v-118741f2"),t=t(),(0,a.Cn)(),t),c={class:"container mt-2"},n={class:"card1 mb-3"},m={class:"row g-0"},r={class:"col-md-12 col-xl-4 col-lg-6 col-sm-7 col-xs-12"},d=["src"],p={class:"col-md-12 col-xl-8 col-lg-6 col-sm-12 col-xs-12"},u={class:"card-body"},_={key:0,class:"d-flex position-relative"},h=["src"],g={class:"mt-0"},k={class:"name"},v={class:"icons"},y={class:"badge"},f={key:1,class:"fas fa-comment"},w={class:"badge"},x=l((()=>(0,a._)("i",{class:"fab fa-telegram-plane"},null,-1))),b={key:0,class:"mt-4"},Z={class:"scrollable"},z={class:""},B=["src"],C={class:""},D={class:"mt-0 comment__name"},$={class:"comment__text"},P=l((()=>(0,a._)("small",{class:"card-footer text-muted"}," 1 minute ago ",-1))),q={class:"comment-box"},I={class:"row mt-1"},S={class:"col-8"},T={class:"form-floating"},Y=l((()=>(0,a._)("label",{for:"floatingTextarea2"},"Comments",-1))),H={class:"col-4"};function K(t,s,e,l,K,L){return(0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("div",n,[(0,a._)("div",m,[(0,a._)("div",r,[(0,a._)("img",{src:K.item.photo,alt:"...",class:"img"},null,8,d)]),(0,a._)("div",p,[(0,a._)("div",u,[K.item.postedBy?((0,a.wg)(),(0,a.iD)("div",_,[(0,a._)("img",{src:K.item.postedBy.pic,class:"flex-shrink-0 me-3",alt:"..."},null,8,h),(0,a._)("div",null,[(0,a._)("h2",g,(0,o.zw)(K.item.postedBy.name),1),(0,a._)("small",k,(0,o.zw)(K.item.postedBy.nationality)+", "+(0,o.zw)(K.item.postedBy.city),1)])])):(0,a.kq)("",!0),(0,a._)("p",null,(0,o.zw)(K.item.body),1),(0,a._)("div",v,[K.item.likes?((0,a.wg)(),(0,a.iD)("i",{key:0,class:(0,o.C_)(["fas fa-heart",{liked:K.item.likes}]),onClick:s[0]||(s[0]=t=>L.like())},[(0,a._)("span",y,(0,o.zw)(K.item.likes.length),1)],2)):(0,a.kq)("",!0),K.item.comments?((0,a.wg)(),(0,a.iD)("i",f,[(0,a._)("span",w,(0,o.zw)(K.item.comments.length),1)])):(0,a.kq)("",!0),x]),(0,a._)("section",null,[K.comments.length?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("h4",b," Not Commented Yet ")),(0,a._)("div",Z,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(K.comments,(t=>((0,a.wg)(),(0,a.iD)("div",{class:"bg-light d-flex position-relative",key:t.id},[(0,a._)("div",z,[(0,a._)("img",{src:t.postedBy.pic,class:"commentuser flex-shrink-0 me-3",alt:"..."},null,8,B)]),(0,a._)("div",C,[(0,a._)("h2",D,(0,o.zw)(t.postedBy.name),1),(0,a._)("div",null,[(0,a._)("p",$,(0,o.zw)(t.text),1)]),P])])))),128))]),(0,a._)("div",q,[(0,a._)("div",I,[(0,a._)("div",S,[(0,a._)("div",T,[(0,a.wy)((0,a._)("textarea",{class:"form-control",placeholder:"Leave a comment here",id:"floatingTextarea2","onUpdate:modelValue":s[1]||(s[1]=t=>K.text=t),rows:"2"},null,512),[[i.nr,K.text]]),Y])]),(0,a._)("div",H,[(0,a._)("button",{type:"button",class:"btn btn-success",onClick:s[2]||(s[2]=t=>L.onSubmit())}," Post ")])])])])])])])])])}var L=e(9594),N={data(){return{_id:this.$route.params.id,item:{},text:"",comments:[],liked:Boolean}},methods:{async getPost(){try{await L.Z.showpost(this._id).then((t=>{this.item=t.data.post,this.comments=t.data.post.comments}))}catch(t){console.log(t)}},async like(){try{await L.Z.like(this._id,this.$store.state.user._id).then((t=>{this.$toast.success(t.data.message,{position:"top"}),this.getPost(),this.liked=!0}))}catch(t){this.$toast.error(t.response.data.message,{position:"top"})}},async onSubmit(){const t={id:this.item._id,text:this.text};try{await L.Z.addcomment(t).then((t=>{this.$toast.success(t.data.message,{position:"top"}),this.getPost()}))}catch(s){this.$toast.error(s.response.data.error,{position:"top"}),console.log(s)}this.text=""}},async mounted(){this.getPost()}},U=e(3744);const V=(0,U.Z)(N,[["render",K],["__scopeId","data-v-118741f2"]]);var j=V}}]);