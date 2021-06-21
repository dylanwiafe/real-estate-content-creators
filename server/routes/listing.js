const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

// will need a function to read our listing data from our backend
//corresponding json file

// this function won't take any arguments it will simply return
//1. a variable that is equal to the read file sync method
//what is the read file sync method & what does it take?

//2. a varable that parses what we've read into an object?

//here is an example of the function you will need to write

function readPropertyListings() {
  let readProperties = fs.readFileSync(
    __dirname + "./../data/listings.json",
    "UTF-8"
  );
  let propertiesData = JSON.parse(readProperties);

  return propertiesData;
}

// will need a function to write data for a new listing to our backend
function writeToListings(dataToWrite) {
  fs.writeFileSync(
    __dirname + "./../data/listings.json",
    JSON.stringify(dataToWrite)
  );
}
//like the function above it won't take in any arguments but will return
//1. a variable that we set equal to the writefilesync method
//what is the write file sync method and what does it take?

//2. a variable that turns our response into a string from the front end

//here is an example of the function you will need to write

//function writeToListings(){
//function to write
//function to turn what we have written into a string that we can read
// }

const getAllProperties = (req, res) => {
  //first we will create a variable that we set equal to our function to get all the listing dat awe declared above
  let allPropertiesData = readPropertyListings();

  //then we will write an if else statement that takes that variable and returns it as res.json
  if (allPropertiesData) {
    return res.json(allPropertiesData);
  } else {
    res.status(400).json({ message: "could not find listing data" });
  }
  //or returns an error code of 400 with a console log saying that the data could not be retrieved
};
const getOneProperty = (req, res) => {
  //destructure the key and value from the listings.json
  const { id } = req.params;
  //create a variable and set it equal to the readListing function we created globally
  let listings = readPropertyListings();
  //create a variable that matches the id with the id that is plugged into our URL
  let foundListingProperty = listings.find(
    (listing) => (listing.listingID = id)
  );
  //create an if else statement that

  if (!foundListingProperty) {
    return res.status(404).json({ message: `unable to find listing ${id}` });
  }

  return res.json(foundListingProperty);
};
const addProperty = (req, res) => {
  const newProperty = {
    agentID: "",
    address: req.body.address,
    dateListed: req.body.dateListed,
    type: req.body.type,
    style: req.body.style,
    status: req.body.status,
    dronePhotoRequests: req.body.dronePhotoRequests,
    droneVideoRequests: req.body.droneVideoRequests,
    developmentRequests: req.body.developmentRequests,
    virtualTourRequests: req.body.virtualTourRequests,
    twilightPhotoRequests: req.body.twilightPhotoRequests,
    listingID: uuidv4(),
  };

  let listings = readPropertyListings();
  listings.push(newProperty);
  writeToListings(listings);
  res.json(newProperty);

  console.log(newProperty);
};
const editOneProperty = (req, res) => {
  // destructure all the fields in one object of the json & set it equal to our
  //request body

  const {
    agentID,
    address,
    dateListed,
    type,
    style,
    status,
    dronePhotoRequests,
    droneVideoRequests,
    developmentRequests,
    virtualTourRequests,
    twilightPhotoRequests,
    listingID,
  } = req.body;

  //make a data variable and set it equal to our readPropertyListings function
  // index our data variable with find index

  const listingsData = readPropertyListings();
  const index = listingsData.findIndex(
    (listing) => listing.listingID === req.params.id //this one finds the index of the one we want to change
  );

  let requiredListing = listingsData.find(
    (listing) => listing.listingID === req.params.id //this one finds the item at that index
  );
  //pass singular listing as an argument and compare
  //listingId to the id with a strict equality operator

  //set a new variable containing the required listings and set that equal toward
  //our data variable with a .find method applied and a strict equality comparison
  //as its argument

  //make a variable called requiredlisitngs
  let requiredListings = {
    agentID: agentID,
    address: address,
    dateListed: dateListed,
    type: type,
    style: style,
    status: status,
    dronePhotoRequests: dronePhotoRequests,
    droneVideoRequests: droneVideoRequests,
    developmentRequests: developmentRequests,
    virtualTourRequests: virtualTourRequests,
    twilightPhotoRequests: twilightPhotoRequests,
    listingID: listingID,
  };
  //set it equal to a json object from that array

  //make a variable for an invalid listing

  // const invalid = validListing(requiredListing);
  //set it equal to a valid listing function with required listing as an argument

  //write if else statement
  if (!requiredListing) {
    res.status(400).json(
      {
        message: `Unable to update listings, the following
    are invalid: ${invalid}`,
      },
      invalid
    );
  } else {
    listingsData.splice(index, 1, requiredListings);
    writeToListings(listingsData);
    res.json(requiredListings);
  }
};

const deleteOneProperty = (req, res) => {
  // declare a 'data' variable and set it equal to our readPropertyListings
  let listingsData = readPropertyListings();
  // destructure id as a variable and set it equal to the parameters
  const { id } = req.params;
  // do the same thing you did on line 59 and use findindex on your data
  let index = listingsData.findIndex((listing) => {
    console.log(listing.listingID === id);
    return listing.listingID === id;
  });

  if (index === -1) {
    res.status(400).json({ message: `couldn't find listing with id: ${id}` });
  } else {
    listingsData.splice(index, 1);
    writeToListings(listingsData);
    return res.json(listingsData);
  }
  //varable passing a singualar argument
  //write an if else statement that retuns a response of 400 if
  //its not an index of -1
};

router.get("/", getAllProperties);
router.get("/:id", getOneProperty);
router.post("/", addProperty);
router.put("/:id", editOneProperty);
router.delete("/:id", deleteOneProperty);

module.exports = router;
