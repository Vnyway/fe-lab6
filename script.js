async function fetchUsers() {
  const promises = Array(5)
    .fill(null)
    .map(() => fetch("https://randomuser.me/api").then((res) => res.json()));

  const results = await Promise.all(promises);
  results.forEach((data, index) => {
    console.log(`Request ${index + 1}:`, data);
  });
}
