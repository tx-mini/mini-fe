import React from "react";
import PropTypes from "prop-types";

const rootPath = "http://120.78.82.23:8847";

export default class QQ extends React.Component {
  componentDidMount() {
    const { onData } = this.props;

    this.img.onload = () => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", `${rootPath}/selfInfo`, true);
      xhr.withCredentials = true;
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          onData(JSON.parse(xhr.responseText).result);
        }
      };
      xhr.send(null);
    };
  }

  render() {
    const { style } = this.props;
    return (
      <img
        style={style}
        ref={img => {
          this.img = img;
        }}
        src={`${rootPath}/qrcode.png`}
        alt="扫描二维码"
      />
    );
  }
}

QQ.propTypes = {
  onData: PropTypes.func
};

QQ.defaultProps = {
  onData: console.log
};
