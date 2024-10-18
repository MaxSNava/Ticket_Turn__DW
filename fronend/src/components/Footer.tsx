import '../styles.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <ul className="requisitos">
        <li>Se requiere un mecanismo de autenticación</li>
        <li>Se requiere indicar el número de turno</li>
        <li>Se requiere control por oficina regional</li>
        <li>Se requiere parametrizar la antención por dias</li>
        <li>Se requiere generar compronate pdf al usuario</li>
        <li>Se contempla que la mayoria de usuarios usan movil</li>
      </ul>
      <div className="barcode">
        <img src="img/barras.png" alt="Código de barras"/>
      </div>
      <div className="qr-code">
        <img src="img/QR.png" alt="Código QR" />
      </div>
    </footer>
  )
}
