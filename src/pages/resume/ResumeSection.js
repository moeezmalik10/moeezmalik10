import React, { Component } from "react";
import { Fade } from "react-reveal";
import "./Resume.css";
import myResumePdf from "../../assets/docs/Ashutosh_Hathidara_Resume_ML.pdf";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";

export default class ResumeSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="resume-view">
        <Fade bottom duration={2000} distance="40px">
          <div>
            <div className="resume-heading-div">
              <h1 className="resume-heading-text" style={{ color: theme.text }}>
                Resume
              </h1>
            </div>

            <div className="download-btn">
              <Button
                text="📃 Download Resume"
                newTab={true}
                href={greeting.resumeLink}
                theme={theme}
              />
            </div>

            <div className="resume-page">
              <embed
                src={myResumePdf}
                type="application/pdf"
                className="resume-embed"
                title="Resume"
              />
              <p className="resume-fallback-text" style={{ color: theme.secondaryText }}>
                Can't see the preview above? Use the download button instead.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}
