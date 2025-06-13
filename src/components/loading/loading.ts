import './loading.scss';

let loader: HTMLDivElement | undefined;

function createLoader(): HTMLDivElement {
    const elem = document.createElement('div');
    elem.setAttribute('dir', 'ltr');
    elem.classList.add('docspinner');
    elem.classList.add('mdl-spinner');

    document.body.appendChild(elem);
    return elem;
}

export function show() {
    if (!loader) {
        loader = createLoader();
    }
    loader.classList.add('mdlSpinnerActive');
}

export function hide() {
    if (loader) {
        loader.classList.remove('mdlSpinnerActive');
    }
}

const loading = {
    show,
    hide
};

window.Loading = loading;

export default loading;
