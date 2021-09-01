import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import marked from "marked";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();

    this.handleChange = this.handleChange.bind(this);
  }

  getMarkdownText(md) {
    var rawMarkup = marked(md, {
      sanitize: true,
    });
    return { __html: rawMarkup };
  }

  getInitialState() {
    return {
      __html: this.getMarkdownText(
        "# This is Markdown!\n ## Type some code in the editor!\n[What is Markdown?](https://www.markdownguide.org/basic-syntax/)\n" +
          "\n`you can even write inline code!`\n\n or a block of code:\n" +
          "```" +
          `getMarkdownText(md) {
            var rawMarkup = marked(md, {
              sanitize: true,
            });
            return { __html: rawMarkup };
          }` +
          "```\n" +
          "\n* Here's a list item! \n* Have another!" +
          "\n> **Here's a blockquote with bolded text**\n" +
          "\n![A penguin](https://d33wubrfki0l68.cloudfront.net/e7ed9fe4bafe46e275c807d63591f85f9ab246ba/e2d28/assets/images/tux.png)"
      ),
    };
  }

  handleChange(event) {
    event.preventDefault();
    const target = event.target;
    const value = target.value;

    this.setState({
      __html: this.getMarkdownText(value),
    });
  }

  render() {
    return (
      <div className="App">
        <div className="surround">
          <div className="surroundtwo">
            <div className="boxy border border-info">
              <Container className="my-auto" id="textarea-holder">
                <Row>
                  <Col md="6">
                    <div className="markdown-box">
                      <FloatingLabel controlId="editor" label="Markdown">
                        <Form.Control
                          as="textarea"
                          placeholder="Enter your Markdown here"
                          style={{ height: "500px" }}
                          onChange={this.handleChange}
                        />
                      </FloatingLabel>
                    </div>
                  </Col>
                  <Col md="6">
                    <div
                      className="markdown-holder"
                      id="preview"
                      dangerouslySetInnerHTML={this.state.__html}
                    ></div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
