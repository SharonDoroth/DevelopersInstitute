// Daily Challenge

import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaScript", votes: 0 },
        { name: "Java", votes: 0 },
      ],
    };
  }

  increaseVote = (index) => {
    this.setState((prevState) => {
      const updatedLanguages = [...prevState.languages];
      updatedLanguages[index].votes += 1;
      return {
        languages: updatedLanguages,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Vote for Your Favorite Language</h1>
        {this.state.languages.map((language, index) => (
          <div key={index}>
            <p>
              {language.name}: {language.votes} votes
            </p>
            <button onClick={() => this.increaseVote(index)}>Vote</button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
