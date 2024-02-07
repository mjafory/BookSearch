document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('bookSearchForm');
	const searchInput = document.getElementById('searchInput');
	const searchResults = document.getElementById('searchResults');

	form.addEventListener('submit', function (event) {
		event.preventDefault();

		const searchTerm = searchInput.value.trim();
		if (searchTerm !== '') {
			// Call a function to make API request with the search term
			searchBooks(searchTerm);
		}
	});

	function searchBooks(searchTerm) {
		const apiKey = 'AIzaSyCaV_YECHs9l4-7JIv6NtcpuACJU0fFFdQ';
		const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`;

		fetch(apiUrl)
			.then(response => response.json())
			.then(data => {
				// Process the data and update the UI
				displayResults(data.items);
			})
			.catch(error => {
				console.error('Error fetching data:', error);
			});
	}

	function displayResults(books) {
		// Clear previous search results
		searchResults.innerHTML = '';

		// Loop through the books and create HTML elements to display them
		books.forEach(book => {
			const bookCard = document.createElement('div');
			bookCard.classList.add('book-card');

			const title = document.createElement('h3');
			title.textContent = book.volumeInfo.title;
			title.classList.add('book-title'); // Add a class to the title element

			const authors = document.createElement('p');
			authors.textContent = `Authors: ${book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'N/A'}`;
			authors.classList.add('book-authors'); // Add a class to the authors element

			const description = document.createElement('p');
			const truncatedDescription = truncateDescription(book.volumeInfo.description, 200);
			description.textContent = truncatedDescription || 'No description available.';
			description.classList.add('book-description'); // Add a class to the description element

			const urlLink = document.createElement('a');
			urlLink.textContent = 'Read more';
			urlLink.href = book.volumeInfo.infoLink;
			urlLink.target = '_blank'; // Open the link in a new tab
			urlLink.classList.add('book-url'); // Add a class to the urlLink element

			// Helper function to truncate description to a specified number of characters
			function truncateDescription(text, limit) {
				return text && text.length > limit ? text.substring(0, limit) + '...' : text;
			}
			const coverImage = document.createElement('img');
			coverImage.src = book.volumeInfo.imageLinks?.thumbnail || 'no_cover.jpeg'; // Provide a default image if not available
			coverImage.alt = 'Book Cover';
			coverImage.classList.add('book-cover'); // Add a class to the coverImage element

			const rating = document.createElement('p');
			const ratingValue = book.volumeInfo.averageRating || 'N/A';
			rating.innerHTML = ` ${getStarIcons(ratingValue)}`;
			rating.classList.add('book-rating'); // Add a class to the rating element

			function getStarIcons(rating) {
				const maxStars = 5;
				const roundedRating = Math.round(rating);

				let stars = '';
				for (let i = 0; i < maxStars; i++) {
					if (i < roundedRating) {
						stars += '<i class="fas fa-star"></i>'; // Full star
					} else {
						stars += '<i class="far fa-star"></i>'; // Empty star
					}
				}

				return stars;
			}


			bookCard.appendChild(coverImage);
			bookCard.appendChild(title);
			bookCard.appendChild(authors);
			bookCard.appendChild(description);
			bookCard.appendChild(rating);
			bookCard.appendChild(urlLink);

			searchResults.appendChild(bookCard);
		});
	}

});
