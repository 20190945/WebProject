import React from 'react';
import './styles.css';

function Buscador({ consulta, setConsulta, onSearch }) {
    const handleSubmit = (e) =>{
      e.preventDefault();
      onSearch();
    }

  return (
    <div id="search-bar-container">
      <div id="search-bar">
        <form method="get" action="" onSubmit={handleSubmit}>
          <div className="tb">
            <div className="td">
              <input
                type="text"
                placeholder="Search"
                required
                value={consulta}
                onChange={e => setConsulta(e.target.value)}
              />
            </div>
            <div className="td" id="s-cover">
              <button type="submit">
                <div id="s-circle"></div>
                <span></span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Buscador;