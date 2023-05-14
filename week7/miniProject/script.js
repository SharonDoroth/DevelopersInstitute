const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  // Rest of the robot objects...
];

const searchBox = document.getElementById("searchBox");
const cardContainer = document.getElementById("cardContainer");

function displayCards(robotArray) {
  cardContainer.innerHTML = ""; // Clear the existing cards

  robotArray.forEach((robot) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = robot.image;

    const title = document.createElement("h2");
    title.textContent = robot.name;

    const username = document.createElement("p");
    username.textContent = `Username: ${robot.username}`;

    const email = document.createElement("p");
    email.textContent = `Email: ${robot.email}`;

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(username);
    card.appendChild(email);
    cardContainer.appendChild(card);
  });
}

searchBox.addEventListener("input", () => {
  const searchText = searchBox.value.toLowerCase();
  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchText)
  );
  displayCards(filteredRobots);
});

// Display all robots initially
displayCards(robots);
