console.log(`5-walidacja-formularza-zapisu-do-newslettera`);

// Pobranie formularza
let newsletterForm = document.getElementById('newsletter-form');

// Pobranie checkbox'a 'allAgree', aby dopiąć do niego funkcję podczas zdarzenia.
let allAgreeChx = document.getElementById('all-agree');

// Funkcja obsługująca walidację formularza
const validate = (event) => {

    let txtName = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let agree1 = document.getElementById('agree-1');
    let errors = document.getElementById('errors');

    // Wyczyszczenie listy przed każdą walidacją - nie wypisuje kilka razy 
    // błędu w formularzu (poniżej).

    errors.innerHTML = ''; 

    // Warunek, by sprawdzić, czy pole jest uzupełnione:
    if (txtName.value.trim() === '') { 
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz imię i nazwisko!';    //Jeśli w polu nic nie jest napisane to jest błąd.
        
        errors.appendChild(liError); // Żeby wypisywało się nad formularzem
        // console.log(liError); 
    }

        // By spacja i puste znaki były ignorowane należy użyć funkcji 'trim'. 
        // Funkcja ta ucina białe znaki z lewej i prawej strony string'a.

    // console.log('validate()');
    // console.log(errors);

    if (txtEmail.value.trim() === '') { 
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz adres e-mail!';    
        errors.appendChild(liError);
}

if (!txtEmail.value.includes('@')) { // Warunek - gdyby nie była sprawdzana przez przeglądarkę obecność '@'. 
    let liError = document.createElement('li');
    liError.innerText = 'Adres e-mail musi zawierać @!';    
    errors.appendChild(liError);
}

if (!agree1.checked) { // Zgoda marketingowa
    let liError = document.createElement('li');
    liError.innerText = 'Nie wyraziłeś zgody - 1!';    
    errors.appendChild(liError);
}

if (errors.children.length > 0) { // Wysłanie formularza
    event.preventDefault(); // Tymczasowa blokada
}

}

// Jeśli jest już funkcja 'validate' to trzeba ją podpiąć pod formularz:

newsletterForm.addEventListener('submit', validate);

// 'submit' - wysłanie formularza
// 'validate - podpięcie funkcji 'validate'
// Nie dodawać po validate () - żeby funkcja wywołała się po kliknięciu - wysyłanie, a nie w momencie ładowania się skrytpu.

// Obsługa checkbox'a:

const allAgree = (event) => { // Dodanie event, by zaznaczały się wszystkie pola ze zgodą
    let agree1 = document.getElementById('agree-1'); // Pobranie pól 
    let agree2 = document.getElementById('agree-2');

    // Zaznaczenie wszystkich pól po wybraniu all-agree w formularzu
    agree1.checked = event.target.checked; 
    agree2.checked = event.target.checked;

    // By po zaznaczeniu all-agree nie dało się zaznaczyć agree1 i agree2
    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;
    
//     console.log(event.target.checked);
}

// Pobranie checkbox'a 'allAgree', aby dopiąć do niego funkcję podczas zdarzenia.

//Podpięcie pod change: 
allAgreeChx.addEventListener('change', allAgree);