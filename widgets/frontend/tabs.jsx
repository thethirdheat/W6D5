import React from 'react';

class Tabs extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = { 
      index: 0
    };

    this.clickListener = this.clickListener.bind(this);
  }

  clickListener(i) {
    this.setState( {index: i} );
  }

  render(){
    return (
      <div>
        <h1>Tabs</h1>
        <div class="samContainer">
          <div className="tabsContainer">
            <ul className="tabs">
              {this.props.content.map((content, i) => { return <h2 className={this.state.index === i ? "bold tab":"tab"} onClick={() => this.clickListener(i)}>{content.title}</h2> }) }
            </ul>
            <article className="tabContentContainer">
              <div className="tabContent">
                {this.props.content[this.state.index].content}
              </div>
            </article>
          </div>
        </div>
      </div>
    )
  }
}

export default Tabs ;