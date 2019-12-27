import React from "react";
import {
  initialProofState,
  palette
} from "../../../functionality/globalProofConstants";
import { constants, cameraPositions } from "./constants";
import {
  updateNode,
  updateEdge,
  updateEdgeWithArrow,
  getNodesWithNewPositions,
  updateEdgeSmooth,
  addObjectArray
} from "../../../functionality/graphFunctions";
import {
  clearAllTimers,
  updateCurrentStep,
  handlerSketchAllowance,
  handlerSelectedTool,
  handlerDrawingDialog
} from "../../../functionality/proofFunctions";
import ProofWrapper from "../../../UI/ProofWrapper/ProofWrapper";

class Proof7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialProofState;
    this.initNetworkInstance = this.initNetworkInstance.bind(this);
    this.updateNode = updateNode.bind(this);
    this.getNodesWithNewPositions = getNodesWithNewPositions.bind(this);
    this.updateEdge = updateEdge.bind(this);
    this.updateEdgeWithArrow = updateEdgeWithArrow.bind(this);
    this.updateEdgeSmooth = updateEdgeSmooth.bind(this);
    this.addObjectArray = addObjectArray.bind(this);
    this.clearAllTimers = clearAllTimers.bind(this);
    this.updateCurrentStep = updateCurrentStep.bind(this);
    this.handlerSketchAllowance = handlerSketchAllowance.bind(this);
    this.handlerSelectedTool = handlerSelectedTool.bind(this);
    this.handlerDrawingDialog = handlerDrawingDialog.bind(this);
  }

  /**
   * Initialize graphVis network instance.
   * @param {Object} networkInstance - Object of network instance returned by getNetwork() callback function.
   */
  initNetworkInstance(networkInstance) {
    this.network = networkInstance;
  }

  nextStep = () => {
    if (this.state.currentStep < constants.stepSum) {
      switch (this.state.currentStep) {
        case 0: {
          this.setState({ btnPrevD: false });
          this.setState(this.step1);
          this.network.moveTo(cameraPositions[0]);
          break;
        }
        case 1: {
          this.setState({ btnRepeatD: false });
          this.step2();
          let interval1 = setInterval(this.step2, 8000);
          this.setState({ intervals: [interval1] });
          break;
        }
        case 2: {
          this.clearAllTimers(this.state);
          this.setState(this.colorReset);
          this.step3();
          let interval2 = setInterval(this.step3, 17000);
          this.setState({ intervals: [interval2] });
          break;
        }
        case 3: {
          this.setState({ btnNextD: true });
          break;
        }
        default: {
          break;
        }
      }

      this.updateCurrentStep(this.state.currentStep, 1);
    }
  };

  previousStep = () => {
    if (this.state.currentStep > 0) {
      switch (this.state.currentStep) {
        case 1: {
          this.setState({ btnPrevD: true });
          this.clearAllTimers(this.state);
          this.setState(this.stepReset);
          break;
        }
        case 2: {
          this.setState({ btnRepeatD: true });
          this.clearAllTimers(this.state);
          this.setState(this.colorReset);
          break;
        }
        case 3: {
          this.setState({ btnNextD: false });
          this.setState({ btnRepeatD: false });
          this.clearAllTimers(this.state);
          this.setState(this.colorReset);
          this.step2();
          let interval1 = setInterval(this.step2, 8000);
          this.setState({ intervals: [interval1] });
          break;
        }
        case 4: {
          this.setState({ btnNextD: false });
          break;
        }
        default: {
          break;
        }
      }

      this.updateCurrentStep(this.state.currentStep, -1);
    }
  };

  repeatStep = () => {
    this.clearAllTimers(this.state);
    this.setState(this.colorReset);

    switch (this.state.currentStep) {
      case 2: {
        this.step2();
        let interval1 = setInterval(this.step2, 8000);
        this.setState({ intervals: [interval1] });
        break;
      }
      case 3: {
        this.step3();
        let interval2 = setInterval(this.step3, 17000);
        this.setState({ intervals: [interval2] });
        break;
      }
      case 4: {
        this.step3();
        let interval2 = setInterval(this.step3, 17000);
        this.setState({ intervals: [interval2] });
        break;
      }
      default: {
        break;
      }
    }
  };

  stepReset = () => {
    return { nodes: [], edges: [] };
  };

  colorReset = () => {
    return {
      nodes: [
        { id: 1, color: { background: palette.yellow }, label: " u " },
        { id: 2, color: { background: palette.yellow }, label: " w " },
        { id: 3, color: { background: palette.yellow }, label: " v " }
      ],
      edges: [
        { id: 1, from: 1, to: 2, label: "e1" },
        { id: 2, from: 2, to: 3, label: "e2" }
      ]
    };
  };

  step1 = () => {
    return {
      nodes: [
        {
          id: 1,
          x: -240,
          y: 0,
          color: { background: palette.yellow },
          label: " u "
        },
        {
          id: 2,
          x: 0,
          y: 0,
          color: { background: palette.yellow },
          label: " w "
        },
        {
          id: 3,
          x: 240,
          y: 0,
          color: { background: palette.yellow },
          label: " v "
        }
      ],
      edges: [
        { id: 1, from: 1, to: 2, label: "e1" },
        { id: 2, from: 2, to: 3, label: "e2" }
      ]
    };
  };

  step2 = () => {
    this.setState({
      timeouts: [
        setTimeout(() => {
          this.setState(this.step2a);
        }, 1000),
        setTimeout(() => {
          this.setState(this.step2b);
        }, 2000),
        setTimeout(() => {
          this.setState(this.step2c);
        }, 3000),
        setTimeout(() => {
          this.setState(this.step2d);
        }, 4000),
        setTimeout(() => {
          this.setState(this.step2e);
        }, 5000),
        setTimeout(() => {
          this.setState(this.colorReset);
        }, 7000)
      ]
    });
  };

  step2a = state => {
    return {
      nodes: this.updateNode(
        this.getNodesWithNewPositions(this.network.getPositions(), state.nodes),
        0,
        palette.blue,
        " u "
      )
    };
  };

  step2b = state => {
    let newEdges = this.updateEdgeWithArrow(
      state.edges,
      0,
      palette.blue,
      3,
      false,
      "e1",
      true,
      false
    );
    return { edges: newEdges };
  };

  step2c = state => {
    let newNodes = this.updateNode(
      this.getNodesWithNewPositions(this.network.getPositions(), state.nodes),
      1,
      palette.blue,
      " w "
    );
    let newEdges = this.updateEdgeWithArrow(
      state.edges,
      0,
      palette.blue,
      3,
      false,
      "e1",
      false,
      false
    );
    return { nodes: newNodes, edges: newEdges };
  };

  step2d = state => {
    return {
      edges: this.updateEdgeWithArrow(
        state.edges,
        1,
        palette.blue,
        3,
        false,
        " e2 ",
        true,
        false
      )
    };
  };

  step2e = state => {
    let newNodes = this.updateNode(
      this.getNodesWithNewPositions(this.network.getPositions(), state.nodes),
      2,
      palette.blue,
      " v "
    );
    let newEdges = this.updateEdgeWithArrow(
      state.edges,
      1,
      palette.blue,
      3,
      false,
      " e2 ",
      false,
      false
    );
    return { nodes: newNodes, edges: newEdges };
  };

  step3 = () => {
    this.setState({
      timeouts: [
        setTimeout(() => {
          this.setState(this.step3a);
        }, 1000),
        setTimeout(() => {
          this.setState(this.step3b);
        }, 2500),
        setTimeout(() => {
          this.setState(this.step3c);
        }, 4000),
        setTimeout(() => {
          this.setState(this.step3e);
        }, 5500),
        setTimeout(() => {
          this.setState(this.step3f);
        }, 7000),
        setTimeout(() => {
          this.setState(this.step3h);
        }, 8500),
        setTimeout(() => {
          this.setState(this.step3i);
        }, 10000),
        setTimeout(() => {
          this.setState(this.step3j);
        }, 11500),
        setTimeout(() => {
          this.setState(this.step3k);
        }, 13000),
        setTimeout(() => {
          this.setState(this.colorReset);
        }, 16000)
      ]
    });
  };

  step3a = state => {
    return { nodes: this.updateNode(state.nodes, 0, palette.blue, " u ") };
  };

  step3b = state => {
    return {
      edges: this.updateEdgeWithArrow(
        state.edges,
        0,
        palette.blue,
        3,
        false,
        " e1 ",
        true,
        false
      )
    };
  };

  step3c = state => {
    return { nodes: this.updateNode(state.nodes, 1, palette.blue, " w ") };
  };

  step3e = state => {
    return {
      edges: this.addObjectArray(state.edges, [
        {
          id: 3,
          from: 2,
          to: 1,
          color: { color: palette.blue, hover: palette.blue },
          width: 3,
          arrows: { to: { enabled: true } },
          smooth: { enabled: true, type: "curvedCW", roundness: 0.3 }
        }
      ])
    };
  };

  step3f = state => {
    return { nodes: this.updateNode(state.nodes, 0, palette.darkblue, " u ") };
  };

  step3h = state => {
    return {
      edges: this.addObjectArray(state.edges, [
        {
          id: 4,
          from: 1,
          to: 2,
          color: { color: palette.blue, hover: palette.blue },
          width: 3,
          arrows: { to: { enabled: true } },
          smooth: { enabled: true, type: "curvedCW", roundness: 0.3 }
        }
      ])
    };
  };

  step3i = state => {
    return { nodes: this.updateNode(state.nodes, 1, palette.darkblue, " w ") };
  };

  step3j = state => {
    return {
      edges: this.updateEdgeWithArrow(
        state.edges,
        1,
        palette.blue,
        3,
        false,
        " e2 ",
        true,
        false
      )
    };
  };

  step3k = state => {
    return { nodes: this.updateNode(state.nodes, 2, palette.blue, " v ") };
  };

  render() {
    return (
      <ProofWrapper
        {...this.state}
        initNetworkInstance={this.initNetworkInstance}
        constants={constants}
        previousStep={this.previousStep}
        nextStep={this.nextStep}
        repeatStep={this.repeatStep}
        handleSketchAllowance={() =>
          this.setState(() => this.handlerSketchAllowance(this.state))
        }
        handleSketchPencil={() =>
          this.setState(() => this.handlerSelectedTool(1))
        }
        handleSketchLine={() =>
          this.setState(() => this.handlerSelectedTool(2))
        }
        handleSketchCircle={() =>
          this.setState(() => this.handlerSelectedTool(3))
        }
        handleDrawingDialog={() =>
          this.setState(() =>
            this.handlerDrawingDialog(this.state.isDrawingDialogOpen)
          )
        }
      />
    );
  }
}

export default Proof7;
