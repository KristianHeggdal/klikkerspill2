updateview()
function updateview() {
    model.app.html.innerHTML = /*HTML*/`
<h1>Business Clicker</h1>
<div>${model.data.player.currentPoints}</div>
<div>${printUpgrades()}</div>
`
}
function printUpgrades() {
    let html = `<div class="upgrade-grid">`;
    for (let i = 0; i < model.data.upgrades.length; i++) {
        html += /*HTML*/`
        <div class="upgrades-container">
    <div class="upgrade-item">
    <h3>Cost
    <P> 
    ${model.data.upgrades[i].cost}</p>
    </h3>
    <button>
    <p>${model.data.upgrades[i].name}</p>
    <p>Level: ${model.data.upgrades[i].level}</p>
    </button>
    
    </div>
    <button onclick="upgradeBusiness(${i})">oppgrader</button>
    </div>
    `
    }
    html += `</div>`;
    return html
}
