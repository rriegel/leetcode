import isIPv4Address from './isIPv4Address.js';
// 4 numbers separated by periods and must be between 0 and 255

let test = () => {
  console.log(isIPv4Address('172.0.30.1') === true);
  console.log(isIPv4Address('172.000.30.1') === false);
  console.log(isIPv4Address('255.255.30.100') === true);
  console.log(isIPv4Address('255.255.30.1a') === false);
};

test();