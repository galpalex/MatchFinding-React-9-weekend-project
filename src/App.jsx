import React from "react";
import "./styles.css";
import data from "./components/data";
import Popup from "./components/Popup";
import Item from "./components/Item";
import Counter from "./components/Counter";
import Button from "./components/Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      dislikes: 0,
      currentItem: 1,
      isLikeDogs: false,
      isNotLikeDogs: false,
      isButtonDisabled: false,
    };
  }

  increment = (e) => {
    if (e.target.innerText === "✔️") {
      this.setState(
        {
          likes: this.state.likes + 1,
        },
        () => {
          this.nextItem();
        }
      );
    } else {
      this.setState(
        {
          dislikes: this.state.dislikes + 1,
        },
        () => {
          this.nextItem();
        }
      );
    }
  };

  nextItem = () => {
    if (this.state.currentItem !== data.length) {
      this.setState({
        currentItem: this.state.currentItem + 1,
      });
    } else {
      this.setState({
        isButtonDisabled: true,
      });
      if (this.state.likes >= this.state.dislikes) {
        this.setState({
          isLikeDogs: true,
        });
      } else {
        this.setState({
          isNotLikeDogs: true,
        });
      }
    }
  };
  render() {
    return (
      <div>
        <div className="top-line"></div>
        <Popup
          myClass="true-love"
          myLink="https://giphy.com/embed/3ov9jHelnoql2LKAow"
          myWidth="468"
          myHeight="480"
          text="You have true love to dogs"
          myState={this.state.isLikeDogs}
        />

        <Popup
          myClass="no-love"
          myLink="https://giphy.com/embed/MAtKCGwJHblVC"
          myWidth="480"
          myHeight="270"
          text="It's sad that you don't like dogs"
          myState={this.state.isNotLikeDogs}
        />

        <div className="card-container">
          <div className="nav-container">
            <Counter
              myClass="dislikes"
              myState={this.state.dislikes}
              label="negative"
              smiley="👎"
            />
            <Counter
              myClass="likes"
              myState={this.state.likes}
              label="positive"
              smiley="👍"
            />
          </div>

          <Item myState={this.state.currentItem} />

          <div className="bottom-container">
            <Button
              callback={this.increment}
              label="crossMark"
              smiley="❌"
              myState={this.state.isButtonDisabled}
            />
            <Button
              callback={this.increment}
              label="checkMark"
              smiley="✔️"
              myState={this.state.isButtonDisabled}
            />
          </div>
        </div>
        <div className="bottom-line"></div>
      </div>
    );
  }
}

export default App;
