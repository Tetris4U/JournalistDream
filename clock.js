const clock = document.getElementById('clock');

function constClockRunning() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    let ampm = 'AM';

    if (hours >= 12) {
        ampm = 'PM';
        if (hours > 12) {
            hours -= 12; // Convert to 12-hour format
        }
    } else if (hours === 0) {
        hours = 12; // Convert 0 to 12 for midnight
    }

    // Format the hours with a leading zero for single digits
    hours = hours.toString().padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

    // Update the clock with the formatted time string
    clock.textContent = timeString;
    console.log(timeString);

    // Apply styles to the clock element
    clock.style.color = 'pink'; // Set text color to pink
    clock.style.fontWeight = 'bold'; // Set font weight to bold
    clock.style.fontSize = '30px'; // Set font size to 30px
    clock.style.fontFamily = 'Arial, sans-serif'; // Set font family to Arial
    clock.style.textAlign = 'center'; // Center the text alignment
    clock.style.marginTop = '20px'; // Add some margin from the top of the page
}

// Start the clock
setInterval(constClockRunning, 1000);

