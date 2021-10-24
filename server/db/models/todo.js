const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });
    }
  }
  Todo.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    sequelize,
    modelName: 'Todo',
    timestamps: false,
  });
  return Todo;
};
