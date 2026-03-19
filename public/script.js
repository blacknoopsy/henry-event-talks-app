document.addEventListener('DOMContentLoaded', () => {
    const scheduleContainer = document.getElementById('schedule-container');
    const categorySearch = document.getElementById('categorySearch');
    let allTalks = [];

    // Fetch talks from the API
    fetch('/api/talks')
        .then(response => response.json())
        .then(data => {
            allTalks = data;
            renderSchedule(allTalks);
        })
        .catch(err => {
            console.error('Error fetching talks:', err);
            scheduleContainer.innerHTML = '<p>Error loading schedule. Please try again later.</p>';
        });

    // Filtering logic
    categorySearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredTalks = allTalks.filter(talk => 
            talk.categories.some(category => category.toLowerCase().includes(searchTerm))
        );
        renderSchedule(filteredTalks, searchTerm !== "");
    });

    function renderSchedule(talks, isFiltering = false) {
        scheduleContainer.innerHTML = '';

        if (talks.length === 0) {
            scheduleContainer.innerHTML = '<p style="text-align: center;">No talks found for this category.</p>';
            return;
        }

        // We insert lunch break in the correct position if not filtering
        // If filtering, we just show the talks that match
        talks.forEach((talk, index) => {
            // Check if we should insert lunch break (after Talk 3, which is 13:20)
            // In the original data, Talk 3 is index 2.
            // When filtering, we might not want to show lunch break unless it matches?
            // Actually, the requirement says "the users should be able to search the talks based on category."
            // So if searching, we only show matching talks. If not, show full schedule including lunch.
            
            if (!isFiltering && talk.id === 4) {
                const lunchDiv = document.createElement('div');
                lunchDiv.className = 'schedule-item lunch';
                lunchDiv.innerHTML = `
                    <span class="time">13:20 PM - 14:20 PM</span>
                    <div class="title">Lunch Break 🍱</div>
                `;
                scheduleContainer.appendChild(lunchDiv);
            }

            const talkDiv = document.createElement('div');
            talkDiv.className = 'schedule-item';
            
            const categoriesHtml = talk.categories
                .map(cat => `<span class="category-tag">${cat}</span>`)
                .join('');

            talkDiv.innerHTML = `
                <span class="time">${talk.startTime} - ${talk.endTime} (${talk.duration})</span>
                <h2 class="title">${talk.title}</h2>
                <div class="speakers">Speakers: ${talk.speakers.join(', ')}</div>
                <div class="categories">${categoriesHtml}</div>
                <p class="description">${talk.description}</p>
            `;
            
            scheduleContainer.appendChild(talkDiv);
        });
    }
});
