import { extractLocations } from '$lib/acHelpers';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async () => {
  const locations = [
    // Processors
    "https://raw.githubusercontent.com/ajuvercr/sds-processors/master/configs/sdsify.ttl",
    "https://raw.githubusercontent.com/ajuvercr/sds-processors/master/configs/2_bucketstep.ttl",
    "https://raw.githubusercontent.com/ajuvercr/sds-processors/master/configs/generator.ttl",
    "https://raw.githubusercontent.com/ajuvercr/sds-processors/master/configs/stringManipulations.ttl",
    "https://raw.githubusercontent.com/ajuvercr/sds-processors/master/configs/yarrrml.ttl",
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
  return await extractLocations(locations);
};
