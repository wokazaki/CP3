<!DOCTYPE html>
<html>
<head>
  <script src="angular.js"></script>
  <script src="script.js"></script>
</head>

<body ng-app="mainModule">
  <div ng-controller="mainController">
    <h3>1. Simple filter</h3>
    <strong>Original data:</strong> {{stringData}}<br />
    <strong>Filtered data:</strong> {{stringData | uppercase}}<br />
    <br />
    <h3>2. Chained filters</h3>
    <strong>Original data:</strong> {{stringData}}<br />
    <strong>Filtered data:</strong> {{stringData | lowercase | limitTo:7}}<br />
    <br />
    <h3>3. Filter in JavaScript</h3>
    <strong>Original data:</strong> {{dateData}}<br />
    <strong>Filtered data (HTML):</strong> {{dateData | date:"dd MMM yyyy"}}<br />
    <strong>Filtered data (JavaScript - alternative 1):</strong> {{formatDate1(dateData, "dd MMM yyyy")}}<br />
    <strong>Filtered data (JavaScript - alternative 2):</strong> {{formatDate2(dateData, "dd MMM yyyy")}}<br />
    <br />
    <h3>4. Custom filter</h3>
    <label><strong>Original data:</strong> <input type="text" ng-model="numberData" /></label><br />
    <strong>Filtered data (default):</strong> {{numberData | customCurrency}}<br />
    <strong>Filtered data (with parameters):</strong> {{numberData | customCurrency:"&euro;":",":".":2}}<br />
  </div>
</body>
</html>
