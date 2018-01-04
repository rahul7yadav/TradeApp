module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('Supervisor', function(err) {
    if (err) throw err;

    app.models.Supervisor.create([{
      "name": "Rahul Yadav",
      "email": "rahul7777yadav@gmail.com",
      "password": 123123,
      "phone": 9907865783,
      "type": 0
    }], function(err, supervisor) {
      if (err) throw err;

      console.log('Models created: \n', supervisor);
    });
  });
};
