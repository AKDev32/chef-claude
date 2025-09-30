export default function Form() {
  // function handleSubmit (event) {
  //     event.preventDefault();
  //     console.log("Submitted");
  //     const formEl = event.currentTarget;
  //     const formData = new FormData(formEl);
  //     const email = formData.get("email");
  //     const password = formData.get("password");
  //     // Example usage to avoid unused variable error
  //     console.log("Email:", email, "Password:", password);
  // }

  function signup(formData) {
    // const email = formData.get("email");
    // const password = formData.get("password");
    // const description = formData.get("description");
    // const employmentStatus = formData.get("employmentStatus");
    // const dietaryRestrictions = formData.get("dietaryRestrictions");
    // console.log(email);
    // console.log(password);
    // console.log(description);
    // console.log(employmentStatus);
    // console.log(dietaryRestrictions);

    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <section>
      <h1>Sign Up form</h1>
      <form action={signup}>
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          defaultValue="aman@gmail.com"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <br />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          defaultValue="password123"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
        <br />

        <label htmlFor="description">Description: </label>
        <textarea
          name="description"
          id="description"
          defaultValue="This is a description"
        ></textarea>
        <br />

        <fieldset>
          <legend>Employee Status: </legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployment
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
          </label>
          <label>
            <input
              type="radio"
              name="employmentStatus"
              defaultValue={true}
              value="full-time"
            />
            Full-time
          </label>
        </fieldset>

        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
          </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="vegan" />
            Vegan
          </label>
          <label>
            <input
              type="checkbox"
              name="dietaryRestrictions"
              defaultValue={true}
              value="gluten-free"
            />
            Gluten-free
          </label>
        </fieldset>

        <label htmlFor="favColor">What is your favorite color?</label>
        <select name="favColor" id="favColor" defaultValue="" required>
          <option value="" disabled>
            -- Choose a color --
          </option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>

        <button>Submit</button>
      </form>
    </section>
  );
}
