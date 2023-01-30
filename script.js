function myFunction() {
  const element = document.getElementById("id01");
  element.innerHTML = "New Heading";
}

function myColorChange() {
  const element = document.getElementById("id01");
  element.style.color = "red";
}

function mojaFunkcja(imie) {

    const clients = ["Mango", "Poly", "Ajax"];
    const clientNameToFind = "Patryk";
    let message; 
    
    for (const client of clients) {
    
      if (client === imie) {
        message = "Klient z takim imieniem jest w bazie danych!";
        break;
      }
    
      message = "Nie znaleźliśmy takiego klienta w bazie danych!";
    }
    
    console.log(message);
    
}


const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const bookTitle = book.title;
console.log(bookTitle);// 'The Last Kingdom'

const bookGenres = book.genres;
console.log(bookGenres);// ['historical prose', 'adventurs']

const bookPrice = book.price;
console.log(bookPrice);// undefined