// Handle the "Save" button click to save feelings and redirect with the data as a query parameter
const submit = document.getElementById("submit");
submit.onclick = function() {
    const feelings = document.getElementById("feel").value;
    if (feelings) {
        // Redirect to the history page with the feelings as a query parameter
        window.location.replace("history.html?feelings=" + encodeURIComponent(feelings));
    } else {
        alert("Please enter your feelings before saving.");
    }
};
