document.getElementById('fetchUser').addEventListener('click', fetchUserData);

async function fetchUserData() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        console.log(data); // Log the response to check the data structure
        displayUserData(data.results[0]); // Call the function to display user data
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('displayUser').innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

function displayUserData(user) {
    const displayUser = document.getElementById('displayUser');

    // Extracting user details
    const name = `${user.name.first} ${user.name.last}`;
    const email = user.email;
    const picture = user.picture.large;

    // Creating user display content
    displayUser.innerHTML = `
        <img src="${picture}" alt="${name}">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
    `;
}
