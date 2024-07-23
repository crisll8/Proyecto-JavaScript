function convertir() {
  let acciónHavanna = 6180;
  let acciónBBVA = 3880;
  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  let contador = 1;
  let addTodoButton = document.getElementById("btn-add");
  let todosList = document.getElementById("todo-list"); 
  
  let addTodo = () => {
    let todoText = prompt("Ingrese su DNI para realizar una nueva compra/venta");
    let todo = { id: contador, text: todoText, completed: false };
    todos.push(todo);
  
    contador++;
  
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  addTodoButton.addEventListener("click", addTodo);
 
   let cambio = prompt(
    'Bienvenido al sitio web de cálculo de cantidad de pesos en sus acciones, elija la acción con la que desea operar "havanna" - "bbva"'
  );

  while (cambio != "havanna" && cambio != "bbva") {
    alert("ingrese correctamente el nombre de la acción: havanna o bbva");
    cambio = prompt(
      'Bienvenido al sitio web de cálculo de cantidad de pesos en sus acciones, elija la acción con la que desea operar "havanna" - "bbva"'
    );
  }

  if (cambio == "havanna") {
    let monto = prompt("ingrese la cantidad de acciones que desea calcular");
    let conversion = `${monto * acciónHavanna}`;
    alert(
      `el total de sus acciones al precio de hoy es de $${conversion} pesos argentinos`
    );
  }

  if (cambio == "bbva") {
    let monto = prompt("ingrese la cantidad de acciones que desea calcular");
    let conversion = `${monto * acciónBBVA}`;
    alert(
      `el total de sus acciones al precio de hoy es de $${conversion} pesos argentinos`
    );
  }

  alert("¡Le agradecemos por su visita, esperamos que vuelva pronto!");
}
convertir();
