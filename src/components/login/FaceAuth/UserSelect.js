import React, { useState } from "react";
import User from "./User";
import { RadioGroup } from "@headlessui/react";
import { Link } from "react-router-dom";
import "./UserSelect.css";

const accounts = [
  {
    id: "374ed1e4-481b-4074-a26e-6137657c6e35",
    fullName: "AmarNath Sir",
    picture: "374ed1e4-481b-4074-a26e-6137657c6e35/1.jpg",
  },
  {
    id: "43332f46-89a4-435c-880e-4d72bb51149a",
    fullName: "Chinu Maam",
    picture: "43332f46-89a4-435c-880e-4d72bb51149a/1.jpg",
  },
  {
    id: "b8476d8d-bd7e-405f-aa66-9a22a9727930",
    fullName: "Utkarsh Sir",
    picture: "/b8476d8d-bd7e-405f-aa66-9a22a9727930/1.jpg",
  },
  {
    id: "88421e2c-ca7a-4332-815f-6e12824e2d05",
    fullName: "Jaspal Sir",
    picture: "/88421e2c-ca7a-4332-815f-6e12824e2d05/1.jpg",
  },
  {
    id: "0c2f5599-9296-4f94-97d5-e773043188ae",
    fullName: "Tofique",
    picture: "/0c2f5599-9296-4f94-97d5-e773043188ae/1.jpg",
  },
];

function UserSelect() {
  const [selected, setSelected] = useState(accounts[0]);
  const [customUser, setCustomUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className="container">
      <h1 className="title">Select User to Log in</h1>
      <div className="content">
        <RadioGroup value={selected} onChange={setSelected}>
          <div className="radio-group">
            {accounts.map((account) => (
              <User key={account.id} user={account} />
            ))}
            {customUser && (
              <div className="custom-user">
                <User key={customUser.id} user={customUser} type="CUSTOM" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="remove-icon"
                  onClick={() => {
                    setCustomUser(null);
                    selected?.type === "CUSTOM" && setSelected(accounts[0]);
                  }}
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            )}
          </div>
        </RadioGroup>
        {!customUser && (
          <div className="upload-section">
            <label htmlFor="dropzone-file" className="dropzone">
              <div className="dropzone-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="upload-icon"
                >
                  <path d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                </svg>
                <p className="upload-instructions">Click to upload new image</p>
                <p className="file-types">PNG, JPG or JPEG</p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                accept=".png, .jpg, .jpeg"
                className="file-input"
                onChange={async (e) => {
                  const files = e.target.files;
                  if (files === null || files.length === 0) {
                    setErrorMessage("No files wait for import.");
                    return;
                  }
                  let file = files[0];
                  let name = file.name;
                  let suffixArr = name.split("."),
                    suffix = suffixArr[suffixArr.length - 1];
                  if (
                    suffix !== "png" &&
                    suffix !== "jpg" &&
                    suffix !== "jpeg"
                  ) {
                    setErrorMessage("Only support png jpg or jpeg files.");
                    return;
                  }

                  const base64 = await convertBase64(file);

                  const user = {
                    id: "custom",
                    fullName: name,
                    type: "CUSTOM",
                    picture: base64,
                  };

                  setCustomUser(user);
                  setSelected(user);
                }}
              />
            </label>
            {errorMessage && (
              <p className="error-message">{errorMessage}</p>
            )}
          </div>
        )}
        <Link
          to="/facescan"
          state={{ account: selected }}
          className="continue-btn"
        >
          Continue
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="continue-icon"
          >
            <path d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default UserSelect;
