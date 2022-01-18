const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey:true,
      allowNull:false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary:{
      type:DataTypes.TEXT,
      allowNull:false
    },
    //PUNTAJE
    spoonacularScore:{
      type:DataTypes.INTEGER,
    },
    //NIVEL DE SALUD:
    healthScore:{
      type:DataTypes.INTEGER,
    },
    //PASO A PASO:
    analyzedInstructions:{
      type:DataTypes.ARRAY(DataTypes.TEXT),
    }
  });
};
