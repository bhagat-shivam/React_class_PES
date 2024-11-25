document.getElementById("srnForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const srnInput = document.getElementById("srn").value;

    const srnPattern = /^[1-4][A-Z]{2}\d{2}[A-Z]{3}\d{2}$/;

    if (srnPattern.test(srnInput)) {
        alert("SRN is valid.");
    } else {
        alert("Invalid SRN format. Please ensure it matches the required pattern.");
    }
});
