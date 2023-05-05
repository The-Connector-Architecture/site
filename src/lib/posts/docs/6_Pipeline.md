# Intro to the pipeline
The pipeline is the actual goal of the connector architecture. Connect processors of any kind together with channels and resolve the two language problem. 

Every part of information will come together in the following example. We defined a js-runner in the [runner](https://github.com/TREEcg/connector-architecture/wiki/Runner) section and a HTTP channel in the [channel](https://github.com/TREEcg/connector-architecture/wiki/Channel). Next we need to define some processors that will be part of this pipeline. Note that many processors can already be found in this github repo.

We define:

**Send**: A js process that periodically sends a message to a channel writer.
```turtle
js:Send a js:JsProcess;
  js:file "./test.js";
  js:function "send";
  js:location <./>;
  js:mapping [
    a fno:Mapping;
    fno:parameterMapping [
      a fnom:PositionParameterMapping ;
      fnom:functionParameter js:msg ;
      fnom:implementationParameterPosition "0"^^xsd:int
    ], [
      a fnom:PositionParameterMapping ;
      fnom:functionParameter js:sendWriter ;
      fnom:implementationParameterPosition "1"^^xsd:int
    ]
  ].
```

**Echo**: A js process that echo's all messages from a reader to a writer
```turtle
js:Echo a js:JsProcess;
  js:file "./echo.js";
  js:function "echo";
  js:location <./>;
  js:mapping [
    a fno:Mapping;
    fno:parameterMapping [
      a fnom:PositionParameterMapping ;
      fnom:functionParameter js:input ;
      fnom:implementationParameterPosition "0"^^xsd:int
    ], [
      a fnom:PositionParameterMapping ;
      fnom:functionParameter js:output ;
      fnom:implementationParameterPosition "1"^^xsd:int
    ]
  ].
```

**Resc**: A js processor that prints all messages from a reader to stdout
```turtle
js:Resc a js:JsProcess;
  js:file "./test.js";
  js:function "resc";
  js:location <./>;
  js:mapping [
    a fno:Mapping;
    fno:parameterMapping [
      a fnom:PositionParameterMapping ;
      fnom:functionParameter js:rescReader ;
      fnom:implementationParameterPosition "0"^^xsd:int
    ]
  ].
```

Note: that the three processors are defined in the same source file, but this does not actually matter.

Now comes the fun stuff, configuring the pipeline. We will create a memory channel that links the send processor to the echo processor, then a HTTP channel to the resc processor.

```
flowchart LR
subgraph js-runner
  subgraph send-proc
    w1{{writer}}
    send---w1
  end
  subgraph echo-proc
    r1{{reader}}
    w2{{writer}}
    r1---echo---w2
  end
  subgraph resc-proc
    r2{{reader}}
    r2---resc
  end
  w1--memory-channel-->r1
  w2--http-channel-->r2
end
```

```turtle
@prefix js: <https://w3id.org/conn/js#> .
@prefix ws: <https://w3id.org/conn/ws#> .
@prefix : <https://w3id.org/conn#> .

[] a js:JsChannel;
  :reader <jr>;
  :writer <jw>.

<jr> a :JsReaderChannel.
<jw> a :JsWriterChannel.


[] a :HttpChannel;
  :reader :WsReaderChannel;
  :writer :WsWriterChannel.

<httpReader> a :HttpReaderChannel;
  :httpPort "3000".

<httpWriter> a :HttpWriterChannel;
  :httpEndpoint "http://localhost:3000".

<send-proc> a js:Send;
  js:msg "Hello World!";
  js:sendWriter <jw>.

<echo-proc> a js:Echo;
  js:input <jr>;
  js:output <httpWriter>.

<resc-proc> a js:Resc;
  js:rescReader <httpReader>.
```

Executing this pipeline would be as easy as running:
```shell
js-runner pipeline.ttl -o processors/*.ttl
```


## Test header
