import { c as create_ssr_component, d as add_attribute } from './index-3ce6e6d7.js';

const css = {
  code: "section.svelte-qp7u2n.svelte-qp7u2n{display:flex;flex-direction:column;align-items:center;height:80vh}h1.svelte-qp7u2n.svelte-qp7u2n{width:100%;font-size:4rem}.search-container.svelte-qp7u2n.svelte-qp7u2n{display:flex;flex-direction:column;gap:10px;width:100%;font-size:1.5rem}.search-container.svelte-qp7u2n>input.svelte-qp7u2n{height:3rem;border-radius:0.5rem;color:black}.spinner.svelte-qp7u2n.svelte-qp7u2n{display:flex;justify-content:center;align-items:center;flex-grow:3}.stats-container.svelte-qp7u2n.svelte-qp7u2n{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:30px;width:90%;padding:50px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let search = { value: "", waiting: false };
  $$result.css.add(css);
  return `<section class="${"svelte-qp7u2n"}"><h1 class="${"svelte-qp7u2n"}">AnimeList Stats</h1>

	<div class="${"search-container svelte-qp7u2n"}"><label for="${"search"}">Your myanimelist url: </label>
		<input type="${"text"}" name="${"search"}" placeholder="${"https://myanimelist.net/animelist/username"}" class="${"svelte-qp7u2n"}"${add_attribute("value", search.value, 0)}></div>

	${``}

	${``}
</section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-11eb78f7.js.map
