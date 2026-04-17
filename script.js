// Yahan maine asli internet links daale hain taaki website khali na dikhe!
const wallpapers = [
    { title: "Neon Tokyo Rain", url: "https://images.unsplash.com/photo-1542931287-023b922fa89b?q=80&w=1000&auto=format&fit=crop", category: "Anime", tags: "Aesthetic, City" },
    { title: "Cyberpunk GTR", url: "https://images.unsplash.com/photo-1559831638-4e89793165bd?q=80&w=1000&auto=format&fit=crop", category: "Cars", tags: "Nissan, Neon" },
    { title: "Samurai Shadows", url: "https://images.unsplash.com/photo-1614680376593-902f74a61159?q=80&w=1000&auto=format&fit=crop", category: "Anime", tags: "Dark, Blade" },
    { title: "Midnight Supercar", url: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=1000&auto=format&fit=crop", category: "Cars", tags: "Speed, Hyper" }
];

function renderGrid(data) {
    const grid = document.getElementById('wallpaperGrid');
    grid.innerHTML = '';
    
    if(data.length === 0) {
        grid.innerHTML = '<h3 style="color:var(--cyber-pink); grid-column: 1/-1; text-align:center;">No wallpapers found!</h3>';
        return;
    }

    data.forEach(wp => {
        grid.innerHTML += `
            <div class="card">
                <img src="${wp.url}" class="card-img" alt="${wp.title}">
                <div class="card-content">
                    <h3 class="card-title">${wp.title}</h3>
                    <p class="card-tags">${wp.category} • ${wp.tags}</p>
                    <a href="${wp.url}" class="download-btn" target="_blank" download>↓ Download 4K</a>
                </div>
            </div>
        `;
    });
}

function filterCategory(cat, btnElement) {
    // Button styling change karna
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    
    // Asli filter logic
    if(cat === 'All') {
        renderGrid(wallpapers);
    } else {
        renderGrid(wallpapers.filter(wp => wp.category === cat));
    }
}

function searchWallpapers() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = wallpapers.filter(wp => 
        wp.title.toLowerCase().includes(query) || 
        wp.tags.toLowerCase().includes(query) || 
        wp.category.toLowerCase().includes(query)
    );
    renderGrid(filtered);
}

// Page load hone par sabse pehle grid dikhaye
window.onload = () => renderGrid(wallpapers);
