const itemController = require("../controller/item.controller");
const { check, quaram, query } = require("express-validator");
const validate_request = require("../middleware/validateRequests");
const validateAuthentification = require("../middleware/validateAuthentication");
const validateAdmin = require("../middleware/validateAdminRole");

module.exports = function (app) {
  app.post(
    "/item",
    [
      check("name")
        .isAlphanumeric()
        .withMessage("item name can only alphanumeric"),

      check("description")
        .isString()
        .withMessage("Description can only be strings"),

      check("price").isNumeric().withMessage("the price can only be numbers"),

      check("brand").isString().withMessage("Brand must be alphabet"),
    ],
    validate_request,
    validateAuthentification,
    validateAdmin, 
    itemController.createItem
  );

  app.get("/item", validateAuthentification, itemController.getAllItems)
};
