module.exports = (seq, Seq) => {
  const User = seq.define('user', {
    id: {
      type: Seq.UUID,
      defaultValue: Seq.UUIDV4,
      primaryKey: true
    },
    username: {
      type: Seq.STRING(16),
      allowNull: false
    },
    password: {
      type: Seq.STRING(60),
      allowNull: false
    },
    email: {
      type: Seq.STRING(64),
      allowNull: false
    },
    isActive: {
      type: Seq.BOOLEAN,
      defaultValue: false
    }
  }, {
    indexes: [
      {
        unique: true,
        fields: ['username']
      },
      {
        unique: true,
        fields: ['email']
      }
    ]
  })
  return User
}