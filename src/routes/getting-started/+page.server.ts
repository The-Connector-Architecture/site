import { extractProcessors, fetchStore, type Processor } from '$lib/acHelpers';
import type { PageServerLoad } from './$types';

async function getProcessors(loc: string): Promise<Processor[]> {
  const store = await fetchStore(loc);
  const procs = extractProcessors(store, loc);
  return procs
}

interface Channel {

}
async function getChannels(loc: string): Promise<Channel[]> {
  const store = await fetchStore(loc);
  throw "not implemented"
}
interface Runner {

}
async function getRunners(loc: string): Promise<Runner[]> {
  const store = await fetchStore(loc);
  throw "not implemented"
}

export const load: PageServerLoad = async () => {
  const proc_promises = [
    "https://raw.githubusercontent.com/ajuvercr/sds-processors/master/sdsify.ttl",
    "https://raw.githubusercontent.com/ajuvercr/sds-processors/master/2_bucketstep.ttl",
    "https://raw.githubusercontent.com/ajuvercr/sds-processors/master/generator.ttl",
    "https://raw.githubusercontent.com/ajuvercr/sds-processors/master/stringManipulations.ttl",
    "https://raw.githubusercontent.com/ajuvercr/sds-processors/master/yarrrml.ttl",
    "https://raw.githubusercontent.com/TREEcg/sds-storage-writer-mongo/master/step.ttl",
    "https://raw.githubusercontent.com/julianrojas87/rml-mapper-processor-ts/master/rmlMapper.ttl",
  ].map(getProcessors);

  const procs = (await Promise.all(
    proc_promises
  )).flat(1);

  return {
    procs, // make posts available on the client
  };
};
// Get all posts and add metadata
