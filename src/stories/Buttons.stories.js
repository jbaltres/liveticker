import React from "react";
import ActionButton from "../components/Button";

export default {
  title: "Buttons"
};

export const defaultButton = () => (
  <ActionButton bgColor={false}>X</ActionButton>
);

export const exceptButton = () => <ActionButton bgColor={true}>√</ActionButton>;
