<svelte:head>
  <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet">
</svelte:head>

    <div class="hello">
      <h1>hello &#x1F44B;</h1>
      <p>my name is Charly.</p>
      <p>i'm a software engineer and musician based in London.</p>
      <ul>
        <li>
          <a href="https://github.com/charlyflynn" target="_blank" rel="noreferrer">- github</a>
        </li>
        <li>
          <a
          href="https://www.linkedin.com/in/charlie-flynn-86b278149"
          target="_blank"
          rel="noreferrer"
          >- linkedin</a
          >
        </li>
        <li>
          <a href="/" class="disabled" rel="noreferrer">- soundcloud</a>
        </li>
      </ul>
      <p>sometimes I try and make fun things... but I'm currently rebuilding this page so hold tight.</p>
    </div>
  <style>

:root {
  --main-bg-color: #f0f9ff;
  --accent-color: #BB6464;
  --highlight-color: #CDB699;
  --text-color: #2c2c2c;
}

  * { font-family: "Roboto Mono", monospace;
  padding: 0;
  margin: 0;
  background-color: var(--main-bg-color);
  }

  p {
    margin: 30px;
    color: var(--text-color);
  }

.hello {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 { 
  margin: 30px;
}

ul {
  margin: 30px;
}

  li {
    display: inline-block;
  }

  a {
    text-decoration: none;
    margin: 1.5em;
    padding: 0.8em 2.5em;
    outline: none;
    font-weight: bold;
    color: inherit;
    border: 1px solid var(--accent-color);
    border-radius: 1em;
  }
  
  a.disabled {
    cursor: not-allowed;
    text-decoration: line-through;
  }
  </style>
  