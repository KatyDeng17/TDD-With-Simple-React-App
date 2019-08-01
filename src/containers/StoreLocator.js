import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Map from "../components/Map";
import mapChooser from "../components/mapChooser";
import axios from "axios";

class StoreLocator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMap: "Portland.png",
      shops: []
    };
  }
  async componentDidMount() {
    let response = await axios.get("http://localhost:3000/data/shops.json");
    this.setState({
      shops: response.data.shops
    });
  }
  chooseMap = event => {
    this.setState({ currentMap: mapChooser(event.target.value) });
  };

  render() {
    let storeButton = this.state.shops.map((shop, index) => {
      return (
        <Button
          handleClick={this.chooseMap}
          key={index}
          location={shop.location}
        />
      );
    });
    return (
      <div>
        <Header />
        <div>{storeButton}</div>
        <Map imagename={this.state.currentMap} />
      </div>
    );
  }
}

export default StoreLocator;
