import React from "react";
// import "react-vertical-timeline-component/style.min.css";
import "./Coding.css";
const Coding = () => {
  return (
    <>
      <div className="coding" id="coding">
        <div className="container coding-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Coding Profiles
          </h2>
          <hr />
          <div className="table">
            <div className="col">
              <div className="title">Platform</div>
              <div className="element">LeetCode</div>
              <div className="element">GeeksForGeeks</div>
              <div className="element">Codechef</div>
              <div className="element">Codeforces</div>
            </div>
            <div className="col">
              <div className="title">Description</div>
              <div className="element">
                Rated 2000+ in LC Contest (Solved 850+ Problems)
              </div>
              <div className="element">
                Rank #1 at Insitute (Solved 1000+ Problems)
              </div>
              <div className="element">Rated 1760+ (3* at CC)</div>
              <div className="element">Rated 1487 (Specialist at CF)</div>
            </div>
            <div className="col">
              <div className="title">Profile Link</div>
              <div className="element">
                <button className="links">
                  <a href="https://leetcode.com/krishna_6431/">Open Profile</a>
                </button>
              </div>
              <div className="element">
                <button className="links">
                  <a href="https://auth.geeksforgeeks.org/user/krishna_6431/">
                    Open Profile
                  </a>
                </button>
              </div>
              <div className="element">
                <button className="links">
                  <a href="https://www.codechef.com/users/mr_krishna">
                    Open Profile
                  </a>
                </button>
              </div>
              <div className="element">
                <button className="links">
                  <a href="https://codeforces.com/profile/mr_krishna">
                    Open Profile
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coding;
