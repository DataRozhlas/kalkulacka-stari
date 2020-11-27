import React from "react";
import ReactDOM from "react-dom";
import otazky from "./otazky";
import hodnoceni from "./hodnoceni";

const App = () => {
  const [odpovedi, setOdpovedi] = React.useState(otazky.map((o) => null));
  const [otazka, setOtazka] = React.useState(0);
  const [vek, setVek] = React.useState(null);
  const [vnimaniRizik, setVnimaniRizik] = React.useState(0);
  const [strategie, setStrategie] = React.useState(0);

  if (otazka < otazky.length) {
    return (
      <div>
        <div className="quiz-container">
          <div className="quiz-body">
            <div
              className="question-text"
              dangerouslySetInnerHTML={{
                __html:
                  "<div>" +
                  otazky[otazka].otazka +
                  "</div>" +
                  (otazka === 0
                    ? '<div class="question-assure">Odpovědi na tuto ani další otázky se nikam neodesílají.</div>'
                    : ""),
              }}
            ></div>
            <div className="button-options">
              {otazky[otazka].odpovedi.map((o, i) => {
                return (
                  <button
                    className="quiz-button quiz-button-option"
                    key={i}
                    onClick={() => {
                      const zmenenyOdpovedi = [...odpovedi];
                      zmenenyOdpovedi[otazka] = i;
                      setOdpovedi(zmenenyOdpovedi);
                      const dalsiOtazka = otazka + 1;
                      setOtazka(dalsiOtazka);
                      otazka < 4
                        ? setVnimaniRizik(vnimaniRizik + otazky[otazka].body[i])
                        : setStrategie(strategie + otazky[otazka].body[i]);
                      otazka === 10 ? setVek(i) : null;
                    }}
                  >
                    {o}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="quiz-buttons">
            <div className="quiz-buttons-step">
              Otázka{" "}
              <strong>
                {otazka + 1} z {otazky.length}
              </strong>
            </div>
            <div className="progress-bar">
              <div
                className="progress-bar-status"
                style={{ width: ((otazka + 1) / otazky.length) * 100 + "%" }}
              ></div>
            </div>
          </div>
        </div>
        <div>
          <pre>
            Vnímání rizik: {vnimaniRizik}, Strategie: {strategie}
          </pre>
        </div>
      </div>
    );
  } else {
    const aktivni = strategie < 10;
    const vysokeVnimaniRizika =
      vnimaniRizik < 8 && vek === 0 ? false : vnimaniRizik < 9 ? false : true;
    let skupina;
    switch (aktivni) {
      case true:
        skupina = vysokeVnimaniRizika ? 3 : 0;
        break;
      case false:
        skupina = vysokeVnimaniRizika ? 1 : 2;
    }

    return (
      <div className="quiz-container">
        <div className="quiz-body">
          <div className="quiz-result-text">
            <div>
              <p>
                <strong>{hodnoceni[vek][skupina].name}</strong>
              </p>
              <p>{hodnoceni[vek][skupina].desc}</p>
              <p>{hodnoceni[vek][skupina].recom}</p>
            </div>
          </div>
          <div className="quiz-buttons noborder">
            <div className="quiz-buttons-next">
              <button
                className="quiz-button quiz-button-step quiz-button-fwd"
                type="button"
                onClick={() => {
                    setOdpovedi(otazky.map(() => null));
                    setOtazka(0);
                    setVek(null);
                    setVnimaniRizik(0);
                    setStrategie(0);
                }}
              >
                Vyplnit znovu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

ReactDOM.render(<App></App>, document.getElementById("kalkulacka"));
