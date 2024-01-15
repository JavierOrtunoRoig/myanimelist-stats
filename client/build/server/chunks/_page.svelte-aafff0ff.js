import { c as create_ssr_component, d as add_attribute } from './index-3ce6e6d7.js';

const css = {
  code: "section.svelte-13zod5q.svelte-13zod5q{display:flex;flex-direction:column;align-items:center;height:80vh}h1.svelte-13zod5q.svelte-13zod5q{width:100%;font-size:4rem}.search-container.svelte-13zod5q.svelte-13zod5q{display:flex;flex-direction:column;gap:10px;width:100%;font-size:1.5rem}.search-container.svelte-13zod5q input.svelte-13zod5q{height:3rem;width:100%;border-radius:0.5rem;color:black}button.svelte-13zod5q.svelte-13zod5q{height:3rem;width:10rem;border-radius:0.5rem;border-color:#f5f5f5;border-width:1px}.spinner.svelte-13zod5q.svelte-13zod5q{display:flex;justify-content:center;align-items:center;flex-grow:3}.stats-container.svelte-13zod5q.svelte-13zod5q{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:30px;width:90%;padding:50px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let search = { value: "", waiting: false };
  $$result.css.add(css);
  return `<section class="${"svelte-13zod5q"}"><h1 class="${"svelte-13zod5q"}">AnimeList Stats</h1>

	<div class="${"search-container svelte-13zod5q"}"><label for="${"search"}">Your myanimelist url: </label>
		<div style="${"display: flex; gap: 5px;"}"><input type="${"text"}" name="${"search"}" placeholder="${"https://myanimelist.net/animelist/username"}" class="${"svelte-13zod5q"}"${add_attribute("value", search.value, 0)}>
			<button class="${"svelte-13zod5q"}">Search</button></div></div>

	${``}

	${``}
</section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-aafff0ff.js.map
