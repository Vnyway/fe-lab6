const fetchAndDisplayUsers = async (count) => {
  const usersDiv = document.getElementById("users");

  for (let i = 0; i < count; i++) {
    try {
      const res = await fetch("https://randomuser.me/api");
      if (!res.ok) {
        throw new Error(`Failed to fetch user: ${res.status}`);
      }

      const data = await res.json();

      const userDiv = document.createElement("div");
      userDiv.classList.add("user-card");

      userDiv.innerHTML = `
        <img src="${data.results[0].picture.large}" />
        <p><strong>ZIP:</strong> ${data.results[0].location.postcode}</p>
        <p><strong>Coordinates:</strong> ${data.results[0].location.coordinates.latitude}; ${data.results[0].location.coordinates.longitude}</p>
        <p><strong>Email:</strong> ${data.results[0].email}</p>
        <p><strong>City:</strong> ${data.results[0].location.city}</p>`;

      usersDiv.appendChild(userDiv);
    } catch (error) {
      console.error("Error fetching user:", error);
      const errorDiv = document.createElement("div");
      errorDiv.textContent = "Failed to load user. Please try again.";
      errorDiv.style.color = "red";
      usersDiv.appendChild(errorDiv);
    }
  }
};
