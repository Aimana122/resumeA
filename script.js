function addTestCookies() {
    document.cookie = "demoCookie1=chocolateChip; path=/";
    document.cookie = "demoCookie2=oatmealRaisin; path=/";
    document.cookie = "demoCookie3=butterCookie; path=/";
    displayCookies();
}

function getCookies() {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ').filter(cookie => cookie.trim() !== '');
    return cookies.map(cookie => {
        const [name, value] = cookie.split('=');
        return { name, value };
    });
}

function displayCookies() {
    const container = document.getElementById('cookieContainer');
    container.innerHTML = ''; // Clear existing cookies

    const cookies = getCookies();

    if (cookies.length === 0) {
        container.innerHTML = '<p style="font-style: italic;">No cookies found. Click "Add Test Cookies" to see an example.</p>';
        return;
    }

    cookies.forEach(cookie => {
        const card = document.createElement('div');
        card.className = 'cookie-card';
        card.innerHTML = `
            <h3>${cookie.name}</h3>
            <p><strong>Value:</strong> ${cookie.value}</p>
            <p><strong>Expires in:</strong> unknown (JS cannot access)</p>
        `;
        container.appendChild(card);
    });
}

document.getElementById('refreshBtn').addEventListener('click', displayCookies);
document.getElementById('addTestCookies').addEventListener('click', addTestCookies);

// Initial display
displayCookies();
