const sqlite3 = require("sqlite3").verbose();

// Conecta ao banco de dados SQLite
const db = new sqlite3.Database("./banco.db", (err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados SQLite", err);
  } else {
    console.log("Conectado ao banco de dados SQLite");
  }
});

// Função para inserir dados
function insertData() {
  // Inserir usuários
  const users = [
    { name: "João Silva", email: "joao.silva@example.com" },
    { name: "Maria Oliveira", email: "maria.oliveira@example.com" },
    { name: "Carlos Souza", email: "carlos.souza@example.com" },
  ];

  users.forEach((user) => {
    db.run(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [user.name, user.email],
      function (err) {
        if (err) {
          return console.error(err.message);
        }
        console.log(`Usuário inserido com ID: ${this.lastID}`);
      }
    );
  });

  // Inserir categorias
  const categorias = [
    { name: "Tecnologia" },
    { name: "Ciência" },
    { name: "Entretenimento" },
  ];

  categorias.forEach((categoria) => {
    db.run(
      "INSERT INTO categorias (name) VALUES (?)",
      [categoria.name],
      function (err) {
        if (err) {
          return console.error(err.message);
        }
        console.log(`Categoria inserida com ID: ${this.lastID}`);
      }
    );
  });

  // Inserir posts
  const posts = [
    {
      name: "Novo Smartphone",
      descricao: "O lançamento mais esperado do ano",
      url: "https://example.com/smartphone",
    },
    {
      name: "Descoberta Científica",
      descricao: "Uma descoberta que vai mudar o mundo",
      url: "https://example.com/ciencia",
    },
    {
      name: "Filme do Ano",
      descricao: "O filme mais aguardado pelos fãs",
      url: "https://example.com/filme",
    },
  ];

  posts.forEach((post) => {
    db.run(
      "INSERT INTO posts (name, descricao, url) VALUES (?, ?, ?)",
      [post.name, post.descricao, post.url],
      function (err) {
        if (err) {
          return console.error(err.message);
        }
        console.log(`Post inserido com ID: ${this.lastID}`);
      }
    );
  });
}

// Executa a função de inserção de dados
insertData();

// Fecha a conexão com o banco de dados após inserir os dados
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Conexão com o banco de dados fechada.");
});
