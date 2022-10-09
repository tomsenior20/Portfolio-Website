window.addEventListener('load', () => {
    console.log(document.readyState);
    setInterval(() => {
        getTime();
    }, 1000);

    var revealButton = document.getElementById('revealExperienceButton').addEventListener('click', () => {
        var showExperienceContainer = document.getElementById('workExperienceContainer').style;
        showExperience(showExperienceContainer);
    });
});

getTime = () => {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    hours = (hours < 10 ? '0' : '') + hours;
    minutes = (minutes < 10 ? '0' : '') + minutes;
    seconds = (seconds < 10 ? '0' : '') + seconds;
    var ampm = (hours < 12 ? 'AM' : 'PM');
    document.getElementById('timeContainer').innerHTML = `<p class='introText text-center my-3 py-2'>${hours}:${minutes}:${seconds}:${ampm}</p>`;
}

showExperience = (showExperienceContainer) => {
    let buttonText = document.getElementById('revealExperienceButton');
    if (showExperienceContainer.display == 'none') {
        showExperienceContainer.display = 'flex';
        buttonText.innerHTML = 'Close Experience';
    } else {
        showExperienceContainer.display = 'none';
        buttonText.innerHTML = 'Reveal Experience';
    }
};