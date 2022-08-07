const pages = [
    {
        url: '/about',
        title: 'About',
        component: AboutPage
    },
    {
        url: '/news',
        title: 'News',
        component: NewsPage
    },
]

class App {
    constructor(container) {
        this.container = container;
    }

    initApp() {
        const nav = document.querySelector('header nav');
        nav.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.tagName === 'A' && !e.target.classList.contains('active')) {
                nav.getElementsByClassName('active')[0].classList.remove('active');
                e.target.classList.add('active');
                this.openPage(e.target.pathname);
            }
        });
        if (location.hash !== '') {
            this.openPage(location.hash.substring(1));
        }
    }

    openPage(url) {
        if (url === '/') {
            this.container.innerHTML = '';
            window.history.pushState({"html": "", "pageTitle": "Main"}, "", '/');
            return;
        }
        fetch(url).then(response => response.text()).then(html => {
            this.container.innerHTML = html;
            if (location.pathname !== url) {
                let pageConfig = pages.find(item => item.url === url);
                if (!pageConfig) {
                    pageConfig = {
                        title: '',
                        component: null
                    }
                }
                window.history.pushState({"html": html, "pageTitle": pageConfig.title}, "", `/#${url}`);
                if (pageConfig.component) {
                    const page = new pageConfig.component(this.container);
                    page.initPage();
                }
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('app');
    const app = new App(container);
    app.initApp();
});