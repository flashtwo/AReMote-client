const router = exports = module.exports = {};

router.registerRoutes = (routes) => {
    // Instantiate router element
    let routerElement = new AppRouter(routes);
    document.body.appendChild(routerElement);
}
// Router element class
class AppRouter extends HTMLElement {
    // Watch for attribute change on 'state'
    static get observedAttributes() {
        return ['state'];
    }
    set routeTo(val) {
        this.setAttribute('state', val);
        this.id = val;
    }
    set state(val) {
        let state;
        this.routes.hasOwnProperty(val)
            ? ( state = this.routes[val],
                // push controller and HTML into view
                this.ctrl = new state.controller,
                this.innerHTML = state.template
            ) : this.init(this.routes);
    }
    constructor(routes) {
        super();
        this.routes = routes;
    }
    connectedCallback() {
        this.init(this.routes);
    }
    // Respond to attribute changes
    attributeChangedCallback(attr, oldState, newState) {
        if (newState !== oldState)
            this.state = newState;
    }
    init(routes) {
        for (let s in routes) {
            let state = routes[s];
            if (state.init && state.init === true)
                this.routeTo = s;
        }
    }
}
// Define the element
customElements.define('app-router', AppRouter);