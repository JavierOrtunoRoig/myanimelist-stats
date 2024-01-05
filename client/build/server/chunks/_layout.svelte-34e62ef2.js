import { c as create_ssr_component } from './index-3ce6e6d7.js';

const css = {
  code: ".app.svelte-1k6mb90{display:flex;flex-direction:column;min-height:100vh}main.svelte-1k6mb90{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.svelte-1k6mb90{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}@media(min-width: 480px){footer.svelte-1k6mb90{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"app svelte-1k6mb90"}"><main class="${"svelte-1k6mb90"}">${slots.default ? slots.default({}) : ``}</main>

	<footer class="${"svelte-1k6mb90"}"><p>Javier Ortuño Roig ©Copyright</p></footer>
</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-34e62ef2.js.map
