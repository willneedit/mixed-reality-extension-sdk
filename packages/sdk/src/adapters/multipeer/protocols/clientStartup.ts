/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { Client } from '..';
import * as Protocols from '../../../protocols';
import * as Payloads from '../../../types/network/payloads';

export class ClientStartup extends Protocols.Protocol {
    /** @override */
    public get name(): string { return `${this.constructor.name} client ${this.client.id}`; }

    constructor(private client: Client) {
        super(client.conn);
        // Behave like a server-side endpoint (send heartbeats, measure connection quality).
        this.use(new Protocols.ServerPreprocessing());
    }

    /**
     * @hidden
     */
    public 'recv-sync-request' = async (payload: Payloads.SyncRequest) => {
        // Do a quick measurement of connection latency.
        const heartbeat = new Protocols.Heartbeat(this);
        await heartbeat.runIterations(10); // Allow exceptions to propagate out.
        this.resolve();
    }
}
