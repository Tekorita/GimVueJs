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
      localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
    },
    editarTareas: function(index){
      this.tareas[index].estado = true;
      localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
    },
    eliminarTareas: function(index){
      this.tareas.splice(index, 1); //splice para eliminar los items
      localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
    }
  },
  created: function(){
    let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
    if(datosDB === null){
      this.tareas = [];
    }else{
      this.tareas = datosDB;
    }
  }
});
