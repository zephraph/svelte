/* generated by Svelte vX.Y.Z */
import {
	SvelteElement,
	append,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal
} from "svelte/internal";

function add_css() {
	var style = element("style");
	style.id = 'svelte-pbe34-style';
	style.textContent = "h1.svelte-pbe34{color:blue}";
	append(document.head, style);
}

function create_fragment(ctx) {
	var h1;

	return {
		c() {
			h1 = element("h1");
			h1.textContent = "Hello world";
			this.c = noop;
			h1.className = "svelte-pbe34";
		},

		m(target, anchor) {
			insert(target, h1, anchor);
		},

		p: noop,
		i: noop,
		o: noop,

		d(detaching) {
			if (detaching) {
				detach(h1);
			}
		}
	};
}

class Component extends SvelteElement {
	constructor(options) {
		super({ use_shadow_dom: false });
		if (!document.getElementById("svelte-pbe34-style")) add_css();

		init(this, { target: this }, null, create_fragment, safe_not_equal, []);

		if (options) {
			if (options.target) {
				insert(options.target, this, options.anchor);
			}
		}
	}
}

customElements.define("custom-element", Component);

export default Component;