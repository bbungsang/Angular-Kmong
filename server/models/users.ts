export default (sequelize, DataTypes) => {
  return sequelize.define('Users', {
    user_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    username: {type: DataTypes.STRING(64), unique: true, allowNull: false},
    password: {type: DataTypes.STRING(128), allowNull: false},
    email: {type: DataTypes.STRING(64), allowNull: false},
    phone: {type: DataTypes.STRING(11), unique: true, allowNull: false}
  }, {
    classMethods: {},
    tableName: 'users',
    underscored: true,
    timestamps: false
  });
};
