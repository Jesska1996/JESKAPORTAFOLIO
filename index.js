<!DOCTYPE html> 
<html lang="es"> <!--LENGUA ESPAÑOL"-->
<head> <!--Metadatos que no son visibles en la página web-->
    <meta charset="UTF-8"> <!--Los caracteres del documento, para que se interpreten los símbolos en todos los idiomas-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Se utiliza para el responsive, pero no significa que solo agregándola nuestra web app, será responsiva-->
     <!-- Se agrego estilos de bootstrap -->
    <title> INICIO  </title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<!-- ***********************HEADER************************* -->

<header>
  <div class="card text-center">
      <div class="card-header">
          <nav class="navbar navbar-expand-lg bg-body-tertiary"> 
              <div class="container-fluid">
                  <a class="navbar-brand" href="#">MENU</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          <div class="menu">
              </button>
              <div class="collapse navbar-collapse"  id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#Array"></a>
                    <a class="nav-link" href="#sobre-mi" target="_blank">Sobre mí</a>
                    <a class="nav-link" href="#proyectos" target="_blank">Proyectos</a>
                    <a class="nav-link" href="#habilidades" target="_blank">Habilidades Técnicas</a>
                    <a class="nav-link" href="#experiencia" target="_blank">Experiencia y Formación</a>
                    <a class="nav-link" href="#contacto" target="_blank">Contacto</a>
                      </div>
                  </div>
              </div>
              </nav>
          <div class="card-body card-pres">
            <h5 class="card-title-header">¡Bienvenidos a mi portafolio! </h5>
          </div>
        </div>
  </header>
  
<!-- ***************PORTAFOLIO E IMAGEN *************** -->
<body>
  <div class="container-lg">
    <div class="row">
      <!-- Columna 8 -->
      <div class="col-8">
        <div class="contenedor-titulo">
          <div class="titulo">
              <svg width="500" height="200">
                  <path id="curva" d="M 50 150 Q 250 -50 450 150" fill="transparent" />
                  <text>
                    <textPath href="#curva" startOffset="50%" text-anchor="middle">
                      PORTAFOLIO
                    </textPath>
                  </text>
                </svg>       
              </div>
              <div class="imagen">
              <img src="./SRC/1.png" alt="IMAGEN-MANOS" />
            </div>
          </div>
      </div>
      <!-- Columna 4 -->
      <div class="col-4">
        <p class="descpripcion-pagina">
          En este espacio encontrarás una muestra de quién soy y lo que hago.
          Explora mis proyectos personales, resultado de mi formación en
          desarrollo web con tecnologías como HTML, CSS, JavaScript y React.
          Descubre más sobre mi trayectoria y habilidades, así como mi pasión
          por crear soluciones accesibles, creativas y humanas. ¡Gracias por
          visitar!
        </p>
      </div>
    </div>
  </div>

<!-- ******************pequeño ********************* -->
<div class="container-lg final mt-5 p-3" style="background-color: rgb(174, 164, 209); color: rgb(6, 6, 6);">
  <div class="row text-center">
    <div class="col-4">
      <h3 class="title-description">Tecnología</h3>
    </div>
    <div class="col-4">
      <h3 class="title-description">Humanismo</h3>
    </div>
    <div class="col-4">
      <h3 class="title-description">Inclusión</h3>
    </div>
  </div>
</div>
</body>

<footer>

</footer>
<script src="js/bootstrap.bundle.min.js"></script>
