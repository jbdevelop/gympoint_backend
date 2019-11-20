module.exports = {
   dialect: 'postgres',
   host: 'localhost',
   port: '5433',
   database: 'gympoint',
   username: 'postgres',
   password: 'docker',
   define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
   },
};
