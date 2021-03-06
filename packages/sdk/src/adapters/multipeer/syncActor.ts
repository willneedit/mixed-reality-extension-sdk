/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { BehaviorType, Message } from '../..';
import * as Payloads from '../../types/network/payloads';

/**
 * @hidden
 */
export type CreateActor = {
    message: Message<Payloads.CreateActorCommon>;
};

/**
 * @hidden
 */
export type CreateAnimation = {
    message: Message<Payloads.CreateAnimation>;
    enabled: boolean;
};

/**
 * @hidden
 */
export type SyncActor = {
    actorId: string;
    created: CreateActor;
    createdAnimations: CreateAnimation[];
    activeInterpolations: Payloads.InterpolateActor[];
    behavior: BehaviorType;
};
