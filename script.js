const wallpapers = [
    { 
        title: "Anime Hero 1", 
        url: "anime1.jpg", 
        category: "Anime" 
    },
    { 
        title: "Anime Hero 2", 
        url: "anime2.jpg", 
        category: "Anime" 
    }
];

function draw(data) {
    const grid = document.getElementById('wallpaperGrid');
    grid.innerHTML = data.map(w => `
        <div class="wall-card">
            <img src="${w.url}" class="wall-thumb" onerror="this.src='https://via.placeholder.com/300x500?text=Image+Not+Found'">
            <div class="wall-info">
                <h4>${w.title}</h4>
                <a href="${w.url}" class="btn-dl" target="_blank" download>DOWNLOAD 4K</a>
            </div>
        </div>
    `).join('');
}

function filterCategory(cat, el) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    draw(cat === 'All' ? wallpapers : wallpapers.filter(w => w.category === cat));
}

function searchWallpapers() {
    let q = document.getElementById('searchInput').value.toLowerCase();
    draw(wallpapers.filter(w => w.title.toLowerCase().includes(q)));
}

window.onload = () => draw(wallpapers);
