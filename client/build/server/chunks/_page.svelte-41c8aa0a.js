import { c as create_ssr_component, d as add_attribute, v as validate_component, e as escape, f as null_to_empty } from './index-cadeb0d9.js';
import pkg from 'debounce';

const css$2 = {
  code: ".container.svelte-1aehays.svelte-1aehays{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}.spinner.svelte-1aehays.svelte-1aehays{display:inline-block;position:relative;width:80px;height:80px}.spinner.svelte-1aehays div.svelte-1aehays{position:absolute;width:6px;height:6px;background:rgb(71, 161, 200);border-radius:50%;animation:svelte-1aehays-lds-default 1.2s linear infinite}.spinner.svelte-1aehays div.svelte-1aehays:nth-child(1){animation-delay:0s;top:37px;left:66px}.spinner.svelte-1aehays div.svelte-1aehays:nth-child(2){animation-delay:-0.1s;top:22px;left:62px}.spinner.svelte-1aehays div.svelte-1aehays:nth-child(3){animation-delay:-0.2s;top:11px;left:52px}.spinner.svelte-1aehays div.svelte-1aehays:nth-child(4){animation-delay:-0.3s;top:7px;left:37px}.spinner.svelte-1aehays div.svelte-1aehays:nth-child(5){animation-delay:-0.4s;top:11px;left:22px}.spinner.svelte-1aehays div.svelte-1aehays:nth-child(6){animation-delay:-0.5s;top:22px;left:11px}.spinner.svelte-1aehays div.svelte-1aehays:nth-child(7){animation-delay:-0.6s;top:37px;left:7px}.spinner.svelte-1aehays div.svelte-1aehays:nth-child(8){animation-delay:-0.7s;top:52px;left:11px}.spinner.svelte-1aehays div.svelte-1aehays:nth-child(9){animation-delay:-0.8s;top:62px;left:22px}.spinner.svelte-1aehays div.svelte-1aehays:nth-child(10){animation-delay:-0.9s;top:66px;left:37px}.spinner.svelte-1aehays div.svelte-1aehays:nth-child(11){animation-delay:-1s;top:62px;left:52px}.spinner.svelte-1aehays div.svelte-1aehays:nth-child(12){animation-delay:-1.1s;top:52px;left:62px}@keyframes svelte-1aehays-lds-default{0%,20%,80%,100%{transform:scale(1)}50%{transform:scale(1.5)}}",
  map: null
};
const Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "Loading..." } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$2);
  return `<div class="${"container svelte-1aehays"}"><div class="${"spinner svelte-1aehays"}"><div class="${"svelte-1aehays"}"></div>
		<div class="${"svelte-1aehays"}"></div>
		<div class="${"svelte-1aehays"}"></div>
		<div class="${"svelte-1aehays"}"></div>
		<div class="${"svelte-1aehays"}"></div>
		<div class="${"svelte-1aehays"}"></div>
		<div class="${"svelte-1aehays"}"></div>
		<div class="${"svelte-1aehays"}"></div>
		<div class="${"svelte-1aehays"}"></div>
		<div class="${"svelte-1aehays"}"></div>
		<div class="${"svelte-1aehays"}"></div>
		<div class="${"svelte-1aehays"}"></div></div>
	<p>${escape(text)}</p>
</div>`;
});
const css$1 = {
  code: ".rectangulo.svelte-yql3zl{width:100%;height:100px;background-color:#1a1a1a;border-radius:10px;padding:1rem;display:flex;justify-content:center;align-items:center;position:relative;transition:all 0.2s ease-in-out}.rectangulo.watching.svelte-yql3zl:hover{box-shadow:#2db039 2px 2px 2px 0px\r\n  }.rectangulo.on-hold.svelte-yql3zl:hover{box-shadow:#f1c83e 2px 2px 2px 0px\r\n  }.rectangulo.dropped.svelte-yql3zl:hover{box-shadow:#a12f31 2px 2px 2px 0px\r\n  }.rectangulo.plan-to-watch.svelte-yql3zl:hover{box-shadow:#c3c3c3 2px 2px 2px 0px\r\n  }.title.svelte-yql3zl{text-transform:uppercase;font-size:2rem;position:absolute;left:30px;top:-23px}.hours-container.svelte-yql3zl{display:grid;grid-template-columns:repeat(4, 1fr);gap:25px;width:100%}h4.svelte-yql3zl{margin:0;font-size:1.5rem}.watching.svelte-yql3zl{color:#2db039}.dropped.svelte-yql3zl{color:#a12f31}.plan-to-watch.svelte-yql3zl{color:#c3c3c3}.on-hold.svelte-yql3zl{color:#f1c83e}h3.svelte-yql3zl{text-transform:uppercase;font-size:1.5rem;margin:0}",
  map: null
};
const Stats = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stats } = $$props;
  let { section } = $$props;
  const getSectioName = (sectionNumber) => {
    switch (sectionNumber) {
      case 1:
        return "Watching";
      case 2:
        return "Completed";
      case 3:
        return "On Hold";
      case 4:
        return "Dropped";
      case 6:
        return "Plan to Watch";
      case 7:
        return "All Anime";
    }
  };
  if ($$props.stats === void 0 && $$bindings.stats && stats !== void 0)
    $$bindings.stats(stats);
  if ($$props.section === void 0 && $$bindings.section && section !== void 0)
    $$bindings.section(section);
  $$result.css.add(css$1);
  return `<div class="${escape(null_to_empty(`rectangulo ${getSectioName(section).toLocaleLowerCase().replaceAll(" ", "-")}`), true) + " svelte-yql3zl"}"><h3 class="${"title svelte-yql3zl"}">${escape(getSectioName(section))}</h3>
  <div class="${escape(null_to_empty(`hours-container`), true) + " svelte-yql3zl"}"><h4 class="${"svelte-yql3zl"}">Missing time:</h4>
    <h4 class="${"svelte-yql3zl"}">${escape(stats[getSectioName(section)].missingHours)} hours</h4>
    <h4 class="${"svelte-yql3zl"}">${escape(stats[getSectioName(section)].missingMinutes)} minutes</h4>
    <h4 class="${"svelte-yql3zl"}">${escape(stats[getSectioName(section)].missingMinutes / 24)} chapters</h4></div>
</div>`;
});
const css = {
  code: "section.svelte-qp7u2n.svelte-qp7u2n{display:flex;flex-direction:column;align-items:center;height:80vh}h1.svelte-qp7u2n.svelte-qp7u2n{width:100%;font-size:4rem}.search-container.svelte-qp7u2n.svelte-qp7u2n{display:flex;flex-direction:column;gap:10px;width:100%;font-size:1.5rem}.search-container.svelte-qp7u2n>input.svelte-qp7u2n{height:3rem;border-radius:0.5rem;color:black}.spinner.svelte-qp7u2n.svelte-qp7u2n{display:flex;justify-content:center;align-items:center;flex-grow:3}.stats-container.svelte-qp7u2n.svelte-qp7u2n{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:30px;width:90%;padding:50px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { debounce } = pkg;
  let search = { value: "", waiting: false };
  let stats = null;
  const url = "https://myanimelist-stats.vercel.app/api";
  const regex = new RegExp(/^(https:\/\/myanimelist.net\/animelist\/)([a-zA-Z0-9]+)/);
  const handleSearch = () => {
    if (!regex.test(search.value))
      return;
    search.waiting = true;
    fetch(`${url}?anime=${search.value}`).then((res) => res.json()).then((data) => {
      stats = data;
      search.waiting = false;
    });
  };
  debounce(handleSearch, 1e3);
  $$result.css.add(css);
  return `<section class="${"svelte-qp7u2n"}"><h1 class="${"svelte-qp7u2n"}">AnimeList Stats</h1>

	<div class="${"search-container svelte-qp7u2n"}"><label for="${"search"}">Your myanimelist url: </label>
		<input type="${"text"}" name="${"search"}" placeholder="${"https://myanimelist.net/animelist/username"}" class="${"svelte-qp7u2n"}"${add_attribute("value", search.value, 0)}></div>

	${search.waiting ? `<div class="${"spinner svelte-qp7u2n"}">${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}</div>` : ``}

	${stats && !search.waiting ? `<div class="${"stats-container svelte-qp7u2n"}">${validate_component(Stats, "Stats").$$render($$result, { stats, section: 1 }, {}, {})}
			${validate_component(Stats, "Stats").$$render($$result, { stats, section: 3 }, {}, {})}
			${validate_component(Stats, "Stats").$$render($$result, { stats, section: 4 }, {}, {})}
			${validate_component(Stats, "Stats").$$render($$result, { stats, section: 6 }, {}, {})}</div>` : ``}
</section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-41c8aa0a.js.map
