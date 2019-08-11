/* generated by Svelte vX.Y.Z */
import {
	SvelteElement,
	detach,
	element,
	init,
	insert,
	mount_component,
	noop,
	safe_not_equal,
	space,
	text
} from "svelte/internal";
import "./AsElement.svelte";
import AsImport from "./AsImport.svelte";

// (9:0) <AsImport>
function create_default_slot(ctx) {
	var t;

	return {
		c() {
			t = text("world");
		},

		m(target, anchor) {
			insert(target, t, anchor);
		},

		d(detaching) {
			if (detaching) {
				detach(t);
			}
		}
	};
}

function create_fragment(ctx) {
	var as_element, t_1, current;

	var asimport = new AsImport({
		props: {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	}
	});

	return {
		c() {
			as_element = element("as-element");
			as_element.textContent = "hello";
			t_1 = space();
			asimport.$$.fragment.c();
			this.c = noop;
		},

		m(target, anchor) {
			insert(target, as_element, anchor);
			insert(target, t_1, anchor);
			mount_component(asimport, target, anchor);
			current = true;
		},

		p(changed, ctx) {
			var asimport_changes = {};
			if (changed.$$scope) asimport_changes.$$scope = { changed, ctx };
			asimport.$set(asimport_changes);
		},

		i(local) {
			if (current) return;
			asimport.$$.fragment.i(local);

			current = true;
		},

		o(local) {
			asimport.$$.fragment.o(local);
			current = false;
		},

		d(detaching) {
			if (detaching) {
				detach(as_element);
				detach(t_1);
			}

			asimport.$destroy(detaching);
		}
	};
}

class Component extends SvelteElement {
	constructor(options) {
		super({ use_shadow_dom: false });

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