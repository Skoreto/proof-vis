import React from 'react';
import GraphVis from 'react-graph-vis';
import { Row, Col } from 'react-bootstrap';
import { SketchField } from 'react-sketch';
import M from 'react-mathjax2';
import PageHeading from '../../../components/UI/PageHeading/PageHeading';
import Button from '../../../components/UI/Button/Button';
import StepCounter from '../../../components/UI/StepCounter/StepCounter';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight';
import faChevronLeft from '@fortawesome/fontawesome-free-solid/faChevronLeft';
import faPaintBrush from '@fortawesome/fontawesome-free-solid/faPaintBrush';
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt';
import faMinus from '@fortawesome/fontawesome-free-solid/faMinus';
import faCircle from '@fortawesome/fontawesome-free-solid/faCircleNotch';
import faRedoAlt from '@fortawesome/fontawesome-free-solid/faRedoAlt';

const ExerciseWrapper = (props) => (
  <div>
    <div className='page-wrapper'>
      <PageHeading
        headingTitle={props.headingTitle}
        breadcrumbsCurrent={props.breadcrumbsCurrent}
      />
      <div className='page-content'>
        {props.definitionPanel}
        <Row className='page-row'>
          <Col xs={12} md={12} lg={5}>
            <aside>
              <div id='divProofContainer'>
                <M.Context input='tex'>
                  <div>
                    {props.proofBox}
                  </div>
                </M.Context>
              </div>
              <div className={'repeat-box'} hidden={props.repeatBoxHidden}>
                <M.Context input='tex'>
                  <div>
                    {props.repeatBoxContent}
                  </div>
                </M.Context>
              </div>
            </aside>
          </Col>
          <Col xs={12} md={12} lg={7}>
            <main>
              {
                props.isSketchAllowed ? (
                  <div className={'over-component'}>
                    <SketchField
                      width='650px'
                      height='400px'
                      tool={props.sketchTool}
                      lineColor='#1E88E5'
                      lineWidth={3}
                    />
                  </div>
                ) : (<div></div>)
              }
              {
                props.isSVGCoverShowed ? (
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
                ) : (<div></div>)
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
              <M.Context input='tex'>
                <div className='descriptionBox'>
                  {props.description}
                </div>
              </M.Context>
              <div className='controls-panel'>
                <span className='step-panel'>
                  <Button clicked={props.previousStep} disabled={props.btnPrevD}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </Button>
                  <StepCounter currentStep={props.currentStep} stepSum={props.stepSum} />
                  <Button clicked={props.nextStep} disabled={props.btnNextD}>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </Button>
                </span>
                <span className='sketch-buttons'>
                  <Button
                    clicked={props.handleSketchAllowance}
                    active={props.btnSketchA}
                    addClass={props.btnSketchC}
                  >
                    <FontAwesomeIcon icon={faPaintBrush} />
                  </Button>
                  <Button
                    clicked={props.handleSketchPencil}
                    active={props.btnPencilA}
                    disabled={props.btnPencilD}
                  >
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </Button>
                  <Button
                    clicked={props.handleSketchLine}
                    active={props.btnLineA}
                    disabled={props.btnLineD}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </Button>
                  <Button
                    clicked={props.handleSketchCircle}
                    active={props.btnCircleA}
                    disabled={props.btnCircleD}
                  >
                    <FontAwesomeIcon icon={faCircle} />
                  </Button>
                </span>
                <span className='animation-panel'>
                  <Button clicked={props.repeatStep} disabled={props.btnRepeatD}>
                    <FontAwesomeIcon icon={faRedoAlt} />
                  </Button>
                </span>
              </div>
            </main>
          </Col>
        </Row>
      </div>
    </div>
  </div>
);

export default ExerciseWrapper;
