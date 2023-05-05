import{S as Yn,i as Zn,s as $n,k as e,q as i,a as k,l as o,m as c,h as s,r as u,c as r,n as l,b as p,X as t,U as vn}from"./index.f02f8fef.js";function ns(Jn){let f,h,S,an,O,M,pn,q,m,tn,w,en,on,j,cn,ln,U,H,un,X,y,L,kn,rn,z,P,Gn=`<code class="language-turtle"><span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">Send</span></span> <span class="token keyword">a</span> <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">JsProcess</span></span><span class="token punctuation">;</span>
  <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">file</span></span> <span class="token string">"./test.js"</span><span class="token punctuation">;</span>
  <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">function</span></span> <span class="token string">"send"</span><span class="token punctuation">;</span>
  <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">location</span></span> <span class="token url"><span class="token punctuation">&lt;</span>./<span class="token punctuation">></span></span><span class="token punctuation">;</span>
  <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">mapping</span></span> <span class="token punctuation">[</span>
    <span class="token keyword">a</span> <span class="token function"><span class="token prefix">fno<span class="token punctuation">:</span></span><span class="token local-name">Mapping</span></span><span class="token punctuation">;</span>
    <span class="token function"><span class="token prefix">fno<span class="token punctuation">:</span></span><span class="token local-name">parameterMapping</span></span> <span class="token punctuation">[</span>
      <span class="token keyword">a</span> <span class="token function"><span class="token prefix">fnom<span class="token punctuation">:</span></span><span class="token local-name">PositionParameterMapping</span></span> <span class="token punctuation">;</span>
      <span class="token function"><span class="token prefix">fnom<span class="token punctuation">:</span></span><span class="token local-name">functionParameter</span></span> <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">msg</span></span> <span class="token punctuation">;</span>
      <span class="token function"><span class="token prefix">fnom<span class="token punctuation">:</span></span><span class="token local-name">implementationParameterPosition</span></span> <span class="token string">"0"</span><span class="token punctuation">^^</span><span class="token function"><span class="token prefix">xsd<span class="token punctuation">:</span></span><span class="token local-name">int</span></span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
      <span class="token keyword">a</span> <span class="token function"><span class="token prefix">fnom<span class="token punctuation">:</span></span><span class="token local-name">PositionParameterMapping</span></span> <span class="token punctuation">;</span>
      <span class="token function"><span class="token prefix">fnom<span class="token punctuation">:</span></span><span class="token local-name">functionParameter</span></span> <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">sendWriter</span></span> <span class="token punctuation">;</span>
      <span class="token function"><span class="token prefix">fnom<span class="token punctuation">:</span></span><span class="token local-name">implementationParameterPosition</span></span> <span class="token string">"1"</span><span class="token punctuation">^^</span><span class="token function"><span class="token prefix">xsd<span class="token punctuation">:</span></span><span class="token local-name">int</span></span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span><span class="token punctuation">.</span></code>`,B,E,I,fn,mn,D,g,On=`<code class="language-turtle"><span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">Echo</span></span> <span class="token keyword">a</span> <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">JsProcess</span></span><span class="token punctuation">;</span>
  <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">file</span></span> <span class="token string">"./echo.js"</span><span class="token punctuation">;</span>
  <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">function</span></span> <span class="token string">"echo"</span><span class="token punctuation">;</span>
  <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">location</span></span> <span class="token url"><span class="token punctuation">&lt;</span>./<span class="token punctuation">></span></span><span class="token punctuation">;</span>
  <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">mapping</span></span> <span class="token punctuation">[</span>
    <span class="token keyword">a</span> <span class="token function"><span class="token prefix">fno<span class="token punctuation">:</span></span><span class="token local-name">Mapping</span></span><span class="token punctuation">;</span>
    <span class="token function"><span class="token prefix">fno<span class="token punctuation">:</span></span><span class="token local-name">parameterMapping</span></span> <span class="token punctuation">[</span>
      <span class="token keyword">a</span> <span class="token function"><span class="token prefix">fnom<span class="token punctuation">:</span></span><span class="token local-name">PositionParameterMapping</span></span> <span class="token punctuation">;</span>
      <span class="token function"><span class="token prefix">fnom<span class="token punctuation">:</span></span><span class="token local-name">functionParameter</span></span> <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">input</span></span> <span class="token punctuation">;</span>
      <span class="token function"><span class="token prefix">fnom<span class="token punctuation">:</span></span><span class="token local-name">implementationParameterPosition</span></span> <span class="token string">"0"</span><span class="token punctuation">^^</span><span class="token function"><span class="token prefix">xsd<span class="token punctuation">:</span></span><span class="token local-name">int</span></span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
      <span class="token keyword">a</span> <span class="token function"><span class="token prefix">fnom<span class="token punctuation">:</span></span><span class="token local-name">PositionParameterMapping</span></span> <span class="token punctuation">;</span>
      <span class="token function"><span class="token prefix">fnom<span class="token punctuation">:</span></span><span class="token local-name">functionParameter</span></span> <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">output</span></span> <span class="token punctuation">;</span>
      <span class="token function"><span class="token prefix">fnom<span class="token punctuation">:</span></span><span class="token local-name">implementationParameterPosition</span></span> <span class="token string">"1"</span><span class="token punctuation">^^</span><span class="token function"><span class="token prefix">xsd<span class="token punctuation">:</span></span><span class="token local-name">int</span></span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span><span class="token punctuation">.</span></code>`,F,_,J,hn,dn,K,v,qn=`<code class="language-turtle"><span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">Resc</span></span> <span class="token keyword">a</span> <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">JsProcess</span></span><span class="token punctuation">;</span>
  <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">file</span></span> <span class="token string">"./test.js"</span><span class="token punctuation">;</span>
  <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">function</span></span> <span class="token string">"resc"</span><span class="token punctuation">;</span>
  <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">location</span></span> <span class="token url"><span class="token punctuation">&lt;</span>./<span class="token punctuation">></span></span><span class="token punctuation">;</span>
  <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">mapping</span></span> <span class="token punctuation">[</span>
    <span class="token keyword">a</span> <span class="token function"><span class="token prefix">fno<span class="token punctuation">:</span></span><span class="token local-name">Mapping</span></span><span class="token punctuation">;</span>
    <span class="token function"><span class="token prefix">fno<span class="token punctuation">:</span></span><span class="token local-name">parameterMapping</span></span> <span class="token punctuation">[</span>
      <span class="token keyword">a</span> <span class="token function"><span class="token prefix">fnom<span class="token punctuation">:</span></span><span class="token local-name">PositionParameterMapping</span></span> <span class="token punctuation">;</span>
      <span class="token function"><span class="token prefix">fnom<span class="token punctuation">:</span></span><span class="token local-name">functionParameter</span></span> <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">rescReader</span></span> <span class="token punctuation">;</span>
      <span class="token function"><span class="token prefix">fnom<span class="token punctuation">:</span></span><span class="token local-name">implementationParameterPosition</span></span> <span class="token string">"0"</span><span class="token punctuation">^^</span><span class="token function"><span class="token prefix">xsd<span class="token punctuation">:</span></span><span class="token local-name">int</span></span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span><span class="token punctuation">.</span></code>`,Q,W,xn,V,N,wn,Y,b,Un=`<code class="language-undefined">flowchart LR
subgraph js-runner
  subgraph send-proc
    w1&#123;&#123;writer&#125;&#125;
    send---w1
  end
  subgraph echo-proc
    r1&#123;&#123;reader&#125;&#125;
    w2&#123;&#123;writer&#125;&#125;
    r1---echo---w2
  end
  subgraph resc-proc
    r2&#123;&#123;reader&#125;&#125;
    r2---resc
  end
  w1--memory-channel--&gt;r1
  w2--http-channel--&gt;r2
end</code>`,Z,R,Xn=`<code class="language-turtle"><span class="token keyword">@prefix</span> <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span></span> <span class="token url"><span class="token punctuation">&lt;</span>https://w3id.org/conn/js#<span class="token punctuation">></span></span> <span class="token punctuation">.</span>
<span class="token keyword">@prefix</span> <span class="token function"><span class="token prefix">ws<span class="token punctuation">:</span></span></span> <span class="token url"><span class="token punctuation">&lt;</span>https://w3id.org/conn/ws#<span class="token punctuation">></span></span> <span class="token punctuation">.</span>
<span class="token keyword">@prefix</span> <span class="token function"><span class="token prefix"><span class="token punctuation">:</span></span></span> <span class="token url"><span class="token punctuation">&lt;</span>https://w3id.org/conn#<span class="token punctuation">></span></span> <span class="token punctuation">.</span>

<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">a</span> <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">JsChannel</span></span><span class="token punctuation">;</span>
  <span class="token function"><span class="token prefix"><span class="token punctuation">:</span></span><span class="token local-name">reader</span></span> <span class="token url"><span class="token punctuation">&lt;</span>jr<span class="token punctuation">></span></span><span class="token punctuation">;</span>
  <span class="token function"><span class="token prefix"><span class="token punctuation">:</span></span><span class="token local-name">writer</span></span> <span class="token url"><span class="token punctuation">&lt;</span>jw<span class="token punctuation">></span></span><span class="token punctuation">.</span>

<span class="token url"><span class="token punctuation">&lt;</span>jr<span class="token punctuation">></span></span> <span class="token keyword">a</span> <span class="token function"><span class="token prefix"><span class="token punctuation">:</span></span><span class="token local-name">JsReaderChannel.</span></span>
<span class="token url"><span class="token punctuation">&lt;</span>jw<span class="token punctuation">></span></span> <span class="token keyword">a</span> <span class="token function"><span class="token prefix"><span class="token punctuation">:</span></span><span class="token local-name">JsWriterChannel.</span></span>


<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">a</span> <span class="token function"><span class="token prefix"><span class="token punctuation">:</span></span><span class="token local-name">HttpChannel</span></span><span class="token punctuation">;</span>
  <span class="token function"><span class="token prefix"><span class="token punctuation">:</span></span><span class="token local-name">reader</span></span> <span class="token function"><span class="token prefix"><span class="token punctuation">:</span></span><span class="token local-name">WsReaderChannel</span></span><span class="token punctuation">;</span>
  <span class="token function"><span class="token prefix"><span class="token punctuation">:</span></span><span class="token local-name">writer</span></span> <span class="token function"><span class="token prefix"><span class="token punctuation">:</span></span><span class="token local-name">WsWriterChannel.</span></span>

<span class="token url"><span class="token punctuation">&lt;</span>httpReader<span class="token punctuation">></span></span> <span class="token keyword">a</span> <span class="token function"><span class="token prefix"><span class="token punctuation">:</span></span><span class="token local-name">HttpReaderChannel</span></span><span class="token punctuation">;</span>
  <span class="token function"><span class="token prefix"><span class="token punctuation">:</span></span><span class="token local-name">httpPort</span></span> <span class="token string">"3000"</span><span class="token punctuation">.</span>

<span class="token url"><span class="token punctuation">&lt;</span>httpWriter<span class="token punctuation">></span></span> <span class="token keyword">a</span> <span class="token function"><span class="token prefix"><span class="token punctuation">:</span></span><span class="token local-name">HttpWriterChannel</span></span><span class="token punctuation">;</span>
  <span class="token function"><span class="token prefix"><span class="token punctuation">:</span></span><span class="token local-name">httpEndpoint</span></span> <span class="token string">"http://localhost:3000"</span><span class="token punctuation">.</span>

<span class="token url"><span class="token punctuation">&lt;</span>send-proc<span class="token punctuation">></span></span> <span class="token keyword">a</span> <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">Send</span></span><span class="token punctuation">;</span>
  <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">msg</span></span> <span class="token string">"Hello World!"</span><span class="token punctuation">;</span>
  <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">sendWriter</span></span> <span class="token url"><span class="token punctuation">&lt;</span>jw<span class="token punctuation">></span></span><span class="token punctuation">.</span>

<span class="token url"><span class="token punctuation">&lt;</span>echo-proc<span class="token punctuation">></span></span> <span class="token keyword">a</span> <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">Echo</span></span><span class="token punctuation">;</span>
  <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">input</span></span> <span class="token url"><span class="token punctuation">&lt;</span>jr<span class="token punctuation">></span></span><span class="token punctuation">;</span>
  <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">output</span></span> <span class="token url"><span class="token punctuation">&lt;</span>httpWriter<span class="token punctuation">></span></span><span class="token punctuation">.</span>

<span class="token url"><span class="token punctuation">&lt;</span>resc-proc<span class="token punctuation">></span></span> <span class="token keyword">a</span> <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">Resc</span></span><span class="token punctuation">;</span>
  <span class="token function"><span class="token prefix">js<span class="token punctuation">:</span></span><span class="token local-name">rescReader</span></span> <span class="token url"><span class="token punctuation">&lt;</span>httpReader<span class="token punctuation">></span></span><span class="token punctuation">.</span></code>`,$,A,jn,nn,T,zn='<code class="language-shell">js-runner pipeline.ttl <span class="token parameter variable">-o</span> processors/*.ttl</code>',sn,d,x,G,yn;return{c(){f=e("h1"),h=e("a"),S=e("span"),an=i("Intro to the pipeline"),O=k(),M=e("p"),pn=i("The pipeline is the actual goal of the connector architecture. Connect processors of any kind together with channels and resolve the two language problem."),q=k(),m=e("p"),tn=i("Every part of information will come together in the following example. We defined a js-runner in the "),w=e("a"),en=i("runner"),on=i(" section and a HTTP channel in the "),j=e("a"),cn=i("channel"),ln=i(". Next we need to define some processors that will be part of this pipeline. Note that many processors can already be found in this github repo."),U=k(),H=e("p"),un=i("We define:"),X=k(),y=e("p"),L=e("strong"),kn=i("Send"),rn=i(": A js process that periodically sends a message to a channel writer."),z=k(),P=e("pre"),B=k(),E=e("p"),I=e("strong"),fn=i("Echo"),mn=i(": A js process that echo’s all messages from a reader to a writer"),D=k(),g=e("pre"),F=k(),_=e("p"),J=e("strong"),hn=i("Resc"),dn=i(": A js processor that prints all messages from a reader to stdout"),K=k(),v=e("pre"),Q=k(),W=e("p"),xn=i("Note: that the three processors are defined in the same source file, but this does not actually matter."),V=k(),N=e("p"),wn=i("Now comes the fun stuff, configuring the pipeline. We will create a memory channel that links the send processor to the echo processor, then a HTTP channel to the resc processor."),Y=k(),b=e("pre"),Z=k(),R=e("pre"),$=k(),A=e("p"),jn=i("Executing this pipeline would be as easy as running:"),nn=k(),T=e("pre"),sn=k(),d=e("h2"),x=e("a"),G=e("span"),yn=i("Test header"),this.h()},l(n){f=o(n,"H1",{id:!0});var a=c(f);h=o(a,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var bn=c(h);S=o(bn,"SPAN",{class:!0}),c(S).forEach(s),bn.forEach(s),an=u(a,"Intro to the pipeline"),a.forEach(s),O=r(n),M=o(n,"P",{});var Rn=c(M);pn=u(Rn,"The pipeline is the actual goal of the connector architecture. Connect processors of any kind together with channels and resolve the two language problem."),Rn.forEach(s),q=r(n),m=o(n,"P",{});var C=c(m);tn=u(C,"Every part of information will come together in the following example. We defined a js-runner in the "),w=o(C,"A",{href:!0,rel:!0});var Tn=c(w);en=u(Tn,"runner"),Tn.forEach(s),on=u(C," section and a HTTP channel in the "),j=o(C,"A",{href:!0,rel:!0});var Mn=c(j);cn=u(Mn,"channel"),Mn.forEach(s),ln=u(C,". Next we need to define some processors that will be part of this pipeline. Note that many processors can already be found in this github repo."),C.forEach(s),U=r(n),H=o(n,"P",{});var Hn=c(H);un=u(Hn,"We define:"),Hn.forEach(s),X=r(n),y=o(n,"P",{});var Pn=c(y);L=o(Pn,"STRONG",{});var Wn=c(L);kn=u(Wn,"Send"),Wn.forEach(s),rn=u(Pn,": A js process that periodically sends a message to a channel writer."),Pn.forEach(s),z=r(n),P=o(n,"PRE",{class:!0});var Bn=c(P);Bn.forEach(s),B=r(n),E=o(n,"P",{});var En=c(E);I=o(En,"STRONG",{});var Nn=c(I);fn=u(Nn,"Echo"),Nn.forEach(s),mn=u(En,": A js process that echo’s all messages from a reader to a writer"),En.forEach(s),D=r(n),g=o(n,"PRE",{class:!0});var Dn=c(g);Dn.forEach(s),F=r(n),_=o(n,"P",{});var gn=c(_);J=o(gn,"STRONG",{});var An=c(J);hn=u(An,"Resc"),An.forEach(s),dn=u(gn,": A js processor that prints all messages from a reader to stdout"),gn.forEach(s),K=r(n),v=o(n,"PRE",{class:!0});var Fn=c(v);Fn.forEach(s),Q=r(n),W=o(n,"P",{});var Cn=c(W);xn=u(Cn,"Note: that the three processors are defined in the same source file, but this does not actually matter."),Cn.forEach(s),V=r(n),N=o(n,"P",{});var Sn=c(N);wn=u(Sn,"Now comes the fun stuff, configuring the pipeline. We will create a memory channel that links the send processor to the echo processor, then a HTTP channel to the resc processor."),Sn.forEach(s),Y=r(n),b=o(n,"PRE",{class:!0});var Kn=c(b);Kn.forEach(s),Z=r(n),R=o(n,"PRE",{class:!0});var Qn=c(R);Qn.forEach(s),$=r(n),A=o(n,"P",{});var Ln=c(A);jn=u(Ln,"Executing this pipeline would be as easy as running:"),Ln.forEach(s),nn=r(n),T=o(n,"PRE",{class:!0});var Vn=c(T);Vn.forEach(s),sn=r(n),d=o(n,"H2",{id:!0});var _n=c(d);x=o(_n,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var In=c(x);G=o(In,"SPAN",{class:!0}),c(G).forEach(s),In.forEach(s),yn=u(_n,"Test header"),_n.forEach(s),this.h()},h(){l(S,"class","icon icon-link"),l(h,"aria-hidden","true"),l(h,"tabindex","-1"),l(h,"href","#intro-to-the-pipeline"),l(f,"id","intro-to-the-pipeline"),l(w,"href","https://github.com/TREEcg/connector-architecture/wiki/Runner"),l(w,"rel","nofollow"),l(j,"href","https://github.com/TREEcg/connector-architecture/wiki/Channel"),l(j,"rel","nofollow"),l(P,"class","language-turtle"),l(g,"class","language-turtle"),l(v,"class","language-turtle"),l(b,"class","language-undefined"),l(R,"class","language-turtle"),l(T,"class","language-shell"),l(G,"class","icon icon-link"),l(x,"aria-hidden","true"),l(x,"tabindex","-1"),l(x,"href","#test-header"),l(d,"id","test-header")},m(n,a){p(n,f,a),t(f,h),t(h,S),t(f,an),p(n,O,a),p(n,M,a),t(M,pn),p(n,q,a),p(n,m,a),t(m,tn),t(m,w),t(w,en),t(m,on),t(m,j),t(j,cn),t(m,ln),p(n,U,a),p(n,H,a),t(H,un),p(n,X,a),p(n,y,a),t(y,L),t(L,kn),t(y,rn),p(n,z,a),p(n,P,a),P.innerHTML=Gn,p(n,B,a),p(n,E,a),t(E,I),t(I,fn),t(E,mn),p(n,D,a),p(n,g,a),g.innerHTML=On,p(n,F,a),p(n,_,a),t(_,J),t(J,hn),t(_,dn),p(n,K,a),p(n,v,a),v.innerHTML=qn,p(n,Q,a),p(n,W,a),t(W,xn),p(n,V,a),p(n,N,a),t(N,wn),p(n,Y,a),p(n,b,a),b.innerHTML=Un,p(n,Z,a),p(n,R,a),R.innerHTML=Xn,p(n,$,a),p(n,A,a),t(A,jn),p(n,nn,a),p(n,T,a),T.innerHTML=zn,p(n,sn,a),p(n,d,a),t(d,x),t(x,G),t(d,yn)},p:vn,i:vn,o:vn,d(n){n&&s(f),n&&s(O),n&&s(M),n&&s(q),n&&s(m),n&&s(U),n&&s(H),n&&s(X),n&&s(y),n&&s(z),n&&s(P),n&&s(B),n&&s(E),n&&s(D),n&&s(g),n&&s(F),n&&s(_),n&&s(K),n&&s(v),n&&s(Q),n&&s(W),n&&s(V),n&&s(N),n&&s(Y),n&&s(b),n&&s(Z),n&&s(R),n&&s($),n&&s(A),n&&s(nn),n&&s(T),n&&s(sn),n&&s(d)}}}const as={toc:{index:null,endIndex:null,map:{type:"list",ordered:!1,spread:!0,children:[{type:"listItem",spread:!0,children:[{type:"paragraph",children:[{type:"link",title:null,url:"#intro-to-the-pipeline",children:[{type:"text",value:"Intro to the pipeline"}]}]},{type:"list",ordered:!1,spread:!1,children:[{type:"listItem",spread:!1,children:[{type:"paragraph",children:[{type:"link",title:null,url:"#test-header",children:[{type:"text",value:"Test header"}]}]}]}]}]}]}}};class ps extends Yn{constructor(f){super(),Zn(this,f,null,ns,$n,{})}}export{ps as default,as as metadata};
