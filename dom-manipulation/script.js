document.addEventListener('DOMContentLoaded', () => {
	const quoteDisplay = document.getElementById('quoteDisplay');
	const controls = document.getElementById('controls');
	const newQuoteBtn = document.getElementById('newQuote');

	const quotes = [
		{ text: 'The only way to do great work is to love what you do.', category: 'Motivation' },
		{ text: 'Life is what happens when you’re busy making other plans.', category: 'Life' },
		{ text: 'Be yourself; everyone else is already taken.', category: 'Wisdom' },
		{ text: 'If you tell the truth, you don’t have to remember anything.', category: 'Wisdom' },
		{ text: 'I find that the harder I work, the more luck I seem to have.', category: 'Motivation' },
		{ text: 'I used to think I was indecisive, but now I’m not so sure.', category: 'Humor' }
	];

	function getCategories() {
		const set = new Set(quotes.map(q => q.category.trim()).filter(Boolean));
		return ['All', ...Array.from(set).sort((a, b) => a.localeCompare(b))];
	}

	function renderCategoryFilter() {
		const field = document.createElement('div');
		field.className = 'field';

		const label = document.createElement('label');
		label.htmlFor = 'categorySelect';
		label.textContent = 'Filter by category';

		const select = document.createElement('select');
		select.id = 'categorySelect';
		updateCategoryOptions(select);

		select.addEventListener('change', () => {
			showRandomQuote();
		});

		field.append(label, select);
		return field;
	}

	function updateCategoryOptions(selectEl) {
		const options = getCategories();
		const current = selectEl.value;
		selectEl.innerHTML = '';
		for (const cat of options) {
			const opt = document.createElement('option');
			opt.value = cat;
			opt.textContent = cat;
			selectEl.appendChild(opt);
		}
		if (options.includes(current)) selectEl.value = current;
	}

	function createAddQuoteForm() {
		const wrapper = document.createElement('div');
		wrapper.className = 'field';

		const label = document.createElement('label');
		label.textContent = 'Add a new quote';

		const helper = document.createElement('div');
		helper.className = 'helper';
		helper.textContent = 'Enter quote text and category, then click Add Quote';

		const row = document.createElement('div');
		row.className = 'controls';

		const quoteField = document.createElement('div');
		quoteField.className = 'field';
		const quoteLabel = document.createElement('label');
		quoteLabel.htmlFor = 'newQuoteText';
		quoteLabel.textContent = 'Quote text';
		const quoteInput = document.createElement('input');
		quoteInput.id = 'newQuoteText';
		quoteInput.type = 'text';
		quoteInput.placeholder = 'Enter a new quote';
		quoteField.append(quoteLabel, quoteInput);

		const catField = document.createElement('div');
		catField.className = 'field';
		const catLabel = document.createElement('label');
		catLabel.htmlFor = 'newQuoteCategory';
		catLabel.textContent = 'Category';
		const catInput = document.createElement('input');
		catInput.id = 'newQuoteCategory';
		catInput.type = 'text';
		catInput.placeholder = 'Enter quote category';
		catField.append(catLabel, catInput);

		const addBtn = document.createElement('button');
		addBtn.className = 'primary';
		addBtn.textContent = 'Add Quote';
		addBtn.addEventListener('click', addQuote);

		row.append(quoteField, catField, addBtn);
		wrapper.append(label, helper, row);
		return wrapper;
	}

	function pickRandom(arr) {
		return arr[Math.floor(Math.random() * arr.length)];
	}

	function showRandomQuote() {
		const select = document.getElementById('categorySelect');
		const chosen = select ? select.value : 'All';
		const pool = chosen && chosen !== 'All' ? quotes.filter(q => q.category === chosen) : quotes.slice();

		if (!pool.length) {
			quoteDisplay.textContent = 'No quotes in this category yet — add one below!';
			return;
		}

		const q = pickRandom(pool);
		quoteDisplay.innerHTML = '';
		const p = document.createElement('p');
		p.textContent = `“${q.text}”`;
		const small = document.createElement('div');
		small.className = 'helper';
		small.textContent = `Category: ${q.category}`;
		quoteDisplay.append(p, small);
	}

	function addQuote() {
		const textEl = document.getElementById('newQuoteText');
		const catEl = document.getElementById('newQuoteCategory');
		const text = (textEl?.value || '').trim();
		const category = (catEl?.value || '').trim() || 'Uncategorized';

		if (!text) {
			alert('Please enter a quote.');
			textEl?.focus();
			return;
		}

		quotes.push({ text, category });

		const select = document.getElementById('categorySelect');
		if (select) updateCategoryOptions(select);

		if (textEl) textEl.value = '';
		if (catEl) catEl.value = '';

		showRandomQuote();
	}

	// Expose functions when used with inline handlers if needed
	window.addQuote = addQuote;
	window.showRandomQuote = showRandomQuote;
	window.createAddQuoteForm = createAddQuoteForm;

	// Build UI
	if (controls) {
		controls.append(
			renderCategoryFilter(),
			createAddQuoteForm()
		);
	}

	// Events
	if (newQuoteBtn) newQuoteBtn.addEventListener('click', showRandomQuote);

	// Initial render
	showRandomQuote();
});
