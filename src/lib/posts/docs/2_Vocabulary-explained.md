# Vocabulary overview
 
The connector architecture exists of multiple components.

## Processor

A processor is a step inside a pipeline, often a data transformation. It can literally be anything, but in the connector architecture, a processor is usually a stream processor, transforming incoming data.
A processor is programming language independent and runtime independent, as long as a matching runner exists. 


## Channel

A channel is the link between two processors that carries data. It can be anything and consists of a `reader` and a `writer` part.
## Connector

A connector is a piece of code that communicates with a channel for a specific runner.

## Runner

A runner is a piece of code that combines the abstract pipeline configuration and the actual processors that should be ran. It is programming language dependent because the runner is the bridge between the program and the pipeline idea.

Some runners can do a lot of heavy lifting, like already instantiating the channels before starting the processors.

## Pipeline

A pipeline is the total picture, the total data transformation happening. It can consist of multiple steps that link together. It does not have to be an easy left-to-right flow. Cycles and aggregations and everything in between are also supported.

