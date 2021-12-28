class navbar1 extends HTMLElement {
    connectedCallback() {
      this.innerHTML = ``;
    }
  }
      
  customElements.define('nav-bar', navbar1);