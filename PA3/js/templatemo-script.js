/*

TemplateMo 560 Astro Motion

https://templatemo.com/tm-560-astro-motion

*/

var gallery = undefined;

function closeMenu() {
  $(".navbar-collapse").removeClass("show"); 
}

function highlightMenu(no) {
  $(".navbar .navbar-nav > .nav-item").removeClass('selected');
  $(".navbar .navbar-nav > .nav-item > .nav-link[data-no='" + no + "']").parent().addClass('selected');
}

function setupGallery() {
  gallery = $('.gallery-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
}

function openPage(no) {
  if(no == 3) {
    if(gallery == undefined) {
      setupGallery();
    } else {
      $('.gallery-slider').slick('unslick');
      setupGallery();
    }    
  }

  $('.cd-hero-slider > li').hide();
  $('.cd-hero-slider li[data-page-no="' + no + '"]')
    .fadeIn();
}

$(window).on('load', function() {
  $('body').addClass('loaded');
  openPage(1);
});

jQuery(function() {
    $('.tm-page-link').on('click', function(){
      var pageNo = $(this).data('page-no');
      openPage(pageNo);
      highlightMenu(pageNo);
    });

    $(".navbar .navbar-nav > .nav-item > a.nav-link").on('click', function(e){
      var pageNo = $(this).data('no');

      openPage(pageNo);
      highlightMenu(pageNo);
      closeMenu();     
    });

    $("html").click(function(e) {
      closeMenu();
    });
});


$(document).on("click", ".efecto-tipgestion", function () {

  var tipo = $(this).data("info");

  var contenido = "";

  if (tipo === "incidentes") {
    contenido = `
      <h2>Gestión de Incidentes</h2>
      <p>Tiene como propósito restaurar el servicio lo antes posible, minimizando el impacto en el negocio.</p>
      <ul>
        <li>Respuesta rápida</li>
        <li>Priorización por impacto</li>
        <li>Resolución temporal o definitiva</li>
      </ul>
    `;
  }

  if (tipo === "problemas") {
    contenido = `
      <h2>Gestión de Problemas</h2>
      <p>Busca identificar y eliminar la causa raíz de uno o más incidentes, reduciendo su recurrencia. Gestiona errores conocidos y soluciones temporales.</p>
      <ul>
        <li>Análisis causa raíz</li>
        <li>Errores conocidos</li>
        <li>Mejora continua</li>
      </ul>
    `;
  }

  if (tipo === "cambios") {
    contenido = `
      <h2>Gestión de Cambios</h2>
      <p>La gestión de cambios en ITIL v4 (Change Enablement) tiene como objetivo maximizar el éxito de los cambios, asegurando que los riesgos sean evaluados y autorizados correctamente.</p>
      <p>Tipos de cambios:</p>
      <ul>
        <li>Cambios estándar: bajo riesgo, preautorizados.</li>
        <li>Cambios normales: requieren evaluación y aprobación.</li>
        <li>Cambios de emergencia: se implementan con rapidez para resolver incidentes críticos.</li>
      </ul>
    `;
  }

  if (tipo === "capacidad") {
    contenido = `
      <h2>Gestión de Capacidad y Disponibilidad</h2>
      <p>Asegura que los servicios funcionen con el rendimiento esperado.</p>
      <ul>
        <li>Capacidad suficiente (capacidad y rendimiento).</li>
        <li>Se encuentren diisponibles cuando se necesitan.</li>
        <li>Puedan continuar o recuperarse ante crisis.</li>
      </ul>
    `;
  }

  $("#tipos-info").fadeOut(200, function () {
    $(this).html(contenido).fadeIn(300);
  });

});
