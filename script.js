
// Créer une fonction isValidDate qui prend en paramètre une date en string et determine si elle est valide. Pour qu'une date soit valide, il faut qu'elle existe et qu'elle soit au format dd/mm/aaaa.
// Tout au long de l’exercice, on supposera des années supérieures à 999 et inférieures 9999 - autrement dit, l’année sera systématiquement représentée sur 4 caractères.
// Vous aurez probablement besoin de créer une autre fonction maxDaysInMonth pour vous assurer que le nombre de jours par mois est valide (ex: le 31/11 n’est pas valide, le mois de novembre ne contient que 30 jours)

const date = document.getElementById('dateSubmit');
date.addEventListener('keydown', (event) => {
    if (event.key === "Enter" && event.target.value !== '') {
        console.log(isValidDate(event.target.value))
    };


}
)
function isValidDate(entry) {
let dateObj = entry.split('/');
const [ day, month, year] = dateObj;
const dateFinale = new Date(Number(year), Number(month) - 1, Number(day));
const dateSansSlash = day + month + year 
    if (isNaN (day) || isNaN(month) || isNaN(year)) {
    return "Date invalide"
    
}
    if (day.length !== 2 || month.length !== 2 || year.length !== 4) {
        
       
         return "Date invalide"
        
    }
    if (Number(day) === dateFinale.getDate() &&
        Number(month) === dateFinale.getMonth() + 1 &&
        Number(year) === dateFinale.getFullYear()
)
     {
        return isPalindrome(dateSansSlash)
    }
    return "Ce n'est pas un palindrome"
}


function isPalindrome (entry) {
    let reversed = entry.split('').reverse().join('')
    if (reversed === entry) {
        return "C'est un palindrome ! :)"
    } else
        return "Ce n'est pas un palindrome! :/"
}





