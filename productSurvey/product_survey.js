function submitFeedback() {
    // 1. Fetch form values
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    // 2. Populate display elements
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    // 3. Display user info container
    document.getElementById('userInfo').style.display = 'block';

    // 4. Alert message
    alert('Thank you for your valuable feedback');
}

// Attach click event listener to the submit button
const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

// Allow form submission via 'Enter' key press
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});