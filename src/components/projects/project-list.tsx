import TropicarScreenshot from "../../img/screenshots/tropicar-fullpage-screenshot.webp";
import onelyScreenshot from "../../img/screenshots/onely-fullpage-screenshot.webp";
import countryDataScreenshot from "../../img/screenshots/countrydata-fullpage-screenshot.webp";

interface Project {
  title: string;
  demoLink: string;
  githubLink: string;
  screenshot: string;
  description: JSX.Element;
  technologies: string[];
}

export const projectList: Project[] = [
  {
    title: "Tropicar",
    demoLink: "https://tropicar.netlify.app/",
    githubLink: "https://github.com/ppuhacz/tropicar",
    screenshot: TropicarScreenshot,
    description: (
      <>
        Tropicar is an exotic car rental service which lets you book your dream
        car for any duration. Car offers are fetched from the AirTable Base
        using the AirTable API. Website lets you gain more info about any of the
        car, check the price lists of each one of them and also lets you book it
        via the built-in booking form that auto-calculates how much you have to
        pay and validates if all inputs are valid.
      </>
    ),
    technologies: ["React.js", "TypeScript", "Airtable", "Sass"],
  },
  {
    title: "Onely blog clone",
    demoLink: "https://calm-parfait-2f27b9.netlify.app/",
    githubLink: "https://github.com/ppuhacz/onely-blog-clone-typescript",
    screenshot: onelyScreenshot,
    description: (
      <>
        Onely blog is a clone site of{" "}
        <a href='https://www.onely.com/blog/' className='inline-link'>
          {" "}
          onely.com/blog
        </a>{" "}
        that was made for exercise purpose only. It is connected to GraphQL CMS
        and uses rich text rendered to display formatted blog posts. Website
        lets you display all posts that can be searched via categories or
        authors. There is a page that that displays all authors who are a part
        of the team, from where you can access each author's profile page which
        includes a short Q&A and display all posts written by chosen author.
      </>
    ),
    technologies: ["React.js", "TypeScript", "GraphQL", "Sass"],
  },
  {
    title: "Country data",
    demoLink: "https://voluble-dasik-379a8b.netlify.app/",
    githubLink: "https://github.com/ppuhacz/country-data",
    screenshot: countryDataScreenshot,
    description: (
      <>
        Country data is my first React.js project that is pretty
        straight-forward. It uses axios to fetch data from the world data API,
        then iterates all of the countries that were fetched, handles any errors
        and missing information, then renders every country, each in a separate
        block. There is also a simple search function and a bar chart generated
        using given data and ChartJS library.
      </>
    ),
    technologies: ["React.js", "CSS3", "Axios"],
  },
];
