"use client";
import EventEmitter from "eventemitter3";

import type { RouteEventType } from "./@types";

export const navigationEventEmitter = new EventEmitter<RouteEventType>();
