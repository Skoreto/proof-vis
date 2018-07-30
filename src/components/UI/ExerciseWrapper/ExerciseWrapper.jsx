import React from 'react';
import GraphVis from 'react-graph-vis';
import { Row, Col } from 'react-bootstrap';
import { SketchField } from 'react-sketch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageHeader from '../../../components/UI/PageHeading/PageHeader';
import ProofBox from '../../../components/UI/ProofBox/ProofBox';
import Button from '../../../components/UI/Button/Button';
import StepCounter from '../../../components/UI/StepCounter/StepCounter';
import DescriptionPanel from '../../../components/UI/DescriptionPanel/DescriptionPanel';
import DefinitionPanel from '../../../components/UI/DefinitionPanel/DefinitionPanel';
import Dialog from 'react-dialog';
import DialogDrawing from '../../../components/DialogDrawing/DialogDrawing';
import '../../../drawingDialog.css';

const ExerciseWrapper = (props) => (
  <div>
    <div className='page-wrapper'>
      <PageHeader
        headingTitle={props.headingTitle}
        breadcrumbsCurrent={props.breadcrumbsCurrent}
      />
      <div className='page-content'>
        {props.claimPanel}
        <Row className='page-row'>
          <Col xs={12} md={12} lg={5}>
            <aside>
              <ProofBox proofPanels={props.proofPanels} currentStep={props.currentStep} />
            </aside>
          </Col>
          <Col xs={12} md={12} lg={7}>
            <main>
              {
                props.isSketchAllowed &&
                  <div className={'over-component'}>
                    <SketchField
                      width='650px'
                      height='400px'
                      tool={props.sketchTool}
                      lineColor='#1E88E5'
                      lineWidth={3}
                    />
                  </div>
              }
              {
                props.isSVGCoverShowed &&
                  <div className={'svg-cover-panel'}>
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
              <div className='GraphBox'>
                <GraphVis
                  graph={props.graphVis}
                  options={props.options}
                  events={props.events}
                  style={{ width: '100%', height: '400px' }}
                  getNetwork={props.initNetworkInstance}
                />
              </div>
              <DescriptionPanel>
                {props.description}
              </DescriptionPanel>
              <div className='controls-panel'>
                <span className='animation-panel'>
                  <Button clicked={props.repeatStep} disabled={props.btnRepeatD}>
                    <FontAwesomeIcon icon="redo-alt" />
                  </Button>
                </span>
                <span className='step-panel'>
                  <Button clicked={props.previousStep} disabled={props.btnPrevD}>
                    <FontAwesomeIcon icon="chevron-left" />
                  </Button>
                  <StepCounter currentStep={props.currentStep} stepSum={props.stepSum} />
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
              <DefinitionPanel hidden={props.repeatBoxHidden}>
                {props.repeatBoxContent}
              </DefinitionPanel>
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
