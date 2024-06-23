
function toggleAnswer(button) {
    const answer = button.nextElementSibling;
    answer.classList.toggle('show');
}

function randomizeProfile() {
    var profileContainer = document.querySelector('.profile-container');
    var profiles = document.querySelectorAll('.profile');
    profiles = Array.from(profiles);
    profiles.sort(() => Math.random() - 0.5);
    profiles.forEach(profile => {
        profileContainer.appendChild(profile);
    });
}

// Referenced from...
// https://codepen.io/jmikelf/pen/eWKNZd
$(document).ready(function () {
    randomizeProfile();
});

