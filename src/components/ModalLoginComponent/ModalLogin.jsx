import styled from "styled-components";

import TextField from "@material-ui/core/TextField";

const ModalLogin = () => {
  return (
    <Wrapper>
      <div className="modal-overlay show-modal">
        <div className="modal-container">
          <div className="form-container">
            <form>
              <h3>Welcome to Shop App</h3>
              <TextField
                style={{ width: "85%", marginTop: "2rem" }}
                id="email"
                name="email"
                label="Email@gmail.com"
                variant="standard"
                inputProps={{ style: { fontSize: 16 } }}
                InputLabelProps={{ style: { fontSize: 15 } }}
              />
              <TextField
                style={{ width: "85%", marginTop: "2rem" }}
                id="password"
                name="password"
                label="Password"
                type="password"
                variant="standard"
                inputProps={{ style: { fontSize: 16 } }}
                InputLabelProps={{ style: { fontSize: 15 } }}
                InputProps={{
                  endAdornment: <h5 className="forgot">Forgot?</h5>,
                }}
              />

              <button className="button">Login</button>
              <a className="create-acount">Create An Account</a>
            </form>
          </div>

          <div className="container-img">
            <h2>Shop App</h2>
            <div className="container-close-modal-btn">
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="close-modal-btn"
              >
                <path
                  d="M0.808 12C0.952 12 1.192 11.888 1.528 11.664C1.864 11.44 2.248 11.08 2.68 10.584C2.984 10.216 3.344 9.784 3.76 9.288C4.176 8.776 4.592 8.256 5.008 7.728C5.44 7.2 5.808 6.744 6.112 6.36C5.856 6.072 5.568 5.744 5.248 5.376C4.928 5.008 4.6 4.632 4.264 4.248C3.944 3.864 3.624 3.504 3.304 3.168C3 2.816 2.736 2.512 2.512 2.256C2.032 1.712 1.648 1.328 1.36 1.104C1.072 0.879999 0.888 0.767999 0.808 0.767999H5.992C5.88 0.784 5.84 0.904 5.872 1.128C5.92 1.352 6.128 1.728 6.496 2.256C6.656 2.48 6.84 2.736 7.048 3.024C7.256 3.312 7.464 3.6 7.672 3.888C7.88 4.176 8.056 4.424 8.2 4.632H8.248C8.376 4.44 8.528 4.208 8.704 3.936C8.896 3.664 9.096 3.376 9.304 3.072C9.512 2.768 9.704 2.48 9.88 2.208C10.216 1.68 10.4 1.312 10.432 1.104C10.48 0.879999 10.456 0.767999 10.36 0.767999H15.616C15.472 0.767999 15.24 0.879999 14.92 1.104C14.6 1.312 14.216 1.672 13.768 2.184C13.464 2.536 13.088 2.968 12.64 3.48C12.208 3.976 11.776 4.48 11.344 4.992C10.912 5.504 10.528 5.96 10.192 6.36C10.608 6.824 11.024 7.288 11.44 7.752C11.856 8.2 12.264 8.656 12.664 9.12C13.08 9.584 13.496 10.048 13.912 10.512C14.392 11.056 14.776 11.44 15.064 11.664C15.368 11.888 15.56 12 15.64 12H10.456C10.568 12 10.608 11.888 10.576 11.664C10.544 11.44 10.344 11.056 9.976 10.512C9.816 10.256 9.624 9.976 9.4 9.672C9.176 9.368 8.952 9.064 8.728 8.76C8.504 8.456 8.312 8.2 8.152 7.992H8.104C7.976 8.2 7.816 8.456 7.624 8.76C7.448 9.064 7.256 9.376 7.048 9.696C6.856 10.016 6.672 10.304 6.496 10.56C6.144 11.088 5.944 11.464 5.896 11.688C5.848 11.896 5.88 12 5.992 12H0.808Z"
                  fill="#626060"
                />
              </svg>
            </div>

            <svg
              width="133"
              height="150"
              viewBox="0 0 133 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="img"
            >
              <path
                d="M116.449 29.0682C116.403 28.7432 116.244 28.4444 116 28.2236C115.756 28.0028 115.442 27.8737 115.112 27.8586C114.504 27.8586 103.793 27.6167 103.793 27.6167C103.793 27.6167 97.2236 21.3206 94.7885 18.8983V149.758L133 140.323C133 140.323 116.571 29.794 116.449 29.0682ZM86.1484 18.8983C85.5648 17.0668 84.8317 15.2858 83.9565 13.573C80.7826 7.52186 76.046 4.24077 70.4461 4.24077C70.0371 4.22663 69.6281 4.26732 69.23 4.36173C69.1084 4.1198 68.8652 3.99884 68.7436 3.75692C66.3115 1.10483 63.1498 -0.104794 59.3739 0.00709599C52.0776 0.24902 44.7812 5.45039 38.929 14.7735C34.7913 21.3115 31.6326 29.543 30.7753 35.96C22.3785 38.5002 16.5384 40.3177 16.4167 40.4387C12.1606 41.7692 12.0359 41.8902 11.5525 45.8819C11.1877 48.906 0 134.13 0 134.13L91.9885 150V17.4468C91.5408 17.4636 91.0943 17.5039 90.6509 17.5678C90.6509 17.5678 88.9484 18.0516 86.1484 18.8983ZM69.3547 24.1058C64.4905 25.5573 59.1307 27.2508 53.8986 28.8263C55.3579 23.135 58.2795 17.4468 61.6875 13.706C63.0251 12.3755 64.8522 10.7999 66.9195 9.83224C68.9899 14.1778 69.4763 20.111 69.3547 24.1058ZM59.3739 4.97864C60.9068 4.93057 62.4235 5.30302 63.7578 6.0552C61.8121 7.02289 59.8634 8.59842 58.0393 10.4129C53.4152 15.3783 49.8856 23.1139 48.4264 30.5077C44.0425 31.8413 39.6617 33.1719 35.6578 34.3815C38.3209 22.7721 48.1771 5.22056 59.3739 4.97864ZM45.2585 71.5592C45.745 79.3038 66.3115 81.0002 67.5276 99.2776C68.3788 113.684 59.8603 123.488 47.5691 124.217C32.7241 125.185 24.5704 116.469 24.5704 116.469L27.7321 103.164C27.7321 103.164 35.8858 109.339 42.4586 108.855C46.7148 108.613 48.3017 105.102 48.1771 102.68C47.5691 92.5128 30.7753 93.1176 29.6809 76.4128C28.708 62.3691 37.9561 48.2074 58.4011 46.8738C66.3054 46.39 70.3275 48.3284 70.3275 48.3284L65.7035 65.7469C65.7035 65.7469 60.4714 63.3277 54.2634 63.8115C45.2585 64.4194 45.1369 70.1046 45.2585 71.5592ZM74.2219 22.6512C74.2219 19.0223 73.7355 13.8149 72.03 9.45725C77.6299 10.5459 80.3053 16.715 81.5244 20.4739C79.3334 21.0787 76.8993 21.8045 74.2219 22.6512Z"
                fill="#866C0C"
              />
            </svg>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    transition: all 0.3s linear;
    visibility: hidden;
    z-index: -1;

    .modal-container {
      background: #fff;
      border-radius: 0.25rem;
      width: 90vw;
      height: 45vh;
      max-width: 90rem;
      text-align: center;
      display: grid;
      grid-template-columns: 1fr 1fr;
      position: relative;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      .container-img {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: #faf096;
        justify-content: center;
        align-items: center;
        h2 {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 700;
          font-size: 68px;
          line-height: 80px;
          text-align: center;

          color: #000000;
        }
        .container-close-modal-btn {
          background: #ffffff;
          border: 1px solid #e4e4e4;
          box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
          width: 3rem;
          height: 3rem;
          position: absolute;
          top: 1rem;
          right: 1rem;
          border-radius: 50%;
          .close-modal-btn {
            position: absolute;
            top: 0.9rem;
            right: 0.6rem;
            font-size: 2rem;
            cursor: pointer;
          }
        }
      }

      .form-container {
        display: flex;
        justify-content: center;
        h3 {
          display: flex;
          justify-content: flex-start;
          font-weight: 700;
          font-size: 3rem;
          line-height: 2.7rem;
          margin-top: 6rem;
          margin-left: 1rem;
        }

        .button {
          width: 85%;
          height: 4.5rem;
          border: none;
          font-weight: 700;
          font-size: 24px;
          line-height: 28px;
          background: #ffd333;
          border-radius: 5px;
          margin-top: 2.25rem;
        }
        .button:hover {
          background-color: #d4bd00;
        }
        .create-acount {
          display: block;
          font-weight: 700;
          font-size: 14px;
          line-height: 16px;
          margin-top: 2rem;
          color: #646464;
          text-decoration: none;
        }
        .forgot {
          font-weight: 700;
          font-size: 12px;
          line-height: 14px;
          margin-bottom: 0;
          color: #383737;
          cursor: pointer;
        }
      }
    }
  }
  /* OPEN/CLOSE MODAL */
  .show-modal {
    visibility: visible;
    z-index: 10;
  }
  .close-modal-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: hsl(360, 67%, 44%);
    cursor: pointer;
  }
`;
export default ModalLogin;
