module.exports = {
  development: {
    username: "root",
    password: null,
    database: "crud_api",
    host: "127.0.0.1",
    dialect: "mysql",
    define: {
      timestamps: true, // Cria automaticamente as inserções em created_at e update_at
      underscored: true, // habilita o timestamp em created_at e não em createdAt
    },
  },
  test: {
    username: "root",
    password: null,
    database: "crud_api",
    host: "127.0.0.1",
    dialect: "mysql",
    define: {
      timestamps: true, // Cria automaticamente as inserções em created_at e update_at
    },
  },
  production: {
    username: "root",
    password: null,
    database: "crud_api",
    host: "127.0.0.1",
    dialect: "mysql",
    define: {
      timestamps: true, // Cria automaticamente as inserções em created_at e update_at
    },
  },
};
