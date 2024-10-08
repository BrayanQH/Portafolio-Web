function switchSection(hideSection, showSection) {
    hideSection.classList.add('rotate-out');

    setTimeout(function() {
        hideSection.classList.add('hidden');
        hideSection.classList.remove('rotate-out');

        showSection.classList.remove('hidden');
        showSection.classList.add('rotate-in');

        setTimeout(function() {
            showSection.classList.remove('rotate-in');
            window.scrollTo(0, 0);
        }, 500);
    }, 500);
}

document.getElementById('trabajos-link').addEventListener('click', function(event) {
    event.preventDefault();
    var inicioContent = document.getElementById('inicio-content');
    var trabajosContent = document.getElementById('trabajos-content');
    
    switchSection(inicioContent, trabajosContent); 
});

document.getElementById('inicio-link').addEventListener('click', function(event) {
    event.preventDefault();
    var inicioContent = document.getElementById('inicio-content');
    var trabajosContent = document.getElementById('trabajos-content');
    
    switchSection(trabajosContent, inicioContent);
});

