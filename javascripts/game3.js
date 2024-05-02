function allowDrop(event) {
    event.preventDefault();  // This allows the drop to happen
}

function drag(event) {
    event.dataTransfer.setData("text/plain", event.target.id);  // Ensure you're setting the type correctly
}

function drop(event) {
    event.preventDefault();  // Prevent the default behavior of the drop
    var foodId = event.dataTransfer.getData("text/plain");  // Ensure you're getting the type correctly
    var food = document.getElementById(foodId);
    var message = '';

    // Ensure that `food` and `food.alt` are accessible
    if (food) {
        switch (food.alt) {
            case 'Apple':
                message = 'Yuck! I hate apples!';
                break;
            case 'Banana':
                message = 'Bananas are okay...';
                break;
            case 'Pizza':
                message = 'Yummy! I love pizza!';
                break;
            default:
                message = 'What is this?';
        }
    } else {
        message = 'Oops! Something went wrong.';
    }

    document.getElementById('message').textContent = message;  // Display the message
}

// Attach the event listeners for dragstart
document.querySelectorAll('.food').forEach(item => {
    item.id = item.alt.toLowerCase();  // Assign an ID based on the alt attribute if not already set
    item.addEventListener('dragstart', drag);
});
