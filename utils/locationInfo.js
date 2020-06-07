const zip = require('zipcodes');

function getRadius(location, mileage) {
  location = location.replace(/\D/g, '');
  return new Promise((resolve) => {
    if (location) {
      let radiusCodesStr = '';
      let radiusCodes = zip.radius(location, mileage);
      radiusCodes.forEach((code) => {
        radiusCodesStr += `'${code.toString()}', `;
      });
      radiusCodesStr = radiusCodesStr.substring(0, radiusCodesStr.length - 2);
      resolve(radiusCodesStr);
    } else {
      resolve('00000');
    }
  });
}

module.exports = {
  getRadius,
};
