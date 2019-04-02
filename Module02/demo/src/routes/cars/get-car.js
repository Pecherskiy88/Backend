const url = require("url");
const path = require("path");
const fs = require("fs");

const getId = (path) => {
  const lastIndex = path.lastIndexOf('/');
  if(lastIndex !== -1){
    const id = path.slice(lastIndex + 1);
    return id !== 'cars' ? id : null
  }
}

const filterById = (id, arr) => {
  return arr.filter(el => el.id === id)
}

const filterMultiple = (queryString, arr) => {
  const queryArr = queryString.split(',');
  console.log('queryArr', queryArr);
  return arr.filter(car => queryArr.includes(car.id));
}



const getCars = (request, response) => {
  const parsedUrl = url.parse(request.url, true);
  const id = getId(parsedUrl.path);
  const filePath = path.join(__dirname, "../../", "db", "cars.json");
  const fileData = JSON.parse(fs.readFileSync(filePath));
  response.writeHead(200, { "Content-Type": "application/json" });
  if(!id){

    response.write(JSON.stringify({ status: "success", cars: fileData.cars }));

  }else if(parsedUrl.search){
    const queryParams = parsedUrl.query.ids.trim().replace(/"/g, '').replace(/'/g, '');
    const filteredMultiple = filterMultiple(queryParams, fileData.cars);
    response.write(JSON.stringify({status: 'success', cars: filteredMultiple}))
  }else {
    let filteredCars = filterById(id, fileData.cars);
    response.write(JSON.stringify({ status: "success", cars: filteredCars }));

  }
  
 
  // console.log("filteredCars", filteredCars);

  
  response.end();
};

module.exports = getCars;
