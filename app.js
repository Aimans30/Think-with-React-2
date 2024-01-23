class ReactContainer extends React.Component {
    render() {
      return (
        <div>
          Hello! Welcome to Kalvium
          <div>Lets Rock and Roll -     This is Babel</div>
        </div>
      );
    }
  }
  
  const container = document.getElementById('react-container');
  ReactDOM.render(<ReactContainer />, container);
  