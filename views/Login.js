document.addEventListener("DOMContentLoaded", () => {

    const submit = document.getElementById('submit')

    submit.addEventListener("click", async (event) => {
        const User_Name_Email = document.getElementById('User_Name_Email').value.trim()
        const password = document.getElementById('password').value.trim()
        event.preventDefault();
        await UserLogin(User_Name_Email, password)
        console.log("fn called")


    })
    async function UserLogin(User_Name_Email, password) {
        const data = {
            User_Name_Email: User_Name_Email, password: password
        }
        try {
            console.log("i am in try ")
            const response = await fetch('http://localhost:3000/login/user', {
                method: 'POST',
                headers: {

                    "Content-Type": "application/json"
                },body:JSON.stringify(data)


            })
            
            if(!response.ok){
                throw new Error("Invalid user name or Password")
            }
            else{
                console.log("dashbord")
                window.location.href="/UserDashbord"
            }

        }
        catch(err) {
            console.log(err)
            alert(err)

        }

    }

})