document.addEventListener("DOMContentLoaded", () => {
    const submit = document.getElementById('submit')
    submit.addEventListener("click", async (event) => {
        event.preventDefault();
       const userName=document.getElementById('user_name').value.trim()
        const email = document.getElementById('email').value.trim()
        const password = document.getElementById('password').value.trim()
        await SendData(userName,email, password)
        console.log("fn called")

    })
    
    //generate a token for ourthigration

    async function SendData(userName,email, password) {
        const data = {userName:userName,
            email: email,
            password: password
        }
        try {
            console.log('in try')
            const response = await fetch('http://localhost:3000/singin/user', {
                method: "POST", headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
                
            })
            console.log("data send")
            const result = await response.json()
           
                
                if (!response.ok) { // If response is not OK (like 401)
                    console.log("Login failed:", result.message);
                    throw new Error("User already exists");
                  } else {
                    console.log("Verified! Redirecting...");
                    window.location.href = "/UserDashbord";
                  }
                  

            }//json {user:true/false,token:"asfas45"}
           
     catch (err) {
            console.error(err)
            alert(err)
        }


    }
   

})
