import{S as Ce,i as je,s as Re,e as s,t as c,a as p,c as o,b as n,f as t,d as l,g as d,v as h,h as a,j as r,n as we}from"./index.32e53c61.js";function De(Ie){let u,m,S,U,N,g,X,O,T,Y,F,w,b,H,Z,J,P,$,L,A,ee,q,v,y,C,te,M,f,re,j,ie,ae,R,se,oe,V,x,ne,D,ce,le,z,W,he,B,k,Se=`<code class="language-undefined">flowchart LR
    subgraph runner-1
      w&#123;&#123;writer&#125;&#125;
      source_processor---w
    end
    subgraph runner-2
      r&#123;&#123;reader&#125;&#125;
      r---sink_processor
    end
    w--channel--&gt;r</code>`,G,_,pe,E,de,ue;return{c(){u=s("h1"),m=s("a"),S=s("span"),U=c("Welcome to the connector architecture"),N=p(),g=s("p"),X=c("Welcome to the connector-architecture wiki!"),O=p(),T=s("p"),Y=c("When reading this wiki it should become clear what it is, and what it is not, but also how it can be extended, used, and played with."),F=p(),w=s("h2"),b=s("a"),H=s("span"),Z=c("What is the connector architecture?"),J=p(),P=s("p"),$=c(`The connector architecture is a configuration based way to write code once and reuse it everywhere.
It has a prime focus on being extendable without restrictions for supporting data ecosystems.`),L=p(),A=s("p"),ee=c("The connector architecture is designed with streaming data pipelines in mind. Here, the user configures their own pipeline, from start to finish with pre-existing processors (parts of the pipeline). The power of the connector architecture is its extensibility and platform independence, which makes possible to mix and match processors written in different programming languages."),q=p(),v=s("h2"),y=s("a"),C=s("span"),te=c("Small high-level example"),M=p(),f=s("p"),re=c("In this pseudo pipeline made with the connector architecture, one processor ("),j=s("code"),ie=c("source_processor"),ae=c(") sends some data to the other processor ("),R=s("code"),se=c("sink_processor"),oe=c("), resembling a common case such as a data ingestion pipeline. The source fetches data with a custom script from some API, which happens to be written in javascript. The sink takes this data and stores it inside a specific type of database for later reuse, using a Java application for example."),V=p(),x=s("p"),ne=c("The connector architecture makes the pipeline possible, by defining, "),D=s("code"),ce=c("runners"),le=c(". A runner takes in the pipeline configuration, which is runner agnostic and starts the corresponding processors. Runners are created once and can be reused over all pipelines, while processors can be more purpose-specific and adjusted per pipeline if this is desired."),z=p(),W=s("p"),he=c("The two processors communicate over a channel. This is a technology that both runners understand. Easy examples are websockets or TCP streams."),B=p(),k=s("pre"),G=p(),_=s("p"),pe=c("For more information you can check out the rest of the wiki. The "),E=s("a"),de=c("vocabulary"),ue=c(" page is a good starting place."),this.h()},l(e){u=o(e,"H1",{id:!0});var i=n(u);m=o(i,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var be=n(m);S=o(be,"SPAN",{class:!0}),n(S).forEach(t),be.forEach(t),U=l(i,"Welcome to the connector architecture"),i.forEach(t),N=d(e),g=o(e,"P",{});var ve=n(g);X=l(ve,"Welcome to the connector-architecture wiki!"),ve.forEach(t),O=d(e),T=o(e,"P",{});var ye=n(T);Y=l(ye,"When reading this wiki it should become clear what it is, and what it is not, but also how it can be extended, used, and played with."),ye.forEach(t),F=d(e),w=o(e,"H2",{id:!0});var fe=n(w);b=o(fe,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var xe=n(b);H=o(xe,"SPAN",{class:!0}),n(H).forEach(t),xe.forEach(t),Z=l(fe,"What is the connector architecture?"),fe.forEach(t),J=d(e),P=o(e,"P",{});var _e=n(P);$=l(_e,`The connector architecture is a configuration based way to write code once and reuse it everywhere.
It has a prime focus on being extendable without restrictions for supporting data ecosystems.`),_e.forEach(t),L=d(e),A=o(e,"P",{});var ke=n(A);ee=l(ke,"The connector architecture is designed with streaming data pipelines in mind. Here, the user configures their own pipeline, from start to finish with pre-existing processors (parts of the pipeline). The power of the connector architecture is its extensibility and platform independence, which makes possible to mix and match processors written in different programming languages."),ke.forEach(t),q=d(e),v=o(e,"H2",{id:!0});var me=n(v);y=o(me,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ee=n(y);C=o(Ee,"SPAN",{class:!0}),n(C).forEach(t),Ee.forEach(t),te=l(me,"Small high-level example"),me.forEach(t),M=d(e),f=o(e,"P",{});var I=n(f);re=l(I,"In this pseudo pipeline made with the connector architecture, one processor ("),j=o(I,"CODE",{});var ge=n(j);ie=l(ge,"source_processor"),ge.forEach(t),ae=l(I,") sends some data to the other processor ("),R=o(I,"CODE",{});var Te=n(R);se=l(Te,"sink_processor"),Te.forEach(t),oe=l(I,"), resembling a common case such as a data ingestion pipeline. The source fetches data with a custom script from some API, which happens to be written in javascript. The sink takes this data and stores it inside a specific type of database for later reuse, using a Java application for example."),I.forEach(t),V=d(e),x=o(e,"P",{});var K=n(x);ne=l(K,"The connector architecture makes the pipeline possible, by defining, "),D=o(K,"CODE",{});var Pe=n(D);ce=l(Pe,"runners"),Pe.forEach(t),le=l(K,". A runner takes in the pipeline configuration, which is runner agnostic and starts the corresponding processors. Runners are created once and can be reused over all pipelines, while processors can be more purpose-specific and adjusted per pipeline if this is desired."),K.forEach(t),z=d(e),W=o(e,"P",{});var Ae=n(W);he=l(Ae,"The two processors communicate over a channel. This is a technology that both runners understand. Easy examples are websockets or TCP streams."),Ae.forEach(t),B=d(e),k=o(e,"PRE",{class:!0});var He=n(k);He.forEach(t),G=d(e),_=o(e,"P",{});var Q=n(_);pe=l(Q,"For more information you can check out the rest of the wiki. The "),E=o(Q,"A",{href:!0,rel:!0});var We=n(E);de=l(We,"vocabulary"),We.forEach(t),ue=l(Q," page is a good starting place."),Q.forEach(t),this.h()},h(){h(S,"class","icon icon-link"),h(m,"aria-hidden","true"),h(m,"tabindex","-1"),h(m,"href","#welcome-to-the-connector-architecture"),h(u,"id","welcome-to-the-connector-architecture"),h(H,"class","icon icon-link"),h(b,"aria-hidden","true"),h(b,"tabindex","-1"),h(b,"href","#what-is-the-connector-architecture"),h(w,"id","what-is-the-connector-architecture"),h(C,"class","icon icon-link"),h(y,"aria-hidden","true"),h(y,"tabindex","-1"),h(y,"href","#small-high-level-example"),h(v,"id","small-high-level-example"),h(k,"class","language-undefined"),h(E,"href","https://github.com/TREEcg/connector-architecture/wiki/Vocabulary-explained"),h(E,"rel","nofollow")},m(e,i){a(e,u,i),r(u,m),r(m,S),r(u,U),a(e,N,i),a(e,g,i),r(g,X),a(e,O,i),a(e,T,i),r(T,Y),a(e,F,i),a(e,w,i),r(w,b),r(b,H),r(w,Z),a(e,J,i),a(e,P,i),r(P,$),a(e,L,i),a(e,A,i),r(A,ee),a(e,q,i),a(e,v,i),r(v,y),r(y,C),r(v,te),a(e,M,i),a(e,f,i),r(f,re),r(f,j),r(j,ie),r(f,ae),r(f,R),r(R,se),r(f,oe),a(e,V,i),a(e,x,i),r(x,ne),r(x,D),r(D,ce),r(x,le),a(e,z,i),a(e,W,i),r(W,he),a(e,B,i),a(e,k,i),k.innerHTML=Se,a(e,G,i),a(e,_,i),r(_,pe),r(_,E),r(E,de),r(_,ue)},p:we,i:we,o:we,d(e){e&&t(u),e&&t(N),e&&t(g),e&&t(O),e&&t(T),e&&t(F),e&&t(w),e&&t(J),e&&t(P),e&&t(L),e&&t(A),e&&t(q),e&&t(v),e&&t(M),e&&t(f),e&&t(V),e&&t(x),e&&t(z),e&&t(W),e&&t(B),e&&t(k),e&&t(G),e&&t(_)}}}const Oe={title:"Welcome",toc:{index:null,endIndex:null,map:{type:"list",ordered:!1,spread:!0,children:[{type:"listItem",spread:!0,children:[{type:"paragraph",children:[{type:"link",title:null,url:"#welcome-to-the-connector-architecture",children:[{type:"text",value:"Welcome to the connector architecture"}]}]},{type:"list",ordered:!1,spread:!1,children:[{type:"listItem",spread:!1,children:[{type:"paragraph",children:[{type:"link",title:null,url:"#what-is-the-connector-architecture",children:[{type:"text",value:"What is the connector architecture?"}]}]}]},{type:"listItem",spread:!1,children:[{type:"paragraph",children:[{type:"link",title:null,url:"#small-high-level-example",children:[{type:"text",value:"Small high-level example"}]}]}]}]}]}]}}};class Fe extends Ce{constructor(u){super(),je(this,u,null,De,Re,{})}}export{Fe as default,Oe as metadata};