import {
  emailRegex,
  numberIntRegex,
  passwordRegex,
  textRegex,
  trimRegex,
} from "./regex";

export const handleInputChangeText = (e, setNew) => {
  const { name, value } = e.target;
  if ((value.match(textRegex) && !value.match(trimRegex)) || (value == "")) {
    setNew((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};

export const handleInputChangeNumber = (e, setNew) => {
  const { name, value } = e.target;
  if (
    value.match(numberIntRegex) ||
    (value == "" && !value.match(trimRegex))
  ) {
    setNew((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};
export const handleInputChangeTrim = (e, setNew) => {
  const { name, value } = e.target;
  if (!value.match(trimRegex) || value == "") {
    setNew((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};

export const handleSelectedChange = (e, setNew) => {
  const { name, value } = e.target;
    setNew((prev) => ({
      ...prev,
      [name]: value,
    }));
};

export const handleInputChange = (e, setNew) => {
  const { name, value } = e.target;
    setNew((prev) => ({
      ...prev,
      [name]: value,
    }));
};

export const handleInputChangeEmail = (e, setNew) => {
  const { name, value } = e.target;
  if (!value.match(emailRegex) || value == "") {
    setNew((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};

export const handleInputChangePassword = (e, setNew) => {
  const { name, value } = e.target;
  if (!value.match(passwordRegex)) {
    alert("Password must be at least 8 characters."); // Display alert with custom message
  } else {
    setNew((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};