document.addEventListener('DOMContentLoaded', () => {
    function updateResults() {
        const rows = document.querySelectorAll('.data-row');
        const results = {};

        rows.forEach(row => {
            const select = row.querySelector('.option');
            const levelInput = row.querySelector('.level');
            const level = parseInt(levelInput.value) || 0;

            if (select.value && level > 0) {
                const values = select.value.split(';'); // Divideix múltiples valors
                values.forEach(valuePair => {
                    const [value, category] = valuePair.split(':');
                    const contribution = parseFloat(value) * level;
                    if (!results[category]) {
                        results[category] = 0;
                    }
                    results[category] += contribution;
                });
            }
        });

        const resultsTable = document.getElementById('resultsTable').querySelector('tbody');
        resultsTable.innerHTML = '';

        Object.entries(results).forEach(([category, total]) => {
            const row = document.createElement('tr');
            const categoryCell = document.createElement('td');
            const totalCell = document.createElement('td');

            categoryCell.textContent = category;
            totalCell.textContent = total.toFixed(2) + ' %';

            categoryCell.classList.add('resposta');
            totalCell.classList.add('resposta');

            if (total >= 0) {
                totalCell.classList.add('positiu');
            } else {
                totalCell.classList.add('negativa');
            }


            row.appendChild(categoryCell);
            row.appendChild(totalCell);
            resultsTable.appendChild(row);
        });
    }

    // Afegir esdeveniments a inputs i selectors
    const inputs = document.querySelectorAll('.level');
    const selects = document.querySelectorAll('.option');

    inputs.forEach(input => {
        input.addEventListener('input', updateResults);
    });

    selects.forEach(select => {
        select.addEventListener('change', updateResults);
    });

    // Inicialitzar el càlcul per assegurar que els resultats es mostren des del principi
    updateResults();
});