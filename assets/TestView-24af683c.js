import{d as C,r as w,b as g,_ as D,e as y,o as b,c as _,a as n,t as c,f as m,w as I,v as T,g as V,h as B,F as U,i as E,u as k,n as F,p as N,j}from"./index-27778c9f.js";import{B as f}from"./BaseInput-80b79ba3.js";const q=C("list",()=>{const s=w([{name:"John",hobby:"Renang",description:"Everyweek"},{name:"Doe",hobby:"Coding",description:null}]),d=g(()=>s),u=a=>g(()=>s[a]);function t(a){a&&s.push(a)}return{list:s,getList:d,getDetail:u,addList:t,removeList:a=>{s.splice(a,1)},editList:(a,v)=>{s[a]=v}}});const L=s=>(N("data-v-5963953a"),s=s(),j(),s),x={class:"container"},J=["onSubmit"],M={class:"checkbox"},R=L(()=>n("button",{type:"reset"},"Cancel",-1)),$={type:"submit"},z=L(()=>n("h4",null,"Tasks",-1)),G={class:"list"},O=["onDblclick"],A=["onClick","disabled"],H=["onClick","disabled"],K={__name:"TestView",setup(s){const d=q(),u={name:"",hobby:"",description:"",completed:!1},t=y({...u}),i=y(!1),p=()=>{Object.assign(t.value,u),i.value=!1};function a(){const l={...t.value};i.value===!1?d.addList(l):d.editList(i.value,l),p()}function v(l){const o=d.getDetail(l);t.value={...o.value},i.value=l}function S(l){const o=d.getDetail(l);d.editList(l,{...o.value,completed:!o.value.completed})}return(l,o)=>{var h;return b(),_("div",x,[n("h1",null,"Test "+c((h=l.$route.params)==null?void 0:h.id),1),n("form",{class:"form",onSubmit:B(a,["prevent"]),onReset:p},[m(f,{modelValue:t.value.name,"onUpdate:modelValue":o[0]||(o[0]=e=>t.value.name=e),name:"name",placeholder:"John",required:""},null,8,["modelValue"]),m(f,{modelValue:t.value.hobby,"onUpdate:modelValue":o[1]||(o[1]=e=>t.value.hobby=e),name:"hobby",placeholder:"Gaming",required:""},null,8,["modelValue"]),m(f,{modelValue:t.value.description,"onUpdate:modelValue":o[2]||(o[2]=e=>t.value.description=e),name:"description",placeholder:"Everyday"},null,8,["modelValue"]),n("div",M,[I(n("input",{type:"checkbox","onUpdate:modelValue":o[3]||(o[3]=e=>t.value.completed=e),name:"completed"},null,512),[[T,t.value.completed]]),V(" Completed ")]),R,n("button",$,c(i.value!==!1?"Save":"Submit"),1)],40,J),z,n("ol",G,[(b(!0),_(U,null,E(k(d).getList,(e,r)=>(b(),_("li",{key:r,class:F({strike:e==null?void 0:e.completed}),onDblclick:P=>S(r)},[n("button",{class:"red",onClick:()=>k(d).removeList(r),disabled:i.value!==!1},"×",8,A),n("button",{class:"orange",onClick:()=>v(r),disabled:i.value!==!1},"✎",8,H),V(" "+c(e==null?void 0:e.name)+" ("+c(e==null?void 0:e.hobby)+") - "+c(e!=null&&e.description?e.description:"description?"),1)],42,O))),128))])])}}},X=D(K,[["__scopeId","data-v-5963953a"]]);export{X as default};
