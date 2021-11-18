import { LitElement, html } from "lit";
import { create, cssomSheet } from 'twind'

// 1. Create separate CSSStyleSheet
const sheet = cssomSheet({ target: new CSSStyleSheet() })

// 2. Use that to create an own twind instance
const { tw } = create({ sheet })

export class MyCounter extends LitElement {
  render() {
    return html`
      <h1 class="${tw`text-red-500`}">H3ello</h1>
    `;
  }
}

customElements.define("my-counter", MyCounter);
