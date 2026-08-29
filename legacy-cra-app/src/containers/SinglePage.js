import React, { Component } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import TopButton from "../components/topButton/TopButton";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import ExperienceAccordion from "./experienceAccordion/ExperienceAccordion.js";
import Educations from "./education/Educations";
import Certifications from "./certifications/Certifications";
import CompetitiveSites from "../components/competitiveSites/CompetitiveSites";
import GithubRepoCard from "../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../components/publicationsCard/PublicationCard";
import Button from "../components/button/Button";
import ResumeSection from "../pages/resume/ResumeSection";
import Organizations from "./organizations/Organizations";
import OpensourceCharts from "./opensourceCharts/OpensourceCharts";
import PullRequests from "./pullRequests/PullRequests";
import Issues from "./issues/Issues";
import SocialMedia from "../components/socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import {
  greeting,
  experience,
  competitiveSites,
  certifications,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
} from "../portfolio.js";
import ProjectsData from "../shared/opensource/projects.json";
import "../pages/experience/Experience.css";
import "../pages/education/EducationComponent.css";
import "../pages/projects/Projects.css";
import "../pages/opensource/Opensource.css";
import "../pages/contact/ContactComponent.css";
import ExperienceImg from "../pages/experience/ExperienceImg";
import EducationImg from "../pages/education/EducationImg";
import ProjectsImg from "../pages/projects/ProjectsImg";
import BlogsImg from "../pages/contact/BlogsImg";
import AddressImg from "../pages/contact/AddressImg";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

export default class SinglePage extends Component {
  componentDidMount() {
    document.documentElement.style.setProperty(
      "--scrollbar-color",
      this.props.theme.imageHighlight
    );
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.theme &&
      this.props.theme &&
      prevProps.theme.imageHighlight !== this.props.theme.imageHighlight
    ) {
      document.documentElement.style.setProperty(
        "--scrollbar-color",
        this.props.theme.imageHighlight
      );
    }
  }

  render() {
    const theme = this.props.theme;
    return (
      <div className="single-page">
        <Header theme={theme} />

        {/* ---------- Home / Greeting ---------- */}
        <section id="home">
          <Greeting theme={theme} />
        </section>

        {/* ---------- Skills ---------- */}
        <section id="skills">
          <Skills theme={theme} />
        </section>

        {/* ---------- Experience (skipped entirely if no sections are set) ---------- */}
        {Array.isArray(experience.sections) && experience.sections.length > 0 && (
          <section id="experience" className="experience-main">
            <div className="basic-experience">
              <Fade bottom duration={2000} distance="40px">
                <div className="experience-heading-div">
                  <div className="experience-heading-img-div">
                    <ExperienceImg theme={theme} />
                  </div>
                  <div className="experience-heading-text-div">
                    <h1
                      className="experience-heading-text"
                      style={{ color: theme.text }}
                    >
                      {experience.title}
                    </h1>
                    <h3
                      className="experience-heading-sub-text"
                      style={{ color: theme.text }}
                    >
                      {experience["subtitle"]}
                    </h3>
                    <p
                      className="experience-header-detail-text subTitle"
                      style={{ color: theme.secondaryText }}
                    >
                      {experience["description"]}
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
            <ExperienceAccordion sections={experience.sections} theme={theme} />
          </section>
        )}

        {/* ---------- Education ---------- */}
        <section id="education" className="education-main">
          <div className="basic-education">
            <Fade bottom duration={2000} distance="40px">
              <div className="heading-div">
                <div className="heading-img-div">
                  <EducationImg theme={theme} />
                </div>
                <div className="heading-text-div">
                  <h1 className="heading-text" style={{ color: theme.text }}>
                    Education
                  </h1>
                  <h3
                    className="heading-sub-text"
                    style={{ color: theme.text }}
                  >
                    Basic Qualification and Certifcations
                  </h3>
                  <CompetitiveSites logos={competitiveSites.competitiveSites} />
                </div>
              </div>
            </Fade>
            <Educations theme={theme} />
            {certifications.certifications.length > 0 ? (
              <Certifications theme={theme} />
            ) : null}
          </div>
        </section>

        {/* ---------- Projects ---------- */}
        <section id="projects" className="projects-main">
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="projects-heading-div">
                <div className="projects-heading-img-div">
                  <ProjectsImg theme={theme} />
                </div>
                <div className="projects-heading-text-div">
                  <h1
                    className="projects-heading-text"
                    style={{ color: theme.text }}
                  >
                    {projectsHeader.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {projectsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
          <div className="repo-cards-div-main">
            {ProjectsData.data.map((repo, i) => {
              return <GithubRepoCard key={i} repo={repo} theme={theme} />;
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={greeting.githubProfile}
            newTab={true}
            theme={theme}
          />

          {publications.data.filter((pub) => pub && pub.name).length > 0 ? (
            <div className="basic-projects">
              <Fade bottom duration={2000} distance="40px">
                <div className="publications-heading-div">
                  <div className="publications-heading-text-div">
                    <h1
                      className="publications-heading-text"
                      style={{ color: theme.text }}
                    >
                      {publicationsHeader.title}
                    </h1>
                    <p
                      className="projects-header-detail-text subTitle"
                      style={{ color: theme.secondaryText }}
                    >
                      {publicationsHeader["description"]}
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          ) : null}
          <div className="repo-cards-div-main">
            {publications.data
              .filter((pub) => pub && pub.name)
              .map((pub, i) => {
                return <PublicationCard key={i} pub={pub} theme={theme} />;
              })}
          </div>
        </section>

        {/* ---------- Open Source ---------- */}
        <section id="opensource" className="opensource-main">
          <Organizations theme={theme} />
          <OpensourceCharts theme={theme} />
          <PullRequests theme={theme} />
          <Issues theme={theme} />
        </section>

        {/* ---------- Resume ---------- */}
        <section id="resume" className="resume-main">
          <ResumeSection theme={theme} />
        </section>

        {/* ---------- Contact ---------- */}
        <section id="contact" className="contact-main">
          <div className="basic-contact">
            <Fade bottom duration={1000} distance="40px">
              <div className="contact-heading-div">
                {ContactData["profile_image_path"] && (
                  <div className="contact-heading-img-div">
                    <img
                      src={require(`../assets/images/${ContactData["profile_image_path"]}`)}
                      alt=""
                    />
                  </div>
                )}
                <div className="contact-heading-text-div">
                  <h1
                    className="contact-heading-text"
                    style={{ color: theme.text }}
                  >
                    {ContactData["title"] || "Get in Touch"}
                  </h1>
                  <p
                    className="contact-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {ContactData["description"] ||
                      "Feel free to reach out through any of the channels below."}
                  </p>
                  <SocialMedia theme={theme} />
                  <div className="resume-btn-div">
                    <Button text="See My Resume" href="#resume" theme={theme} />
                  </div>
                </div>
              </div>
            </Fade>

            {blogSection["title"] && (
              <Fade bottom duration={1000} distance="40px">
                <div className="blog-heading-div">
                  <div className="blog-heading-text-div">
                    <h1
                      className="blog-heading-text"
                      style={{ color: theme.text }}
                    >
                      {blogSection["title"]}
                    </h1>
                    {blogSection["subtitle"] && (
                      <p
                        className="blog-header-detail-text subTitle"
                        style={{ color: theme.secondaryText }}
                      >
                        {blogSection["subtitle"]}
                      </p>
                    )}
                    {blogSection.link && (
                      <div className="blogsite-btn-div">
                        <Button
                          text="Visit My Blogsite"
                          newTab={true}
                          href={blogSection.link}
                          theme={theme}
                        />
                      </div>
                    )}
                  </div>
                  <div className="blog-heading-img-div">
                    <BlogsImg theme={theme} />
                  </div>
                </div>
              </Fade>
            )}

            {(addressSection["title"] || phoneSection["title"]) && (
              <Fade bottom duration={1000} distance="40px">
                <div className="address-heading-div">
                  <div className="contact-heading-img-div">
                    <AddressImg theme={theme} />
                  </div>
                  <div className="address-heading-text-div">
                    {addressSection["title"] && (
                      <>
                        <h1
                          className="address-heading-text"
                          style={{ color: theme.text }}
                        >
                          {addressSection["title"]}
                        </h1>
                        <p
                          className="contact-header-detail-text subTitle"
                          style={{ color: theme.secondaryText }}
                        >
                          {addressSection["subtitle"]}
                        </p>
                      </>
                    )}
                    {phoneSection["title"] && (
                      <>
                        <h1
                          className="address-heading-text"
                          style={{ color: theme.text }}
                        >
                          {phoneSection["title"]}
                        </h1>
                        <p
                          className="contact-header-detail-text subTitle"
                          style={{ color: theme.secondaryText }}
                        >
                          {phoneSection["subtitle"]}
                        </p>
                      </>
                    )}
                    {addressSection.location_map_link && (
                      <div className="address-btn-div">
                        <Button
                          text="Visit on Google Maps"
                          newTab={true}
                          href={addressSection.location_map_link}
                          theme={theme}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </Fade>
            )}
          </div>
        </section>

        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}
