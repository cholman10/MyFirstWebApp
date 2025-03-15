document.getElementById("mcqForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    
    let q1 = document.getElementById("question1").value;
    let q2 = document.getElementById("question2").value;
    let q3 = document.getElementById("question3").value;
    let q4 = document.getElementById("question4").value;
    
    if(q1 === "" || q2 === "" || q3 === "" || q4 === "") {
        alert("All questions must be answered!");
        return;
    }
    
    document.getElementById("output").innerHTML = 
        `<strong>Favorite Color:</strong> ${q1} <br>
         <strong>Favorite Season:</strong> ${q2} <br>
         <strong>Preferred Transport:</strong> ${q3} <br>
         <strong>Favorite Music:</strong> ${q4}`;
    
    document.getElementById("thankYouMessage").style.display = "block"; // Show thank you message
    
    document.getElementById("mcqForm").reset(); // Clear the form
});