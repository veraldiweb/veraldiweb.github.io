class Footer extends HTMLElement{
  constructor() {
    super();
  }
 
  connectedCallback() {
    this.innerHTML = `<div class="content has-text-centered is-size-7 has-text-light">
      <p><strong class="has-text-light">cassette.moe</strong> by Andrea Veraldi ` + new Date().getFullYear() + ` | <a class="has-text-grey-lighter" href="cookies.html">cookies</a></p>
    </div> `;
  }
} 
customElements.define("footer-element",Footer);