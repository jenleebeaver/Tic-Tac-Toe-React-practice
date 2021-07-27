class Square extends React.Component {
  constructor(props) {
    //STEP 4: calling super when defining the constructor of a subclass
    super(props);
    this.state = {
      value: null,
    };
  }
  
  render() {
    return (
      //STEP 3: make interactive component using onClick *remember 
      //STEP 6: replace onClick event handler with setState 
      <button className="square"
          onClick={() => this.setState({value: 'X'})}>
        {/*STEP 2: Show prop value*/}
        {/*this.props.value*/}
        {/*STEP 5: replace props with state */}
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  //STEP 7:
  //Lift State - add constructor  
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }
  //STEP 1
  //pass prop 
  renderSquare(i) {
    //modify props to read its current value.  Each square will receive a value prop that will either be 'X', 'O', or null
    return <Square value={this.state.squares[i]} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

