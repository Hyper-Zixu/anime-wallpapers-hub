function loadWallpapers() {
    const grid = document.getElementById('mainGrid');

    // Sample data to check if grid is working
    const wallpapers = [
        { title: 'Neo-Tokyo Night Rain', category: 'Anime', res: '4K', type: 'Static' },
        { title: 'Futuristic Hypercar Drive', category: 'Cars', res: '4K', type: 'Live' },
        { title: 'Cyberpunk Cityscape', category: 'Abstract', res: '4K', type: 'Static' }
    ];

    grid.innerHTML = '';

    wallpapers.forEach(wp => {
        const card = document.createElement('div');
        card.classList.add('wp-card');

        card.innerHTML = `
            <div class="wp-card-img">
                <span>Image Placeholder</span>
            </div>
            <div class="wp-card-details">
                <h3>${wp.title}</h3>
                <div class="wp-info">
                    <span>${wp.category}</span>
                    <span>${wp.res} ${wp.type}</span>
                </div>
                <button>Download</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

window.onload = loadWallpapers;
