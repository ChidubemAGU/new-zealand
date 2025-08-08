const content = document.getElementById('content');

const changeContent = (title) => {
    switch (title) {
        case 'mountain':
            content.innerHTML = "Things you should know about New Zealand's mountain"
            break;
        case 'river':
            content.innerHTML = "Things you should know about New Zealand's river"
            break;
        case 'ocean':
            content.innerHTML = "Things you should know about New Zealand's ocean"
            break;
        default:
            content.innerHTML = "Things you should know about New Zealand's river"
            break;
    }
}