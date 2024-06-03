document.getElementById('Home').addEventListener('click', function() {
    var selected = document.getElementById('NavHome');
    selected.scrollIntoView({behavior: "smooth", block: "start"});
});

document.getElementById('About').addEventListener('click', function() {
    var selected = document.getElementById('NavSect');
    selected.scrollIntoView({behavior: "smooth", block: "start"});
});

document.getElementById('Skills').addEventListener('click', function() {
    var selected = document.getElementById('NavSkills');
    selected.scrollIntoView({behavior: "smooth", block: "start"});
});

document.getElementById('Projects').addEventListener('click', function() {
    var selected = document.getElementById('NavProjects');
    selected.scrollIntoView({behavior: "smooth", block: "start"});
});

document.getElementById('Contact').addEventListener('click', function() {
    var selected = document.getElementById('NavContact');
    selected.scrollIntoView({behavior: "smooth", block: "start"});
});
