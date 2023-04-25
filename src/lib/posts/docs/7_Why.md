---
title: "Why is this a title"
toc: "and this a toc?"
---
# Why is configure everything in linked data?
 
The power of linked data shines with the connector architecture. All configuration consists of multiple steps: the high level runner configs, the high level processor configs, and the ultimate pipeline configs.

Keeping close to linked data for all configurations makes it possible to validate a lot of things. Shape validation with shacl, but also domain specific validation, like checking if two connected processors use a channel that is supported by both runners. (Both still to do).

An added benefit comes to life when we add [SDS](https://treecg.github.io/SmartDataStreams-Spec/) into the picture. SDS describes how a smart data stream came into existence, this is closely related to running a pipeline. Transforming a live dataset _is_ a smart data stream, and should be accompanied by a SDS description. Well by starting from a linked data pipeline configuration, deriving a SDS description is trivial. (This is still todo though).

Note to validate if a pipeline configuration is valid, we actually need all layers of configuration. But we do not want to keep writing the same things in all configuration files. Let's use `owl:imports` and reuse that predicate (configuration files are similar to ontologies).
