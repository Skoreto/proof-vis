import React from 'react';
import GraphVis from 'react-graph-vis';
import { Row, Col } from 'react-bootstrap';
import { SketchField } from 'react-sketch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dialog from 'react-dialog';
import PageHeader from '../PageHeading/PageHeader';
import ProofStepsBox from './ProofStepsBox/ProofStepsBox';
import Button from './Button/Button';
import StepCounter from './StepCounter/StepCounter';
import DescriptionPanel from './DescriptionPanel/DescriptionPanel';
import DefinitionPanel from './DefinitionPanel/DefinitionPanel';
import VisualTextsPanel from './VisualTextsPanel/VisualTextsPanel';
import DialogDrawing from '../../components/dialogs/DialogDrawing/DialogDrawing';
import '../ReactDialog/ReactDialog.css';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';


// function isTrue(textRow, index, array) {
//   return textRowshowForSteps.includes(props.currentStep);
// }

const ExerciseWrapper = (props) => (
  <div>
    <div className="page-wrapper">
      <PageHeader
        headingTitle={props.constants.headingTitle}
        breadcrumbsCurrent={props.constants.breadcrumbsCurrent}
      />
      <div className="page-content">
        {props.constants.claimPanel}
        <Row className="page-row">
          <Col xs={12} md={12} lg={5}>
            <aside>
              <ProofStepsBox
                proofStepPanels={props.constants.proofStepPanels}
                currentStep={props.currentStep} 
              />
            </aside>
          </Col>
          <Col xs={12} md={12} lg={7}>
            <main>
              {
                props.isSketchAllowed &&
                  <div className="over-component">
                    <SketchField
                      width="650px"
                      height="400px"
                      tool={props.sketchTool}
                      lineColor="#1E88E5"
                      lineWidth={3}
                    />
                  </div>
              }
              {
                props.isSVGCoverShowed &&
                  <div className="svg-cover-panel">
                    <svg
                      width={650}
                      height={400}
                      stroke={'black'}
                      strokeWidth={1}
                    >
                      {props.svgContent}
                    </svg>
                  </div>
              }
              {
                // (props.isVisTextShowed && props.constants.visualTextRows.filter(textRow => textRow.showForSteps.includes(props.currentStep)) === true )
                //  ? <VisualTextsPanel 
                //     visualTextRows={props.constants.visualTextRows}
                //     currentStep={props.currentStep}
                //   />
                //   : <div></div>

                // props.constants.visualTextRows.filter(textRow => textRow.showForSteps.includes(props.currentStep)) === true) &&
                props.constants.visualTextRows !== undefined &&
                props.constants.visualTextRows.length > 0 && props.constants.visualTextRows.some((textRow, index, array) => {return textRow.showForSteps.includes(props.currentStep)}) &&
                 <VisualTextsPanel 
                    visualTextRows={props.constants.visualTextRows}
                    currentStep={props.currentStep}
                  />
                
              }
              <div className="graph-box">
                <GraphVis
                  graph={{ nodes: props.nodes, edges: props.edges }}
                  options={props.options}
                  events={props.events} 
                  getNetwork={props.initNetworkInstance}
                />
              </div>
              <DescriptionPanel
                descriptionPanels={props.constants.descriptionPanels}
                currentStep={props.currentStep}
              />
              <div className="controls-panel">
                <span className="animation-panel">
                  <Button clicked={props.repeatStep} disabled={props.btnRepeatD}>
                    <FontAwesomeIcon icon="redo-alt" />
                  </Button>
                </span>
                <span className="step-panel">
                  <Button clicked={props.previousStep} disabled={props.btnPrevD}>
                    <FontAwesomeIcon icon="chevron-left" />
                  </Button>
                  <StepCounter currentStep={props.currentStep} stepSum={props.constants.stepSum} />
                  <Button clicked={props.nextStep} disabled={props.btnNextD}>
                    <FontAwesomeIcon icon="chevron-right" />
                  </Button>
                </span>
                <span className="sketch-buttons">
                  <Button
                    clicked={props.handleSketchAllowance}
                    active={props.btnSketchA}
                    addClass={props.btnSketchC}
                  >
                    <FontAwesomeIcon icon="paint-brush" />
                  </Button>
                  <Button
                    clicked={props.handleSketchPencil}
                    active={props.btnPencilA}
                    disabled={props.btnPencilD}
                  >
                    <FontAwesomeIcon icon="pencil-alt" />
                  </Button>
                  <Button
                    clicked={props.handleSketchLine}
                    active={props.btnLineA}
                    disabled={props.btnLineD}
                  >
                    <FontAwesomeIcon icon="minus" />
                  </Button>
                  <Button
                    clicked={props.handleSketchCircle}
                    active={props.btnCircleA}
                    disabled={props.btnCircleD}
                  >
                    <FontAwesomeIcon icon="circle-notch" />
                  </Button>
                </span>
                <span className="drawing-dialog-panel">
                  <Button clicked={props.handleDrawingDialog}>
                    <FontAwesomeIcon icon="edit" />
                  </Button>
                </span>
              </div>
              <DefinitionPanel
                definitionPanels={props.constants.definitionPanels}
                currentStep={props.currentStep}
              />
              {
                props.isDrawingDialogOpen &&
                  <Dialog  
                    width={610}
                    height={444}
                    modal={false}
                    closeOnEscape={true}
                    isDraggable={true}
                    title="Pomocné plátno"
                    onClose={props.handleDrawingDialog}
                  >
                    <DialogDrawing />
                  </Dialog>
              }
            </main>
          </Col>
        </Row>
      </div>
    </div>
  </div>
);

export default ExerciseWrapper;
