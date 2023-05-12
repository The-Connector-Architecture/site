import { extractLocations } from '$lib/acHelpers';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async () => {
  const locations = [
    // Processors
    "https://raw.githubusercontent.com/ajuvercr/sds-processors/master/sdsify.ttl",
    "https://raw.githubusercontent.com/ajuvercr/sds-processors/master/2_bucketstep.ttl",
    "https://raw.githubusercontent.com/ajuvercr/sds-processors/master/generator.ttl",
    "https://raw.githubusercontent.com/ajuvercr/sds-processors/master/stringManipulations.ttl",
    "https://raw.githubusercontent.com/ajuvercr/sds-processors/master/yarrrml.ttl",
    "https://raw.githubusercontent.com/TREEcg/sds-storage-writer-mongo/master/step.ttl",
    "https://raw.githubusercontent.com/julianrojas87/rml-mapper-processor-ts/master/rmlMapper.ttl",

    // Runners
    "https://raw.githubusercontent.com/ajuvercr/js-runner/master/ontology.ttl",
    "https://raw.githubusercontent.com/ajuvercr/nifi-runner/master/ontology.ttl",

    //Channels
    "https://raw.githubusercontent.com/TREEcg/connector-architecture/main/channel/file.ttl",
    "https://raw.githubusercontent.com/TREEcg/connector-architecture/main/channel/http.ttl",
    "https://raw.githubusercontent.com/TREEcg/connector-architecture/main/channel/kafka.ttl",
    "https://raw.githubusercontent.com/TREEcg/connector-architecture/main/channel/ws.ttl",
  ];
  const data = await extractLocations(locations);
  console.log('data', data);
  return data;
};
// Get all posts and add metadata
