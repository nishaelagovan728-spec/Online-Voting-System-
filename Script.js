let votes = {
    "Candidate A": 0,
    "Candidate B": 0
};

let votedUsers = [];

function vote(candidate) {
    let voterName = document.getElementById("voterName").value.trim();

    if (voterName === "") {
        alert("Please enter your name.");
        return;
    }

    if (votedUsers.includes(voterName)) {
        document.getElementById("message").innerHTML =
            "You have already voted!";
        return;
    }

    votes[candidate]++;
    votedUsers.push(voterName);

    document.getElementById("message").innerHTML =
        "Vote submitted successfully!";

    document.getElementById("result").innerHTML =
        `Candidate A: ${votes["Candidate A"]} votes<br>
         Candidate B: ${votes["Candidate B"]} votes`;

    document.getElementById("voterName").value = "";
}
