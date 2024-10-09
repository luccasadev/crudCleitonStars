import imports from './imports.js'

const __filename = imports.fileURLToPath(import.meta.url);
const __dirname = imports.path.dirname(__filename);

const app = imports.express();
const port = process.env.PORT || 8080; // Use a porta 8080
const host = '0.0.0.0'; // Certifique-se de que o host é 0.0.0.0

// Middlewares
app.use(imports.cors());
app.use(imports.express.json());
app.use(imports.express.urlencoded({ extended: true }));


// Middleware para servir arquivos estáticos da pasta public
app.use(imports.express.static(imports.path.join(__dirname +'../../' + '/public')));


// Servir a pasta CSS corretamente e garantir que o tipo MIME seja text/css
app.use("/css", (req, res, next) => {
  res.type('text/css');
  next();
}, imports.express.static(imports.path.join(__dirname +'../../' + '/css')));  // Corrigido para servir corretamente a pasta CSS


//Rota Padrão
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname +'../../' + '/public/skeleton.html'));
});


imports.routs(app);


app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});