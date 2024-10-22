import React from 'react';
import './App.css';
import UserCrud from './UserCrud'; // Asegúrate de que la ruta sea correcta
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenido a la Gestión de Usuarios</h1>
        <UserCrud /> {/* Aquí se incluye el componente UserCrud */}
      </header>
    </div>
  );
}

export default App;
