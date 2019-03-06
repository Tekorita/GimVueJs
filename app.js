const app = new Vue({
  el: '#app',
  data: {
    titulo:'Gym con Vue',
    tareas: [],
    nuevaTarea: ''
  },
  methods:{
    agregarTarea: function(){
      this.tareas.push({ //push sirve para agregar items dentro de un array
        nombre: this.nuevaTarea,
        estado: false
      });
      console.log(this.tareas)
      this.nuevaTarea = "";
    }
  }
});
