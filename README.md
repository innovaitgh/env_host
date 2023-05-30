# Env Host

It's a library that adds .com and https:// or .test and http:// to a host based on the enviroment

## How to use

Suppose example is a host, when an app in dev env passes it to host help, it'd return http://example.test.

```js

// NODE_ENV = development

import envHost from "env_host";

const host = envHost("example");

console.log(host); // http://example.test

```