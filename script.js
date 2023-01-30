function myFunction() {
  const element = document.getElementById("id01");
  element.innerHTML = "New Heading";
}

function myColorChange() {
  const element = document.getElementById("id01");
  element.style.color = "red";
}

//function mojaFunkcja() {
//for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
//  }

// 1  i iterator odniesienie do zmiennej
// 2 i warunek końcowy
// 3 i co ma się zadziać

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
