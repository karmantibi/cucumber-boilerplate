const { BeforeAll, AfterAll, Before, After } = require('cucumber');

BeforeAll({ timeout: 10*1000 }, () => {
	console.log('Before All hook');
});