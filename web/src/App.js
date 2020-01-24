import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
//Componente -> Bloco isolado de HTML, CSS, Javascript o qual não interfere no restante da aplicação
//Propriedade -> Informações que um componente PAI passa para seus componentes filhos
//Estado -> Informações mantidas pelo componente (Lembrar: Imutabilidade)

function App() {

  return (
    <div id="app">
      <aside>
        <strong>Cadadstrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42386521?s=460&v=4" alt="Phelipe Soares"/>
              <div className="user-info">
                <strong>Phelipe Soares</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Desenvolvedor Jr. Aprendendo tecnlogias</p>
            <a href="https://github.com/fannarky">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42386521?s=460&v=4" alt="Phelipe Soares"/>
              <div className="user-info">
                <strong>Phelipe Soares</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Desenvolvedor Jr. Aprendendo tecnlogias</p>
            <a href="https://github.com/fannarky">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42386521?s=460&v=4" alt="Phelipe Soares"/>
              <div className="user-info">
                <strong>Phelipe Soares</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Desenvolvedor Jr. Aprendendo tecnlogias</p>
            <a href="https://github.com/fannarky">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/42386521?s=460&v=4" alt="Phelipe Soares"/>
              <div className="user-info">
                <strong>Phelipe Soares</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Desenvolvedor Jr. Aprendendo tecnlogias</p>
            <a href="https://github.com/fannarky">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
