//exo1   sumArray(arr)    Additionne tous les nombres du tableau et retourne la somme.

function sumArray(arr) {
  // Si arr n'est pas un tableau → on arrête et on signale une erreur claire
  if (!Array.isArray(arr)) {
    throw new TypeError("sumArray: le paramètre doit être un tableau");
  }

  // On démarre la somme à 0
  let total = 0;

  // On parcourt chaque case du tableau, de 0 jusqu’à la fin
  for (let i = 0; i < arr.length; i++) {
    // v = valeur actuelle
    const v = arr[i];

    // Si c'est un nombre fini (pas NaN, pas Infinity)
    if (typeof v === "number" && Number.isFinite(v)) {
      // On l'ajoute à la somme
      total += v;
      // Et on passe directement à l'élément suivant
      continue;
    }

    // Si c'est une chaîne non vide (on ignore juste les espaces)
    if (typeof v === "string" && v.trim() !== "") {
      // On essaie de convertir la chaîne en nombre
      const n = Number(v);
      // Si la conversion marche et donne un nombre fini
      if (Number.isFinite(n)) {
        // On ajoute ce nombre converti
        total += n;
      }
      // Puis on passe à la suite
      continue;
    }

    // Sinon : on ignore tout le reste (null, undefined, NaN, Infinity, objets, booléens, etc.)
  }

  // À la fin, on renvoie la somme calculée
  return total;
}

// Exemple : affiche 6
console.log(sumArray([1, 2, 3]));

//exo2   exists(arr, value)    Retourne true si value existe dans le tableau, sinon false.
// exists(arr, value) Retourne true si value est présent dans le tableau, sinon false.

// Un tableau d'exemple
const arr = [1, 2, 3, 42];

function exists(arr, value) {
  // Si arr n'est pas un tableau → on dit directement "non"
  if (!Array.isArray(arr)) return false;

  // On parcourt le tableau avec une boucle classique
  for (let i = 0; i < arr.length; i++) {
    // Si la case i est strictement égale à la valeur cherchée
    if (arr[i] === value) {
      // On a trouvé → on renvoie true tout de suite
      return true;
    }
  }

  // Si on a fini la boucle sans trouver, on renvoie false
  return false;
}

// Tests : devrait afficher true puis false
console.log(exists(arr, 42)); // true
console.log(exists(arr, 5)); // false

//exo3 10    reverseString(str)    Retourne une nouvelle chaîne avec les lettres du mot à l’envers.

// reverseString(str) Retourne une nouvelle chaîne avec les lettres à l’envers.

function reverseString(str) {
  // Si ce n'est pas une chaîne → on renvoie une chaîne vide
  if (typeof str !== "string") return "";

  // On prépare une chaîne vide pour construire le résultat
  let newStr = "";

  // On parcourt la chaîne à l’envers (du dernier au premier caractère)
  for (let i = str.length - 1; i >= 0; i--) {
    // On ajoute le caractère courant à la fin de newStr
    newStr += str[i];
  }

  // On renvoie la chaîne inversée
  return newStr;
}

// Tests : "hello" → "olleh", etc.
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("abc")); // "cba"
console.log(reverseString("")); // ""

//exo 4 11    countVowels(str)    Compte et retourne le nombre de voyelles dans la chaîne.
// countVowels(str) Compte le nombre de voyelles dans la chaîne.

function countVowels(str) {
  // Si pas une chaîne → 0
  if (typeof str !== "string") return 0;

  // Liste des voyelles acceptées (minuscules et majuscules)
  const vowels = "aeiouyAEIOUY";

  // Compteur de voyelles trouvé
  let count = 0;

  // On parcourt chaque caractère
  for (let i = 0; i < str.length; i++) {
    // Caractère courant
    const char = str[i];

    // Si ce caractère est dans la liste des voyelles
    if (vowels.includes(char)) {
      // On incrémente le compteur
      count++;
    }
  }

  // On renvoie le total
  return count;
}

// Tests rapides
console.log(countVowels("hello")); // 2 (e, o)
console.log(countVowels("rhythm")); // 1 (y)
console.log(countVowels("")); // 0

//exo 5 12    minArray(arr)    Retourne le plus petit nombre contenu dans le tableau.

// minArray(arr) Retourne le plus petit nombre du tableau.

function minArray(arr) {
  // Si ce n'est pas un tableau → undefined
  if (!Array.isArray(arr)) return undefined;

  // Si tableau vide → rien à comparer → undefined
  if (arr.length === 0) return undefined;

  // On part du principe que le premier est le plus petit
  let min = arr[0];

  // On regarde les suivants à partir de l’index 1
  for (let i = 1; i < arr.length; i++) {
    // Valeur actuelle
    const value = arr[i];

    // Si on trouve plus petit, on met à jour min
    if (value < min) {
      min = value;
    }
  }

  // À la fin, min est le plus petit
  return min;
}

// Tests
console.log(minArray([5, 3, 9, 1, 10]));  // 1
console.log(minArray([42]));              // 42
console.log(minArray([-5, -10, 0, 7]));   // -10
console.log(minArray([]));                // undefined


//exo 6 13    multiplesOf3(n)    Retourne un tableau contenant tous les multiples de 3 jusqu’à n.
// multiplesOf3(n) Retourne tous les multiples de 3 de 1 jusqu’à n.

function multiplesOf3(n) {
  // Si n n'est pas un nombre ou est négatif → tableau vide
  if (typeof n !== 'number' || n < 0) return [];

  // Tableau résultat à remplir
  const result = [];

  // On parcourt de 1 à n inclus
  for (let i = 1; i <= n; i++) {
    // Si i est divisible par 3 (reste 0)
    if (i % 3 === 0) {
      // On l'ajoute au résultat
      result.push(i);
    }
  }

  // On renvoie la liste des multiples
  return result;
}

// Tests
console.log(multiplesOf3(10)); // [3, 6, 9]
console.log(multiplesOf3(0));  // []


//14    isPalindrome(str)    Retourne true si le mot se lit dans les deux sens, sinon false.

function isPalindrome(str) {
  // Vérifie que str est bien une chaîne
  if (typeof str !== "string") return false;

  // Convertit la chaîne en minuscules pour ignorer la casse
  const lower = str.toLowerCase();

  // Boucle de 0 à la moitié du mot
  for (let i = 0; i < Math.floor(lower.length / 2); i++) {
    // Compare les caractères opposés
    if (lower[i] !== lower[lower.length - 1 - i]) {
      // Si une paire ne correspond pas, ce n’est pas un palindrome
      return false;
    }
  }

  // Si la boucle se termine sans problème, c’est un palindrome
  return true;
}

// ✅ Tests
console.log(isPalindrome("kayak")); // true
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("bonjour")); // false

// 15    findIndex(arr, value)    Retourne l’index de value dans le tableau (ou -1 si absent), sans .indexOf().

function findIndex(arr, value) {
  // Vérifie que arr est bien un tableau
  if (!Array.isArray(arr)) return -1;

  // Boucle sur tous les éléments du tableau
  for (let i = 0; i < arr.length; i++) {
    // Si l’élément courant correspond à la valeur recherchée
    if (arr[i] === value) {
      // On retourne son index
      return i;
    }
  }

  // Si la valeur n’a pas été trouvée, retourne -1
  return -1;
}

// ✅ Tests
console.log(findIndex([10, 20, 30], 20)); // 1
console.log(findIndex([5, 7, 9], 8)); // -1

//16    countLetters(str)    Retourne un objet indiquant combien de fois apparaît chaque lettre du mot.

function countLetters(str) {
  // Vérifie que str est bien une chaîne
  if (typeof str !== "string") return {};

  // Crée un objet vide pour stocker les comptes
  const counts = {};

  // Boucle sur chaque caractère de la chaîne
  for (let i = 0; i < str.length; i++) {
    // Récupère la lettre actuelle en minuscule
    const char = str[i].toLowerCase();

    // Vérifie que c’est bien une lettre (pas espace, chiffre, etc.)
    if (/[a-z]/.test(char)) {
      // Si la lettre existe déjà dans l’objet, on incrémente
      if (counts[char]) {
        counts[char]++;
      } else {
        // Sinon, on initialise à 1
        counts[char] = 1;
      }
    }
  }

  // Retourne l’objet final avec les lettres et leurs comptes
  return counts;
}

// ✅ Tests
console.log(countLetters("Hello")); // { h:1, e:1, l:2, o:1 }
console.log(countLetters("banana")); // { b:1, a:3, n:2 }
