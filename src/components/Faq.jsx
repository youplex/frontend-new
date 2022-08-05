import React from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

class Faq extends React.Component {
  render() {
    const title = "Frequently Asked Questions";
    const hiddenTexts = [
      {
        label: "Does this help me learn better?",
        value:
          "We believe this will help you focus more on your learning by providing a distraction free environment.",
      },
      {
        label: "How to combine the playlists?",
        value:
          "All you need to do is login with your Google Account and add the playlist links. You can then customise them accordingly.",
      },
      {
        label: "How to get customised notifications?",
        value:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, enim?",
      },
      {
        label: "Are there any charges for this?",
        value:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, enim?",
      },
    ];
    return (
      <div id="faq">
        <footer className=" bg-faq justify-center items-center mt-10 ">
          {/* Flex Container */}
          <div className="justify-center items-center pt-10 mx-auto text-4xl text-white font-bold text-center md:text-3xl w-3/5">
            <Header title={title} />
          </div>

          <div className="container justify-between px-6 py-10 mx-auto text-white space-y-8 md:flex-row md:space-y-0 max-w-5xl">
            <Accordion hiddenTexts={hiddenTexts} />
          </div>
        </footer>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

class Accordion extends React.Component {
  render() {
    return (
      <div className="accordion">
        {this.props.hiddenTexts.map((hiddenText) => (
          <AccordionItem key={hiddenText.label} hiddenText={hiddenText} />
        ))}
      </div>
    );
  }
}

class AccordionItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }
  render() {
    const activeStatus = this.state.visibility ? "active" : "";

    return (
      <div>
        <button
          className="accordion__button"
          onClick={this.handleToggleVisibility}
        >
          {this.props.hiddenText.label}
          <span>
            {this.state.visibility ? (
              <HiChevronUp size={22} />
            ) : (
              <HiChevronDown size={22} />
            )}
          </span>
        </button>
        <p className={`accordion__content ${activeStatus}`}>
          {this.props.hiddenText.value}
        </p>
      </div>
    );
  }
}

export default Faq;
