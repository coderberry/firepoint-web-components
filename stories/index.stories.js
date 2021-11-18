import "../src/index.js";
import { html } from "lit-html";

export default {
  parameters: {
    layout: "centered",
  },
};

export const story1 = () => html` <fp-badge>Hello</fp-badge> `;
