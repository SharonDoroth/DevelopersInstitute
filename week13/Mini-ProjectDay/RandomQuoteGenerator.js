import React from "react";

const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
  },

];

class RandomQuoteGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuoteIndex: this.getRandomIndex(),
      backgroundColor: this.getRandomColor(),
      headerColor: this.getRandomColor(),
      buttonColor: this.getRandomColor(),
    };
  }

  getRandomIndex() {
    return Math.floor(Math.random() * quotes.length);
  }

  getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  generateRandomQuote = () => {
    let newIndex = this.getRandomIndex();
    // Make sure to not display the same quote twice
    while (newIndex === this.state.currentQuoteIndex) {
      newIndex = this.getRandomIndex();
    }

    this.setState({
      currentQuoteIndex: newIndex,
      backgroundColor: this.getRandomColor(),
      headerColor: this.getRandomColor(),
      buttonColor: this.getRandomColor(),
    });
  };

  render() {
    const currentQuote = quotes[this.state.currentQuoteIndex];

    const quoteBoxStyle = {
      backgroundColor: this.state.backgroundColor,
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center",
    };

    const headerStyle = {
      color: this.state.headerColor,
    };

    const buttonStyle = {
      backgroundColor: this.state.buttonColor,
      color: "white",
      padding: "10px",
      borderRadius: "5px",
      cursor: "pointer",
    };

    return (
      <div style={quoteBoxStyle}>
        <h1 style={headerStyle}>{currentQuote.quote}</h1>
        <p>{currentQuote.author}</p>
        <button style={buttonStyle} onClick={this.generateRandomQuote}>
          New Quote
        </button>
      </div>
    );
  }
}

export default RandomQuoteGenerator;
