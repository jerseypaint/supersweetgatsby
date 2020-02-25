import React from "react"

class CrispLink extends React.Component {

    constructor(props) {
      super(props);
      this.openCrisp = this.openCrisp.bind(this);
    }
  
    openCrisp(e) {
      e.preventDefault();
      (function() {
        let $crisp = window.$crisp
        $crisp.push(['do', 'chat:open'])
      })();
    }
  
    render() {
      return (
        <button onClick={this.openCrisp} className={this.props.className}>
          {this.props.children}
        </button>
      )
    }
  }

  export default CrispLink