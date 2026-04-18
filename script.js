const wallpapers = [
    { 
        title: "Neon Samurai", 
        url: "anime1.jpg", 
        type: "image", 
        category: "Anime",
        res: "4K UHD"
    },
    { 
        title: "Cyberpunk Rain (Live)", 
        url: "https://assets.mixkit.co/videos/preview/mixkit-cyberpunk-city-landscape-with-neon-lights-42994-large.mp4", 
        type: "video", 
        category: "Live",
        res: "4K 60FPS"
    },
    { 
        title: "Hypercar Drift", 
        url: "car1.jpg", 
        type: "image", 
        category: "Cars",
        res: "8K HDR"
    }
];

function renderGrid(data) {
    const grid = document.getElementById('grid');
    
    if(!data || data.length === 0) {
        grid.innerHTML = '<p style="text-align:center; grid-column:1/-1; color:var(--cyan); font-size:1.5rem; font-family:Orbitron;">NO WALLPAPERS FOUND!</p>';
        return;
    }
    
    let html = '';
    data.forEach(wp => {
        let mediaTag = wp.type === 'video' 
            ? `<video src="${wp.url}" class="card-media" autoplay loop muted playsinline></video>`
            : `<img src="${wp.url}" class="card-media" onerror="this.src='https://via.placeholder.com/300x300/111/ff007f?text=Image+Missing'">`;
            
        let badge = wp.type === 'video' || wp.category === 'Live' ? `<span class="live-badge">LIVE</span>` : '';

        html += `
        <div class="card">
            ${badge}
            ${mediaTag}
            <div class="card-info">
                <h3 class="card-title">${wp.title}</h3>
                <div class="details-row">
                    <span>${wp.category}</span>
                    <span class="res-badge">${wp.res}</span>
                </div>
                <a href="${wp.url}" class="dl-btn" target="_blank" download>⬇ DOWNLOAD 4K</a>
            </div>
        </div>
        `;
    });
    grid.innerHTML = html;
}

function filterData(cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGrid(cat === 'All' ? wallpapers : wallpapers.filter(w => w.category === cat || (cat === 'Live' && w.type === 'video')));
}

function searchWallpapers() {
    let q = document.getElementById('searchInput').value.toLowerCase();
    renderGrid(wallpapers.filter(w => w.title.toLowerCase().includes(q) || w.category.toLowerCase().includes(q)));
}

// Try-Catch block to prevent whole site from crashing if one comma is missing
try {
    window.onload = () => renderGrid(wallpapers);
} catch(e) {
    console.error("Code Error: ", e);
    document.getElementById('grid').innerHTML = "<p style='color:red; text-align:center;'>Code mein thodi gadbad hai, script.js check karein.</p>";
}
