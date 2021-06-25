const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

function readPropertyListings() {
  let readProperties = fs.readFileSync(
    __dirname + "./../data/listings.json",
    "UTF-8"
  );
  let propertiesData = JSON.parse(readProperties);

  return propertiesData;
}

function writeToListings(dataToWrite) {
  fs.writeFileSync(
    __dirname + "./../data/listings.json",
    JSON.stringify(dataToWrite)
  );
}

const getAllProperties = (req, res) => {
  let allPropertiesData = readPropertyListings();

  if (allPropertiesData) {
    return res.json(allPropertiesData);
  } else {
    res.status(400).json({ message: "could not find listing data" });
  }
};
const getOneProperty = (req, res) => {
  const { id } = req.params;

  let listings = readPropertyListings();

  let foundListingProperty = listings.find(
    (listing) => (listing.listingID = id)
  );

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
};
const editOneProperty = (req, res) => {
  const {
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

  const listingsData = readPropertyListings();
  const index = listingsData.findIndex(
    (listing) => listing.listingID === req.params.id //this one finds the index of the one we want to change
  );

  let requiredListing = listingsData.find(
    (listing) => listing.listingID === req.params.id //this one finds the item at that index
  );
  let requiredListings = {
    agentID: "",
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
  let listingsData = readPropertyListings();

  const { id } = req.params;

  let index = listingsData.findIndex((listing) => {
    return listing.listingID === id;
  });

  if (index === -1) {
    res.status(400).json({ message: `couldn't find listing with id: ${id}` });
  } else {
    listingsData.splice(index, 1);
    writeToListings(listingsData);
    return res.json(listingsData);
  }
};

router.get("/", getAllProperties);
router.get("/:id", getOneProperty);
router.post("/", addProperty);
router.put("/:id", editOneProperty);
router.delete("/:id", deleteOneProperty);

module.exports = router;
