const spiritIds = [
    "Treefrog - the swim",
    "Frog - body revolution",
    "Spadefoot - the reptile",
    "Peeper- the neck",
    "Salamander - the taup",
    "Newt - silence",
    "Waterdog- the smart",
    "Ensatina - stranger",
];


const btn = document.getElementById('animal');
const input = document.getElementById('input');
const p = document.getElementById('userName');


if (!input.value) {
    p.textContent = `fill your name `;
}

btn.addEventListener('click', function () {
    const number = Math.floor(Math.random() * 8);

    takeName(input.value, 'click-btn');
});

input.addEventListener('mouseover', function () {
    const number = Math.floor(Math.random() * 8);

    takeName(input.value, 'hover-input');
});

input.addEventListener('input', function () {
    takeName(input.value, 'text-written');
});

function takeName(value, wantedSelection) {
    const number = Math.floor(Math.random() * 8);
    const selection = document.getElementById('option').value;

    if (selection === wantedSelection && value) {
        const nameId = value;
        p.textContent = `${nameId} - ${spiritIds[number]}`;
        return p.textContent;
    }
}

document.getElementById('select-option').addEventListener('change', function() {
    let optionValue = document.getElementById('select-option').value;
    if (optionValue === 'hover-input' || optionValue === 'text-written') {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
});


