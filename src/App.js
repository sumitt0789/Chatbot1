import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [showChatbox, setshowChatbox] = useState(false);

  const showChatBox = () => {
    setshowChatbox(!showChatbox);
  };
  return (
    <div className="chatcontainer">
      <div
        className="chatbox"
        style={{ display: !showChatbox ? "none" : "block" }}
      >
        <div className="nav"></div>
        <div className="section">
          <div className="userchatsection">
            <div className="userchatarea">
              <span className="userchat">
                <p>Confirm</p>
              </span>
              <div className="boldicon">
                <span className="icontop"></span>
                <span className="icon"></span>
              </div>
            </div>
          </div>
          <div className="botchatsection">
            <div className="botchatarea">
              <div className="boldicon">
                <span className="icontop"></span>
                <span className="icon"></span>
              </div>
              <div className="botchatld">
                <span className="botchat">
                  <p>
                    Hey,your mobile number is not registered with the bank.We
                    had to cancel your transaction because we could't send your
                    an OTP.click here to visit your nearest axis bank branch and
                    update your mobile number.
                  </p>
                </span>
                <div className="likedislike">
                  <button>
                    <i class="fa fa-thumbs-up"></i>
                  </button>
                  <button>
                    <i class="fa fa-thumbs-down"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="userchatsection">
            <div className="userchatarea">
              <span className="userchat">
                <p>Confirm</p>
              </span>
              <div className="boldicon">
                <span className="icontop"></span>
                <span className="icon"></span>
              </div>
            </div>
          </div>
          <div className="botchatsection">
            <div className="botchatarea">
              <div className="boldicon">
                <span className="icontop"></span>
                <span className="icon"></span>
              </div>
              <div className="botchatld">
                <span className="botchat">
                  <p>
                    Hey,your mobile number is not registered with the bank.We
                    had to cancel your transaction because we could't send your
                    an OTP.click here to visit your nearest axis bank branch and
                    update your mobile number.
                  </p>
                </span>
                <div className="likedislike">
                  <button>
                    <i class="fa fa-thumbs-up"></i>
                  </button>
                  <button>
                    <i class="fa fa-thumbs-down"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="userchatsection">
            <div className="userchatarea">
              <span className="userchat">
                <p>Confirm</p>
              </span>
              <div className="boldicon">
                <span className="icontop"></span>
                <span className="icon"></span>
              </div>
            </div>
          </div>
          <div className="botchatsection">
            <div className="botchatarea">
              <div className="boldicon">
                <span className="icontop"></span>
                <span className="icon"></span>
              </div>
              <div className="botchatld">
                <span className="botchat">
                  <p>
                    Hey,your mobile number is not registered with the bank.We
                    had to cancel your transaction because we could't send your
                    an OTP.click here to visit your nearest axis bank branch and
                    update your mobile number.
                  </p>
                </span>
                <div className="likedislike">
                  <button>
                    <i class="fa fa-thumbs-up"></i>
                  </button>
                  <button>
                    <i class="fa fa-thumbs-down"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="textarea">
          <div className="inputsection">
            <input className="inputtext" type="text" placeholder="Type Here" />{" "}
            <i class="mic fa fa-microphone"></i>
          </div>
          <div className="langsection">
            <button>EN</button>
            <button>HI</button>
          </div>
        </div>
      </div>
      <div className="chattogelediv">
        <button className="chattogele" onClick={showChatBox}>
          Chat
        </button>
      </div>
    </div>
  );
};

export default App;
