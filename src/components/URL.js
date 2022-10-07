const url = {
    development: `http://localhost:8080`,
    // development:`https://omen-database.herokuapp.com`,
    production: `https://omen-database.herokuapp.com`
}[process.env.REACT_APP_ENV || "development"]

console.log('process.env:', process.env)
export default url;

