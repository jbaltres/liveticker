import React from "react";
import Counter from "../components/Counter";

export default {
  title: "CounterArea"
};

export const DefaultCounter = () => <Counter fontColor={false}></Counter>;

export const DefaultCounterGreen = () => <Counter fontColor={true}></Counter>;
