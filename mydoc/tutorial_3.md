---
title: Tutorial 3 - Import an external module, the Ping module
sidebar: mydoc_sidebar
permalink: /tutorial-import-external-module
---

In this section you will import an external module, the Ping module.
This module will create a /ping get route. If you send a GET request to
http://localhost:3000/ping, you will receive the following json response:

```json
{"ping": "pong"}
```

To install this module, you have to run:

```bash
npm install bap-node-microframework-ping-module --save
```

To import it, you have to add to app/kernel.ts:

```js

...

import { PingModule } from "bap-node-microframework-ping-module";

...

export class Kernel extends KernelInterface {
    boot(app, io: SocketIO.Server) {
        new PingModule(app, io);
    }
}
```
