var screensize;

window.addEventListener('load', () => {
    screensize = window.innerWidth;
    localStorage.setItem('screensize', screensize);
    setNavigationListDisplay(screensize);
    localStorage.setItem('PageLoaded', window.location.pathname);
});

window.addEventListener('resize', () => {
    screensize = window.innerWidth;
    localStorage.setItem('screensize', screensize);
    setNavigationListDisplay(screensize);
});

setNavigationListDisplay = (currentscreensize) => {
    var navigationListDisplayContainer = document.getElementById('navigationListContainer');
    if (currentscreensize > 800) {
        const html = `<ul class='my-0'>
            <li class='homelink' id='homelink'>
                <a href="./Home.html">Home</a>
            </li>
            <li class='contactlink' id='contactlink'>
                <a href="./Contact.html">Contact</a>
            </li>
            <li class='projectlink' id='projectlink'>
                <a href="./Projects.html">Projects</a>
            </li>
            </ul>`
        navigationListDisplayContainer.innerHTML = html;
        showMainNavHideElement();
    } else {
        const mobileinner = `
            <button id="hamburgermenu" onclick=mobileMenuButtonClick()>
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
            </button>`
        navigationListDisplayContainer.innerHTML = mobileinner;
        document.getElementById('mobilemenu').setAttribute('style', 'display:none;');
    }
};

mobileMenuButtonClick = () => {
    var menuStyle = document.getElementById('mobilemenu');
    var mainContainerStyling = document.getElementById('firstSectionContainer')
    if (menuStyle.style.display == 'none') {
        menuStyle.setAttribute('style', 'display:flex;');
        mainContainerStyling.setAttribute('style', 'padding:18em 0 8em;');
        menuStyle.innerHTML = `<div class='mobilemenulist col h-auto' id="mobilemenulist">
            <ul class="w-100 px-0 my-0">
                <li class='mobilemenulistitem border border-1' id='homelink'>
                    <a href="./Home.html">Home</a>
                </li>
                <li class='mobilemenulistitem border border-1' id='contactlink'>
                    <a href="./Contact.html">Contact</a>
                </li>
                <li class='mobilemenulistitem border border-2' id='projectlink'>
                    <a href="./Projects.html">Projects</a>
                </li>
            </ul>
        </div>`;
    } else {
        menuStyle.setAttribute('style', 'display: none;animation: opacityChangeAnimation 4s ease-out;');
        mainContainerStyling.setAttribute('style', 'padding:10em 0;');
    }
    showMainNavHideElement();
};

showMainNavHideElement = () => {
    var pgLoaded = localStorage.getItem('PageLoaded');
    // Loads Page loaded which is saved in local and hides the pages nav option based of page loaded
    switch (pgLoaded) {
        case '/Home.html':
            document.getElementById('homelink').style.display = 'none';
            break;
        case '/Projects.html':
            document.getElementById('projectlink').style.display = 'none';
            break;
        case '/Contact.html':
            document.getElementById('contactlink').style.display = 'none';
        default:
            return;
            break;
    }
}