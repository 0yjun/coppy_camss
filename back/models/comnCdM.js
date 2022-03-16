module.exports = (sequelize, DataTypes) => {
  const comnCdM = sequelize.define(
    'comnCdM',
    {
      upCd: { type: DataTypes.STRING(20), allowNull: false, unique: true },
      cd: { type: DataTypes.STRING(20), primaryKey: true, allowNull: false, unique: true },
      cdNm: { type: DataTypes.STRING(100), allowNull: false, unique: true },
      useYn: { type: DataTypes.STRING(20), allowNull: true, defaultValue: '1' },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci', // 한글 저장
      underscored: true,
      tableName: 'COMN_CD_M',
    },
  );
  console.log('comnCdM : ', comnCdM);
  return comnCdM;
};
