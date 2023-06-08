import * as React from 'react';
import './Welcome.css';


const DirectorMessage = () => {
  return (
    <div id="director-message" className="containerw mx-auto my-10">
      <div className="flexw flex-colw space-y-6 rounded-lg bg-light-purple overflow-hidden shadow-md md:flex-row md:space-y-0 md:space-x-6">
        <div className="basis-4/12">
          <img src="https://v1.nitj.ac.in/images/admin_page/Director/Director.jpg" className="basis-4/12 h-full w-full object-cover" alt="Director's Image" />
        </div>
        <div id="content" className="flexw flex-colw basis-8/12 space-y-4 p-6">
          <div className="flexw space-x-4 items-center justify-start groupw">
            <h1 className="text-4xl font-bold text-accent">
              HOD's <span className="text-dark-purple">Message</span>
            </h1>
          </div>
          <h2 className="text-xl font-medium text-dark-purple">
          Dr. Dilip Singh Sisodia
          </h2>
          <p >
          Dr. Dilip Singh Sisodia is Working as Associate Professor at the Department of Computer Science and Engineering, National Institute of Technology Raipur, Raipur, India.Dr. Sisodia have expertise in various fields of computer science including Artificial Intelligence, Machine Learning, Soft Computing, Computation intelligence, Theoretical computer science and many more.
Dr. Sisodia has contributed to more than 100 refereed articles, including 78 papers in Web of Science/Scopus indexed journals, his conference proceedings and book chapters have been published by reputed international publishers.Some notable publication destinations of Dr. Sisodia are IEEE Transactions on Systems: Man, and Cybernetics Systems, Knowledge base systems, Expert system, and applications, Information Sciences and more. He has also shared his work at various international conferences in countries like Israel, Spain, Singapore, Thailand, and more.
          </p>
          </div>
        </div>
      </div>
  );
};

export default DirectorMessage;
