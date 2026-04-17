// Ye aapke wallpapers ki list hai. Isme aap jitne chahein badha sakte hain.
const wallpapers = [
    { title: 'Neon Anime Hero', image: 'anime1.jpg', category: 'Anime', res: '4K', type: 'Static' },
    { title: 'Supercar Night', image: 'car1.jpg', category: 'Cars', res: '4K', type: 'Static' }
];

function loadWallpapers(filterCategory = 'All') {
    const grid = document.getElementById('mainGrid');
    grid.innerHTML = ''; // Pehle grid khali karo

    // Category ke hisab se filter karna
    const filteredWp = filterCategory === 'All' ? wallpapers : wallpapers.filter(wp => wp.category === filterCategory);

    filteredWp.forEach(wp => {
        const card = document.createElement('div');
        card.classList.add('wp-card');

        // Yahan download button mein asli link daal diya gaya hai
        card.innerHTML = `
            <div class="wp-card-img">
                <img src="${wp.image}" alt="${wp.title}" style="width:100%; height:100%; object-fit:cover;">
            </div>
            <div class="wp-card-details">
                <h3>${wp.title}</h3>
                <div class="wp-info">
                    <span>${wp.category}</span>
                    <span>${wp.res} ${wp.type}</span>
                </div>
                <a href="${wp.image}" download="${wp.title}.jpg" target="_blank" style="text-decoration:none;">
                    <button style="width: 100%; background: var(--neon-blue); color: var(--bg-dark); padding: 0.7rem; border-radius: 4px; font-weight: bold; cursor: pointer;">
                        Download 4K
                    </button>
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Page load hone par sab dikhaye
window.onload = () => loadWallpapers('All');
