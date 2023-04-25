
# Intro to channels

Processors in the connector architecture are usually stream processors. The stream they consume or generate is technology independent. A channel is an instance of a stream between two processors, a transportation method of some kind. The easiest examples are websocket streams or kafka streams.

A channel consists of a reader and a writer part, that together form a channel. Each channel has it's own configuration (separate for readers and writers) that defines the required fields.

## Example http-channel

Here you can see an example configuration of a HTTP channel configuration. It defines a reader and a writer and together forms a HTTP channel. Shapes are defined for both the reader and the writer part.

```turtle
@prefix : <https://w3id.org/conn#> .
@prefix sh: <http://www.w3.org/ns/shacl#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

:HttpChannel a :Channel;
    :reader :HttpReaderChannel;
    :writer :HttpWriterChannel.

:HttpReaderChannelShape a sh:NodeShape;
    sh:targetClass :HttpReaderChannel;
    sh:property [
      sh:datatype xsd:integer;
      sh:path :httpPort;
      sh:name "The port to bind the HTTP server to"
    ].


:HttpWriterChannelShape a sh:NodeShape;
    sh:targetClass :HttpReaderChannel;
    sh:property [
      sh:datatype xsd:string;
      sh:path :httpMethod;
      sh:description "The method to use for the HTTP action"
    ], [
      sh:datatype xsd:string;
      sh:path :httpEndpoint;
      sh:description "The endpoint to use for the HTTP action"
    ].
```
