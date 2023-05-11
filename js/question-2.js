const displayAnswer2 = document.querySelector(".question_2-container");

const apiKey = "70becafb8a20428baaf9ed22abaff3ba";

const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

const corsEnabledUrl = "https://noroffcors.onrender.com/" + url;

async function getData() {
  try {
    const response = await fetch(corsEnabledUrl);
    const data = await response.json();
    const list = data.results;

    displayAnswer2.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
      /*  console.log(
      "Game: " +
        list[i].name +
        ", Rating: " +
        list[i].rating +
        " Tags: " +
        list[i].tags.length
    ); */

      displayAnswer2.innerHTML += `<div class="gameContainer">
                                    <p>Title: ${list[i].name}</p>
                                    <p>Rating: ${list[i].rating}</p>
                                    <p>Tags: ${list[i].tags.length}</p>
                                  </div>`;

      if (i === 7) {
        break;
      }
    }
  } catch (error) {
    displayAnswer2.innerHTML = errorMessage(
      "⚠️ Oops! A problem occurred while calling the API 😢"
    );
  }
}

getData();
