import '../styles.css'

export const Forms = () => {
  return (
    <form name="form">
      <fieldset className='pr2'>
        <label htmlFor="nombre-completo">Nombre completo de quien realizará el trámite:</label>
        <input type="text" id="nombre-completo" name="nombre-completo" />

        <label htmlFor="curp">CURP:</label>
        <input type="text" id="curp" name="curp" />
      </fieldset>

      <fieldset className='pr2'>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" />

        <label htmlFor="paterno">Paterno:</label>
        <input type="text" id="paterno" name="paterno" />

        <label htmlFor="materno">Materno:</label>
        <input type="text" id="materno" name="materno" />
      </fieldset>

      <fieldset className="tcc">
        <label htmlFor="telefono">Teléfono:</label>
        <input type="text" id="telefono" name="telefono" />

        <label htmlFor="celular">Celular:</label>
        <input type="text" id="celular" name="celular" />

        <label htmlFor="correo">Correo:</label>
        <input type="text" id="correo" name="correo" className='correo'/>
      </fieldset>

      <fieldset className='contry'>
        <div className="seleccion">
          <label htmlFor="nivel">¿Nivel al que desea ingresar o que ya cursa el alumno?</label>
          <select id="nivel" name="nivel">
            <option value="">Seleccione</option>
          </select>
        </div>

        <div className="seleccion">
          <label htmlFor="municipio">Municipio donde desea estudie el alumno:</label>
          <select id="municipio" name="municipio">
            <option value="">Seleccione</option>
          </select>
        </div>

        <div className="seleccion">
          <label htmlFor="asunto">Seleccione el asunto que va a tratar:</label>
          <select id="asunto" name="asunto">
            <option value="">Seleccione</option>
          </select>
        </div>
      </fieldset>

      <div className='form-group'>
        <button 
          className="submit-button"
          onClick={(e) => {e.preventDefault()}}
          >Generar Turno</button>
      </div>
    </form>
  );
};
