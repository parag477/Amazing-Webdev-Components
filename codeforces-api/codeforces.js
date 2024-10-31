
function find_user() {
    let user = document.getElementById("username").value;
    let template = "https://codeforces.com/api/user.rating?handle="
    let url = template + user
    console.log(user, url)
    fetch(url)
        .then(response => response.json())
        .then(user_data => Start(user_data), no_error_msg())
        .catch(error_msg());
        function error_msg(){
            document.getElementById("error").innerText = "Can't find user";
            return;
        }
        function no_error_msg(){
            document.getElementById("error").innerText = "";
        }

    function Start(user_data) {
        
        let n = user_data.result.length
        console.log('Username: ', user_data.result[n - 1].handle)
        document.querySelector("#name").innerText = user_data.result[n - 1].handle
        let max = user_data.result[0].newRating;
        for (let i = 0; i < n; i++) {
            if (user_data.result[i].newRating > max) max = user_data.result[i].newRating;
        }
        console.log('Total Contests: ', n)
        document.querySelector("#contest").innerText = "Number of contest given: " + n
        console.log('Highest Rating: ', max)
        document.querySelector("#highest_rating").innerText = "Highest Rating: " + max
        console.log("Current Rating: ", user_data.result[n - 1].newRating)
        document.querySelector("#current_rating").innerText = "Current Rating: " + user_data.result[n - 1].newRating
        no_error_msg();
    }

}

//find_user('x_Harshit_x')