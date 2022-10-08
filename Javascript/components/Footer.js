var lastAccessedDate;

window.addEventListener('load', () => {
    lastAccessedDate = new Date().toLocaleDateString();
    localStorage.setItem('lastAccessedDate', lastAccessedDate);
    addLastAccessedDate();
});

addLastAccessedDate = () => {
    var newLastAccessedDate = localStorage.getItem('lastAccessedDate');
    var lastAccessedDocumnet = document.getElementById('lastAccessed');
    lastAccessedDocumnet.innerHTML = `Last accessed on ${newLastAccessedDate}`;
}