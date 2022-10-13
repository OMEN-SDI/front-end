const url = {
  development: `http://localhost:8080`,
  production: `https://omen-database.herokuapp.com`,
}[process.env.REACT_APP_ENV || "development"];

export default url;
