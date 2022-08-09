


Swal.fire({
    title: "¿Listos para convertirse en Golders?",
    text: "Selecciona tu pais",
    confirmButtonText: "¡Vamos!",
    width: "60%",
    padding: "2rem",
    // grow: "fullscreen",
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    stopKeydownPropagation: false,

    input: "select",
    inputPlaceholder:"Pais",
    inputValue:"",
    inputOptions:{
        argentina: "Argentina",
        venezuela: "Venezuela",
    },



})