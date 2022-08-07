class AboutPage {
    constructor(container) {
        this.button = container.getElementsByTagName('button')[0];
    }

    initPage() {
        this.button.addEventListener('click', function() {
            alert('About page');
        });
    }
}