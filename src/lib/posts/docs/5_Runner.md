# Intro to runners
 
In the connector architecture, the runner is probably the most important part. The runner takes in a pipeline configuration and interprets this into its own domain, and then executes the meaning of the pipeline (as best as it can).

Each runner has an associated processor type, which can be instantiated by processor configs. This associated processor type can specify domain-specific requirements to which the processor config has to conform. These can be seen as required fields. These associated processor types also specify what channels they support (or that the runner supports when starting these processors).

To promote reuse and create an ecosystem of processors, it is expected that the runner tries to do a lot of heavy lifting and makes it easy to create processors that are run with that runner. For example, the js-runner starts up the channels before actually executing the function, this way, one processor is as easy as a single function. It also does not slouch on performance by supporting javascript specific in-memory channels.


## Example js-runner

Let's take a look at one of the first runners to exist, the javascript runner.

This runner specifies some required fields like `file`, `function`, `location`, and `mapping`. This runner also specifies its own namespace as `https://w3id.org/conn/js#`. This gives the js-runner enough information to accurately start a javascript function with the expected parameters. Note the reuse of `fno:Mapping`, but this is not required.

Here is the corresponding config for the jsProcessor.

```turtle
@prefix js: <https://w3id.org/conn/js#> .
@prefix fno: <https://w3id.org/function/ontology#> .
@prefix fnom: <https://w3id.org/function/vocabulary/mapping#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix sh: <http://www.w3.org/ns/shacl#> .
@prefix : <https://w3id.org/conn#> .


js:JsProcess a :ProcessClass;
    :supportsChannel :HttpChannel, js:JsChannel. # and more

js:JsProcessorShape a sh:NodeShape;      # Shacl shape for validation
  sh:targetClass js:JsProcess;
  sh:property [
    sh:dataType xsd:string;
    sh:path js:file;
    sh:name "Path to main main entry point"
  ], [
    sh:dataType xsd:iri;
    sh:path js:location;
    sh:name "Location to root of JS program"
  ], [
    sh:dataType xsd:string;
    sh:path js:function;
    sh:name "Name of the JS function to execute"
  ], [
    sh:class fno:Mapping; 
    sh:path js:mapping;
    sh:name "Mapping for the function arguments"
  ].
```
