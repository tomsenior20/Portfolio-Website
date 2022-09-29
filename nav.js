var screensize;

window.addEventListener('load', () => {
    screensize = window.innerWidth;
    localStorage.setItem('screensize', screensize);
    setNavigationListDisplay(screensize);
    setInterval(() => {
        getTime();
    }, 1000);
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
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
            <li>
                <a href="#">Projects</a>
            </li>
            </ul>`
        navigationListDisplayContainer.innerHTML = html;
    } else {
        const mobileinner = `
            <button id="hamburgermenu" onclick=mobileMenuButtonClick()>
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
            </button>`
        navigationListDisplayContainer.innerHTML = mobileinner;
        document.getElementById('mobilemenu').style.display = 'none';
    }
};

mobileMenuButtonClick = () => {
    var menuStyle = document.getElementById('mobilemenu');
    var mainContainerStyling = document.getElementById('test')
    if (menuStyle.style.display == 'none') {
        menuStyle.style.display = 'flex';
        mainContainerStyling.style.padding = '16em 0';
        menuStyle.innerHTML = `<div class='mobilemenulist col h-auto' id="mobilemenulist">
            <ul class="w-100 px-0 my-0">
                <li class='mobilemenulistitem border border-1'>
                    <a href="#">Home</a>
                </li>
                <li class='mobilemenulistitem border border-1'>
                    <a href="#">Contact</a>
                </li>
                <li class='mobilemenulistitem border border-2'>
                    <a href="#">Projects</a>
                </li>
            </ul>
        </div>`;
    } else {
        menuStyle.style.display = 'none';
        mainContainerStyling.style.padding = '8em 0';
    }
};

function getTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    hours = (hours < 10 ? '0' : '') + hours;
    minutes = (minutes < 10 ? '0' : '') + minutes;
    seconds = (seconds < 10 ? '0' : '') + seconds;
    var ampm = (hours < 12 ? 'AM' : 'PM');
    document.getElementById('timeContainer').innerHTML = `<p class='introText text-center my-3 py-2'>${hours}:${minutes}:${seconds}:${ampm}</p>`;

};