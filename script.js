const contractForm = document.getElementById('contractForm');

contractForm.addEventListener('input', () => {
    const amount = parseFloat(document.getElementById('amount').value) || 0;
    const discount = parseFloat(document.getElementById('discount').value) || 0;

    const finalAmount = amount - (amount * (discount / 100));
    document.getElementById('finalAmount').value = finalAmount.toFixed(2);
});

contractForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contractType = document.getElementById('contractType').value;

    if (name && email && contractType) {
        document.getElementById('contractMessage').textContent = "Contract submitted successfully!";
        document.getElementById('contractMessage').style.color = "green";
    } else {
        document.getElementById('contractMessage').textContent = "Please fill in all required fields!";
        document.getElementById('contractMessage').style.color = "red";
    }
});
