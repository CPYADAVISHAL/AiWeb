import React from "react";
import "./User.css";
import { RadioGroup } from "@headlessui/react";

function User({ user, type }) {
  return (
    <RadioGroup.Option
      key={user.id}
      value={user}
      className={({ checked }) =>
        `radio-option ${checked ? "radio-option-checked" : "radio-option-unchecked"}`
      }
    >
      {({ checked }) => (
        <div className="radio-option-container">
          <div className="radio-option-content">
            <div className="radio-option-text">
              <RadioGroup.Label
                as="div"
                className={`flex items-center gap-x-6 ${
                  checked
                    ? "radio-option-text-checked"
                    : "radio-option-text-unchecked"
                }`}
              >
                <img
                  className="radio-option-image"
                  src={
                    type === "CUSTOM"
                      ? user.picture
                      : `/temp-accounts/${user.picture}`
                  }
                  alt={user.fullName}
                />
                {user.fullName}
              </RadioGroup.Label>
            </div>
          </div>
          {checked && (
            <div className="check-icon">
              <CheckIcon className="check-icon" />
            </div>
          )}
        </div>
      )}
    </RadioGroup.Option>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} className="circle" />
      <path d="M7 13l3 3 7-7" className="check-path" />
    </svg>
  );
}

export default User;
