const countEl = document.getElementById('count-el')
const incrementBtn = document.getElementById('increment-btn')
const saveBtn = document.getElementById('save-btn')
const previousEntries = document.getElementById('previous-entries')
const totalEntries = document.getElementById('total-entries')

let count = 0
let total = 0
incrementBtn.addEventListener('click', function() {
    count += 1
    countEl.textContent = count
})
saveBtn.addEventListener('click', function() {
    previousEntries.textContent += count + " - "
    total += count
    totalEntries.textContent = total
    count = 0
    countEl.textContent = 0
})