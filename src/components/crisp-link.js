import React from "react"

class CrispLink extends React.Component {

    constructor(props) {
      super(props);
      this.openCrisp = this.openCrisp.bind(this);
    }
  
    componentDidMount() {
      window.$crisp=[];
      window.CRISP_WEBSITE_ID="fd594c9c-47ec-4f5c-a47a-ad723321ae28";
      window.addEventListener('load', this.openCrisp);
   }
  
   componentWillUnmount() {
     window.removeEventListener('load', this.openCrisp);
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