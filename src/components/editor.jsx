import React, { Component } from "react";
import pushid from 'pushid';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';

class CodeEditor extends Component{
  constructor() {
    super();
    this.state = {
      id: '',
      html: '<p>asdsad</p>adsadsdas\n<div>asda</div>',
      css: '',
      js: '',
    };
  }

  componentDidUpdate() {
    this.runCode();
  }

  componentDidMount() {
    this.setState({
      id: pushid(),
    });
  }

  runCode = () => {
    const { html, css, js } = this.state;

    const iframe = this.refs.iframe;
    const document = iframe.contentDocument;
    const documentContents = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${html}

        <script type="text/javascript">
          ${js}
        </script>
      </body>
      </html>
    `;

    document.open();
    document.write(documentContents);
    document.close();
  };

  render() {
    const { html } = this.state;
    //const { html, js, css } = this.state;
    const codeMirrorOptions = {
      theme: 'material',
      lineNumbers: true,
      scrollbarStyle: null,
      lineWrapping: true,
    };

    return (
      <div style={{display:'flex', height:'100%'}}>
        <section className="playground">
          <div className="editor-head">
            <ul className="editor-tab-wrapper">
              <li className="editor-tab active" style={{maxWidth:"100%"}}>
                <div className="editor-header" style={{whiteSpace: 'nowrap'}}>
                  <FontAwesomeIcon icon={faFileCode} size={'xs'} /><span style={{marginLeft:'8px', fontSize:'12px'}}>index.html</span>
                </div>
              </li>
              <li className="editor-tab" style={{maxWidth:"100%"}}>
                <div className="editor-header" style={{whiteSpace: 'nowrap'}}>
                  <FontAwesomeIcon icon={faFileCode} size={'xs'} /><span style={{marginLeft:'8px', fontSize:'12px'}}>style.css</span>
                </div>
              </li>
            </ul>
            <ul className="editor-head__menu">
              <li>
                <div className="editor-config"><div className="editor-config__btn"><i className="fa fa-cog u-pr5"></i></div></div>
              </li>
            </ul>
          </div>
          
          <div className="code-editor html-code">
            <CodeMirror
              value={html}
              options={{
                mode: 'htmlmixed',
                ...codeMirrorOptions,
              }}
              onBeforeChange={(editor, data, html) => {
                this.setState({ html });
              }}
            />
          </div>
          {/*
          <div className="code-editor css-code">
            <div className="editor-header">CSS</div>
            <CodeMirror
              value={css}
              options={{
                mode: 'css',
                ...codeMirrorOptions,
              }}
              onBeforeChange={(editor, data, css) => {
                this.setState({ css });
              }}
            />
          </div>
          <div className="code-editor js-code">
            <div className="editor-header">JavaScript</div>
            <CodeMirror
              value={js}
              options={{
                mode: 'javascript',
                ...codeMirrorOptions,
              }}
              onBeforeChange={(editor, data, js) => {
                this.setState({ js });
              }}
            />
          </div>
            */}
        </section>
        <section className="result">
          <iframe title="result" className="iframe" ref="iframe" />
        </section>
      </div>
    );
  }
}

export default CodeEditor;