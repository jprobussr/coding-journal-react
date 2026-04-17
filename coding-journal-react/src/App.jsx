import React from 'react';

const App = () => {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container">
          <p className="eyebrow">React Project Showcase</p>
          <h1 className="site-title">Coding Journal</h1>
          <p className="site-description">
            A place to track and present the projects I am building as I grow as
            a frontend developer.
          </p>
        </div>
      </header>

      <main className="site-main">
        <div className="container">
          <section className="projects-section">
            <h2 className="section-title">Featured Projects</h2>
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
