---
title: Tutorial 2 - Dependency installation and initial configuration
sidebar: mydoc_sidebar
permalink: /tutorial-dependency-installation
---

Create a package.json with the command:

```bash
npm init
```

Add bap-node-microframework dependency to package.json and install it:

```bash
npm install bap-node-microframework --save
```

Create a tsconfig.json which specifies the root files and the compiler options required to compile the project (see [https://www.typescriptlang.org/docs/handbook/tsconfig-json.html](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) for further details).

If you have not installed it yet, install globally typings:

```bash
npm install typings -g
```

Install the following typings:

```bash
typings install dt~express dt~mime dt~node dt~serve-static dt~socket.io --global --save
```

Create a file config/default.yml to configure logging:

```yml
log:
    rotate:
        frequency: daily
    verbose: true
    file_format: api-%DATE%.log
    date_format: YYYYMMDD
    skip: none
```

Create a file app/app.ts:

```js
import { Container, Application, ApplicationOptions, KernelInterface } from 'bap-node-microframework/core';
import * as express from "express";

declare function require(path: string, options?: any): any;

Container.setParameter('appDirectory', __dirname);
Container.registerService('router', express.Router());

import { Kernel } from "./kernel";
var kernel = new Kernel();
var App = new Application(<ApplicationOptions>{
    sockets: true,
    oauth: false
}, <KernelInterface>kernel);

App.start();

console.log("Server listening on http://localhost:3000...");

module.exports = {
    server: App.httpServer,
    Container: Container
};
```

Create a file app/kernel.ts:

```js
import * as express from "express";
import { KernelInterface } from 'bap-node-microframework/core';

export class Kernel extends KernelInterface {

    boot(app, io: SocketIO.Server) {}
}
```
