
import { Sequelize, DataTypes } from 'sequelize'


// Função assíncrona para inicializar o Sequelize e definir os modelos

export const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./server/api/db/dbAvaliations.sqlite",
  });

  // Definição do model 'users'
  export const empresas = sequelize.define(
    "empresas",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cidade: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      endereco: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false, // Se a tabela não tiver colunas createdAt e updatedAt
      tableName: "empresas", // Define explicitamente o nome da tabela
    }
  );
  



  export const users = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cidade: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      endereco: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false, // Se a tabela não tiver colunas createdAt e updatedAt
      tableName: "users", // Define explicitamente o nome da tabela
    }
  );
  

  export const avaliacoes = sequelize.define(
    "avaliacoes",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      empresa_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'empresas', // Nome da tabela empresas
          key: 'id',         // Coluna referenciada na tabela empresas
        },
        onDelete: 'CASCADE',  // Exclui comentários se a empresa for deletada
      },
      avaliacao: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      data_criacao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // Define a data de criação como o timestamp atual
      },
    },
    {
      timestamps: false,        // Se não precisar de colunas createdAt e updatedAt
      tableName: "avaliacoes",  // Define explicitamente o nome da tabela
    }
  );
  
  

  // Sincronização do banco de dados
  await sequelize.sync(); // Aguarda a sincronização do banco de dados

