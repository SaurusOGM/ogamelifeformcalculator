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

document.addEventListener('DOMContentLoaded', () => {
    const tablesContainer = document.getElementById('tablesContainer');
    const addTablesBtn = document.getElementById('addTablesBtn');

    // La taula base que s'ha de replicar
    const baseTableHTML = `
        <div class="container">

            <!-- ----------------------------------------------- Taula 1 -------------------------------------------------------------- -->
        <div class="column">
            <table class="taula-generada">
                <thead>
                    <tr>
                        <th>Tier 1 Technologies</th>
                        <th>Level</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="data-row">
                        <td class="tier1">
                            <select class="option">
                                <option value="">Slot 1</option>
                                <option class="human" value="2:LifeForm Exploration Speed">Intergalactic Envoys (2% LifeForm Exploration Speed)</option>
                                <option class="meca" value="0.08:Deuterium Production">Catalyser Technology (0.08% Deuterium Production)</option>
                                <option class="kaelesh" value="-0.03:Deuterium Consumption">Heat Recovery (0.03% Deuterium Consumption)</option>
                                <option class="rock" value="0.25:Energy Production">Volcanic Batteries (0.25% Energy Production)</option>
                            </select>
                        </td>
                        <td class="level1">
                            <input type="number" class="level" min="0" max="99" value="0">
                        </td>
                    </tr>
                    <tr class="data-row">
                        <td class="tier1">
                            <select class="option">
                                <option value="">Slot 2</option>
                                <option class="human" value="0.06:Metal Production;0.06:Crystal Production;0.06:Deuterium Production">High-Performance Extractors (0.06 Metal Production)(0.06 Crystal Production)(0.06 Deuterium Production)</option>
                                <option class="meca" value="0.2:All Ships Speed">Plasma Drive (0.2% All Ships Speed)</option>
                                <option class="kaelesh" value="0.08:Deuterium Production">Sulphide Process (0.08% Deuterium Production)</option>
                                <option class="rock" value="0.08:Crystal Production">Acoustic Scanning (0.08% Crystal Production)</option>
                            </select>
                        </td>
                        <td class="level1">
                            <input type="number" class="level" min="0" max="99" value="0">
                        </td>
                    </tr>
                    <tr class="data-row">
                        <td class="tier1">
                            <select class="option">
                                <option value="">Slot 3</option>
                                <option class="human" value="0.5:Civilian Ship Speed">Fusion Drives (0.5% Civilian Ship Speed)</option>
                                <option class="meca" value="-0.03:Deuterium Consumption">Efficiency Module (0.03% Deuterium Consumption)</option>
                                <option class="kaelesh" value="-0.05:Lose Ships On Expeditions">Psionic Network (0.05% Lose Ships On Expeditions)</option>
                                <option class="rock" value="0.08:Deuterium Production">High Energy Pump Systems (0.08% Deuterium Production)</option>
                            </select>
                        </td>
                        <td class="level1">
                            <input type="number" class="level" min="0" max="99" value="0">
                        </td>
                    </tr>
                    <tr class="data-row">
                        <td class="tier1">
                            <select class="option">
                                <option value="">Slot 4</option>
                                <option class="human" value="-0.1:Cost Spy Technology;-0.2:Duration Spy Technology Research">Stealth Field Generator (0.1% Cost Spy Technology) (0.2% Duration Spy Technology Research)</option>
                                <option class="meca" value="-0.1:Cost Alliance Depot;-0.2:Duration Alliance Depot Construction">Depot AI (-0.1% Cost Alliance Depot) (-0.2% Duration Alliance Depot Construction)</option>
                                <option class="kaelesh" value="0.2:Ships Found On Expedition">Telekinetic Tractor Beam (0.2% Ships Found On Expedition)</option>
                                <option class="rock" value="0.4:Cargo Capacity Civilian Ships">Cargo Hold Expansion (0.4% Cargo Capacity Civilian Ships)</option>
                            </select>
                        </td>
                        <td class="level1">
                            <input type="number" class="level" min="0" max="99" value="0">
                        </td>
                    </tr>
                    <tr class="data-row">
                        <td class="tier1">
                            <select class="option">
                                <option value="">Slot 5</option>
                                <option class="human" value="0.2:Resources Proteccion">Orbital Den (0.2% Resources Proteccion)</option>
                                <option class="meca" value="0.3:Overall Light Fighter Improvement">General Overhaul Light Fighter (0.3% Overall Light Fighter Improvement)</option>
                                <option class="kaelesh" value="0.2:Resources Found On Expeditions">Enhanced Sensor Technology (0.2% Resources Found On Expeditions)</option>
                                <option class="rock" value="0.08:Metal Production;0.08:Crystal Production;0.08:Deuterium Production">Magma-Powered Production (0.08 Metal Production)(0.08 Crystal Production)(0.08 Deuterium Production)</option>
                            </select>
                        </td>
                        <td class="level1">
                            <input type="number" class="level" min="0" max="99" value="0">
                        </td>
                    </tr>
                    <tr class="data-row">
                        <td class="tier1">
                            <select class="option">
                                <option value="">Slot 6</option>
                                <option class="human" value="0.1:Research Time">Research AI (0.1% Research Time)</option>
                                <option class="meca" value="0.06:Metal Production;0.06:Crystal Production;0.06:Deuterium Production">Automated Transport Lines (0.06 Metal Production)(0.06 Crystal Production)(0.06 Deuterium Production)</option>
                                <option class="kaelesh" value="0.4:Cargo Capacity Civilian Ships">Neuromodal Compressor (0.4% Cargo Capacity Civilian Ships)</option>
                                <option class="rock" value="0.25:Energy Production">Geothermal Power Plants (0.25% Energy Production)</option>
                            </select>
                        </td>
                        <td class="level1">
                            <input type="number" class="level" min="0" max="99" value="0">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
            <!-- ----------------------------------------------- Taula 2 -------------------------------------------------------------- -->
        <div class="column">   
            <table class="taula-generada">
                <thead>
                    <tr>
                        <th>Tier 2 Technologies</th>
                        <th>Level</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="data-row">
                        <td class="tier2">
                            <select class="option">
                                <option value="">Slot 1</option>
                                <option class="human" value="-0.1:Cost Terraformer;-0.2:Duration Terraformer Construction">High-Performance Terraformer (-0.1% Cost Terraformer) (-0.2% Duration Terraformer Construction)</option>
                                <option class="meca" value="-0.1:Cost Spy Tech;-0.2:Duration Spy Tech">Improved Drone AI (-0.1% Cost Spy Tech) (-0.2% Duration Spy Tech)</option>
                                <option class="kaelesh" value="-0.1:Research Time">Neuro-Interface (-0.1 Research Time)</option>
                                <option class="rock" value="0.08:Metal Production">Depth Sounding (0.08 Metal Production)</option>
                            </select>
                        </td>
                        <td class="level1">
                            <input type="number" class="level" min="0" max="99" value="0">
                        </td>
                    </tr>
                    <tr class="data-row">
                        <td class="tier2">
                            <select class="option">
                                <option value="">Slot 2</option>
                                <option class="human" value="0.06:Metal Production;0.06:Crystal Production;0.06:Deuterium Production">Enhanced Production Technologies (0.06 Metal Production)(0.06 Crystal Production)(0.06 Deuterium Production)</option>
                                <option class="meca" value="1:Overall Recycler Improvement">Experimental Recycling Technology (1% Overall Recycler Improvement)</option>
                                <option class="kaelesh" value="0.6:Phalanx Range">Interplanetary Analysis Network (0.6 Phalanx Range)</option>
                                <option class="rock" value="0.3:Overall Heavy Fighter Improvement">Ion Crystal Enhancement (Heavy Fighter) (0.3 Overall Heavy Fighter Improvement)</option>
                            </select>
                        </td>
                        <td class="level1">
                            <input type="number" class="level" min="0" max="99" value="0">
                        </td>
                    </tr>
                    <tr class="data-row">
                        <td class="tier2">
                            <select class="option">
                                <option value="">Slot 3</option>
                                <option class="human" value="0.3:Overall Light Fighter Improvement">Light Fighter Mk II (0.3 Overall Light Fighter Improvement)</option>
                                <option class="meca" value="0.3:Overall Cruiser Improvement">General Overhaul (Cruiser) (0.3 Overall Cruiser Improvement)</option>
                                <option class="kaelesh" value="0.3:Overall Heavy Fighter Improvement">Overclocking (Heavy Fighter) (0.3 Overall Heavy Fighter Improvement)</option>
                                <option class="rock" value="-0.15:Cost Plasma Tech;-0.3:Duration Plasma Tech">Improved Stellarator (-0.15% Cost Plasma Tech) (-0.3% Duration Plasma Tech)</option>
                            </select>
                        </td>
                        <td class="level1">
                            <input type="number" class="level" min="0" max="99" value="0">
                        </td>
                    </tr>
                    <tr class="data-row">
                        <td class="tier2">
                            <select class="option">
                                <option value="">Slot 4</option>
                                <option class="human" value="0.3:Overall Cruiser Improvement">Cruiser Mk II (0.3 Overall Cruiser Improvement)</option>
                                <option class="meca" value="0.15:Deuterium Reclaimed">Slingshot Autopilot (0.15 Deuterium Reclaimed)</option>
                                <option class="kaelesh" value="0.1:Expedition Fleet Speed">Telekinetic Drive (0.1 Expedition Fleet Speed)</option>
                                <option class="rock" value="0.08:Metal Production">Hardened Diamond Drill Heads (0.08 Metal Production)</option>
                            </select>
                        </td>
                        <td class="level1">
                            <input type="number" class="level" min="0" max="99" value="0">
                        </td>
                    </tr>
                    <tr class="data-row">
                        <td class="tier2">
                            <select class="option">
                                <option value="">Slot 5</option>
                                <option class="human" value="-0.1:Research Time">Improved Lab Technology (-0.1 Research Time)</option>
                                <option class="meca" value="-0.1:Cost Energy Tech;-0.2:Duration Energy Tech">High-Temperature Superconductors (-0.1% Cost Energy Tech) (-0.2% Duration Energy Tech)</option>
                                <option class="kaelesh" value="0.2:Resources Found On Expeditions">Sixth Sense (0.2% Resources Found On Expeditions)</option>
                                <option class="rock" value="0.08:Crystal Production">Seismic Mining Technology (0.08 Crystal Production)</option>
                            </select>
                        </td>
                        <td class="level1">
                            <input type="number" class="level" min="0" max="99" value="0">
                        </td>
                    </tr>
                    <tr class="data-row">
                        <td class="tier2">
                            <select class="option">
                                <option value="">Slot 6</option>
                                <option class="human" value="-0.1:Cost Terraformer;-0.2:Duration Terraformer">Plasma Terraformer (-0.1% Cost Terraformer) (-0.2% Duration Terraformer)</option>
                                <option class="meca" value="0.3:Overall Battleship Improvement">General Overhaul (Battleship) (0.3 Overall Battleship Improvement)</option>
                                <option class="kaelesh" value="0.06:Metal Production;0.06:Crystal Production;0.06:Deuterium Production">Psychoharmoniser (0.06 Metal Production)(0.06 Crystal Production)(0.06 Deuterium Production)</option>
                                <option class="rock" value="0.08:Deuterium Production">Magma-Powered Pump Systems (0.08 Deuterium Production)</option>
                            </select>
                        </td>
                        <td class="level1">
                            <input type="number" class="level" min="0" max="99" value="0">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
            <!-- ----------------------------------------------- Taula 3 -------------------------------------------------------------- -->
        <div class="column">
            <table class="taula-generada">
                <thead>
                    <tr>
                        <th>Tier 3 Technologies</th>
                        <th>Level</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="data-row">
                        <td class="tier3">
                            <select class="option">
                                <option value="">Slot 1</option>
                                <option class="human" value="-0.1:Cost Spy Tech;-0.2:Duration Spy Tech">Low-Temperature Drives (-0.1% Cost Spy Tech) (-0.2% Duration Spy Tech)</option>
                                <option class="meca" value="0.06:Metal Production;0.06:Crystal Production;0.06:Deuterium Production">Artificial Swarm Intelligence (0.06 Metal Production)(0.06 Crystal Production)(0.06 Deuterium Production)</option>
                                <option class="kaelesh" value="-0.1:Research Time">Efficient Swarm Intelligence (-0.1 Research Time)</option>
                                <option class="rock" value="0.1:Crawler Production;-0.1:Crawler Energy Consumption">Ion Crystal Modules (0.1% Crawler Production) (-0.1% Crawler Energy Consumption)</option>
                            </select>
                        </td>
                        <td class="level1">
                            <input type="number" class="level" min="0" max="99" value="0">
                        </td>
                    </tr>
                    <tr class="data-row">
                        <td class="tier3">
                            <select class="option">
                                <option value="">Slot 2</option>
                                <option class="human" value="0.3:Overall Bomber Improvement">Bomber Mk II (0.3 Overall Bomber Improvement)</option>
                                <option class="meca" value="0.3:Overall Battlecruiser Improvement">General Overhaul (Battlecruiser) (0.3 Overall Battlecruiser Improvement)</option>
                                <option class="kaelesh" value="0.3:Overall Large Cargo Improvement">Overclocking (Large Cargo) (0.3 Overall Large Cargo Improvement)</option>
                                <option class="rock" value="-0.1:Cost Silo;-0.2:Duration Silo Construction">Optimised Silo Construction Method (-0.1% Cost Silo) (-0.2% Duration Silo Construction)</option>
                            </select>
                        </td>
                        <td class="level1">
                            <input type="number" class="level" min="0" max="99" value="0">
                        </td>
                    </tr>
                    <tr class="data-row">
                        <td class="tier3">
                            <select class="option">
                                <option value="">Slot 3</option>
                                <option class="human" value="0.3:Overall Destroyer Improvement">Destroyer Mk II (0.3 Overall Destroyer Improvement)</option>
                                <option class="meca" value="0.3:Overall Bomber Improvement">General Overhaul (Bomber) (0.3 Overall Bomber Improvement)</option>
                                <option class="kaelesh" value="0.1:Dark Matter Found On Expedition">Gravitation Sensors (0.1 Dark Matter Found On Expedition)</option>
                                <option class="rock" value="-0.1:Cost Energy Tech;-0.2:Duration Energy Tech">Diamond Energy Transmitter (-0.1% Cost Energy Tech) (-0.2% Duration Energy Tech)</option>
                            </select>
                        </td>
                        <td class="level1">
                            <input type="number" class="level" min="0" max="99" value="0">
                        </td>
                    </tr>
                    <tr class="data-row">
                        <td class="tier3">
                            <select class="option">
                                <option value="">Slot 4</option>
                                <option class="human" value="0.3:Overall Battlecruiser Improvement">Battlecruiser Mk II (0.3 Overall Battlecruiser Improvement)</option>
                                <option class="meca" value="0.3:Overall Destroyer Improvement">General Overhaul (Destroyer) (0.3 Overall Destroyer Improvement)</option>
                                <option class="kaelesh" value="0.3:Overall Battleship Improvement">Overclocking (Battleship) (0.3 Overall Battleship Improvement)</option>
                                <option class="rock" value="0.3:Overall Defenses Improvement">Obsidian Shield Reinforcement (0.3 Overall Defenses Improvement)</option>
                            </select>
                        </td>
                        <td class="level1">
                            <input type="number" class="level" min="0" max="99" value="0">
                        </td>
                    </tr>
                    <tr class="data-row">
                        <td class="tier3">
                            <select class="option">
                                <option value="">Slot 5</option>
                                <option class="human" value="-0.2:Research Time">Robot Assistants (-0.2 Research Time)</option>
                                <option class="meca" value="-0.2:Cost Military Tech;-0.2:Duration Military Tech">Experimental Weapons Technology (-0.2% Cost Military Tech) (-0.2% Duration Military Tech)</option>
                                <option class="kaelesh" value="-0.2:Cost Shield Tech;-0.2:Duration Shield Tech">Psionic Shield Matrix (-0.2% Cost Shield Tech) (-0.2% Duration Shield Tech)</option>
                                <option class="rock" value="-0.2:Cost Armour Tech;-0.2:Duration Armour Tech">Rune Shields (-0.2% Cost Armour Tech) (-0.2% Duration Armour Tech)</option>
                            </select>
                        </td>
                        <td class="level1">
                            <input type="number" class="level" min="0" max="99" value="0">
                        </td>
                    </tr>
                    <tr class="data-row">
                        <td class="tier3">
                            <select class="option">
                                <option value="">Slot 6</option>
                                <option class="human" value="-0.3:Research Time">Supercomputer (-0.3 Research Time)</option>
                                <option class="meca" value="0.2:General Class Bonus">Mechan General Enhancement (0.2 General Class Bonus)</option>
                                <option class="kaelesh" value="0.2:Explorer Class Bonus">Kaelesh Discoverer Enhancement (0.2 Explorer Class Bonus)</option>
                                <option class="rock" value="0.2:Collector Class Bonus">Rock’tal Collector Enhancement (0.2 Collector Class Bonus)</option>
                            </select>
                        </td>
                        <td class="level1">
                            <input type="number" class="level" min="0" max="99" value="0">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `;

    // Afegeix una nova taula cada vegada que es prem el botó
    addTablesBtn.addEventListener('click', () => {
        tablesContainer.innerHTML += baseTableHTML;
    });

    // Delegació d'esdeveniments per escoltar selects i inputs
    document.addEventListener('input', (event) => {
           if (event.target.classList.contains('level')) {
                updateResults();
            }
        });
    
        document.addEventListener('change', (event) => {
            if (event.target.classList.contains('option')) {
                updateResults();
            }
        });
    
        // Funció existent que calcula els resultats
        function updateResults() {
            const rows = document.querySelectorAll('.data-row');
            const results = {};
    
            rows.forEach(row => {
                const select = row.querySelector('.option');
                const levelInput = row.querySelector('.level');
                const level = parseInt(levelInput.value) || 0;
    
                if (select.value && level > 0) {
                    const values = select.value.split(';');
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
    
        // Inicialitzar els resultats inicials
        updateResults();
});
