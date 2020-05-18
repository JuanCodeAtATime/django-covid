(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{196:function(e,a,t){},197:function(e,a,t){},198:function(e,a){e.exports={id:"homepage",hed:"Covid-19 Library",homepage:!0,lede:"COVID-19 Library offers frontline health workers and\ntrainers access to quality assured openly licensed\ncontent that can be used on mobile devices and\nshared virally amongst communities.\n"}},199:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));t(201),t(32),t(94),t(149);var r=new Map([["case-finding-contact-tracing-management","MedicalManagementIcon"],["surveillance","SurveillanceIcon"],["public-health-prevention-measures","PreventionMeasuresIcon"],["infection-prevention-and-control","InfectionPreventionIcon"],["lab-testing","LabTestingIcon"],["case-management-and-hospital-response","HospitalResponseIcon"],["emergency-response","EmergencyResponseIcon"],["societal-response","SocietalResponseIcon"],["risk-management-community-engagement","CommunityEngagementIcon"]])},205:function(e,a,t){"use strict";var r=t(196);t.n(r).a},206:function(e,a,t){"use strict";var r=t(197);t.n(r).a},207:function(e,a){},214:function(e,a,t){"use strict";t.r(a);t(211);var r=t(212),s=t(2),n=(t(198),t(199)),o=t(100),i=(t(101),t(213)),c={name:"ResourceCard",props:["id","title","route","rating","typeTags","orgs","description","languages","reviewTime","geographies"],setup:function(e){return{generatedOrgs:Object(s.a)((function(){var a=Object(i.a)(e.orgs);return{label:a[0],orgs:a.slice(1)}}))}}},d=(t(205),t(0)),l=t(1);const p={element:{class:"edge:xStart--set:edgePrimary","at-base":"grid:v"},header:{"at-base":"module:static--area:1 flex:v--p:start--s:start pad:xyEq50 rhy:yStart25"},hed:{class:"type:major--face:hed--weight:900 color:shade fx:shift"},byline:{class:"type:minor--face:copy color:neutral"},dataType:{class:"type:minor--face:hed--weight:900 color:primary--shade fx:shift"},org:{class:"type:minor--face:hed color:primary--shade fx:shift"},body:{class:"type--face:hed--weight:400","at-base":"module:static--area:2 pad:xyEq50"},categoryMatrix:{"at-base":"module:static--area:3 flex:h--p:start--s:middle pad:xyEq50 rhy:xStart25"},categoryMatrixItem:{"at-base":"module:static flex:v--p:middle--s:middle aspect:xyEq200--rhy"},categoryIcon:{class:"color:primary--hilite","at-base":"module:static aspect:xyEq150--rhy"},metaList:{class:"motif:primary--tint edge:xStart--set:edgePrimary","at-base":"module:static--area:4 pad:xyEq50 rhy:yStart50"},metaIcon:{class:"color:primary","at-base":"module:static aspect:xyEq150--rhy"},metaTerm:{class:"optics:a11y"},metaValue:{class:"type:chrome--face:hed--weight:900 color:dark","at-base":"module:static iflex:v--p:start--s:start"},metaGroup:{"at-base":"flex:h--p:start--s:middle rhy:xStart50"},metaLink:{class:"color:primary--shade"}};var m=({options:e})=>{e.__vefa?e.__vefa.data=p:e.__vefa=l.a.observable({data:p})},y=Object(d.a)(c,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("article",e._b({staticClass:"ResourceCard"},"article",e.$vefa.element,!1),[t("header",e._b({staticClass:"ResourceCard-header"},"header",e.$vefa.header,!1),[t("h2",e._b({},"h2",e.$vefa.hed,!1),[t("a",{attrs:{href:e.route}},[e._v(e._s(e.title))])]),t("h4",e._b({},"h4",e.$vefa.byline,!1),[t("span",e._b({},"span",e.$vefa.dataType,!1),[e._v(e._s(e.typeTags[0]))]),e.orgs?[t("span",[e._v(" "+e._s(e.generatedOrgs.label))]),t("span",e._b({},"span",e.$vefa.dataType,!1),[e._v(e._s(e.generatedOrgs.orgs.join(", ")))])]:e._e()],2)]),t("div",e._b({staticClass:"ResourceCard-body"},"div",e.$vefa.body,!1),[t("p",[e._v(e._s(e.description))])]),t("dl",e._b({staticClass:"ResourceCard-metaList"},"dl",e.$vefa.metaList,!1),[e.reviewTime.time?t("div",e._b({},"div",e.$vefa.metaGroup,!1),[t("dt",[t("timing-icon",e._b({},"timing-icon",e.$vefa.metaIcon,!1)),t("span",e._b({},"span",e.$vefa.metaTerm,!1),[e._v(e._s(e.reviewTime.label))])],1),t("dd",e._b({},"dd",e.$vefa.metaValue,!1),[e._v(e._s(e.reviewTime.time))])]):e._e(),e.languages?t("div",e._b({},"div",e.$vefa.metaGroup,!1),[t("dt",[t("language-icon",e._b({},"language-icon",e.$vefa.metaIcon,!1)),t("span",e._b({},"span",e.$vefa.metaTerm,!1),[e._v("Languages")])],1),t("dd",e._b({},"dd",e.$vefa.metaValue,!1),[e._l(e.languages,(function(a){return[t("span",e._b({},"span",e.$vefa.metaLink,!1),[e._v(e._s(a.name))])]}))],2)]):e._e()])])}),[],!1,null,null,null);"function"==typeof m&&m(y);var u={name:"CategoryView",components:{ResourceCard:y.exports},setup:function(e,a){var t=Object(s.i)({}),i=Object(s.i)([]);Object(s.f)((function(){t.value=Object(o.a)({id:"CURRENT_CATEGORY"}),i.value=Object(o.a)({id:"CURRENT_RESOURCES"})||[]}));var c=Object(s.i)("");Object(s.f)(Object(r.a)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=document.getElementById("addResourceBlock")){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,a.innerHTML;case 5:return c.value=e.sent,a.remove(),e.abrupt("return");case 8:case"end":return e.stop()}}),e)}))));var d=Object(s.a)((function(){return!!t.value.id&&(e=t.value.id,n.a.get(e));var e}));return{context:t,svgIcon:d,resources:i,emptySlot:c}}};t(206);const v={element:{"at-enhanced":"grid:v"},emptySlot:{class:"Category-emptySlot motif:tint type:minor--face:hed--weight:700","at-base":"pad:xyEq100 rhy:yStart50"},overview:{class:"motif:bright","at-base":"pad:xyEq100 rhy:yStart200","at-economy":"pad:yStart300","at-enhanced":"motif:tint flex:v--p:start--s:start pad:yStart200","at-standard":"pad:xyEq150","at-wide":"pad:xStartFull"},header:{class:"color:dark","at-base":"flex:h--p:start--s:middle rhy:xStart50","at-economy":"rhy:xStart100"},hed:{class:"type:subhed--face:hed--weight:400--lead:base--set:typePreWrap","at-economy":"type:hed","at-enhanced":"type:major--weight:700","at-standard":"type:hed--weight:400","at-wide":"type:xhed",style:{"max-width":"420px"}},icon:{class:"color:primary--shade","at-base":"aspect:xyEq200--rhy","at-economy":"aspect:xyEq250--rhy","at-enhanced":"aspect:xyEq150--rhy","at-standard":"aspect:xyEq250--rhy"},metaList:{class:"type:chrome--face:hed--weight:900 color:neutral","at-base":"optics:a11y","at-economy":"type:minor module:static optics:yes iso:xStartAuto","at-enhanced":"optics:a11y","at-extended":"type:chrome module:static optics:yes iso:xStartAuto"},metaKey:{class:"optics:a11y"},content:{class:"type:minor--face:hed--weight:400--lead:expand","at-base":"rhy:yStart100","at-economy":"type:base--lead:expand pad:xStart350 rhy:yStart200","at-enhanced":"type:minor--lead:expand pad:xStart250","at-standard":"type:base--lead:expand pad:xStart350"},body:{"at-base":"module:balance flex:v--p:start--s:middle pad:xEq50 pad:yEq100 pad:yEnd200","at-compressed":"pad:xEq0","at-economy":"pad:xEq100","at-standard":"pad:xStart150","at-wide":"pad:xEndFull"},resourceList:{"at-base":"flex:v pad:xyEq50 rhy:yStart50","at-compressed":"rhy:yStart150"}};var f=({options:e})=>{e.__vefa?e.__vefa.data=v:e.__vefa=l.a.observable({data:v})},h=t(207),b=t.n(h),g=Object(d.a)(u,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("main",e._b({staticClass:"Category"},"main",e.vefaAppend(e.$appStyles.main,e.$vefa.element),!1),[t("article",e._b({staticClass:"Category-overview"},"article",e.$vefa.overview,!1),[t("header",e._b({},"header",e.$vefa.header,!1),[t(e.svgIcon,e._b({tag:"component",staticClass:"Landing-logo"},"component",e.$vefa.icon,!1)),t("h1",e._b({},"h1",e.$vefa.hed,!1),[e._v(e._s(e.context.title))]),t("dl",e._b({},"dl",e.$vefa.metaList,!1),[t("dt",e._b({},"dt",e.$vefa.metaKey,!1),[e._v("Available Resources")]),t("dd",e._b({},"dd",e.$vefa.metaValue,!1),[e._v(e._s(e.context.resourceCount))])])],1),t("div",e._b({directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"Category-content",domProps:{innerHTML:e._s(e.context.description)}},"div",e.$vefa.content,!1))]),t("div",e._b({staticClass:"Category-body"},"div",e.$vefa.body,!1),[t("section",e._b({staticClass:"Category-resources"},"section",e.$vefa.resourceList,!1),[e.resources.length?e._e():t("aside",e._b({directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:e._s(e.emptySlot)}},"aside",e.$vefa.emptySlot,!1)),e._l(e.resources,(function(a){return[t("resource-card",e._b({},"resource-card",a,!1))]}))],2)])])}),[],!1,null,null,null);"function"==typeof f&&f(g),"function"==typeof b.a&&b()(g);a.default=g.exports}}]);