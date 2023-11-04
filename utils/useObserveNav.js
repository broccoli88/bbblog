export default (el) => {
    const observerOptions = {
        rootMargin: "200px 0px 0px 0px",
    };

    const nav = unref(el)
    const observedEl = document.createElement("div");
    observedEl.classList.add("observed-for-nav");
    nav.before(observedEl);

    const navObserver = new IntersectionObserver((entries) => {
        if (nav) {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    nav.classList.add("nav-bg");
                } else {
                    nav.classList.remove("nav-bg");
                }
            });
        }
    }, observerOptions);

    return { navObserver, observedEl }
}
