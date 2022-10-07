const url = {
    development: `http://localhost:8080`,
    production: `https://omen-database.herokuapp.com`
}[process.env.NODE_ENV || "development"]

export default url;

