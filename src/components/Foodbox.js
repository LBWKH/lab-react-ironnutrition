import React from 'react';

class Foodbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      calories: props.calories,
      image: props.image,
      quantity: 1,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.state.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.state.name}</strong> <br />
                <small>{this.state.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={this.state.quantity}
                  onChange={this.handleChange}
                  name="quantity"
                />
              </div>
              <div className="control">
                <button
                  onClick={() =>
                    this.props.onClick(
                      this.state.name,
                      this.state.calories,
                      this.state.quantity
                    )
                  }
                  className="button is-info"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
export default Foodbox;
