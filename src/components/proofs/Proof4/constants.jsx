import React from "react";
import ClaimPanel from "../../../UI/ProofWrapper/ClaimPanel/ClaimPanel";
import VisualTextRow from "../../../UI/ProofWrapper/VisualTextRow/VisualTextRow";
import MN from "../../../UI/MathJaxNode/MathJaxNode";

const headingTitle = "Důkaz 4";
const breadcrumbsCurrent = "Důkazy nepřímo";
const stepSum = 14;

const claimPanel = (
  <ClaimPanel>
    Dokažte nepřímo:{" "}
    <cite>
      <q>
        {" "}
        <MN>\forall G=(V,E)</MN>: Jestliže v grafu <MN>G</MN> neexistuje
        kružnice, pak každá hrana v grafu <MN>G</MN> je most.
      </q>
    </cite>
  </ClaimPanel>
);

const proofStepPanels = [
  {
    name: "proofStepPanel1",
    activeForSteps: [1],
    content: (
      <p>
        Dokazujeme-li nepřímo, snažíme se přímou metodou dokázat tvrzení{" "}
        <MN>\neg B \Rightarrow \neg A</MN>, které je dle zásad výrokové logiky
        ekvivalentní s původním tvrzením.
        <br />
        <br />
        Původní tvrzení odpovídá implikaci ve tvaru <MN>A \Rightarrow B</MN>.
      </p>
    )
  },
  {
    name: "proofStepPanel2",
    activeForSteps: [2, 3],
    content: (
      <p>
        Vyznačíme v tvrzení jeho části, výroky <MN>A</MN> a <MN>B</MN>.
      </p>
    )
  },
  {
    name: "proofStepPanel3",
    activeForSteps: [4],
    content: <p>Sestavíme obměnu původního tvrzení.</p>
  },
  {
    name: "proofStepPanel4",
    activeForSteps: [5, 6],
    content: <p>Určíme nová znění obou výroků.</p>
  },
  {
    name: "proofStepPanel5",
    activeForSteps: [7],
    content: (
      <p>
        Určíme celé znění obměny původního tvrzení.
        <br />
        <br />
        Přímo se tedy budeme snažit dokázat tvrzení:{" "}
        <cite>
          <q>
            Jestliže existuje hrana v <MN>G</MN>, která není most, pak v{" "}
            <MN>G</MN> existuje kružnice.
          </q>
        </cite>
      </p>
    )
  },
  {
    name: "proofStepPanel6",
    activeForSteps: [8],
    content: (
      <p>
        Pokud existuje hrana <MN>{"e=\\{x,y\\}"}</MN>, která není most v{" "}
        <MN>G</MN>, poté z definice mostu platí, že graf <MN>G-e</MN> má stejný
        počet komponent jako <MN>G</MN>.
      </p>
    )
  },
  {
    name: "proofStepPanel7",
    activeForSteps: [9, 10],
    content: (
      <p>
        Před následující úvahou zvolíme dva libovolné vrcholy <MN>u</MN> a{" "}
        <MN>v</MN>, mezi kterými je možné sestrojit cestu procházející přes
        hranu <MN>e</MN>.
        <br />
        <br />{" "}
        <i>
          Poznámka: V případě nesouvislého grafu není možné sestrojit cestu mezi
          všemi dvojicemi vrcholů.
        </i>
      </p>
    )
  },
  {
    name: "proofStepPanel8",
    activeForSteps: [11],
    content: (
      <p>
        Když existuje <MN>u</MN>-<MN>v</MN> cesta <MN>{"P_{uv}"}</MN> v{" "}
        <MN>G</MN>, tak existuje <MN>u</MN>-<MN>v</MN> cesta{" "}
        <MN>{"P'_{uv}"}</MN> v <MN>G-e</MN>. (Uvažujeme totiž stále hranu{" "}
        <MN>e</MN>, která není mostem.)
        <br />
        <br />
        Poznámka: <MN>{"P'_{uv}"}</MN> se nemusí nutně <MN>{"=P_{uv}"}</MN>.
      </p>
    )
  },
  {
    name: "proofStepPanel9",
    activeForSteps: [12],
    content: (
      <p>
        Z toho vyplývá, že v <MN>G-e</MN> musí v existovat také cesta{" "}
        <MN>{"P_{xy}"}</MN> mezi vrcholy <MN>x</MN> a <MN>y</MN> z hrany{" "}
        <MN>e</MN>.
      </p>
    )
  },
  {
    name: "proofStepPanel10",
    activeForSteps: [13],
    content: (
      <p>
        Protože <MN>G</MN> vznikne z <MN>G-e</MN> přidáním hrany <MN>e</MN>,
        musí se <MN>x</MN>-<MN>y</MN> cesta <MN>{"P_{xy}"}</MN> nacházet také v{" "}
        <MN>G</MN>.
      </p>
    )
  },
  {
    name: "proofStepPanel11",
    activeForSteps: [14],
    content: (
      <p>
        Pak podle definice kružnice platí, že cesta <MN>{"P_{xy}"}</MN> spolu s
        hranou <MN>{"e=\\{x,y\\}"}</MN> tvoří v <MN>G</MN> kružnici.
        <br />
        <br />
        Hrana, která není most, tedy nutně musí ležet na kružnici. Tím je
        zárověň dokázáno původní ekvivalentní tvrzení. <MN>\Box</MN>
      </p>
    )
  }
];

const descriptionPanels = [
  {
    id: 1,
    showForSteps: [1],
    content: <p>Tvar původního výroku.</p>
  },
  {
    id: 2,
    showForSteps: [2],
    content: (
      <p>
        Znění výroku <MN>A</MN>.
      </p>
    )
  },
  {
    id: 3,
    showForSteps: [3],
    content: (
      <p>
        Znění výroku <MN>B</MN>.
      </p>
    )
  },
  {
    id: 4,
    showForSteps: [4],
    content: <p>Tvar obměněného tvrzení.</p>
  },
  {
    id: 5,
    showForSteps: [5],
    content: (
      <p>
        Znění negace výroku <MN>B</MN>.
      </p>
    )
  },
  {
    id: 6,
    showForSteps: [6],
    content: (
      <p>
        Znění negace výroku <MN>A</MN>.
      </p>
    )
  },
  {
    id: 7,
    showForSteps: [7],
    content: <p>Znění celé obměny původního tvrzení.</p>
  },
  {
    id: 8,
    showForSteps: [8],
    content: (
      <p>
        Sestrojení příkladu grafu <MN>G</MN>, kde existuje hrana <MN>e</MN>,
        která není most.
      </p>
    )
  },
  {
    id: 9,
    showForSteps: [9],
    content: (
      <p>
        Zvolení libovolných vrcholů <MN>u</MN> a <MN>v</MN>.
      </p>
    )
  },
  {
    id: 10,
    showForSteps: [10],
    content: (
      <p>
        Příklad sestrojení <MN>u</MN>-<MN>v</MN> cesty <MN>{"P_{uv}"}</MN> v
        grafu <MN>G</MN>.
      </p>
    )
  },
  {
    id: 11,
    showForSteps: [11],
    content: (
      <p>
        Vlevo předchozí příklad <MN>u</MN>-<MN>v</MN> cesty <MN>{"P_{uv}"}</MN>{" "}
        v grafu <MN>G</MN>.
        <br />
        Vpravo příklad <MN>u</MN>-<MN>v</MN> cesty <MN>{"P'_{uv}"}</MN> v grafu{" "}
        <MN>G-e</MN>.
      </p>
    )
  },
  {
    id: 12,
    showForSteps: [12],
    content: (
      <p>
        <MN>x</MN>-<MN>y</MN> cesta <MN>{"P_{xy}"}</MN> v grafu <MN>G-e</MN>
      </p>
    )
  },
  {
    id: 13,
    showForSteps: [13],
    content: (
      <p>
        <MN>x</MN>-<MN>y</MN> cesta <MN>{"P_{xy}"}</MN> v grafu <MN>G</MN>
      </p>
    )
  },
  {
    id: 14,
    showForSteps: [14],
    content: (
      <p>
        Cesta <MN>{"P_{xy}"}</MN> spolu s hranou <MN>{"e=\\{x,y\\}"}</MN> tvoří
        kružnici v <MN>G</MN> obsahující hranu <MN>e</MN>.
      </p>
    )
  }
];

const definitionPanels = [
  {
    id: 1,
    showForSteps: [8],
    content: (
      <div>
        <p>
          DEFINICE MOSTU (1.11)
          <br />
          Nechť je dán graf <MN>G=(V,E)</MN>, vrchol <MN>v \in V</MN> a hrana{" "}
          <MN>e \in E</MN>.
        </p>
        <p>
          Hrana <MN>e</MN> je most grafu <MN>G</MN>, jestliže graf <MN>G-e</MN>{" "}
          má více komponent než graf <MN>G</MN>.
        </p>
      </div>
    )
  },
  {
    id: 2,
    showForSteps: [9, 10],
    content: (
      <p>
        DEFINICE SOUVISLÉHO GRAFU (1.9)
        <br />
        Souvislý graf je graf, ve kterém mezi každými jeho dvěma vrcholy
        existuje cesta.
      </p>
    )
  },
  {
    id: 3,
    showForSteps: [14],
    content: (
      <p>
        KRUŽNICE (Definice 1.8)
        <br />
        Kružnice délky <MN>k, k \geq 3</MN>, v grafu <MN>G</MN> je posloupnost{" "}
        <MN>{"(v_{0}, e_{1}, v_{1},...,e_{k}, v_{0})"}</MN>, kde{" "}
        <MN>{"e_{i}=\\{v_{i-1}, v_{i}\\}"}</MN>, <MN>i=1,...,k-1</MN>,{" "}
        <MN>{"e_{k}=\\{v_{k-1}, v_{0}\\}"}</MN> a pro <MN>i \neq j</MN> platí{" "}
        <MN>{"v_{i} \\neq v_{j}"}</MN>.
      </p>
    )
  }
];

const visualTextRows = [
  {
    id: 0,
    showForSteps: [0],
    content: <div></div>
  },
  {
    id: 1,
    showForSteps: [1, 2, 3, 4, 5, 6, 7],
    content: (
      <VisualTextRow left={270} top={10}>
        <MN classes={"t-green"}>A</MN>
        <MN>\Rightarrow</MN>
        <MN classes={"t-red"}>B</MN>
      </VisualTextRow>
    )
  },
  {
    id: 2,
    showForSteps: [2, 3, 4, 5, 6, 7],
    content: (
      <VisualTextRow left={120} top={60} classes={"t-green"}>
        <MN>A:</MN> v grafu <MN>G</MN> neexistuje kružnice
      </VisualTextRow>
    )
  },
  {
    id: 3,
    showForSteps: [3, 4, 5, 6, 7],
    content: (
      <VisualTextRow left={120} top={100} classes={"t-red"}>
        <MN>B:</MN> každá hrana v grafu <MN>G</MN> je most
      </VisualTextRow>
    )
  },
  {
    id: 4,
    showForSteps: [4, 5, 6, 7],
    content: (
      <VisualTextRow left={170} top={150}>
        <MN>(</MN>
        <MN classes={"t-green"}>A</MN>
        <MN>\Rightarrow</MN>
        <MN classes={"t-red"}>B</MN>
        <MN>)</MN>
        <MN>\Longleftrightarrow</MN>
        <MN>(</MN>
        <MN classes={"t-red"}>\neg B</MN>
        <MN>\Rightarrow</MN>
        <MN classes={"t-green"}>\neg A</MN>
        <MN>)</MN>
      </VisualTextRow>
    )
  },
  {
    id: 5,
    showForSteps: [5, 6, 7],
    content: (
      <VisualTextRow left={60} top={210} classes={"t-red"}>
        <MN>\neg B:</MN> existuje hrana v grafu <MN>G</MN>, která není most
      </VisualTextRow>
    )
  },
  {
    id: 6,
    showForSteps: [6, 7],
    content: (
      <VisualTextRow left={60} top={250} classes={"t-green"}>
        <MN>\neg A:</MN> v grafu <MN>G</MN> existuje kružnice
      </VisualTextRow>
    )
  },
  {
    id: 7,
    showForSteps: [7],
    content: (
      <VisualTextRow left={60} top={310} width={550}>
        Jestliže{" "}
        <span className={"t-red"}>
          existuje hrana v grafu <MN>G</MN>, která není most
        </span>
        , pak{" "}
        <span className={"t-green"}>
          v grafu <MN>G</MN> existuje kružnice
        </span>
        .
      </VisualTextRow>
    )
  }
];

const cameraPosition0 = {
  position: { x: 0, y: -10 },
  scale: 1.5,
  animation: { duration: 1500, easingFunction: "easeInOutQuad" }
};

const cameraPosition1 = {
  position: { x: 170, y: -10 },
  scale: 0.82,
  animation: { duration: 1000, easingFunction: "easeInOutQuad" }
};

const cameraPosition2 = {
  position: { x: 400, y: -10 },
  scale: 1.5,
  animation: { duration: 4000, easingFunction: "easeInOutQuad" }
};

export const constants = {
  headingTitle: headingTitle,
  breadcrumbsCurrent: breadcrumbsCurrent,
  stepSum: stepSum,
  claimPanel: claimPanel,
  proofStepPanels: proofStepPanels,
  descriptionPanels: descriptionPanels,
  definitionPanels: definitionPanels,
  visualTextRows: visualTextRows
};

export const cameraPositions = [
  cameraPosition0,
  cameraPosition1,
  cameraPosition2
];
