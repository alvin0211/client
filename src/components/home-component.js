import React from "react";
import { useNavigate } from "react-router-dom";
const HomeComponent = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/profile");
  };

  return (
    <main>
      <div class="container py-4">
        <div class="p-5 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">UP Academy</h1>
            <p class="col-md-8 fs-4">
              Since its establishment in early 2018, UP Academy has been
              committed to providing course toturial for Bechlor degree students
              and Master degrese students.
              <br />
              UP academy has been making continuous efforts and progress. As of
              July 2019, there are nearly 500 students in UP Academy, with a
              total of more than 1,000 hours of classes per semester. <br />
              After being accredited by the Australian National Unversity, UP
              Academy successfully moved into the ANU Kambri Centre, becoming
              the only education brand recognized by ANU and able to set up a
              physical store on campus.
              <br />
              Due to the COVID19, our physical store was officially and
              permanently closed in 2023. We are sorry for the inconvenience. If
              you have any questions, please send email to
              alvinzhenzhangtang@gmail.com
            </p>
            <button class="btn btn-primary btn-lg" type="button">
              See where it located.
            </button>
          </div>
        </div>

        <div class="row align-items-md-stretch">
          <div class="col-md-6">
            <div class="h-100 p-5 text-white bg-dark rounded-3">
              <h2>As a student</h2>
              <p>Students can register in courses they like.</p>
              <button
                onClick={handleLogin}
                class="btn btn-outline-light"
                type="button"
              >
                Login or Register Now
              </button>
            </div>
          </div>
          <div class="col-md-6">
            <div class="h-100 p-5 bg-light border rounded-3">
              <h2>As an Instructor</h2>
              <p>
                You can become an instructor by registering as one, and start
                making online courses.
              </p>
              <button
                onClick={handleLogin}
                class="btn btn-outline-secondary"
                type="button"
              >
                Login or Register Now
              </button>
            </div>
          </div>
        </div>

        <footer class="pt-3 mt-4 text-muted border-top">
          &copy; 2024 alvinzhenzhangtang@gmail.com
        </footer>
      </div>
    </main>
  );
};

export default HomeComponent;
