const AgeVerification = () => {

    //if (month === NaN || month.length > 2 || month.length < 0 || month < 0 || month > 12) {
      //  return "Please enter a month between 1 and 12.";
    //} else {
        return (
            <div>
                <h1>Must be 21 to enter site. Please enter birthday to continue.</h1>
                <form>
                    <label htmlFor="month">Month:</label>
                    <br/>
                    <input type="text" id="month" name="month"></input>
                    <br/>
                    <label htmlFor="day">Day:</label>
                    <br/>
                    <input type="text" id="day" name="day"></input>
                    <br/>
                    <label htmlFor="year">Year:</label>
                    <br/>
                    <input type="text" id="year" name="year"></input>
                    <br/>
                    <input type="submit" id="ageVerButton"></input>
                </form>
            </div>
        );
    }
//}
export default AgeVerification;