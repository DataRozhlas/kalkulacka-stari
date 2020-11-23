import React from "react";
import ReactDOM from "react-dom";

const otazky = [
  {
    otazka:
      "Obáváte se, že se ve stáří budete hůř pohybovat a nedokážete si sami dojít, kam potřebujete?",
    odpovedi: [
      "již to zažívám",
      "určitě ano",
      "spíše ano",
      "spíše ne",
      "vůbec ne",
      "vůbec na to nemyslím",
    ],
    body: [1, 1, 1, 1, 1, 1],
  },
  {
    otazka: "Obáváte se, že budete ve stáří osamělí?",
    odpovedi: [
      "již to zažívám",
      "určitě ano",
      "spíše ano",
      "spíše ne",
      "vůbec ne",
      "vůbec na to nemyslím",
    ],
    body: [1, 1, 1, 1, 1, 1],
  },
  {
    otazka:
      "Obáváte se, že budete ve stáří vystaveni šikaně nebo domácímu násilí?",
    odpovedi: [
      "již to zažívám",
      "určitě ano",
      "spíše ano",
      "spíše ne",
      "vůbec ne",
      "vůbec na to nemyslím",
    ],
    body: [1, 1, 1, 1, 1, 1],
  },
  {
    otazka: "Obáváte se, že ve stáří budete chudí?",
    odpovedi: [
      "již to zažívám",
      "určitě ano",
      "spíše ano",
      "spíše ne",
      "vůbec ne",
      "vůbec na to nemyslím",
    ],
    body: [1, 1, 1, 1, 1, 1],
  },
  {
    otazka:
      "Plánujete využívat v důchodovém věku pro financování svých životních potřeb penzijní připojištění?",
    odpovedi: [
      "ano, jako hlavní zdroj",
      "ano, jako důležitý zdroj",
      "ano, jako okrajový zdroj",
      "ne",
    ],
    body: [1, 1, 1, 1],
  },
  {
    otazka:
      "Plánujete využívat v důchodovém věku pro financování svých životních potřeb zaměstnání či podnikání?",
    odpovedi: [
      "ano, jako hlavní zdroj",
      "ano, jako důležitý zdroj",
      "ano, jako okrajový zdroj",
      "ne",
    ],
    body: [1, 1, 1, 1],
  },
  {
    otazka: "Cvičíte, věnujete se pravidelně nějakému sportu?",
    odpovedi: ["ano", "ne"],
    body: [1, 1],
  },
  {
    otazka: "Zajímáte se o prevenci či očkování?",
    odpovedi: ["ano", "ne"],
    body: [1, 1],
  },
  {
    otazka:
      "Jak často pomáháte sousedům či známým? Například a zahradě, při opravách nemovitostí, s nákupy nebo jako doprovod při různých pochůzkách...",
    odpovedi: [
      "denně",
      "několikrát týdně",
      "několikrát za měsíc",
      "několikrát za rok nebo méně často",
      "nikdy",
    ],
    body: [1, 1, 1, 1, 1],
  },
  {
    otazka:
      "Jak často se účastníte aktivit v zájmových organizacích, například v církvi, v klubu důchodců nebo v politickém hnutí?",
    odpovedi: [
      "denně",
      "několikrát týdně",
      "několikrát za měsíc",
      "několikrát za rok nebo méně často",
      "nikdy",
    ],
    body: [1, 1, 1, 1, 1],
  },
  {
    otazka: "Kolik je vám let?",
    odpovedi: [
      "19 - 29 let",
      "30 - 45 let",
      "46 - 59 let",
      "60 - 69 let",
      "70 a více",
    ],
    body: [1, 1, 1, 1, 1],
  },
];

const App = () => {
  const [odpovedi, setOdpovedi] = React.useState(otazky.map((o) => null));
  const [otazka, setOtazka] = React.useState(0);

  if (otazka < otazky.length) {
    return (
      <div className="quiz-container">
        <div className="quiz-body">
          <div className="question-text">{otazky[otazka].otazka}</div>
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
                  }}
                >
                  {o}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="quiz-container">Vyhodnocení, woe</div>;
  }
};

ReactDOM.render(<App></App>, document.getElementById("kalkulacka"));
