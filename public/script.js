const button = document.getElementById('luckyBtn');
const resultDiv = document.getElementById('result');
const errorDiv = document.getElementById('error');

button.addEventListener('click', async () => {
    resultDiv.textContent = '';
    errorDiv.textContent = '';
    try {
        const response = await fetch('/api/lucky');

        if (!response.ok) {
        throw new Error('Något gick fel med API-anropet');
        }

        const data = await response.json();

        resultDiv.innerHTML = `
        <h2>Ditt lyckotal är: ${data.number}</h2>
        <p>Intervall: ${data.min}–${data.max}</p>
        <p>Lycka levererad: ${data.timestamp}</p>
        `;
    } catch (error) {
        resultDiv.textContent = '';
        errorDiv.textContent = 'Kunde inte hämta lyckotal. Försök igen!';
    }
    });
