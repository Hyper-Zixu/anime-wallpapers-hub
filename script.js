// Yahan dhyan se dekho, maine 'type' add kar diya hai (image ya video)
const wallpapers = [
    { 
        title: "Goku Ultra Instinct", 
        url: "anime1.jpg", 
        type: "image", // Ye photo hai
        category: "Anime",
        res: "4K UHD",
        size: "3.2 MB"
    },
    { 
        title: "Zoro Swordsman", 
        url: "anime2.jpg", 
        type: "image", // Ye bhi photo hai
        category: "Anime",
        res: "4K UHD",
        size: "2.8 MB"
    },
    // 🔥 LIVE WALLPAPER EXAMPLE 🔥
    { 
        title: "Cyberpunk City Rain", 
        url: "https://assets.mixkit.co/videos/preview/mixkit-cyberpunk-city-landscape-with-neon-lights-42994-large.mp4", // Ye ek sample 4k video hai
        type: "video", // Ye VIDEO hai
        category: "Live",
        res: "4K 60FPS",
        size: "15.4 MB"
    },
    { 
        title: "Hypercar Night Drive", 
        url: "https://images.unsplash.com/photo-1559831638-4e89793165bd?q=80&w=1000", 
        type: "image", 
        category: "Cars",
        res: "8K HDR",
        size: "5.1 MB"
    }
];

function toggleProfile() {
    const modal = document.getElementById('profileModal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

function renderGrid(data) {
    const grid = document.getElementById('grid');
    if(data.length === 0) {
        grid.innerHTML = '<p style="text-align:center; grid-column:1/-1; color:#00f0ff; font-size:1.5rem; font-family:Orbitron;">NO WALLPAPERS FOUND</p>';
        return;
    }
    
    grid.innerHTML = data.map(wp => {
        // 🔥 MAGIC: Agar video hai toh chalne wala video tag, warna photo tag 🔥
        let mediaTag = wp.type === 'video' 
            ? `<video src="${wp.url}" class="card-img" autoplay loop muted playsinline></video>`
            : `<img src="${wp.url}" class="card-img" onerror="this.src='https://via.placeholder.com/300x400?text=Image+Loading...'">`;

        // Live badge for videos
        let liveBadge = wp.type === 'video' ? `<span style="position:absolute; top:10px; right:10px; background:red; color:white; padding:2px 8px; border-radius:5px; font-weight:bold; font-size:0.8rem; z-index:10; box-shadow:0 0 10px red;">LIVE 🔴</span>` : '';

        return `
        <div class="card" style="position:relative;">
            ${liveBadge}
            ${mediaTag}
            <div class="card-info">
                <h3 class="card-title">${wp.title}</h3>
                <div class="details-row">
                    <span style="color:var(--cyan); font-weight:bold;">${wp.category}</span>
                    <span class="res-badge">${wp.res}</span>
                </div>
                <div class="details-row" style="margin-bottom: 15px;">
                    <span>Size: ${wp.size}</span>
                </div>
                <a href="${wp.url}" class="dl-btn" target="_blank" download="${wp.title}">DOWNLOAD NOW</a>
            </div>
        </div>
        `;
    }).join('');
}

function filterData(cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGrid(cat === 'All' ? wallpapers : wallpapers.filter(w => w.category === cat));
}

function searchWallpapers() {
    let q = document.getElementById('searchInput').value.toLowerCase();
    renderGrid(wallpapers.filter(w => w.title.toLowerCase().includes(q) || w.category.toLowerCase().includes(q)));
}

window.onload = () => renderGrid(wallpapers);

window.onload = () => draw(wallpapers);
