(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f07d1"],{"9d1a":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"my-5 row justify-content-center"},[s("form",{staticClass:"col-md-6",on:{submit:function(e){return e.preventDefault(),t.payOrder(e)}}},[s("table",{staticClass:"table"},[t._m(0),s("tbody",t._l(t.order.products,function(e){return s("tr",{key:e.id},[s("td",{staticClass:"align-middle"},[t._v(t._s(e.product.title))]),s("td",{staticClass:"align-middle"},[t._v(t._s(e.qty)+"/"+t._s(e.product.unit))]),s("td",{staticClass:"align-middle text-right"},[t._v(t._s(e.final_total))])])}),0),s("tfoot",[s("tr",[s("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),s("td",{staticClass:"text-right"},[t._v(t._s(t.order.total))])])])]),s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("th",{attrs:{width:"100"}},[t._v("Email")]),s("td",[t._v(t._s(t.order.user.email))])]),s("tr",[s("th",[t._v("姓名")]),s("td",[t._v(t._s(t.order.user.name))])]),s("tr",[s("th",[t._v("收件人電話")]),s("td",[t._v(t._s(t.order.user.tel))])]),s("tr",[s("th",[t._v("收件人地址")]),s("td",[t._v(t._s(t.order.user.address))])]),s("tr",[s("th",[t._v("付款狀態")]),s("td",[t.order.is_paid?s("span",{staticClass:"text-success"},[t._v("付款完成")]):s("span",[t._v("尚未付款")])])])])]),!1===t.order.is_paid?s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-danger",on:{click:t.payOrder}},[t._v("確認付款去")])]):t._e()])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("th",[t._v("品名")]),s("th",[t._v("數量")]),s("th",[t._v("單價")])])}],d={data:function(){return{order:{user:{}},orderID:""}},methods:{getOrder:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("candle","/order/").concat(t.orderID);this.$http.get(e).then(function(e){console.log(e),t.order=e.data.order})},payOrder:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("candle","/pay/").concat(t.orderID);this.$http.post(e).then(function(e){e.data.success&&(t.getOrder(),t.$bus.$emit("message:push",e.data.message,"warning"))})}},created:function(){this.orderID=this.$route.params.orderID,this.getOrder()}},i=d,o=s("2877"),n=Object(o["a"])(i,r,a,!1,null,null,null);e["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0f07d1.11eb39ee.js.map