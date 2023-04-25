# Intro to the processor
 
A processor is a step that can be executed inside a pipeline. This is often a data transformation because the connector architecture focuses on channels with live data. A processor can be in any programming language, as long as there exists an appropriate runner for it.

A processor is only useful in a pipeline when it is accompanied by its high level configuration. This configuration tells the runner the required fields and also announces what fields are required to instantiate this processor.

::: aside class-one class-two
## Example js-processor

Here a js-processor is defined, based on the js-runner example [here](https://github.com/TREEcg/connector-architecture/wiki/Runner). The configuration is quite easy to follow, there is a processor called `js:Print` that is a `js:JsProcess` and requires one argument, the message to print.

:::

```turtle
@prefix js: <https://w3id.org/conn/js#> .
@prefix fno: <https://w3id.org/function/ontology#> .
@prefix fnom: <https://w3id.org/function/vocabulary/mapping#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix : <https://w3id.org/conn#> .
@prefix sh: <http://www.w3.org/ns/shacl#> .

js:Print a js:JsProcess;
  js:file "./example.js";
  js:function "print";
  js:location <./>;
  js:mapping [
    a fno:Mapping;
    fno:parameterMapping [
      a fnom:PositionParameterMapping ;
      fnom:functionParameter js:message ;
      fnom:implementationParameterPosition "0"^^xsd:int
    ]
  ].

js:PrintShape a sh:NodeShape;      # Shacl shape for validation
  sh:targetClass js:Print;
  sh:property [
    sh:datatype xsd:string;
    sh:path js:message;
    sh:name "Message to print"
  ].
```

