export default function Form () {

        function handleSubmit (event) {
            event.preventDefault();
            console.log("Submitted");
            const formEl = event.currentTarget;
            const formData = new FormData(formEl);
            const email = formData.get("email");
            const password = formData.get("password");
            // Example usage to avoid unused variable error
            console.log("Email:", email, "Password:", password);
        }

    return (
        <section>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} method="POST">
            <label htmlFor="email">Email: </label>
            <input id="email" type="email" name="email" placeholder="Enter your email" />
            < br />

            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" placeholder="Enter your password" />
            <br />

            <button>
                Submit
            </button>
        </form>
        </section>
    );
}