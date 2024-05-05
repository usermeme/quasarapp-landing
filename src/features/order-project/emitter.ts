"use client";
import EventEmitter from "eventemitter3";

type OrderProjectEventType = "close";
export const orderProjectEventEmitter =
  new EventEmitter<OrderProjectEventType>();
