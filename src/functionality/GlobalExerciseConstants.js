import { Tools } from 'react-sketch';

/**
 * Czech localization for graphVis editing bar.
 */
export const graphVisLocales = {
  cs: {
    edit: 'Upravit',
    del: 'Smazat vybrané',
    back: 'Zpět',
    addNode: 'Přidat vrchol',
    addEdge: 'Přidat hranu',
    editNode: 'Upravit vrchol',
    editEdge: 'Upravit hranu',
    addDescription: 'Klikněte do prázdného prostoru pro umístění nového vrcholu.',
    edgeDescription: 'Táhnutím hrany od vybraného vrcholu ji spojte s jiným vrcholem.',
    editEdgeDescription: 'Přetáhněte konec hrany na vrchol, se kterým ji chcete spojit.',
    createEdgeError: 'Nelze připojit hrany ke clusteru.',
    deleteClusterError: 'Clustery nemohou být smazány.',
    editClusterError: 'Clustery nemohou být upraveny.',
  }
};

/**
 * Default presets for graphVis.
 */
export const graphVisOptions = {
  autoResize: true,
  height: '100%',
  width: '100%',
  locale: 'cs',
  locales: graphVisLocales,
  clickToUse: true, // smazat po vyzkouseni
  // Default node properties
  nodes: {
    shape: 'circle',
    color: { background: '#ffff08', border: '#000000' },
    label: '   ',
    margin: 12,
    font: { size: 18 },
  },
  // Default edge properties
  edges: {
    arrows: {
      to: { enabled: false, scaleFactor: 2 },
      from: { enabled: false, scaleFactor: 2 },
    },
    color: { color: '#000000', hover: '#000000' },
    width: 1,
    dashes: false,
    label: '   ',
    font: { align: 'top', size: 18 },
  },
  // Allow to interact with the graph
  interaction: {
    dragNodes: true,
    dragView: false,
    // Use node hover colors when to mouse moves over it
    hover: true,
    hoverConnectedEdges: false,
    // Longheld click or CTRT+click will add to the selection
    multiselect: true,
    navigationButtons: true,
    selectable: true,
    // Do not highlight connecting edges on selecting a node
    selectConnectedEdges: false,
    zoomView: true,
  },
  // Turn automatic graph rearranging off
  physics: false,
  // Turn configuration panel off
  configure: false,
  // configure: {
  //   enabled: true,
  //   filter: 'nodes,edges,layout,interaction,manipulation,physics,selection,renderer',
  //   showButton: true,
  // },
};

/**
 * Initial state of every Exercise component.
 */
export const initialExerciseState = {
  nodes: [],
  edges: [],
  options: graphVisOptions,
  timeouts: [],
  intervals: [],
  currentStep: 0,
  isSketchAllowed: false,
  sketchTool: Tools.Pencil,
  isSVGCoverShowed: false,
  svgContent: '',
  description: '',
  btnPrevD: true,
  btnNextD: false,
  btnSketchA: false,
  btnSketchC: '',
  btnPencilA: false,
  btnPencilD: true,
  btnLineA: false,
  btnLineD: true,
  btnCircleA: false,
  btnCircleD: true,
  repeatBoxHidden: true,
  repeatBoxContent: '',
  btnRepeatD: true,
  isDrawingDialogOpen: false,
};

/**
 * GraphVis events object.
 */
export const events = {};

/**
 * Palette of global color presets.
 */
export const palette = {
  yellow: '#FFFF08',
  black: '#000000',
  white: '#FFFFFF',
  lightpurple: '#D1C4E9',
  purple: '#B39DDB',  // #B388FF
  green: '#81C784',
  jade: '#4DB6AC',
  red: '#F06292',
  ruby: '#EC407A',
  orange: '#FF7043',
};
