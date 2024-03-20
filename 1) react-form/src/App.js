import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form action="#" method="get">
          <label htmlFor="firstname">First Name*</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter First Name"
            required
          />
          <br />
          <br />
          <label htmlFor="lastname">Last Name*</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter Last Name"
            required
          />
          <br />
          <br />
          <label htmlFor="tel">Contact*</label>
          <input
            type="tel"
            name="tel"
            id="tel"
            placeholder="Enter Mobile Number"
            required
          />
          <br />
          <br />
          <label htmlFor="gender">Gender*</label>
          <br />
          <input type="radio" name="gender" id="male" />
          Male
          <input type="radio" name="gender" id="female" />
          Female
          <input type="radio" name="gender" id="other" />
          Other
          <br />
          <br />
          <label htmlFor="lang">Your best Subject</label>
          <br />
          <input type="checkbox" name="lang" id="english" />
          English
          <input type="checkbox" name="lang" id="maths" />
          Maths
          <input type="checkbox" name="lang" id="physics" />
          Physics
          <br />
          <br />
          <label htmlFor="file">Upload Resume*</label>
          <input
            type="file"
            name="file"
            id="file"
            placeholder="Upload file"
            required
          />
          <br />
          <br />
          <label htmlFor="url">Enter URl*</label>
          <input
            type="url"
            name="url"
            id="url"
            placeholder="Enter Url"
            required
          />
          <br />
          <br />
          <label>Select your choice</label>
          <select name="select" id="select">
            <option value="" disabled selected>
              Select your Ans
            </option>
            <optgroup label="Beginers">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>
            <optgroup label="Advance">
              <option value="1">React</option>
              <option value="2">Node</option>
              <option value="3">Express</option>
              <option value="4">MongoDB</option>
            </optgroup>
          </select>
          <br />
          <br />
          <label htmlFor="about">About</label>
          <br />
          <br />
          <textarea
            name="about"
            id="about"
            cols="40"
            rows="5"
            placeholder="About Your Self"
            required
          ></textarea>
          <br />
          <br />
          <label htmlFor="submit">Submit or Reset</label>
          <br />
          <button type="reset" value="reset">
            Reset
          </button>
          <button type="subnit" value="Submit">
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default App;
