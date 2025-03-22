let formCompleted = false; // Tracks if the form is fully completed

document.getElementById("mcqForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh
    
    let fields = ["question1", "question2", "question3", "question4"];
    let allAnswered = true;

    fields.forEach(id => {
        let field = document.getElementById(id);
        if (field.value === "") {
            field.classList.add("incorrect"); // Turns red if empty
            field.classList.remove("correct");
            allAnswered = false;
        } else {
            field.classList.add("correct"); // Turns green if answered
            field.classList.remove("incorrect");
        }
    });

    if (!allAnswered) {
        alert("All questions must be answered!");
        return;
    }

    // Form completed successfully
    formCompleted = true;

    // Display selected answers
    document.getElementById("output").innerHTML = 
        `<strong>Favorite Color:</strong> ${document.getElementById("question1").value} <br>
         <strong>Favorite Season:</strong> ${document.getElementById("question2").value} <br>
         <strong>Preferred Transport:</strong> ${document.getElementById("question3").value} <br>
         <strong>Favorite Music:</strong> ${document.getElementById("question4").value}`;
    
    // Show thank you message
    document.getElementById("thankYouMessage").style.display = "block";
});

// Function to fetch a Chuck Norris joke
async function fetchJoke() {
    if (!formCompleted) {
        document.getElementById("chuckJoke").innerHTML = "❌ Complete the form, and then ask for a joke.";
        document.getElementById("chuckJoke").style.display = "block";
        return;
    }

    try {
        let response = await fetch("https://api.chucknorris.io/jokes/random");
        let data = await response.json();
        
        // Display the joke
        document.getElementById("chuckJoke").innerHTML = `😂 <strong>Chuck Norris Joke:</strong> ${data.value}`;
        document.getElementById("chuckJoke").style.display = "block";
    } catch (error) {
        console.error("Error fetching joke:", error);
        document.getElementById("chuckJoke").innerHTML = "Failed to load a joke.";
        document.getElementById("chuckJoke").style.display = "block";
    }
}

// Event listener for the joke button (always visible)
document.getElementById("newJokeBtn").addEventListener("click", fetchJoke);