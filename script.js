script.js

function analisarDados() {

  const entrada = document
    .getElementById("entrada")
    .value
    .split(",");

  let numeros = [];
  let strings = [];

  entrada.forEach(item => {

    item = item.trim();

    if (!isNaN(item) && item !== "") {
      numeros.push(Number(item));
    } else {
      strings.push(item);
    }

  });

  // ---------- NÚMEROS ----------

  numeros.sort((a, b) => a - b);

  const soma = numeros.reduce((a, b) => a + b, 0);

  const media = soma / numeros.length;

  let mediana;

  if (numeros.length % 2 === 0) {

    mediana =
      (numeros[numeros.length / 2 - 1] +
      numeros[numeros.length / 2]) / 2;

  } else {

    mediana =
      numeros[Math.floor(numeros.length / 2)];

  }

  const minimo = Math.min(...numeros);
  const maximo = Math.max(...numeros);

  let frequenciaNumeros = {};

  numeros.forEach(num => {

    frequenciaNumeros[num] =
      (frequenciaNumeros[num] || 0) + 1;

  });

  let moda = Object.keys(frequenciaNumeros)
    .reduce((a, b) =>

      frequenciaNumeros[a] >
      frequenciaNumeros[b]

      ? a
      : b

    );

  // ---------- STRINGS ----------

  const stringsUnicas = [...new Set(strings)];

  let maiorString = strings.reduce((a, b) =>

    a.length > b.length ? a : b,

    ""

  );

  let menorString = strings.reduce((a, b) =>

    a.length < b.length ? a : b,

    strings[0]

  );

  let frequenciaStrings = {};

  strings.forEach(str => {

    frequenciaStrings[str] =
      (frequenciaStrings[str] || 0) + 1;

  });

  // ---------- RESULTADO ----------

  document.getElementById("resultado").innerHTML = `

    <h2>Estatísticas Numéricas</h2>

    <p><strong>Números:</strong> ${numeros.join(", ")}</p>

    <p><strong>Média:</strong> ${media.toFixed(2)}</p>

    <p><strong>Mediana:</strong> ${mediana}</p>

    <p><strong>Moda:</strong> ${moda}</p>

    <p><strong>Valor mínimo:</strong> ${minimo}</p>

    <p><strong>Valor máximo:</strong> ${maximo}</p>

    <p><strong>Soma total:</strong> ${soma}</p>

    <hr>

    <h2>Estatísticas de Strings</h2>

    <p><strong>Quantidade de strings:</strong>
      ${strings.length}
    </p>

    <p><strong>Strings únicas:</strong>
      ${stringsUnicas.join(", ")}
    </p>

    <p><strong>Maior string:</strong>
      ${maiorString}
    </p>

    <p><strong>Menor string:</strong>
      ${menorString}
    </p>

    <p><strong>Frequência:</strong></p>

    <pre>
${JSON.stringify(frequenciaStrings, null, 2)}
    </pre>

  `;
}