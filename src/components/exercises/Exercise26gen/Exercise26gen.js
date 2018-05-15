import React, {Component} from 'react';
import {Tools} from 'react-sketch';
import {updateNode, updateEdge, updateEdgeWithArrow, clearAllTimers,
    handlerSketchAllowance, handlerSelectedTool, graphVisOptions} from '../../../functionality/GraphFunctions'
import ExerciseWrapper from '../../../components/UI/ExerciseWrapper/ExerciseWrapper';
import DefinitionPanel from '../../../components/UI/DefinitionPanel/DefinitionPanel';
import MN from '../../../components/MathJax/MathJaxNode'

class Exercise26gen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            graphVis: {
                nodes: [],
                edges: []
            },
            options: graphVisOptions,
            events: {},
            timeouts: [],
            intervals: [],
            currentStep: 0,
            stepSum: 5,
            headingTitle: 'Příklad 26 (generalized)',
            breadcrumbsCurrent: 'Důkazy přímo',
            isSketchAllowed: false,
            sketchTool: Tools.Pencil,
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
            repeatBoxContent: ''
        };
        this.updateNode = updateNode.bind(this);
        this.updateEdge = updateEdge.bind(this);
        this.updateEdgeWithArrow = updateEdgeWithArrow.bind(this);
        this.clearAllTimers = clearAllTimers.bind(this);
        this.handlerSketchAllowance = handlerSketchAllowance.bind(this);
        this.handlerSelectedTool = handlerSelectedTool.bind(this);
    }

    nextStep = () => {
        if (this.state.currentStep < 5) {
            if (this.state.currentStep === 0) {
                this.setState({btnPrevD: false});
                this.setState(this.step1);
                this.setState(this.step1Texts);
            }

            if (this.state.currentStep === 1) {
                this.setState(this.step2);
                this.setState(this.step2Texts);
            }

            if (this.state.currentStep === 2) {
                this.step3();
                let interval1 = setInterval(this.step3, 3000);
                this.setState({intervals: [interval1]});
            }

            if (this.state.currentStep === 3) {
                this.clearAllTimers(this.state);
                this.step4();
                let interval2 = setInterval(this.step4, 3000);
                this.setState({intervals: [interval2]});
                this.setState(this.step4Texts);
            }

            if (this.state.currentStep === 4) {
                this.setState({btnNextD: true});
                this.clearAllTimers(this.state);
                this.setState(this.step4a);
                this.setState(this.step5Texts);
            }

            // Increase currentStep after a step was executed
            this.setState((state) => {return {currentStep: ++state.currentStep}});
        }
    };

    previousStep = () => {
        if (this.state.currentStep > 0) {
            if (this.state.currentStep === 1) {
                this.setState({btnPrevD: true});
                this.setState(this.stepReset);
            }

            if (this.state.currentStep === 2) {
                this.setState(this.stepReset);
                this.setState(this.step1);
                this.setState(this.step1Texts);
            }

            if (this.state.currentStep === 3) {
                this.clearAllTimers(this.state);
                this.setState(this.stepReset);
                this.setState(this.step1);
                this.setState(this.step2);
                this.setState(this.step2Texts);
            }

            if (this.state.currentStep === 4) {
                this.clearAllTimers(this.state);
                this.setState(this.stepReset);
                this.setState(this.step1);
                this.setState(this.step2);
                this.step3();
                let interval1 = setInterval(this.step3, 3000);
                this.setState({intervals: [interval1]});
            }

            if (this.state.currentStep === 5) {
                this.setState({btnNextD: false});
                this.clearAllTimers(this.state);
                this.step4();
                let interval2 = setInterval(this.step4, 3000);
                this.setState({intervals: [interval2]});
                this.setState(this.step4Texts);
            }

            // Reduce currentStep after a step was executed
            this.setState((state) => {return {currentStep: --state.currentStep}});
        }
    };

    stepReset = () => {
        return {graphVis: {nodes: [], edges: []}, descriptionBox: '', repeatBoxHidden: true, repeatBoxContent: ''}
    };

    step1 = () => {
        return {
            graphVis: {
                nodes: [
                    {id: 1, x: 0, y: -150, color: {background: '#ffff08'}, label: '   '},
                    {id: 2, x: -70, y: -50, color: {background: '#ffff08'}, label: '   '},
                    {id: 3, x: -140, y: 50, color: {background: '#ffff08'}, label: '   '},
                    {id: 4, x: 0, y: 50, color: {background: '#ffff08'}, label: '   '},
                    {id: 5, x: -70, y: 150, color: {background: '#ffff08'}, label: '   '},
                    {id: 6, x: 70, y: 150, color: {background: '#ffff08'}, label: '   '},
                    {id: 7, x: 70, y: -50, color: {background: '#ffff08'}, label: '   '},
                    {id: 8, x: 140, y: 50, color: {background: '#ffff08'}, label: '   '}
                ],
                edges: [
                    {id: 1, from: 1, to: 2},
                    {id: 2, from: 2, to: 3},
                    {id: 3, from: 2, to: 4},
                    {id: 4, from: 4, to: 5},
                    {id: 5, from: 4, to: 6},
                    {id: 6, from: 1, to: 7},
                    {id: 7, from: 7, to: 8}
                ]
            }
        }
    };

    step1Texts = () => {
        const description = (<p>Příklad grafu <MN>G</MN>, který je strom</p>);
        const repeatBox = (
            <div>
                <p>VĚTA O STROMECH (4.1)
                    <br/>Pro každý graf <MN>G=(V,E)</MN> jsou následující podmínky ekvivalentní:</p>
                <p>
                    I. graf <MN>G</MN> je strom.<br/>
                    II. Pro každé dva vrcholy <MN>x,y \in V</MN> existuje
                    právě jedna cesta z vrcholu <MN>x</MN> do vrcholu <MN>y</MN>.
                </p>
            </div>
        );

        return {description: description, repeatBoxHidden: false, repeatBoxContent: repeatBox}
    };

    step2 = (state) => {
        let newNodes = this.updateNode(state.graphVis.nodes, 0, '#B39DDB', '   ');
        newNodes = this.updateNode(newNodes, 1, '#B39DDB', '   ');
        newNodes = this.updateNode(newNodes, 3, '#B39DDB', '   ');
        newNodes = this.updateNode(newNodes, 5, '#B39DDB', ' v ');
        newNodes = this.updateNode(newNodes, 6, '#B39DDB', ' u ');

        let newEdges = this.updateEdge(state.graphVis.edges, 0, '#B39DDB', 2, false, undefined);
        newEdges = this.updateEdge(newEdges, 2, '#B39DDB', 2, false, undefined);
        newEdges = this.updateEdge(newEdges, 4, '#B39DDB', 2, false, undefined);
        newEdges = this.updateEdge(newEdges, 5, '#B39DDB', 2, false, undefined);

        return {graphVis: {nodes: newNodes, edges: newEdges}, descriptionBox: ''}
    };

    step2Texts = () => {
        const description = (<p>Mezi libovolně zvolenými vrcholy <MN>u,v</MN> existuje jediná cesta.</p>);
        const repeatBox = (
            <div>
                <p>VĚTA O STROMECH (4.1)
                    <br/>Pro každý graf <MN>G=(V,E)</MN> jsou následující podmínky ekvivalentní:</p>
                <p>
                    I. graf <MN>G</MN> je strom.<br/>
                    II. Pro každé dva vrcholy <MN>x,y \in V</MN> existuje
                    právě jedna cesta z vrcholu <MN>x</MN> do vrcholu <MN>y</MN>.
                </p>
            </div>
        );
        return {description: description, repeatBoxHidden: false, repeatBoxContent: repeatBox}
    };

    step3 = () => {
        this.setState(this.step3b);
        let timeout3a = setTimeout(()=> {this.setState(this.step3a);}, 1000);
        let timeout3b = setTimeout(()=> {this.setState(this.step3b);}, 2000);

        this.setState({timeouts: [timeout3a, timeout3b], description: '', repeatBoxHidden: true,
            repeatBoxContent: ''});
    };

    step3a = (state) => {
        let newNodes = this.updateNode(state.graphVis.nodes, 1, '#B39DDB', ' x ');
        newNodes = this.updateNode(newNodes, 3, '#B39DDB', ' y ');
        let newEdges = this.updateEdge(state.graphVis.edges, 2, '#F06292', 2, [8,8], ' e ');
        return {graphVis: {nodes: newNodes, edges: newEdges}}
    };

    step3b = (state) => {
        let newNodes = this.updateNode(state.graphVis.nodes, 1, '#B39DDB', ' x ');
        newNodes = this.updateNode(newNodes, 3, '#B39DDB', ' y ');
        let newEdges = this.updateEdge(state.graphVis.edges, 2, '#B39DDB', 2, false, ' e ');
        return {graphVis: {nodes: newNodes, edges: newEdges}}
    };

    step4 = () => {
        this.setState(this.step3a);
        let timeout4a = setTimeout(()=> {this.setState(this.step4a);}, 1000);
        let timeout4b = setTimeout(()=> {this.setState(this.step3a);}, 2000);

        this.setState({timeouts: [timeout4a, timeout4b], repeatBoxHidden: true, repeatBoxContent: ''});
    };

    step4a = (state) => {
        let newNodes = this.updateNode(state.graphVis.nodes, 1, '#B39DDB', ' x ');
        newNodes = this.updateNode(newNodes, 3, '#B39DDB', ' y ');
        let newEdges = this.updateEdge(state.graphVis.edges, 2, '#FFFFFF', 2, false, '   ');
        return {graphVis: {nodes: newNodes, edges: newEdges}}
    };

    step4Texts = () => {
        const description = (<p>Odebráním hrany <MN>e</MN> se vrcholy <MN>u</MN> a <MN>v</MN> ocitnou v různých
            komponentách souvislosti.</p>);
        return {description: description}
    };

    step5Texts = () => {
        const description = (<p>Graf <MN>G-e</MN> není souvislý a není tedy ani stromem.</p>);
        const repeatBox = (
            <div>
                <p>DEFINICE STROMU (4.3)<br/>
                    Strom je <u>souvislý</u> graf, který neobsahuje kružnici.</p>
            </div>
        );

        return {description: description, repeatBoxHidden: false, repeatBoxContent: repeatBox}
    };

    render() {
        const definitionPanel = (
            <DefinitionPanel>
                Dokažte přímo tvrzení:
                <cite><q>Jestliže graf <MN>G</MN> je strom, pak graf <MN>G-e</MN>, kde <MN>e</MN> je libovolná
                    hrana grafu <MN>G</MN>, již není strom.</q></cite>
                <br/>
                (K důkazu použijte známé definice a věty týkající se stromů.)
            </DefinitionPanel>
        );

        const proofBox = (
            <div className='bg-warning' id='proofBox'>
                <div className={(1 === this.state.currentStep) ||
                (2 === this.state.currentStep) ? 'proof-active' : ''}>
                    <p>Pokud graf <MN>G</MN> je strom <br/>
                        <MN>\Rightarrow</MN> pak dle věty o stromech platí, že pro
                        každé dva vrcholy v grafu <MN>G</MN> existuje jediná cesta.
                    </p>
                </div>
                {/*<div className={2 === this.state.currentStep ? 'proof-active' : ''}>*/}
                    {/*<p>Mezi libovolně zvolenými vrcholy <MN>u</MN> a <MN>v</MN> existuje jediná cesta.</p>*/}
                {/*</div>*/}
                <div className={3 === this.state.currentStep ? 'proof-active' : ''}>
                    <p><MN>\Rightarrow</MN> Protože existuje právě jediná cesta mezi
                        vrcholy <MN>u,v</MN>, musí vždy vést přes libovolně
                        zvolenou hranu <MN>{'e=\\{x,y\\}'}</MN> z této cesty.</p>
                </div>
                <div className={4 === this.state.currentStep ? ' proof-active' : ''}>
                    <p>
                        <MN>\Rightarrow</MN> v <MN>G-e</MN> neexistuje
                        cesta <MN>u</MN>-<MN>v</MN>
                        <br/><MN>\Rightarrow</MN> vrcholy <MN>u</MN>,<MN>v</MN> se
                        v <MN>G-e</MN> nacházejí v různých komponentách souvislosti
                    </p>
                </div>
                <div className={'borderless' +
                (5 === this.state.currentStep ? ' proof-active' : '')}>
                    <p>
                        <MN>\Rightarrow</MN> <MN>G-e</MN> není souvislý
                        <br/><MN>\Rightarrow</MN> z definice stromu platí,
                        že <MN>G-e</MN> není strom
                    </p>
                    <p className="text-center">
                        <MN>\dagger</MN> Tím je dokázáno stanovené tvrzení.
                    </p>
                </div>
            </div>
        );

        return (
            <ExerciseWrapper {...this.state} definitionPanel={definitionPanel} proofBox={proofBox} 
                previousStep={this.previousStep} nextStep={this.nextStep} 
                handleSketchAllowance={() => this.setState(() => this.handlerSketchAllowance(this.state))}
                handleSketchPencil={() => this.setState(() => this.handlerSelectedTool(1))}
                handleSketchLine={() => this.setState(() => this.handlerSelectedTool(2))}
                handleSketchCircle={() => this.setState(() => this.handlerSelectedTool(3))} />
        );
    }
}

export default Exercise26gen;