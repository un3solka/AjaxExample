class NewsPage {
    constructor(container) {
        this.button = container.getElementsByTagName('button')[0];
    }

    initPage() {
        this.button.addEventListener('click', function() {
            alert('News page');
        });
    }
}