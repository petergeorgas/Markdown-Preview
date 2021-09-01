import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import marked from "marked";

function getMarkdownText() {
  var rawMarkup = marked(
    "# This is markdown!\n ## This is markdown!\n ### _This is markdown_!\n`monkeys can code too!`",
    {
      sanitize: true,
    }
  );
  return { __html: rawMarkup };
}

function App() {
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
                      />
                    </FloatingLabel>
                  </div>
                </Col>
                <Col md="6">
                  <div
                    className="markdown-holder"
                    id="preview"
                    dangerouslySetInnerHTML={getMarkdownText()}
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

export default App;
