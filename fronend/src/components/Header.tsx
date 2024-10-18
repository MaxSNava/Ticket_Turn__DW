import '../styles.css'

export const Header = () => {
  return (
    <header className="header">
      <img className="logo" src="img/SE.png" alt="Logo SE" />
      <div className="title">
        <h1>Ticket de Turno</h1>
        <div className="number-circle">4</div>
      </div>
    </header>
  )
}
