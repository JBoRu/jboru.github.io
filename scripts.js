function toggle_vis(id) {
    var e = document.getElementById(id);
    if (e.style.display === 'none') {
        e.style.display = 'block';
    } else {
        e.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const newsList = document.getElementById('news-list');

    // Example function to add more news items
    function loadMoreNews() {
        const moreNews = [
            "[2024-12-20] Completed a successful project with XYZ.",
            "[2024-11-05] Attended the DEF Workshop.",
            // Add more historical news items
        ];

        moreNews.forEach(news => {
            const li = document.createElement('li');
            li.innerHTML = news;
            newsList.appendChild(li);
        });
    }
    
    // Call the function to load more news items
    loadMoreNews();
});
