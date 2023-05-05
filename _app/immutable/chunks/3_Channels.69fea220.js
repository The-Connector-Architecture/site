import{S as D,i as F,s as G,k as o,q as y,a as T,l as c,m as l,h as a,r as H,c as _,n as t,b as e,X as i,U as N}from"./index.f02f8fef.js";function J(j){let p,r,x,C,E,h,S,P,d,A,v,u,k,w,I,b,m,R,g,f,z=`<code class="language-turtle"><span class="token keyword">@prefix</span> <span class="token function"><span class="token prefix"><span class="token punctuation">:</span></span></span> <span class="token url"><span class="token punctuation">&lt;</span>https://w3id.org/conn#<span class="token punctuation">></span></span> <span class="token punctuation">.</span>
<span class="token keyword">@prefix</span> <span class="token function"><span class="token prefix">sh<span class="token punctuation">:</span></span></span> <span class="token url"><span class="token punctuation">&lt;</span>http://www.w3.org/ns/shacl#<span class="token punctuation">></span></span> <span class="token punctuation">.</span>
<span class="token keyword">@prefix</span> <span class="token function"><span class="token prefix">xsd<span class="token punctuation">:</span></span></span> <span class="token url"><span class="token punctuation">&lt;</span>http://www.w3.org/2001/XMLSchema#<span class="token punctuation">></span></span> <span class="token punctuation">.</span>

<span class="token function"><span class="token prefix"><span class="token punctuation">:</span></span><span class="token local-name">HttpChannel</span></span> <span class="token keyword">a</span> <span class="token function"><span class="token prefix"><span class="token punctuation">:</span></span><span class="token local-name">Channel</span></span><span class="token punctuation">;</span>
    <span class="token function"><span class="token prefix"><span class="token punctuation">:</span></span><span class="token local-name">reader</span></span> <span class="token function"><span class="token prefix"><span class="token punctuation">:</span></span><span class="token local-name">HttpReaderChannel</span></span><span class="token punctuation">;</span>
    <span class="token function"><span class="token prefix"><span class="token punctuation">:</span></span><span class="token local-name">writer</span></span> <span class="token function"><span class="token prefix"><span class="token punctuation">:</span></span><span class="token local-name">HttpWriterChannel.</span></span>

<span class="token function"><span class="token prefix"><span class="token punctuation">:</span></span><span class="token local-name">HttpReaderChannelShape</span></span> <span class="token keyword">a</span> <span class="token function"><span class="token prefix">sh<span class="token punctuation">:</span></span><span class="token local-name">NodeShape</span></span><span class="token punctuation">;</span>
    <span class="token function"><span class="token prefix">sh<span class="token punctuation">:</span></span><span class="token local-name">targetClass</span></span> <span class="token function"><span class="token prefix"><span class="token punctuation">:</span></span><span class="token local-name">HttpReaderChannel</span></span><span class="token punctuation">;</span>
    <span class="token function"><span class="token prefix">sh<span class="token punctuation">:</span></span><span class="token local-name">property</span></span> <span class="token punctuation">[</span>
      <span class="token function"><span class="token prefix">sh<span class="token punctuation">:</span></span><span class="token local-name">datatype</span></span> <span class="token function"><span class="token prefix">xsd<span class="token punctuation">:</span></span><span class="token local-name">integer</span></span><span class="token punctuation">;</span>
      <span class="token function"><span class="token prefix">sh<span class="token punctuation">:</span></span><span class="token local-name">path</span></span> <span class="token function"><span class="token prefix"><span class="token punctuation">:</span></span><span class="token local-name">httpPort</span></span><span class="token punctuation">;</span>
      <span class="token function"><span class="token prefix">sh<span class="token punctuation">:</span></span><span class="token local-name">name</span></span> <span class="token string">"The port to bind the HTTP server to"</span>
    <span class="token punctuation">]</span><span class="token punctuation">.</span>


<span class="token function"><span class="token prefix"><span class="token punctuation">:</span></span><span class="token local-name">HttpWriterChannelShape</span></span> <span class="token keyword">a</span> <span class="token function"><span class="token prefix">sh<span class="token punctuation">:</span></span><span class="token local-name">NodeShape</span></span><span class="token punctuation">;</span>
    <span class="token function"><span class="token prefix">sh<span class="token punctuation">:</span></span><span class="token local-name">targetClass</span></span> <span class="token function"><span class="token prefix"><span class="token punctuation">:</span></span><span class="token local-name">HttpReaderChannel</span></span><span class="token punctuation">;</span>
    <span class="token function"><span class="token prefix">sh<span class="token punctuation">:</span></span><span class="token local-name">property</span></span> <span class="token punctuation">[</span>
      <span class="token function"><span class="token prefix">sh<span class="token punctuation">:</span></span><span class="token local-name">datatype</span></span> <span class="token function"><span class="token prefix">xsd<span class="token punctuation">:</span></span><span class="token local-name">string</span></span><span class="token punctuation">;</span>
      <span class="token function"><span class="token prefix">sh<span class="token punctuation">:</span></span><span class="token local-name">path</span></span> <span class="token function"><span class="token prefix"><span class="token punctuation">:</span></span><span class="token local-name">httpMethod</span></span><span class="token punctuation">;</span>
      <span class="token function"><span class="token prefix">sh<span class="token punctuation">:</span></span><span class="token local-name">description</span></span> <span class="token string">"The method to use for the HTTP action"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
      <span class="token function"><span class="token prefix">sh<span class="token punctuation">:</span></span><span class="token local-name">datatype</span></span> <span class="token function"><span class="token prefix">xsd<span class="token punctuation">:</span></span><span class="token local-name">string</span></span><span class="token punctuation">;</span>
      <span class="token function"><span class="token prefix">sh<span class="token punctuation">:</span></span><span class="token local-name">path</span></span> <span class="token function"><span class="token prefix"><span class="token punctuation">:</span></span><span class="token local-name">httpEndpoint</span></span><span class="token punctuation">;</span>
      <span class="token function"><span class="token prefix">sh<span class="token punctuation">:</span></span><span class="token local-name">description</span></span> <span class="token string">"The endpoint to use for the HTTP action"</span>
    <span class="token punctuation">]</span><span class="token punctuation">.</span></code>`;return{c(){p=o("h1"),r=o("a"),x=o("span"),C=y("Intro to channels"),E=T(),h=o("p"),S=y("Processors in the connector architecture are usually stream processors. The stream they consume or generate is technology independent. A channel is an instance of a stream between two processors, a transportation method of some kind. The easiest examples are websocket streams or kafka streams."),P=T(),d=o("p"),A=y("A channel consists of a reader and a writer part, that together form a channel. Each channel has it’s own configuration (separate for readers and writers) that defines the required fields."),v=T(),u=o("h2"),k=o("a"),w=o("span"),I=y("Example http-channel"),b=T(),m=o("p"),R=y("Here you can see an example configuration of a HTTP channel configuration. It defines a reader and a writer and together forms a HTTP channel. Shapes are defined for both the reader and the writer part."),g=T(),f=o("pre"),this.h()},l(n){p=c(n,"H1",{id:!0});var s=l(p);r=c(s,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var M=l(r);x=c(M,"SPAN",{class:!0}),l(x).forEach(a),M.forEach(a),C=H(s,"Intro to channels"),s.forEach(a),E=_(n),h=c(n,"P",{});var L=l(h);S=H(L,"Processors in the connector architecture are usually stream processors. The stream they consume or generate is technology independent. A channel is an instance of a stream between two processors, a transportation method of some kind. The easiest examples are websocket streams or kafka streams."),L.forEach(a),P=_(n),d=c(n,"P",{});var W=l(d);A=H(W,"A channel consists of a reader and a writer part, that together form a channel. Each channel has it’s own configuration (separate for readers and writers) that defines the required fields."),W.forEach(a),v=_(n),u=c(n,"H2",{id:!0});var q=l(u);k=c(q,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var X=l(k);w=c(X,"SPAN",{class:!0}),l(w).forEach(a),X.forEach(a),I=H(q,"Example http-channel"),q.forEach(a),b=_(n),m=c(n,"P",{});var U=l(m);R=H(U,"Here you can see an example configuration of a HTTP channel configuration. It defines a reader and a writer and together forms a HTTP channel. Shapes are defined for both the reader and the writer part."),U.forEach(a),g=_(n),f=c(n,"PRE",{class:!0});var B=l(f);B.forEach(a),this.h()},h(){t(x,"class","icon icon-link"),t(r,"aria-hidden","true"),t(r,"tabindex","-1"),t(r,"href","#intro-to-channels"),t(p,"id","intro-to-channels"),t(w,"class","icon icon-link"),t(k,"aria-hidden","true"),t(k,"tabindex","-1"),t(k,"href","#example-http-channel"),t(u,"id","example-http-channel"),t(f,"class","language-turtle")},m(n,s){e(n,p,s),i(p,r),i(r,x),i(p,C),e(n,E,s),e(n,h,s),i(h,S),e(n,P,s),e(n,d,s),i(d,A),e(n,v,s),e(n,u,s),i(u,k),i(k,w),i(u,I),e(n,b,s),e(n,m,s),i(m,R),e(n,g,s),e(n,f,s),f.innerHTML=z},p:N,i:N,o:N,d(n){n&&a(p),n&&a(E),n&&a(h),n&&a(P),n&&a(d),n&&a(v),n&&a(u),n&&a(b),n&&a(m),n&&a(g),n&&a(f)}}}const O={toc:{index:null,endIndex:null,map:{type:"list",ordered:!1,spread:!0,children:[{type:"listItem",spread:!0,children:[{type:"paragraph",children:[{type:"link",title:null,url:"#intro-to-channels",children:[{type:"text",value:"Intro to channels"}]}]},{type:"list",ordered:!1,spread:!1,children:[{type:"listItem",spread:!1,children:[{type:"paragraph",children:[{type:"link",title:null,url:"#example-http-channel",children:[{type:"text",value:"Example http-channel"}]}]}]}]}]}]}}};class Q extends D{constructor(p){super(),F(this,p,null,J,G,{})}}export{Q as default,O as metadata};