function addLazyLoading() {
    const targetEls = document.querySelectorAll('img');

    targetEls.forEach(element => {
        element.setAttribute('loading', 'lazy');
    });
}

addLazyLoading();