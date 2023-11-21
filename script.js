// Funkcja wyświetlająca treść dla każdego dnia
function showContent(day) {
    const content = document.getElementById('content');

    // Przykładowe treści dla każdego dnia
    const dailyContents = {
        1: 'Życzenia na 1 grudnia...',
        2: 'Świąteczny obrazek/film dla dnia 2',
        // ...Dodaj treści dla każdego dnia
        24: 'Życzenia na Wigilię!'
    };

    // Wyświetlanie odpowiedniej treści
    content.innerHTML = dailyContents[day] || 'Życzenia na dzień ' + day;
}

// Funkcja wywoływana przy załadowaniu strony
window.onload = function() {
    // Sprawdzenie, czy strona została już wcześniej odwiedzona
    if (!sessionStorage.getItem('visited')) {
        alert('Witamy w Kalendarzu Adwentowym!');
        sessionStorage.setItem('visited', 'true');
    }
}
