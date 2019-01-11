import React from 'react';
import ReactDOM from 'react-dom';

class LikeButton extends React.Component {
    styles () {
        return {
            container: {
                fontFamily: "helvetica, arial, 'hiragino kaku gothic pro', meiryo, 'ms pgothic', sans-serif",
                fontSize: 11
            },
            like: {
                display: "inline-block",
                background: "#3b5998",
                padding: "0px 5px",
                borderRadius: 2,
                color: "#ffffff",
                cursor: "pointer",
                float: "left",
                height: 20,
                lineHeight: "20px"
            },
            likeHover: {
                display: "block",
                float: "left",
                width: 6,
                height: 6,
                background: "#fafafa",
                marginLeft: "-12px",
                borderRight: 10,
                transform: "rotate(45deg)",
                WebkitTransform: "rotate(45deg)",
                marginTop: 6,
                borderLeft: "1px solid #aaa",
                borderBottom: "1px solid #aaa"
            },
            counterBefore: {
                display: "block",
                float: "left",
                width: 6,
                height: 6,
                background: "#fafafa",
                marginLeft: "-12px",
                borderRight: 10,
                transform: "rotate(45deg)",
                WebkitTransform: "rotate(45deg)",
                marginTop: 6,
                borderLeft: "1px solid #aaa",
                borderBottom: "1px solid #aaa"
            },
            counter: {
                display: "block",
                background: "#fafafa",
                boxSizing: "border-box",
                border: "1px solid #aaa",
                float: "left",
                padding: "0px 8px",
                borderRadius: 2,
                marginLeft: 8,
                height: 20,
                lineHeight: "20px"
            }
        };
    }
    render () {
        return (
            <span style={styles.container}>
                <span style={styles.like}>いいね！</span>
                <span style={styles.counter}>
                    <span style={styles.counterBefore}>{" "}</span>999
                </span>
            </span>
        );
    }
}

ReactDOM.render(
    <LikeButton />,
    document.getElementById('like-button')
  );