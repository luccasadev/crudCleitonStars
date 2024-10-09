// imports.js

// Server e Middlewares
import express from 'express';
import cors from 'cors';

// Banco de dados
import { sequelize, empresas, users, avaliacoes } from './models.js';

//Rotas
import { routs } from './routs.js'

// Caminhos dos arquivos
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs/promises';

// Date e Horários
import { format } from 'date-fns';



// Construtores de HTML
import * as cheerio from 'cheerio';
import { applyMaskToHTML } from '../public/extends/applyMask.js';
 

// Menu
import { forms } from '../public/forms/Extructure/forms_system.js';

import { avaliation } from '../public/forms/Constructors/ConstructorAvaliations.js';



export default {
  express,
  cors,

  sequelize,
  avaliacoes,
  empresas, 
  users,

  routs,

  fileURLToPath,
  path,
  fs,

  format,

  cheerio,
  applyMaskToHTML,
  
  forms,
  avaliation,

};

// Acesso de funções globalmente
globalThis.path = path;
globalThis.fs = fs;
globalThis.cheerio = cheerio;
globalThis.applyMaskToHTML = applyMaskToHTML;
