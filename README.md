# dappy-lookup

A library written in Typescript that resolves names from Dappy name system.

Dappy Name System, (DappyNS) is a next generation name system which:

- Is compliant with [DNS RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035)
- Security-first designed by implementing DNS over HTTPS ([RFC 8484](https://datatracker.ietf.org/doc/html/rfc8484))
- Persisted and distributed by blockchain [RChain](https://rchain.coop/)
- Enable clients to query in a trustless manner name records on the blockchain using:
  - A network of dappy name servers highly secured
  - A [co-resolution mecanism](https://fabco.gitbook.io/dappy-spec/glossary/multi-request) to distribute the trust over the network

## Dappy name system documentation

You can find documentation [here](https://fabco.gitbook.io/dappy-spec/specs-and-web-standards/name-system).

## Installing

### Node.js

```sh
npm i -S dappy-lookup
```

## You don't have a dappy name ? Mint in one.

Using dappy-cli ...

## Examples

### Stand-alone dappy lookup

Here is an example to get you started:

```typescript
import { lookup } from 'dappy-lookup';

async function run() {
    // lookup the A records for example.dappy
    const recordsA = await lookup('example.dappy', 'A');
    console.log(recordsA);

    // lookup the AAAA records for example.dappy
    const recordsAAAA = await lookup('example.dappy', 'AAAA');
    console.log(recordsAAAA);

    // lookup the CERT records for example.dappy
    const recordsCERT = await lookup('example.dappy', 'CERT');
    console.log(recordsCERT);
});

run();
```

This example above will resolve a name on default dappy network which is the `mainnet` network.

Next example do the same but on `gamma` network

```typescript
import { lookup } from 'dappy-lookup';

async function run() {
    // lookup the A records for example.dappy on gamma network
    const recordA = await lookup('example.dappy', 'A', { network: 'gamma' });
    console.log(recordA);
});

run();
```

### NodeJS request using dappy-lookup with CA certificate retrieval

It's a really a pain point to get a valid CA certificate and to install it at operating system level.

On dappy name system, name servers not only distribute IPv4 (**A** records) and IPv6 addresses (**AAAA** records) but also certificates to trust over **CERT** records (alternative of [DANE](https://datatracker.ietf.org/doc/html/rfc6698)). It enable dappy-lookup client to fetch dynamically and in a trusted manner (using coresolution mecanism) CA certificates.

The example below demonstrates how to do this:

```typescript
import { lookup, nodeLookup } from 'dappy-lookup';

https.get('https://example.dappy/', {
    lookup: nodeLookup,
    ca: await lookup('example.dappy', 'CERT'),
}, (res) => {
  ...
});
```

NodeJS enables to override [lookup function](https://nodejs.org/api/http.html#httprequesturl-options-callback) for [HTTP](https://nodejs.org/api/http.html) and [HTTPS](https://nodejs.org/api/https.html) native modules.

So dappy-lookup provide a lookup function (created with `nodeLookup`) with the same signature as [dns.lookup](https://nodejs.org/api/dns.html#dnslookuphostname-options-callback) provided by NodeJS.

### NodeJS requests using dappy-lookup

The example below shows how to replace native NodeJS lookup function with the dappy-lookup equivalent function. In this example the certificate is not recovered dynamically, it is installed previously on the operating system.

```typescript
import { nodeLookup } from 'dappy-lookup';

https.get('https://example.dappy/', {
    lookup: nodeLookup,
}, (res) => {
  ...
});
```

## API

### `lookup()`

```typescript
function lookup(
  name: string,
  name: 'A' | 'AAAA' | 'CERT',
  options: {
    cacheMaxHit: number;
    cacheTTL: number;
    dappyNetwork: 'd' | 'gamma';
  }
) =>
  Promise<NamePacket>;

export type NamePacket = {
  version: string;
  type: 'query' | 'response';
  rcode: ReturnCode;
  id?: number;
  flags: number;
  questions: {
    type: 'A' | 'AAAA' | 'CERT';
    class: 'IN';
    name: string;
  }[];
  answers: {
    type: 'A' | 'AAAA' | 'CERT';
    class: 'IN';
    name: string;
    ttl: number;
    data: string;
  }[];
  additionals: [];
  authorities: [];
};

export enum ReturnCode {
  NOERROR, // DNS Query completed successfully
  FORMERR, //  DNS Query Format Error
  SERVFAIL, // Server failed to complete the DNS request
  NXDOMAIN, //  Domain name does not exist.
  NOTIMP, //  Function not implemented
  REFUSED, // The server refused to answer for the query
  YXDOMAIN, //  Name that should not exist, does exist
  XRRSET, //  RRset that should not exist, does exist
  NOTAUTH, //  Server not authoritative for the zone
  NOTZONE, //  Name not in zone
}

```

Resolve **A** record on dappy name system.

Example:

```typescript
const recordA = await lookup('example.dappy', 'A');
console.log(recordA);
```

### `nodeLookup()`

```ts
 function nodeLookup(
    name: string,
    options?: {
      all?: boolean;
      family?: number;
      hints?: number;
      verbatim?: boolean;
    },
    callback: (err: Error, address: string, family: number) => void;
  ) => void;
}
```

`lookup()` can be used by [HTTP](https://nodejs.org/api/http.html) and [HTTPS](https://nodejs.org/api/https.html) NodeJS modules to resolve names.

Example:

```ts
import { nodeLookup, lookup } from 'dappy-lookup';

https.get('https://example.dappy', {
  lookup: nodeLookup,
  ca: await lookup('example.dappy', 'CERT'),
}, (res) => {
  ...
});
```
