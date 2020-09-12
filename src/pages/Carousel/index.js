import React from "react";

class Carousel extends React.Component {
  //inicializacion
  state = {
    carouselData: []
  };

  async componentDidMount() {
    const { site } = this.props.match.params;
    const data = await fetch(
      `https://api.mercadolibre.com/sites/${site}/search?q=auriculares&limit=5`
    );
    const json = await data.json();
    this.setState({
      carouselData: json.results
    });
  }

  render() {
    const { carouselData } = this.state;
    return (
      <div>
        {carouselData.map((product) => {
          return (
            <div key={product.id}>
              <img src={product.thumbnail} />
              <p>{product.title}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Carousel;
