import { h, Component } from "preact";

class Bundle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mod: null
    };
  }

  componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  load(props) {
    console.log("Loading");
    this.setState({
      mod: null
    });
    props.load(mod => {
      console.log("Loaded:", mod);
      this.setState(state => ({
        mod: mod.default ? mod.default : mod
      }));
    });
  }

  render() {
    return this.props.children[0](this.state.mod);
  }
}

export default Bundle;
